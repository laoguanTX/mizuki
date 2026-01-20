---
title: 二阶常微分方程级数解法与本征值问题
published: 2025-11-26
category: ["数学", "数学物理方法"]
tags: ["数学物理方程", "偏微分方程", "常微分方程"]
alias: "seriessolutionofsecondorderordinarydifferentialequationsandeigenvalueproblems"
---
## 一、特殊函数常微分方程

圆球形和圆柱形就是两种常见的边界，相应地用球坐标系和柱坐标系比较方便。本文研究球坐标系和柱坐标系中的分离变数法所导致的常微分方程以及相应的本征值问题。

### 1、拉普拉斯方程$\Delta =0$

#### (1) 球坐标系

写出球坐标系下拉普拉斯方程：
$$
\Delta u=\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial u}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial u}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2u}{\partial\varphi^2}=0
$$
采用分离变量法，令$u(r,\theta,\varphi)=R(r),Y(\theta,\varphi)$，把$r$分离出来。
$$
\frac{Y}{r^2}\frac{\mathrm{d}}{\mathrm{d}r}\left(r^2\frac{\mathrm{d}R}{\mathrm{d}r}\right)+\frac{R}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial Y}{\partial\theta}\right)+\frac{R}{r^2\sin^2\theta}\frac{\partial^2Y}{\partial\varphi^2}=0
$$
进行变换，方程两边同乘$\frac{r^2}{YR}$：
$$
\frac{1}{R}\frac{\mathrm{d}}{\mathrm{d}r}\left(r^2\frac{\mathrm{d}R}{\mathrm{d} r}\right)=\frac{-1}{Y\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial Y}{\partial\theta}\right)-\frac{1}{Y\sin^2\theta}\frac{\partial^2Y}{\partial\varphi^2}
$$
若要保证方程两边恒成立，故两边应该为同一个常数：
$$
\frac{1}{R}\frac{\mathrm{d}}{\mathrm{d}r}\left(r^2\frac{\mathrm{d}R}{\mathrm{d} r}\right)=\gamma
$$

$$
\frac{-1}{Y\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial Y}{\partial\theta}\right)-\frac{1}{Y\sin^2\theta}\frac{\partial^2Y}{\partial\varphi^2}=\gamma
$$

取$\gamma=l(l+1)$，那么对于上面的第一个等式，有：
$$
\frac{\mathrm{d}}{\mathrm{d}r}\left(r^2\frac{\mathrm{d}R}{\mathrm{d} r}\right)-l(l+1)R=0
$$
该方程为欧拉方程，根据常微分方程方法求解，得到：
$$
R(r)=Cr^l+\frac{D}{r^{l+1}}
$$
对于上面的第二个等式，有：
$$
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial Y}{\partial\theta}\right)+\frac{1}{\sin^{2}\theta}\frac{\partial^{2}Y}{\partial\varphi^{2}}+l(l+1)Y=0
$$
该方程成为球函数方程。对于球函数方程，继续进行分离变量，假设$Y(\theta,\varphi)=\Theta(\theta)\Phi(\varphi)$，得到：
$$
\frac{\Phi}{\sin\theta}{\frac{\mathrm{d}}{\mathrm{d}\theta}\left(\sin\theta\frac{\mathrm{d}\Theta}{\mathrm{d}\theta}\right)}+\frac{\Theta}{\sin^2\theta}\frac{\mathrm{d}^2\Phi}{\mathrm{d}\varphi^2}+l(l+1)\Theta\Phi=0
$$
两边同乘$\frac{\sin^2\theta}{\Phi\Theta}$，并移项：
$$
\frac{\sin\theta}{\Theta}\frac{\mathrm{d}}{\mathrm{d}\theta}\left(\sin\theta\frac{\mathrm{d}\Theta}{\mathrm{d}\theta}\right)+l(l+1)\sin^2\theta=-\frac{1}{\Phi}\frac{\mathrm{d}^2\Phi}{\mathrm{d}\varphi^2}
$$
若要保证方程两边恒成立，故两边应该为同一个常数：
$$
\frac{\sin\theta}{\Theta}\frac{\mathrm{d}}{\mathrm{d}\theta}\left(\sin\theta\frac{\mathrm{d}\Theta}{\mathrm{d}\theta}\right)+l(l+1)\sin^2\theta=\lambda
$$

$$
-\frac{1}{\Phi}\frac{\mathrm{d}^2\Phi}{\mathrm{d}\varphi^2}=\lambda
$$

然后得到：
$$
\Phi^{^{\prime\prime}}+\lambda\Phi=0
$$

$$
\sin\theta\frac{\mathrm{d}}{\mathrm{d}\theta}\left(\sin\theta\frac{\mathrm{d}\Theta}{\mathrm{d}\theta}\right)+\left[l(l+1)\sin^2\theta-m^2\right]\Theta=0
$$

利用隐含的自然周期边界条件：
$$
\Phi(2\pi+\varphi)=\Phi(\varphi)
$$
解出本征值与本征函数：
$$
\lambda=m^2,m\in\mathbb{N}
$$

$$
\Phi(\varphi)=A\cos m\varphi+B\sin m\varphi
$$

另一个关于$\theta$的常微分方程变为：
$$
\sin\theta\frac{\mathrm{d}}{\mathrm{d}\theta}\left(\sin\theta\frac{\mathrm{d}\Theta}{\mathrm{d}\theta}\right)+\left[l(l+1)\sin^2\theta-m^2\right]\Theta=0
$$
通常，引入一个变换：$x=\cos\theta$，这里的$x$只是一个替换变量，与直角坐标系没有关系。
$$
\frac{\mathrm{d}x}{\mathrm{d}\theta}=-\sin\theta
$$
引入变换后，可以得到：

$$
\frac{\mathrm{d}\Theta}{\mathrm{d}\theta} = \frac{\mathrm{d}\Theta}{\mathrm{d}x} \frac{\mathrm{d}x}{\mathrm{d}\theta} = -\sin\theta \frac{\mathrm{d}\Theta}{\mathrm{d}x}
$$
$$
\frac{\mathrm{d}}{\mathrm{d}\theta} \left( \sin\theta \frac{\mathrm{d}\Theta}{\mathrm{d}\theta} \right)
= \frac{\mathrm{d}}{\mathrm{d}x} \left( \sin\theta \frac{\mathrm{d}\Theta}{\mathrm{d}\theta} \right) \frac{\mathrm{d}x}{\mathrm{d}\theta}
= \sin\theta \frac{\mathrm{d}}{\mathrm{d}x} \left( \sin^2\theta \frac{\mathrm{d}\Theta}{\mathrm{d}\theta} \right)
$$

代入到原常微分方程中得到：
$$
\frac{\mathrm{d}}{\mathrm{d}x} \left( (1-x^2) \frac{\mathrm{d}\Theta}{\mathrm{d}x} \right)
+ \left[ l(l+1) - \frac{m^2}{1-x^2} \right] \Theta = 0
$$
将上述方程展开，得到$m\neq0$时的方程：
$$
(1-x^2) \frac{\mathrm{d}^2 \Theta}{\mathrm{d}x^2}
- 2x \frac{\mathrm{d} \Theta}{\mathrm{d}x}
+ \left[ l(l+1) - \frac{m^2}{1-x^2} \right] \Theta = 0
$$
该方程称为$l$阶连带的勒让德方程，如果$m=0$，则可以化简为：
$$
(1-x^2) \frac{\mathrm{d}^2 \Theta}{\mathrm{d}x^2}
- 2x \frac{\mathrm{d} \Theta}{\mathrm{d}x}
+ \left[ l(l+1)\right] \Theta = 0
$$
该方程称为$l$阶勒让德方程。根据自然边界条件，要求$x=\pm1$处的函数值必须有限，由此决定$l$是能是不小于零的整数。（具体见后面内容）

#### (2) 柱坐标系

柱坐标系的拉普拉斯方程为：
$$
\nabla^2 u = \frac{1}{\rho} \frac{\partial}{\partial \rho} \left( \rho \frac{\partial u}{\partial \rho} \right)
+ \frac{1}{\rho^2} \frac{\partial^2 u}{\partial \varphi^2}
+ \frac{\partial^2 u}{\partial z^2} = 0
$$
采用分离变量法，假设$u(\rho,\varphi,z)=R(\rho)\Phi(\varphi)Z(z)$，代入拉普拉斯方程：
$$
\Phi Z \frac{\mathrm{d}^2 R}{\mathrm{d} \rho^2}
+ \frac{\Phi Z}{\rho} \frac{\mathrm{d} R}{\mathrm{d} \rho}
+ \frac{R Z}{\rho^2} \frac{\mathrm{d}^2 \Phi}{\mathrm{d} \varphi^2}
+ R \Phi \frac{\mathrm{d}^2 Z}{\mathrm{d} z^2} = 0
$$
两边同乘$\frac{\rho^2}{R\Phi Z}$，得：
$$
\frac{\rho^2}{R} R'' + \frac{\rho}{R} R' + \rho^2 \frac{Z''}{Z} = -\frac{\Phi''}{\Phi} = \lambda
$$
得到本征值问题：
$$
\Phi^{^{\prime\prime}}+\lambda\Phi=0
$$

