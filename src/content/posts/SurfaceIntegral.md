---
title: 曲面积分
published: 2025-05-16
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "surfaceintegral"
---
曲面积分是多元微积分中的重要内容，主要分为两类：**第一类曲面积分**（标量场的曲面积分）和**第二类曲面积分**（向量场的曲面积分）。下面详细介绍这两类积分的定义、意义、计算方法及其变形推导。

## 一、第一类曲面积分（对面积的积分）

### 1、定义

设$S$是空间中的一个光滑曲面，$f(x, y, z)$是在$S$上定义的标量函数。第一类曲面积分是指对$f$沿$S$的面积积分，记作：

$$
\iint_S f(x, y, z)\, \mathrm{d}S
$$

其中，$\mathrm{d}S$表示曲面$S$上的面积微元。

### 2、几何意义

$\mathrm{d}S$是曲面$S$上一小块的面积，$f(x, y, z) \mathrm{d}S$表示这小块上的“函数值乘以面积”，整个积分就是对$S$的“加权面积”求和。

举例：
- $f(x, y, z) = 1$时，$\iint_S \mathrm{d}S$就是曲面$S$的面积。
- $f(x, y, z)$为密度时，积分为曲面的总质量。

### 3、曲面积分的计算方法与变形

#### （1）参数化形式

设$S$用参数方程表示为：
$$
\begin{cases}
x = x(u, v) \\
y = y(u, v) \\
z = z(u, v)
\end{cases},\quad (u, v) \in D
$$

则面积微元为
$$
\mathrm{d}S = |\mathbf{r}_u \times \mathbf{r}_v|\, \mathrm{d}u\, \mathrm{d}v
$$
其中
$$
\mathbf{r}_u = \left(\frac{\partial x}{\partial u}, \frac{\partial y}{\partial u}, \frac{\partial z}{\partial u}\right),\quad
\mathbf{r}_v = \left(\frac{\partial x}{\partial v}, \frac{\partial y}{\partial v}, \frac{\partial z}{\partial v}\right)
$$

所以：
$$
\iint_S f(x, y, z)\, \mathrm{d}S = \iint_D f(x(u, v), y(u, v), z(u, v))\, |\mathbf{r}_u \times \mathbf{r}_v|\, \mathrm{d}u\, \mathrm{d}v
$$

#### （2）投影法

假设$S$可以投影到$xy$、$yz$、$xz$平面上的一个区域$D$，且曲面可表示为$z = z(x, y)$、$x = x(y, z)$、$y = y(x, z)$等形式。下面的表示形式可以由参数化形式推导而来。

**(a) $z = z(x, y)$型：**
$$
\mathrm{d}S = \sqrt{1 + z_x^2 + z_y^2}\, \mathrm{d}x\, \mathrm{d}y
$$
其中 $z_x = \frac{\partial z}{\partial x}$, $z_y = \frac{\partial z}{\partial y}$

因此：
$$
\iint_S f(x, y, z)\, \mathrm{d}S = \iint_D f(x, y, z(x, y))\, \sqrt{1 + z_x^2 + z_y^2}\, \mathrm{d}x\, \mathrm{d}y
$$

**(b) $x = x(y, z)$型：**
$$
\mathrm{d}S = \sqrt{1 + x_y^2 + x_z^2}\, \mathrm{d}y\, \mathrm{d}z
$$

**(c) $y = y(x, z)$型：**
$$
\mathrm{d}S = \sqrt{1 + y_x^2 + y_z^2}\, \mathrm{d}x\, \mathrm{d}z
$$

> 证明：
> 曲面参数化：
> $$
> z = f(x, y)
> $$
> 则曲面参数化为
> $$
> \vec{r}(x, y) = (x, y, f(x, y))
> $$
> 求微元面积$\mathrm{d}S$：
> 首先计算
> $$
> \frac{\partial \vec{r}}{\partial x} = (1, 0, f_x) \\
> \frac{\partial \vec{r}}{\partial y} = (0, 1, f_y)
> $$
> 叉积为
> $$
> \frac{\partial \vec{r}}{\partial x} \times \frac{\partial \vec{r}}{\partial y}
> = \begin{vmatrix}
> \mathbf{i} & \mathbf{j} & \mathbf{k} \\
> 1 & 0 & f_x \\
> 0 & 1 & f_y
> \end{vmatrix}
> = (-f_x, -f_y, 1)
> $$
> 取模得
> $$
> \left| \frac{\partial \vec{r}}{\partial x} \times \frac{\partial \vec{r}}{\partial y} \right| = \sqrt{f_x^2 + f_y^2 + 1}
> $$
> 所以
> $$
> \mathrm{d}S = \sqrt{ \left(\frac{\partial f}{\partial x}\right)^2 + \left(\frac{\partial f}{\partial y}\right)^2 + 1 }\, \mathrm{d}x\, \mathrm{d}y
> $$

