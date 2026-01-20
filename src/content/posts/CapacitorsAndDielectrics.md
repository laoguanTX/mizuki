---
title: 电容器与电介质
published: 2025-10-22
category: ["物理", "普通物理学"]
tags: ["电学"]
alias: "capacitorsanddielectrics"
---
## 一、电容

### 1、电容的定义

电容器由两个空间上分离的导体组成，分别可以带电为$+q$和$−q$。电容定义为电容器一个导体上所带电荷与两个导体之间电势差的比值：
$$
C=\frac{q}{\Delta V}
$$
电容只与电容器本身有关，与电荷和电压无关，它取决于极板的形状、相对位置以及填充在极板之间的材料。

### 2、不同类型电容器电容的计算

#### (1) 平行板电容器

![image-20251020102120016](https://laoguantx.top/article/物理/普通物理学/电容器和电介质/image-20251020102120016.png)

上面平行板电容器的上下表面分别带电$+q,-q$，电势差为$\Delta V$，两板之间的距离为$d$。首先写出电容的计算式：
$$
C=\frac{q}{\Delta V}
$$
设电荷面密度：
$$
q=\sigma\cdot A
$$
列出电势差的计算公式：
$$
\Delta V=V_B-V_A=-\int_B^A\vec{E}\cdot \mathrm{d}\vec{l}
$$
根据[高斯定理](https://www.laoguantx.top/posts/gaussslaw#heading-13)中推导的结论，平行板电容器内部的电场为：
$$
E=\frac\sigma{\varepsilon_0}
$$
将电场代入上面几式，得到：
$$
C=\varepsilon_0\frac{A}{d}
$$
所以，平行板电容器电容的大小只与两板面积和两板之间的距离有关。

#### (2) 圆柱形电容器

<img src="https://laoguantx.top/article/物理/普通物理学/电容器和电介质/image-20251020103056722.png" alt="image-20251020103056722" style="zoom:50%;" />

上面圆柱形电容器的内外部分分别带电$+q,-q$，内圆柱半径为$a$，外圆柱半径为$b$，电势差为$\Delta V$。构造一个圆柱面为高斯面，其半径为$r$，长度为$l$，其中半径要大于外圆柱的半径，运用高斯定理：
$$
{\int\kern{-8pt}\int \kern{-23mu} \bigcirc}\vec{E}\cdot\mathrm{d}\vec{A}=2\pi rLE=\frac{Q}{\varepsilon_0}
$$
得到：
$$
E=\frac{q}{2\pi\varepsilon_0Lr}
$$
再列出电势的计算公式：
$$
\begin{aligned}
\Delta V&=-\int_{b}^{a}\vec{E}\bullet \mathrm{d}\vec{l}\\&=-\int_{b}^{a}E\mathrm{d}r\\&=\int_{a}^{b}\frac{q}{2\pi\varepsilon_{0}rL}\mathrm{d}r\\&=\frac{q}{2\pi\varepsilon_{0}L}\ln(\frac{b}{a})
\end{aligned}
$$
回代到电容计算公式：
$$
C=\frac{q}{\Delta V}=\frac{2\pi \varepsilon_0L}{\ln(\frac ba)}
$$

#### (3) 球形电容器

<img src="https://laoguantx.top/article/物理/普通物理学/电容器和电介质/image-20251020104043424.png" alt="image-20251020104043424" style="zoom:50%;" />

上面球形电容器的内外部分分别带电$+q,-q$，内球的半径为$a$，外球的半径为$b$，电势差为$\Delta V$。首先写出在电容器内部的电场公式：
$$
\vec{E}=\frac{q\hat{r}}{4\pi\varepsilon_{0}r^{2}}\quad a<r<b
$$
代入电势的计算公式：
$$
\begin{aligned}\Delta V&=\int\vec{E}\cdot\mathrm{d}\vec{l}\\&=\int_{a}^{b}\frac{q\mathrm{d}r}{4\pi\varepsilon_{0}r^{2}}\\&=\frac{q}{4\pi\varepsilon_{0}}\left(\frac{1}{a}-\frac{1}{b}\right)\end{aligned}
$$
得出电容的计算公式：
$$
C=\frac{q}{\Delta V}=4\pi\varepsilon_0\frac{ab}{b-a}
$$
考虑极限情况，当$b\to\infty$时，上式结果为：
$$
C=4\pi\varepsilon_0 a
$$
也就是说，一个导体球也可以看成是一个球形电容器，其电容大小如上。

### 3、电容器的串并联

![image-20251020110258375](https://laoguantx.top/article/物理/普通物理学/电容器和电介质/image-20251020110258375.png)

对于两串联电容器，其等效电容的计算：
$$
V_{ab}=V_1+V_2=\frac Q{C_1}+\frac Q{C_2}
$$
所以：
$$
\frac 1C=\frac1{C_1}+\frac1{C_2}
$$
![image-20251020110436583](https://laoguantx.top/article/物理/普通物理学/电容器和电介质/image-20251020110436583.png)

对于两并联电容器，其等效电容的计算：
$$
V_1=V_2=V
$$

$$
V=\frac{Q_1}{C_1}=\frac{Q_2}{V_2}
$$

所以：
$$
C=C_1+C_2
$$

### 4、电容器的能量

首先假想两个平行板，不带电，将其中一个板的正电荷移动到另一个板，当移动$\mathrm{d}q$的电荷，需要做的功$\mathrm{d}W$为：
$$
\mathrm{d}W=V(q)\mathrm{d}q=\frac{q}{C}\mathrm{d}q
$$
然后进行积分：
$$
W=\frac 1C\int_0^Q q\mathrm{d}d=\frac{1}{2}\frac{Q^2}{C}
$$
最终得到：
$$
W=\frac{1}{2}CV^2=U
$$
$U$表示电容器所储存的能量，能量储存在电场本身中。可以把给电容器充电所需的能量看作是产生电场所需的能量。为了计算电场中的能量密度，首先考虑由平行板电容器产生的恒定电场：
$$
E=\sigma\varepsilon_0=\frac{Q}{\varepsilon_0A}
$$
化简电容器的能量公式：
$$
U=\frac12\frac{Q^2}{C}=\frac{1}{2}\frac{Q^2 d}{A\varepsilon_0}
$$
联立两式，得：
$$
U=\frac{1}{2}E^2\varepsilon_0Ad
$$
所以电容器产生的电场能量密度$u$（单位为$\mathrm{J/m^3}$）为：
$$
u=\frac{W}{v}=\frac{U}{Ad}=\frac{1}{2}\varepsilon_0E^2
$$
其中$v$为平行板电容器中的电场的体积。事实上，上面的能量（密度）公式是普适的，在非平行板电容器中，该结论依旧成立。

> 针对圆柱形电容器的能量证明：
> $$
> \begin{aligned}
> U&=\frac{1}{2}\varepsilon_{0}\int E^{2}\mathrm{d}v\\&=\frac{1}{2}\varepsilon_{0}\int_{a}^{b}(\frac{\lambda}{2\pi\varepsilon_{0}r})^{2}L2\pi r\mathrm{d}r\\&=\frac{1}{2}\frac{Q^{2}}{2\pi\varepsilon_{0}L}\ln(\frac{b}{a})\\&=\frac{1}{2}\frac{Q^{2}}{C}\\&=\frac{1}{2}CV^{2}
> \end{aligned}
> $$
> 

## 二、电介质

### 1、电场中的绝缘体

在电容器的极板之间插入一种非导体材料（绝缘体）会改变电容器的电容值。为了研究这个特性，我们定义介电常数，材料的介电常数（介电常数）是指填充该材料时电容器的电容与未填充时的电容之比：
$$
C=\kappa_eC_0
$$
其中$C_0$为真空作为介质的电容大小，$\kappa_e$是相对介电常数。真空的介电常数为$1$，故$\kappa_e>1$恒成立。

将上面公式代入到不同种类的电容计算公式中得出：

- 平行板电容器电容：
  $$
  C=\frac{\kappa_e\varepsilon_0A}{d}
  $$

- 圆柱体电容器电容：
  $$
  C=\kappa_e\frac{2\pi\varepsilon_0L}{\ln(b/a)}
  $$

- 球体电容器电容：
  $$
  C=4\pi\varepsilon_0\kappa_e\frac{ab}{b-a}
  $$

### 2、电介质作用原理

对于电容器内放置导体，如下图：

![image-20251022103122594](https://laoguantx.top/article/物理/普通物理学/电容器和电介质/image-20251022103122594.png)

由于导体的性质，产生感应电荷，可以将原电容器看作是两个电容器，使用如下公式推导：
$$
\begin{aligned}&C_1=\frac{\varepsilon_0A}{d_1}\\&C_2=\frac{{\varepsilon}_0A}{{d}_2}\\&C=\frac{C_1C_2}{C_1+C_2}=\frac{\varepsilon_0A}{d_1+d_2}>\frac{\varepsilon_0A}{d}\end{aligned}
$$
对于电容器内放置绝缘体，如下图：

![image-20251022103308933](https://laoguantx.top/article/物理/普通物理学/电容器和电介质/image-20251022103308933.png)

由于极化作用，绝缘体的分子在电场的作用下发生变化，产生了束缚电荷，束缚电荷产生的电场，抵消了一部分原来的电场，使用下面的公式推导结论：
$$
V=Ed=(E_0-E^{\prime})d<E_0d
$$

$$
C=\frac{q}{Ed}=\frac{q}{(E_0-E^{\prime})d}>C_0
$$

### 3、极化强度矢量

定义极化强度矢量$\vec{P}$，用来描述电介质在外电场作用下内部产生的电偶极矩的强度和方向。极化强度矢量$\vec{P}$是单位体积内电偶极矩的总和，其定义公式为：
$$
\vec{P}=\frac{\sum\vec{p}_m}{\Delta V}
$$

$\vec{p}_m$为单个分子或原子形成的电偶极矩。$\Delta V$为单位体积。在均匀介质中，满足：
$$
\vec{P}=nq\vec{l}
$$
其中$n$为单位体积内的分子数量，$q$为每个电偶极子上的有效电荷量，$\vec{l}$为电偶极矩两电荷之间的距离。这也是位移极化的表达式。

现在探究极化强度矢量与导体面电荷密度之间的关系。考虑电介质表面区域的一小块面积$\mathrm{d}A$，我们要计算这一块面积中所包含的电荷。由于极化后的内部形成了电偶极矩，每个偶极矩的正、负电荷互相抵消，而在电介质表面会出现净电荷。这一净电荷由极化向外“推出”（或收缩）并集中于电介质表面。感应电荷的面电荷密度可以定义为单位面积上的净电荷量为：
$$
\sigma' = \frac{净电荷量}{单位面积}
$$

设极化强度为 $\vec{P}$，其方向表示电偶极矩的方向。一个微面积 $\mathrm{d}A$ 上的总感应电荷由极化强度的法向分量决定。设表面的法向单位矢量为 $\hat{n}$，那么通过这一面积的极化总电荷为：

$$
\mathrm{d}q' = \vec{P} \cdot \hat{n} \mathrm{d}A
$$

这里，$\vec{P} \cdot \hat{n}$ 表示极化矢量在法向上的分量。所以单位面积上的感应电荷密度为：

$$
\sigma' = \vec{P} \cdot \hat{n}
$$

这个公式表示电介质表面感应电荷密度 $\sigma'$ 是极化强度矢量 $\vec{P}$ 沿表面的法向分量。

### 4、退极化场

#### (1) 退极化场现象

![image-20251022111156861](https://laoguantx.top/article/物理/普通物理学/电容器和电介质/image-20251022111156861.png)

退极化场是电极化介质内部的一种特殊电场，其来源于极化介质表面或体内的束缚电荷产生的电场。

当一个绝缘体（电介质）受到外电场作用时，分子或原子内部的电荷分布会发生变化，导致电介质产生极化，形成极化强度 $\vec{P}$。极化会导致以下结果：

- 表面束缚电荷：极化使得介质表面上的电荷分布变得不均匀，形成束缚电荷。

- 体内束缚电荷：如果电介质内部存在极化梯度（即 $\nabla \cdot \vec{P} \neq 0$），则会在介质内部形成体电荷。

无论是表面束缚电荷还是体束缚电荷，它们都会产生电场，这个电场称为退极化场。退极化场与原磁场的叠加为（注意方向）：
$$
\vec{E}=\vec{E_0}+\vec{E}'
$$

#### (2) 退极化场计算

![image-20251022110149472](https://laoguantx.top/article/物理/普通物理学/电容器和电介质/image-20251022110149472.png)

一个球形介质具有均匀极化强度 $\vec{P}$，其表面电荷密度为：

$$
\sigma_e' = P \cos \theta
$$

其中 $\theta$ 是球面上的点与极化方向 $\vec{P}$ 的夹角。我们需要计算球中心处的退极化场 $\vec{E}'$。从球体的表面分布的电荷出发，考虑球表面微元面积 $\mathrm{d}A$ 所产生的场强微元贡献 $\mathrm{d}E'$：

- 球表面微元面积为：
$$
dA = R^2 \sin \theta \mathrm{d}\theta \mathrm{d}\phi
$$
- 表面电荷密度为：
$$
\sigma_e' = P \cos \theta
$$
- 微元电荷量为：
$$
\mathrm{d}q = \sigma_e' dA = P \cos \theta \cdot R^2 \sin \theta \mathrm{d}\theta \mathrm{d}\phi
$$
- 微元电场强度为（库仑定律）：
$$
\mathrm{d}E' = \frac{\mathrm{d}q}{4 \pi \varepsilon_0 R^2} = \frac{P \cos \theta \cdot R^2 \sin \theta \mathrm{d}\theta \mathrm{d}\phi}{4 \pi \varepsilon_0 R^2} = \frac{P \cos \theta \sin \theta \mathrm{d}\theta \mathrm{d}\phi}{4 \pi \varepsilon_0}
$$
由于球对称性，退极化场的唯一非零分量位于极化方向（$z$ 轴）。微元电场 $\mathrm{d}E'_z$ 在 $z$ 方向上的投影为：
$$
\mathrm{d}E'_z = \mathrm{d}E' \cos(\pi - \theta) = -\mathrm{d}E' \cos \theta
$$
结合 $\mathrm{d}E'$ 的表达式：
$$
\mathrm{d}E'_z = -\frac{P \cos^2 \theta \sin \theta \mathrm{d}\theta \mathrm{d}\phi}{4 \pi \varepsilon_0}
$$
退极化场 $\mathbf{E}'$ 是整个球面电荷产生的场的叠加。我们对球表面进行积分：
$$
E'_z = {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \mathrm{d}E'_z
$$
将 $\mathrm{d}E'_z$ 的表达式代入：
$$
E'_z = -\frac{P}{4 \pi \varepsilon_0} \int_0^\pi \int_0^{2\pi} \cos^2 \theta \sin \theta \mathrm{d}\theta \mathrm{d}\phi
$$
积分中角度变量 $\phi$ 和 $\theta$ 是独立的，可以分离变量：
$$
E'_z = -\frac{P}{4 \pi \varepsilon_0} \left( \int_0^{2\pi} \mathrm{d}\phi \right) \left( \int_0^\pi \cos^2 \theta \sin \theta \mathrm{d}\theta \right)
$$
- 对 $\phi$ 的积分：
$$
\int_0^{2\pi} \mathrm{d}\phi = 2\pi
$$
- 对 $\theta$ 的积分：
利用换元法，令 $u = \cos \theta$，则 $\mathrm{d}u = -\sin \theta \mathrm{d}\theta$，积分范围 $\theta \in [0, \pi]$ 对应 $u \in [1, -1]$：
$$
\int_0^\pi \cos^2 \theta \sin \theta \mathrm{d}\theta = \int_1^{-1} u^2 (-\mathrm{d}u) = \int_{-1}^{1} u^2 \mathrm{d}u
$$
计算 $\int_{-1}^1 u^2 \mathrm{d}u$：
$$
\int_{-1}^1 u^2 \mathrm{d}u = \left[ \frac{u^3}{3} \right]_{-1}^1 = \frac{1^3}{3} - \frac{(-1)^3}{3} = \frac{1}{3} - \left(-\frac{1}{3}\right) = \frac{2}{3}
$$
因此：
$$
\int_0^\pi \cos^2 \theta \sin \theta \mathrm{d}\theta = \frac{2}{3}
$$
将积分结果代入 $E'_z$ 表达式：
$$
E'_z = -\frac{P}{4 \pi \varepsilon_0} \cdot 2\pi \cdot \frac{2}{3} = -\frac{P}{3 \varepsilon_0}
$$
球中心处的退极化场为：
$$
\vec{E}' = -\frac{P}{3 \varepsilon_0} {\hat{z}}
$$
其中 ${\hat{z}}$ 是极化方向的单位矢量。

在平行板电容器中，可以直接使用高斯定理：
$$
E'=\frac{\sigma_e'}{\varepsilon_0}
$$

### 5、电介质的极化规律

对于各向同性的材料，存在如下公式：
$$
\vec{P}=\chi_e\varepsilon_0\vec{E}
$$
其中$\chi_e$为极化率，满足：
$$
\kappa_e=1+\chi_e
$$

### 6、电感应强度

#### (1) 电感应强度的定义与性质

电感应强度，通常记为 $\vec{D}$，是电介质中用来描述电场与极化效应的一种矢量场。

电感应强度 $\vec{D}$ 被定义为：
$$
\vec{D} = \varepsilon_0 \vec{E} + \vec{P}
$$
![image-20251022112148649](https://laoguantx.top/article/物理/普通物理学/电容器和电介质/image-20251022112148649.png)

在电介质内部，使用高斯定律：
$$
\varepsilon_0 {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{E} \cdot \mathrm{d}\vec{A} = \sum{(q_0 + q')}
$$
其中$\sum{(q_0 + q')}$ 是总电荷，包括自由电荷 $q_0$ 和束缚电荷 $q'$。而极化强度 $\vec{P}$ 的高斯定律形式为：
$$
{\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{P} \cdot \mathrm{d}\vec{A} = -\sum q'
$$
自由电荷 $q_0$ 与束缚电荷 $q'$ 的关系使得电场 $\vec{E}$ 和极化 $\vec{P}$ 的贡献可以分离。将电场强度 $\vec{E}$ 和极化强度 $\vec{P}$ 的贡献相结合，我们得到电感应强度 $\vec{D}$ 的高斯定律：
$$
{\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{D} \cdot \mathrm{d}\vec{A} = \sum q_0
$$
该公式表明，电感应强度 $\vec{D}$ 的通量仅与自由电荷 $q_0$ 有关，而不受束缚电荷 $q'$ 的影响。

另外，在均匀介质中，可以利用电介质的极化规律，继续化简$\vec{D}$：
$$
\begin{aligned}&\vec{D}=\varepsilon_0\vec{E}+\vec{P}\\&=\varepsilon_0\vec{E}+\chi_e\varepsilon_0\vec{E}\\&=(1+\chi_e)\varepsilon_0\vec{E}\\&=K_e\boldsymbol{\varepsilon}_0\vec{E}\end{aligned}
$$

#### (2) 电感应强度的计算

<img src="https://laoguantx.top/article/物理/普通物理学/电容器和电介质/image-20251022112758692.png" alt="image-20251022112758692" style="zoom:50%;" />

对于平行板电容器，在其中放置一个均匀导体介质，计算其电场。
$$
\begin{aligned}&{\int\kern{-8pt}\int \kern{-23mu} \bigcirc}\vec{D}\cdot \mathrm{d}A=\sum q_0\\&D_1\Delta A+D_2\Delta A=\sigma_{e0}\Delta A\\&\vec{E}_1=0,D_1=\kappa_{e1}\varepsilon_0E_1=0\\\therefore& D_1=0\\\therefore& D=D_2=\sigma_{e0}=\varepsilon_0E_0\\\therefore& E=\frac{D}{K_eE_0}=\frac{\varepsilon_0E_0}{K_eE_0}=\frac{E_0}{K_e}\end{aligned}
$$
l.
