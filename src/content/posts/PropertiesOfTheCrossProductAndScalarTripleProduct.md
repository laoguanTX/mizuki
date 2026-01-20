---
title: 叉积和混合积性质
published: 2025-06-03
category: ["数学", "高等数学"]
tags: ["微积分", "线性代数"]
alias: "propertiesofthecrossproductandscalartripleproduct"
---
## 一、叉积

### 1、定义

设$\mathbf{a} = (a_1, a_2, a_3)$，$\mathbf{b} = (b_1, b_2, b_3)$是三维空间中的两个向量，则它们的差积（叉积）定义为：

$$
\mathbf{a} \times \mathbf{b} = 
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3
\end{vmatrix}
= 
\left(
a_2b_3 - a_3b_2,\ 
a_3b_1 - a_1b_3,\ 
a_1b_2 - a_2b_1
\right)
$$

### 2、运算法则

#### （1）反交换律

$$
\mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a})
$$

#### （2）分配律

$$
\mathbf{a} \times (\mathbf{b} + \mathbf{c}) = \mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c}
$$

#### （3）标量乘法结合律

$$
(k\mathbf{a}) \times \mathbf{b} = k(\mathbf{a} \times \mathbf{b}) = \mathbf{a} \times (k\mathbf{b})
$$

#### （4）与自身叉积为零

$$
\mathbf{a} \times \mathbf{a} = \mathbf{0}
$$

### 3、算数证明

#### （1）反交换律证明

由定义：

$$
\mathbf{a} \times \mathbf{b} = 
\left(
a_2b_3 - a_3b_2,\ 
a_3b_1 - a_1b_3,\ 
a_1b_2 - a_2b_1
\right)
$$

而

$$
\mathbf{b} \times \mathbf{a} = 
\left(
b_2a_3 - b_3a_2,\ 
b_3a_1 - b_1a_3,\ 
b_1a_2 - b_2a_1
\right)
$$

注意到：

- $b_2a_3 - b_3a_2 = -(a_2b_3 - a_3b_2)$
- $b_3a_1 - b_1a_3 = -(a_3b_1 - a_1b_3)$
- $b_1a_2 - b_2a_1 = -(a_1b_2 - a_2b_1)$

因此

$$
\mathbf{b} \times \mathbf{a} = -(\mathbf{a} \times \mathbf{b})
$$

#### （2）分配律证明

$\mathbf{a} \times (\mathbf{b} + \mathbf{c})$展开：

设$\mathbf{b} = (b_1, b_2, b_3)$，$\mathbf{c} = (c_1, c_2, c_3)$，则

$$
\mathbf{b} + \mathbf{c} = (b_1 + c_1, b_2 + c_2, b_3 + c_3)
$$

$\mathbf{a} \times (\mathbf{b} + \mathbf{c})$的第一个分量：

$$
a_2(b_3 + c_3) - a_3(b_2 + c_2) = a_2b_3 + a_2c_3 - a_3b_2 - a_3c_2
$$

同理，其他分量展开得：

$$
\mathbf{a} \times (\mathbf{b} + \mathbf{c}) = 
(a_2b_3 - a_3b_2,\ a_3b_1 - a_1b_3,\ a_1b_2 - a_2b_1) + (a_2c_3 - a_3c_2,\ a_3c_1 - a_1c_3,\ a_1c_2 - a_2c_1)
$$

即

$$
\mathbf{a} \times (\mathbf{b} + \mathbf{c}) = \mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c}
$$

#### （3）标量乘法结合律证明

$(k\mathbf{a}) \times \mathbf{b}$

$$
(k a_1, k a_2, k a_3) \times (b_1, b_2, b_3) = (k a_2 b_3 - k a_3 b_2, k a_3 b_1 - k a_1 b_3, k a_1 b_2 - k a_2 b_1) = k (\mathbf{a} \times \mathbf{b})
$$

同理，

$$
\mathbf{a} \times (k\mathbf{b}) = k (\mathbf{a} \times \mathbf{b})
$$

