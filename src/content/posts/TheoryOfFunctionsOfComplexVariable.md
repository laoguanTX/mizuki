---
title: 复变函数论
published: 2025-09-19
category: ["数学", "数学物理方法"]
tags: ["复变函数"]
alias: "theoryoffunctionsofcomplexvariable"
---

## 一、复数的基本概念

### 1、复数的表示

复数有三种表示方法：

1. 代数表示：$z=x+y\mathrm{i}$

2. 三角表示：$z=\rho(\cos\varphi+\mathrm{i}\sin\varphi)$

3. 指数表示：$z=\varphi \mathrm{e}^{\mathrm{i}\varphi}$

   三角表示与指数表示之间的转换利用到了欧拉公式：
   $$
   \mathrm{e}^{\mathrm{i}\varphi}=\cos \varphi + \mathrm{i}\sin\varphi
   $$

上述表示方法中，$\rho=\sqrt{x^2+y^2}$为复数$z$的模，$\varphi$为复数$z$的辐角。在复平面上的表示为：

![1](https://laoguantx.top/article/数学/数学物理方法/复变函数论/1.png)

一个复数的辐角值不能唯一地确定，可以取无穷多个值，并且彼此相差$2\pi$的整数倍. 通常约定，以 $\arg z$表示其中满足条件

$$
0\leqslant\mathrm{Arg~}z<2\pi 
$$
的一个特定值，并称 $\arg z$为 $\mathrm{Arg} z$的主值，或$z$的主辐角。于是有：
$$
\varphi=\mathrm{Arg~}z=\arg\mathrm{~}z+2k\pi\quad\left(\begin{array}{c}k=0,\pm1,\pm2,\cdots\end{array}\right)
$$

复数“零”（即实部$x$及虚部$y$都等于零的复数）的辐角没有明确意义。

一个复数$z$的共轭复数$z^*$，指的是对应的点对实轴的反映，即
$$
z^*=x-\mathrm{i}y=\rho\left(\begin{array}{c}\cos\varphi-\mathrm{i}\sin\varphi\end{array}\right)=\rho\mathrm{e}^{-\mathrm{i}\varphi}
$$

### 2、复数的运算

1. 整数幂次定义：
   $$
   z^n=\rho^n(\cos n\varphi+\mathrm{i}\sin n\varphi)=\rho^n\mathrm{e}^{\mathrm{i}n\varphi}
   $$

2. 平方运算：
   $$
   |z|^2 \neq z^2
   $$
   前者是模的平方，等于复数与其共轭复数的成绩，后者为复数自乘。

3. 整数根式：
   $$
   \sqrt[n]{z}=\sqrt[n]{\rho}\left(\cos\frac{\varphi}{n}+\mathrm{i}\sin\frac{\varphi}{n}\right)=\sqrt[n]{\rho}\mathrm{e}^{\mathrm{i}\frac{\varphi}{n}}
   $$
   需要注意：由于复数$z$的辐角$\varphi$不是唯一，可以任意加减$2\pi$的整倍数而保持复数的值不变化， 因此在上面的根式运算中，对应的辐角$\frac\varphi n$ 也就可以加减$\frac{2\pi}{n}$的整倍数。从而对于一个给定给定的复数$z$ ，根式运算的结果可能不是唯一，而是有多个值与之相对应。

   $$
   \begin{aligned}&z=\mathrm{i}=\cos\frac\pi2+\mathrm{i}\sin\frac\pi2=\cos\left(2k\pi+\frac\pi2\right)+\mathrm{i}\sin\left(2k\pi+\frac\pi2\right)\\&\sqrt{\mathrm{i}}=\cos\left(k\pi+\frac\pi4\right)+\mathrm{i}\sin\left(k\pi+\frac\pi4\right)\end{aligned}
   $$

## 二、复变函数

### 1、复变函数的定义

若在复数平面（或球面）上存在一个点集$E$（复数的集合），对于$E$中的每个元素（每一个$z$值），总有一个或多个复数值$w$按一定的规律与之相对应，我们称$w$为$z$在复数域上的函数—复变函数，记作

$$
w = f(z),\quad\forall z \in E
$$

$z$称为函数$w$的宗量（也称变量），$E$为函数的定义域。

### 2、复变函数举例

1. 多项式：$f(z)=a_{0}+a_{1}z+a_{2}z^{2}+\cdots+a_{n}z^{n}$ （$n$为正整数）

2. 有理分式：$f(z)=\frac{P(z)}{Q(z)}=\frac{a_{0}+a_{1}z+a_{2}z^{2}+\cdots+a_{n}z^{n}}{b_{0}+b_{1}z+b_{2}z^{2}+\cdots b_{m}z^{m}}$ （$m,n$为正整数，式中的所有系数都是复常数）

3. 根式：$f(z)=\sqrt{z-a}$，要注意，这是个多值函数。

4. 指数：$e^{z}=e^{x+i y}=e^{x}e^{i y}=e^{x}(\cos y+i \sin y)$

5. 三角函数：$\mathrm{e}^{i z}=\cos z+i \sin z\quad\mathrm{e}^{-i z}=\cos z-i \sin z$

   从而推导出$\cos z=\frac{1}{2}\left(\mathrm{e}^{i z}+\mathrm{e}^{-i z}\right)$ 以及$\sin z=\frac{1}{2 \mathrm{i}}\left(\mathrm{e}^{i z}-\mathrm{e}^{-i z}\right)$。显然这里的三角函数与实数域三角函数有所不同，其取值的范围再不局限于$-1$到$1$之间，但是函数的周期还是$2 \pi$的整数倍。

6. 双曲函数：
$$
\mathrm{sh} z = \frac{1}{2} \left( \mathrm{e}^z - \mathrm{e}^{-z} \right)
$$
$$
\mathrm{ch} z = \frac{1}{2} \left( \mathrm{e}^z + \mathrm{e}^{-z} \right)
$$

7. 对数函数：
$$
\mathrm{e}^w = z \Rightarrow w = \ln z
$$
$$
z = |z| \mathrm{e}^{i \mathrm{Arg} z} \Rightarrow \ln z = \ln \left( |z| \mathrm{e}^{i \mathrm{Arg} z} \right) = \mathrm{LN} |z| + i \mathrm{Arg} z
$$
$$
  \ln(1)=\mathrm{LN} 1 + i \mathrm{Arg} (1) = i 2\pi k, k \in \mathbb{Z}
$$
$$
  \ln(-1)=\mathrm{LN} (-1) + i \mathrm{Arg} (-1) = i (2\pi + 1) k, k \in \mathbb{Z}
$$
  在上面的公式中，$\ln(x)$为复数域，$\mathrm{LN}(x)$为实数域。二者区别很大。

8. 幂函数：

$$
\ln(z_1z_2)=\ln(z_1)+\ln(z_2)+\mathrm{i}2\pi k
$$

$$
z^\alpha = \mathrm{e}^{\alpha\ln(z)} = \mathrm{e}^{\alpha\mathrm{LN}|z|+\mathrm{i\alpha}\:\mathrm{Arg}z}
$$

​	幂函数可能是单值，也有可能是多值，取决于指数的值

### 3、复变函数的连续

$$
z=x+\mathrm{i}y
$$

$$
f(z)=u(x,y)+\mathrm{i}v(x,y)
$$

若函数$u,v$均连续，则复变函数连续。

### 4、复变函数的导数

#### (1) 复变函数导数的定义

设函数$w=f(z)$是在区域$B$上的单值函数，对于$B$上的某点$z$，如果极限：

$$
\lim_{\Delta z\to0}\frac{\Delta w}{\Delta z}=\lim_{\Delta z\to0}\frac{f(z+\Delta z)-f(z)}{\Delta z}
$$

存在，并且该极限值与$\Delta z \to 0$的方式无关，则称函数$w=f(z)$在$z$点是可导，极限值称为函数$f(z)$在$z$点的导数(或微商)，以$f^\prime(z)$或 $\frac{\mathrm{d}f}{\mathrm{d}z}$来表示。
注意：复变函数导数定义在形式上跟实变函数导数定义相同，但复变函数可导的要求要严格得多：从复变函数导数的定义来看，$\Delta z$作为复数，$\Delta z\to0$具有无数种方式，比如可以是 $\Delta y=0,\Delta x\to0$（沿着复平面的实轴），可以是 $\Delta x=0,\Delta y{\rightarrow}0$ （沿着复平面的实虚轴），也可以是$\Delta x=\Delta y\rightarrow0$。要求其导数存在， 上述极限就应该与 $\Delta z\to0$的方式无关，也就是说，在复平面上沿不同方向所求得的极限具有相同值。

#### (2)导数的两种特殊情形

1. $\Delta z$沿着复平面的实轴方向逼近$0$，即：$\Delta y \equiv 0,\Delta z=\Delta x \to 0$
   $$
   f(z)=u(x,y)+\mathrm{i}v(x,y)
   $$

   $$
   z=x+\mathrm{i}y,z_0=x_0+\mathrm{i}y_0
   $$

   $$
   \begin{aligned}\lim_{\Delta z\to0}\frac{\Delta w}{\Delta z}&=\lim_{\Delta z\to0}\frac{f(z+\Delta z)-f(z)}{\Delta z}\\&=\underset{\Delta x\to0}{\operatorname*{\operatorname*{\lim}}}\frac{u(x+\Delta x,y)+\mathrm{i}v(x+\Delta x,y)-u(x,y)-\mathrm{i}v(x,y)}{\Delta x}\\&=\lim_{\Delta x\to0}\left\{\frac{u(x+\Delta x,y)-u(x,y)}{\Delta x}+\mathrm{i}\frac{v(x+\Delta x,y)-v(x,y)}{\Delta x}\right\}\\&=\frac{\partial u}{\partial x}+\mathrm{i}\frac{\partial v}{\partial x}\end{aligned}
   $$

2. $\Delta z$沿着复平面的虚轴方向逼近$0$，即：$\Delta x \equiv 0,\Delta z=\mathrm{i}\Delta y \to 0$

$$
\begin{aligned}\lim_{\Delta z\to0}\frac{\Delta w}{\Delta z}&=\lim_{\Delta z\to0}\frac{f(z+\Delta z)-f(z)}{\Delta z}\\&=\lim_{\Delta y\to0}\frac{u(x,y+\Delta y)+\mathrm{i}v(x,y+\Delta y)-u(x,y)-\mathrm{i}v(x,y)}{\mathrm{i}\Delta y}\\&=\lim_{\Delta y\to0}\left\{\frac{u(x,y+\Delta y)-u(x,y)}{\mathrm{i}\Delta y}+\mathrm{i}\frac{v(x,y+\Delta y)-v(x,y)}{\mathrm{i}\Delta y}\right\}\\&=\frac{\partial v}{\partial y}-\mathrm{i}\frac{\partial u}{\partial y}\end{aligned}
$$

#### (3)柯西-黎曼方程（C-R方程）

前面已经推导了导数的两种特殊情形，类比二元函数、全微分方程的相关知识，我们可以类比得出复变函数可导的必要条件，如果函数$f(z)$在点$z$可导，则上面两种特殊极限必须存在并且相等，即：
$$
\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y},\quad\frac{\partial v}{\partial x}=-\frac{\partial u}{\partial y}
$$
上式即为柯西-黎曼方程，不满足柯西-黎曼方程的复变函数肯定不可导，满足柯西-黎曼方程的复变函数不一定可导。

