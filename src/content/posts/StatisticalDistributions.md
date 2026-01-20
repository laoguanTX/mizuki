---
title: 统计分布
published: 2025-05-15
category: ["数学", "概率论与数理统计"]
tags: ["数理统计"]
alias: "statisticaldistributions"
---
## 一、抽样分布定义

统计量的分布称为抽样分布 (sampling distribution)。在使用统计量进行统计推断时需要知道抽样分布。一般情况下，要给出统计量的精确分布是很困难的，但在某些特殊情形下，如总体服从正态分布的情形下，我们可以给出某些统计量的精确分布，这些精确的抽样分布为正态总体情形下的参数推断提供了理论依据。

在数理统计中，最重要的三个抽样分布为 $\chi^{2}$ 分布，$t$ 分布和 $F$ 分布。

## 二、$\chi^2$ 分布

### 1、$\chi^2$ 分布的定义

设 $X_1,X_2,\cdots,X_n$ 为独立同分布的随机变量，且都服从标准正态分布$N(0,1)$。记：
$$
Y=X_1^2+X_2^2+\cdots+X_n^2
$$
则称$Y$服从自由度为$n$的$\chi^2$分布，记为$Y\sim\chi^2(n)$，其中自由度表示上式中独立变量的个数。$\chi^2$分布的密度函数为：
$$
\left.f_{\chi^2}(x)=\left\{\begin{array}{ll}\frac{1}{2^{n/2}\Gamma(n/2)}x^{\frac{n}{2}-1}\mathrm{e}^{-\frac{x}{2}},&x>0,\\0,&\text{其他,}\end{array}\right.\right.
$$
$\chi^2$分布的自由度 $n$ 决定了其密度函数的形状。

### 2、$\chi^2$ 分布的性质

1. $\chi^2$ 分布可加性: 设 $Y_{1} \sim \chi^{2}(m), Y_{2} \sim \chi^{2}(n), m, n \geqslant 1$，且两者相互独立, 则 $Y_{1}+Y_{2} \sim \chi^{2}(m+n)$。

> 证明：根据 χ² 分布的定义, 我们可以把 $Y_{1}$ 和 $Y_{2}$ 分别表示为：
> $$
> Y_{1}=X_{1}^{2}+X_{2}^{2}+\cdots+X_{m}^{2}
> $$
>
> $$
> Y_{2}=Z_{1}^{2}+Z_{2}^{2}+\cdots+Z_{n}^{2}
> $$
>
> 其中 $X_{1}, X_{2}, \cdots, X_{m}$ 和 $Z_{1}, Z_{2}, \cdots, Z_{n}$ 都服从标准正态分布 $N(0,1)$, $X_{i}(i=1,2,\cdots,m)$ 相互独立，$Z_{j}(j=1,2,\cdots,n)$ 相互独立，且 $(X_{1}, X_{2}, \cdots, X_{m})$ 与 $(Z_{1}, Z_{2}, \cdots, Z_{n})$ 相互独立。根据 $\chi^2$ 分布的定义：
> $$
> Y_{1}+Y_{2}=X_{1}^{2}+X_{2}^{2}+\cdots+X_{m}^{2}+Z_{1}^{2}+Z_{2}^{2}+\cdots+Z_{n}^{2} \sim \chi^{2}(m+n)
> $$

2. $\chi^2$ 分布的数学期望和方差：设 $Y \sim \chi^{2}(n)$，则：

$$
E(Y)=n, \quad \operatorname{Var}(Y)=2n
$$

即 $\chi^2$ 分布的数学期望等于自由度，而方差等于自由度的 $2$ 倍。

> 证明：设 $Y \sim \chi^{2}(n)$, 可以表示为 $Y=X_{1}^{2}+X_{2}^{2}+\cdots+X_{n}^{2}$, 其中 $X_{i} \sim N(0,1)$ 且相互独立，因而 $E(X_{i}^{2})=1, i=1,2,\cdots,n$，从而：
> $$
> E(Y)=E\left(X_{1}^{2}+X_{2}^{2}+\cdots+X_{n}^{2}\right)=n
> $$
> 由分部积分可以得出 $E(X_{i}^{4})=3$，于是：
> $$
> \operatorname{Var}(X_i^2) = E(X_i^4) - (E(X_i^2))^2 = 3 - 1 = 2
> $$
> 由 $X_1, X_2, \cdots, X_n$ 的独立性，有：
> $$
> \operatorname{Var}(Y) = \operatorname{Var}(X_1^2 + X_2^2 + \cdots + X_n^2) = \sum_{i=1}^{n} \operatorname{Var}(X_i^2) = 2n
> $$

3. $\chi^2$ 分布分位数：对于给定的正数 $\alpha, 0 < \alpha < 1$，称满足条件：

$$
P\{\chi^2 > \chi_{\alpha}^2(n)\} = \int_{\chi_{\alpha}^2(n)}^{+\infty} f_{\chi^2}(x) \, \mathrm{d}x = \alpha
$$

的 $\chi_{\alpha}^2(n)$ 为 $\chi^2(n)$ 分布的上 (侧) $\alpha$ 分位数。

费希尔 (Fisher) 曾证明，当$n$充分大时，$\chi^2$分布的上$\alpha$分位数可以有如下的近似：
$$
\chi_\alpha^2(n)\approx\frac{1}{2}(z_\alpha+\sqrt{2n-1})^2
$$
其中 $z_\alpha$ 是标准正态分布的上 $\alpha$ 分位数。通常当 $n>40$ 时，利用这个关系式的近似效果较好，可利用标准正态分布的上 $\alpha$ 分位数，并结合上述近似式来得到 $\chi^2(n)$ 分布的上 $\alpha$ 分位数的近似值。

## 三、$t$ 分布

### 1、$t$ 分布的定义

设 $X$ 服从标准正态分布 $N(0,1)$，$Y$ 服从自由度为 $n$ 的 $\chi^2$ 分布，且 $X$ 与 $Y$ 相互独立，则随机变量
$$
t = \frac{X}{\sqrt{Y/n}}
$$
服从自由度为 $n$ 的 $t$ 分布，记为 $t \sim t(n)$。$t$分布又称为学生氏分布。$t$ 分布的概率密度函数为：
$$
f_t(x) = \frac{\Gamma\left(\frac{n+1}{2}\right)}{\sqrt{n\pi}\,\Gamma\left(\frac{n}{2}\right)}\left(1+\frac{x^2}{n}\right)^{-\frac{n+1}{2}},\quad -\infty < x < +\infty
$$

### 2、$t$ 分布的性质

1. $t$ 分布是对称分布，关于 $x=0$ 对称。

2. $t$ 分布的期望为 $0$，方差为 $\frac{n}{n-2}$（$n>2$ 时）。

3. 当自由度 $n$ 趋于无穷大时，$t$ 分布趋于标准正态分布。

4. $t$ 分布分位数：对于给定的正数 $\alpha,0<\alpha<1$，称满足条件
   $$
   P\{t>t_{\alpha}(n)\}=\int_{t_{\alpha}(n)}^{+\infty}f_{t}(x)\mathrm{d}x=\alpha
   $$
   的 $t_\alpha(n)$为 $t(n)$ 分布的上（侧）$\alpha$ 分位数。



## 四、$F$ 分布

### 1、$F$ 分布的定义

设 $U \sim \chi^2(m)$，$V \sim \chi^2(n)$，且 $U$ 与 $V$ 相互独立，则随机变量
$$
F = \frac{U/m}{V/n}
$$
服从自由度为 $m$ 和 $n$ 的 $F$ 分布，记为 $F \sim F(m, n)$。$F$ 分布的概率密度函数为：
$$
f_F(x) = \frac{m^{m/2} n^{n/2}}{\mathrm{B}\left(\frac{m}{2}, \frac{n}{2}\right)} \frac{x^{m/2-1}}{(m x + n)^{(m+n)/2}},\quad x>0
$$
其中 $\mathrm{B}(\cdot,\cdot)$ 为 $\mathrm{Beta}$ 函数。或者把概率密度函数写为：
$$
f_F(x)=\frac{\Gamma[(n_1+n_2)/2](n_1/n_2)^{n_1/2}x^{n_1/2-1}}{\Gamma(n_1/2)\Gamma(n_2/2)[1+(n_1x/n_2)]^{(n_1+n_2)/2}},\quad x>0
$$

### 2、$F$ 分布的性质

1. 若$F\sim F(n_1,n_2)$，则$\frac1F\sim F(n_2,n_1)$。

2. 若$X\sim t(n)$，则$X^2\sim F(1,n)$。

3. $F$分布分位数：对于给定的正数 $\alpha,0<\alpha<1$，称满足条件
   $$
   P\{F>F_\alpha(n_1,n_2)\}=\int_{F_\alpha(n_1,n_2)}^{+\infty}f_F(x)\mathrm{d}x=\alpha
   $$

   的 $F_\alpha(n_1,n_2)$为 $F(n_1,n_2)$ 分布的上（侧）$\alpha$ 分位数。

## 五、正态总体下的抽样分布

设$X_1,X_2,\cdots,X_n$为来自正态总体$N(\mu,\sigma^2)$的简单随机样本，$\overline{X}$是样本均值，$S^2$为样本方差，则有：
$$
\overline{X}\sim N\left(\mu,\frac{\sigma^2}{n}\right)
$$

$$
\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)
$$

