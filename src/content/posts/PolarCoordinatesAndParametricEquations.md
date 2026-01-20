---
title: 极坐标与参数方程
published: 2024-08-08
category: ["数学", "大中衔接"]
tags: ["大中衔接"]
alias: "polarcoordinatesandparametricequations"
---
### 一、引言

在平面直角坐标系中,我们用$(x,y)$来表示平面上的一点,其中$x,y$分别是此点在两个坐标轴上的投影坐标。但在有的情况，直角坐标表示不是最高使的例如在海平面上报告某船只的位置，确定船只的距离与方位要比根告船只在某直角坐标系中的坐标要更直接更方便确定船只的位置，以下个绍的极坐标系就是用“距离”和“方位”来表示（确定）平面上一点的坐标系，同样，用极坐标方程或参数方程来表示平面曲线有时也比直角坐标方程表方便许多。

### 二、极坐标系

#### 1、定义

在平面上取定一点$O$，称为**极点**，从$O$出发引一条射线$Ox$，称为**极轴**，对平面上任一点P，记$P$到$O$的距离为$r$，从极轴逆时针转到$OP$的角度为 $\theta$，这样我们可以用有序数对$(r,θ)$与$P$点对应（一一对应）。$(r,\theta)$称为$P$点的**极坐标**，$r$称为$P$点的**极径**，$\theta$ 称为$P$点的**极角**。（如图）

<img src="https://laoguantx.top/article/数学/大中衔接/极坐标与参数方程/极坐标与参数方程-1.png" style="zoom:50%;" />

一般，规定 $0\leq r< + \infty$, $0\leq \theta < 2\pi$（或$-\pi\leq\theta<\pi$），这样，平面上除极点以外，其它每一点都有唯一的一个极坐标表示。极点的极径为零，极角任意。

#### 2、极坐标与直角坐标的关系

如果我们将极点取为直角坐标系原点，极轴取为直角坐标系$x$轴，则某一点 $P$的极坐标 $(r,\theta)$与平面直角坐标$(x,y)$之间的转换关系为：

$\begin{cases} x= r\cos \theta \\ y= r\sin \theta & \end{cases}$
或：
$\begin{cases}r=\sqrt{x^2+y^2}\\\theta=\arctan\frac{y}{x}+k\pi\:(x\neq0,k\text{的取值根据}(x,y)\text{确定})\end{cases}$

当$x=0$时，若$y>0$，则$\theta=\frac\pi2$；若$y<0$，则$\theta=\frac{3\pi}{2}$.

### 三、平面曲线的参数方程

设一质点在平面上运动，其运动规律为：$\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases},t\in[t_1,t_2]$，$t$为时间。以上方程表明，在某时刻$t_0$，质点在直角坐标系中的位置是$(\varphi(\iota_0),\psi(\iota_0))$.

设$\Gamma$为平面直角坐标系中的曲线，如果$\Gamma$上点的坐标$(x,y)$可由表达式$\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases},t\in[a,b]$决定，即$\Gamma$上任意一点$M(x_0,y_0)$的坐标是$t$取某个值$t_0$得到：$x_0=\varphi(t_0),y_0=\psi(t_0)$.同时，$\forall t\in[a,b]$,点$\left(\varphi(t),\psi(t)\right)$皆在曲线$\Gamma$上，则称以上表达式为曲线$\Gamma$的参数方程，$t$称为参数。

曲线的参数方程表示是不唯一的，例：
$$C_1\begin{cases} x= t\\ y= \sqrt {1- t^2} \end{cases} , t\in [ 0, 1] ;\quad C_2\begin{cases} x= t^2\\ y= \sqrt {1- t^4} \end{cases} , t\in [ 0, 1] ;\quad C_3\begin{cases} x= \cos t\\ y= \sin t \end{cases} , t\in \begin{bmatrix} 0, \frac \pi 2\end{bmatrix}$$
上面三个参数方程均表示为第一象限的四分之一单位圆。

### 四、常见曲线的极坐标方程与参数方程

#### 1、圆心在原点，半径为$a$的圆方程的各类平面曲线的表示

1. 直角坐标系：$y= f( x)$, $x\in [ a, b]\longrightarrow y=\pm\sqrt{a^2-x^2}$或$x^2+y^2=a^2$

2. 极坐标系：$r= r( \theta ),\theta \in [ \alpha , \beta ]\longrightarrow r= a,\theta \in [ 0, 2\pi )$

3. 参数方程：$\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases},t\in [ t_1, t_2]\longrightarrow\begin{cases} x= a\cos t\\ y= a\sin t \end{cases},t\in[0,2\pi)$

---

**例1** 写出圆 $(x-a)^2+y^2=a^2$的极坐标方程和参数方程。

**解** 将$x=r\cos\theta,y=r\sin\theta$代入方程化简得极坐标方程为$r=2a\cos\theta.$
此圆的一个参数方程表示为$\begin{cases} x= a( 1+ \cos \theta ) \\ y= a\sin \theta & \end{cases}$, $\theta \in [ 0, 2\pi )$.

---

#### 2、心形线

极坐标方程：$r=a(1+\cos\theta),\theta\in[0,2\pi)$，其中$a>0$为常数。

平面直角坐标系方程：$x^2+y^2-ax=a\sqrt{(x^2+y^2)}$，其中$a>0$为常数。

<img src="https://laoguantx.top/article/数学/大中衔接/极坐标与参数方程/极坐标与参数方程-2.png" style="zoom:50%;" />

#### 3、双纽线

极坐标方程：$r^2=a\cos2\theta,\theta\in[0,\frac\pi4]\cup[\frac{3\pi}4,\frac{5\pi}4]\cup[\frac{7\pi}4,2\pi)$,，其中$a>0$为常数。

平面直角坐标系方程：$(x^2+y^2)^2=2a^2(x^2-y^2)$，其中$a$是常数。

<img src="https://laoguantx.top/article/数学/大中衔接/极坐标与参数方程/极坐标与参数方程-3.png" style="zoom:50%;" />

#### 4、阿基米德螺线

极坐标方程：$r=a+b\theta,\theta\in[0,+\infty)$，其中$a,b$为大于零的常数。

<img src="https://laoguantx.top/article/数学/大中衔接/极坐标与参数方程/极坐标与参数方程-4.png" style="zoom: 33%;" />

#### 5、摆线

参数方程表达式：$\begin{cases}x=a(t-\sin t)\\y=a(1-\cos t)\end{cases},t\geq0$，其中$a>0$为常数。

<img src="https://laoguantx.top/article/数学/大中衔接/极坐标与参数方程/极坐标与参数方程-5.png" style="zoom: 50%;" />

#### 6、星形线（内摆线）

参数方程表达式：$\begin{cases}x=a\cos^3t\\y=a\sin^3t\end{cases},0\leq t<2\pi$，其中$a>0$为常数。

<img src="https://laoguantx.top/article/数学/大中衔接/极坐标与参数方程/极坐标与参数方程-6.png" style="zoom: 50%;" />