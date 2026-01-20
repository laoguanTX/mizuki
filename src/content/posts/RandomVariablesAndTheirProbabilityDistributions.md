---
title: 随机变量及其概率分布
published: 2025-01-31
category: ["数学", "概率论与数理统计"]
tags: ["概率论"]
alias: "randomvariablesandtheirprobabilitydistributions"
---
## 一、离散型随机变量分布列
离散型随机变量的分布列是指随机变量取各个可能值的概率列表。设离散型随机变量 $X$ 的可能取值为 $x_1, x_2, \ldots, x_n$，则其分布列为：
$$
P(X = x_i) = p_i, \quad i = 1, 2, \ldots, n
$$
其中 $p_i \geq 0$ 且 $\sum_{i=1}^n p_i = 1$。

---

### 1. 0-1 分布（伯努利分布）
0-1 分布是描述只有两种可能结果的单次试验的分布。设随机变量 $X$ 表示试验结果，$X = 1$ 表示“成功”，$X = 0$ 表示“失败”，则其分布列为：
$$
P(X = k) = p^k (1-p)^{1-k}, \quad k = 0, 1
$$
其中 $p$ 是“成功”的概率，$0 < p < 1$。

---

### 2. 二项分布
二项分布描述在 $n$ 重伯努利试验中“成功”次数的分布。设随机变量 $X$ 表示在 $n$ 次独立试验中“成功”的次数，则 $X$ 服从参数为 $n$ 和 $p$ 的二项分布，记作：
$$
X \sim B(n, p)
$$
其分布列为：
$$
P(X = k) = C_n^k p^k (1-p)^{n-k}, \quad k = 0, 1, \ldots, n
$$
其中：
- $p$ 是每次试验“成功”的概率，$0 < p < 1$。

---

### 3. 超几何分布
超几何分布描述在不放回抽样的情况下，具有特定属性的个体数量的分布。设总体中有 $N$ 个个体，其中 $a$ 个具有特定属性，随机抽取 $n$ 个个体，$X$ 表示其中具有特定属性的个体数量，则 $X$ 服从超几何分布，记作：
$$
X \sim H(n, a, N)
$$
其分布列为：
$$
P(X = k) = \frac{C_a^k C_{N-a}^{n-k}}{C_N^n}, \quad k = \max\{0, n - (N - a)\}, \ldots, \min\{a, n\}
$$
其中：
- $C_a^k$ 表示从 $a$ 个具有特定属性的个体中选出 $k$ 个的组合数；
- $C_{N-a}^{n-k}$ 表示从 $N - a$ 个不具有特定属性的个体中选出 $n - k$ 个的组合数；
- $C_N^n$ 表示从总体 $N$ 个个体中选出 $n$ 个的组合数。

---

### 4. 几何分布
几何分布描述在伯努利试验中首次“成功”所需的试验次数的分布。设随机变量 $X$ 表示首次“成功”发生的试验次数，则 $X$ 服从参数为 $p$ 的几何分布，记作：
$$
X \sim \text{Geom}(p)
$$
其分布列为：
$$
P(X = k) = (1-p)^{k-1} p, \quad k = 1, 2, \ldots
$$
其中 $p$ 是每次试验“成功”的概率，$0 < p < 1$。

---

### 5. 负二项分布（帕斯卡分布）
负二项分布描述在伯努利试验中达到指定次数“成功”所需的试验次数的分布。设随机变量 $X$ 表示第 $r$ 次“成功”发生时的试验次数，则 $X$ 服从参数为 $r$ 和 $p$ 的负二项分布，记作：
$$
X \sim \text{NB}(r, p)
$$
其分布列为：
$$
P(X = k) = C_{k-1}^{r-1} p^r (1-p)^{k-r}, \quad k = r, r+1, \ldots
$$
其中：
- $p$ 是每次试验“成功”的概率，$0 < p < 1$。

---

### 6. 泊松分布
泊松分布描述在单位时间或单位空间内某事件发生次数的分布。设随机变量 $X$ 表示在单位时间或单位空间内事件发生的次数，则 $X$ 服从参数为 $\lambda$（事件发生的平均速率）的泊松分布，记作：
$$
X \sim \text{P}(\lambda)
$$
其分布列为：
$$
P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \ldots
$$
其中：
- $\lambda > 0$ 是单位时间或单位空间内事件发生的平均次数；
- $e$ 是自然对数的底数（约等于 2.71828）。