#### （3）隐函数型

假设曲面 $S$ 上 $F(x, y, z) = 0$，且 $F$ 在$S$上各点具有连续偏导数。若在曲面上 $F_z \neq 0$，则可用 $z$ 作为 $x, y$ 的函数，即 $z = f(x, y)$。

曲面上微元面积和微元在 $xy$ 平面投影面积之比为法向量模与 $z$ 轴夹角的余弦的倒数，或直接用法向量推导，隐函数 $F(x, y, z) = 0$ 的法向量为

$$
\vec{n}_0 = \left( F_x, F_y, F_z \right)
$$
曲面微元面积
$$
\mathrm{d}S = \frac{|\vec{n}_0|}{|F_z|} \, \mathrm{d}x\, \mathrm{d}y
$$
其中
$$
|\vec{n}_0| = \sqrt{F_x^2 + F_y^2 + F_z^2}
$$
所以
$$
\iint_S f(x, y, z)\, \mathrm{d}S = \iint_D f(x, y, z(x, y)) \frac{\sqrt{F_x^2 + F_y^2 + F_z^2}}{|F_z|} \, \mathrm{d}x\, \mathrm{d}y
$$
其中$D$为曲面在$xy$平面上的投影区域。

如果$F_y \neq 0$或$F_x \neq 0$，也可以对$y$或$x$积分，形式类似。

$$
\mathrm{d}S = \frac{\sqrt{F_x^2 + F_y^2 + F_z^2}}{|F_x|} \mathrm{d}y\,\mathrm{d}z 
$$
或
$$
\mathrm{d}S = \frac{\sqrt{F_x^2 + F_y^2 + F_z^2}}{|F_y|} \mathrm{d}x\,\mathrm{d}z
$$

> 证明：
>
> 由隐函数求导法则：
> $$
> F(x, y, f(x, y)) = 0 \implies F_x + F_z f_x = 0 \implies f_x = -\frac{F_x}{F_z} \\
> F_y + F_z f_y = 0 \implies f_y = -\frac{F_y}{F_z}
> $$
> 代入上式：
> $$
> \begin{aligned}
> \mathrm{d}S &= \sqrt{ \left(-\frac{F_x}{F_z}\right)^2 + \left(-\frac{F_y}{F_z}\right)^2 + 1 }\, \mathrm{d}x\, \mathrm{d}y \\
> &= \sqrt{ \frac{F_x^2 + F_y^2}{F_z^2} + 1 }\, \mathrm{d}x\, \mathrm{d}y \\
> &= \sqrt{ \frac{F_x^2 + F_y^2 + F_z^2}{F_z^2} }\, \mathrm{d}x\, \mathrm{d}y \\
> &= \frac{ \sqrt{ F_x^2 + F_y^2 + F_z^2 } }{ |F_z| } \, \mathrm{d}x\, \mathrm{d}y
> \end{aligned}
> $$
> 因此，
> $$
> \iint_S f(x, y, z)\, \mathrm{d}S = \iint_{D_{xy}} f(x, y, f(x, y))\, \frac{ \sqrt{ F_x^2 + F_y^2 + F_z^2 } }{ |F_z| }\, \mathrm{d}x\, \mathrm{d}y
> $$
> 其中 $D_{xy}$ 为曲面 $S$ 在 $xy$ 平面上的投影区域。

#### （4）雅可比行列式的平方和的方法

设曲面 $S$ 由参数 $(u, v)$ 描述，$x = x(u, v),\ y = y(u, v),\ z = z(u, v)$，则曲面微元面积：

