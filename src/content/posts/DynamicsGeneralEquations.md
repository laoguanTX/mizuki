---
title: 动力学普遍方程
published: 2025-12-16
category: ["物理", "力学"]
tags: ["理论力学", "分析力学"]
alias: "dynamicsgeneralequations"
---
## 一、广义坐标

### 1、自由度

一般情况下，一个由$n$质点组成的质点系在空间的位形用直角坐标来确定需要$3n$个坐标，即：
$$
x_i,\, y_i,\, z_i \quad (i = 1,\, 2,\, \ldots,\, n)
$$
如果系统受到$s$个完整约束，其约束方程为：
$$
f_j(x_1,\, y_1,\, z_1;\, \ldots;\, x_n,\, y_n,\, z_n;\, t) = 0 \quad (j = 1,\, 2,\, \ldots,\, s)
$$

则系统的$3n$个坐标并不完全独立，只有$k = 3n - s$个坐标是独立的（余下的$s$个由约束方程确定），故确定该质点系的位形只需$3n-s$个坐标，我们说该质点系有$3n-s$个自由度。

因此，确定受完整约束的质点系位形的独立坐标数目称为系统的自由度（对非完整约束，独立参数数和自由度不同）。

### 2、广义坐标

用以确定质点系位形的一组独立参变量称为广义坐标。一般情况下，由$n$个质点$A_1,\, A_2,\, \ldots,\, A_n$组成的系统，受到$s$个完整约束（即有$s$个独立的约束方程）时，总可以选取$k = 3n - s$个广义坐标$q_1,\, q_2,\, \ldots,\, q_k$来确定它的位形。于是，质点系内任一点$A_i$的矢径可表示成广义坐标的函数，即：
$$
\vec{r}_i = \vec{r}_i(q_1,\, q_2,\, \ldots,\, q_k;\, t) \qquad (i = 1,\, 2,\, \ldots,\, n)
$$

### 3、广义虚位移

广义坐标的等时变分称为广义虚位移，记为$\delta q_j$。

一般情况下，由$n$个质点$A_1,\, A_2,\, \ldots,\, A_n$组成的系统，受到$s$个约束（即有$s$个独立的约束方程）时，总可以选取$k = 3n - s$个广义坐标$q_1,\, q_2,\, \ldots,\, q_k$来确定它的位形。于是，质点系内任一点$A_i$的矢径可表示成广义坐标的函数，即:
$$
\vec{r}_i = \vec{r}_i(q_1,\, q_2,\, \ldots,\, q_k;\, t) \qquad (i = 1,\, 2,\, \ldots,\, n)
$$

取等时变分，可得虚位移$\delta \vec{r}_i$的广义坐标变换式:
$$
\delta \vec{r}_i = \frac{\partial \vec{r}_i}{\partial q_1} \delta q_1 + \frac{\partial \vec{r}_i}{\partial q_2} \delta q_2 + \cdots + \frac{\partial \vec{r}_i}{\partial q_k} \delta q_k = \sum_{j=1}^{k} \frac{\partial \vec{r}_i}{\partial q_j} \delta q_j
$$

#### 4、广义力

#### (1) 广义力的定义

将前面所得虚位移间的广义坐标变换式：
$$
\delta \vec{r}_i = \sum_{j=1}^k \frac{\partial \vec{r}_i}{\partial q_j} \delta q_j
$$
代入虚位移原理：
$$
\sum_{i=1}^n \delta W(F_i) = \sum_{i=1}^n \vec{F}_i \cdot \delta \vec{r}_i = 0
$$
有
$$
\sum_{i=1}^n \delta W(F_i) = \sum_{i=1}^n \vec{F}_i \cdot \delta \vec{r}_i = \sum_{i=1}^n \sum_{j=1}^k \vec{F}_i \cdot \frac{\partial \vec{r}_i}{\partial q_j} \delta q_j = \sum_{j=1}^k \left[ \sum_{i=1}^n \vec{F}_i \cdot \frac{\partial \vec{r}_i}{\partial q_j} \right] \delta q_j = 0
$$

令
$$
Q_j = \sum_{i=1}^n \vec{F}_i \cdot \frac{\partial \vec{r}_i}{\partial q_j} \qquad (j = 1, 2, \ldots, k)
$$

则上述式为
$$
\sum_{i=1}^n \delta W(F_i) = \sum_{j=1}^k Q_j \delta q_j = 0
$$

