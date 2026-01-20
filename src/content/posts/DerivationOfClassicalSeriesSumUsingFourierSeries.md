---
title: 傅里叶级数推导经典级数和
published: 2025-04-06
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "derivationofclassicalseriessumusingfourierseries"
---
## 一、基本工具：Parseval 等式

设 $f(x)$ 是 $[-\pi, \pi]$ 上平方可积的函数，其傅里叶级数为：

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^\infty \left[a_n \cos(nx) + b_n \sin(nx)\right]
$$

则 **Parseval 等式**为：

$$
\frac{1}{\pi} \int_{-\pi}^{\pi} |f(x)|^2 dx = \frac{a_0^2}{2} + \sum_{n=1}^\infty \left(a_n^2 + b_n^2\right)
$$

## 二、推导 $\sum \frac{1}{n^2}$

### 1. 设函数 $f(x) = x$，定义在 $[-\pi, \pi]$，并延拓为奇函数，周期为 $2\pi$

该函数是奇函数 ⇒ 傅里叶级数只有正弦项：

$$
f(x) = \sum_{n=1}^{\infty} b_n \sin(nx)
$$

其中系数为：

$$
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x \sin(nx) dx = \frac{2(-1)^{n+1}}{n}
$$

所以展开式为：

$$
x = \sum_{n=1}^{\infty} \frac{2(-1)^{n+1}}{n} \sin(nx)
$$

### 2. 应用 Parseval 等式：

左边为：

$$
\frac{1}{\pi} \int_{-\pi}^{\pi} x^2 dx = \frac{2}{\pi} \int_0^{\pi} x^2 dx = \frac{2}{\pi} \cdot \frac{\pi^3}{3} = \frac{2\pi^2}{3}
$$

右边为：

$$
\sum_{n=1}^{\infty} b_n^2 = \sum_{n=1}^{\infty} \left(\frac{2}{n}\right)^2 = 4 \sum_{n=1}^{\infty} \frac{1}{n^2}
$$

令左右相等：

$$
\frac{2\pi^2}{3} = 4 \sum_{n=1}^{\infty} \frac{1}{n^2}
$$

解得：

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$



## 三、推导 $\sum \frac{1}{n^4}$

### 1. 设函数 $f(x) = x^2$，定义在 $[-\pi, \pi]$，为偶函数，展开为余弦级数

由于 $x^2$ 是偶函数 ⇒ 只有余弦项：

$$
f(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos(nx)
$$

计算：

- 常数项：

$$
a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} x^2 dx = \frac{2}{\pi} \int_0^{\pi} x^2 dx = \frac{2}{\pi} \cdot \frac{\pi^3}{3} = \frac{2\pi^2}{3}
$$

- 余弦系数：

$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x^2 \cos(nx) dx
$$

此积分结果为（标准结果）：

$$
a_n = \frac{(-1)^n \cdot 4}{n^2}
$$

所以：

$$
x^2 = \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4(-1)^n}{n^2} \cos(nx)
$$

### 2. 应用 Parseval 等式

左边：

$$
\frac{1}{\pi} \int_{-\pi}^{\pi} x^4 dx = \frac{2}{\pi} \int_0^{\pi} x^4 dx = \frac{2}{\pi} \cdot \frac{\pi^5}{5} = \frac{2\pi^4}{5}
$$

右边为：

$$
\frac{a_0^2}{2} + \sum_{n=1}^{\infty} a_n^2
$$

代入 $a_0 = \frac{2\pi^2}{3}$，$a_n = \frac{4(-1)^n}{n^2}$，得：

$$
\frac{(2\pi^2/3)^2}{2} + \sum_{n=1}^\infty \left(\frac{4}{n^2}\right)^2 = \frac{2\pi^4}{5}
$$

化简：

$$
\frac{2\pi^4}{9} + 16 \sum_{n=1}^\infty \frac{1}{n^4} = \frac{2\pi^4}{5}
$$

两边减去 $\frac{2\pi^4}{9}$：

$$
16 \sum_{n=1}^\infty \frac{1}{n^4} = \frac{2\pi^4}{5} - \frac{2\pi^4}{9} = 2\pi^4 \left( \frac{1}{5} - \frac{1}{9} \right) = 2\pi^4 \cdot \frac{4}{45}
$$

所以：

$$
\sum_{n=1}^\infty \frac{1}{n^4} = \frac{\pi^4}{90}
$$

## 四、关于 $\sum \frac{1}{n^3}$ 的说明

这个结果（即 Apéry 常数）是：

$$
\sum_{n=1}^\infty \frac{1}{n^3} = \zeta(3) \approx 1.20206...
$$

但不像 $1/n^2$ 和 $1/n^4$，它不能由傅里叶级数直接表示出封闭形式，直到1978 年，Roger Apéry 才证明了它是无理数。

所以我们常通过**数值方法**或更高级的函数（如黎曼 zeta 函数）研究它。