$$
\Phi(2\pi+\varphi)=\Phi(\varphi)
$$

得到本征函数和本征值：
$$
\lambda=m^2,m\in\mathbb{N}
$$

$$
\Phi(\varphi)=A\cos m\varphi+B\sin m\varphi
$$

另外一个方程为：
$$
\frac{\rho^2}{R} R'' + \frac{\rho}{R} R' + \rho^2 \frac{Z''}{Z} = m^2
$$
两边除以$\rho^2$，得到：
$$
\frac{R''}{R} + \frac{R'}{\rho R} - \frac{m^2}{\rho^2} = -\frac{Z''}{Z} = -\mu
$$
可以分解为两个方程：
$$
Z'' - \mu Z = 0
$$

$$
\frac{\mathrm{d}^2 R}{\mathrm{d} \rho^2} + \frac{1}{\rho} \frac{\mathrm{d} R}{\mathrm{d} \rho} + \left( \mu - \frac{m^2}{\rho^2} \right) R = 0
$$

当圆柱体的上下表面或者侧面给定齐次边界条件后，就能构成一个本征值问题。当$\mu=0$时，可以直接解出：
$$
Z(z)=C+Dz
$$

$$
R(\rho) = 
\begin{cases}
E + F \ln \rho & \quad (m = 0) \\[1.5ex]
E \rho^m + \dfrac{F}{\rho^m} & \quad (m = 1, 2, 3, \cdots)
\end{cases}
$$

当$\mu>0$时，关于$Z$的方程可以解出为：
$$
Z(z)=Ce^{\sqrt{\mu}z}+De^{-\sqrt{\mu}z}
$$
对于关于$R$的方程，引入变换$x=\sqrt{\mu}\rho$，得到：
$$
\frac{\mathrm{d}x}{\mathrm{d}\rho} = \sqrt{\mu}
$$

$$
\frac{\mathrm{d}R}{\mathrm{d}\rho} = \frac{\mathrm{d}R}{\mathrm{d}x} \frac{\mathrm{d}x}{\mathrm{d}\rho}
= \sqrt{\mu} \frac{\mathrm{d}R}{\mathrm{d}x}
$$

带回到原方程中得到：
$$
x^2 \frac{\mathrm{d}^2 R}{\mathrm{d} x^2}
+ x \frac{\mathrm{d} R}{\mathrm{d} x}
+ \left( x^2 - m^2 \right) R = 0
$$
该方程称为$m$阶贝塞尔方程。

当$\mu =-v^2<0$时，关于$Z$的方程可以解出为：
$$
Z(z)=C\cos vz+D\sin vz
$$
对于关于$R$的方程，引入变换$x=\sqrt{-\mu}\rho=v\rho$，得到：
$$
\frac{\mathrm{d}R}{\mathrm{d}\rho} = \frac{\mathrm{d}R}{\mathrm{d}x} \frac{\mathrm{d}x}{\mathrm{d}\rho} = v \frac{\mathrm{d}R}{\mathrm{d}x}
$$

$$
\frac{\mathrm{d}^2 R}{\mathrm{d}\rho^2} = \frac{\mathrm{d}}{\mathrm{d}x} \left( \frac{\mathrm{d}R}{\mathrm{d}\rho} \right) \frac{\mathrm{d}x}{\mathrm{d}\rho}
= v \frac{\mathrm{d}^2 R}{\mathrm{d}x^2}
$$

带回到原方程中得到：
$$
x^2 \frac{\mathrm{d}^2 R}{\mathrm{d}x^2} + x \frac{\mathrm{d}R}{\mathrm{d}x} + \left( x^2 + m^2 \right) R = 0
$$
该方程称为$m$阶虚宗量贝塞尔方程。

### 2、波动方程

三维的波动方程形式为：
$$
u_{tt}=a^2\Delta u
$$
对于三维的波动方程，使用分离变量法：
$$
u(\boldsymbol{r}, t) = T(t)\, v(\boldsymbol{r})
$$
代入到波动方程中，移项得到：
$$
\frac{T''(t)}{a^2 T} = \frac{\Delta v}{v} = -k^2
$$
得到两个方程：
$$
T'' + k^2 a^2 T = 0
$$

$$
\Delta v+k^2v=0
$$

上述第一个方程求解简单，第二个方程称为亥姆霍兹方程。

### 3、输运方程

三维的输运方程形式为：
$$
u_t=a^2\Delta u
$$
对于三维的波动方程，使用分离变量法：
$$
u(\boldsymbol{r}, t) = T(t)\, v(\boldsymbol{r})
$$
代入到输运方程中，移项得到：
$$
\frac{T'(t)}{a^2 T} = \frac{\Delta v}{v} = -k^2
$$
得到两个方程：
$$
T' + k^2 a^2 T = 0
$$

$$
\Delta v+k^2v=0
$$

第一个方程求解简单，第二个方程仍为亥姆霍兹方程。

### 4、亥姆霍兹方程

#### (1) 球坐标系

球坐标系下的亥姆霍兹方程为：
$$
\frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial v}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial v}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2v}{\partial\varphi^2}+k^2v=0
$$
采用分离变量法，先把$r$分离开，假设$u(r,\theta,\varphi)=R(r)Y(\theta,\varphi)$，得到：
$$
\frac{Y}{r^2} \frac{\mathrm{d}}{\mathrm{d}r} \left( r^2 \frac{\mathrm{d}R}{\mathrm{d}r} \right)
+ \frac{R}{r^2 \sin\theta} \frac{\partial}{\partial\theta} \left( \sin\theta \frac{\partial Y}{\partial\theta} \right)
+ \frac{R}{r^2 \sin^2\theta} \frac{\partial^2 Y}{\partial \varphi^2}
+ k^2 R Y = 0
$$
两边同乘$\frac{r}{RY}$，然后移项，得到：
$$
\frac{1}{R} \frac{\mathrm{d}}{\mathrm{d}r} \left( r^2 \frac{\mathrm{d}R}{\mathrm{d}r} \right) + k^2 r^2 =
\frac{-1}{Y \sin\theta} \frac{\partial}{\partial\theta} \left( \sin\theta \frac{\partial Y}{\partial\theta} \right)
- \frac{1}{Y \sin^2\theta} \frac{\partial^2 Y}{\partial\varphi^2}
= l(l+1)
$$
与拉普拉斯方程分离变量法相比，方程左边多了一项$k^2r^2$，故$R$无法使用欧拉方程方法求解；而方程右边相同：
$$
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial Y}{\partial\theta}\right)+\frac{1}{\sin^2\theta}\frac{\partial^2Y}{\partial\varphi^2}+l(l+1)Y=0
$$

$$
\frac{\mathrm{d}}{\mathrm{d}r} \left( r^2 \frac{\mathrm{d}R}{\mathrm{d}r} \right)
    + \left[ k^2 r^2 - l(l+1) \right] R = 0
$$

上述第一个式子为球函数方程，第二个方程为$l$阶球贝塞尔方程。为了求解$l$阶球贝塞尔方程，引入下面的变换：
$$
x = kr,\quad R(r) = \sqrt{\frac{\pi}{2kr}}\, y(x)
$$
代入到$l$阶球贝塞尔方程中，得到：
$$
x^2 \frac{\mathrm{d}^2 y}{\mathrm{d}x^2}
+ x \frac{\mathrm{d}y}{\mathrm{d}x}
+ \left[
    x^2 - \left(l + \frac{1}{2}\right)^2
  \right] y = 0
$$
于是得到了$l+\frac12$阶贝塞尔方程。所以$l$阶贝塞尔方程和球面的齐次边界条件将会构成一个本征值问题，由此可以确定$k$的取值，确定了$k$的值后，就能够得到对应驻波项。

#### (2) 柱坐标系

柱坐标系下的亥姆霍兹方程为：
$$
\frac{1}{\rho} \frac{\partial}{\partial \rho} \left( \rho \frac{\partial v}{\partial \rho} \right)
+ \frac{1}{\rho^2} \frac{\partial^2 v}{\partial \varphi^2}
+ \frac{\partial^2 v}{\partial z^2}
+ k^2 v = 0
$$
采用分离变量法，假设$u(\rho,\varphi,z)=R(\rho)\Phi(\varphi)Z(z)$，代入方程得到：
$$
\Phi Z \frac{\mathrm{d}^2 R}{\mathrm{d} \rho^2}
+ \frac{\Phi Z}{\rho} \frac{\mathrm{d} R}{\mathrm{d} \rho}
+ \frac{R Z}{\rho^2} \frac{\mathrm{d}^2 \Phi}{\mathrm{d} \varphi^2}
+ R \Phi \frac{\mathrm{d}^2 Z}{\mathrm{d} z^2}
+ k^2 R\Phi Z = 0
$$
一步步地分离变数，得到三个方程：
$$
\Phi''+\lambda \Phi=0
$$

