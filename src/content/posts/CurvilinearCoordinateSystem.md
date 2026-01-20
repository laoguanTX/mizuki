---
title: 曲线坐标系
published: 2025-11-14
category: ["数学", "数学物理方法"]
tags: ["数学物理方程"]
alias: "curvilinearcoordinatesystem"
---
## 一、曲线坐标系

### 1、曲线坐标系方程

设空间中有三个变量 $u^1, u^2, u^3$，它们可以唯一地确定空间中一点 $P$。空间直角坐标系下，点 $P$ 的坐标为 $(x, y, z)$。如果存在三元函数：
$$
x = x(u^1, u^2, u^3),\quad y = y(u^1, u^2, u^3),\quad z = z(u^1, u^2, u^3)
$$
则称 $u^1, u^2, u^3$ 为空间的曲线坐标，$(u^1, u^2, u^3)$ 为点 $P$ 的曲线坐标。曲线坐标系的坐标方程就是上面这三条方程：

$$
\begin{cases}
x &= x(u^1, u^2, u^3) \\
y &= y(u^1, u^2, u^3) \\
z &= z(u^1, u^2, u^3)
\end{cases}
$$

当 $u^2, u^3$ 固定，$u^1$ 变化时，得到一条空间曲线，称为 $u^1$ 坐标曲线。同理，分别固定另外两组变量，$u^2$、$u^3$ 变化时分别得到 $u^2$ 和 $u^3$ 坐标曲线。以 $u^1$ 坐标曲线为例，其切向量为：
$$
\left. \frac{\partial \vec{r}}{\partial u^1} \right|_{u^2, u^3=comst.}
$$
其中，$\vec{r}$ 为点 $P$ 的矢径：
$$
\vec{r} = x(u^1, u^2, u^3) \vec{e}_x + y(u^1, u^2, u^3) \vec{e}_y + z(u^1, u^2, u^3) \vec{e}_z
$$

一般地，三条坐标曲线的切向量分别为：
$$
\vec{a}_i = \frac{\partial \vec{r}}{\partial u^i}, \quad (i=1,2,3)
$$

切向量 $\vec{a}_i$ 的模称为拉梅系数 $h_i$：
$$
h_i = \left| \frac{\partial \vec{r}}{\partial u^i} \right|
$$

单位基向量定义为：
$$
\vec{e}_i = \frac{\vec{a}_i}{h_i} = \frac{1}{h_i} \frac{\partial \vec{r}}{\partial u^i}, \quad (i=1,2,3)
$$

单位基向量 $\vec{e}_1, \vec{e}_2, \vec{e}_3$ 分别沿着 $u^1, u^2, u^3$ 坐标曲线的切向量方向，且模长为 $1$。如果三个单位基向量相互垂直，我们称为正交曲线坐标系。

### 2、弧段、面元、体积元

在曲线坐标系中，任意弧段指的是坐标曲线上的一小段曲线。假设我们考虑 $u^1$ 坐标曲线（即 $u^2, u^3$ 固定，$u^1$ 变化），任意取 $u^1$ 的两个值 $u^1$ 和 $u^1 + \mathrm{d}u^1$，此时空间中的点 $P$ 的位置矢量为：
$$
\vec{r}(u^1, u^2, u^3)
$$
而相邻点 $P'$ 的位置矢量为：
$$
\vec{r}(u^1+\mathrm{d}u^1, u^2, u^3)
$$

这两点之间的曲线段就称为$u^1$坐标曲线上的任意弧段。同理，也可以定义 $u^2$ 或 $u^3$ 坐标曲线上的任意弧段。设 $u^i$ 为某一坐标曲线的参数，其他两个坐标固定，$\mathrm{d}u^i$ 为参数的微小变化，则对应的空间微元弧段为：

$$
\mathrm{d}\vec{r} = \frac{\partial \vec{r}}{\partial u^i} \mathrm{d}u^i
$$

