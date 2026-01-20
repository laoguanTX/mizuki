---
title: 常微分方程求解（1）
published: 2025-04-27
category: ["数学", "高等数学"]
tags: ["微积分", "常微分方程"]
alias: "odesolutions1"
---
一般，在一个（组）方程中，如果未知量是一个（组）函数，而且该方程中含有此未知函数的导数，则称这种方程为微分方程（组），如果在微分方程里，出现的未知函数是单个自变量的函数，我们称这一类微分方程为常微分方程。下面通过几篇文章，推导各种常微分方程的求解方法。

## 一、可分离变量方程

我们首先讨论已解出导数的一阶微分方程的一种特殊形式

$$
\frac{\mathrm{d}y}{\mathrm{d}x}=\varphi(x)\psi(y)
$$

的方程，其特点是，方程右边是一个$x$的函数与一个$y$的函数的乘积，我们称这类方程为可分离变量的微分方程。设$\varphi(x)$和$\psi(y)$都是连续函数，且$\psi(y)\neq0$。

这类方程的解法被称为“**分离变量法**”，其核心思想是将含有$y$的部分和含有$x$的部分分别放在等式的两边，然后对两边进行积分。

我们改写方程，使等号一边仅含 $y$ 的函数和 $y$ 的微分 $\mathrm{d}y$，另一边仅含 $x$ 的函数和 $x$ 的微分 $\mathrm{d}x$，即：
$$
\frac{\mathrm{d}y}{\varphi(y)} = \varphi(x) \mathrm{d}x
$$
设 $y = y(x)$ 是方程满足初值条件 $y|_{x=x_0} = y_0$ 的解，则
$$
\frac{\mathrm{d}(y(x))}{\varphi(y(x))} \equiv \varphi(x) \mathrm{d}x
$$
两边从 $x_0$ 到 $x$ 积分，得：
$$
\int_{x_0}^{x} \frac{\mathrm{d}(y(\zeta))}{\varphi(y(\zeta))} \equiv \int_{x_0}^{x} \varphi(\zeta) \mathrm{d}\zeta
$$
对左式作变量变换，命 $\eta = y(\zeta)$。则当 $\zeta = x_0$ 时，$\eta = y(x_0) = y_0$, $\zeta = x$ 时，$\eta = y(x)$，于是有：
$$
\int_{y_0}^{y(x)} \frac{\mathrm{d}\eta}{\varphi(\eta)} \equiv \int_{x_0}^{x} \varphi(\zeta) \mathrm{d}\zeta
$$
即 $y = y(x)$ 满足方程：
$$
\int_{y_0}^{y} \frac{\mathrm{d}\eta}{\varphi(\eta)} = \int_{x_0}^{x} \varphi(\zeta) \mathrm{d}\zeta
$$
反之，设 $y = y(x)$ 是方程满足 $y|_{x=x_0} = y_0$ 所确定的隐函数，将上式两边对 $x$ 求导数，得
$$
\frac{1}{\varphi(y(x))} \frac{\mathrm{d}y(x)}{\mathrm{d}x} = \varphi(x)
$$
故知 $y = y(x)$ 是方程的解。

也可用不定积分法求方程的通解：将式子两边分别对$y,x$积分，得：
$$
\int \frac{\mathrm{d}y}{\psi(y)} = \int \varphi(x) \mathrm{d}x + c
$$
设有$y^{*}$使$\psi(y^{*})=0$，则易知$y=y^{*}$也是方程的一个解，在求微分方程的解时，不要忘了这种解。这个解，有时可认为包含在积分式中，有时并不包含在积分式中，一般要单独去做。

## 二、齐次方程（零齐次方程）

我们首先讨论零齐次微分方程的一种特殊形式

$$
\frac{\mathrm{d}y}{\mathrm{d}x} = F\left(\frac{y}{x}\right)
$$

该方程特点是，方程右边是一个关于 $\frac{y}{x}$ 的函数，我们称这类方程为齐次微分方程。我们假设设 $F$ 是连续函数。

这类方程的解法被称为“**变量替换法**”，其核心思想是通过引入新变量 $v = \frac{y}{x}$，将原方程转换为可分离变量的微分方程。

我们进行变量替换，令 $v = \frac{y}{x}$，则 $y = vx$，对 $x$ 求导得：
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = v + x\frac{\mathrm{d}v}{\mathrm{d}x}
$$