当然，在极坐标系中也存在柯西-黎曼方程：
$$
\begin{cases}\dfrac{\partial u}{\partial\rho}=\dfrac{1}{\rho}\dfrac{\partial v}{\partial\varphi}\\\dfrac{1}{\rho}\dfrac{\partial u}{\partial\varphi}=-\dfrac{\partial v}{\partial\rho}&\end{cases}
$$

> 存在下面两种证明思路：
>
> 1. 在极坐标系中，比较$\triangle z$沿径向逼近零（$\triangle z=\mathrm{e}^{\mathrm{i}\varphi}\bigtriangleup\rho\rightarrow0$）和沿周向逼近零，即（$\triangle z=\rho\triangle(\mathrm{e}^{\mathrm{i}\varphi})=\mathrm{i}\rho\mathrm{~e}^{\mathrm{i}\varphi}\triangle\varphi\to+0$）两种情形下$\frac{\triangle f}{\triangle z}$的极限，就得到极坐标系中的柯西-黎曼方程。
>
> 2. 从直角坐标系中的柯西–黎曼方程出发，按照变换公式：
>    $$
>    \begin{cases}x=\rho\cos\varphi\\y=\rho\sin\varphi&\end{cases}\\\begin{cases}\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y}\\\frac{\partial v}{\partial x}=-\frac{\partial u}{\partial y}&\end{cases}
>    $$
>    变换到极坐标系，也可得到极坐标系中的柯西–黎曼方程。

