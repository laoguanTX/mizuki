---
title: 随机变量函数的分布
published: 2025-03-27
category: ["数学", "概率论与数理统计"]
tags: ["概率论"]
alias: "distributionoffunctionsofrandomvariables"
---
## 一、问题描述
设$X$为随机变量，已知$X$的概率分布，$Y = g(X)$是其函数。需要根据$X$的分布求出$Y$的分布。

## 二、离散型随机变量

### 1. 求解步骤
- **步骤1**：列出$Y$所有可能取值$\{ y_j = g(x_i) | x_i \in X(\Omega) \}$
- **步骤2**：对每个$y_j$，计算概率：
  $$ P(Y=y_j) = \sum_{x_i \in g^{-1}(y_j)} P(X=x_i) $$
  其中$g^{-1}(y_j) = \{ x_i | g(x_i) = y_j \}$

### 2. 数学证明
设$X$的分布律为$P(X=x_i)=p_i$，则：
$$ P(Y=y_j) = P\left( \bigcup_{x_i \in g^{-1}(y_j)} \{X=x_i\} \right) = \sum_{x_i \in g^{-1}(y_j)} P(X=x_i) $$

## 三、连续型随机变量

### 1、分布函数法（通用方法）
#### 求解步骤：
1. 确定$Y$的分布函数：
   $$ F_Y(y) = P(Y \leq y) = P(g(X) \leq y) $$
2. 将事件$\{g(X) \leq y\}$转换为$X$的取值范围
3. 对$f_X(x)$在对应区域积分：
   $$ F_Y(y) = \int_{g(x) \leq y} f_X(x) dx $$
4. 对$F_Y(y)$求导得密度函数：
   $$ f_Y(y) = \frac{d}{dy}F_Y(y) $$
   
### 2、严格单调函数的公式法
设$g(x)$满足：
- 严格单调
- 可导
- 存在反函数$x = h(y)$

则密度函数公式：
$$
f_Y(y) = 
\begin{cases}
f_X(h(y)) \cdot |h'(y)|, & y \in g(\mathbb{R}) \\
0, & \text{其他}
\end{cases}
$$

**证明**：  
设$g(x)$严格递增：
$$ F_Y(y) = P(g(X) \leq y) = P(X \leq h(y)) = F_X(h(y)) $$
求导得：
$$ f_Y(y) = f_X(h(y)) \cdot h'(y) $$

当$g(x)$严格递减时：
$$ F_Y(y) = P(g(X) \leq y) = P(X \geq h(y)) = 1 - F_X(h(y)) $$
求导得：
$$ f_Y(y) = -f_X(h(y)) \cdot h'((y)) = f_X(h(y)) \cdot |h'(y)| $$
## 四、重要结论
1. **线性变换**：$Y = aX + b$
   $$ f_Y(y) = \frac{1}{|a|}f_X\left( \frac{y-b}{a} \right) $$
2. **指数分布**：若$X \sim Exp(\lambda)$，则$Y = kX$服从$Exp(\lambda/k)$
3. **正态分布线性性**：若$X \sim N(\mu,\sigma^2)$，则$Y = aX + b \sim N(a\mu + b, a^2\sigma^2)$
