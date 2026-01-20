---
title: 常微分方程求解（5）
published: 2025-05-23
category: ["数学", "高等数学"]
tags: ["微积分", "常微分方程"]
alias: "odesolutions5"
---
本文系统介绍一般线性微分方程的部分解法，包括：变量变换法（欧拉方程、降阶法、特殊变系数方程）、变动任意常数法、幂级数解法（定理、$\gamma$ 阶贝塞尔方程及其解）。

## 一、变量变换法

### 1、欧拉方程（Cauchy-Euler 方程）

典型形式：

$$
a_{0}x^{n}\frac{\mathrm{d}^{n}n}{\mathrm{d}x^{n}}+a_{1}x^{n-1}\frac{\mathrm{d}^{n-1}y}{\mathrm{d}x^{n-1}}+\cdots+a_{n-1}x\frac{\mathrm{d}y}{\mathrm{d}x}+a_{n}y=f(x)
$$

现在主要研究二阶欧拉方程解法。
$$
a_0x^2\frac{\mathrm{d}^2 y}{\mathrm{d}x^2} + a_1 x \frac{\mathrm{d}y}{\mathrm{d}x} + a_2 y = f(x)
$$

首先变量变换，取 $x > 0$，令 $t = \ln x$，则 $x = e^t$，有
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{\mathrm{d}y}{\mathrm{d}t}\cdot\frac{\mathrm{d}t}{\mathrm{d}x} = \frac{1}{x}\frac{\mathrm{d}y}{\mathrm{d}t}
$$
$$
\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = \frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{1}{x}\frac{\mathrm{d}y}{\mathrm{d}t}\right) = -\frac{1}{x^2}\frac{\mathrm{d}y}{\mathrm{d}t} + \frac{1}{x^2}\frac{\mathrm{d}^2y}{\mathrm{d}t^2}
$$

代入原方程后有
$$
a_0\left(\frac{\mathrm{d}^2y}{\mathrm{d}t^2}-\frac{\mathrm{d}y}{\mathrm{d}t}\right)+a_1\frac{\mathrm{d}y}{\mathrm{d}t}+a_2y=f(\mathrm{e}^t)
$$
化简得：
$$
a_{0}\frac{\mathrm{d}^{2}y}{\mathrm{d}t^{2}}+(a_{1}-a_{0})\frac{\mathrm{d}y}{\mathrm{d}t}+a_{2}y=f(e^{t})
$$

这是二阶常系数线性微分方程，解法已知。对于 $n$ 阶欧拉方程的情况，可做类似处理。

### 2、已知一个非零解的齐次线性微分方程的降阶法

考虑二阶齐次线性微分方程
$$
y'' + p(x)y' + q(x) y = 0
$$
已知一个非零解 $y_1(x)$，求第二个线性无关解。

设 $y_2(x) = u(x) y_1(x)$，计算：
$$
y_2' = u'y_1 + u y_1'
$$
$$
y_2'' = u''y_1 + 2u'y_1' + u y_1''
$$

代入原方程：
$$
y_2'' + p(x)y_2' + q(x)y_2 = u''y_1 + 2u'y_1' + u y_1'' + p(x)(u'y_1 + u y_1') + q(x) u y_1
$$
$$
= u''y_1 + 2u'y_1' + u y_1'' + u'p(x)y_1 + u p(x) y_1' + q(x) u y_1
$$
$$
= u''y_1 + u'[2y_1' + p(x)y_1] + u [y_1'' + p(x) y_1' + q(x) y_1]
$$

由于 $y_1(x)$ 满足原方程，最后一项为零，得
$$
u''y_1 + u'[2y_1' + p(x)y_1] = 0
$$

令 $w = u'$, 则
$$
w' y_1 + w [2y_1' + p(x) y_1] = 0 \implies w' + w \frac{2y_1' + p(x) y_1}{y_1} = 0
$$

这是关于 $w$ 的一阶线性微分方程，解为
$$
w(x) = \frac{C}{y_1^2} e^{-\int p(x) \mathrm{d}x}
$$