## 二、 连续型随机变量概率密度函数
设 $X$ 是一个连续型随机变量，其概率密度函数（PDF）为 $f(x)$，满足：
1. $f(x) \geq 0$ 对所有 $x$ 成立；
2. $\int_{-\infty}^{\infty} f(x) \, dx = 1$；
3. 对任意实数 $a \leq b$，$X$ 落在区间 $[a, b]$ 内的概率为：
$$
P(a \leq X \leq b) = \int_a^b f(x) \, \mathrm{d}x
$$

其分布函数记作：
$$
F(x)=\int^x_{-\infty}f(x)\mathrm{d}x
$$


---

### 1. 均匀分布
若连续型随机变量 $X$ 在区间 $[a, b]$ 上服从均匀分布，记作 $X \sim U(a, b)$，其概率密度函数为：
$$
f(x) = \begin{cases}
\dfrac{1}{b-a}, & a \leq x \leq b, \\
0, & \text{其他}.
\end{cases}
$$

---

### 2. 正态分布
若连续型随机变量 $X$ 服从参数为 $\mu$（均值）和 $\sigma^2$（方差）的正态分布，记作 $X \sim N(\mu, \sigma^2)$，其概率密度函数为：
$$
f(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \quad -\infty < x < \infty.
$$

特别地，若 $\mu = 0$，$\sigma^2 = 1$，记作 $X \sim N(0, 1)$，概率密度函数为：
$$
f(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}, \quad -\infty < x < \infty.
$$

则称连续型随机变量 $X$ 服从标准正态分布。

---

### 3. 指数分布
若连续型随机变量 $X$ 服从参数为 $\lambda$（率参数）的指数分布，记作 $X \sim \text{Exp}(\lambda)$，其概率密度函数为：
$$
f(x) = \begin{cases}
\lambda e^{-\lambda x}, & x \geq 0, \\
0, & x < 0.
\end{cases}
$$

---

### 4. Gamma 分布
若连续型随机变量 $X$ 服从参数为 $\alpha$（形状参数）和 $\beta$（率参数）的 Gamma 分布，记作 $X \sim \Gamma(\alpha, \beta)$，其概率密度函数为：
$$
f(x) = \begin{cases}
\dfrac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha-1} e^{-\beta x}=\dfrac{\beta e^{-\lambda x}(\beta x)^{\alpha-1}}{\Gamma(\alpha)}, & x \geq 0, \\
0, & x < 0.
\end{cases}
$$
其中 $\Gamma(\alpha)$ 定义为：
$$
\Gamma(\alpha) = \int_0^\infty t^{\alpha-1} e^{-t} \, \mathrm{d}t
$$

---

### 5. 二参数威布尔分布
若连续型随机变量 $X$ 服从参数为 $\lambda$（尺度参数）和 $k$（形状参数）的威布尔分布，记作 $X \sim \text{Weibull}(\lambda, k)$，其概率密度函数为：
$$
f(x) = \begin{cases}
\frac{k}{\lambda} \left(\frac{x}{\lambda}\right)^{k-1} e^{-(x/\lambda)^k}, & x \geq 0, \\
0, & x < 0.
\end{cases}
$$

---

### 6. β 分布
若连续型随机变量 $X$ 服从参数为 $\alpha$ 和 $\beta$ 的 β 分布，记作 $X \sim \beta(\alpha, \beta)$，其概率密度函数为：
$$
f(x) = \begin{cases}
\dfrac{x^{\alpha-1} (1-x)^{\beta-1}}{B(\alpha, \beta)}=\dfrac{\Gamma(a+b)}{\Gamma(a)\Gamma(b)}x^{\alpha-1}(x-1)^{\beta-1}, & 0 \leq x \leq 1, \\
0, & \text{其他}.
\end{cases}
$$
其中 $B(\alpha, \beta)$ 是$\beta$函数，定义为：
$$
B(\alpha, \beta) = \int_0^1 t^{\alpha-1} (1-t)^{\beta-1} \, \mathrm{d}t
$$