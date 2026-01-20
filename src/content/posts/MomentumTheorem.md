---
title: 动量定理
published: 2025-11-12
category: ["物理", "力学"]
tags: ["动力学", "理论力学"]
alias: "momentumtheorem"
---
## 一、动量与冲量

### 1、动量

定义质点系的动量为所有质点动量的矢量和：
$$
\vec{p}=\sum m_i\vec{v}_i
$$
质点系的动量也可以向坐标轴进行投影：
$$
\vec{p}_x=\sum m\vec{v}_x\quad \vec{p}_y=\sum m\vec{v}_y\quad \vec{p}_z=\sum m\vec{v}_z
$$
质点系质心$C$的矢径表达式为：
$$
r_C=\frac{\sum m_ir_i}{\sum m_i}=\frac{\sum m_ir_i}M\Rightarrow Mr_c=\sum m_ir_i
$$
当质点系运动时，它的质心一般也是运动的，将上式两端对时间求导数，即：
$$
M\vec{v}_C=\sum m_i\vec{v}_i=\vec{p}
$$
上述公式对于任意质点系都成立，但是尤其针对刚体动量的计算。同样地，对于刚体系，刚体系的动力计算式为：
$$
\vec{p}=\sum m_i \vec{v}_{Ci}
$$

### 2、冲量

冲量的积分形式：
$$
\vec{I}=\int_0^t\vec{F}\mathrm{d}t
$$
同样地，可也以向坐标轴上投影：
$$
\vec{I}_x=\int_0^t\vec{F}_x\mathrm{d}t\quad\vec{I}_y=\int_0^t\vec{F}_y\mathrm{d}t\quad \vec{I}_z=\int_0^t\vec{F}_z\mathrm{d}t
$$

## 二、动量定理

### 1、定量定理

因为质点系的动量为$\vec{p}=\sum m_i\vec{v}_i$,对该式两端求时间的导数，有：
$$
\frac{\mathrm{d}\vec{p}}{\mathrm{d}t}=\frac{\mathrm{d}\Sigma m_i\vec{v}_i}{\mathrm{d}t}=\Sigma m_i\vec{a}_i=\sum \vec{F}_i
$$

分析右端，把作用于每个质点的力$\vec{F}$分为内力$\vec{F}^{(i)}$和外力$\vec{F}^{(e)}$，则得：
$$
\Sigma \vec{F}_i=\Sigma \vec{F}_i^{(i)}+\Sigma \vec{F}_i^{(e)}
$$

因为内力总是成对出现的，且根据牛顿第三定律，每对
内力求矢量和时会相互抵消，因此可得$\Sigma \vec{F}_i^{(i)}=0$，则有：
$$
\frac{\mathrm{d}\vec{p}}{\mathrm{d}t}=\sum \vec{F}_i^{(e)}
$$
同样地，可也以向坐标轴上投影。

### 2、冲量定理

设在$t_1$到$t_2$过程中，质点系的动量由$\vec{p}_1$变为$\vec{p}_2$，则对上式积分，得：
$$
\vec{p_1}-\vec{p_2}=\sum\int_{t_1}^{t_2}\vec{F}_i^{(e)}\mathrm{d}t=\sum \vec{I}_i^{(e)}
$$
同样地，可也以向坐标轴上投影。

### 3、动量守恒定理

如果$\sum\vec{F}_i^{(e)}=0$，则：
$$
\vec{p}=\vec{p}_0=const.
$$
同样地，可也以向坐标轴上投影。

## 三、质心运动定理

### 1、刚体质心运动定理

质点系动量定理的表达式为：
$$
\frac{\mathrm{d}\vec{p}}{\mathrm{d}t}=\sum \vec{F}_i^{(e)}
$$
把质点系动量表达式$\vec{p}=M\vec{v}_C$代入上式，得到：
$$
M\vec{a}_C=\sum \vec{F}_i^{(e)}
$$
质点系的总质量与其质心加速度的乘积，等于作用在该质点系上所有外力的矢量和（主矢），这就是质心运动定理。

### 2、刚体系统质心运动定理表达式

假设$n$个质点的质点系由$N$个部分构成（$N\le n$），则由式：
$$
\vec{p}=\sum_{i=1}^n m_i\vec{v}_i=\sum_{j=1}^N M_j\vec{V}_{Cj}
$$
代入质心运动定理，得：
$$
\sum_{j=1}^N M_j\vec{a}_{Cj}=\sum \vec{F}_i^{(e)}
$$
同样地，可也以向坐标轴上投影。

### 3、质心运动守恒定理

如果$\sum\vec{F}_i^{(e)}=0$，则由上式可知$\vec{a}_C=0$，从而有：
$$
\vec{v}_c=const.
$$
即，如作用于质点系的所有外力的矢量和（主矢）始终等于零，则质心运动守恒，即质心作惯性运动；如果在初瞬时质心处于静止，则它将停留在原处。

同样地，可也以向坐标轴上投影。

如初瞬时质心的速度在该轴上的投影也等于零，则质心沿该轴的位置坐标不变。

