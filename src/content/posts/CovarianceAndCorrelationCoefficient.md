---
title: 协方差和相关系数
published: 2025-04-25
category: ["数学", "概率论与数理统计"]
tags: ["概率论"]
alias: "covarianceandcorrelationcoefficient"
---
## 一、协方差

### 1、协方差的定义

回想数学期望的性质之一，对于相互独立的随机变量$X$和$Y$，当其数学期望都存在时，有$E(XY)=E(X)E(Y)$，而此式等价于：
$$
E[(X-E(X))(Y-E(Y))]=
0\
$$

那么当$E[(X-E(X))(Y-E(Y))]\neq0$时，$X$和$Y$一定不独立，也就是它们之间存在某种相依关系。因此我们认为$E[(X-E(X))(Y-E(Y))]$可以在一定程度上反映出$X$和$Y$的某种关系，由此给出下面的定义：

对于数学期望都存在的随机变量$X$和$Y$，当$(X-E(X))(Y-E(Y))$的数学期望存在时，称：
$$
\mathrm{Cov}(X,Y)=E[(X-E(X))(Y-E(Y))]
$$
为$X$与$Y$的协方差。

### 2、协方差的计算方法

（1）若二维离散型随机变量 $(X, Y)$ 的联合分布律为：
$$
P\{X=x_i, Y=y_j\} = p_{ij}, \quad i=1,2,\cdots, \quad j=1,2,\cdots
$$
则 $X$ 与 $Y$ 的协方差为：
$$
\text{Cov}(X,Y) = \sum_{i=1}^{+\infty} \sum_{j=1}^{+\infty} (x_i - E(X))(y_j - E(Y)) p_{ij}
$$
（2）若二维连续型随机变量 $(X, Y)$ 的联合密度函数为 $f(x,y)$，则 $X$ 与 $Y$ 的协方差为：
$$
\text{Cov}(X,Y) = \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} (x - E(X))(y - E(Y)) f(x,y) \, dxdy
$$
（3）直接按上述定义计算协方差往往比较麻烦, 在实际应用中常常用下面给出的计算公式来得到协方差:
$$
\text{Cov}(X,Y) = E(XY) - E(X)E(Y)
$$

### 3、协方差的性质

（1）对任意的正整数$n(n\geqslant2)$,设$X_1,X_2,\cdots,X_n$为方差存在的随机变量，则$X_1+X_2+\cdots+X_n$的方差也存在，且：
$$
\mathrm{Var}\left(\sum_{i=1}^nX_i\right)=\sum_{i=1}^n\mathrm{Var}(X_i)+2\sum_{1\leqslant i<j\leqslant n}\mathrm{Cov}(X_i,X_j)
$$

（2）$\operatorname{Cov}(X,Y) = \operatorname{Cov}(Y,X)$

（3）$\operatorname{Cov}(X,X) = \operatorname{Var}(X)$

（4）$\operatorname{Cov}(aX,bY) = ab\operatorname{Cov}(X,Y)$, 其中 $a,b$ 为两个实数

（5）若 $\operatorname{Cov}(X_i,Y)(i=1,2)$ 存在, 则：

$$
\operatorname{Cov}(X_1+X_2,Y) = \operatorname{Cov}(X_1,Y) + \operatorname{Cov}(X_2,Y)
$$

（6）若 $X$ 和 $Y$ 相互独立, 则 $\operatorname{Cov}(X,Y) = 0$, 但反之不然

（7）当 $\operatorname{Var}(X)\cdot\operatorname{Var}(Y) \neq 0$ 时, 有 ：
$$
(\operatorname{Cov}(X,Y))^2 \leqslant \operatorname{Var}(X)\operatorname{Var}(Y)
$$
其中等号成立当且仅当 $X$ 与 $Y$ 之间有严格的线性关系（即存在常数 $c_1,c_2$ 使得 $P\{Y=c_1+c_2X\}=1$ 成立）。