代入原方程，得到：
$$
v + x\frac{\mathrm{d}v}{\mathrm{d}x} = F(v)
$$

整理方程，使含 $v$ 的部分和含 $x$ 的部分分别分离：
$$
x\frac{\mathrm{d}v}{\mathrm{d}x} = F(v) - v
$$

进一步改写为可分离变量形式：
$$
\frac{\mathrm{d}v}{F(v) - v} = \frac{\mathrm{d}x}{x}
$$

设 $y = y(x)$ 是方程满足初值条件 $y|_{x=x_0} = y_0$ 的解，对应的变量替换为 $v_0 = \frac{y_0}{x_0}$。对两边从 $x_0$ 到 $x$ 积分：
$$
\int_{v_0}^{v(x)} \frac{\mathrm{d}\eta}{F(\eta) - \eta} = \int_{x_0}^{x} \frac{\mathrm{d}\zeta}{\zeta}
$$

对右式直接积分，左式作变量变换 $\eta = v(\zeta)$，得：
$$
\int_{v_0}^{v(x)} \frac{\mathrm{d}\eta}{F(\eta) - \eta} = \ln\left|\frac{x}{x_0}\right|
$$

将 $v(x) = \frac{y(x)}{x}$ 代回，得到隐式解：
$$
\int_{v_0}^{\frac{y}{x}} \frac{\mathrm{d}\eta}{F(\eta) - \eta} = \ln\left|\frac{x}{x_0}\right|
$$

