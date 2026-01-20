---
title: 矩估计和极大似然估计
published: 2025-06-01
category: ["数学", "概率论与数理统计"]
tags: ["数理统计"]
alias: "method of momentsestimationandmaximumlikelihoodestimation"
---
## 一、矩估计（Method of Moments, MM）

### 1、意义

矩估计是一种参数估计方法。其基本思想是用样本矩（即样本的若干阶幂平均）去逼近总体矩（即理论矩），从而求出未知参数的估计值。也就是说，通过样本的统计量去“模拟”总体分布的性质。

### 2、计算方法

#### （1）一般步骤

1. 设总体分布含有$k$个未知参数$\theta_1, \theta_2, \ldots, \theta_k$。
2. 写出前$k$阶的理论矩（关于参数的表达式）：
   $$
   \mu_r' = \mathbb{E}(X^r), \quad r=1,2,\ldots,k
   $$
3. 根据样本计算对应的样本矩：
   $$
   m_r' = \frac{1}{n}\sum_{i=1}^n x_i^r, \quad r=1,2,\ldots,k
   $$
4. 令样本矩等于理论矩，解方程组，得参数的矩估计：
   $$
   m_1' = \mu_1'(\theta_1, \ldots, \theta_k) \\
   m_2' = \mu_2'(\theta_1, \ldots, \theta_k) \\
   \vdots \\
   m_k' = \mu_k'(\theta_1, \ldots, \theta_k)
   $$

#### （2）离散型与连续型的区别

- 离散型：理论矩为$\mu_r' = \sum_{i} x_i^r p(x_i)$
- 连续型：理论矩为$\mu_r' = \int_{-\infty}^{+\infty} x^r f(x) \,\mathrm{d}x$

但样本矩的计算方式一样，都是样本值的幂平均。

## 二、极大似然估计（Maximum Likelihood Estimation, MLE）

### 1、意义

极大似然估计是一种常用的参数估计方法。其基本思想是：已知样本数据后，把样本出现的概率（或概率密度）视作参数的函数，称为似然函数。选择参数的取值，使得样本出现的概率最大，即最大化似然函数。

### 2、计算方法

#### （1）一般步骤

1. 设总体分布含有$k$个未知参数$\theta_1, \theta_2, \ldots, \theta_k$。
2. 设样本为$x_1, x_2, \ldots, x_n$。
3. 写出似然函数$L(\theta_1, \ldots, \theta_k)$：
   - 离散型：$L(\theta) = \prod_{i=1}^n p(x_i;\theta)$
   - 连续型：$L(\theta) = \prod_{i=1}^n f(x_i;\theta)$
4. 取对数得对数似然函数：
   $$
   \ell(\theta_1, \ldots, \theta_k) = \ln L(\theta_1, \ldots, \theta_k)
   $$
5. 对每个参数分别求偏导，令导数为$0$，解方程组，得参数的极大似然估计：
   $$
   \frac{\partial \ell}{\partial \theta_j} = 0 \qquad (j=1,2,\ldots,k)
   $$
6. 检查得到的解是否为极大值点。

#### （2）离散型与连续型的区别

- 离散型：$L(\theta) = \prod_{i=1}^n p(x_i;\theta)$，$p(x_i;\theta)$为概率质量函数
- 连续型：$L(\theta) = \prod_{i=1}^n f(x_i;\theta)$，$f(x_i;\theta)$为概率密度函数

本质上方法相同，主要是概率函数的形式不同。
