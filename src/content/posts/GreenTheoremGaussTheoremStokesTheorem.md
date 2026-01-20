---
title: 格林公式、高斯公式、斯托克斯公式
published: 2025-05-28
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "greentheoremgausstheoremstokestheorem"
---
## 一、格林公式

### 1、公式内容

$$
\oint_{C} P\,\mathrm{d}x + Q\,\mathrm{d}y = \iint_{D} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\mathrm{d}x\,\mathrm{d}y
$$

其中$C$为闭合曲线，$D$为曲线围成的区域。

### 2、证明

假设区域$D$是$y$关于$x$的单值区域，形如：

$$
D = \{(x, y)\mid a \leq x \leq b, \varphi_1(x) \leq y \leq \varphi_2(x)\}
$$

$C$的正向是使区域$D$始终在积分路径左侧。

#### （1）证明$\displaystyle \oint_C P\,\mathrm{d}x = -\iint_D \frac{\partial P}{\partial y}\,\mathrm{d}x\,\mathrm{d}y$

曲线$C$分为上下两部分：

- $C_1$: $y = \varphi_1(x)$，$x$从$a$到$b$
- $C_2$: $y = \varphi_2(x)$，$x$从$b$到$a$

则

$$
\oint_C P\,\mathrm{d}x = \int_{C_1} P\,\mathrm{d}x + \int_{C_2} P\,\mathrm{d}x
$$

但在$C_2$上，$x$从$b$到$a$，取负向，所以

$$
\int_{C_2} P\,\mathrm{d}x = -\int_{a}^{b} P(x, \varphi_2(x))\,\mathrm{d}x
$$

同理

$$
\int_{C_1} P\,\mathrm{d}x = \int_{a}^{b} P(x, \varphi_1(x))\,\mathrm{d}x
$$

故

$$
\oint_C P\,\mathrm{d}x = \int_{a}^{b} \left[ P(x, \varphi_1(x)) - P(x, \varphi_2(x)) \right]\,\mathrm{d}x
$$

另一方面，

$$
\iint_D \frac{\partial P}{\partial y}\,\mathrm{d}x\,\mathrm{d}y = \int_{a}^{b} \left( \int_{\varphi_1(x)}^{\varphi_2(x)} \frac{\partial P}{\partial y}(x, y)\,\mathrm{d}y \right)\,\mathrm{d}x
$$

由微积分基本定理，

$$
\int_{\varphi_1(x)}^{\varphi_2(x)} \frac{\partial P}{\partial y}(x, y)\, \mathrm{d}y = P(x, \varphi_2(x)) - P(x, \varphi_1(x))
$$

所以

$$
\iint_D \frac{\partial P}{\partial y}\,\mathrm{d}x\,\mathrm{d}y = \int_{a}^{b} [P(x, \varphi_2(x)) - P(x, \varphi_1(x))]\,\mathrm{d}x
$$

因此

$$
\oint_C P\,\mathrm{d}x = -\iint_D \frac{\partial P}{\partial y}\,\mathrm{d}x\,\mathrm{d}y
$$

#### （2）证明$\displaystyle \oint_C Q\,\mathrm{d}y = \iint_D \frac{\partial Q}{\partial x}\,\mathrm{d}x\,\mathrm{d}y$

同理，$y$为外层变量，$x$为内层变量。

$$
\iint_D \frac{\partial Q}{\partial x}\,\mathrm{d}x\,\mathrm{d}y = \int_{y_0}^{y_1} \left( \int_{x_1(y)}^{x_2(y)} \frac{\partial Q}{\partial x}\,\mathrm{d}x \right)\,\mathrm{d}y = \int_{y_0}^{y_1} [Q(x_2(y), y) - Q(x_1(y), y)]\,\mathrm{d}y
$$

而$Q\,\mathrm{d}y$的线积分也可写成上下边相减的形式，方向一致。

#### （3）合并

$$
\oint_{C} P\,\mathrm{d}x + Q\,\mathrm{d}y = -\iint_{D} \frac{\partial P}{\partial y}\,\mathrm{d}x\,\mathrm{d}y + \iint_{D} \frac{\partial Q}{\partial x}\,\mathrm{d}x\,\mathrm{d}y = \iint_{D} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\mathrm{d}x\,\mathrm{d}y
$$

对于一般分片光滑区域可用分割法推广。

## 二、高斯公式

### 1、公式内容