反之，将隐式解两边对 $x$ 求导可验证解的正确性：
$$
\frac{1}{F\left(\frac{y}{x}\right) - \frac{y}{x}} \left( \frac{y'x - y}{x^2} \right) = \frac{1}{x}
$$
整理后还原为原方程形式。

通解可通过不定积分表示为：
$$
\int \frac{\mathrm{d}v}{F(v) - v} = \int \frac{\mathrm{d}x}{x} + C
$$

## 三、一阶线性微分方程

### 1、一阶齐次线性方程

我们讨论一阶线性齐次微分方程的标准形式

$$
\frac{\mathrm{d}y}{\mathrm{d}x} + P(x)y = 0
$$

其特点是方程可表示为未知函数 $y$ 与其导数 $\frac{\mathrm{d}y}{\mathrm{d}x}$ 的线性组合，且右端项为零。我们称此类方程为线性齐次微分方程，其中 $P(x)$ 是已知连续函数。这类方程的解法仍是为"**分离变量法**"。

将方程改写为可分离变量形式：
$$
\frac{\mathrm{d}y}{y} = -P(x) \mathrm{d}x
$$

对两边分别进行不定积分：
$$
\int \frac{1}{y} \mathrm{d}y = -\int P(x) \mathrm{d}x + C
$$

计算左式积分时需注意 $y \neq 0$ 的隐含条件，得到：
$$
\ln|y| = -\int P(x) \mathrm{d}x + C
$$

通过指数运算消去对数，得通解表达式：
$$
y = \pm e^{C} \cdot e^{-\int P(x) \mathrm{d}x}
$$

将 $\pm e^{C}$ 合并为任意常数 $C \in \mathbb{R}$，最终通解为：
$$
y = C e^{-\int P(x) \mathrm{d}x}
$$

当 $C=0$ 时，$y=0$ 是方程的平凡解，已包含在通解表达式中，分离变量时假设 $y \neq 0$，但最终通解通过常数 $C$ 的任意性自然包含了所有可能情况。

### 2、一阶非齐次线性方程

我们讨论一阶线性非齐次微分方程的标准形式：

$$
\frac{\mathrm{d}y}{\mathrm{d}x} + P(x)y = Q(x)
$$

其特点是方程可表示为未知函数 $y$ 与其导数 $\frac{\mathrm{d}y}{\mathrm{d}x}$ 的线性组合，且右端项为已知函数 $Q(x)$。我们称此类方程为线性非齐次微分方程，其中 $P(x)$ 和 $Q(x)$ 是已知连续函数。这类方程的解法通常为"**积分因子法**"。

首先构造积分因子 $\mu(x)$，使得方程可化为全微分形式。积分因子由下式给出：
$$
\mu(x) = e^{\int P(x) \mathrm{d}x}
$$

将原方程两边乘以积分因子：
$$
\mu(x)\frac{\mathrm{d}y}{\mathrm{d}x} + \mu(x)P(x)y = \mu(x)Q(x)
$$

此时方程左边可表示为全导数形式，而构造积分因子的目的就是希望能够转化为一阶：
$$
\frac{\mathrm{d}}{\mathrm{d}x} \left[ \mu(x)y \right] = \mu(x)Q(x)
$$

对两边进行不定积分：
$$
\int \frac{\mathrm{d}}{\mathrm{d}x} \left[ \mu(x)y \right] \mathrm{d}x = \int \mu(x)Q(x) \mathrm{d}x + C
$$

计算左式积分并整理得：
$$
\mu(x)y = \int \mu(x)Q(x) \mathrm{d}x + C
$$

将积分因子表达式代入并解出 $y$，得到通解：
$$
y = e^{-\int P(x) \mathrm{d}x} \left( \int e^{\int P(x) \mathrm{d}x} Q(x) \mathrm{d}x + C \right)
$$

其中 $C \in \mathbb{R}$ 为任意常数。当 $Q(x) \equiv 0$ 时，解自动退化为齐次方程的通解形式，表明非齐次解包含齐次解的特例。

由上式还可以看出，一阶非齐次线性方程的通解$y$可以写成两项之和：

$$
y=\mathrm{e}^{-\int p(x)\mathrm{d}x}\int Q(x)\mathrm{e}^{\int p(x)\mathrm{d}x}\mathrm{d}x+C\mathrm{e}^{-\int p(x)\mathrm{d}x}
$$

前者相当于一阶非齐次线性方程解中$C=0$ 的情形，因而它是非齐次方程的一个解；后者是对应的一阶齐次线性方程的通解。一般，我们可以证明，如果$Y(x)$是对应的齐次方程的通解，$y^*(x)$是原方程的任意一个解，则$y = Y(x) + y^*(x)$是非齐次方程的通解，这与线性代数中齐次方程组与非齐次方程组的关系有异曲同工之处。

上面所用的方法，即将对应的齐次方程通解中的任意常数$C$换成待定函数$\mu(x)$，以求得非齐次方程解的方法，叫做“**变动任意常数法**”。

## 三、伯努利方程

我们讨论伯努利方程的标准形式：

$$
\frac{\mathrm{d}y}{\mathrm{d}x} + P(x)y = Q(x)y^n \quad (n \neq 0,1)
$$

其特点是方程包含非线性项 $y^n$，但可通过变量代换化为线性微分方程。解法核心是通过幂函数变换将方程线性化。

使用“**变量代换法**”令 $v = y^{1-n}$，则对 $x$ 求导得：
$$
\frac{\mathrm{d}v}{\mathrm{d}x} = (1-n)y^{-n} \frac{\mathrm{d}y}{\mathrm{d}x}
$$

然后将方程线性化，将原方程乘以 $(1-n)y^{-n}$：
$$
(1-n)y^{-n} \frac{\mathrm{d}y}{\mathrm{d}x} + (1-n)y^{1-n}P(x) = (1-n)Q(x)
$$

代入 $v = y^{1-n}$ 和 $\frac{\mathrm{d}v}{\mathrm{d} x}$ 表达式，方程化简为：
$$
\frac{\mathrm{d}v}{\mathrm{d}x} + (1-n)P(x)v = (1-n)Q(x)
$$

应用”**积分因子法**“构造积分因子 $\mu(x)$：
$$
\mu(x) = e^{\int (1-n)P(x) \,\mathrm{d}x}
$$

将方程两边乘以 $\mu(x)$，得到全导数形式：
$$
\frac{\mathrm{d}}{\mathrm{d}x} \left[ \mu(x)v \right] = (1-n)\mu(x)Q(x)
$$

对两边积分：
$$
\mu(x)v = (1-n) \int \mu(x)Q(x) \,\mathrm{d}x + C
$$

代回原变 量 $y = v^{1/(1-n)}$，得通解：
$$
y = \left[ e^{-\int (1-n)P(x) \,\mathrm{d}x} \left( (1-n) \int e^{\int (1-n)P(x) \,\mathrm{d}x} Q(x) \,\mathrm{d}x + C \right) \right]^{1/(1-n)}
$$