并且有：$\overline{X}$与$S^2$相互独立。于是可得：
$$
\frac{\overline{X}-\mu}{S/\sqrt{n}}\sim t(n-1)
$$

> 证明：
> $$
> \frac{\overline{X}-\mu}{\sqrt{\sigma^2/n}}\sim N(0,1),\quad\frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1)
> $$
> 且两者相互独立。由$t$分布的定义知：
> $$
> \frac{\overline{X}-\mu}{S/\sqrt{n}}=\frac{\overline{X}-\mu}{\sqrt{\sigma^2/n}}\Big/\sqrt{\frac{(n-1)S^2}{\sigma^2(n-1)}}\sim t(n-1)
> $$

设 $X_1, X_2, \cdots, X_{n_1}$ 和 $Y_1, Y_2, \cdots, Y_{n_2}$ 分别为来自正态总体 $N(\mu_1, \sigma_1^2)$ 和 $N(\mu_2, \sigma_2^2)$ 的两个相互独立的简单随机样本。记 $\overline{X}, \overline{Y}$ 分别是两个样本的样本均值，$S_1^2, S_2^2$ 分别是两个样本的样本方差，则有
$$
\frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2} \sim F(n_1-1, n_2-1)
$$
当 $\sigma_1^2 = \sigma_2^2 = \sigma^2$ 时:
$$
\frac{(\overline{X} - \overline{Y}) - (\mu_1 - \mu_2)}{S_w \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} \sim t(n_1 + n_2 - 2)
$$
其中:
$$
S_w^2 = \frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1 + n_2 - 2}, \quad S_w = \sqrt{S_w^2}
$$