$$
\mathrm{d}S = \left| \frac{\partial (x, y, z)}{\partial (u, v)} \right|\, \mathrm{d}u\, \mathrm{d}v
$$

但直接参数化往往不容易，针对隐函数 $F(x, y, z) = 0$，我们可以利用三个雅可比行列式的平方和公式：

$$
J_1 = \frac{\partial(y, z)}{\partial(u, v)}
$$

$$
J_2 = \frac{\partial(z, x)}{\partial(u, v)}
$$

$$
J_3 = \frac{\partial(x, y)}{\partial(u, v)}
$$
那么

$$
\mathrm{d}S = \sqrt{ J_1^2 + J_2^2 + J_3^2 }\, \mathrm{d}u\, \mathrm{d}v
$$
> 证明：
>
> 参数化向量为
> $$
> \vec{r}(u, v) = (x(u, v), y(u, v), z(u, v))
> $$
> 则
> $$
> \frac{\partial\vec{r}}{\partial u} = (x_u, y_u, z_u), \quad \frac{\partial\vec{r}}{\partial v} = (x_v, y_v, z_v)
> $$
> 两者叉积：
> $$
> \frac{\partial\vec{r}}{\partial u} \times \frac{\partial\vec{r}}{\partial v} =
> \begin{vmatrix}
> \mathbf{i} & \mathbf{j} & \mathbf{k} \\
> x_u & y_u & z_u \\
> x_v & y_v & z_v
> \end{vmatrix}
> $$
>
> $$
> = \left( y_u z_v - z_u y_v,\ z_u x_v - x_u z_v,\ x_u y_v - y_u x_v \right )
> $$
> 所以
> $$
> \left| \frac{\partial\vec{r}}{\partial u} \times \frac{\partial\vec{r}}{\partial v} \right |
> = \sqrt{ (y_u z_v - z_u y_v)^2 + (z_u x_v - x_u z_v)^2 + (x_u y_v - y_u x_v)^2 }
> $$
> 而
> $$
> \begin{aligned}
> J_1 = \frac{\partial(y, z)}{\partial(u, v)} = y_u z_v - z_u y_v \\
> J_2 = \frac{\partial(z, x)}{\partial(u, v)} = z_u x_v - x_u z_v \\
> J_3 = \frac{\partial(x, y)}{\partial(u, v)} = x_u y_v - y_u x_v
> \end{aligned}
> $$
> 因此
> $$
> \mathrm{d}S = \sqrt{ J_1^2 + J_2^2 + J_3^2 }\, \mathrm{d}u\, \mathrm{d}v
> $$
#### （5）极坐标参数化（如球面、柱面）

- 球面：$x = a\sin\varphi\cos\theta,\, y = a\sin\varphi\sin\theta,\, z = a\cos\varphi$, $\varphi \in [0, \pi]$, $\theta \in [0, 2\pi]$

  $$\mathrm{d}S = a^2 \sin\varphi \, \mathrm{d}\varphi \, \mathrm{d}\theta$$

- 柱面：$x = a\cos\theta,\, y = a\sin\theta,\, z = z$, $\theta \in [0, 2\pi]$, $z \in [z_1, z_2]$

  $$\mathrm{d}S = a\, \mathrm{d}\theta\, \mathrm{d}z$$

下面是证明过程：

