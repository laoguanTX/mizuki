---
title: 枢轴量
published: 2025-06-01
category: ["数学", "概率论与数理统计"]
tags: ["数理统计"]
alias: "pivotalquantity"
---
# 概率论与数理统计中的枢轴量法详解

## 一、基本概念

在概率论与数理统计中，**枢轴量法**（Pivot Quantity Method）是一种常用的构造置信区间的方法。其核心思想是通过构造一个在参数未知时依然服从已知分布的函数（枢轴量），进而推导出参数的置信区间。

设有样本 $X_1, X_2, \ldots, X_n$，依概率分布 $f(x;\theta)$，其中 $\theta$ 是待估参数。**枢轴量**是形如 $T(X_1, \ldots, X_n; \theta)$ 的函数，满足：

1. $T$ 的分布与 $\theta$ 无关（或与 $\theta$ 的分布形式已知）；
2. $T$ 是统计量与参数的函数。

## 二、枢轴量法的思想和步骤

1. **构造枢轴量 $T$**
   找到一个关于样本和参数的函数 $T(X_1, \ldots, X_n; \theta)$，其分布与 $\theta$ 无关。

2. **利用枢轴量的分布**
   已知 $T$ 的分布（一般是标准正态、卡方、t分布等），写出概率式：
   $$
   P\left(a < T(X_1, \ldots, X_n; \theta) < b\right) = 1 - \alpha
   $$

3. **反解出参数的区间**
   将上式关于 $\theta$ 反解，得到参数 $\theta$ 的置信区间。

## 三、典型例子

### 1、正态总体均值未知方差已知

设 $X_1, X_2, \ldots, X_n$ 独立同分布于 $N(\mu, \sigma^2)$，$\sigma^2$ 已知，$\mu$ 未知。

#### （1）构造枢轴量

样本均值 $\bar{X} = \dfrac{1}{n}\sum_{i=1}^n X_i$。
考虑
$$
Z = \frac{\bar{X} - \mu}{\sigma/\sqrt{n}}
$$
显然 $Z \sim N(0,1)$，其分布与 $\mu$ 无关，是枢轴量。

#### （2）利用分布写概率式

$$
P\left( -z_{\alpha/2} < Z < z_{\alpha/2} \right) = 1 - \alpha
$$

#### （3）反解参数区间

将 $Z$ 换回原变量：
$$
P\left( -z_{\alpha/2} < \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} < z_{\alpha/2} \right) = 1 - \alpha
$$
即
$$
P\left( \bar{X} - z_{\alpha/2} \frac{\sigma}{\sqrt{n}}
< \mu <
\bar{X} + z_{\alpha/2} \frac{\sigma}{\sqrt{n}} \right)
= 1 - \alpha
$$

### 2、正态总体均值未知方差亦未知

$X_1,\ldots,X_n \overset{\text{i.i.d.}}{\sim} N(\mu, \sigma^2)$，$\mu, \sigma^2$均未知。

#### （1）枢轴量构造

$$
T = \frac{\bar{X} - \mu}{S/\sqrt{n}}
$$
其中 $S^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2$，$T$ 服从 $t$ 分布：
$$
T \sim t(n-1)
$$

#### （2）推导置信区间

$$
P\left( -t_{\alpha/2}(n-1) < T < t_{\alpha/2}(n-1) \right) = 1 - \alpha
$$

即
$$
P\left(
\bar{X} - t_{\alpha/2}(n-1)\frac{S}{\sqrt{n}}
<
\mu
<
\bar{X} + t_{\alpha/2}(n-1)\frac{S}{\sqrt{n}}
\right)
= 1 - \alpha
$$

### 3、方差的置信区间（正态分布）

$$
\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)
$$

则
$$
P\left( \chi^2_{\alpha/2}(n-1) < \frac{(n-1)S^2}{\sigma^2} < \chi^2_{1-\alpha/2}(n-1) \right) = 1 - \alpha
$$

反解得
$$
P\left(
\frac{(n-1)S^2}{\chi^2_{1-\alpha/2}(n-1)}
<
\sigma^2
<
\frac{(n-1)S^2}{\chi^2_{\alpha/2}(n-1)}
\right)
= 1 - \alpha
$$

## 四、常见枢轴量举例

### 1、单总体正态分布，参数 $\sigma^2$ 已知，估计 $\mu$

- **枢轴量**：
  $$
  Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \sim N(0, 1)
  $$
- **置信区间**：
  $$
  \left( \bar{X} - z_{\alpha/2} \frac{\sigma}{\sqrt{n}},\; \bar{X} + z_{\alpha/2} \frac{\sigma}{\sqrt{n}} \right)
  $$
- **置信上限**：
  $$
  \bar{X} + z_{\alpha} \frac{\sigma}{\sqrt{n}}
  $$
- **置信下限**：
  $$
  \bar{X} - z_{\alpha} \frac{\sigma}{\sqrt{n}}
  $$

### 2、单总体正态分布，参数 $\sigma^2$ 未知，估计 $\mu$

- **枢轴量**：
  $$
  t = \frac{\bar{X} - \mu}{S / \sqrt{n}} \sim t(n-1)
  $$