弧段的长度为
$$
\mathrm{d}s = |\mathrm{d}\vec{r}| = \left| \frac{\partial \vec{r}}{\partial u^i} \right| \mathrm{d}u^i = h_i \mathrm{d}u^i
$$
对于任意曲线（不一定是坐标曲线），其微元弧长为：
$$
\mathrm{d}s = \sqrt{
\left( \frac{\partial x}{\partial u^1} \mathrm{d}u^1 +
        \frac{\partial x}{\partial u^2} \mathrm{d}u^2 +
        \frac{\partial x}{\partial u^3} \mathrm{d}u^3 \right)^2 +
\left( \frac{\partial y}{\partial u^1} \mathrm{d}u^1 +
        \frac{\partial y}{\partial u^2} \mathrm{d}u^2 +
        \frac{\partial y}{\partial u^3} \mathrm{d}u^3 \right)^2 +
\left( \frac{\partial z}{\partial u^1} \mathrm{d}u^1 +
        \frac{\partial z}{\partial u^2} \mathrm{d}u^2 +
        \frac{\partial z}{\partial u^3} \mathrm{d}u^3 \right)^2
}
$$

或者记为：
$$
\mathrm{d}s^2 = 
\sum_{i,j=1}^3 g_{ij} \mathrm{d}u^i \mathrm{d}u^j
$$
其中
$$
g_{ij} = \frac{\partial \vec{r}}{\partial u^i} \cdot \frac{\partial \vec{r}}{\partial u^j}
$$
为度规张量。

对于正交曲线坐标系，$g_{ij} = 0$（$i \ne j$），则
$$
\mathrm{d}s^2 = h_1^2 (\mathrm{d}u^1)^2 + h_2^2 (\mathrm{d}u^2)^2 + h_3^2 (\mathrm{d}u^3)^2
$$

考虑 $u^1$ 和 $u^2$ 变化、$u^3$ 固定，形成一小块曲面（称为 $u^1$-$u^2$ 曲面），其面元 $\mathrm{d}\vec{S}$ 的向量形式为：
$$
\mathrm{d}\vec{S} = \frac{\partial \vec{r}}{\partial u^1} \times \frac{\partial \vec{r}}{\partial u^2} \, \mathrm{d}u^1 \mathrm{d}u^2
$$

面元的大小（数量值）为：
$$
\mathrm{d}S = \left| \frac{\partial \vec{r}}{\partial u^1} \times \frac{\partial \vec{r}}{\partial u^2} \right| \mathrm{d}u^1 \mathrm{d}u^2
$$

如果该坐标系是正交曲线坐标系，即三个基矢互相正交，则：
$$
\mathrm{d}S = h_1 h_2 \, \mathrm{d}u^1 \mathrm{d}u^2
$$
其中 $h_1, h_2$ 分别为对应坐标的拉梅系数。如果面元是 $u^2$-$u^3$ 平面或 $u^3$-$u^1$ 平面，选取对应的两个坐标即可。

三个坐标同时变化时，微元体积为：
$$
\mathrm{d}V = \left| \frac{\partial \vec{r}}{\partial u^1} \cdot \left( \frac{\partial \vec{r}}{\partial u^2} \times \frac{\partial \vec{r}}{\partial u^3} \right) \right| \mathrm{d}u^1 \mathrm{d}u^2 \mathrm{d}u^3
$$

对于正交曲线坐标系，因为三基矢正交，所以
$$
\mathrm{d}V = h_1 h_2 h_3 \, \mathrm{d}u^1 \mathrm{d}u^2 \mathrm{d}u^3
$$

### 3、梯度、散度、旋度

梯度 $\nabla f$ 的定义是：
$$
\nabla f = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right)
$$
也梯度可表示为：
$$
\nabla f = \sum_{i=1}^3 \vec{e}_i \frac{1}{h_i} \frac{\partial f}{\partial u^i}
$$