> **（1）球面面积元$\mathrm{d}S$的推导**
>
> 设有半径为$a$的球面，其参数方程为
> $$
> \begin{cases}
> x = a \sin\varphi \cos\theta \\
> y = a \sin\varphi \sin\theta \\
> z = a \cos\varphi
> \end{cases}
> $$
> 其中$\varphi \in [0, \pi]$为极角，$\theta \in [0, 2\pi]$为方位角。
>
> 步骤1：写出球面上点的参数化向量
>$$
> \mathbf{r}(\varphi, \theta) = \left( a \sin\varphi \cos\theta,\ a \sin\varphi \sin\theta,\ a \cos\varphi \right)
>$$
> 
> 步骤2：分别对参数$\varphi$和$\theta$求偏导
> 
>对$\varphi$求偏导：
> $$
>\frac{\partial \mathbf{r}}{\partial \varphi} = \left( a \cos\varphi \cos\theta,\ a \cos\varphi \sin\theta,\ -a \sin\varphi \right )
> $$
>
> 对$\theta$求偏导：
> $$
> \frac{\partial \mathbf{r}}{\partial \theta} = \left( -a \sin\varphi \sin\theta,\ a \sin\varphi \cos\theta,\ 0 \right )
> $$
>
> 步骤3：计算这两个向量的叉积
> 
> 记
> $$
>\mathbf{A} = \frac{\partial \mathbf{r}}{\partial \varphi} = \left( a \cos\varphi \cos\theta,\ a \cos\varphi \sin\theta,\ -a \sin\varphi \right )
> $$
>
> $$
>\mathbf{B} = \frac{\partial \mathbf{r}}{\partial \theta} = \left( -a \sin\varphi \sin\theta,\ a \sin\varphi \cos\theta,\ 0 \right )
> $$
> 
> 计算叉积$\mathbf{A} \times \mathbf{B}$：
> 
>$$
> \mathbf{A} \times \mathbf{B} = 
> \begin{vmatrix}
> \mathbf{i} & \mathbf{j} & \mathbf{k} \\
>a\cos\varphi\cos\theta & a\cos\varphi\sin\theta & -a\sin\varphi \\
> -a\sin\varphi\sin\theta & a\sin\varphi\cos\theta & 0
>\end{vmatrix}
> $$
> 
> 计算每一分量：
> 
> - $\mathbf{i}$ 分量：
> $$
> a\cos\varphi\sin\theta \cdot 0 - (-a\sin\varphi) \cdot a\sin\varphi\cos\theta = a^2\sin^2\varphi\cos\theta
> $$
>
> - $-\mathbf{j}$ 分量：
>$$
> a\cos\varphi\cos\theta \cdot 0 - (-a\sin\varphi) \cdot (-a\sin\varphi\sin\theta) = -a^2\sin^2\varphi\sin\theta
> $$
> 
> - $\mathbf{k}$ 分量：
>
> $$
> \begin{aligned}
> a\cos\varphi\cos\theta \cdot a\sin\varphi\cos\theta - a\cos\varphi\sin\theta \cdot (-a\sin\varphi\sin\theta)\\
> = a^2\cos\varphi\sin\varphi(\cos^2\theta + \sin^2\theta ) = a^2\cos\varphi\sin\varphi
> \end{aligned}
> $$
> 
>因此
> $$
> \mathbf{A} \times \mathbf{B} = \left( a^2\sin^2\varphi\cos\theta,\ -a^2\sin^2\varphi\sin\theta,\ a^2\cos\varphi\sin\varphi \right )
> $$
> 
> 步骤4：取模（即为面积元）
>$$
> \left| \mathbf{A} \times \mathbf{B} \right| = \sqrt{ \left(a^2\sin^2\varphi\cos\theta\right)^2 + \left(-a^2\sin^2\varphi\sin\theta\right)^2 + \left(a^2\cos\varphi\sin\varphi\right)^2 }
> $$
> 
> $$
>= a^2 \sqrt{ \sin^4\varphi \cos^2\theta + \sin^4\varphi \sin^2\theta + \cos^2\varphi \sin^2\varphi }
> $$
>
> $$
>= a^2 \sqrt{ \sin^4\varphi (\cos^2\theta + \sin^2\theta ) + \cos^2\varphi \sin^2\varphi }
> $$
> 
> $$
>= a^2 \sqrt{ \sin^4\varphi + \cos^2\varphi \sin^2\varphi }
> $$
> 
> $$
>= a^2 \sqrt{ \sin^2\varphi ( \sin^2\varphi + \cos^2\varphi ) }
> $$
> 
> $$
>= a^2 \sqrt{ \sin^2\varphi \cdot 1 } = a^2 \sin\varphi
> $$
> 
> 步骤5：写出面积元
>$$
> \mathrm{d}S = \left| \mathbf{A} \times \mathbf{B} \right| \, \mathrm{d}\varphi \, \mathrm{d}\theta = a^2 \sin\varphi \, \mathrm{d}\varphi \, \mathrm{d}\theta
> $$
> 
>（2）柱面面积元$\mathrm{d}S$的推导
> 
> 设有半径为$a$的柱面，其参数方程为
> $$
>\begin{cases}
> x = a \cos\theta \\
>y = a \sin\theta \\
> z = z
>\end{cases}
> $$
> 其中$\theta \in [0, 2\pi]$，$z \in [z_1, z_2]$。
> 
>步骤1：参数化向量
> $$
>\mathbf{r}(\theta, z) = \left( a \cos\theta,\ a \sin\theta,\ z \right )
> $$
>
> 步骤2：分别对参数$\theta$和$z$求偏导
> 
> 对$\theta$求偏导：
> $$
> \frac{\partial \mathbf{r}}{\partial \theta} = \left( -a \sin\theta,\ a \cos\theta,\ 0 \right )
> $$
> 
> 对$z$求偏导：
> $$
>\frac{\partial \mathbf{r}}{\partial z} = \left( 0,\ 0,\ 1 \right )
> $$
>
> 步骤3：计算这两个向量的叉积
>$$
> \frac{\partial \mathbf{r}}{\partial \theta} \times \frac{\partial \mathbf{r}}{\partial z} = 
> \begin{vmatrix}
> \mathbf{i} & \mathbf{j} & \mathbf{k} \\
>- a \sin\theta & a \cos\theta & 0 \\
> 0 & 0 & 1
>\end{vmatrix}
> $$
>
> 计算各分量：
> 
> - $\mathbf{i}$ 分量：
> $$
>a \cos\theta \cdot 1 - 0 \cdot 0 = a \cos\theta
> $$
> 
> - $-\mathbf{j}$ 分量：
> $$
>-(-a \sin\theta \cdot 1 - 0 \cdot 0 ) = a \sin\theta
> $$
>
> - $\mathbf{k}$ 分量：
>$$
> - a \sin\theta \cdot 0 - a \cos\theta \cdot 0 = 0
> $$
> 
> 所以
> $$
> \frac{\partial \mathbf{r}}{\partial \theta} \times \frac{\partial \mathbf{r}}{\partial z} = \left( a \cos\theta,\ a \sin\theta,\ 0 \right )
> $$
> 
>步骤4：取模
> $$
>\left| \frac{\partial \mathbf{r}}{\partial \theta} \times \frac{\partial \mathbf{r}}{\partial z} \right| = 
> \sqrt{ (a\cos\theta)^2 + (a\sin\theta)^2 + 0^2 } = a \sqrt{ \cos^2\theta + \sin^2\theta } = a
> $$
> 
> 步骤5：写出面积元
>
> $$
> \mathrm{d}S = a\, \mathrm{d}\theta\, \mathrm{d}z
> $$

