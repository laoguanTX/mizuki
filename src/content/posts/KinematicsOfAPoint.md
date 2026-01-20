---
title: 点的运动学
published: 2025-10-23
category: ["物理", "力学"]
tags: ["理论力学", "运动学"]
alias: "kinematicsofapoint"
---
## 一、矢量法

### 1、点的运动方程

点的运动方程是描述点的位置、速度和加速度随时间变化的数学方程。由定点$O$画到动点$M$的有向线段$\overrightarrow{OM}=\boldsymbol{r}$称为动点$M$的矢径，它的分解式可以表示为下面的方程：

$$
\boldsymbol{r}=\overrightarrow{OM}=x\boldsymbol{i}+y\boldsymbol{j}+z\boldsymbol{k}
$$

矢径唯一地决定了点$M$的位置。当点$M$运动时，矢径$\boldsymbol{r}$是随时间而变的矢量。一般可表示为时间$t$的单值连续函数。

$$
\boldsymbol{r}=\boldsymbol{r}(t)
$$

此方程称为点$M$的矢量形式的运动方程。 矢径的端点在空间描出的曲线称为矢径端图（或矢端图），它就是动点的轨迹。

关于点的位移、速度、加速度的定义和表示，与普通物理学中的方法一致。使用$\boldsymbol{v}=\boldsymbol{v}(t),\boldsymbol{a}=\boldsymbol{a}(t)$表示。

## 二、直角坐标法

### 1、点的运动方程

通常使用直角坐标系，动点$M$对于所选直角坐标系的位置，可由它的三个坐标$x,y,z$决定。当$M$运动时，这些坐标一般地可以表示为时间$t$的单值连续函数，即：
$$
x=f_1(t),\quad y=f_2(t),\quad z=f_3(t)
$$

这一组方程称为点M的直角坐标形式的运动方程。若函数$f_1、f_2$、$f_3$都是已知的，则动点$M$对应于任一瞬时$t$的位置即可完全确定。

## 三、自然法

### 1、自然轴系（曲率与曲率半径）

#### (1) 弧坐标

假定动点$M$的运动轨迹是已知的。在轨迹上选定一点$O$作为量取弧长的起点，并规定由原点$O$向一方向的弧长取正值，向另一方量得的弧长取负值。这种带有正负值的弧长$\overset{\LARGE{\frown}}{OM}$称为动点的弧坐标，用$s$表示。点在轨迹上的位置可由弧坐标$s$完全确定。当点$M$沿已知轨迹运动时，弧坐标$s$随时间而变，并可表示为时间t的单值连续函数，即：

$$
s = f(t)
$$

这个方程表示了点$M$沿已知轨迹的运动规律，并称为该点沿给定轨迹的运动方程。

#### (2) 空间曲线切线

当点$M^{\prime}$趋近于点$M$时，即$\Delta s\to0$时，割线$MM^\prime$的极限位置即为空间曲线在$M$点的切线。

#### (3) 曲线的曲率半径

