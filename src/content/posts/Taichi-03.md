---
title: Taichi的计算核
published: 2025-09-03
category: ["程设计科", "编程语言"]
tags: ["Taichi", "计算机图形学"]
alias: "taichi-03"
---

## 一、Taichi计算核（Kernel）

在函数定义上一行加上 `@ti.kernel` 装饰器，该函数会被编译为高性能 Taichi 计算核。

- 只能在 Python 域调用 Kernel，不能在 Kernel 内再调用另一个 Kernel。

### 1、正确示例

```python
@ti.kernel
def foo():
    print("foo")      # 输出 "foo"

@ti.kernel
def bar():
    print("bar")      # 输出 "bar"

foo()                 # 在 Python 域调用
bar()                 # 在 Python 域调用
```

### 2、错误示例

```python del={4}
@ti.kernel
def foo():
    print("foo")
    bar()             # 错误！不能在 Kernel 内调用另一个 Kernel

@ti.kernel
def bar():
    print("bar")

foo()
```

## 二、为什么要使用太极运算核？

### 1、太极运算核的并行调用

通过 `@ti.kernel` 装饰器，用户可以将计算密集型任务交由 Taichi 的 JIT 编译器处理，从而在多核 CPU 或 GPU 上实现显著的性能提升。

`@ti.kernel` 装饰的函数会自动并行化 Taichi 域最外层的 for 循环，从而充分利用硬件资源。例如：

```python {"该for循环为并行调用":3-4} {"由于嵌套，该for循环为串行调用":7-8} {"该for循环为并行调用":11-12}
@ti.kernel
def fill():

    for i in range(10):
        x[i]+=1
        s=0

        for j in range(5):
            s+=j
        y[i]=s

    for k in range(20):
        z[k]=k
```

### 2、for循环的并行性要求

只有最外层 for 循环会被并行化，内层循环不会。

```python
@ti.kernel
def foo():
    if k > 42:
        for i in range(10):   # 不是最外层，不会并行
            ...
```

### 3、控制并行与串行的技巧

在下面的程序中，如果不想并行运行第一个循环，而想并行运行第二个循环，你可以这么写：
```python del={1-5} ins={6-13}
@ti.kernel
def my_loop():
    for i in range(10):
        for j in range(20):
            ...
def my_loop():
    for i in range(10):
        loop()

@ti.kernel
def loop()
    for j in range(20):
        ...

my_loop() 
```

### 4、并行循环下的限制

在并行的最外层 for 循环中，不能使用 `break` 语句。

```python del={5}
@ti.kernel
def loop():
    for i in range(10):
        ...
        break
```

但在串行（如内层循环）可以使用 `break`：

```python
@ti.kernel
def loop():
    for i in range(10):
        ...
        for j in range(20):
            ...
            break  # 合法，内层串行循环可以 break
```

## 三、条件竞争（Race Condition）

由于Taichi程序会并行运行最外层内容，当并行的两处程序同时对一个变量进行操作时会产生条件竞争。条件竞争下，使用`+=`运算符会保证操作的原子性，但是`x=x+y`的写法不保证操作能被原子化保护，可能出现并行情况下for循环中两个分支同时写入它的情况。例如：

```python {"正确的写法":3-5}{"错误的写法，会引发条件竞争":6-7}
def sum():
    for i in range(10):
        
    A[None] += x[i]
    ti.atomic_add(A[None],x[i])

    A[None] = a[None] + x[i]
```

## 四、struct-for语法（场的遍历）

对于场（field）的数据类型，存在一种更简单的循环方法，例如下面一份代码：

```python title="struct-for语法演示.py"
import taichi as ti

ti.init(arch=ti.cpu)

N = 10
x = ti.Vector.field(2, dtype=ti.i32, shape=(N, N))

@ti.kernel
def foo():
    for i,j in x:
        x[i,j] = ti.Vector([i,j])

foo()
```

但是，struct-for的语法只对Taichi域的最外层循环有效，在内层循环不可以使用这种方法。

## 五、Kernel参数和返回值

### 1、参数

