---
title: 电场
published: 2025-10-09
category: ["物理", "普通物理学"]
tags: ["电学"]
alias: "electricfield"
---

## 一、电偶极子

考虑两个等量异号的点电荷 $+Q$ 和 $-Q$，分别位于 $(0,-a)$ 和 $(0,a)$，即沿 $y$ 轴对称分布。定义电偶极矩为
$$
\vec{p} = 2Qa
$$

方向为负电荷指向正电荷，大小为电荷与距离的乘积

### 1、电偶极子在$(x,0)$上产生的电场

<img src="https://laoguantx.top/article/物理/普通物理学/电场/image-20250924111610370.png" alt="image-20250924111610370" style="zoom:50%;" />

由对称性，$E_x=0$，只需要计算$E_y$：
$$
E_{y}=-2\frac{1}{4\pi\varepsilon_{_0}}\frac{Q}{r^2}\sin\theta
$$
其中：
$$
\sin\theta=\frac{a}{r},\quad r^2=x^2+a^2
$$
所以：
$$
E_y=-2\frac{1}{4\pi\varepsilon_0}\frac{Qa}{\left(x^2+a^2\right)^{3/2}}
$$

### 2、电偶极子在$(0,y)$上产生的电场

<img src="https://laoguantx.top/article/物理/普通物理学/电场/image-20250924112123622.png" alt="image-20250924112123622" style="zoom:50%;" />

在$y$轴上，$E_x=0$，只需要计算$E_y$：
$$
E_y=\frac{Q}{4\pi\varepsilon_0}\left[\frac{1}{(y-a)^2}-\frac{1}{(y+a)^2}\right]
$$
化简得：
$$
E_y=\frac{Q}{4\pi\varepsilon_0}\frac{4ay}{(y^2-a^2)^2}
$$

### 3、电偶极子在电场中的受力分析