$$
Z''-\mu Z=0
$$

$$
\frac{\mathrm{d}^2 R}{\mathrm{d} \rho^2}
+ \frac{1}{\rho} \frac{\mathrm{d}R}{\mathrm{d}\rho}
+ \left( k^2 + \mu - \frac{\lambda}{\rho^2} \right) R = 0
$$

上述第一个方程与自然周期条件构成本征值问题，本征值与本征函数为：
$$
\lambda=m^2,(m=0,1,2,\cdots)
$$

$$
\Phi(\varphi)=A\cos m\varphi+B\sin m\varphi
$$

上述第二个方程与在柱坐标系下拉普拉斯方程求解的讨论完全相同，如果问题的边界条件全部都是齐次的，就排除了$\mu>0$的情形，记$-\mu=h^2\ge0$，这样上述第二个方程的解为：
$$
\begin{cases}
  Z(z) = C + D z,\left( h = 0 \right) \\
  Z(z) = C \cos h z + D \sin h z , \left( h > 0 \right)
\end{cases}
$$
于是，上述第三个方程可以改写为：
$$
\frac{\mathrm{d}^2R}{\mathrm{d}\rho^2}+\frac{1}{\rho}\frac{\mathrm{d}R}{\mathrm{d}\rho}+\left(k^2-h^2-\frac{m^2}{\rho^2}\right)R=0
$$
该方程附加圆柱侧面上的齐次边界条件，构成本征值问题，决定了$k$的取值。然后对方程进行变量代换：
$$
x=\sqrt{k^2-h^2}\rho
$$
原方程变为：
$$
\frac{\mathrm{d}^2R}{\mathrm{d}x^2}+\frac{1}{x}\frac{\mathrm{d}R}{\mathrm{d}x}+\left(1-\frac{m^2}{x^2}\right)R=0
$$
这就变成了$m$阶贝塞尔方程。

## 二、常点邻域上的级数解法

在球坐标和柱坐标系下对拉普拉斯方程、波动方程、输运方程应用分离变量法后，会出现勒让德方程（连带勒让德方程）、贝塞尔方程、球贝塞尔方程等一系列常微分方程的边值问题，这些微分方程的边值问题不失一般性，可以表示为：
$$
\frac{\mathrm{d}^2w}{\mathrm{d}z^2}+p(z)\frac{\mathrm{d}w}{\mathrm{d}z}+q(z)w=0
$$

$$
w\left(z_0\right)=C_0,w^{\prime}\left(z_0\right)=C_1
$$

这些线性二阶常微分方程常常不能通过通常的方法解出，但可以使用级数法求解。

对于大多数物理问题，$p(z)$和$q(z)$是已知的实函数，$w(z)$时未知的实函数。为了应用复变函数理论，把$z$看成是复数，相应的$p(z),q(z),w(z)$都被看作为复变函数。

### 1、方程的常点与奇点

如果方程的系数$p(z),q(z)$在选定的点$z_0$及其邻域中都是解析的，则该点叫作方程的常点，如果系数二者有一个或者都在$z_0$处不解析，则$z_0$叫作方程的奇点。

### 2、常点邻域上的级数解

如果方程系数$p(z)$和$q(z)$为点$z_0$的邻域$|z-z_0|<R$中的解析函数，则方程在这圆中存在唯一的解$w(z)$满足初值条件，而且该解在这个邻域中也是单值解析的（不作证明）。既然$p(z),q(z),w(z)$在$z_0$的邻域单值解析，于是，就可以把三者展开为泰勒级数：
$$
p(z)=\sum_{k=0}^\infty p_k(z-z_0)^k,q(z)=\sum_{k=0}^\infty q_k(z-z_0)^k,w(z)=\sum_{k=0}^\infty a_k(z-z_0)^k
$$
其中系数$p_k,q_k$已知，$a_k$未知，将这些表达式代入到方程中，合并同幂项，整理为幂级数。由于方程等于零，那么必须每项幂级数的系数等于零。由此可以得到系数$a_k$之间的一系列代数方程，求解这些代数方程，找出$a_k$之间的递推关系，可以用$a_0,a_1$来表示出$a_2,a_3,\cdots$，从而得到级数解。其中$a_0,a_1$可以如此确定：
$$
w(z)=\sum_{l=0}^\infty a_k(z-z_0)^k,\quad w\left(z_0\right)=C_0,w^{\prime}\left(z_0\right)=C_1,\quad a_0=C_0,a_1=C_1
$$

### 3、$l$阶勒让德方程在$x_0=0$邻域上的级数解

$$
(1-x^2)y''-2xy'+\lambda y=0,\lambda=l(l+1)
$$

即：
$$
y'' - \left[ \frac{2x}{1-x^2} \right] y' + \left[ \frac{l(l+1)}{1-x^2} \right] y = 0
$$
方程在复平面上有两个奇点$x=\pm1$。方程的系数$p(x)=-\frac{2x}{1-x^2}$，$q(x)=\frac{l(l+1)}{1-x^2}$，在$x_0=0$，单值函数$p(x_0)=0,q(x_0)=l(l+1)$，均为有限值，它们必然在$x_0=0$处为解析的，因此$x_0=0$为方程的常点，根据常点邻域上解的定理，解具有泰勒展开的形式，即：
$$
y(x)=a_0+a_1x+a_2x^2+a_3x^3+\cdots+a_kx^k+\cdots
$$

$$
y^{\prime}\left(x\right)=a_1+2a_2x+3a_3x^2+4a_4x^3+\cdots+(k+1)a_{k+1}x^k+\cdots
$$

$$
y^{\prime\prime}(x)=2a_2+3\cdot2a_3x+4\cdot3a_4x^2+\cdots+(k+2)(k+1)a_{k+2}x^k+\cdots
$$

将上述级数表达式代入到勒让德方程：
$$
\left(1-x^2\right)\sum_{k=2}^\infty k(k-1)a_kx^{k-2}-2x\sum_{k=1}^\infty ka_kx^{k-1}+\lambda\sum_{k=0}^\infty a_kx^k=0
$$
化简后得到：
$$
\begin{aligned}&-\sum_{k=2}^\infty k(k-1)a_kx^k+\sum_{k=2}^\infty(k+1)(k+2)a_{2+k}x^k-\sum_{k=2}^\infty2ka_kx^k+\lambda\sum_{k=2}^\infty a_kx^k+2a_2x^0+6a_3x^1-2a_1x^1+\lambda a_0x^0+\lambda a_1x^1=0\end{aligned}
$$
由此可见系数$a_k$之间存在如下递推关系（$\lambda=l(l+1)$）：

- 常数项：
  $$
  2a_2+\lambda a_0=0
  $$

- $x^1$项：
  $$
  6a_3-2a_1+\lambda a_1=0
  $$

- $x^k$项：
  $$
  (k+2)(k+1)a_{k+2}-k(k-1)a_k-2ka_k+\lambda a_k=0
  $$
  
  $$
  a_{k+2}=\frac{k^2+k-\lambda}{(k+2)(k+1)}a_k=\frac{(k-l)(k+l+1)}{(k+2)(k+1)}a_k
  $$

显然这个递推关系可以把所有下标为偶数的系数$a_{2k}$用$a_0$表示出来，所有下标为奇数的系数$a_{2k-1}$用$a_1$来表示，因此方程的级数形式通解为：
$$
y(x)=a_0y_0(x)+a_1y_1(x)
$$
其中$y_0(x)$只含$x$的偶数次幂，$y_1(x)$只包含$x$的奇数次幂，二者线性无关。具体为：
$$
\begin{aligned}y_{0}(x)&=1+\frac{(-l)(l+1)}{2!}x^2+\frac{(2-l)(-l)(l+1)(l+3)}{4!}x^4+\cdots\\&+\frac{(2k-2-l)(2k-4-l)\cdots(-l)(l+1)(l+3)\cdots(l+2k-1)}{(2k)!}x^{2k}+\cdots\end{aligned}
$$

$$
\begin{aligned}y_{1}(x)&=x+\frac{(1-l)(l+2)}{3!}x^3+\frac{(3-l)(1-l)(l+2)(l+4)}{5!}x^5+\cdots\\&+\frac{(2k-1-l)(2k-3-l)\cdots(1-l)(l+2)(l+4)\cdots(l+2k)}{(2k+1)!}x^{2k+1}+\cdots\end{aligned}
$$

根据系数关机，计算级数的收敛半径：
$$
\lim_{k\to\infty}\left|\frac{a_{k+2}}{a_k}\right|=\lim_{k\to\infty}\left|\frac{(k-l)(k+l+1)}{(k+2)(k+1)}\right|=1
$$
所以，当$x<1$时$y_0(x),y_1(x)$两级数收敛，$x>1$时两级数发散。当$x=\pm1$时，根据高斯判别法，两级数发散。在$l$阶勒让德方程中，引入的变换是$x=\cos\theta$，所以当$x>1$时，我们不关心，但是需要得知，$x=\pm 1$时，两级数发散，但两级数的和$y(x)$的收敛性。

