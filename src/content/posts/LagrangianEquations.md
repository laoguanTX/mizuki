---
title: 拉格朗日方程
published: 2025-12-19
category: ["物理", "力学"]
tags: ["理论力学", "分析力学"]
alias: "lagrangianequations"
---
## 一、第二类拉格朗日方程

一般地，质点系各个质点的矢量坐标可以表示为广义坐标的函数$\vec{r}=\vec{r}_i(q_1,q_2,\cdots,q_k;t)$。质点速度相应地通过广义速度表示为：
$$
\dot{\vec{r}}_i=\sum_{l=1}^k\frac{\partial {\vec{r}}_i}{\partial q_l}\dot{q}_l+\frac{\partial \dot{\vec{r}}_i}{\partial t}
$$
上式两边对广义速度$\dot q_j$求偏导数，得到消点规则：
$$
\frac{\partial {\vec{r}}_i}{\partial q_j}=\frac{\partial \dot{\vec{r}}}{\partial\dot{q}}
$$
质点速度关于广义坐标的导数为
$$
\frac{\partial \dot{\vec{r}}_i}{\partial q_j} = \sum_{l=1}^k \frac{\partial^2 \vec{r}_i}{\partial q_l \partial q_j} \dot{q}_l + \frac{\partial^2 \vec{r}_i}{\partial t \partial q_j}
$$

而质点矢量坐标关于广义坐标的导数仍为广义坐标的函数，
$$
\frac{\partial \vec{r}_i}{\partial q_j} = \frac{\partial \vec{r}_i}{\partial q_j}(q_1, q_2, \cdots, q_k; t)
$$
再将它关于时间求全导数，可得
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial \vec{r}_i}{\partial q_j}\right) = \sum_{l=1}^k \frac{\partial}{\partial q_l} \left(\frac{\partial \vec{r}_i}{\partial q_j}\right) \dot{q}_l + \frac{\partial}{\partial t} \left(\frac{\partial \vec{r}_i}{\partial q_j}\right) = \sum_{l=1}^k \frac{\partial^2 \vec{r}_i}{\partial q_j \partial q_l} \dot{q}_l + \frac{\partial^2 \vec{r}_i}{\partial q_j \partial t}
$$

这里，假定矢量坐标 $\vec{r}_i$ 一阶与二阶连续可微，即得另一个恒等关系式，即交换规则：
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial \vec{r}_i}{\partial q_j}\right)=\frac{\partial \dot{\vec{r}}_i}{\partial q_j}
$$

于是可将广义惯性力表示为：
$$
Q_{gj} = -\sum_{i=1}^n m_i \frac{\mathrm{d} \dot{\vec{r}}_i}{\mathrm{d} t} \cdot \frac{\partial \vec{r}_i}{\partial q_j}
= -\sum_{i=1}^n m_i \frac{\mathrm{d}}{\mathrm{d} t} \left( \dot{\vec{r}}_i \cdot \frac{\partial \vec{r}_i}{\partial q_j} \right)
+ \sum_{i=1}^n m_i \dot{\vec{r}}_i \cdot \frac{\mathrm{d}}{\mathrm{d} t} \left( \frac{\partial \vec{r}_i}{\partial q_j} \right)
$$

即
$$
Q_{gj} = -\frac{\mathrm{d}}{\mathrm{d} t} \left( \sum_{i=1}^n m_i \dot{\vec{r}}_i \cdot \frac{\partial \vec{r}_i}{\partial q_j} \right)
+ \sum_{i=1}^n m_i \dot{\vec{r}}_i \cdot \frac{\partial \dot{\vec{r}}_i}{\partial q_j} \tag{2.10}
$$

注意到：
$$
\dot{\vec{r}}_i \cdot \frac{\partial \dot{\vec{r}}_i}{\partial \dot{q}_j}
= \frac{\partial}{\partial \dot{q}_j} \left( \frac{1}{2} \dot{\vec{r}}_i \cdot \dot{\vec{r}}_i \right)
= \frac{\partial}{\partial \dot{q}_j} \left( \frac{1}{2} v_i^2 \right)
$$

$$
\dot{\vec{r}}_i \cdot \frac{\partial \dot{\vec{r}}_i}{\partial q_j}
= \frac{\partial}{\partial q_j} \left( \frac{1}{2} \dot{\vec{r}}_i \cdot \dot{\vec{r}}_i \right)
= \frac{\partial}{\partial q_j} \left( \frac{1}{2} v_i^2 \right)
$$

那么广义惯性力可以表示为：
$$
\begin{aligned}
Q_{gj} &= -\frac{\mathrm{d}}{\mathrm{d}t} \left[ \sum_{i=1}^n m_i \frac{\partial}{\partial \dot{q}_j} \left( \frac{1}{2} v_i^2 \right) \right] + \sum_{i=1}^n m_i \frac{\partial}{\partial q_j} \left( \frac{1}{2} v_i^2 \right)
\\&= -\frac{\mathrm{d}}{\mathrm{d}t} \left[ \frac{\partial}{\partial \dot{q}_j} \left( \sum_{i=1}^n \frac{1}{2} m_i v_i^2 \right) \right] + \frac{\partial}{\partial q_j} \left( \sum_{i=1}^n \frac{1}{2} m_i v_i^2 \right)
\\&= -\frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\partial T}{\partial \dot{q}_j} \right) + \frac{\partial T}{\partial q_j}
\end{aligned}
$$

