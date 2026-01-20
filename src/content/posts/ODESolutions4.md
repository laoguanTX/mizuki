---
title: 常微分方程求解（4）
published: 2025-05-18
category: ["数学", "高等数学"]
tags: ["微积分", "常微分方程"]
alias: "odesolutions4"
---
本文将系统介绍常系数线性微分方程的解法方法，分别包括二阶常系数齐次线性微分方程、$n$ 阶常系数齐次线性微分方程、以及常系数非齐次线性微分方程的解法。详细推导各步骤，便于理解和掌握。

## 一、二阶常系数齐次线性微分方程的解法

考虑如下方程：
$$
\frac{\mathrm{d}^2y}{\mathrm{d}x^2} + a_1\frac{\mathrm{d}y}{\mathrm{d}x} + a_0 y = 0
$$
其中 $a_0, a_1$ 为常数。

### 1、特征方程法

设 $y = e^{\lambda x}$，代入原方程：
$$
\frac{\mathrm{d}^2}{\mathrm{d}x^2}e^{\lambda x} + a_1\frac{\mathrm{d}}{\mathrm{d}x}e^{\lambda x} + a_0 e^{\lambda x} = \lambda^2 e^{\lambda x} + a_1 \lambda e^{\lambda x} + a_0 e^{\lambda x} = 0
$$

整理得：
$$
(\lambda^2 + a_1\lambda + a_0) e^{\lambda x} = 0
$$
由于 $e^{\lambda x} \neq 0$，所以：
$$
\lambda^2 + a_1\lambda + a_0 = 0
$$
这就是特征方程。

### 2、特征方程的根的情况

设特征方程的根为 $\lambda_1,\lambda_2$，有三种情形：

#### （1）$\lambda_1 \neq \lambda_2$，且均为实根

则通解为：
$$
y(x) = C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}
$$

#### （2）$\lambda_1 = \lambda_2 = \lambda$，为重根

则通解为：
$$
y(x) = (C_1 + C_2 x)e^{\lambda x}
$$

#### （3）$\lambda_{1,2} = \alpha \pm i\beta$，为共轭复根

则通解为：
$$
\begin{aligned}
y(x) &= C_1 e^{(\alpha + i\beta)x} + C_2 e^{(\alpha - i\beta)x} \\
&= e^{\alpha x}(A \cos\beta x + B \sin\beta x)
\end{aligned}
$$
其中 $A,B$ 由 $C_1,C_2$ 线性组合而得。

## 二、$n$ 阶常系数齐次线性微分方程的解法

考虑一般形式：
$$
\frac{\mathrm{d}^n y}{\mathrm{d}x^n} + a_{n-1} \frac{\mathrm{d}^{n-1} y}{\mathrm{d}x^{n-1}} + \cdots + a_1 \frac{\mathrm{d}y}{\mathrm{d}x} + a_0 y = 0
$$

### 1、特征方程

同样设 $y = e^{\lambda x}$，代入得：
$$
\lambda^n + a_{n-1}\lambda^{n-1} + \cdots + a_1\lambda + a_0 = 0
$$
设其 $n$ 个根为 $\lambda_1,\lambda_2,\ldots,\lambda_n$，重根和复根情况如下。

### 2、通解形式

1. 若 $\lambda_i$ 为 $k$ 重实根，则通解中对应项为：
   $$
   (C_{i,1} + C_{i,2}x + \cdots + C_{i,k}x^{k-1})e^{\lambda_i x}
   $$
2. 若 $\lambda_{i,j} = \alpha \pm i\beta$ 为 $k$ 重复共轭复根，则通解中对应项为：
   $$
   e^{\alpha x}[A_1\cos\beta x + B_1\sin\beta x + \cdots + (A_k\cos\beta x + B_k\sin\beta x)x^{k-1}]
   $$

3. 全部根的线性组合即为通解：
   $$
   y(x) = \sum_j P_j(x)e^{\alpha_j x}\cos(\beta_j x) + Q_j(x)e^{\alpha_j x}\sin(\beta_j x)
   $$
   其中 $P_j(x), Q_j(x)$ 为多项式，次数不超过重根数减一。

## 三、常系数非齐次线性微分方程的解法

考虑一般形式：
$$
\frac{\mathrm{d}^n y}{\mathrm{d}x^n} + a_{n-1} \frac{\mathrm{d}^{n-1} y}{\mathrm{d}x^{n-1}} + \cdots + a_1 \frac{\mathrm{d}y}{\mathrm{d}x} + a_0 y = f(x)
$$

### 1、通解结构

通解 $y(x) = y_c(x) + y_p(x)$，其中：

- $y_c(x)$：对应齐次方程的通解（见前述）。
- $y_p(x)$：非齐次方程的一个特解。

### 2、求特解 $y_p(x)$ 的方法

常用方法有**待定系数法**和**变系数法**（常称为“变参数法”或“拉格朗日变参数法”）。

#### （1）待定系数法

适用于 $f(x)$ 为指数函数、三角函数、多项式或它们的有限和的情形。

- 设 $f(x)$ 的形式为多项式、指数函数、三角函数的线性组合，则对应设 $y_p(x)$ 为类似形式的函数，代入方程，确定未知系数。

设$f(x)$为多项式、指数函数、三角函数及其乘积的组合，记$m$次多项式为$P_m(x)$，则：

若
$$
f(x) = P_m(x) e^{\alpha x}
$$

则特解$y^*$具有如下形式：

$$
y_p = x^k R_m(x) e^{\alpha x}
$$

其中$R_m(x)$为$m$次多项式，$k$为：

- $\alpha$是特征方程的$k$重根（如果$\alpha$不是特征方程的根则$k=0$）。

若
$$
f(x) = P_m(x) e^{\alpha x} \cos bx \quad \text{或} \quad Q_m(x) e^{\alpha x} \sin bx\quad \text{或二者之和}
$$

则特解$y_p$具有如下形式：

$$
y_p = x^k\left[ R_m(x) e^{\alpha x} \cos bx + S_m(x) e^{\alpha x} \sin bx \right]
$$

其中$R_m(x)$和$S_m(x)$为$m$次多项式，$k$为：

- $a \pm bi$的每一个值作为特征方程的$k$重根（如果不是特征方程的根则$k=0$）。

#### （2）变系数法（拉格朗日变参数法）

原因解释见[常微分方程求解（5）-二](https://www.laoguantx.top/archives/109/)

适用于 $f(x)$ 不是简单形式，或待定系数法不适用时。

- 先求得对应齐次方程的两个线性无关解 $y_1(x), y_2(x)$。
- 设
  $$
  y_p(x) = u_1(x) y_1(x) + u_2(x) y_2(x)
  $$
  其中 $u_1(x), u_2(x)$ 为待定函数。

- 根据拉格朗日法则，得
  $$
  \begin{cases}
  u_1'(x) y_1(x) + u_2'(x) y_2(x) = 0 \\
  u_1'(x) y_1'(x) + u_2'(x) y_2'(x) = f(x)
  \end{cases}
  $$
  解该方程组，积分得到 $u_1(x), u_2(x)$，最终得到 $y_p(x)$。

于是得到常系数非齐次线性微分方程的通解为：
$$
y(x) = y_c(x) + y_p(x)
$$
其中 $y_c(x)$ 为对应齐次方程的通解，$y_p(x)$ 为该非齐次方程的一个特解。