> 证明：
>
> 由前文结论：
> $$
> \frac{(n_1-1)S_1^2}{\sigma_1^2}\sim\chi^2(n_1-1),\quad\frac{(n_2-1)S_2^2}{\sigma_2^2}\sim\chi^2(n_2-1)
> $$
> 由假设知 $S_1^2,S_2^2$ 相互独立，由 $F$ 分布的定义知：
> $$
> \frac{\frac{(n_1-1)S_1^2}{\sigma_1^2} \bigg/ (n_1-1)}{\frac{(n_2-1)S_2^2}{\sigma_2^2} \bigg/ (n_2-1)} \sim F(n_1-1,n_2-1)
> $$
> 即：
> $$
> \frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2} \sim F(n_1-1,n_2-1)
> $$
> 由正态变量的性质知：
> $$
> \overline{X} - \overline{Y} \sim N \left( \mu_1 - \mu_2, \frac{\sigma^2}{n_1} + \frac{\sigma^2}{n_2} \right)
> $$
> 即有：
> $$
> U = \frac{(\overline{X} - \overline{Y}) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma^2}{n_1} + \frac{\sigma^2}{n_2}}} \sim N(0,1)
> $$
> 又由 $\chi^2$ 分布的可加性：
> $$
> V = \frac{(n_1-1)S_1^2}{\sigma^2} + \frac{(n_2-1)S_2^2}{\sigma^2} \sim \chi^2(n_1+n_2-2)
> $$
> 由于 $U$ 和 $V$ 相互独立，由 $t$ 分布的定义知：
> $$
> \frac{(\overline{X} - \overline{Y}) - (\mu_1 - \mu_2)}{S_w \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} = \frac{U}{\sqrt{V/(n_1+n_2-2)}} \sim t(n_1+n_2-2)
> $$