## 二、第二类曲面积分（向量场对面的积分）

### 1、定义

设$\mathbf{F} = (P(x, y, z), Q(x, y, z), R(x, y, z))$是定义在曲面$S$上的连续向量场，$\mathbf{n}$为$S$上单位法向量，则第二类曲面积分是$\mathbf{F}$在法向方向的“通量”，记作：
$$
\iint_S \mathbf{F} \cdot \mathrm{d}\mathbf{S} = \iint_S (\mathbf{F} \cdot \mathbf{n})\, \mathrm{d}S
$$
其中，$\mathrm{d}\mathbf{S} = \mathbf{n}\,\mathrm{d}S$是带有方向的面积微元。

### 2、物理与几何意义

若$\mathbf{F}$为速度场，积分表示流体穿过$S$的体积流量。$\mathbf{F}\cdot\mathbf{n}$为通过$\mathrm{d}S$的流量密度，积分为总流量。

### 3、曲面积分的计算公式

#### （1）参数化形式

同第一类，$S$用参数方程
$$
\mathbf{r}(u, v) = (x(u, v), y(u, v), z(u, v)),\quad (u, v)\in D
$$
带方向面积元：
$$
\mathrm{d}\mathbf{S} = (\mathbf{r}_u \times \mathbf{r}_v)\, \mathrm{d}u\, \mathrm{d}v
$$
所以：
$$
\iint_S \mathbf{F} \cdot \mathrm{d}\mathbf{S} = \iint_D \mathbf{F}(x(u, v), y(u, v), z(u, v)) \cdot (\mathbf{r}_u \times \mathbf{r}_v)\, \mathrm{d}u\, \mathrm{d}v
$$
#### （2）投影法