1. 目前最多是8个。
2. 且由Python作用域传到Taichi作用域。
3. 传递参数时必须把类型写出来（type-hinted），因为python本身是弱类型的一个解释性语言，所以从python里传进来的东西taichi并不知道它是什么东西。所以在`@ti.kernel`里函数定义传参的时候，我们需要把类型显式声明出来。
4. 只支持标量，如果要传矢量，要先把矢量拆开当标量传进来，再组装回矢量。
5. Taichi目前只支持值传递（与引用传递对立），也就是传参时发生一次数据拷贝，在函数内部对参数的修改不影响外部。

### 2、返回值

1. 可以有返回值，也可以无返回值。若有返回值，只能有一个返回值。
2. 返回值必须使用 `->` 运算符标明数据类型，且只能是标量。例如:
    ```python
    @ti.kernel
    def my_kernel() -> ti.i32
        return 123.456
    
    print(my_kernel()) #输出123，123.456会隐式地 `cast` 成为一个 `ti.i32` 数据类型。
    ```

## 六、太极函数（Function）

在函数的上一行加上`@ti.func`修饰，可以使函数成为太极函数（Taichi Function），它只能在Taichi作用域中被调用。太极函数可以帮助你在太极计算核中重复调用某些功能。

### 1、正确示例
```python
@ti.kernel
def foo():
    print("foo")
    bar()

@ti.func
def bar():
    print("bar")

foo()
```

### 2、错误示例

```python del={3}
def foo():
    print("foo")
    bar()

@ti.func
def bar():
    print("bar")

foo()
```

## 七、太极函数的嵌套和参数

1. 太极函数传参时不需要表明参数的数据类型，因为太极函数的参数一定来自于太极作用域中，而太极作用域已经标明数据的类型。
2. 太极函数可以没有返回值，也可以有返回值。
3. 因为太极是内联实现的，所以返回值可以使任意类型，且可以使任意多个。例如下面这份代码：
    ```python title="太极函数的参数传递和返回值演示.py"
    import taichi as ti
    
    ti.init(arch=cpu)

    @ti.func
    def foo(vec):
        return vec[1], vec[2]
    
    @ti.kernel
    def my_kernel():
        x, y = foo(ti.Vector([2, 3.3]))
        print(x, y) #输出2和3,3

    my_kernel()
    ```
4. 太极函数的内联并非简单内联，向其中传递的参数仍然是值传递，会将参数复制一份传递进去。


## 八、Taichi作用域的部分特点

1. 在Taichi作用域内，所有的数据都是静态的。当一个数据被赋值为`int`，哪怕再用浮点数赋值，也会转为`int`，用`vector`赋值则报错。
2. 在Taichi作用域内，所有的词法作用域都是静态的，在if、for中定义的数据只能在局部中奏效。例如：
    ```python del={"报错：y 不存在":7-8}
    @ti.kernel
    def err_out_scope(x: float):
        if x < 0:
            y = -x
        else:
            y = x

        print(y)
    ```
3. 如果想要创建一个全局变量，请定义场（field），你可以通过下面代码的变化来感受这一点。
    ```python title="Taichi的全局变量.py" del={5,11,16,21} ins={6-7,12,17,22}
    import taichi as ti

    ti.init(arch=ti.cpu)

    a = 42
    a = ti.field(ti.i32, shape=())
    a[None] = 42

    @ti.kernel
    def print_a():
        print("a =", a)
        print("a =", a[None])

    print_a() 
    # 输出 a = 42
    a = 53
    a[None] = 53
    print("a =", a)
    # 输出 a = 53
    print_a() 
    # 输出 a = 42
    # 输出 a = 53
    ```

## 九、Taichi中的数学运算：
```python
ti.sin(x)
ti.cos(x)
ti.tan(x)
ti.asin(x)
ti.acos(x)
ti.atan2(y, x)
ti.sqrt(x)
ti.floor(x)
ti.ceil(x)
ti.inv(x)
ti.tanh(x)
ti.exp(x)
ti.log(x)
ti.random(data_type)
abs(x)
int(x)
float(x)
max(x, y, ...)
min(x, y, ...)
x ** y
A.transpose()
A.inverse()
A.trace()
A.determinant()
A.normalized()
A + B
A * B
A @ B
R, S = ti.polar_decompose(A, ti.f32)
U, sigma, V = ti.svd(A, ti.f32)
lambda, V = ti.eig(A, ti.f32)
u.dot(v)            # 标量
u.cross(v)          # 向量
u.outer_product()   # 矩阵
```