存在下面两个梯度恒等式：
$$
\frac{\vec{e}_1}{h_2 h_3} = \frac{\vec{e}_2}{h_3 h_1} \times \frac{\vec{e}_3}{h_1 h_2} = \nabla u_2 \times \nabla u_3
$$

$$
\nabla \cdot \frac{\vec{e}_1}{h_2 h_3} = \nabla \cdot \frac{\vec{e}_2}{h_3 h_1} = \nabla \cdot \frac{\vec{e}_3}{h_1 h_2} = 0
$$

散度在物理上与通量有关系，对应高斯定理：
$$
\iiint_{\Omega}\nabla\cdot\vec{A}\mathrm{d}V=\iint_{\partial\Omega}\vec{n}\cdot\vec{A}\mathrm{d}S
$$
其中$\vec{A}$为向量，其散度为：
$$
\nabla \cdot \vec{A} = \frac{1}{h_1 h_2 h_3} \left[
\frac{\partial}{\partial u^1}(h_2 h_3 A_1)
+ \frac{\partial}{\partial u^2}(h_3 h_1 A_2)
+ \frac{\partial}{\partial u^3}(h_1 h_2 A_3)
\right]
$$
其中 $A_i$ 是 $\vec{A}$ 在 $\vec{e}_i$ 方向的分量。

旋度在物理上与环量有关系，对应斯托克斯公式：
$$
\iint_S\left(\nabla\times\vec{A}\right)\cdot\vec{n}\mathrm{d}S=\oint_C\vec{A}\cdot \mathrm{d}\vec{r}
$$
因此，得到旋度：
$$
\nabla\times\vec{A}=\frac{1}{h_1h_2h_3}\begin{vmatrix}h_1\vec{e}_1&h_2\vec{e}_2&h_3\vec{e}_3\\\dfrac{\partial}{\partial u_1}&\dfrac{\partial}{\partial u_2}&\dfrac{\partial}{\partial u_3}\\h_1A_1&h_2A_2&h_3A_3\end{vmatrix}
$$

### 4、拉普拉斯算子

拉普拉斯算子为：
$$
\Delta=\nabla\cdot\nabla=\frac{1}{h_{1}h_{2}h_{3}}\left[\frac{\partial}{\partial u_{1}}\left(\frac{h_{2}h_{3}}{h_{1}}\frac{\partial}{\partial u_{1}}\right)+\frac{\partial}{\partial u_{2}}\left(\frac{h_{3}h_{1}}{h_{2}}\frac{\partial}{\partial u_{2}}\right)+\frac{\partial}{\partial u_{3}}\left(\frac{h_{1}h_{2}}{h_{3}}\frac{\partial}{\partial u_{3}}\right)\right]
$$

## 二、直角坐标系

在直角坐标系下，曲线坐标系的相关参数为：
$$
\vec{r}=x\vec{e}_x+y\vec{e}+y+z\vec{e}_z
$$

$$
h_1=h_2=h_3=1
$$

## 三、球坐标系

- 曲线坐标系相关参数：

$$
u_1=r,u_2=\theta,u_3=\varphi
$$

$$
\begin{cases}
x=r\sin\theta\cos\varphi\\
y=r\sin\theta\sin\varphi\\
z=r\cos\theta
\end{cases}
$$

$$
\vec{r}=r\sin\theta\cos\varphi\vec{e}_x+r\sin\theta\sin\varphi\vec{e}_y+r\cos\theta\vec{e}_z
$$

$$
h_r=1,h_\theta=r,h_\varphi=r\sin\theta
$$

$$
\vec{e}_r=\frac{1}{h_r}\frac{\partial \vec{r}}{\partial r}=\sin\theta\cos\varphi \vec{e}_x+\sin\theta\sin\varphi\vec{e}_y+\cos\theta \vec{e}_z
$$