式中的
$$
Q_j = \sum_{i=1}^n \vec{F}_i \cdot \frac{\partial \vec{r}_i}{\partial q_j}
$$
称为对应广义坐标 $q_j$ 的广义力。由于：
$$
\vec{r}_i=x_i\boldsymbol{i}+y_i\boldsymbol{j}+z_i\boldsymbol{k}
$$
故有：
$$
\frac{\partial \vec{r}_i}{\partial q_j} = \frac{\partial x_i}{\partial q_j} \boldsymbol{i} + \frac{\partial y_i}{\partial q_j} \boldsymbol{j} + \frac{\partial z_i}{\partial q_j} \boldsymbol{k}
$$

又因为
$$
\vec{F}_i = F_{ix} \boldsymbol{i} + F_{iy} \boldsymbol{j} + F_{iz} \boldsymbol{k}
$$

所以广义力$Q_j$的表达式可写成解析式：
$$
Q_j = \sum_{i=1}^{n} \left( F_{ix} \frac{\partial x_i}{\partial q_j} + F_{iy} \frac{\partial y_i}{\partial q_j} + F_{iz} \frac{\partial z_i}{\partial q_j} \right)
\qquad (j = 1, 2, \ldots, k)
$$
广义力是代数量，不一定有明确的物理意义；广义力与$q_j$一一对应，不与受力物体一一对应；广义力的量纲由它对应的广义虚位移$\delta q_j$而定。当$\delta q_j$的量纲是长度时，$Q_j$的量纲就是力的量纲；当$\delta q_j$量纲是角度时，$Q_j$的量纲就是力矩的量纲。

对于主动力均为保守力的情形下的广义力，有更简明的表达公式。首先，系统有势能函数：

$$
V = V(x_1, y_1, z_1, x_2, \ldots, z_n) = V(q_1, q_2, \ldots, q_k)
$$

主动力在坐标轴上的投影分别为：

$$
F_{ix} = -\frac{\partial V}{\partial x_i}, \qquad 
F_{iy} = -\frac{\partial V}{\partial y_i}, \qquad 
F_{iz} = -\frac{\partial V}{\partial z_i}
$$

由：
$$
Q_j = \sum_{t=1}^n \left( F_{ix} \frac{\partial x_i}{\partial q_j} + F_{iy} \frac{\partial y_i}{\partial q_j} + F_{iz} \frac{\partial z_i}{\partial q_j} \right)
$$

则广义力表达式可写成：

$$
Q_j = -\sum_{i=1}^n \left( \frac{\partial V}{\partial x_i} \frac{\partial x_i}{\partial q_j} + \frac{\partial V}{\partial y_i} \frac{\partial y_i}{\partial q_j} + \frac{\partial V}{\partial z_i} \frac{\partial z_i}{\partial q_j} \right)
$$
简写为：
$$
Q_j=-\frac{\partial V}{\partial q_j}\qquad (f=1,2,\cdots,j)
$$
即，当主动力有势时，对应于每个广义坐标的广义力等于势能函数对该坐标的偏导数冠以负号。故当主动力有势时，质点系的平衡条件可写为：
$$
\frac{\partial V}{\partial q_j}=0\qquad(j=1,2,\cdots,k)
$$
即，在势力场中，具有理想约束的质点系平衡条件为：质点系势能对于每个广义坐标之偏导数分别为零。故当主动力有势时，质点系主动力的虚功和为：
$$
\sum_{i=1}^n \delta W(F_i) = \sum_{j=1}^k Q_j \delta q_j = \sum_{j=1}^k -\frac{\partial V}{\partial q_j} \delta q_j = -\delta V
$$

故质点系的平衡条件亦可写成

$$
\delta V = 0
$$

即，在势力场中，具有理想约束的质点系平衡条件为：质点系势能在平衡位置处一阶变分为零，即平衡位置上保守系统的势能取极值。

#### (2) 广义力的求解

1. 使用广义力的解析表达式：
   $$
   Q_j = \sum_{i=1}^{n} \left( F_{ix} \frac{\partial x_i}{\partial q_j} + F_{iy} \frac{\partial y_i}{\partial q_j} + F_{iz} \frac{\partial z_i}{\partial q_j} \right)
   \qquad (j = 1, 2, \ldots, k)
   $$