#### (4)复变函数可导的充分必要条件

函数$f(z)$可导的充分必要条件是，函数$f(z)$的偏导数$\frac{\partial u}{\partial x},\frac{\partial u}{\partial y},\frac{\partial v}{\partial x},\frac{\partial v}{\partial y}$存在且连续，并且满足柯西-黎曼方程。

> **证明充分性**：
>
> 由于偏导数连续，对于二元的实函数$u(x,y)$和$v(x,y)$，我们可以分别对它们进行泰勒展开，相应的增量为：
> $$
> \Delta u = \frac{\partial u}{\partial x} \Delta x + \frac{\partial u}{\partial y} \Delta y + \varepsilon_1 \Delta x + \varepsilon_2 \Delta y
> $$
> $$
> \Delta v = \frac{\partial v}{\partial x} \Delta x + \frac{\partial v}{\partial y} \Delta y + \varepsilon_3 \Delta x + \varepsilon_4 \Delta y
> $$
> 当$\Delta x$和$\Delta y \to 0$时， $\varepsilon_i(i=1,2,3,4) \to 0$。
> $$
> \lim_{\Delta z \to 0} \frac{\Delta f}{\Delta z} = \lim_{\Delta z \to 0} \frac{\Delta u + \mathrm{i} \Delta v}{\Delta z} = \lim_{\Delta z \to 0} \frac{\frac{\partial u}{\partial x} \Delta x + \frac{\partial u}{\partial y} \Delta y + \mathrm{i} \left( \frac{\partial v}{\partial x} \Delta x + \frac{\partial v}{\partial y} \Delta y \right)}{\Delta z}
> $$
> 假如$u\left(x,y\right)$和$v(x,y)$满足柯西-黎曼方程：$\frac {\partial u}{\partial x}= \frac {\partial v}{\partial y}, \frac {\partial v}{\partial x}= - \frac {\partial u}{\partial y}$全部化成关于$x$的偏导数：
>
> $$
> \begin{aligned}
> \lim_{\Delta z\to0}\frac{\Delta f}{\Delta z}=&\lim_{\Delta z\to0}\frac{\frac{\partial u}{\partial x}\Delta x-\frac{\partial v}{\partial x}\Delta y+\mathrm{i}\left(\frac{\partial v}{\partial x}\Delta x+\frac{\partial u}{\partial x}\Delta y\right)}{\Delta z}\\=&\lim_{\Delta x\to0}\frac{\frac{\partial u}{\partial x}(\Delta x+\mathrm{i}\Delta y)+\mathrm{i}\frac{\partial v}{\partial x}(\Delta x+\mathrm{i}\Delta y)}{\Delta x+\mathrm{i}\Delta y}\\=&\frac{\partial u}{\partial x}+\mathrm{i}\frac{\partial v}{\partial x}
> \end{aligned}
> $$
> 可以全部化成关于$x$或$y$的偏导数：
> $$
> \lim_{\Delta z\to0}\frac{\Delta f}{\Delta z}=\frac{\partial u}{\partial x}+\mathrm{i}\frac\partial v{\partial x}=\frac{\partial v}{\partial y}-\mathrm{i}\frac{\partial u}{\partial y}
> $$