> 下面证明性质（7）：
>
> 考虑一个实数 $t$，构造随机变量 $Z = (X - E[X]) + t(Y - E[Y])$。计算 $Z$ 的方差：
> $$
> \text{Var}(Z) = E[Z^2] = E[((X - E[X]) + t(Y - E[Y]))^2]
> $$
> 展开平方项：
> $$
> \text{Var}(Z) = E[(X - E[X])^2] + 2t E[(X - E[X])(Y - E[Y])] + t^2 E[(Y - E[Y])^2]
> $$
> 用协方差和方差的定义表示：
> $$
> \text{Var}(Z) = \text{Var}(X) + 2t \text{Cov}(X,Y) + t^2 \text{Var}(Y)
> $$
>
> 由于方差始终非负，即 $\text{Var}(Z) \geq 0$ 对所有实数 $t$ 成立，因此二次式：
> $$
> \text{Var}(X) + 2t \text{Cov}(X,Y) + t^2 \text{Var}(Y) \geq 0
> $$
> 这是一个关于 $t$ 的二次不等式，其判别式必须非正：
> $$
> (2 \text{Cov}(X,Y))^2 - 4 \cdot \text{Var}(X) \cdot \text{Var}(Y) \leq 0
> $$
> 化简判别式：
> $$
> 4 (\text{Cov}(X,Y))^2 - 4 \text{Var}(X) \text{Var}(Y) \leq 0
> $$
> 两边除以 4：
> $$
> (\text{Cov}(X,Y))^2 \leq \text{Var}(X) \text{Var}(Y)
> $$
> 这就是需要证明的不等式。
>
> 等号成立当且仅当判别式等于零，即：
> $$
> (\text{Cov}(X,Y))^2 = \text{Var}(X) \text{Var}(Y)
> $$
> 此时，二次方程 $\text{Var}(Z) = 0$ 有唯一实数解 $t = -\frac{\text{Cov}(X,Y)}{\text{Var}(Y)}$（假设 $\text{Var}(Y) \neq 0$）。这意味着：
> $$
> Z = (X - E[X]) + t(Y - E[Y]) = 0 \quad \text{几乎处处成立}
> $$
> 即：
> $$
> X - E[X] = -\frac{\text{Cov}(X,Y)}{\text{Var}(Y)} (Y - E[Y])
> $$
> 这表明 $X$ 和 $Y$ 之间存在严格的线性关系：
> $$
> X = c_1 + c_2 Y
> $$
> 其中 $c_1 = E[X] - \frac{\text{Cov}(X,Y)}{\text{Var}(Y)} E[Y]$，$c_2 = -\frac{\text{Cov}(X,Y)}{\text{Var}(Y)}$。
>
> 类似地，如果 $\text{Var}(X) \neq 0$，可以表示为 $Y = c_1' + c_2' X$。因此，等号成立当且仅当 $X$ 和 $Y$ 之间存在严格的线性关系。
>
> 而这个性质，也为后面的相关系数的引出奠定基础。

（8）对任意的$k = 1, 2, ⋯ , n$，有

$$
\operatorname{Cov}(\bar{X}, X_{k})=\operatorname{Cov}\left(\frac{1}{n} \sum_{i=1}^{n} X_{i}, X_{k}\right)=\frac{1}{n} \sum_{i=1}^{n} \operatorname{Cov}(X_{i}, X_{k})
$$

## 二、相关系数

协方差也是有量纲的，而且其取值也依赖于它们的单位，为了克服这一缺点， 我们可以用上一节中所提到的，将随机变量标准化后，再来求它们的协方差, 于是就有了下面“相关系数”的定义。

### 1、相关系数的定义

对于随机变量$X$和，当$E(X^2)$与$E(Y^2)$均存在且$\mathrm{Var}(X)$，$\mathrm{Var}(Y)$均为非零实数时，称:

$$
\rho_{XY}=\frac{\mathrm{Cov}(X,Y)}{\sqrt{\mathrm{Var}(X)}\sqrt{\mathrm{Var}(Y)}}
$$

为$X$与$Y$的相关系数，有时也简记为$\rho$。

注意上述定义中，“$E(X^2)$与$E(Y^2)$均存在”的假设也意味着$X,Y$的数
学期望与方差及$XY$的数学期望均存在。事实上

