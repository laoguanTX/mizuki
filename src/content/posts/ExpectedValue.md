---
title: 数学期望
published: 2025-04-24
category: ["数学", "概率论与数理统计"]
tags: ["概率论"]
alias: "expectedvalue"
---
## 一、数学期望的定义与计算方法

### 1、离散型随机变量  
设离散随机变量 $X$ 有可取值 $\{x_i\}$，对应概率 $P(X=x_i)=p_i$。则  
$$
E[X] = \sum_i x_i\,p_i.
$$

### 2、连续型随机变量  
设连续随机变量 $X$ 的概率密度函数为 $f(x)$，则  
$$
E[X] = \int_{-\infty}^{\infty} x\,f(x)\,\mathrm{d}x.
$$

## 二、离散型随机变量的期望推导

### 1、0–1 分布（Bernoulli 分布）
- **定义**：$X\sim\mathrm{B}(p)$，即  
  $$
  P(X=1)=p,\quad P(X=0)=1-p.
  $$
- **数学期望**：  
  $$
  E[X] 
  =0\cdot(1-p)+1\cdot p
  =p.
  $$

### 2、二项分布（Binomial 分布）
- **定义**：$X\sim\mathrm{B}(n,p)$，概率质量函数  
  $$
  P(X=k)=\binom{n}{k}p^k(1-p)^{\,n-k},\quad k=0,1,\dots,n.
  $$
- **数学期望**：将 $X$ 视为 $n$ 个独立伯努利分布 $\mathrm{B}(p)$ 变量之和，  
  $$
  E[X]=\sum_{i=1}^n E[X_i]=n\,p.
  $$

### 3、超几何分布（Hypergeometric 分布）
- **定义**：总体大小为 $N$，其中“成功”数为 $K$，不放回抽取 $n$ 个样本，令 $X$ 为抽中成功的个数，则  
  $$
  P(X=k)
  =\frac{\binom{K}{k}\binom{N-K}{\,n-k}}{\binom{N}{n}}.
  $$
- **数学期望**：
  $$
  E[X]=n\,\frac{K}{N}.
  $$

### 4、几何分布（Geometric 分布）
- **定义**：独立重复伯努利试验成功概率为 $p$，令 $X$ 为首次出现成功所需的试验次数，则  
  $$
  P(X=k)=p\,(1-p)^{\,k-1},\quad k=1,2,\dots.
  $$
- **数学期望**：  
  $$
  E[X]
  =\sum_{k=1}^\infty k\,p\,(1-p)^{\,k-1}
  =\frac{1}{p}.
  $$

### 5、帕斯卡分布（Pascal／Negative Binomial 分布）
- **定义**：独立伯努利试验成功概率为 $p$，令 $X$ 为获得第 $r$ 次成功所需的试验总次数，则  
  $$
  P(X=n)
  =\binom{n-1}{r-1}\,p^r\,(1-p)^{\,n-r},\quad n=r,r+1,\dots.
  $$
- **数学期望**：可视为 $r$ 个几何分布之和，结果为  
  $$
  E[X]=\frac{r}{p}.
  $$

### 6、泊松分布（Poisson 分布）
- **定义**：$X\sim\mathrm{Poisson}(\lambda)$，  
  $$
  P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},\quad k=0,1,2,\dots.
  $$
- **数学期望**：利用母函数或级数展开，可得  
  $$
  E[X]=\lambda.
  $$

## 三、连续型随机变量的期望推导

### 1、均匀分布（Uniform 分布）
- **定义**：$X\sim U(a,b)$，概率密度  
  $$
  f(x)=\frac{1}{b-a},\quad a\le x\le b.
  $$
- **数学期望**：  
  $$
  E[X]
  =\int_a^b x\,\frac{1}{b-a}\,\mathrm{d}x
  =\frac{a+b}{2}.
  $$

### 2、正态分布（Normal 分布）
- **定义**：$X\sim N(\mu,\sigma^2)$，概率密度  
  $$
  f(x)
  =\frac{1}{\sqrt{2\pi}\,\sigma}
  \exp\!\Bigl(-\frac{(x-\mu)^2}{2\sigma^2}\Bigr).
  $$
- **数学期望**：
  $$
  E[X]=\mu.
  $$

### 3、指数分布（Exponential 分布）
- **定义**：$X\sim\mathrm{Exp}(\lambda)$，  
  $$
  f(x)=\lambda\,e^{-\lambda x},\quad x\ge0.
  $$
- **数学期望**：  
  $$
  E[X]
  =\int_0^\infty x\,\lambda e^{-\lambda x}\,\mathrm{d}x
  =\frac{1}{\lambda}.
  $$
