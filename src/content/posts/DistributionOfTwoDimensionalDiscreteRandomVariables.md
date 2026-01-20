---
title: 二维离散随机变量的分布
published: 2025-03-27
category: ["数学", "概率论与数理统计"]
tags: ["概率论"]
alias: "distributionoftwodimensionaldiscreterandomvariables"
---
## 一、联合分布 (Joint Distribution)

### 1. 定义
设二维离散型随机变量$(X, Y)$的可能取值为$(x_i, y_j)$，其联合分布律为：
$$ P\{X = x_i, Y = y_j\} = p_{ij}, \quad i,j = 1,2,\cdots $$

### 2. 性质
- **非负性**：$p_{ij} \geq 0$
- **归一性**：$\sum_{i=1}^{+\infty} \sum_{j=1}^{+\infty} p_{ij} = 1$

### 3. 表示形式
用表格表示联合分布律：
$$
\begin{array}{|c|cccc|c|}
\hline
X \backslash Y & y_1 & y_2 & \cdots & y_j & P\{X=x_i\} \\
\hline
x_1 & p_{11} & p_{12} & \cdots & p_{1j} & p_1 \\
x_2 & p_{21} & p_{22} & \cdots & p_{2j} & p_2 \\
\vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
x_i & p_{i1} & p_{i2} & \cdots & p_{ij} & p_i \\
\vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
\hline
P\{Y=y_j\} & p_{\cdot 1} & p_{\cdot 2} & \cdots & p_{\cdot j} & 1 \\
\hline
\end{array}
$$

---

## 二、边际分布 (Marginal Distribution)

### 1. 定义
- $X$的边际分布律：  
  $$ P\{X = x_i\} = p_{i\cdot} = \sum_{j=1}^{+\infty} p_{ij}, \quad i = 1,2,\cdots $$
- $Y$的边际分布律：  
  $$ P\{Y = y_j\} = p_{\cdot j} = \sum_{i=1}^{+\infty} p_{ij}, \quad j = 1,2,\cdots $$

### 2. 性质
- **非负性**：$p_{i\cdot} \geq 0$，$p_{\cdot j} \geq 0$
- **归一性**：$\sum_{i=1}^{+\infty} p_{i\cdot} = 1$，$\sum_{j=1}^{+\infty} p_{\cdot j} = 1$

### 3. 计算方式
通过联合分布表按行或列求和：
- **行求和**：$p_{i\cdot}$为第$i$行所有$p_{ij}$的和
- **列求和**：$p_{\cdot j}$为第$j$列所有$p_{ij}$的和

---

## 三、条件分布 (Conditional Distribution)

### 1. 定义
- **给定$Y=y_j$时$X$的条件分布律**：  
  $$ P\{X = x_i | Y = y_j\} = \frac{p_{ij}}{p_{\cdot j}}, \quad \text{当} \ p_{\cdot j} > 0 $$
- **给定$X=x_i$时$Y$的条件分布律**：  
  $$ P\{Y = y_j | X = x_i\} = \frac{p_{ij}}{p_{i\cdot}}, \quad \text{当} \ p_{i\cdot} > 0 $$

### 2. 性质
- **非负性**：$\frac{p_{ij}}{p_{\cdot j}} \geq 0$，$\frac{p_{ij}}{p_{i\cdot}} \geq 0$
- **归一性**：  
  $$ \sum_{i=1}^{+\infty} P\{X = x_i | Y = y_j\} = 1 $$  
  $$ \sum_{j=1}^{+\infty} P\{Y = y_j | X = x_i\} = 1 $$

### 3. 应用场景
- 用于分析在已知某一随机变量取值时，另一变量的概率分布特性