#### （4）与自身叉积为零证明

$\mathbf{a} \times \mathbf{a}$：

$$
(a_2 a_3 - a_3 a_2, a_3 a_1 - a_1 a_3, a_1 a_2 - a_2 a_1) = (0, 0, 0)
$$

即$\mathbf{a} \times \mathbf{a} = \mathbf{0}$。

### 4、几何解释

- 差积$\mathbf{a} \times \mathbf{b}$的模为：
  $$
  |\mathbf{a} \times \mathbf{b}| = |\mathbf{a}|\,|\mathbf{b}|\,\sin\theta
  $$
  其中$\theta$为$\mathbf{a}$与$\mathbf{b}$的夹角。
- $\mathbf{a} \times \mathbf{b}$的方向由右手法则确定，垂直于$\mathbf{a}$和$\mathbf{b}$张成的平面。
- $\mathbf{a} \times \mathbf{b}$的模等于以$\mathbf{a}$、$\mathbf{b}$为邻边的平行四边形的面积。

## 二、混合积（标量三重积）

### 1、定义

设$\mathbf{a},\mathbf{b},\mathbf{c}$为三维空间中的三个向量，混合积定义为：

$$
[\mathbf{a},\mathbf{b},\mathbf{c}] = (\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}
$$

或行列式形式：

$$
[\mathbf{a},\mathbf{b},\mathbf{c}] = 
\begin{vmatrix}
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3 \\
c_1 & c_2 & c_3
\end{vmatrix}
$$

### 2、运算法则

#### （1）反对称性

混合积对任意两个向量交换均变号：

$$
[\mathbf{a},\mathbf{b},\mathbf{c}] = -[\mathbf{b},\mathbf{a},\mathbf{c}] = -[\mathbf{a},\mathbf{c},\mathbf{b}]
$$

#### （2）线性性

对任一分量线性：

$$
[k\mathbf{a}_1 + \mathbf{a}_2,\mathbf{b},\mathbf{c}] = k[\mathbf{a}_1,\mathbf{b},\mathbf{c}] + [\mathbf{a}_2,\mathbf{b},\mathbf{c}]
$$

对$\mathbf{b}$、$\mathbf{c}$同理。

### 3、算数证明

#### （1）反对称性证明

交换$\mathbf{a}$和$\mathbf{b}$：

$$
[\mathbf{a},\mathbf{b},\mathbf{c}] = 
\begin{vmatrix}
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3 \\
c_1 & c_2 & c_3
\end{vmatrix}
= -\begin{vmatrix}
b_1 & b_2 & b_3 \\
a_1 & a_2 & a_3 \\
c_1 & c_2 & c_3
\end{vmatrix}
= -[\mathbf{b},\mathbf{a},\mathbf{c}]
$$

同理，交换其他两个分量依然变号。

#### （2）线性性证明

对$\mathbf{a}$分量：

$$
[(k\mathbf{a}_1 + \mathbf{a}_2), \mathbf{b}, \mathbf{c}]
= ((k\mathbf{a}_1 + \mathbf{a}_2) \times \mathbf{b}) \cdot \mathbf{c}
= (k (\mathbf{a}_1 \times \mathbf{b}) + \mathbf{a}_2 \times \mathbf{b}) \cdot \mathbf{c}
= k (\mathbf{a}_1 \times \mathbf{b}) \cdot \mathbf{c} + (\mathbf{a}_2 \times \mathbf{b}) \cdot \mathbf{c}
= k[\mathbf{a}_1, \mathbf{b}, \mathbf{c}] + [\mathbf{a}_2, \mathbf{b}, \mathbf{c}]
$$

### 4、几何解释

- $[\mathbf{a},\mathbf{b},\mathbf{c}]$的绝对值等于以$\mathbf{a},\mathbf{b},\mathbf{c}$为邻边的平行六面体的体积。
- 若$[\mathbf{a},\mathbf{b},\mathbf{c}] = 0$，则三向量共面。
