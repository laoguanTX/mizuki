---
title: 电磁感应定理
published: 2025-11-12
category: ["物理", "普通物理学"]
tags: ["电磁学"]
alias: "faradayslawofelectromagneticinduction"
---
## 一、法拉第电磁感应引入

<img src="https://laoguantx.top/article/物理/普通物理学./法拉第电磁感应定律/image-20251110103932857.png" alt="image-20251110103932857" style="zoom:50%;" />

当一块磁铁穿过闭合线圈时，电路中会产生电流。

定义磁通量，描述穿过某个表面的磁场流量的物理量，表达式为：
$$
\varPhi=\iint \vec{B}\cdot \mathrm{d} \vec{A}
$$
法拉第电磁感应定律是电磁学中的一条基本定律，主要用于描述磁场与电路之间的相互作用。该定律指出，当通过导体回路的磁通量发生变化时，会在回路中产生电动势。其数学表达式为：
$$
E=-\frac{\mathrm{d}\varPhi}{\mathrm{d}t}
$$

## 二、楞次定律

在法拉第电磁感应定律中，电动势的方向遵循右手定则：伸平右手使姆指与四指垂直，手心向着磁场的N极，姆指的方向与导体运动的方向一致，四指所指的方向即为导体中感应电流的方向（感应电动势的方向与感应电流的方向相同）。

当然也可以根据楞次定律：感应电流具有这样的方向，即感应电流的磁场总要阻碍引起感应电流的磁通量的变化。

## 三、电动势

### 1、动生电动势

<img src="https://laoguantx.top/article/物理/普通物理学./法拉第电磁感应定律/image-20251110111150870.png" alt="image-20251110111150870" style="zoom:50%;" />

上图中，导体棒在导轨上运动，并存在垂直于纸面的磁场，导体棒中的电子在磁场$\vec{B}$中以速度$\vec{v}$运动时，受力为：

$$
\vec{f} = -e (\vec{v} \times \vec{B})
$$

其中$-e$为电子电荷。由于洛伦兹力不是静电力，定义非静电力单位电荷的强度：

$$
\vec{K} = \frac{\vec{f}}{-e} = \vec{v} \times \vec{B}
$$

运动过程中，沿回路对非静电力做功得到动生电动势：

$$
\varepsilon = \int_{+} \vec{K} \cdot \mathrm{d}\vec{l} = \int_{C}^{D} (\vec{v} \times \vec{B}) \cdot \mathrm{d}\vec{l}
$$

其中$\mathrm{d}\vec{l}$为沿回路的微元线段。假设导体棒以速度$\vec{v}$向右运动，磁场垂直于纸面向里（如图所示），棒长为$s$：

- 设以$DC$为运动部分，其他为静止，则只有$DC$段有$\vec{v} \neq 0$。

- 取$\mathrm{d}\vec{l}$沿$DC$段方向（竖直向上），$\vec{v}$向右，$\vec{B}$向里。

- 则$\vec{v} \times \vec{B}$指向上，与$\mathrm{d}\vec{l}$同向。

所以：

$$
\varepsilon = \int_{C}^{D} (\vec{v} \times \vec{B}) \cdot \mathrm{d}\vec{l} = Blv
$$

其中$l$为棒的长度。

> [!IMPORTANT]
>
> 为什么洛伦兹力对电子不做功？为何又说动生电动势来源于洛伦兹力？洛伦兹力的定义为：
> $$
> \vec{F} = -e (\vec{u}_d + \vec{v}) \times \vec{B}
> $$
>
> 其中：
> - $\vec{u}_d$：电子在导体中的漂移速度
> - $\vec{v}$：导体整体的速度（如红色棒向右运动）
> - $-e$：电子电荷
> - $\vec{B}$：磁场
>
> 磁场力方向总是与速度垂直，理论上对单个电子不做功，因为功为$\vec{F} \cdot \mathrm{d}\vec{l}$，而$\vec{F} \perp \mathrm{d}\vec{l}$。实际上，导体整体运动时，电子的总速度是$\vec{u}_d + \vec{v}$，故洛伦兹力分为两部分：
>
> (1) 运动部分（导体整体移动）产生的洛伦兹力
>
> $$
> \vec{f}_1 = -e\vec{v} \times \vec{B}
> $$
>
> 对电子做正功，推动电子沿着电路移动，形成电流，这部分就是动生电动势的来源。
>
> (2) 漂移速度部分（电子本身漂移）
>
> $$
> \vec{f}_2 = -e\vec{u}_d \times \vec{B}
> $$
>
> 对电子做负功，实际和电流方向相关，抵消一部分能量。
>
> 两部分相等。可以被证明。

### 2、感生电动势

感生电动势定义为：
$$
\varepsilon = \oint\vec{E} \cdot \mathrm{d}\vec{l}
$$

其中：
- $\vec{E}$：感生电场
- $\mathrm{d}\vec{l}$：沿回路的微元线段

<img src="https://laoguantx.top/article/物理/普通物理学./法拉第电磁感应定律/image-20251110112947233.png" alt="image-20251110112947233" style="zoom:50%;" />

如图所示，存在一个垂直于纸面向里的均匀磁场$\vec{B}$，且磁感应强度随时间变化（$\frac{\mathrm{d}B}{\mathrm{d}t} = \text{const.}$）。在磁场中考虑一个以红色为边界的圆形回路。有圆环回路时，根据法拉第电磁感应定律：
$$
\varepsilon = -\frac{\mathrm{d} \Phi_B}{\mathrm{d} t}
$$

其中，$\Phi_B$ 为穿过回路的磁通量：

$$
\Phi_B = \iint_S \vec{B} \cdot \mathrm{d}\vec{A}
$$

若$\vec{B}$均匀垂直穿过面积$A$：

$$
\Phi_B = B \cdot A
$$

则感应电动势为：

$$
\varepsilon = -\frac{\mathrm{d}(B A)}{\mathrm{d} t} = -A \frac{\mathrm{d}B}{\mathrm{d} t}
$$

根据电动势的环路积分定义：

$$
\varepsilon = \oint_{C} \vec{E} \cdot \mathrm{d}\vec{l}
$$

结合上述两式得到：

$$
\oint_{C} \vec{E} \cdot \mathrm{d}\vec{l} = -\frac{\mathrm{d}}{\mathrm{d}t} \iint_S \vec{B} \cdot \mathrm{d}\vec{A}
$$

交换积分和求导顺序，即为法拉第电磁感应定律的积分形式：
$$
\oint_{C} \vec{E} \cdot \mathrm{d}\vec{l} = - \iint_S \frac{\partial}{\partial t}\vec{B} \cdot \mathrm{d}\vec{A}
$$
利用斯托克斯公式，得到：
$$
\nabla \times \vec{E}=-\frac{\partial \vec{B}}{\partial t}
$$

### 3、空间中任意形状闭合路径的电动势

空间中产生电势有两部分：静电荷产生的、电磁感应的。故：
$$
\vec{E}=\vec{E}_s+\vec{E}_{in}
$$
积分得到电动势：
$$
\oint\vec{E}\cdot \mathrm{d}\vec{l}=\oint(\vec{E}_{sta}+\vec{E}_{ind})\cdot \mathrm{d}\vec{l}=0+(-\frac{\mathrm{d}\Phi_B}{\mathrm{d}t})=-\frac{\mathrm{d}\Phi_B}{\mathrm{d}t}
$$
