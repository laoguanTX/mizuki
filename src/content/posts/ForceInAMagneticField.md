---
title: 磁场中受力
published: 2025-10-27
category: ["物理", "普通物理学"]
tags: ["电磁学"]
description: '一、安培力 1、安培力推导 安培力是通电导线在磁场中受到的作用力。根据上一篇文章磁学的基本现象和规律，可知安培定律的表达式为'
alias: "forceinamagneticfield"
---
## 一、安培力

### 1、安培力推导

安培力是通电导线在磁场中受到的作用力。根据上一篇文章[磁学的基本现象和规律](https://www.laoguantx.top/posts/basicphenomenaandfundamentallawsofmagnetism)，可知安培定律的表达式为：
$$
\mathrm{d}\vec{F}_{12}=\frac{\mu_0}{4\pi}\frac{i_2\mathrm{d}\vec{s}_2\times(i_1\mathrm{d}\vec{s}_1\times\hat{r}_{12})}{r_{12}^2}
$$
以及毕奥-萨法尔定律：
$$
\mathrm{d}\vec{B} = \frac{\mu_0}{4\pi} \frac{i\,\mathrm{d}\vec{s} \times \hat{r}}{r^2}
$$
将两式结合，可以得到安培力的表达式：
$$
\mathrm{d}F=i\mathrm{d}\vec{s}\times\vec{B}
$$
对于通电直导线来说，安培力可以直接写成：
$$
\vec{F}=i\vec{l}\times\vec{B}
$$

### 2、安培力应用

#### (1) 两通电平行指导线的相互作用力

两根平行导线分别携带电流 $ i_1 $ 和 $ i_2 $，相隔距离 $ d $。导线间的相互作用力由电磁场产生。

![image-20251103111900222](https://laoguantx.top/article/物理/普通物理学/磁场中受力/image-20251103111900222.png)

根据毕奥-萨伐尔定律，第一根导线在第二根导线位置处产生的磁场为：
$$
B_1 = \frac{\mu_0 i_1}{2\pi d}
$$

第二根导线受到第一根导线产生的磁场作用，其微元段 $ \mathrm{d}s_2 $ 受到磁力：
$$
\mathrm{d}\vec{F}_{12} = i_2 \mathrm{d}s_2 \times \vec{B}_1
$$

由于导线间的磁场与电流方向垂直，力的大小为：
$$
\mathrm{d}F_{12} = i_2 \mathrm{d}s_2 B_1
$$

将 $ B_1 $ 的表达式代入：
$$
\mathrm{d}F_{12} = i_2 \mathrm{d}s_2 \cdot \frac{\mu_0 i_1}{2\pi d}
$$

将导线的长度单位化，磁力每单位长度为：
$$
f = \frac{\mathrm{d}F_{12}}{\mathrm{d}s_2} = \frac{\mu_0 i_1 i_2}{2\pi d}
$$

#### (2) 矩形线圈受到的安培力矩

一个矩形电流环处于均匀磁场 $ \vec{B} $ 中，其电流 $ i $ 通过导线流动。电流环受到磁场的作用力，并产生一个力矩使其趋向于与磁场方向对齐。线圈电流产生的磁场对另外导线的作用力仅沿着导线框所在的平面，不产生力矩。

![image-20251103112340704](https://laoguantx.top/article/物理/普通物理学/磁场中受力/image-20251103112340704.png)

矩形电流环边长为 $ a $ 和 $ b $，其四条边分别标记为 $ AB, BC, CD, DA $。磁力由磁场对每段导线施加的洛伦兹力产生：
$$
\vec{F} = i \vec{l} \times \vec{B}
$$

对于垂直于磁场的边 $ AB $ 和 $ CD $，电流方向与磁场方向垂直，因此磁力大小为：
$$
F_{AB} = F_{CD} = i \cdot a \cdot B
$$
力的方向根据右手定则，与纸面垂直（我感觉老师给的图中的$F_1,F_2$方向错误了，不应该与线圈平面垂直）。

对于平行于磁场的边 $ BC $ 和 $ DA $，其产生的磁力相互抵消：
$$
F_{BC} = F_{DA} = 0
$$
磁力对矩形环的中心产生力矩 $ \vec{\tau} $，其大小为：
$$
\vec{\tau} = \sum \vec{r} \times \vec{F}
$$

对于边 $ AB $ 的力矩，环中心到力作用线的垂直距离为 $ \frac{b}{2} $，力矩大小为：
$$
\tau_{AB} = F_{AB} \cdot \frac{b}{2} \cdot \sin\theta
$$
其中 $ \theta $ 是磁场 $ \vec{B} $ 与环平面法向量 $ \vec{n} $ 的夹角。

总力矩为两边力矩的加和（根据对称性直接得出另一边的力矩）：
$$
\tau = \tau_{AB} + \tau_{CD} = i a B \cdot \frac{b}{2} \sin\theta + i a B \cdot \frac{b}{2} \sin\theta
$$

化简得：
$$
\tau = i a b B \sin\theta
$$

矩形环的面积为：
$$
A = a b
$$

定义电流环的磁矩：
$$
\vec{\mu} = i \vec{n} A
$$
其中 $ \vec{n} $ 是环平面的法向量，力矩可以写为：

$$
\vec{\tau} = \vec{\mu} \times \vec{B}
$$

#### (3) 任意形状的线圈受到的安培力矩

![image-20251105100642588](https://laoguantx.top/article/物理/普通物理学/磁场中受力/image-20251105100642588.png)

取沿着磁场方向取同一对称位置的微小线圈元，计算每一个微小电流源的受力：
$$
\mathrm{d}F_1=i\mathrm{d}_1B\sin\theta_1
$$

$$
\mathrm{d}F_2=i\mathrm{d}s_2B\sin\theta_2
$$

其中：
$$
\mathrm{d}s_1\sin\theta_1=\mathrm{d}s_2\sin\theta_2=\mathrm{d}h
$$
则：
$$
\mathrm{d}F_1=\mathrm{d}F_2=iB\mathrm{d}h
$$
计算力矩：
$$
\begin{aligned}\mathrm{d}\tau&=\mathrm{d}F_1\cdot x_1+\mathrm{d}F_2\cdot x_2\\&=iB\mathrm{d}h(x_1+x_2)\\&=iB\mathrm{d}A\end{aligned}
$$
积分得到：
$$
\tau=iAB=\mu B
$$
若$\vec{n}\cap\vec{B}=\theta$，则$ \vec{\tau}=\vec{\mu}\times\vec{B} $

#### (4) 磁偶极矩的能量

![image-20251105101633059](https://laoguantx.top/article/物理/普通物理学/磁场中受力/image-20251105101633059.png)
$$
U=-\int\vec{\tau}\cdot\mathrm{d}\theta=-\int\mu B \sin\theta\mathrm{d}\theta
$$
当$ \theta=90\degree $时，得到：
$$
U=-\vec{\mu}\cdot \vec{B}
$$

> [!NOTE]
>
> 与电偶极子能量的表达式：
> $$
> U=-\vec{p}\cdot\vec{E}
> $$
> 相互比较

## 二、洛伦兹力

### 1、洛伦兹力定义

洛伦兹力表示运动电荷在磁场中的受力，计算公式为：
$$
\vec{F}=q\vec{v}\times\vec{B}
$$
在匀强磁场中电子做匀速圆周运动时，其周期为：
$$
T=\frac{2\pi m}{qB}
$$
圆周运动半径为：
$$
R=\frac{mv}{qB}
$$

### 2、洛伦兹力与安培力

![image-20251105104009342](https://laoguantx.top/article/物理/普通物理学/磁场中受力/image-20251105104009342.png)

安培力可以由洛伦兹力推导而来，取微小长度$\Delta s$的带电导线，电荷密度为$n$，电荷运动速度为$u$，在微小时间$\Delta t$内，通过的电量为：
$$
\Delta q=en A\cdot u\Delta t
$$
电流为：
$$
i=\frac{\Delta q}{\Delta t}=nAue
$$
将每一个电荷所受到的洛伦兹力求和：
$$
\begin{aligned}
F_A&=nA\Delta s f_L
\\&=nA\Delta s euB
\\&=B(euAn)\Delta s
\\&=Bi\Delta s
\end{aligned}
$$