当$S$由$z = f(x, y)$给出，取外法线指向$z$轴正向，则
$$
\iint_S \vec{F} \cdot \mathrm{d}\vec{S}
= \iint_{D_{xy}}\left[
    -P(x, y, f(x, y)) \frac{\partial f}{\partial x}
    - Q(x, y, f(x, y)) \frac{\partial f}{\partial y}
    + R(x, y, f(x, y))
\right] \mathrm{d}x\,\mathrm{d}y
$$
- 若$S$投影到$yz$面，$x = x(y, z)$，则
$$
  \iint_S \mathbf{F} \cdot \mathrm{d}\mathbf{S} = \iint_D \left[P(x(y, z), y, z) + Q(x(y, z), y, z)(-x_y) + R(x(y, z), y, z)(-x_z) \right]\, \mathrm{d}y\,\mathrm{d}z
$$
- 若$S$投影到$xz$面，$y = y(x, z)$，则
$$
\iint_S \mathbf{F} \cdot \mathrm{d}\mathbf{S} = \iint_D \left[P(x, y(x, z), z)(-y_x) + Q(x, y(x, z), z) + R(x, y(x, z), z)(-y_z) \right]\, \mathrm{d}x\,\mathrm{d}z
$$
> 证明：
> 参数化曲面：
> $$
> \vec{r}(x, y) = (x, y, f(x, y))
> $$
> 计算面积元向量：
> $$
> \frac{\partial \vec{r}}{\partial x} = (1, 0, f_x) \\
> \frac{\partial \vec{r}}{\partial y} = (0, 1, f_y)
> $$
> 叉积为
> $$
> \frac{\partial \vec{r}}{\partial x} \times \frac{\partial \vec{r}}{\partial y}
> = \begin{vmatrix}
> \mathbf{i} & \mathbf{j} & \mathbf{k} \\
> 1 & 0 & f_x \\
> 0 & 1 & f_y
> \end{vmatrix}
> = (-f_x, -f_y, 1)
> $$
> 所以面积微元向量为
> $$
> \mathrm{d}\vec{S} = (-f_x, -f_y, 1)\, \mathrm{d}x\,\mathrm{d}y
> $$
> 代入曲面积分：
> $$
> \iint_S \vec{F} \cdot \mathrm{d}\vec{S}
> = \iint_{D_{xy}} \vec{F}(x, y, f(x, y)) \cdot (-f_x, -f_y, 1)\, \mathrm{d}x\,\mathrm{d}y \\
> = \iint_{D_{xy}} \left[ -P f_x - Q f_y + R \right] \mathrm{d}x\,\mathrm{d}y
> $$
> 这就是投影到$xy$平面的投影法。
>

#### （3）隐函数型

若$S$由$F(x, y, z) = 0$描述，在$F_z \ne 0$时，可用$z$作$x, y$的函数。则
$$
\iint_S \vec{F} \cdot \mathrm{d}\vec{S}
= \iint_{D_{xy}} \left[
    -P(x, y, z) \frac{F_x}{F_z}
    - Q(x, y, z) \frac{F_y}{F_z}
    + R(x, y, z)
\right] \mathrm{d}x\,\mathrm{d}y
$$
其中$z$由$F(x, y, z) = 0$确定。
或向量形式：
$$
\iint_S \vec{F} \cdot \mathrm{d}\vec{S}
= \iint_{D_{xy}} \vec{F}(x, y, z) \cdot
  \left(
    -\frac{F_x}{F_z}, -\frac{F_y}{F_z}, 1
  \right)
 \mathrm{d}x\,\mathrm{d}y
$$