$$
0\leqslant|X|\leqslant X^2+1,\quad0\leqslant|Y|\leqslant Y^2+1,\quad0\leqslant|XY|\leqslant\frac{X^2+Y^2}2
$$

从而保证了$\mathrm{Cov}(X,Y)$ 的存在。

根据标准化变量的定义 (定义 4.2.2), 可知

$$
\rho_{XY}=\mathrm{Cov}(X^*,Y^*)
$$

其中$X^*=\frac{X-E(X)}{\sqrt{\mathrm{Var}(X)}},Y^*=\frac{Y-E(Y)}{\sqrt{\mathrm{Var}(Y)}}$，由此可见，相关系数也是刻画两变量间相依关系的一种数字特征，其作用与协方差一样。与之不同的是，相关系数是无量纲的指标，可以避免由度量单位等非本质因素所带来的影响，可视之为“标准尺度下的协方差”。

### 2、相关系数的性质

对于随机变量 $X$ 和 $Y$, 当相关系数 $ρ_{XY}$ 存在时, 有

1. 若 $X$ 和 $Y$ 相互独立, 则 $ρ_{XY}=0$, 但反之不然;
2. $|ρ_{XY}|≤1$, 其中等号成立当且仅当 $X$ 与 $Y$ 之间有严格的线性关系 （即存在常数 $c_1, c_2$, 使得 $P\{Y=c_1+c_2X\}=1$ 成立）。

相关系数和协方差反映的不是 $X$ 与 $Y$ 之间 “一般” 关系的程度，而只是反映两者 “线性” 关系的密切程度，因此相关系数有时也称为 “线性相关系数”。

上面的 “线性相关” 可从最小二乘法的角度再来加深理解。对随机变量 $X$ 和 $Y$，考虑用 $X$ 的线性函数 $c_1+c_2X$ 来逼近 $Y$。该选择怎样的常数 $c_1, c_2$，使得逼近的程度最好？这种逼近程度，常用 “最小二乘” 的观点来衡量，即使得
$$
\begin{aligned}
ρ(c_1, c_2)&=E\{[Y-(c_1+c_2X)]^2\}\\
&=E\{[(Y-E(Y))-c_2(X-E(X))-(c_1-E(Y)+c_2E(X))]^2\}\\
&=\text{Var}(Y)+c_2^2\text{Var}(X)-2c_2\text{Cov}(X,Y)+(c_1-E(Y)+c_2E(X))^2
\end{aligned}
$$
达到最小。通过求解，可知：
$$
c_1=E(Y)-c_2E(X), \quad c_2=\frac{\text{Cov}(X,Y)}{\text{Var}(X)}
$$
时，$ρ(c_1, c_2)$ 达到最小，且最小值为：
$$
\min_{c_1,c_2} E\{[Y-(c_1+c_2X)]^2\}=\text{Var}(Y)(1-ρ_{XY}^2)
$$
若 $ρ_{XY}=±1$, 则上式等于$0$，从而 $P\{Y=c_1+c_2X\}=1$，这一点在协方差性质（7）中也已指出。而且$|ρ_{XY}|$ 越接近$1$，用 $c_1+c_2X$ 来逼近 $Y$ 的偏差就越小，那么 $X$ 与 $Y$ 之间线性关系的程度就越强；反之，就表明两者的线性关系程度越弱。

当$\rho_XY>0$，即$\mathrm{Cov}(X,Y)>0$时，线性表示中$X$的系数$c_2$也大于$0$，那么$Y$ 的最佳线性逼近 $c_1+c_2X$ 随 $X$ 增加而增加，故称 $X$ 与$Y$ 正相关；反之， 当$\rho_{XY}<0$时，称$X$与$Y$负相关。

当随机变量 X 和 Y 的相关系数
$$\rho_{XY} = 0$$

时，称 $X$ 和 $Y$ 不相关或零相关。

由相关系数及协方差定义, 可知“不相关”还可以用下面的任意一条来定义：

1. $\operatorname{Cov}(X, Y) = 0$

2. $E(XY) = E(X)E(Y)$

3. $\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)$