#### (5)复变函数的求导法则

一般情况下，复变函数的求导法则与实变函数的求导法则相同。

## 三、解析函数

### 1、解析函数的定义

如果复变函数$f(z)$在点$z_{0}$的邻域上可以处处求导，我们称复变函数$f(z)$在$z_0$点是解析的。更进一步，如果复变函数$f(z)$在区域$B$上的每一点都是解析，我们称复变函数$f(z)$是区域$B$上的解析函数。

需要注意的是，有些复变函数可能在某一点可导，但在这个点邻域的其他点是不可导的，如$f(z)=|z|^2$，在$z=0$是可导，但在其他点是不可导，从而该函数不是解析的。所以解析性要求比可导性要求来得苛刻。

### 2、解析函数的特殊性质

#### (1)解析函数实部与虚部的正交性

如果复变函数$f(z)=u+iv$在区域$B$上是解析的，那么$u(x,y)=C_{1}$，$v(x,y)=C_{2}$（$C_{1},C_{2}$为常数）代表区域$B$上的两组正交曲线族。

> **证明**：
>
> 如果函数是解析，那么满足柯西黎曼条件：
> $$
> \frac{\partial u}{\partial x}=\frac{\partial v}{\partial y},\frac{\partial v}{\partial x}=-\frac{\partial u}{\partial y}
> $$
> 
> 等值线$u(x,y)=C_{1}$在某点的梯度方向为：$\left(\frac{\partial u}{\partial x},\frac{\partial u}{\partial y}\right)$
> 等值线$v(x,y)=C_{1}$在某点的梯度方向为：$\left(\frac{\partial v}{\partial x},\frac{\partial v}{\partial y}\right)$
> $$
> \frac{\partial u}{\partial x}\frac{\partial v}{\partial x}+\frac{\partial u}{\partial y}\frac{\partial v}{\partial y}=0 \Longleftrightarrow \text{这两族等值线的梯度是正交，表明曲线族也是正交。}
> $$

