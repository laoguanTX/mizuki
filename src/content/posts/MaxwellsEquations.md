---
title: 麦克斯韦方程组
published: 2025-11-26
category: ["物理", "普通物理学"]
tags: ["电磁学"]
alias: "maxwellsequations"
---
## 一、位移电流

在原始的安培环路定理中，只考虑了电流产生磁场：

$$
\oint \vec{B} \cdot \mathrm{d}\vec{l} = \mu_0 i
$$

但在电容充放电等情况下，电流的连续性会断开（比如电容板之间没有实际电流通过），这导致了矛盾。例如，如果我们取一个环路穿过电容板之间的空间，按安培定律，环路上应有磁场，但空间中没有实际电流。或者说选取下图中圈1作为安培环路，利用斯托克斯公式，将积分写为面积分形式，发现如果取得曲面是2或者4，则不存在问题，但是若是取曲面3，曲面3并不包括任何电流，导致这一细节问题产生。

![image-20251126101504304](https://laoguantx.top/article/物理/普通物理学/麦克斯韦方程组/image-20251126101504304.png)

麦克斯韦为了解决这个矛盾，引入了位移电流的概念：

- 当电场随时间变化时，也会在空间中产生磁场。
- 位移电流并不是真正的电荷流动，而是电场变化引起的“等效电流”。

位移电流密度定义为：

$$
\vec{j}_d = \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
$$

## 二、麦克斯韦补充后的安培环路定理

麦克斯韦将安培环路定理扩展为：

$$
\oint \vec{B} \cdot \mathrm{d}\vec{l} = \mu_0 \left( i + \varepsilon_0 \frac{\mathrm{d} \Phi_E}{\mathrm{d} t} \right)
$$

其中，$\Phi_E$是穿过环路所围面积的电场通量：

$$
\Phi_E = \int \vec{E} \cdot \mathrm{d}\vec{A}
$$

更一般地，在积分形式下，麦克斯韦方程组的最后一个方程（安培-麦克斯韦定律）为：

$$
\oint \vec{B} \cdot \mathrm{d}\vec{l} = \mu_0 i + \mu_0 \varepsilon_0 \iint \frac{\partial \vec{E}}{\partial t} \cdot \mathrm{d}\vec{A}
$$

- 第一项是传导电流，即实际电荷流动。
- 第二项是位移电流，即电场变化产生的等效电流。

## 三、麦克斯韦方程组积分形式

四个方程积分如下，积分形式可以通过高斯定理和斯托克斯定理转化为微分形式：

### 1、电场高斯定律

$$
\int\kern{-8pt}\int \kern{-23mu} \bigcirc \vec{E} \cdot \mathrm{d}\vec{A} = \frac{q_0}{\varepsilon_0}
$$

转化为

$$
\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}
$$

### 2、磁场高斯定律

$$
\int\kern{-8pt}\int \kern{-23mu} \bigcirc \vec{B} \cdot \mathrm{d}\vec{A} = 0
$$

转化为

$$
\nabla \cdot \vec{B} = 0
$$

### 3、法拉第定律

$$
\oint \vec{E} \cdot \mathrm{d}\vec{l} = -\frac{\mathrm{d} \Phi_B}{\mathrm{d} t} = -\iint\frac{\partial \vec{B}}{\partial t} \cdot \mathrm{d}\vec{A}
$$

转化为

$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
$$

### 4、麦克斯韦补充后的安培环路定理

$$
\oint \vec{B} \cdot \mathrm{d}\vec{l} = \mu_0 i + \mu_0 \varepsilon_0 \iint \frac{\partial \vec{E}}{\partial t} \cdot \mathrm{d}\vec{A}
$$

转化为

$$
\nabla \times \vec{B} = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
$$

### 5、麦克斯韦方程组微分形式

为了包含含介质的情况，将上式改写：
$$
\left\{
\begin{aligned}
&\nabla \cdot \vec{D} = \rho_{e0} \\
&\nabla \cdot \vec{B} = 0 \\
&\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \\
&\nabla \times \vec{H} = \vec{j}_0 + \frac{\partial \vec{D}}{\partial t}
\end{aligned}
\right.
$$

- 这里$\vec{D}$是电位移矢量，$\vec{H}$是磁场强度，$\vec{j}_0$是自由电流密度。
- 在真空中，$\vec{D} = \varepsilon_0 \vec{E}$，$\vec{H} = \vec{B} / \mu_0$。
