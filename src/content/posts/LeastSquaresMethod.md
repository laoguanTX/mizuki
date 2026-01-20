---
title: 最小二乘法
published: 2025-06-19
category: ["数学", "概率论与数理统计"]
tags: ["数理统计", "人工智能"]
alias: "leastsquaresmethod"
---
最小二乘法（Least Squares Method）是一种用于数据拟合的方法，通过最小化观测值与模型预测值之间的误差平方和，来求得模型参数的最优估计。下面以一元线性回归为例，详细推导最小二乘法的过程。

##  一、问题描述

给定 $n$ 组数据点 $(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$，希望用一个线性函数

$$
y = a x + b
$$

来拟合这些数据点。目标是找到参数 $a$ 和 $b$，使得拟合直线与观测数据之间的误差平方和最小。

## 二、残差平方和

对于每一个数据点 $i$，其观测值为 $y_i$，拟合值为 $\hat{y}_i = a x_i + b$。因此，残差为

$$
r_i = y_i - (a x_i + b)
$$

残差平方和 $S$ 定义为：

$$
S(a, b) = \sum_{i=1}^{n} [y_i - (a x_i + b)]^2
$$

我们的目标是最小化 $S(a, b)$。

## 三、求最优参数

令 $S(a, b)$ 关于 $a$ 和 $b$ 的偏导数为零，得到极值点。

### 1、对 $a$ 求偏导

$$
\frac{\partial S}{\partial a} = \sum_{i=1}^{n} 2 [y_i - (a x_i + b)] \cdot (-x_i) = -2 \sum_{i=1}^{n} x_i [y_i - (a x_i + b)]
$$

令 $\frac{\partial S}{\partial a} = 0$，得

$$
\sum_{i=1}^{n} x_i y_i - a \sum_{i=1}^{n} x_i^2 - b \sum_{i=1}^{n} x_i = 0
$$

### 2、对 $b$ 求偏导

$$
\frac{\partial S}{\partial b} = \sum_{i=1}^{n} 2 [y_i - (a x_i + b)] \cdot (-1) = -2 \sum_{i=1}^{n} [y_i - (a x_i + b)]
$$

令 $\frac{\partial S}{\partial b} = 0$，得

$$
\sum_{i=1}^{n} y_i - a \sum_{i=1}^{n} x_i - b n = 0
$$

## 四、联立方程

将上面的两个式子整理如下：

$$
\begin{cases}
\sum_{i=1}^{n} x_i y_i = a \sum_{i=1}^{n} x_i^2 + b \sum_{i=1}^{n} x_i \\
\sum_{i=1}^{n} y_i = a \sum_{i=1}^{n} x_i + b n
\end{cases}
$$

令

- $S_x = \sum_{i=1}^{n} x_i$
- $S_y = \sum_{i=1}^{n} y_i$
- $S_{xx} = \sum_{i=1}^{n} x_i^2$
- $S_{xy} = \sum_{i=1}^{n} x_i y_i$

上式变为：

$$
\begin{cases}
S_{xy} = a S_{xx} + b S_x \\
S_y = a S_x + b n
\end{cases}
$$

## 五、求解 $a$ 和 $b$

第一步，先用第二个方程解出 $b$：

$$
b = \frac{S_y - a S_x}{n}
$$

把 $b$ 代入第一个方程：

$$
S_{xy} = a S_{xx} + \left( \frac{S_y - a S_x}{n} \right) S_x
$$

$$
S_{xy} = a S_{xx} + \frac{S_x S_y}{n} - a \frac{S_x^2}{n}
$$

$$
S_{xy} - \frac{S_x S_y}{n} = a \left( S_{xx} - \frac{S_x^2}{n} \right)
$$
$$
a = \frac{S_{xy} - \frac{S_x S_y}{n}}{S_{xx} - \frac{S_x^2}{n}}
$$

再代入 $b$ 的表达式：

$$
b = \frac{S_y - a S_x}{n}
$$

## 六、均值符号下的表达式

设

- $\overline{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$
- $\overline{y} = \frac{1}{n} \sum_{i=1}^{n} y_i$

则有

$$
a = \frac{ \sum_{i=1}^{n} (x_i - \overline{x})(y_i - \overline{y}) }{ \sum_{i=1}^{n} (x_i - \overline{x})^2 }
$$

$$
b = \overline{y} - a \overline{x}
$$

由于 $S(a, b)$ 是关于 $a$ 和 $b$ 的二次函数，且系数矩阵为正定（$S_{xx} - S_x^2/n > 0$，只要 $x_i$ 不全相等），因此该极值点为**唯一全局最小值**，即最小二乘解。
