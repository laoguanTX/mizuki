---
title: 高斯定理
published: 2025-10-12
category: ["物理", "普通物理学"]
tags: ["电学"]
alias: "gaussslaw"
---

## 一、通量

通量的计算公式：
$$
\Phi = \vec{v}\cdot\vec{A}
$$
其中$\vec{v}$为速度，$\vec{A}$为面积矢量，方向为其任意法向。

![image-20251009145037795](https://laoguantx.top/article/物理/普通物理学/高斯定理/image-20251009145037795.png)

## 二、高斯定理

### 1、闭合曲面的通量

![image-20251009145014953](https://laoguantx.top/article/物理/普通物理学/高斯定理/image-20251009145014953.png)

任意形状的闭合曲面，规定面积的法向指向外，流入该曲面的通量与流出该曲面的通量相等，也就是说，闭合曲面的流量代数和为$0$。
$$
\begin{aligned}
\Phi &= {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{v}\cdot\mathrm{d}\vec{A}\\
\mathrm{d} \Phi&=\vec{v}\cdot\mathrm{d}\vec{A}\\
\mathrm{d}\vec{A}&=\mathrm{d}y\mathrm{d}z \boldsymbol{i}+\mathrm{d}z\mathrm{d}x \boldsymbol{j}+\mathrm{d}x\mathrm{d}y \boldsymbol{k}\\
\vec{v}&=\vec{v}_x\boldsymbol{i} +\vec{v}_y\boldsymbol{j}+\vec{v}_z\boldsymbol{k}\\
\vec{v}\cdot \mathrm{d}\vec{A}&=\vec{v}_x\mathrm{d}y\mathrm{d}z+\vec{v}_y\mathrm{d}z\mathrm{d}x+\vec{v}_z\mathrm{d}x\mathrm{d}y\\
\end{aligned}
$$
所以，如果闭合曲面内没有源，则：
$$
\Phi = {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{v}\cdot\mathrm{d}\vec{A}=0
$$
如果闭合曲面内有源，则：
$$
\Phi = {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{v}\cdot\mathrm{d}\vec{A} \gt 0
$$
如果闭合曲面内有汇，则：
$$
\Phi = {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{v}\cdot\mathrm{d}\vec{A} \lt 0
$$

### 2、电通量

电通量可以理解为通过单位面积通过的电力线的数目，根据闭合曲面的通量公式，写出电场的通量公式：
$$
\Phi_E = {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{E}\cdot\mathrm{d}\vec{A}
$$
其中$\vec{A}$的方向指向闭合曲面外。

若闭合曲面内没有电荷，则上式值为$0$，即：
$$
\Phi_E = {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{E}\cdot\mathrm{d}\vec{A}=0
$$

### 3、电场高斯定理

从任意封闭曲面内流出的电场的通量与封闭曲面包围的电荷成正比，与电荷的分布无关，其值为：
$$
\Phi_E = {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{E}\cdot\mathrm{d}\vec{A}=\frac{q}{\varepsilon_0}
$$
其中$q$为闭合曲面包围的电荷量，$\varepsilon_0$为真空介电常数。该公式永远成立。

## 三、高斯定理的应用

### 1、在球面上应用高斯定理

如果在空间中的每一点的电场方向与面积法向完全相同，则有：
$$
\vec{E}\cdot\mathrm{d}\vec{A}=E\mathrm{d}A
$$
如果球面上的每一点电场大小相同（即电荷集中在球心），恒为$E$，则可以将$E$提出到积分之外：
$$
{\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{E}\cdot\mathrm{d}\vec{A}=E{\int\kern{-8pt}\int \kern{-23mu} \bigcirc}\mathrm{d}A
$$
那么在这个球上使用高斯定理，得到：
$$
{\int\kern{-8pt}\int \kern{-23mu} \bigcirc}\mathrm{d}A=4\pi R^2
$$
即：
$$
E=\frac{1}{4\pi \varepsilon_0}\frac{Q}{R^2}
$$
这与库仑定律的结论完全相同。

### 2、在均匀带电球体上应用高斯定理

![image-20251011101009755](https://laoguantx.top/article/物理/普通物理学/高斯定理/image-20251011101009755.png)

假设实心球体的半径为$a$，电荷体密度为$\rho$。我们分三种情况讨论这个问题

#### (1) 研究点在球体内（$r<a$）

研究点离球心的距离为$r$，我们研究一个半径为$r$的高斯面，根据高斯定理：
$$
{\int\kern{-8pt}\int \kern{-23mu}\bigcirc}\vec{E}\bullet d\vec{A}=4\pi r^2E=\frac{q}{\varepsilon_0}
$$

$$
q=\frac{4}{3}\pi a^3\rho
$$

得到：
$$
\begin{aligned}
E&=\frac{\rho a^3}{3\varepsilon_0r^2}\\&=\frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}
\end{aligned}
$$
这与点电荷产生的电场表现相同。

#### (2) 研究点在球面上（$r=a$）

研究方法相同，但是根据万有引力部分的推导，在所选取的高斯面外的带电部分所产生的电场相互抵消，则有：
$$
{\int\kern{-8pt}\int \kern{-23mu}\bigcirc}\vec{E}\bullet d\vec{A}=4\pi r^2E=\frac{q}{\varepsilon_0}
$$

$$
q=\frac{4}{3}\pi r^3 \rho
$$

得到：
$$
E=\frac{\rho}{3\varepsilon_0}r
$$

### 3、在导体上使用高斯定理推导导体带电情况

我们已知导体内部电场为$0$，通过高斯定理，选取略小于导体表面的闭合曲面做高斯面，则根据高斯定理可知，导体内部的电荷$q=0$。即导体所带电荷全部分布在导体的表面。

### 4、在均匀带电的无限长直线上应用高斯定理

<img src="https://laoguantx.top/article/物理/普通物理学/高斯定理/image-20251011103039139.png" alt="image-20251011103039139" style="zoom:50%;" />

利用对称性可知，由于导体是无限长的，则在$x$方向上无电场，电场方向全部垂直于直线，且大小只与该点离直线的距离有关。所以我们选取一个高度为$h$，半径为$r$的圆柱作为高斯面来研究电场中某一点的电场。使用高斯定理：
$$
{\int\kern{-8pt}\int \kern{-23mu}\bigcirc}\vec{E}\bullet d\vec{A}=2\pi r h E
$$
直线的线密度为$\lambda$，则高斯面内包裹住的电荷为：
$$
q=\lambda h
$$
得到：
$$
E=\frac{\lambda}{2\pi\varepsilon_0r}
$$

### 5、在均匀带电的无限大平面上应用高斯定理

<img src="https://laoguantx.top/article/物理/普通物理学/高斯定理/image-20251011104312496.png" alt="image-20251011104312496" style="zoom:50%;" />

利用对称性可知，由于导体是无限大的，则只有$x$方向上的电场，我们选取一个圆柱面作为高斯面截取平面的一部分，圆柱的顶面面积为$A$。使用高斯定理：
$$
{\int\kern{-8pt}\int \kern{-23mu}\bigcirc}\vec{E}\bullet d\vec{A}=2AE
$$
代入电荷的面密度$\sigma=\frac{q}{A}$，得到：
$$
E=\frac{\sigma}{2\varepsilon_0}
$$

#### 6、无限大平行板电容器

无限大平行板电容器可以看作是两个无限大均匀带电平面，且电性相反。使用相同的取高斯面方法同时分析两个平面或者直接两个场叠加，可知两平行板外侧电场为$0$，内部为$\frac{\sigma}{\varepsilon_0}$。

