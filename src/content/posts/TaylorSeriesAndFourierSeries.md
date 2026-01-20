---
title: 泰勒级数与傅里叶级数
published: 2025-04-06
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "taylorseriesandfourierseries"
---
## 一、泰勒级数（Taylor Series）

### 1. 定义

设函数 $f(x)$ 在某点 $x=a$ 的邻域内有无穷阶导数。若存在一个级数满足：

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n,
$$

且该级数在某邻域内收敛于 $f(x)$，则称该级数为 $f(x)$ 在 $x=a$ 处的**泰勒级数**。

### 2. 泰勒公式及其拉格朗日型余项

设函数 $f$ 在闭区间 $[a, x]$ 上具有 $n+1$ 阶连续导数。根据**泰勒定理**，存在某个 $\xi$ 介于 $a$ 与 $x$ 之间，使得：

$$
f(x) = \sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x - a)^k + R_n(x),
$$

其中余项 $R_n(x)$ 的**拉格朗日形式**为：

$$
R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - a)^{n+1}.
$$

### 3. 证明泰勒展开的推导

我们从函数的积分表示出发来构造展开：

假设 $f$ 在 $[a,x]$ 上 $(n+1)$ 阶可导。

我们对 $f$ 逐阶积分，建立如下恒等式：

首先注意：

$$
f(x) = f(a) + \int_a^x f'(t)\, dt
$$

又有：

$$
f'(t) = f'(a) + \int_a^t f''(s) \, ds
$$

代入得到：

$$
f(x) = f(a) + f'(a)(x - a) + \int_a^x \int_a^t f''(s)\, ds\, dt
$$

不断重复这个操作，我们可以得到通式：

$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k + \frac{1}{n!} \int_a^x (x - t)^n f^{(n+1)}(t)\, dt
$$

该积分余项形式称为**积分余项型泰勒公式**。

在此基础上，若我们对余项 $R_n(x)$ 应用平均值定理（广义柯西中值定理），可得：

$$
R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - a)^{n+1}
$$

其中 $\xi \in (a,x)$。

### 4. 泰勒级数收敛的条件

我们希望极限成立：

$$
\lim_{n \to \infty} R_n(x) = 0
$$

这需要对函数 $f(x)$ 的导数进行控制。

一种常见情况是：存在常数 $M$ 与 $R$ 使得：

$$
|f^{(n)}(a)| \leq M R^n n!
$$

则级数

$$
\sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n
$$

在 $|x - a| < \frac{1}{R}$ 内绝对收敛。

### 5. 示例：$e^x$ 的泰勒展开

函数 $f(x) = e^x$ 的各阶导数均为 $e^x$，所以 $f^{(n)}(0) = 1$。

代入展开式得：

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

我们可以估算余项：

$$
R_n(x) = \frac{e^\xi}{(n+1)!} x^{n+1}
$$

显然 $|R_n(x)| \leq \frac{e^{|x|}}{(n+1)!} |x|^{n+1} \to 0$，当 $n \to \infty$，所以级数收敛于 $e^x$。

## 二、傅里叶级数（Fourier Series）

### 1. 定义

对于周期函数 $f(x)$，设周期为 $2L$，若 $f(x)$ 在 $[-L, L]$ 上绝对可积，可展开为：

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left[a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right)\right]
$$

### 2. 傅里叶系数的计算公式

利用正交性计算傅里叶系数：

- 零次项（平均值）：

$$
a_0 = \frac{1}{L} \int_{-L}^{L} f(x) \, dx
$$

- 余弦系数：

$$
a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx
$$

- 正弦系数：

$$
b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx
$$

### 3. 证明思路：使用正交基展开

#### 正交函数系

函数系 $\{1, \cos(n\pi x / L), \sin(n\pi x / L)\}$ 在 $[-L, L]$ 上两两正交：

例如：

$$
\int_{-L}^{L} \cos\left(\frac{n\pi x}{L}\right) \cos\left(\frac{m\pi x}{L}\right) dx = \begin{cases}
0, & n \ne m \\
L, & n = m \ne 0
\end{cases}
$$

#### 在正交系下展开函数

假设 $f(x)$ 可表示为这些正交函数的线性组合：

$$
f(x) = \sum_{n=0}^\infty \left( A_n \phi_n(x) \right)
$$

其中 $\phi_n(x)$ 是上述正交函数。

由于正交性，我们可以用“投影”的方式提取系数：

$$
A_n = \frac{\langle f, \phi_n \rangle}{\langle \phi_n, \phi_n \rangle}
$$

对应就是傅里叶系数 $a_n$ 和 $b_n$ 的计算。

### 4. 收敛性说明（狄利克雷条件）

若 $f(x)$ 满足以下条件，则其傅里叶级数在 $(-L, L)$ 上逐点收敛：

- 在 $[-L, L]$ 上绝对可积；
- $f(x)$ 分段光滑（有限个不连续点和拐点）；
- 在每个不连续点收敛于左右极限的平均值：

$$
\lim_{N\to \infty} S_N(x) = \frac{f(x^+) + f(x^-)}{2}
$$

### 5. 示例：周期为 $2\pi$ 的函数 $f(x) = x$ 在 $[-\pi, \pi]$ 上的傅里叶级数

1. 函数为奇函数 ⇒ 所有 $a_n = 0$

2. 计算 $b_n$：

$$
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x \sin(nx) \, dx = \frac{2(-1)^{n+1}}{n}
$$

最终傅里叶展开为：

$$
f(x) = \sum_{n=1}^\infty \frac{2(-1)^{n+1}}{n} \sin(nx)
$$

## 三、总结对比

| 特性     | 泰勒级数           | 傅里叶级数                       |
| -------- | ------------------ | -------------------------------- |
| 适用对象 | 光滑函数           | 周期函数                         |
| 形式     | 幂级数             | 三角级数                         |
| 基函数   | $1, x, x^2, \dots$ | $\cos(n\pi x/L), \sin(n\pi x/L)$ |
| 系数计算 | 导数公式           | 积分正交投影                     |
| 收敛性   | 需余项趋零         | 狄利克雷条件                     |