> 证明：
>
> 隐函数 $F(x, y, z) = 0$ 的法向量
> $$
> \vec{n}_0 = (F_x, F_y, F_z)
> $$
> 外法线方向单位向量
> $$
> \vec{n} = \frac{(F_x, F_y, F_z)}{\sqrt{F_x^2 + F_y^2 + F_z^2}}
> $$
> 面积元的模
> $$
> \mathrm{d}S = \frac{ \sqrt{F_x^2 + F_y^2 + F_z^2} }{ |F_z| } \mathrm{d}x\,\mathrm{d}y
> $$
> 面积元向量
> $$
> \mathrm{d}\vec{S} = \vec{n}\, \mathrm{d}S = \frac{ (F_x, F_y, F_z) }{ |F_z| } \mathrm{d}x\,\mathrm{d}y
> $$
> 方向取决于曲面定向，通常取$F_z > 0$为正向。
> 向量场与面积元点积
> $$
> \vec{F} \cdot \mathrm{d}\vec{S}
> = \vec{F}(x, y, z) \cdot \frac{ (F_x, F_y, F_z) }{ |F_z| } \mathrm{d}x\,\mathrm{d}y
> $$
> 若只关心积分值，可以去掉模号（由定向保证）：
> $$
> = \vec{F}(x, y, z) \cdot \frac{ (F_x, F_y, F_z) }{ F_z } \mathrm{d}x\,\mathrm{d}y
> $$
> 即
> $$
> = \left[
>     P(x, y, z) \frac{F_x}{F_z}
>     + Q(x, y, z) \frac{F_y}{F_z}
>     + R(x, y, z)
>   \right] \mathrm{d}x\,\mathrm{d}y
> $$
> 但面积元向量与$xy$平面单位法向量$(0, 0, 1)$方向一致时，$F_z > 0$，因此对于外法线指向$z$轴正向时，$F_z > 0$，有
> $$
> \iint_S \vec{F} \cdot \mathrm{d}\vec{S}
> = \iint_{D_{xy}} \left[
>     -P(x, y, z) \frac{F_x}{F_z}
>     - Q(x, y, z) \frac{F_y}{F_z}
>     + R(x, y, z)
> \right] \mathrm{d}x\,\mathrm{d}y
> $$
> 注：这里的负号来自隐函数偏导与$z=f(x, y)$下的关系。
>
> 下面研究一下负号的来源
>
> 对$F(x, y, z(x, y)) = 0$，有
> $$
> F_x + F_z \frac{\partial z}{\partial x} = 0 \implies \frac{\partial z}{\partial x} = -\frac{F_x}{F_z} \\
> F_y + F_z \frac{\partial z}{\partial y} = 0 \implies \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}
> $$
> 代入显式曲面公式
> $$
> \iint_{D_{xy}} \left[
>     -P \frac{\partial z}{\partial x}
>     - Q \frac{\partial z}{\partial y}
>     + R
> \right] \mathrm{d}x\,\mathrm{d}y
> $$
> 得
> $$
> \iint_{D_{xy}} \left[
>     -P \left( -\frac{F_x}{F_z} \right )
>     - Q \left( -\frac{F_y}{F_z} \right )
>     + R
> \right ] \mathrm{d}x\,\mathrm{d}y
> = \iint_{D_{xy}} \left[
>     P \frac{F_x}{F_z}
>     + Q \frac{F_y}{F_z}
>     + R
> \right ] \mathrm{d}x\,\mathrm{d}y
> $$
> 但通常投影法公式写为负号形式，以保持与法向一致，故：
> $$
> \iint_S \vec{F} \cdot \mathrm{d}\vec{S}
> = \iint_{D_{xy}} \left[
>     -P \frac{F_x}{F_z}
>     - Q \frac{F_y}{F_z}
>     + R
> \right ] \mathrm{d}x\,\mathrm{d}y
> $$
>

#### （4）立体角法（球面）

对于球面$S$，$\mathrm{d}\mathbf{S} = \mathbf{n}\,\mathrm{d}S$，如单位球面$\mathbf{n} = \frac{\mathbf{r}}{|\mathbf{r}|}$，可直接代入参数化形式。

#### （5）柱面、球面参数化

- **球面：**
$$
  x = a\sin\varphi\cos\theta,\quad y = a\sin\varphi\sin\theta,\quad z = a\cos\varphi
$$

$$
  \mathrm{d}\mathbf{S} = a^2 \sin\varphi\, \mathbf{n}\, \mathrm{d}\varphi\, \mathrm{d}\theta,\quad \mathbf{n} = \left(\sin\varphi\cos\theta,\, \sin\varphi\sin\theta,\, \cos\varphi\right)
$$
- **柱面：**
$$
  x = a\cos\theta,\, y = a\sin\theta,\, z = z
$$

$$
  \mathrm{d}\mathbf{S} = a\, \mathbf{n}\, \mathrm{d}\theta\, \mathrm{d}z
$$
  其中$\mathbf{n}$为柱面外法向。

