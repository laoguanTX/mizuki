---
title: 方差
published: 2025-04-24
category: ["数学", "概率论与数理统计"]
tags: ["数理统计"]
alias: "variance"
---
## 一、方差的定义与性质

方差是对随机变量取值离散程度的度量。 

离散型随机变量 $X$ 的方差定义为  
$$
\mathrm{Var}(X) = E\bigl[(X - \mu)^2\bigr] = \sum_k (x_k - \mu)^2 p_k
$$

连续型随机变量 $X$ 的方差定义为  
$$
\mathrm{Var}(X) = E\bigl[(X - \mu)^2\bigr] = \int_{-\infty}^{\infty} (x - \mu)^2 f(x)\,\mathrm{d}x
$$

方差也可表示为  
$$
\mathrm{Var}(X) = E\bigl[X^2\bigr] - \bigl(E[X]\bigr)^2
$$

对于相互独立的随机变量 $X$ 和 $Y$，有  
$$
\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)
$$

方差的单位是随机变量单位的平方。 

## 二、离散型分布方差推导

### 1、0-1（Bernoulli）分布  
设 $X \sim \mathrm{B}(p)$，则  
$$
\mathrm{Var}(X) = p(1-p)
$$
### 2、二项分布  
设 $X \sim B(n, p)$，则  
$$
\mathrm{Var}(X) = n\,p\,(1-p)
$$
### 3、超几何分布  
设 $X \sim \mathrm{Hypergeometric}(N, K, n)$，则  
$$
\mathrm{Var}(X) = n\,\frac{K}{N}\,\frac{N-K}{N}\,\frac{N-n}{\,N-1\,}
$$
### 4、几何分布  
设 $X \sim \mathrm{Geometric}(p)$（试验次数形式），则  
$$
\mathrm{Var}(X) = \frac{1-p}{p^2}
$$
### 5、帕斯卡（负二项）分布  
设 $X \sim \mathrm{NegativeBinomial}(r, p)$（第 $r$ 次成功前的失败次数），则  
$$
\mathrm{Var}(X) = \frac{r\,(1-p)}{p^2}
$$
### 6、泊松分布  
设 $X \sim \mathrm{Poisson}(\lambda)$，则  
$$
\mathrm{Var}(X) = \lambda
$$
## 三、连续型分布方差推导

### 1、均匀分布  
设 $X \sim U(a, b)$，则  
$$
\mathrm{Var}(X) = \frac{(b - a)^2}{12}
$$
### 2、正态分布  
设 $X \sim N(\mu, \sigma^2)$，则  
$$
\mathrm{Var}(X) = \sigma^2
$$
### 3、指数分布  
设 $X \sim \mathrm{Exponential}(\lambda)$，则  
$$
\mathrm{Var}(X) = \frac{1}{\lambda^2}
$$