![2](https://laoguantx.top/article/数学/数学物理方法/复变函数论/2.gif)

如上面动图所演示函数$f(z)=z^2$，在初始状态下时，红线和蓝线分别表示$u(x,y),v(x,y)$的等值线，经过变化后，红线和蓝线仍然保持正交。

#### (2)调和函数

在平面区域$B$上, 如果一个函数具有连续的二阶偏导数，且满足拉普拉斯方程：
$$
\nabla \cdot \nabla u = \Delta u = \frac{\partial^{2} u}{\partial x^{2}} + \frac{\partial^{2} u}{\partial y^{2}} = 0
$$
如果函数$f(z) = u + iv$在区域$B$上解析, 则其实部$u$和虚部$v$均为$B$上的调和函数。

> **证明**：
> 
> 我们在后续=将会证明，某个区域上的解析函数在该区域上存在任意阶的导数。因此$u$和$v$的二阶偏导数$\frac{\partial^{2} u}{\partial x^{2}}, \frac{\partial^{2} u}{\partial x \partial y}, \frac{\partial^{2} u}{\partial y^{2}}, \frac{\partial^{2} v}{\partial x^{2}}, \frac{\partial^{2} v}{\partial x \partial y}, \frac{\partial^{2} v}{\partial y^{2}}$存在且是连续的。根据解析函数的柯西-黎曼条件：
> $$
> \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies \frac{\partial^{2} u}{\partial x^{2}} = \frac{\partial^{2} v}{\partial x \partial y}, \frac{\partial^{2} u}{\partial y^{2}} = -\frac{\partial^{2} v}{\partial x \partial y} \implies \frac{\partial^{2} u}{\partial x^{2}} + \frac{\partial^{2} u}{\partial y^{2}} = 0
> $$
> 因此，函数$u(x, y)$是个调和函数。同理，函数$v(x, y)$也是个调和函数。我们把这样的一组调和函数统称为共轭调和函数。

给定了平面上的一个调和函数，如何求得与其共扼调和函数；或者说给定了某个解析函数的实部(或虚部)后，如何利用柯西–黎曼条件来确定这个解析函数？

不失一般性，假设解析函数的实部 $u(x, y)$ 已经确定，那么 $v(x, y)$ 的微分表达式为：

$$
\mathrm{d}v = \frac{\partial v}{\partial x} \mathrm{d}x + \frac{\partial v}{\partial y} \mathrm{d}y
$$

根据柯西-黎曼方程，可以写成：

$$
\mathrm{d}v = -\frac{\partial u}{\partial y} \mathrm{d}x + \frac{\partial u}{\partial x} \mathrm{d}y \quad \rightarrow u(x, y)
$$

这是一个全微分表达式，我们可以利用全微分方程的求解方法来解决这个问题[^1]

> **例**：
>
> 已知解析函数$f(z)$的虚部$v(x,y)=\sqrt{-x+\sqrt{x^{2}+y^{2}}}$，求实部$u(x,y)$和这个解析函数$f(z)$。
>
> **解**：
>
> 在直角坐标中求偏导数$\frac{\partial v}{\partial x}$和$\frac{\partial v}{\partial y}$比较繁琐，直观的分析，改用极坐标可能会方便一点：
>
> $$
> \frac{\partial v}{\partial \rho}=\sqrt{\frac{1}{2 \rho}} \sin \frac{\varphi}{2}, \frac{\partial v}{\partial \varphi}=\sqrt{\frac{\rho}{2}} \cos \frac{\varphi}{2}
> $$
>
> 根据极坐标下的柯西-黎曼方程：
>
> $$
> \frac{\partial u}{\partial \rho}=\sqrt{\frac{1}{2 \rho}} \cos \frac{\varphi}{2}, \frac{\partial u}{\partial \varphi}=-\sqrt{\frac{\rho}{2}} \sin \frac{\varphi}{2}
> $$
>
> 极坐标下全微分表达式为：
>
> $$
> \begin{aligned}\mathrm{d} u=&\frac{\partial u}{\partial \rho} \mathrm{~d} \rho+\frac{\partial u}{\partial \varphi} \mathrm{~d} \varphi\\=&\sqrt{\frac{1}{2 \rho}} \cos \frac{\varphi}{2} \mathrm{~d} \rho-\sqrt{\frac{\rho}{2}} \sin \frac{\varphi}{2} \mathrm{~d} \varphi\\=&\sqrt{2} \cos \frac{\varphi}{2} \mathrm{~d} \sqrt{\rho}+\sqrt{2} \rho \mathrm{~d}\left(\cos \frac{\varphi}{2}\right)\\=&\mathrm{d}\left(\sqrt{2 \rho} \cos \frac{\varphi}{2}\right)\end{aligned}
> $$
> 两边积分得到：
> $$
> u=\sqrt{2\rho}\cos\frac{\varphi}{2}+C=\sqrt{x+\sqrt{x^{2}+y^{2}}}+C
> $$
> 最后得到解析函数：
> $$
> \begin{aligned}f(z)&=\sqrt{2\rho}\cos\frac{\varphi}{2}+C+i\sqrt{2\rho}\sin\frac{\varphi}{2}\\&=\sqrt{2\rho}\left(\cos\frac{\varphi}{2}+i\sin\frac{\varphi}{2}\right)+C=\sqrt{2z}+C\end{aligned}
> $$

## 四、平面标量场

- 恒定场（稳态场）：如果物理场（电磁场、声场、温度场等）与时间无关，只与空间位置有关，我们称之为稳态场。

- 平面场：如果物理场沿空间某方向保持不变或者是均匀分布，我们只需要研究物理场在与该方向相垂直的平面上的变化规律，称之为平面物理场。

  > **例**：在没有电荷分布的区域，根据高斯定理，静电场的电势满足二维拉普拉斯方程，所以其电势可以视为某一解析函数的实部或虚部。把平面静电场的电势进行扩充到复空间中，用解析函数$f(z)=u(x,y)+\mathrm{i}v(x,y)$来表示该平面静电场的复势，该解析函数的实部或者虚部是实际问题的电势。
  >
  > 不妨取设$u(x,y)$为静电势（一般情况下都是取电势为实部），曲线族“$u(x,y)=常数$”为等势线族。接下来我们来看看$v(x,y)$具有什么物理含义。在平面上任取两点$A(x_1,y_1)$和$B(x_2,y_2)$，以及连接$A$和$B$的任一曲线，我们来计算通过该曲线单位高度的电通量$N$。
  > $$
  > \begin{aligned}
  > \mathbf{E}=&-\nabla u=\left(-\frac{\partial u}{\partial x},-\frac{\partial u}{\partial y}\right)\\\mathbf{n}=&\left(-\frac{\mathrm{d}y}{\mathrm{d}s},\frac{\mathrm{d}x}{\mathrm{d}s}\right)\\N=&\int_A^BE_n\mathrm{d}s\\=&\int_A^B\mathbf{E}\cdot\mathbf{n}\mathrm{d}s\\=&\int_A^B\left(\frac{\partial u}{\partial x}\mathrm{d}y-\frac{\partial u}{\partial y}\mathrm{d}x\right)\\=&\int_A^B\left(\frac{\partial v}{\partial y}\mathrm{d}y+\frac{\partial v}{\partial x}\mathrm{d}x\right)\\=&\int_A^B\mathrm{d} v\\=&v(B)-v(A)
  > \end{aligned}
  > $$
  > 这样，$v(x,y)$在$A$和$B$两点值之差代表了电场穿过$AB$两点之间曲线的单位高度电场强度通量。因此 $v(x,y)$称为通量函数。
  >
  > 对于液体的无旋流动、平面温度场等这类满足拉普拉斯方程的物理问题，都可以考虑使用解析函数求解。

## 五、多值函数

### 1、为什么会出现多值函数

前面提到，$w = \sqrt{z}$ 或者 $w = \ln z$ 是多值函数，具有多个分支。下面我们以根式函数 $w = \sqrt{z}$ 为例来介绍多值函数的性质。
$$
\begin{aligned}&w=\sqrt{z}=\sqrt{\mid z\mid}\mathrm{e}^{\mathrm{i}(\mathrm{Arg}z)/2}\\&\mid w\mid=\sqrt{\mid z\mid},\theta=\frac{1}{2}\operatorname{Arg}z=\frac{1}{2}\arg z+n\pi\end{aligned}
$$
则$w$的主幅角有两个值， 相应地， $w$有两个分支：
$$
w_1=\sqrt{\mid z\mid}\mathrm{e}^{\mathrm{i}(\arg z)/2},w_2=\sqrt{\mid z\mid}\mathrm{e}^{\mathrm{i}(\arg z)/2+\mathrm{i}\pi}=-\sqrt{\mid z\mid}\mathrm{e}^{\mathrm{i}(\arg z)/2}
$$

### 2、支点

![3](https://laoguantx.top/article/数学/数学物理方法/复变函数论/3.png)

见上图，现在在复平面上取一个点$z_0$，宗量$z$从$z_0$出发，沿着一条包含$z=0$的闭合曲线$l$回到$z_0$（原来的点），转了一圈后$\mathrm{Arg}\:z$增加了$2\pi$，显然$w$从$w_1=\sqrt{\mid z\mid}\mathrm{e}^{\mathrm{i}(\arg z)/2}$出发，又到达了$w_2=\sqrt{\mid z\mid}\mathrm{e}^{\mathrm{i}(\arg z)/2+\mathrm{i}\pi}=-\sqrt{\mid z\mid}\mathrm{e}^{\mathrm{i}(\arg z)/2}$，也就是说，明明是同一个位置，只是因为多在复平面上转了一圈，$z$就从一个分支变为了领一个分支。所以$w_1,w_2$不能看作是两个独立的单值函数。如果$z$沿着不包含$z=0$的闭合曲线$l'$回到$z_0$，则转了一圈后，$\mathrm{Arg}\:z$的值没有改变，$w$一直留在一个分支中。

因此，对于多值函数$w=\sqrt{z}$ 来说，$z=0$点具有这样的特征：当$z$绕包含该点的曲线一周回到原来出发点时，对应的函数值将不再复原，从一个分支进入另一个分支，但是函数还是相同， 我们称该点为多值函数的支点。更进一步，如果$z$绕支点$n$周后，函数值$w$复原，回到原来的分支，我们称该点为多值函数的$n–1$阶支点。对于函数$w=\sqrt z$ ,显然，当$z$沿包含支点$z =0$的曲线两周后，$w$值将还原，因此，$z=0$是$w=\sqrt{z}$的一阶支点。$z{= }\infty \textbf{是 }w= \sqrt {z}$的一阶支点。对于函数$w=\sqrt[3]{z}$,$z=0$是二阶支点。

对于$w=\ln z$ 这样一个多值函数，我们进行如下分析：

$$
\begin{aligned}w=&\mathrm{lnz}\\=&\ln[\rho e^{i(\theta+2n\pi)}]\\=&\ln\rho+i(\theta+2n\pi)\end{aligned}
$$

上述函数的虚部，每一个$n$对应着不同的函数值。因此，对于同样的$z$，由于幅角的多值性，取对数后的函数值将有无穷多个， 其黎曼面的分支也是无穷多个。显然，自变量$z$绕原点一圈后函数值发生了改变，所以$z=0$是$w=\ln z$ 的支点，同理，$z=\infty$也是其另一个支点。

前面例子中，都提到了$z=\infty$是一个支点，采取换元能够解决这个问题，使$z'=\frac1z$重新代回问题即可。

### 3、分支切割

因为多值函数在复平面上无法定义为单值解析函数。为了让函数在某一区域内单值，需要选择一个单值分支。这通常通过分支切割来实现，人为在复平面上去掉一条曲线，使得去掉后剩下的区域（称为分支面）上，函数变为单值。

以 $w = \ln z$ 为例，首先将 $z$ 写作 $z = \rho e^{\mathrm{i}\varphi}$，$\rho > 0$，$\varphi \in (-\pi, \pi]$。于是
$$
\ln z = \ln \rho + \mathrm{i}\varphi, \quad \varphi\in (-\pi, \pi]
$$
这时，$\ln z$ 只取 $\theta$ 在 $(-\pi, \pi]$ 之间的那一值。我们人为从 $z=0$ 向正无穷延伸一条射线（通常选为负实轴或正实轴），把复平面切开。例如，沿正实轴（$z = \rho e^{\mathrm{i}\varphi}$, $\rho > 0$）作分支切割，则 $z$ 的幅角 $\rho$ 只取 $(-\pi, \pi)$。切割后的复平面，去除了正实轴（含端点 $z=0$），在剩下的区域上，$\ln z$ 变成了单值函数。切割后，定义：
$$
\mathrm{Log}~z = \ln |z| + \mathrm{i} \arg z, \quad \arg z \in (-\pi, \pi)
$$
其中 $\mathrm{Log}~z$ 表示对数的主值。

当然，并不仅仅是负实轴、正实轴射线可以作为切割线，只要是将多个支点连接起来的线都可以分支切割，因为这样切割后无法找到一条闭合的含有支点的轨迹，使得$w$从一个分支跨越到另一个分支，而正实轴、负实轴的射线，可以看作是连接支点$z=0$和$z=\infty$的一条线。

[^1]: 求解全微分方程的三种方法，参考文章：[常微分方程求解（2）](https://www.laoguantx.top/posts/odesolutions2/)