$\overset{\LARGE{\frown}}{MM'}$ （取绝对值）称为曲线对应于弧 $\overset{\LARGE{\frown}}{MM'}$ 的邻角，可用来说明该曲线的弯曲。比值 $\frac{\Delta\theta}{|\Delta s|}$ 可用来表示弧 $\overset{\LARGE{\frown}}{MM'}$ 的平均弯曲程度，称为平均曲率。极限值称为曲线在点 $M$ 处的曲率，用 $k$ 表示，有：

$$
k = \lim_{\Delta s \to 0} \frac{\Delta\theta}{|\Delta s|}
$$
曲线在点$M$曲率的倒数，称为曲线在点$M$的曲率半径，用$\rho$表示，有：

$$
\rho=\frac1k
$$

极限情况下，曲线近似为圆弧，圆弧所对应半径即曲率半径.

#### (4) 密切面

在图中点 $M'$ 趋近于 $M$，即 $|\Delta s|$ 趋近于零的过程中，同时包含直线 $MT$ 和 $MT_1$ 的平面将会绕 $MT$ 转动而趋近于某一极限位置；此极限位置所在的平面称为曲线在点 $M$ 的密切面或曲率平面。特别地，平面曲线在密切面上。

#### (5) 法面、主法线、副法线

通过点$M$而与切线垂直的平面，称为曲线在点$M$的法面。法面与密切面的交线$MN$称为主法线。法面内与主法线垂直的直线$MB$称为副法线。

#### (6) 自然轴系

在点M处曲线的切线、主法线和副法线组成一个空间坐标系，称为点$M$的自然轴系。各轴的正向规定如下：设用$e_{\mathrm{t}}$、$e_{\mathrm{n}}$、$e_{\mathrm{b}}$代表这三个轴的轴向单位矢，则$e_{\mathrm{t}}$指向弧坐标增加的一方，$e_{\mathrm{n}}$指向曲线的凹边，而$e_{\mathrm{b}}=e_{\mathrm{t}}\times e_{\mathrm{n}}$。曲线上的点都具有自己的自然轴系，故$e_\mathrm{t}$、$e_\mathrm{n}$、$e_\mathrm{b}$都是方向随点$M$的位置而改变的单位矢。

可见，自然轴系是随点$M$的位置改变的直角空间坐标系，它在研究点沿已知轨迹的运动时有重要的意义。

### 2、点的速度

设已知点$M$的运动轨迹和运动方程：

$$
s=f(t)
$$

$M$点的速度（矢量）为：

$$
v=\frac{\mathrm{d}\boldsymbol{r}}{\mathrm{d}t}\text{(矢量法定义的速度)}
$$
自然法定义的速度的大小为：
$$
\begin{aligned}v&=\left|\frac{\mathrm{d}r}{\mathrm{d}t}\right|\\&=\lim_{\Delta t\to0}\left|\frac{\Delta r}{\Delta t}\right|\\&=\lim_{\Delta t\to0}\left|\frac{\Delta s}{\Delta t}\right|\\&=\frac{\mathrm{d}s}{\mathrm{d}t}=v\end{aligned}
$$
自然法定义的速度方向沿轨迹在$M$处的切线$e_\mathrm{t}$并指向弧坐标增加的一方。可见，点$M$的速度是沿轨迹切线。

### 3、点的加速度

根据加速度的定义以及弧坐标中速度的表达式

$$
a=\frac{\mathrm{d}v}{\mathrm{d}t},\quad v=v e_\mathrm{r}
$$

最终得到：

$$
a=\frac{\mathrm{d}v}{\mathrm{d}t}e_{\mathrm{t}}+v\frac{\mathrm{d}e_{\mathrm{t}}}{\mathrm{d}t}
$$

其中$\frac{\mathrm{d}e_\mathrm{t}}{\mathrm{d}t}=\frac{\mathrm{d}e_\mathrm{t}}{d\varphi}\times\frac{\mathrm{d}\varphi}{\mathrm{d}s}\times\frac{\mathrm{d}s}{\mathrm{d}t}$，进一步化简为$\frac{\mathrm{d}e_\mathrm{t}}{\mathrm{d}t}=\frac{\mathrm{d}e_\mathrm{t}}{d\varphi}\times\frac1\rho\times v$，而$\frac{\mathrm{d}e_\mathrm{t}}{\mathrm{d}t}$可以如下计算，首先计算其大小：
$$
\begin{aligned}\left|\frac{\mathrm{d}e_\mathrm{t}}{\mathrm{d}\varphi}\right|&=\lim_{\Delta\varphi\to0}\left|\frac{\Delta e_\mathrm{t}}{\Delta\varphi}\right|\\&=\lim_{\Delta\varphi\to0}\frac{2|e_\mathrm{t}|\sin\frac{\Delta\varphi}{2}}{\Delta\varphi}\\&=\lim_{\Delta\varphi\to0}\frac{\sin\frac{\Delta\varphi}{2}}{\frac{\Delta\varphi}{2}}=1\end{aligned}
$$
然后尝试获取其方向，当 $t \to 0$ 时，$e_t$ 和 $e_t'$ 以及$\Delta e_\mathrm{t}$同处于 $M$ 点的密切面内，这时，$\Delta e_\mathrm{t}$的极限方向垂直于 $e_\mathrm{t}$，即$e_\mathrm{n}$方向。

最终得到自然法下点的加速度：
$$
a=\frac{\mathrm{d}v}{\mathrm{d}t}e_\mathrm{t}+\frac{v^2}{\rho}e_\mathrm{n}
$$
第一项为切向加速度，第二项为法向加速度。动点的加速度在切线上的投影，等于速度在切线上的投影对时间的导数；加速度在主法线上的投影，等于速度的平方除以轨迹在动点处的曲率半径；加速度在副法线上的投影恒等于零。

因为加速度的两个分量 $a_n$ 与 $a_t$ 是相互垂直的，故得全加速度 $a$ 的大小为：

$$
a = \sqrt{a_t^2 + a_n^2} = \sqrt{\left(\frac{\mathrm{d}v}{\mathrm{d}t}\right)^2 + \left(\frac{v^2}{\rho}\right)^2}
$$

加速度 $a$ 与主法线所成的角度 $\theta$（恒取绝对值），由下式确定：

$$
\tan \theta = \frac{|a_t|}{a_n}
$$