2. 应用虚功的定义：
   $$
   \sum_{i=1}^n \delta W(F_i) = \sum_{j=1}^k Q_j \delta q_j = 0
   $$
   注意到广义坐标$q_1,q_2,\cdots,q_k$是彼此独立的，因此为了求某个广义力$Q_t$，可以取一组特殊的虚位移，令$\delta q_t\neq0$，其余的$\delta q_j=0(j\neq t)$，从而写成：
   $$
   \left[\sum\delta W\right]_t=Q_t\delta q_t
   $$
   式中$\left[\sum\delta W\right]_t$表示仅虚位移$\delta 1_t$非零时系统上主动力的虚功之和。于是，广义力：
   $$
   Q_t=\frac{\left[\sum\delta W\right]_t}{\delta q_t}
   $$

> [!NOTE] 
>
> 这里只学习动力学普遍方程和第二类拉格朗日方程。

## 二、动力学普遍方程

### 1、动力学普遍方程

质点系由$m$个质点组成，受到$s$个完整约束，系统自由度为$k=3n-s$。取广义坐标$q_1,q_2,\cdots,q_k$，任一质点的矢量坐标通过广义坐标表示为：
$$
\vec r_i=\vec r_i(q_1,q_2,\cdots q_k;t)
$$
质点的质量为 $m_i$，受到主动力 $F_i$ 与约束力 $F_{ci}$ 作用，再加上惯性力 $F_{gi} = -m_i a_i$。

根据达朗贝尔原理，质点系的所有主动力、约束力和惯性力在形式上组成平衡力系，满足平衡条件：

$$
\vec{F}_i + \vec{F}_{ci} + \vec{F}_{gi} = 0, \qquad (i = 1, 2, \cdots, n)
$$
所以：
$$
\sum_{i=1}^n(\vec{F}_i + \vec{F}_{ci} + \vec{F}_{gi})\cdot\delta \vec r_i=0
$$
注意对于理想约束：
$$
\sum_{i=1}^n\vec F_{ci}\cdot\delta \vec r_i=0
$$
得到：
$$
\sum\delta W=\sum_{i=1}^n(\vec{F}_i+\vec{F}_{gi})\cdot\delta\vec{r}_i=\sum_{i=1}^n(\vec{F}_i-m_i\ddot{\vec{r}}_i)\cdot\delta\vec{r}_i=0
$$
上面式子叫做动力学普遍方程，或者是达朗贝尔-拉格朗日方程。

> [!NOTE]
>
> 根据这个原理和命名方法，虚位移原理的表达式可以叫做静力学普遍方程。

### 2、广义力表示的普遍方程

广义虚位移$\delta 1_q,\delta q_2,\cdots,\delta q_k$相互独立，将质点系各个质点的虚位移通过广义虚位移表示。主动力的虚功总和为：
$$
\begin{aligned}
\sum \delta W_a 
&= \sum_{i=1}^n \mathbf{F}_i \cdot \delta \mathbf{r}_i \\
&= \sum_{i=1}^n \mathbf{F}_i \cdot \sum_{j=1}^k \frac{\partial \mathbf{r}_i}{\partial q_j} \delta q_j \\
&= \sum_{j=1}^k \left( \sum_{i=1}^n \mathbf{F}_i \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} \right) \delta q_j \\
&= \sum_{j=1}^k Q_j \delta q_j
\end{aligned}
$$
惯性力的虚功总和为：
$$
\begin{aligned}
\sum \delta W_g 
&= \sum_{i=1}^n \mathbf{F}_{gi} \cdot \delta \mathbf{r}_i \\
&= \sum_{i=1}^n \mathbf{F}_{gi} \cdot \sum_{j=1}^k \frac{\partial \mathbf{r}_i}{\partial q_j} \delta q_j \\
&= \sum_{j=1}^k \left( \sum_{i=1}^n \mathbf{F}_{gi} \cdot \frac{\partial \mathbf{r}_i}{\partial q_j} \right) \delta q_j \\
&= \sum_{j=1}^k Q_{gj} \delta q_j
\end{aligned}
$$
其中$Q_{gj}$质点系相对于广义坐标$q_j$的广义惯性力，是一个代数量。将主动力与惯性力虚功的表达式代入动力学普遍方程，得到：
$$
\sum\delta W=\sum_{j=1}^k(Q_j+Q_{gj})\delta q_j=0
$$
由于广义虚位移$\delta q_1,\delta q_2,\cdots \delta q_k$之间独立，所以得到：
$$
Q_j+Q_{qj}=0\quad(j=1,2,\cdots,k)
$$
表面质点系的动力学普遍方程也可以表示为广义力和广义惯性力之和等于零，他是代数方程，其数目等于系统的自由度数。