![image-20250924121806484](https://laoguantx.top/article/物理/普通物理学/电场/image-20250924121806484.png)

上图为电偶极子在均匀电场中的受力分析。很明显，电偶极子收到一个力矩作用，首先写出电偶极矩矢量：
$$
\vec{p}=q\vec{d}
$$
分析受力特点，整体受力为$0$，合力矩为：
$$
\tau = F\frac{d}{2}\sin\theta+F\frac{d}{2}\sin\theta=Fd\sin\theta=qEd\sin\theta=pe\sin\theta
$$
![image-20250924123203599](https://laoguantx.top/article/物理/普通物理学/电场/image-20250924123203599.png)

即：
$$
\vec{\tau}=\vec{p}\times\vec{E}
$$
以电偶极子的中点为参考点，计算电场对电偶极子做的功：
$$
\begin{aligned}W&=\int \mathrm{d}w=\int_{\theta_{0}}^{\theta}\vec{\tau}\cdot \vec{\mathrm{d}\theta}=-\int_{\theta_{0}}^{\theta}pE\sin\theta \mathrm{d}\theta\\&=pE(\cos\theta-\cos\theta_{0})\end{aligned}
$$

## 二、连续电荷分布产生的电场

### 1、无限长带电直线在某一点产生的的电场

![image-20250924101939128](https://laoguantx.top/article/物理/普通物理学/电场/image-20250924101939128.png)

根据上图演示，计算$\mathrm{d}x$在该点产生的电场$\mathrm{d}E$：
$$
\mathrm{d}E=\frac{1}{4\pi\varepsilon_{0}}\frac{\mathrm{d}q}{r^{2}}
$$
其中$\mathrm{d}q$和$r'$为:
$$
\mathrm{d}q=\lambda \mathrm{d}x
$$

$$
r'=\frac{r}{\cos\theta}
$$

代入得：
$$
\mathrm{d}E=\frac{1}{4\pi\varepsilon_0}\frac{\lambda\cos^2\theta \mathrm{d}x}{r^2}
$$
其中$\mathrm{d}x$与$\theta$并不是独立的，存在下面关系：
$$
\begin{aligned}x&=r\tan\theta\\\mathrm{d}x&=r\sec^2\theta \mathrm{d}\theta\end{aligned}
$$
所以：
$$
\mathrm{d}E = \frac{1}{4\pi\varepsilon_0}\frac{\lambda d\theta}{r}
$$
将$\mathrm{d}E$向两个方向分解：
$$
\begin{gathered}\mathrm{d}E_{x}=-\frac{1}{4\pi\varepsilon_0}\frac{\lambda \mathrm{d}\theta}{r}\sin\theta\\\mathrm{d}E_{y}=+\frac{1}{4\pi\varepsilon_0}\frac{\lambda \mathrm{d}\theta}{r}\cos\theta\end{gathered}
$$
积分得：
$$
E_x=\int \mathrm{d}E_x=-\int_{-\pi/2}^{+\pi/2}\frac{1}{4\pi\varepsilon_0}\frac{\lambda \mathrm{d}\theta}{r}\sin\theta=0
$$

$$
E_y=\int \mathrm{d}E_y=\int_{-\pi/2}^{+\pi/2}\frac{1}{4\pi\varepsilon_0}\frac{\lambda \mathrm{d}\theta}{r}\cos\theta=\frac{\lambda}{2\pi\varepsilon_0r}
$$

经过上面的推导，得出结论：无限长带电直线对某一点产生的电场，随着该点到直线的距离成反比例减小。

### 2、均匀带电圆环在圆心轴上某点产生的电场

![image-20250924104606533](https://laoguantx.top/article/物理/普通物理学/电场/image-20250924104606533.png)

计算$\mathrm{d}q$对该点产生的电场$\mathrm{d}E$：
$$
\mathrm{d}q=\lambda\mathrm{d}s
$$

$$
\mathrm{d}E=\frac{\lambda \mathrm{d}s}{4\pi\varepsilon_0r^2}=\frac{\lambda \mathrm{d}s}{4\pi\varepsilon_0(z^2+R^2)}
$$
由对称性得：
$$
E_x=E_y=0,\quad E_z\neq0
$$
计算$\mathrm{E}$在竖直方向的分量：
$$
\begin{aligned}\mathrm{d}E_z=&\mathrm{d}E\cos\theta\\=&\frac{\lambda \mathrm{d}s}{4\pi\varepsilon_0(z^2+R^2)}\cdot\frac{z}{\left(z^2+R^2\right)^{1/2}}\\=&\frac{z\lambda \mathrm{d}s}{4\pi\varepsilon_0(z^2+R^2)^{3/2}}\end{aligned}
$$
积分得：
$$
\begin{aligned}&E=\int \mathrm{d}E_z=\int\frac{z\lambda \mathrm{d}s}{4\pi\varepsilon_0(z^2+R^2)^{3/2}}\\&=\frac{zq}{4\pi\varepsilon_0\left(z^2+R^2\right)^{3/2}}\end{aligned}
$$
在两种特殊的情况下：
$$
\begin{aligned}&z>>R&E=\frac{zq}{4\pi\varepsilon_0z^3}=\frac{q}{4\pi\varepsilon_0z^2}\\&z\to0&E=0\end{aligned}
$$

### 3、均匀带电圆盘在圆心轴上某点产生的电场

![image-20250924105444277](https://laoguantx.top/article/物理/普通物理学/电场/image-20250924105444277.png)

计算单位面积上带有的电荷$\mathrm{d}q$：
$$
\mathrm{d}q=2\pi \omega \mathrm{d}\omega \: \sigma
$$
将均匀带电圆盘看作是无数个圆环叠加：
$$
\mathrm{d}E=\frac{z\mathrm{d}q}{4\pi\varepsilon_0(z^2+\omega^2)^{3/2}}=\frac{z2\pi\sigma\omega \mathrm{d}\omega}{4\pi\varepsilon_0(z^2+\omega^2)^{3/2}}
$$
积分得：
$$
\begin{aligned}&E=\int \mathrm{d}E=\frac{\sigma z}{2\varepsilon_0}{\int^R_0}\frac{\omega \mathrm{d}\omega}{\left(z^2+\omega^2\right)^{3/2}}\\&=\frac{\sigma z}{4\varepsilon_0}{\int^R_0}\frac{\mathrm{d}(z^2+\omega^2)}{\left(z^2+\omega^2\right)^{3/2}}\\&=\frac{\sigma}{2\varepsilon_0}(1-\frac{1}{\sqrt{1+\frac{R^2}{z^2}}})\end{aligned}
$$
当圆盘无限大时：
$$
R>>z\quad\frac{1}{\sqrt{1+\frac{R^2}{z^2}}}\to0\quad E=\frac{\sigma}{2\varepsilon_0}
$$
当点离圆盘足够远时，可以将圆盘近似看成点电荷：
$$
\begin{aligned}
&z>>R\\\frac{1}{\sqrt{1+\frac{R^2}{z^2}}}=&1-\frac{1}{2}\frac{R^2}{z^2}+\frac{3}{8}\frac{R^4}{z^4}-\cdots\\ E=&\frac{\sigma}{2\varepsilon_0}(\frac{1}{2}\frac{R^2}{z^2}-\frac{3}{8}\frac{R^4}{z^4}+\cdots)\approx\frac{\sigma}{2\varepsilon_0}\frac{1}{2}\frac{R^2}{z^2}=\frac{q}{4\pi\varepsilon_0z^2}
\end{aligned}
$$
