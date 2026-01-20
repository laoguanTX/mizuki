---
title: 中心极限定理
published: 2025-05-15
category: ["数学", "概率论与数理统计"]
tags: ["概率论"]
alias: "centrallimittheorem"
---
## 一、林德伯格-莱维中心极限定理 (Lindeberg-Lévy CLT)

### 1、定理内容

设${X_n}$是独立同分布的随机变量序列，且满足：

1. 期望存在：$E[X_k] = \mu < \infty$
2. 方差存在：$Var(X_k) = \sigma^2 < \infty$ ($\sigma > 0$)

则对于部分和$S_n = \sum_{k=1}^n X_k$，有标准化随机变量：

$$
Z_n = \frac{S_n - n\mu}{\sigma\sqrt{n}} = \frac{\overline{X}_n - \mu}{\sigma/\sqrt{n}}
$$

当$n \to \infty$时，$Z_n$依分布收敛于标准正态分布：

$$
Z_n \xrightarrow{d} N(0,1)
$$

即对于任意实数$z$：

$$
\lim_{n \to \infty} P(Z_n \leq z) = \Phi(z) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^z e^{-t^2/2} dt
$$

### 2、意义说明

1. **普遍适用性**：无论原始分布是什么形态（离散/连续，对称/偏态），只要满足i.i.d.和有限方差条件，标准化样本均值的分布都会收敛到正态分布。

2. **样本量要求**：实际应用中，$n \geq 30$通常被认为足以获得较好的近似效果，但对于高度偏态分布可能需要更大的$n$。

3. **统计推断基础**：为许多统计方法（如置信区间、假设检验）提供了理论依据，特别是当总体分布未知时。

4. **误差解释**：解释了为什么测量误差常呈正态分布（许多微小独立误差的叠加）。

## 二、棣莫弗-拉普拉斯中心极限定理 (De Moivre-Laplace CLT)

### 1、定理内容

设${Y_n}$为独立伯努利随机变量序列，$Y_k \sim B(p)$，其中$0 < p < 1$。记$S_n = \sum_{k=1}^n Y_k$为成功次数，则：

$$
Z_n = \frac{S_n - np}{\sqrt{np(1-p)}}
$$

当$n \to \infty$时，$Z_n$依分布收敛于标准正态分布：

$$
Z_n \xrightarrow{d} N(0,1)
$$

特别地，对于任意$a < b$：

$$
\lim_{n \to \infty} P\left(a \leq \frac{S_n - np}{\sqrt{np(1-p)}} \leq b\right) = \Phi(b) - \Phi(a)
$$

### 2、意义说明

1. **二项分布近似**：这是历史上最早的中心极限定理形式（1733年），提供了用正态分布近似二项分布的理论依据。

2. **实用准则**：当$np > 5$且$n(1-p) > 5$时，近似效果较好。当$p$接近0.5时，近似所需$n$更小。

3. **离散修正**：由于从离散分布近似连续分布，实际应用中常使用连续性修正：
   $$P(a \leq S_n \leq b) \approx \Phi\left(\frac{b+0.5-np}{\sqrt{np(1-p)}}\right) - \Phi\left(\frac{a-0.5-np}{\sqrt{np(1-p)}}\right)$$

4. **分类数据分析**：为比例检验、卡方检验等分类数据分析方法奠定了基础。