---
title: 统计量
published: 2025-05-15
category: ["数学", "概率论与数理统计"]
tags: ["数理统计"]
alias: "statistics"
---
## 一、统计量的定义

设 $X_1,X_2,\cdots,X_n$ 是来自总体 $X$ 的一个样本，$g(X_1,X_2,\cdots ,X_n)$ 是样本 $X_1,X_2,\cdots,X_n$ 的函数，若$g$不含未知参数，则称 $g(X_1,X_2,\cdots,X_n$)是一统计量。

## 二、常用统计量

在统计学中，根据不同的目的可以构造出许多不同的统计量，下面是几个常用的重要统计量：

1. **样本均值**

$$
\overline{X} = \frac{1}{n} \sum_{i=1}^{n} X_i
$$

2. **样本方差**

$$
S^2 = \frac{1}{n-1} \sum_{i=1}^{n} (X_i - \overline{X})^2 = \frac{1}{n-1} \left( \sum_{i=1}^{n} X_i^2 - n \overline{X}^2 \right)
$$

3. **样本标准差**

$$
S = \sqrt{S^2} = \sqrt{\frac{1}{n-1} \sum_{i=1}^{n} (X_i - \overline{X})^2}
$$

4. **样本 $k$ 阶 (原点) 矩**

$$
A_k = \frac{1}{n} \sum_{i=1}^{n} X_i^k, \quad k = 1, 2, \cdots
$$

5. **样本 $k$ 阶中心矩**

$$
B_k = \frac{1}{n} \sum_{i=1}^{n} (X_i - \overline{X})^k, \quad k = 2, 3, \cdots
$$

当总体数字特征未知时（设各阶矩存在）：

1. 一般，用样本均值$\overline{X}$作为总体均值$\mu=E(X)$的估计。
2.  用样本方差$S^2$作为总体方差$\sigma^2=E(X-\mu)^2$的估计。
3.  用样本原点矩$A_k$作为总体原点矩$\mu_k=E(X^k)$的估计。
4. 用样本中心矩$B_{_k}$作为总体中心矩$\nu_k=E(X-\mu)^k$ 的估计。
5. 总体方差的估计可以用$S^2$也可以$B_{_2}$，主要的区别涉及到“无偏性”，前者是无偏的后者是有偏的。
6. 所有样本均值的平均值恰好是总体均值。（无偏性）

## 三、关于常用统计量的一些问题

为什么样本方差要除以 $n-1$ ，而不是 $n$ ？具体原因参考：自由度、无偏性与有偏性。

总体方差（$\sigma^2$）和样本方差（$s^2$）的定义：

- **总体方差**：
  $$
  \sigma^2 = \frac{1}{N}\sum_{i=1}^N (X_i - \mu)^2 \quad \text{(除以总体大小N)}
  $$

- **样本方差**：
  $$
  s^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2 \quad \text{(除以n-1)}
  $$

设$X_1,...,X_n$是来自总体$X \sim (\mu, \sigma^2)$的随机样本，证明$E[s^2] = \sigma^2$：

1. 展开平方和：
   $$
   \sum (X_i - \bar{X})^2 = \sum X_i^2 - n\bar{X}^2
   $$

2. 取期望：
   $$
   E\left[\sum (X_i - \bar{X})^2\right] = \sum E[X_i^2] - n E[\bar{X}^2]
   $$

3. 使用$Var(Y) = E[Y^2] - (E[Y])^2$：

   - $E[X_i^2] = \sigma^2 + \mu^2$
   - $E[\bar{X}^2] = Var(\bar{X}) + (E[\bar{X}])^2 = \frac{\sigma^2}{n} + \mu^2$

4. 代入得：
   $$
   E\left[\sum (X_i - \bar{X})^2\right] = n(\sigma^2 + \mu^2) - n\left(\frac{\sigma^2}{n} + \mu^2\right) = (n-1)\sigma^2
   $$

5. 因此：
   $$
   E\left[\frac{1}{n-1}\sum (X_i - \bar{X})^2\right] = \sigma^2
   $$

