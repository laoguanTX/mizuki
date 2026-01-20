---
title: Taichi的数据类型
published: 2025-09-02
category: ["程设计科", "编程语言"]
tags: ["Taichi", "计算机图形学"]
alias: "taichi-02"
---


## 一、Taichi的架构初始化

Taichi支持多种硬件后端，初始化时通过`ti.init(arch=...)`指定运行平台。

```python
import taichi as ti
ti.init(arch = ti.cuda)  # 指定CUDA后端, 用于NVIDIA GPU加速
```

- `ti.cpu`：在CPU上运行。
- `ti.gpu`：在GPU上运行，自动选择CUDA或OpenGL/Metal。
- `ti.cuda`：显式选择CUDA后端。
- `ti.arm`：ARM架构支持。
- `ti.x64`：x86架构支持。

## 二、变量作用域：Python域与Taichi域

Taichi `@ti.kernel`修饰的函数与普通Python函数变量作用域是**独立的**。

### 代码示例

```python
d = 1

def foo():
    d_python = d
    print("d_python:", d_python)

@ti.kernel
def bar():
    d_taichi = d
    print("d_taichi:", d_taichi)

d = d + 1
foo() # 输出2
bar() # 输出2
d = d + 1
foo() # 输出3
bar() # 输出2
```
- Python域（`foo`）每次访问的都是最新的`d`值。
- Taichi域（`bar`）在`kernel`编译时捕获`d`的值，后续不会自动同步Python域的变化。

## 三、Taichi的数据类型

Taichi支持丰富的数据类型，包括有符号/无符号整数、浮点数等。

| 类型类别      | Taichi类型         |
|:-------------:|:-----------------:|
| 有符号整型    | `ti.i8`, `ti.i16`, `ti.i32`, `ti.i64` |
| 无符号整型    | `ti.u8`, `ti.u16`, `ti.u32`, `ti.u64` |
| 浮点型        | `ti.f16`, `ti.f32`, `ti.f64`          |

### 1、默认数据类型

- 整型：`ti.i32`
- 浮点型：`ti.f32`

可以通过如下语句修改：

```python
ti.init(default_ip=ti.i32, default_fp=ti.f32)
```

### 2、类型转换规则

- 不同类型运算，结果类型自动提升。例如：
  - $ \mathrm{i32} + \mathrm{f32} = \mathrm{f32} $
  - $ \mathrm{i32} + \mathrm{i64} = \mathrm{i64} $

## 四、隐式类型转换

### 1、Python中的类型转换

```python
def foo():
    a = 1
    a = 2.7
    print(a)   # 输出2.7
foo()
```
Python的变量类型是动态的。

### 2、Taichi中的类型转换

```python
@ti.kernel
def foo():
    a = 1
    a = 2.7
    print(a)   # 输出2
foo()
```
> **原因：**
> 在Taichi kernel中，`a`被推断为整型，后续赋值会将浮点部分截断。

### 3、强制类型转换（cast）

```python
@ti.kernel
def foo():
    a = 1.7
    b = ti.cast(a, ti.i32)   # 强制类型转换为整型
    c = ti.cast(b, ti.f32)   # 再转换回浮点型
    print("b = ", b)         # 输出b = 1
    print("c = ", c)         # 输出c = 1.0
foo()
```

## 五、向量、矩阵、结构体类型

Taichi支持用户自定义向量、矩阵和结构体等类型。

### 1、类型自定义方式

使用`types`模块自定义新的数据类型

```python
vec3f = ti.types.vector(3, ti.f32)                 # 三维浮点向量
mat2f = ti.types.matrix(2, 2, ti.f32)              # 2x2浮点矩阵
ray = ti.types.struct(ro=vec3f, rd=vec3f, l=ti.f32) # 光线结构体
```

### 2、Taichi内置类型

太极内置的向量、矩阵和结构体类型为：

- `ti.Vector`
- `ti.Matrix`
- `ti.Struct`

### 3、示例

```python
@ti.kernel
def foo():
    a = vec3f(0.0)
    print(a)                 # [0.0, 0.0, 0.0]
    b = vec3f(0.0, 1.0, 0.0)
    print(b)                 # [0.0, 1.0, 0.0]
    C = mat2f([[0.0, 1.0], [2.0, 3.0]])
    print(C)                 # [[0.0, 1.0], [2.0, 3.0]]
    r = ray(ro=a, rd=b, l=1)
    print(r.ro)              # [0.0, 0.0, 0.0]
    print(r.rd)              # [0.0, 1.0, 0.0]
    print("r =", r)
```

### 4、向量、矩阵下标访问

```python
@ti.kernel
def foo():
    a = ti.Vector([0.0, 1.0, 0.0])
    print(a[0])              # 0.0
    print(a[1])              # 1.0
    print(a[2])              # 0.0

    B = ti.Matrix([[0.0, 1.0], [2.0, 3.0]])
    print(B[0, 0])           # 0.0
    print(B[0, 1])           # 1.0
    print(B[1, 0])           # 2.0
    print(B[1, 1])           # 3.0
```

## 六、Taichi的场（Field）类型

`ti.field`是一个全局的N维的包含了各种元素的向量

1. 全局：可以被太极域和python域访问。

2. N维：可以是0维（标量）、1维（向量）、2维（矩阵）、3维，甚至更高维度。

3. 元素：元素可以装标量、向量、矩阵、结构等等。

### 1、基本定义

```python
heat_field = ti.field(dtype=ti.f32, shape=(256, 256))  # 256x256二维浮点场
```

- `dtype`：指定元素类型。
- `shape`：指定场的形状（维度）。

### 2、场的访问

```python
pixels = ti.field(dtype=ti.f32, shape=(16, 8))
pixels[1, 2] = 42.0

vf = ti.Vector.field(3, dtype=ti.f32, shape=4)
@ti.kernel
def foo():
    vf[0] = ti.Vector([1.0, 2.0, 3.0])
    print(vf[0])             # [1.0, 2.0, 3.0]
foo()
```

### 3、0维场的访问方法

```python
zero_d_scalar = ti.field(ti.f32, shape=())
zero_d_scalar[None] = 1.5     # 访问0维场需要用None
```

### 4、多维场例子：3D重力场

```python
gravitational_field = ti.field(dtype=ti.f32, shape=(256, 256, 256))  # 3D场
```
这可以用来模拟空间中的物理量分布，比如重力场、温度场等。