$$
\vec{e}_\theta=\frac{1}{h_\theta}\frac{\partial \vec{r}}{\partial r}=\cos\theta\cos\varphi \vec{e}_x+\cos\theta\sin\varphi\vec{e}_y-\sin\theta \vec{e}_z
$$

$$
\vec{e}_r=\frac{1}{h_r}\frac{\partial \vec{r}}{\partial r}=-\sin\varphi \vec{e}_x+\cos\varphi\vec{e}_y
$$

- 弧段长度

$$
\mathrm{d}s^2 = h_r^2 (\mathrm{d}r)^2 + h_\theta^2 (\mathrm{d}\theta)^2 + h_\varphi^2 (\mathrm{d}\varphi)^2 = (\mathrm{d}r)^2 + r^2 (\mathrm{d}\theta)^2 + r^2 \sin^2\theta (\mathrm{d}\varphi)^2
$$

- $r$-$\theta$ 面（$\varphi$ 固定）面元：
$$
\mathrm{d}S = h_r h_\theta\, \mathrm{d}r\,\mathrm{d}\theta = r\, \mathrm{d}r\,\mathrm{d}\theta
$$

- $\theta$-$\varphi$ 面（$r$ 固定）面元：
$$
\mathrm{d}S = h_\theta h_\varphi\, \mathrm{d}\theta\,\mathrm{d}\varphi = r^2 \sin\theta\, \mathrm{d}\theta\,\mathrm{d}\varphi
$$

- $\varphi$-$r$ 面（$\theta$ 固定）面元：
$$
\mathrm{d}S = h_\varphi h_r\, \mathrm{d}\varphi\,\mathrm{d}r = r \sin\theta\, \mathrm{d}\varphi\,\mathrm{d}r
$$

- 体积元：

$$
\mathrm{d}V = h_r h_\theta h_\varphi\, \mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\varphi = r^2 \sin\theta\, \mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\varphi
$$

- 梯度：

$$
\nabla f =
\vec{e}_r \frac{\partial f}{\partial r}
+ \vec{e}_\theta \frac{1}{r} \frac{\partial f}{\partial \theta}
+ \vec{e}_\varphi \frac{1}{r\sin\theta} \frac{\partial f}{\partial \varphi}
$$

- 散度：

$$
\nabla \cdot \vec{A} =
\frac{1}{r^2} \frac{\partial}{\partial r}(r^2 A_r)
+ \frac{1}{r \sin\theta} \frac{\partial}{\partial \theta} (\sin\theta\, A_\theta)
+ \frac{1}{r \sin\theta} \frac{\partial A_\varphi}{\partial \varphi}
$$

- 旋度：

$$
\nabla \times \vec{A}
= \frac{1}{r \sin\theta}
    \left[
        \frac{\partial}{\partial \theta}(\sin\theta\, A_\varphi)
        - \frac{\partial A_\theta}{\partial \varphi}
    \right]\vec{e}_e
+ \frac{1}{r}
    \left[
        \frac{1}{\sin\theta} \frac{\partial A_r}{\partial \varphi}
        - \frac{\partial}{\partial r}(r A_\varphi)
    \right]\vec{e}_\theta
+ \frac{1}{r}
    \left[
        \frac{\partial}{\partial r}(r A_\theta)
        - \frac{\partial A_r}{\partial \theta}
    \right]\vec{e}_\varphi
$$

- 拉普拉斯算子：
$$
\Delta u=\nabla^2u=\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial u}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial u}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2u}{\partial\varphi^2}
$$

## 四、柱坐标系

- 曲线坐标系相关系数：
$$
u_1=\rho,u_2=\varphi,u_3=z
$$

$$
\begin{cases}
x=\rho\cos\varphi\\
y=\rho\sin\varphi\\
z=z
\end{cases}
$$

$$
\vec{r}=\rho\cos\varphi\vec{\mathrm{e}}_{x}+\rho\sin\varphi\vec{\mathrm{e}}_{y}+z\vec{\mathrm{e}}_{z}
$$