于是
$$
u'(x) = \frac{C}{y_1^2(x)} e^{-\int p(x) \mathrm{d}x}
$$

积分得
$$
u(x) = \int \frac{e^{-\int p(x) \mathrm{d}x}}{y_1^2(x)}\mathrm{d}x
$$

因此，第二解为
$$
y_2(x) = y_1(x)\int \frac{e^{-\int p(x) \mathrm{d}x}}{y_1^2(x)}\mathrm{d}x
$$

由此得到刘维尔公式（Liouville公式）：设 $y_1(x)$ 是 $y'' + p(x) y' + q(x) y=0$ 的解，则另一线性无关解
$$
y_2(x) = y_1(x) \int \frac{e^{-\int p(x) \mathrm{d}x}}{y_1^2(x)}\mathrm{d}x
$$

在前段降阶法中，利用的一个解 $y_1$，作变换$y= y_1u$，使变换后的式左边第 $3$ 项方括号$[\: ]$中为零，从而达到降阶的目的。现在换一种思路，选取$y_1$使式左边第$2$项$[\: ]$中为零，而若第$3$项$[ \:]$中恰为$y_{1}$的$a$倍（$a$为常数），并且假设$y_1\neq0$，那么约去此 $y_1$ 之后，成为$u^{\prime\prime}+au=0$，从而成为容易求解的常系数线性齐次微分方程，达到求得原方程的通解的目的。按照上述思路，有下述结果：

设$p(x)$具有连续的一阶导数，$q(x)$连续，且满足$2p'(x)+p^2(x)-4q(x)=a(a为某常数)$，则微分方程：

$$
\frac{\mathrm{d}^2y}{\mathrm{d}x^2}+p(x)\frac{\mathrm{d}y}{\mathrm{d}x}+q(x)y=0
$$

可经变量变换$y=uv$，适当选取函数$v=v(x)$，使上述方程化为$u$关于$x$的二阶常系数线性微分方程而求解。事实上,由$y=uv$，有$y'=u'v+uv'$,$y''=u''v+2u'v'+uv''$，代入原给方程，得

$$
u''v+u'(2v'+pv)+u(v''+pv'+qv)=0
$$

取$v$使$2v'+pv=0$，例如取

$$
v = e^{-\int \frac{p}{2} \mathrm{d}x}
$$

从而经计算有

$$
u'' + pv' + qv = -\frac{1}{4}(2p' + p^2 - 4q)e^{-\int \frac{p}{2} \mathrm{d}x} = -\frac{a}{4}e^{-\int \frac{p}{2} \mathrm{d}x}
$$

于是原方程化为

$$
u''e^{-\int \frac{p}{2} \mathrm{d}x} - \frac{a}{4}ue^{-\int \frac{p}{2} \mathrm{d}x} = 0
$$

即

$$
u'' - \frac{a}{4}u = 0
$$

这是二阶常系数线性齐次方程，容易求得它的通解，从而使得原给方程的通解。

## 二、变动任意常数法（拉格朗日变参数法）

针对非齐次线性微分方程
$$
y'' + p(x) y' + q(x) y = f(x)
$$

已知对应齐次方程的两个线性无关解 $y_1(x),\ y_2(x)$，则特解设为
$$
y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)
$$
其中 $u_1(x), u_2(x)$ 为待定函数。对$y_p(x)$求导得

$$
y_p' = [u_1 y_1'(x) + u_2 y_2'(x)]+ [u_1'y_1(x) + u_2'y_2(x)]
$$

为了使变动常数$c_1,c_2$为函数$u_1,u_2$前后，其导数形式相同，令$y_p$一阶导第二个方括号为零，则：
$$
y_p'=u_1y'_1(x)+u_2y_2'(x)
$$
再求导数：

$$
y_p^{\prime\prime} = [u_1 y_1^{\prime\prime}(x) + u_2 y_2^{\prime\prime}(x)]+ [u_1^{\prime} y_1^{\prime}(x) + u_2^{\prime} y_2^{\prime}(x)]
$$