假设有一个级数解$y(x)$在$x+1$和$x-1$是有限的，$y(x)$可以写为$y_0(x)和y_1(x)$的线性组合：
$$
y(x)=D_0y_0(x)+D_1y_1(x)
$$
如果自变量整体代入$-x$，得到的勒让德方程为：
$$
y(-x)=D_0y_0(-x)+D_1y_1(-x)
$$
由于$y_0(x)$为偶函数，$y_1(x)$是奇函数，则方程可以该写为：
$$
y(-x)=D_0y_0(x)-D_1y_1(x)
$$
那么：
$$
y(x)+y(-x)=2D_0y_0(x)
$$

$$
y(x)-y(-x)=2D_1y_1(x)
$$

所以，如果$y(1)$和$y(-1)$同时有限，那么$y_0(1)$和$y_1(1)$也都是有限的，与前面结论矛盾，故不可能存在一个$x=\pm1$同时收敛的级数解。

但是实际问题中，在$x=\pm 1(\theta=0,\pi)$时必然有限（原因在于自然边界条件），与上面的计算矛盾，所以上面的解不应当是无穷级数，应当退化为多项式，只有有限项解，这样就没有发散问题了。

观察级数解，如果参数$l$是某个偶数，则$y_0(x)$在$x^{2n}$后面的项都为$0$。对于$y_1(x)$，其因系数不包含因子$(2n-1)$，且无穷级数在$x=\pm1$发散，在一般解中只要取$a_1=0$即可得到一个只含偶次幂的$l$词多项式$a_0y_0(x)$，以后将选取适当的$a_0$得到一个特解，称为$l$阶勒让德多项式。对于另个一函数也可以进行相同的处理方法。

由此看来，对于勒让德方程，解在区间$[-1,1]$的两端保持有限是一个严重的限制，在分离变量过程中引入的常数$l(l+1)$中的$l$被限制于零和正整数，通常把解在$x=\pm 1$保持有限说成是勒让德方程的自然边界条件。勒让德方程与自然边界条件构成本征值问题，本征值是$l(l+1)$，本征函数是$l$阶勒让德多项式。

## 三、正则奇点邻域上的级数解法

### 1、奇点邻域上的级数解

求解线性二阶常微分方程：
$$
w''+p(z)w'+q(z)w=0
$$
如果选定的点$z_0$是方程的奇点，则一般说来，方程的解也是以$z_0$为奇点，在点$z_0$邻域上的展开式不是泰勒级数而含有负幂项。

关于奇点邻域上的级数解，存在下面定理（不作证明）：若点$z_0$为方程的奇点，则在点$z_0$的邻域$0<|z-z_0|<R$上，方程存在两个线性独立解，形式为：
$$
w_1(z)=\sum_{k=-\infty}^\infty a_k(z-z_0)^{s_1+k}
$$

$$
w_2(z)=\sum_{k=-\infty}^\infty b_k(z-z_0)^{s_2+k}
$$

或者是：
$$
w_2(z)=Aw_1(z)\ln(z-z_0)+\sum_{k=-\infty}^\infty b_k(z-z_0)^{s_2+k}
$$
其中$s_1,s_2,A,a_k,b_k(k=0,\pm1,\pm2,\cdots)$为常数。

### 2、正则奇点邻域上的级数解

如果方程的奇点$z_0$的邻域$0<|z-z_0|<R$上，方程 的两个线性独立解全部只有有限个负幂项，则奇点$z_0$称为方程的正则奇点。如果系数$p(z)$以$z_0$为不高于一阶的极点，且系数$q(z)$为不高于二阶的极点，即：
$$
p(z)=\sum_{k=-1}^{\infty}p_k(z-z_0)^k,q(z)=\sum_{k=-2}^\infty q_k(z-z_0)^k
$$
可以证明，该奇点为方程的正则奇点，即原方程的解可以表示为：
$$
w_1(z)=\sum_{k=0}^\infty a_k(z-z_0)^{s_1+k}
$$

$$
w_2(z)=\sum_{k=0}^\infty b_k(z-z_0)^{s_2+k}
$$

或者是：
$$
w_2(z)=Aw_1(z)\ln(z-z_0)+\sum_{k=0}^\infty b_k(z-z_0)^{s_2+k}
$$
其中$s_1,s_2$是所谓判定方程的两个根：
$$
s(s-1)+sp_{-1}+q_{-2}=0
$$
$s_2$是较小的那一个根。其中方程解$w_2(z)=\sum_{k=0}^\infty b_k(z-z_0)^{s_2+k}$适用于$(s_1-s_2)\notin \mathbb{Z}$的情况（因为他们一定是这样$w_1,w_2$一定是线性无关的）；方程解$w_2(z)=Aw_1(z)\ln(z-z_0)+\sum_{k=0}^\infty b_k(z-z_0)^{s_2+k}$，适用于$(s_1-s_2)\in \mathbb{Z}$的情况，为什么需要两种情况的讨论，在后面会进行解释，不过如果系数$A$等于零，则又回到前者的类型。

> [!NOTE]
>
> 判定方程又称作指标方程，将级数：
> $$
> w(z)=\sum_{k=0}^\infty a_k(z-z_0)^{s+k}
> $$
> 代入原常微分方程：
> $$
> \begin{aligned}&\sum_{k=0}^\infty(s+k)(s+k-1)a_k\left(z-z_0\right)^{s+k}\\+&\sum_{m=0}^\infty p_m(z-z_0)^m\sum_{k=0}^\infty(s+k)a_k\left(z-z_0\right)^{s+k}\\+&\sum_{m=0}^\infty q_m(z-z_0)^m\sum_{k=0}^\infty a_k\left(z-z_0\right)^{s+k}\\=&0\end{aligned}
> $$
> 合并系数，其中最低幂项（$k=0,m=0$）合并后的系数是：
> $$
> a_0s(s-1)+a_0sp_{-1}+a_0q_{-2}
> $$
> 令它等于零，由于$a_0\neq0$，故可以约掉，得到：
> $$
> s(s-1)+sp_{-1}+q_{-2}=0
> $$
> 就是判定方程。

从判定方程中求得$s$的两个根之后，将实部较大的那个根$s_1$代入到$w_1$中，然后将$w_1$的级数表达式代入到常微分方程中，合并同幂项，按照升幂排列，令各幂项的系数等于零，得到系数$a_k$递推公式，从而得出结果。然后将$s_2$代入到$w_2$中，求出$b_k$的的递推公式，从而求出线性独立的另一级数解，其中$a_0,b_0$是二阶常微分方程的解的两个积分常数。

但是，如果$s_1-s_2=h$，而$h$为零，如果使用直接将$s$代入到$w(z)=\sum_{k=0}^\infty a_k(z-z_0)^{s+k}$中，然后再代入到常微分方程中求解，那么$w_1,w_2$的形式相同，不是线性无关的，所以找不出对应的真正的$w_2$。如果$h$为正整数，那么将判定方程中较小的根$s_2$代入到$w_2$，再代入到微分方程中配凑系数时，发现系数$b_h$无法推出，因为求解$b_h$的递推公式为：
$$
b_{h}\left[(s_{2}+h)(s_{2}+h-1)+p_{-1}(s_{2}+h)+q_{-2}\right]+\cdots+b_{0}\left[s_{2}p_{h-1}+q_{h-2}\right]=0
$$
$b_h$的递推系数展开后就是判定方程，其值为零，$b_h$无法求出。

简单来想，如果$h$是零或者是正整数，那么$w_1,w_2$的级数表达式中，$w_1$后面第$h$项开始，就是$w_2$并两者不是线性无关的。