## 三、第二类曲面积分方向（正负）判别方法原理
### 1、法向定向的基本原则
- **曲面积分的方向** 由面积元向量 $\mathrm{d}\vec{S}$ 决定。
- $\mathrm{d}\vec{S}$ 的方向就是曲面的定向（外法线或内法线），而 $\mathrm{d}\vec{S}$ 的模就是面积微元。
- 投影到 $xy$ 平面时，$\mathrm{d}x\,\mathrm{d}y$ 始终指向 $z$ 正方向（即$(0,0,1)$）。
### 2、显式曲面 $z = f(x, y)$ 情况
参数化：
$$
\vec{r}(x, y) = (x, y, f(x, y))
$$
面积元向量：
$$
\mathrm{d}\vec{S} = (-f_x, -f_y, 1)\, \mathrm{d}x\,\mathrm{d}y
$$
其方向与 $z$ 轴的夹角由 $1$（第三分量）决定。
如果曲面的定向就是 $z$ 轴正方向，即“向上”，则面积元向量的第三分量为正，投影法中公式保持原样：
$$
\iint_{D_{xy}} \left[ -P f_x - Q f_y + R \right]\,\mathrm{d}x\,\mathrm{d}y
$$
如果曲面的定向为 $z$ 轴负方向，即“向下”，则面积元向量要取反，公式前整体加负号：
$$
\iint_{D_{xy}} \left[ P f_x + Q f_y - R \right]\,\mathrm{d}x\,\mathrm{d}y
$$
### 3、隐函数 $F(x, y, z)=0$ 情况
面积元向量：
$$
\vec{n}_0 = (F_x, F_y, F_z)
$$
向量
$$
\mathrm{d}\vec{S} = \frac{(F_x, F_y, F_z)}{|F_z|} \mathrm{d}x\,\mathrm{d}y
$$
（假设用$z$作参数）
- 若取定向使得 $\mathrm{d}\vec{S}$ 的 $z$ 分量为正（即与 $z$ 轴正方向一致），则 $F_z > 0$ 时，投影法中的负号保持。
- 若定向与 $z$ 轴负方向一致（$F_z<0$），则面积元向量方向与投影面法向相反，整个公式前加负号。
### 4、判别正负号的具体操作
步骤如下：

1. 判断曲面定向（外法线方向）——题目会给定，或根据物理含义判断。
2. 计算面积元向量与投影面（如$xy$平面，法向$(0,0,1)$）法向的夹角：
    
    - 若同向（$z$分量为正），则公式中负号不变。
    - 若反向（$z$分量为负），则公式前加负号，负号方向全部反过来。
3. 隐函数情形，可直接看$F_z$的正负，若$F_z > 0$则用
   $$
   \left[ -P \frac{F_x}{F_z} - Q \frac{F_y}{F_z} + R \right]
   $$
   若$F_z < 0$则用
   $$
   \left[ P \frac{F_x}{F_z} + Q \frac{F_y}{F_z} - R \right]
   $$
   或者说整体乘以$-1$。
### 5、公式总结
#### （1）显式曲面 $z=f(x, y)$
- 向上（$z$正向）：
  $$
  \iint_{D_{xy}} [ -P f_x - Q f_y + R ]\,\mathrm{d}x\,\mathrm{d}y
  $$
- 向下（$z$负向）：
  $$
  \iint_{D_{xy}} [ P f_x + Q f_y - R ]\,\mathrm{d}x\,\mathrm{d}y
  $$
#### （2）隐函数 $F(x, y, z) = 0$
- $F_z > 0$（与$z$正方向一致）：
  $$
  \iint_{D_{xy}} [ -P \frac{F_x}{F_z} - Q \frac{F_y}{F_z} + R ]\,\mathrm{d}x\,\mathrm{d}y
  $$
- $F_z < 0$（与$z$负方向一致）：
  $$
  \iint_{D_{xy}} [ P \frac{F_x}{F_z} + Q \frac{F_y}{F_z} - R ]\,\mathrm{d}x\,\mathrm{d}y
  $$
  或者直接记为（$n$为面积元向量，与投影面法向夹角为$\theta$）：
$$
\text{投影法公式} = (\text{通常公式}) \times \operatorname{sgn}(\cos\theta)
$$