- **置信区间**：
  $$
  \left( \bar{X} - t_{\alpha/2}(n-1) \frac{S}{\sqrt{n}},\; \bar{X} + t_{\alpha/2}(n-1) \frac{S}{\sqrt{n}} \right)
  $$
- **置信上限**：
  $$
  \bar{X} + t_{\alpha}(n-1) \frac{S}{\sqrt{n}}
  $$
- **置信下限**：
  $$
  \bar{X} - t_{\alpha}(n-1) \frac{S}{\sqrt{n}}
  $$

### 3、单总体正态分布，估计 $\sigma^2$

- **枢轴量**：
  $$
  \chi^2 = \frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)
  $$
- **置信区间**：
  $$
  \left( \frac{(n-1)S^2}{\chi^2_{1-\alpha/2}(n-1)},\; \frac{(n-1)S^2}{\chi^2_{\alpha/2}(n-1)} \right)
  $$
- **置信上限**：
  $$
  \frac{(n-1)S^2}{\chi^2_{\alpha}(n-1)}
  $$
- **置信下限**：
  $$
  \frac{(n-1)S^2}{\chi^2_{1-\alpha}(n-1)}
  $$

### 4、两正态总体，$\sigma_1^2,\sigma_2^2$ 已知，估计 $\mu_1 - \mu_2$

- **枢轴量**：
  $$
  Z = \frac{(\bar{X} - \bar{Y}) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} \sim N(0,1)
  $$
- **置信区间**：
  $$
  (\bar{X} - \bar{Y}) \pm z_{\alpha/2} \sqrt{ \frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2} }
  $$
- **置信上限**：
  $$
  (\bar{X} - \bar{Y}) + z_{\alpha} \sqrt{ \frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2} }
  $$
- **置信下限**：
  $$
  (\bar{X} - \bar{Y}) - z_{\alpha} \sqrt{ \frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2} }
  $$

### 5、两正态总体，$\sigma_1^2,\sigma_2^2$ 未知但相等，估计 $\mu_1 - \mu_2$

- **枢轴量**：
  $$
  t = \frac{ (\bar{X} - \bar{Y}) - (\mu_1 - \mu_2) }{ S_p \sqrt{ \frac{1}{n_1} + \frac{1}{n_2} } } \sim t(n_1 + n_2 - 2)
  $$
  其中
  $$
  S_p^2 = \frac{ (n_1-1)S_1^2 + (n_2-1)S_2^2 }{ n_1 + n_2 - 2 }
  $$
- **置信区间**：
  $$
  (\bar{X} - \bar{Y}) \pm t_{\alpha/2}(n_1 + n_2 - 2) S_p \sqrt{ \frac{1}{n_1} + \frac{1}{n_2} }
  $$
- **置信上限**：
  $$
  (\bar{X} - \bar{Y}) + t_{\alpha}(n_1 + n_2 - 2) S_p \sqrt{ \frac{1}{n_1} + \frac{1}{n_2} }
  $$
- **置信下限**：
  $$
  (\bar{X} - \bar{Y}) - t_{\alpha}(n_1 + n_2 - 2) S_p \sqrt{ \frac{1}{n_1} + \frac{1}{n_2} }
  $$

### 6、两正态总体，$\sigma_1^2,\sigma_2^2$ 未知且不等，估计 $\mu_1 - \mu_2$

- **枢轴量**：
  $$
  t' = \frac{ (\bar{X} - \bar{Y}) - (\mu_1 - \mu_2) }{ \sqrt{ \frac{S_1^2}{n_1} + \frac{S_2^2}{n_2} } }
  $$
  近似服从 $t$ 分布，近似自由度
  $$
  k = \min(n_1-1, n_2-1)
  $$
- **置信区间**：
  $$
  (\bar{X} - \bar{Y}) \pm t_{\alpha/2}(k) \sqrt{ \frac{S_1^2}{n_1} + \frac{S_2^2}{n_2} }
  $$
- **置信上限**：
  $$
  (\bar{X} - \bar{Y}) + t_{\alpha}(k) \sqrt{ \frac{S_1^2}{n_1} + \frac{S_2^2}{n_2} }
  $$
- **置信下限**：
  $$
  (\bar{X} - \bar{Y}) - t_{\alpha}(k) \sqrt{ \frac{S_1^2}{n_1} + \frac{S_2^2}{n_2} }
  $$

### 7、两正态总体，估计比值 $\frac{\sigma_1^2}{\sigma_2^2}$

- **枢轴量**：
  $$
  F = \frac{S_1^2 / \sigma_1^2}{S_2^2 / \sigma_2^2} = \frac{S_1^2 / S_2^2}{\sigma_1^2 / \sigma_2^2} \sim F(n_1-1, n_2-1)
  $$
- **置信区间**：
  $$
  \left( \frac{S_1^2 / S_2^2}{F_{1-\alpha/2}(n_1-1, n_2-1)},\; \frac{S_1^2 / S_2^2}{F_{\alpha/2}(n_1-1, n_2-1)} \right)
  $$
- **置信上限**：
  $$
  \frac{S_1^2 / S_2^2}{F_{\alpha}(n_1-1, n_2-1)}
  $$
- **置信下限**：
  $$
  \frac{S_1^2 / S_2^2}{F_{1-\alpha}(n_1-1, n_2-1)}
  $$