与上述式子同理，令$y_p'$二阶导的第二个方括号值为$f(x)$，联立得：
$$
\begin{cases}
u_1'(x) y_1(x) + u_2'(x) y_2(x) = 0 \\
u_1'(x) y_1'(x) + u_2'(x) y_2'(x) = f(x)
\end{cases}
$$

解得
$$
u_1'(x) = -\frac{y_2(x) f(x)}{W(x)}, \quad
u_2'(x) = \frac{y_1(x) f(x)}{W(x)}
$$
其中 $W(x) = y_1(x) y_2'(x) - y_1'(x) y_2(x)$ 为解的朗斯基行列式。

积分得
$$
u_1(x) = -\int \frac{y_2(x) f(x)}{W(x)} \mathrm{d}x, \quad
u_2(x) = \int \frac{y_1(x) f(x)}{W(x)} \mathrm{d}x
$$

最终得到原方程的一个解
$$
y_p(x) = -y_1(x) \int \frac{y_2(x) f(x)}{W(x)} \mathrm{d}x + y_2(x) \int \frac{y_1(x) f(x)}{W(x)} \mathrm{d}x
$$

再加上对应齐次方程的通解，得到该非齐次方程的通解：
$$
y=y_1(x)\left(c_1-\int\frac{y_2(x)}{W(x)}f(x)\mathrm{d}x\right)+y_2(x)\left(c_2+\int\frac{y_1(x)}{W(x)}f(x)\mathrm{d}x\right)
$$


## 三、幂级数解法（非考点）

### 1、幂级数解法定理

考虑 $y'' + p(x) y' + q(x) y = 0$，$p(x)$ 和 $q(x)$ 在 $x_0$ 处解析。

设 $y(x) = \sum_{n=0}^{\infty} a_n (x-x_0)^n$，则
$$
y'(x) = \sum_{n=1}^{\infty} n a_n (x-x_0)^{n-1}
$$
$$
y''(x) = \sum_{n=2}^{\infty} n(n-1) a_n (x-x_0)^{n-2}
$$

将级数代入方程，通过同幂次项系数相等法可递推求出全部 $a_n$。

### 2、 $\gamma$ 阶贝塞尔方程

标准形式：
$$
x^2 y'' + x y' + (x^2 - \gamma^2) y = 0
$$

#### （1）幂级数法解

设 $y(x) = \sum_{n=0}^{\infty} a_n x^{n+s}$，$a_0 \neq 0$。

计算：
$$
y'(x) = \sum_{n=0}^{\infty} (n+s)a_n x^{n+s-1}
$$
$$
y''(x) = \sum_{n=0}^{\infty} (n+s)(n+s-1)a_n x^{n+s-2}
$$

代入原方程
$$
x^2 y'' + x y' + (x^2 - \gamma^2) y = 0
$$

整理各项同次幂系数，得递推关系式
$$
a_{n+2} = -\frac{a_n}{(n+s+2)(n+s+1) - \gamma^2}
$$

#### （2）特殊取值，Frobenius 级数法

取 $s = \gamma$ 或 $s = -\gamma$，各得一组独立解，分别定义为第一类和第二类贝塞尔函数。

### 3、$\gamma$ 阶第一类贝塞尔函数 $J_\gamma(x)$

定义为
$$
J_\gamma(x) = \sum_{m=0}^{\infty} \frac{(-1)^m}{m! \Gamma(m+\gamma+1)} \left( \frac{x}{2} \right)^{2m+\gamma}
$$

其中 $\Gamma(z)$ 为伽马函数。

### 4、$-\gamma$ 阶第一类贝塞尔函数 $J_{-\gamma}(x)$

同上，取 $s = -\gamma$，得
$$
J_{-\gamma}(x) = \sum_{m=0}^{\infty} \frac{(-1)^m}{m! \Gamma(m-\gamma+1)} \left( \frac{x}{2} \right)^{2m-\gamma}
$$