如何求出呢？先求出$w_1$，然后使用[刘维尔公式](https://www.laoguantx.top/posts/odesolutions5/#heading-2)，求出的$w_2$正是前面提到的形式：
$$
w_2(z)=Aw_1(z)\ln(z-z_0)+\sum_{k=-\infty}^\infty b_k(z-z_0)^{s_2+k}
$$

### 3、贝塞尔方程

在点$x_0=0$的邻域上求解$\nu$阶贝塞尔方程：
$$
x^2y''+xy'+(x^2-\nu^2)y=0
$$
两边同除$x^2$，化为标准形式：
$$
y''+\frac{1}{x}y'+(1-\frac{\nu^2}{x^2})y=0
$$
点$x_0=0$是$p(x)=\frac{1}{x}$的一阶极点，同时又是$q(x)=1-\frac{\nu^2}{x^2}$的二阶极点，因此，点$x_0=0$是贝塞尔方程的正则奇点，判定方程为：
$$
s(s-1)+s-\nu^2=0
$$
即：
$$
s^2-\nu^2=0
$$
两个根$s_1=\nu,s_2=-\nu$。下面分三种情况讨论：

1. $s_1-s_2=2\nu\neq正整数或零$

   此时，方程线性独立的两个解为如下形式：
   $$
   w_1(z)=\sum_{k=0}^\infty a_k(z-z_0)^{s_1+k}
   $$

   $$
   w_2(z)=\sum_{k=0}^\infty b_k(z-z_0)^{s_2+k}
   $$

   先不分$s_1$和$s_2$，记为$s$，将实变数$x$的级数解：
   $$
   y(x)=a_0x^s+a_1x^{s+1}\cdots
   $$
   代入到微分方程中，合并同幂次项，使合并后的系数等于，得到：
   $$
   \begin{cases}\left[s^2-\nu^2\right]a_0=0,\\\left[\left(s+1\right)^2-\nu^2\right]a_1=0,\\\left[\left(s+2\right)^2-\nu^2\right]a_2+a_0=0,\\\cdots\cdots\cdots\cdots\\\left[\left(s+k\right)^2-\nu^2\right]a_k+a_{k-2}=0,\\\cdots\cdots\cdots\cdots\end{cases}
   $$
   由于$a_0\neq0$，则第一个方程为判定方程，两根前面已经求出。将两根代入第二个方程，有：
   $$
   [(\pm \nu+1)^2-\nu^2]a_1=0
   $$
   得到$a_1=0$，利用以后得各式进行系数递推，递推公式为：
   $$
   \begin{aligned}a_{k}&=\frac{-1}{\begin{pmatrix}s+k\end{pmatrix}^2-\nu^2}a_{k-2}\\&=\frac{-1}{(\begin{array}{c}s+k+\nu\end{array})(\begin{array}{c}s+k-\nu\end{array})}a_{k-2}\end{aligned}
   $$
   先取$s_1=\nu$，递推公式为：
   $$
   a_k=-\frac{a_{k-2}}{k(2\nu+k)}
   $$
   于是得到：
   $$
   a_{2k}=(-1)^k\frac{1}{k!(\nu+1)(\nu+2)\cdots(\nu+k)}\cdot\frac{1}{2^{2k}}a_0
   $$

   $$
   a_{2k+1}=0
   $$

   这样得到了$\nu$阶贝塞尔方程的一个特解：
   $$
   \begin{aligned}y_{1}(x)&= a_0x^\nu\bigg[ 1 -\frac{1}{1 ! ( \nu+1 )}\bigg( \frac{x}{2}\bigg) ^2+\frac1{2!(\nu+1)(\nu+2)}\Bigg(\frac x2\Bigg)^4-\cdots\\&+(-1)^k\frac1{k!(\nu+1)(\nu+2)\cdots(\nu+k)}{\left(\frac x2\right)^{2k}+\cdots}\bigg]\end{aligned}
   $$
   由于这个级数相邻两项$x$的幂次差为$x^2$，因此在$z$平面上它的收敛半径$R$为：
   $$
   R^2=\lim_{k\to\infty}|\frac{a_{k-2}}{a_k}|=\lim_{k\to\infty}k(2\nu+k)=\infty
   $$
   也就是说只要$x$有限，级数就收敛。通常取：
   $$
   a_0=\frac{1}{2^\nu}\Gamma(\nu+1)
   $$
   $\Gamma(x)$为伽马函数。将这个节叫做$\nu$阶贝塞尔函数，记作$J_\nu(x)$：
   $$
   J_{\nu}(x)=\sum_{k=0}^{\infty}(-1)^k\frac{1}{k!\Gamma(\nu+k+1)}\left(\frac{x}{2}\right)^{\nu+2k}
   $$
   然后再取$s_2=-\nu$，使用相同的方法，求出另一个特解，即$-\nu$阶贝塞尔函数：
   $$
   J_{-\nu}(x)=\sum_{k=0}^\infty(-1)^k\frac{1}{k!\Gamma(-\nu+k+1)}\left(\frac{x}{2}\right)^{-\nu+2k}
   $$
   因此$\nu$阶贝塞尔方程的通解可以记为：
   $$
   y(x)=C_1J_\nu(x)+C_2J_{-\nu}(x)
   $$
   其中$C_1,C_2$为常数，有时候取$C_1=\cot \nu \pi,C_2=-\csc \nu\pi$代入得到一个特解，以此作为$\nu$阶贝塞尔方程的第二个线性独立的解，叫作$\nu$阶诺依曼函数，即：
   $$
   N_{\nu}(x)=\frac{\mathrm{J}_{\nu}(x)\cos\nu\pi-\mathrm{J}_{-\nu}(x)}{\sin\nu\pi}
   $$
   因此，$\nu$阶贝塞尔方程的通解也可以取为：
   $$
   y(x)=C_1J_\nu(x)+C_2N_{\nu}(x)
   $$

2. $s_1-s_2=2\nu=2l+1(l\in\mathbb{N})$，即$v=l+\frac{1}{2}$为半奇数。此时，方程为：
   $$
   x^2y''+xy'+[x^2-(l+\frac{1}{2})^2]y=0
   $$

   点$x_0$为方程的正则奇点。首先考虑$l=0$的$\frac{1}{2}$阶贝塞尔方程：
   $$
   x^2y''+xy'+[x^2-(\frac12)^2]y=0
   $$
   上例已经解出判定方程的两根，这里为$s_1=\frac12,s_2=-\frac12$，对于大根$s=\frac{1}2$的特解即贝塞尔函数，其中$\nu=\frac12$，这就是$\frac12$阶贝塞尔函数：
   $$
   \begin{aligned}J_{\frac{1}{2}}(x)&=\sum_{k=0}^{\infty}(-1)^{k}\frac{1}{k!\Gamma\left(k+\frac{3}{2}\right)}\left(\frac{x}{2}\right)^{\frac{1}{2}+2k}\\&=\sum_{k=0}^{\infty}\frac{\left(-1\right)^{k}}{k!\left(k+\frac{1}{2}\right)\left(k+\frac{1}{2}-1\right)\cdots\frac{1}{2}\cdot\Gamma\left(\frac{1}{2}\right)}\left(\frac{x}{2}\right)^{\frac{1}{2}+2k}\\&=\sum_{k=0}^{\infty}\frac{(-1)^k}{k!(2k+1)(2k-1)\cdots5\cdot3\cdot1\sqrt{\pi}}\left(\frac{1}{2}\right)^{k-\frac{1}{2}}x^{\frac{1}{2}+2k}\\&=\sqrt{\frac{2x}{\pi}}\sum_{k=0}^\infty\frac{(-1)^k}{2k(2k-2)\cdots4\cdot2\cdot(2k+1)(2k-1)\cdots5\cdot3\cdot1}x^{2k}\\&=\sqrt{\frac{2x}{\pi}}\sum_{k=0}^{\infty}(-1)^{k}\frac{1}{(2k+1)!}x^{2k}\\&=\sqrt{\frac{2}{\pi x}}\sum_{k=0}^{\infty}(-1)^{k}\frac{1}{(2k+1)!}x^{2k+1}\\&=\sqrt{\frac{2}{\pi x}}\sin x\end{aligned}
   $$
   判定方程两根之差$s_1-s_2=1$是整数，第二个特解的形式为：
   $$
   y_2(x)=AJ_\frac12(x)\ln x+\sum_{k=-\frac12}^\infty b_kx^k
   $$
   这里稍微改变了$b$的下标，将上市带入到$\frac12$阶贝塞尔方程中，得到：
   $$
   A\left[x^{2}J_{\frac{1}{2}}^{\prime\prime}+xJ_{\frac{1}{2}}^{\prime}+\left(x^{2}-\frac{1}{4}\right)J_{\frac{1}{2}}\right]\ln x+2AxJ_{\frac{1}{2}}^{\prime}+\sum_{k=-1/2}^{\infty}k\left(k-1\right)b_{k}x^{k}+\sum_{k=-1/2}^{\infty}kb_{k}x^{k}+\sum_{k=-1/2}^{\infty}b_{k}x^{k+2}-\sum_{k=-1/2}^{\infty}\frac{1}{4}b_{k}x^{k}=0
   $$
   $\frac12$阶贝塞尔函数就是$\frac12$阶贝塞尔方程的解，所以中括号内的值为$0$，则上式变为：
   $$
   2AxJ'_{\frac{1}{2}}+\sum_{k=-1/2}^{\infty}\left(k^{2}-\frac{1}{4}\right)b_{k}x^{k}+\sum_{k=-1/2}^{\infty}b_{k}x^{k+2}=0
   $$
   配凑各项系数等于$0$，从$x^{-1/2}$项系数为零，知$b_{-\frac12}$任意，从$x^{1/2}$项系数为零，知$A= 0$ , $b_{\frac 12}$任意。从任意常数$\frac12$推下去，所得各项正好组成$\sqrt{\frac{\pi}2}b_{\frac12}J_{\frac12}(x)$这是我们已经求出的第一解，可以弃之不论，这是说，不妨认为$b_\frac12=0$于是递推出$b_\frac52,b_\frac92,\cdots$全为零。
   从$x^{3/2}$，$x^{7/2}$，$x^{11/2}$，$\cdots$等项的系数为零，得：
   $$
   b_{\frac{3}{2}}=-\frac{1}{2}b_{-\frac{1}{2}}, \quad b_{\frac{7}{2}}=-\frac{1}{4\cdot 3}b_{\frac{3}{2}}=\frac{1}{4!}b_{-\frac{1}{2}}
   $$
   $$
   b_{\frac{11}{2}}=-\frac{1}{6\cdot 5}b_{\frac{7}{2}}=-\frac{1}{6!}b_{-\frac{1}{2}},\cdots
   $$
   于是，求得第二个特解：
   $$
   y_2(x)=b_{-\frac{1}{2}}x^{-\frac{1}{2}}\left(1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots\right)
   =b_{-\frac{1}{2}}\frac{1}{\sqrt{x}}\cos x
   $$
   通常取$b_{-\frac{1}{2}}=\sqrt{\frac{2}{\pi}}$，第二个特解成为
   $$
   J_{-\frac{1}{2}}(x)=\sqrt{\frac{2}{\pi x}}\cos x
   $$
   所以$\frac12$阶贝塞尔方程的通解为：
   $$
   y(x)=C_1J_\frac12(x)+C_2J_{-\frac12}(x)
   $$
   接着考虑一般的半奇数$(l+\frac12)$阶贝塞尔方程，大根$s_1=l+\frac12$的特解应为      $\nu=l+\frac12$阶的贝塞尔函数，即：
   $$
   J_{l+\frac{1}{2}}(x)=\sum_{k=0}^{\infty}\frac{(-1)^{k}}{k!\Gamma(l+1/2+k+1)}\left(\frac{x}{2}\right)^{l+\frac{1}{2}+2k}
   $$
   第二个线性独立的特解形式为：
   $$
   y_2(x)=AJ_{l+\frac{1}{2}}(x)\ln x+\sum_{k=-(l+1/2)}^{\infty}b_{k}x^{k}
   $$
   以此代入方程，可以证明同样有$A=0$所以第二个解仍可以用$-\nu$阶贝塞尔函数的形式表示，即：
   $$
   J_{-\left(l+\frac{1}{2}\right)}(x)=\sum_{k=0}^{\infty}\frac{\left(-1\right)^{k}}{k!\Gamma(-l-1/2+k+1)}\left(\frac{x}{2}\right)^{-l-\frac{1}{2}+2k}
   $$
   所以$(l+\frac12)$阶贝塞尔方程的通解为：
   $$
   y(x)=C_1J_{l+\frac12}(x)+C_2J_{-(l+\frac12)}(x)
   $$

3. $s_1-s_2=2\nu=2m(m\in\mathbb{N})$，即$\nu=m$为整数

   此时方程变为：
   $$
   x^2y''+xy'+(x^2-m^2)y=0
   $$
   对应大根$s_1=m$的特解仍为贝塞尔函数，不过取$\nu=m$，即整数$m$阶贝塞尔函数：
   $$
   J_{m}(x)=\sum_{k=0}^{\infty}(-1)^{k}\frac{1}{k!(m+k)!}\left(\frac{x}{2}\right)^{m+2k}
   $$
   对应的小根$s_2=-m$的特解，这里先尝试仍求贝塞尔函数形式的阶，即：
   $$
   J_{-m}(x)=\sum_{k=0}^{\infty}(-1)^{k}\frac{1}{k!\Gamma(-m+k+1)}\left(\frac{x}{2}\right)^{-m+2k}
   $$
   由于非正的整数的$\Gamma$函数为无穷大，所以级数实际上可以从$k=m$开始，并令$l=k-m$：
   $$
   \begin{aligned}J_{-m}(x)&=\sum_{l=0}^{\infty}\left(-1\right)^{l+m}\frac{1}{\left(l+m\right)!\Gamma\left(l+1\right)}\left(\frac{x}{2}\right)^{m+2l}\\&=(-1)^{m}\sum_{l=0}^{\infty}(-1)^{l}\frac{1}{(l+m)!l!}\left(\frac{x}{2}\right)^{m+2l}\\&=(-1)^{m}J_{m}(x)\end{aligned}
   $$
   与第一个特解线性相关，不可用，所以采用如下形式：
   $$
   y_2(x)=AJ_m(x)\ln x+\sum_{k=0}^{\infty}b_kx^{-m+k}
   $$
   将上式带入$m$阶贝塞尔方程，得到：
   $$
   A\left[x^{2}J_{m}^{\prime\prime}+xJ_{m}^{\prime}+\left(x^{2}-m^{2}\right)J_{m}\right]\ln x+2AxJ_{m}^{\prime}+\sum_{k=0}^{\infty}\left[\left(-m+k\right)^{2}-m^{2}\right]b_{k}x^{-m+k}+\sum_{k=2}^{\infty}b_{k-2}x^{-m+k}=0
   $$
   其中第一个中括号内的值为$0$，另外，$2AxJ_m'(x)=2A\sum_{n=0}^{\infty}\frac{(-1)^{n}(m+2n)}{n!(m+n)!}\left(\frac{x}{2}\right)^{m+2n}$的最低幂项为$x^m$项，先把上式中幂次低于$m$的项（即$k<2m$的项）合并，得到$b_0$可以任意取，$b_{2m-2}=\frac{m^2}{2^{2m-2}(m!)^2}b_0$。其次，观察$x^m$项，合并后系数为零，得到$b_{2m}$可以任意取，$A=-\frac{m!2^{m-1}}{m}b_{2m-2}=\frac{-2m}{2^{m}m!}b_{0}$。并且不难验证，从任意常数$b_{2m}$递推下去，所得各项正好组成$b_{2m}J_m(x)$，这是我们所求的第一解，可以放弃不管，不妨认为$b_{2m}=0$，最后把上式幂次高于$m$的项幂次合并后，分别等于零，得到：
   $$
   b_{2m+2n}=\frac{m}{m!2^{m}}\cdot\frac{(-1)^{n}}{n!(m+n)!}\left(\frac{1}{2}\right)^{m+2n}\times\left[\left(\frac{1}{n}+\frac{1}{n-1}+\cdots+\frac{1}{2}+1\right)+\left(\frac{1}{m+n}+\frac{1}{m+n-1}+\cdots+\frac{1}{m+1}\right)\right]b_{0}
   $$
   
   $$
   b_{2m+2n+1}=0
   $$
   
   于是求得第二个特解：
   $$
   y_{2}(x)=\frac{mb_{0}}{m!2^{m}}\left[(-2\mathrm{ln}x)J_{m}(x)+\sum_{n=0}^{m-1}\frac{(m-n-1)!}{n!}\left(\frac{x}{2}\right)^{-m+2n}+\sum_{n=1}^{\infty}\frac{\left(-1\right)^{n}}{n!\left(m+n\right)!}\left[\left(\frac{1}{n}+\frac{1}{n-1}+\cdots+\frac{1}{2}+1\right)+\left(\frac{1}{m+n}+\cdots+\frac{1}{m+2}+\frac{1}{m+1}\right)\right]\left(\frac{x}{2}\right)^{m+2n}\right]
   $$
   通常取$b_0=-\frac{m!2^m}{m\pi}$，即：
   $$
   y_{2}(x)=\frac{1}{\pi}\left[(-2\mathrm{ln}x)J_{m}(x)+\sum_{n=0}^{m-1}\frac{(m-n-1)!}{n!}\left(\frac{x}{2}\right)^{-m+2n}+\sum_{n=1}^{\infty}\frac{\left(-1\right)^{n}}{n!\left(m+n\right)!}\left[\left(\frac{1}{n}+\frac{1}{n-1}+\cdots+\frac{1}{2}+1\right)+\left(\frac{1}{m+n}+\cdots+\frac{1}{m+2}+\frac{1}{m+1}\right)\right]\left(\frac{x}{2}\right)^{m+2n}\right]
   $$
   并把这个特解与$\left[\frac{2}{\pi}(C-\ln2)-\frac{1}{\pi}\left(\frac{1}{m}+\cdots+\frac{1}{2}+1\right)\right]J_{m}(x)$的和叫做$m$阶诺伊曼函数，记作$N_m(x)$。
   $$
   N_{m}(x)=\frac{2}{\pi} J_{m}(x) \ln \frac{x}{2}-\frac{1}{\pi} \sum_{n=0}^{m-1} \frac{(m-n-1) !}{n !}\left(\frac{x}{2}\right)^{-m+2 n}
   -\frac{1}{\pi m !}\left(\frac{1}{m}+\cdots+\frac{1}{2}+1-2 C\right)\left(\frac{x}{2}\right)^{m}-\frac{1}{\pi} \sum_{n=1}^{\infty} \frac{(-1)^{n}}{n !(m+n) !}[\psi(m+n+1)+\psi(n+1)]\left(\frac{x}{2}\right)^{m+2 n}
   $$
   $\psi(z)$是$\gamma$函数的对数导数，其中$C$为欧拉常数：
   $$
   C=\lim_{k\to\infty}\left(\sum_{i=1}^\infty \frac1i-\ln k\right)=0.577215664901\cdots
   $$
   如果$m=0$，零阶贝塞尔方程为为：
   $$
   x^{2}y^{\prime\prime}+xy^{\prime}+x^{2}y=0
   $$
   首先写出第一个特解，即零阶贝塞尔函数，然后将第二个特解设为：
   $$
   y_2(x)=AJ_0(x)\ln x+\sum_{k=0}^\infty b_kx^k
   $$
   带入到零阶贝塞尔方程中，得到：
   $$
   A\left(x^{2}J_{0}^{\prime\prime}+xJ_{0}^{\prime}+x^{2}J_{0}\right)\ln x+2AxJ_{0}^{\prime}+\sum_{k=0}^{\infty}k^{2}b_{k}x^{k}+\sum_{k=0}^{\infty}b_{k}x^{k+2}=0
   $$
   上式括号中的内容为零阶贝塞尔方程的解，值为$0$，所以上式可以写为：
   $$
   2A\sum_{k=0}^{\infty}\frac{\left(-1\right)^{k}2k}{\left(k!\right)^{2}}\left(\frac{x}{2}\right)^{2k}+\sum_{k=0}^{\infty}k^{2}b_{k}x^{k}+\sum_{k=0}^{\infty}b_{k}x^{k+2}=0
   $$
   合并同幂项，系数为零，进行递推，得到$b_1=0$，$b_0$可以取任意常数，并且：
   $$
   b_{2n}=\begin{pmatrix}-1\end{pmatrix}^n\frac{b_0}{2^{2n}\begin{pmatrix}n!\end{pmatrix}^2}-\frac{\begin{pmatrix}-1\end{pmatrix}^nA}{2^{2n}\begin{pmatrix}n!\end{pmatrix}^2}\left(\begin{array}{c}1\\n\end{array}+\frac{1}{n-1}+\cdots+\frac{1}{2}+\frac{1}{1}\right)
   $$
   于是求得第二个特解：
   $$
   y_2(x)=AJ_0(x)\ln x+b_0\sum_{n=0}^{\infty}\frac{(-1)^n}{2^{2n}(n!)^2}x^{2n}-A\sum_{n=1}^{\infty}\frac{(-1)^n}{2^{2n}(n!)^2}\left(\frac{1}{n}+\cdots+\frac{1}{2}+1\right)x^{2n}
   $$
   
   通常取$A=\frac2\pi$，并将上式与$\frac{2}{\pi}J_0(x)(C-\ln2)-b_0J_0(x)$的线性组合叫做零阶诺依曼函数$N_0(x)$，于是得到：
   $$
   N_0(x)=\frac{2}{\pi}J_0(x)\ln\frac{x}{2}-\frac{2}{\pi}\sum_{n=0}^\infty\frac{(-1)^n}{(n!)^2}\psi(n+1)\left(\frac{x}{2}\right)^{2n}
   $$

要求整数$m$阶的贝塞尔方程的第二个线性独立的解，也可以使用$\nu$阶诺依曼函数，当$\nu$趋近于整数$m$时的结果，使用洛必达法则：
$$
\lim_{\nu\to m}N_{\nu}(x)=\lim_{\nu\to m}\frac{J_{\nu}(x)\cos\nu\pi-J_{-\nu}(x)}{\sin\nu\pi}
$$
得到：
$$
\lim_{\nu\to m}N_{\nu}(x)=N_m(x)=\frac{2}{\pi}J_m(x)\ln\frac{x}{2}-\frac{1}{\pi}\sum_{n=0}^{m-1}\frac{(\begin{array}{c}m-n-1\end{array})!}{n!}\left(\frac{x}{2}\right)^{-m+}-\frac{1}{\pi}\sum_{n=0}^\infty\frac{(-1)^n}{n!(m+n)!}[\psi(m+n+1)+\psi(n+1)]\left(\frac{x}{2}\right)^{m+2n}
$$
即整数$m$阶诺依曼函数，为整数$m$阶贝塞尔方程的跟$J_m(x)$线性无关的第二个特解。

当$x\to0$时，可以得到：
$$
\begin{cases}\mathrm{J}_0(x){\to}1\mathrm{,J}_\nu(x){\to}0\mathrm{,J}_{-\nu}(x){\to}\infty\\\mathrm{N}_\nu(x){\to}\pm\infty\mathrm{,N}_m(x){\to}-\infty\mathrm{,}\quad\nu{>}0&\end{cases}
$$
因此，如果所研究的区域包含$x=0$在内，往往要排除$N_0(x),N_m(x),J_{-v}(x),N_\nu(x)$，只剩下$J_0(x),J_m(x),J_\nu(x)$，这是贝塞尔方程的自然边界条件。

## 四、施图姆-刘维尔本征值问题

### 1、施图姆-刘维尔型方程

对于带未知参数的常微分方程边值问题，只有参数取某些特定值时，常微分方程才有非零解。这些特定值叫做本征值，相应的非零解叫作本征函数。求本征值和本征函数的问题叫作本征值问题。常见的本征值问题都可以表示为施图姆-刘维尔本征值问题标准形式。形式为：
$$
\frac{\mathrm{d}}{\mathrm{d}x}\left[k\left(x\right)\frac{\mathrm{d}y}{\mathrm{d}x}\right]-q\left(x\right)y+\lambda\rho\left(x\right)y=0\quad(a\leq x\leq b)
$$
上面的二阶常微分方程叫做施图姆-刘维尔型方程。一般的二阶常微分方程：
$$
y^{\prime\prime}+a\begin{pmatrix}x\end{pmatrix}y^{\prime}+b\begin{pmatrix}x\end{pmatrix}y+\lambda c\begin{pmatrix}x\end{pmatrix}y=0
$$
乘上适当的系数$e^{\int a(x)\mathrm{d}x}$，即可化为施图姆-刘维尔型方程：
$$
\frac{\mathrm{d}}{\mathrm{d}x}\left[\mathrm{e}^{\int a(x)\mathrm{d}x}\frac{\mathrm{d}y}{\mathrm{d}x}\right]+\left[b(x)\mathrm{e}^{\int a(x)\mathrm{d}x}\right]y+\lambda\left[c(x)\mathrm{e}^{\int a(x)\mathrm{d}x}\right]y=0
$$
施图姆-刘维尔型方程附加边界条件，就构成了施图姆-刘维尔本征值问题。

### 2、不同类型的施图姆-刘维尔本征值方程

#### (1) 两端固定弦的振动问题以及热传导问题

$$
\begin{cases}y^{\prime\prime}+\lambda y=0\\y(0)=0,y(l)=0\end{cases}
$$

本征值和本征函数分别为：

$$
\lambda_n=\frac{n^2\pi^2}{l^2},y_n(x)=\sin\frac{n\pi}lx
$$

#### (2) 勒让德方程本征值问题

$$
\begin{cases}\frac{\mathrm{d}}{\mathrm{d}x}\left[(1-x^2)\frac{\mathrm{d}y}{\mathrm{d}x}\right]+\lambda y=0\\|y(\pm1)|<M&\end{cases}
$$

第一个方程可以写为：
$$
(1-x^2)y^{\prime\prime}-2xy^{\prime}+\lambda y=0
$$

#### (3) 连带勒让德方程本征问题

$$
\begin{cases}\frac{\mathrm{d}}{\mathrm{d}x}[(1-x^2)\frac{\mathrm{d}y}{\mathrm{d}x}]-\frac{m^2}{1-x^2}y+\lambda y=0\\\left|y(\pm1)\right|<M&\end{cases}
$$

#### (4) 贝塞尔方程本征值问题

$$
\begin{cases}\frac{\mathrm{d}}{\mathrm{d}\xi}[\xi\frac{\mathrm{d}y}{\mathrm{d}\xi}]-\frac{m^2}{\xi}y+\lambda\xi y=0\\\left|y(0)\right|<\infty,y(\xi_0)=0&&\end{cases}
$$

#### (5)  球坐标和柱坐标下

$$
\begin{cases}\Phi^{\prime\prime}+m^2\Phi=0\\\Phi(2\pi+\varphi)=\Phi(\varphi)&&\end{cases}
$$

#### (6) 拉盖尔方程

$$
\frac {\mathrm{d}}{\mathrm{d}x}\big[x\mathrm{e}^{-x}\frac{\mathrm{d}y}{\mathrm{d}x}\big]+\lambda\mathrm{e}^{-x}y=0
$$

$y(0)$有限，于$x\to\pm\infty$,$y$的增长不快于$\mathrm{e}^\frac x2$。

$x=0$是正则奇点，可以找到其级数解：
$$
y(x)=a_{0}\left[1+\frac{-\lambda}{(1!)^{2}}x+\frac{(-\lambda)(1-\lambda)}{(2!)^{2}}x^{2}+\cdots+\frac{(-\lambda)(1-\lambda)\cdots(k-1-\lambda)}{(k!)^{2}}x^{k}+\cdots\right]
$$
$\lambda$为整数时退化为多项式，称为拉盖尔多项式。

#### (7) 埃尔米特方程

$$
\frac{\mathrm{d}}{\mathrm{d}x}\left[\mathrm{e}^{-x^2}\frac{\mathrm{d}y}{\mathrm{d}x}\right]+\lambda\mathrm{e}^{-x^2}y=0
$$

于$x\to\pm\infty$,$y$的增长不快于$\mathrm{e}^\frac x2$。$x=0$是常点，其级数解有两个独立分支，当$\lambda$为$4$的倍数时退化为多项式，称为埃尔米特多项式。

### 3、施图姆-刘维尔本征值问题的自然边界条件限制以及共同性质

1. 端点是$a$或$b$若是$k(x)$的一阶零点，在那个端点上就存在边界条件。

   > **证明**：
   >
   > 施图姆-刘维尔型方程：
   > $$
   > \frac{\mathrm{d}}{\mathrm{d}x}\left[k\left(x\right)\frac{\mathrm{d}y}{\mathrm{d}x}\right]-q\left(x\right)y+\lambda\rho\left(x\right)y=0\quad(a\leq x\leq b)
   > $$
   > 展开得：
   > $$
   > y^{\prime\prime}+\frac{k^{\prime}(x)}{k(x)}y^{\prime}+\frac{-q(x)+\lambda\rho(x)}{k(x)}y=0
   > $$
   > 如果端点$x=a$是$k(x)$的一阶零点，只要$x=a$是$-q(x)+\lambda \rho(x)$不高于一阶的零点（上述各例都满足），它就是方程的正则奇点。先利用洛必达法则，计算判定方程中的$p_{-1}$：
   > $$
   > p_{-1}=\begin{bmatrix}p(x)(x-a)\end{bmatrix}|_{x=a}=\begin{bmatrix}k^{\prime}(x)\frac{x-a}{k(x)}\end{bmatrix}|_{x=a}=1
   > $$
   > 于是判定方程称为：
   > $$
   > s^2+q_{-2}=0
   > $$
   > 两个根为：
   > $$
   > s_1=\sqrt{-q_{-2}},s_2=-\sqrt{-q_{-2}}
   > $$
   > 物理上有意义问题，根为实数，或者一正一负，或者同为$0$。对应于负根解含有$(x-a)$的负幂项，因而在$x=a$成为无限大。如果两根均为$0$，有一个解含有$\ln (x-a)$项，因而在$x=a$成为无限大。所以必须加入自然边界条件。

2. 如果$k(x),k'(x),q(x)$连续或者最多以$x=a$和$x=b$为一阶极点，则存在无限多个本征值和本征函数。

3. 所有本征值$\lambda_n\ge 0$。

   > 本征函数 $y_{n}(x)$ 和本征值 $\lambda_{n}$ 满足：
   > $$
   > -\frac{\mathrm{d}}{\mathrm{d}x}\left[k(x) \frac{\mathrm{d}y_{n}}{\mathrm{d}x}\right]+q(x) y_{n}=\lambda_{n} \rho(x) y_{n}
   > $$
   > 用 $y_{n}$ 遍乘各项，并逐项从 $a$ 到 $b$ 积分，得：
   > $$
   > \begin{aligned}\lambda_{n} \int_{a}^{b} \rho y_{n}^{2} \mathrm{d}x&=-\int_{a}^{b} y_{n} \frac{\mathrm{d}}{\mathrm{d}x}\left[k \frac{\mathrm{d}y_{n}}{\mathrm{d}x}\right] \mathrm{d}x+\int_{a}^{b} q y_{n}^{2} \mathrm{d}x
   > \\&=-\left[k y_{n} \frac{\mathrm{d}y_{n}}{\mathrm{d}x}\right]_{a}^{b}+\int_{a}^{b} k\left(\frac{\mathrm{d}y_{n}}{\mathrm{d}x}\right)^{2} \mathrm{~d}x+\int_{a}^{b} q y_{n}^{2} \mathrm{d}x
   > \\&=\left(k y_{n} y_{n}^{\prime}\right)_{x=a}-\left(k y_{n} y_{n}^{\prime}\right)_{x=b}+\int_{a}^{b} k\left(y_{n}^{\prime}\right)^{2} \mathrm{~d}x+\int_{a}^{b} q y_{n}^{2} \mathrm{d}x\end{aligned}
   > $$
   > 右边两个积分的被积函数只取$\ge 0$的值，所以两个积分值大于零。对于$(ky_ny_n^{\prime})_{x=a}$，如果在端点$x=a$的边界条件是第一类齐次条件$y_n(a)=0$，或第二类齐次条件$y_n^{\prime}(a)=0$，或自然边界条件 $k(a)=0$，这一项$(ky_ny_n^{\prime})_x=a$显然为零，如果在端点 $x=a$ 的边界条件是第三类齐次条件$(y_n-hy_n^{\prime})_{x=a}=0$，则：
   >
   > $$
   > (ky_ny_n^{\prime})_{x=a}=[k(y_n-hy_n')y_n'+hky_n'^2]_{x=a}=h({c}ky_n'^2)_{x=a}\ge 0
   > $$
   >
   > 再看$-(ky_ny_n^{\prime})_x=b$，如果端点 $x=b$ 的边界条件是第一类齐次条件$y_n(b)=0$,或第二类齐次条件$y_n^\prime(b)=0$，或自然边界条件 $k(b)=0$，这一项$(ky_ny_n')_x=b$显然为零. 如果在端点 $x=b$ 的边界条件是第三类齐次条件$(y_n+hy_n')_x=b=0$，则：
   > $$
   > (ky_ny_n')_{x=b}=[k(y_n-hy_n')y_n'+hky_n'^2]_{x=b}=h({c}ky_n'^2)_{x=b}\ge 0
   > $$
   > 既然右边各项都$\ge0$，左边必然也$\ge0$，即：
   > $$
   > \lambda_n\int_a^b\rho y_n^2\mathrm{d}x\ge0
   > $$
   >
   >
   > 上式里的定积分明显是正的，因而
   >
   > $$
   > \lambda_n\geqslant0
   > $$

4. 相应于不同本征值$\lambda_m$和$\lambda_n$的本征函数$y_m(x)$和$y_n(x)$在区间$[a,b]$上带权重$\rho(x)$正交，即：
   $$
   \int_a^by_m(\begin{array}{c}x\end{array})y_n(\begin{array}{c}x\end{array})\rho(\begin{array}{c}x\end{array})\mathrm{d}x=0\quad(\begin{array}{c}n\neq m\end{array})
   $$

   > **证明**：
   >
   > 本征函数$y_m,y_n$分别满足：
   > $$
   > \frac{\mathrm{d}}{\mathrm{d}x}{\left[ky_m^{\prime}\right]}-qy_m+\lambda_m\rho y_m=0
   > $$
   >
   > $$
   > \frac{\mathrm{d}}{\mathrm{d}x}{\left[ky_n^{\prime}\right]}-qy_n+\lambda_n\rho y_n=0
   > $$
   >
   > 前一式遍乘$y_n$，后一式遍乘$y_m$，然后相减：
   > $$
   > y_n\frac{\mathrm{d}}{\mathrm{d}x}[ky_m^{\prime}]-y_m\frac{\mathrm{d}}{\mathrm{d}x}[ky_n^{\prime}]+(\lambda_m-\lambda_n)\rho y_my_n=0
   > $$
   > 积分得：
   > $$
   > \left(ky_{n}y_{m}^{\prime}-ky_{m}y_{n}^{\prime}\right)_{x=b}-\left(ky_{n}y_{m}^{\prime}-ky_{m}y_{n}^{\prime}\right)_{x=a}+\left(\lambda_{m}-\lambda_{n}\right)\int_{a}^{b}\rho y_{m}y_{n}dx=0
   > $$
   > 在边界条件下，前两项值分别为$0$，即：
   > $$
   > (\lambda_m-\lambda_n)\int_a^b\rho y_my_n\mathrm{d}x=0
   > $$
   > 既然$\lambda_m\neq\lambda_n$，所以：
   > $$
   > \int_a^by_m(\begin{array}{c}x\end{array})y_n(\begin{array}{c}x\end{array})\rho(\begin{array}{c}x\end{array})\mathrm{d}x=0\quad(\begin{array}{c}n\neq m\end{array})
   > $$

5. 本征函数族 $y_1(x),y_2(x),y_3(x),\cdots$是完备的，这是说，函数$f(x)$如具有连续一阶导数和分段连续二阶导数，且满足本征函数族所满足的边界条件，就可以展开为绝对且一致收敛的级数。
   $$
   f(x)=\sum_{n=1}^\infty f_n y_n(x)
   $$
   方程右边的级数称为[广义傅里叶级数](https://www.laoguantx.top/posts/fouriertransform#heading-9)，$f_n(n\in \mathbb{N}_+)$被称为广义傅里叶系数，$y_n(n\in\mathbb{N}_+)$被称为级数展开的基。