$$
h_\rho=1,h_\varphi=\rho,h_z=1
$$

$$
\vec{e}_\rho=\frac{1}{h_\rho}\frac{\partial\vec{r}}{\partial\rho}=\cos\varphi\vec{\mathrm{e}}_{x}+\sin\varphi\vec{\mathrm{e}}_{y}
$$

$$
\vec{e}_\varphi=\frac{1}{h_\varphi}\frac{\partial\vec{r}}{\partial\varphi}=-\sin\varphi\vec{\mathrm{e}}_{x}+\cos\varphi\vec{\mathrm{e}}_{y}
$$

$$
\vec{e}_z=\frac{1}{h_z}\frac{\partial\vec{r}}{\partial z}=\vec{\mathrm{e}}_{z}
$$

- 弧段长度：

$$
\mathrm{d}s^2 = h_\rho^2 (\mathrm{d}\rho)^2 + h_\varphi^2 (\mathrm{d}\varphi)^2 + h_z^2 (\mathrm{d}z)^2 = (\mathrm{d}\rho)^2 + \rho^2 (\mathrm{d}\varphi)^2 + (\mathrm{d}z)^2
$$

- $\rho$-$\varphi$ 面（$z$ 固定）面元：
$$
\mathrm{d}S = h_\rho h_\varphi\, \mathrm{d}\rho\,\mathrm{d}\varphi = \rho\, \mathrm{d}\rho\,\mathrm{d}\varphi
$$

- $\varphi$-$z$ 面（$\rho$ 固定）面元：
$$
\mathrm{d}S = h_\varphi h_z\, \mathrm{d}\varphi\,\mathrm{d}z = \rho\, \mathrm{d}\varphi\,\mathrm{d}z
$$

- $z$-$\rho$ 面（$\varphi$ 固定）面元：
$$
\mathrm{d}S = h_z h_\rho\, \mathrm{d}z\,\mathrm{d}\rho = \mathrm{d}z\,\mathrm{d}\rho
$$

- 体积元：
- 
$$
\mathrm{d}V = h_\rho h_\varphi h_z\, \mathrm{d}\rho\,\mathrm{d}\varphi\,\mathrm{d}z = \rho\, \mathrm{d}\rho\,\mathrm{d}\varphi\,\mathrm{d}z
$$

- 梯度：
$$
\nabla f = 
\vec{e}_\rho \frac{\partial f}{\partial \rho}
+ \vec{e}_\varphi \frac{1}{\rho} \frac{\partial f}{\partial \varphi}
+ \vec{e}_z \frac{\partial f}{\partial z}
$$

- 散度：

$$
\nabla \cdot \vec{A} =
\frac{1}{\rho} \frac{\partial}{\partial \rho} (\rho A_\rho)
+ \frac{1}{\rho} \frac{\partial A_\varphi}{\partial \varphi}
+ \frac{\partial A_z}{\partial z}
$$

- 旋度：

$$
\nabla \times \vec{A} =
\left[
    \frac{1}{\rho} \left(
        \frac{\partial A_z}{\partial \varphi} - \frac{\partial}{\partial z}(\rho A_\varphi)
    \right)
\right] \vec{e}_\rho
+ \left[
    \frac{\partial A_\rho}{\partial z} - \frac{\partial A_z}{\partial \rho}
\right] \vec{e}_\varphi
+ \left[
    \frac{1}{\rho} \left(
        \frac{\partial}{\partial \rho}(\rho A_\varphi) - \frac{\partial A_\rho}{\partial \varphi}
    \right)
\right] \vec{e}_z
$$

- 拉普拉斯算子：

$$
\Delta u=\frac{1}{\rho}\frac{\partial}{\partial\rho}\left(\rho\frac{\partial u}{\partial\rho}\right)+\frac{1}{\rho^2}\frac{\partial^2u}{\partial\varphi^2}+\frac{\partial^2u}{\partial z^2}
$$