其中，$T = \sum_{i=1}^n \frac{1}{2} m_i v_i^2$ 是系统的动能。因此，广义惯性力可以表示成动能的导数表达，将广义惯性力代入到广义坐标系中的动力学普遍方程中，得到：

$$
\frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{\partial T}{\partial \dot{q}_j} \right) - \frac{\partial T}{\partial q_j} = Q_j
\quad
j = 1, 2, \cdots, k
$$

这就是（第二类）拉格朗日方程

## 二、广义速度表示的动能

利用速度表达式，可以将质点系的动能表示为：
$$
\begin{aligned}
T &= \sum_{l=1}^n \frac{1}{2} m_l v_l^2 = \sum_{l=1}^n \frac{1}{2} m_l \dot{\mathbf{r}}_l \cdot \dot{\mathbf{r}}_l
\\&= \sum_{l=1}^n \frac{1}{2} m_l \left( \sum_{i=1}^k \frac{\partial \mathbf{r}_l}{\partial q_i} \dot{q}_i + \frac{\partial \mathbf{r}_l}{\partial t} \right) \cdot \left( \sum_{j=1}^k \frac{\partial \mathbf{r}_l}{\partial q_j} \dot{q}_j + \frac{\partial \mathbf{r}_l}{\partial t} \right)
\\&= \frac{1}{2} \sum_{i=1}^k \sum_{j=1}^k a_{ij} \dot{q}_i \dot{q}_j + \sum_{i=1}^k b_i \dot{q}_i + c
\\&= T_2 + T_1 + T_0
\end{aligned}
$$

其中动能关于广义速度的二次项、一次项与零次项部分分别为：

- 二次项：

$$
T_2 = \frac{1}{2} \sum_{i=1}^k \sum_{j=1}^k a_{ij} \dot{q}_i \dot{q}_j, \qquad a_{ij} = \sum_{l=1}^n m_l \frac{\partial \mathbf{r}_l}{\partial q_i} \cdot \frac{\partial \mathbf{r}_l}{\partial q_j}
$$

- 一次项：

$$
T_1 = \sum_{i=1}^k b_i \dot{q}_i, \qquad b_i = \sum_{l=1}^n m_l \frac{\partial \mathbf{r}_l}{\partial q_i} \cdot \frac{\partial \mathbf{r}_l}{\partial t}
$$

- 零次项：

$$
T_0 = c = \frac{1}{2} \sum_{l=1}^n m_l \frac{\partial \mathbf{r}_l}{\partial t} \cdot \frac{\partial \mathbf{r}_l}{\partial t}
$$

这里的$a_{ij},b_i,c$都是广义坐标及时间的函数，$a_{ij}=a_{ji}$具有对称性。

##  三、保守系统的拉格朗日方程

保守系统受到的主动力都是有势力，而有势力相应地广义力可以表示为势能的导数的负数，所以拉格朗日方程成为：
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial T}{\partial\dot{q}_j}\right)-\frac{\partial T}{\partial q_j}+\frac{\partial V}{\partial q_j}=0\quad (j=1,2,\cdots,k)
$$
势能仅仅取决于质点系的位形，只是广义坐标的函数，从而：
$$
\frac{\partial V}{\partial \dot{q}_j}=0
$$
引入拉格朗日函数（或者说动势）：
$$
L=T-V
$$
拉格朗日函数$L=L(\dot{q}_1,\dot{q}_2,\cdots,\dot{q}_k;q_1,q_2,\cdots,q_k)$，则拉格朗日方程可以表示为：
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial L}{\partial\dot{q}_{j}}\right)-\frac{\partial L}{\partial q_{j}}=0\quad (j=1,2,\cdots,k)
$$
上面括号中的内容叫做广义动，后一项为拉格朗日力。此时，只需计算系统的动能与势能，无需计算广义力。利用动能表达式，可以将拉格朗日函数表示为：
$$
L=T_2+T_1+T_0-V
$$

## 四、非保守系统的拉格朗日方程

对于非保守系统，主动力可以分为有势力和非有势力两类：
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial T}{\partial\dot{q}_j}\right)-\frac{\partial T}{\partial q_j}=Q_j=-\frac{\partial\mathrm{V}}{\partial q_j}+\tilde{Q}_j
$$
系统的拉格朗日方程为：
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial L}{\partial\dot{q}_j}\right)-\frac{\partial L}{\partial q_j}=\tilde{Q}_j\quad (j=1,2,...,k)
$$
其中$\tilde{Q}$是非有势力的广义力。