$$
{\int\kern{-8pt}\int \kern{-23mu} \bigcirc }_{S} \vec{F} \cdot \mathrm{d}\vec{S} = \iiint_{V} \nabla \cdot \vec{F}\, \mathrm{d}V
$$

假设$\vec{F} = (P, Q, R)$，$V$为曲面围成的区域，边界为$S$。

### 2、证明（以$x$方向为例）

$\nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$

考虑$x$方向的分量

$$
\iiint_{V} \frac{\partial P}{\partial x}\,\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z
= \iint_{(y,z)\in D_{yz}} \left( \int_{x_0}^{x_1} \frac{\partial P}{\partial x}\,\mathrm{d}x \right) \mathrm{d}y\,\mathrm{d}z
= \iint_{(y,z)\in D_{yz}} [P(x_1, y, z) - P(x_0, y, z)]\,\mathrm{d}y\,\mathrm{d}z
$$

这正是$x=x_1$与$x=x_0$两个面的通量之和。

同理，对$y$和$z$方向分别有

$$
\iiint_{V} \frac{\partial Q}{\partial y}\,\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z = \iint_{(x,z)\in D_{xz}} [Q(x, y_1, z) - Q(x, y_0, z)]\,\mathrm{d}x\,\mathrm{d}z
$$

$$
\iiint_{V} \frac{\partial R}{\partial z}\,\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z = \iint_{(x,y)\in D_{xy}} [R(x, y, z_1) - R(x, y, z_0)]\,\mathrm{d}x\,\mathrm{d}y
$$

六个面的通量和就是体积分中的各项和。

因此

$$
{\int\kern{-8pt}\int \kern{-23mu} \bigcirc}_S \vec{F}\cdot \mathrm{d}\vec{S} = \iiint_V \nabla\cdot\vec{F}\,\mathrm{d}V
$$

对于一般有界区域，可将其分割为无数小长方体，每个小块的内部通量相互抵消，只剩外层的贡献。极限下成立。

## 三、斯托克斯公式

### 1、公式内容

$$
\oint_{\partial S} \vec{F} \cdot \mathrm{d}\vec{r} = \iint_{S} (\nabla \times \vec{F}) \cdot \mathrm{d}\vec{S}
$$

$\partial S$为曲面$S$的边界，$S$为一曲面。

### 2、证明

考虑$S$为参数面：

$$
\vec{r}(u, v), \quad (u, v) \in D
$$

$\vec{F} = (P, Q, R)$，$\vec{r}_u = \frac{\partial \vec{r}}{\partial u}$，$\vec{r}_v = \frac{\partial \vec{r}}{\partial v}$

面元

$$
\mathrm{d}\vec{S} = (\vec{r}_u \times \vec{r}_v)\,\mathrm{d}u\,\mathrm{d}v
$$

曲线积分

$$
\oint_{\partial S} \vec{F} \cdot \mathrm{d}\vec{r}
$$

要证

$$
\oint_{\partial S} \vec{F} \cdot \mathrm{d}\vec{r} = \iint_{D} (\nabla \times \vec{F})|_{\vec{r}(u,v)} \cdot (\vec{r}_u \times \vec{r}_v) \,\mathrm{d}u\,\mathrm{d}v
$$

#### （1）局部应用格林公式

可将$D$分割为很小的区域$\delta D_i$，每个小区域的边界$\delta C_i$，在平面上应用格林公式（或二维斯托克斯公式）：

$$
\oint_{\delta C_i} \vec{F} \cdot \mathrm{d}\vec{r} = \iint_{\delta D_i} (\nabla \times \vec{F}) \cdot \vec{n} \,\mathrm{d}S
$$

小区域内部的线积分在邻接区域间抵消，只剩下外部总边界$\partial S$上的线积分。

#### （2）合并

将所有小区域面积分累加，得整个曲面的曲面积分。极限下结论成立。

#### （3）具体坐标展开

以$S$为平面区域，$\vec{F}=(P,Q,R)$。

$\nabla\times\vec{F} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}, \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}, \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)$

设$S$在$xy$平面，$\mathrm{d}\vec{S} = (0, 0, \mathrm{d}x\,\mathrm{d}y)$，则

$$
\iint_S (\nabla\times\vec{F})\cdot\mathrm{d}\vec{S} = \iint_S \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\,\mathrm{d}x\,\mathrm{d}y
$$

这正是格林公式的面积分部分。
