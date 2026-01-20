---
title: 分离变量法
published: 2025-11-14
category: ["数学", "数学物理方法"]
tags: ["数学物理方程", "偏微分方程"]
alias: "separationofvariables"
---
## 一、分离变量法的理论基础

### 1、线性问题的叠加原理

非齐次线性微分方程的解可以分解成一个非齐次方程的特解与多个齐次微分方程解的叠加；对于非齐次的边界条件，也可以把它拆分成一个特定非齐次边界条件与多个齐次边界条件的叠加。把拆分后的微分方程与边界条件进行组合，从而可以把原来比较复杂、难以求解的问题简化为一些比较容易、易于求解问题的叠加。

### 2、线性问题形式上的变量分离

将$u(x,t)$进行变量分离：
$$
u(x,t)=X(x)T(t)
$$
这样做的目的是通过引入一些特定的参数（例如特征值），把偏微分方程转化为常微分方程的问题。

## 二、齐次方程的分离变量法

### 1、齐次方程和齐次边界条件的分离变量法

#### (1) 问题求解

与行波法不同，行波法研究的是无限长的弦，而这里是研究有限长度$l$的两端固定均匀弦的自由振动。自由振动的方程式齐次的：
$$
u_{tt}-a^2u_{xx}=0
$$
边界条件也是齐次的：
$$
u|_{x=0}=0,u|_{x=l}=0
$$
初始条件是非齐次的：
$$
u|_{t=0}=\varphi(x),u_t|_{t=0}=\psi(x)
$$

>  [!NOTE]
>
> 如果三者都是齐次的，那就不用解了，就是零。

根据叠加原理，该齐次方程的解可以分解成一系列满足齐次边界条件与齐次方程解的叠加：
$$
u=\sum^n_{i=1}\alpha_iu_i
$$
根据叠加原理，每一个解都满足齐次的微分方程和边界条件，但是不满足非齐次的初始条件。简单起见，先省去下标$i$，研究每一个解，对于每一个解可以表示成分离变量形式：
$$
u(x,t)=X(x)T(t)
$$
把该解代入到齐次的微分方程：
$$
u_{tt}=X(x)T''(t)
$$

$$
u_{xx}=X''(x)T(t)
$$

回代后的微分方程为：
$$
XT''-a^2X''T=0
$$
整理方程，使方程左边与$x$无关，右边与$y$无关：
$$
\frac{T''}{a^2T}=\frac{X''}{X}=-\lambda
$$
在上式中，若是想要方程两边的函数值都相等，由于$x,t$没有关系，所以它们的值应当都等于一个相同的常数，其中$\lambda$为一个待定的常数，也就是说：
$$
X''+\lambda X=0
$$

$$
T''+\lambda a^2 T=0
$$

考虑到边界条件（两端固定）也是齐次的：
$$
u|_{x=0}=0,u|_{x=l}=0
$$
对于任意的$t$都成立，则：
$$
X(0)T(t)=0,X(l)T(t)=0
$$
而$T(t)\neq0$，否则原方程为零解，故：
$$
X(0)=X(l)=0
$$
因此，对于函数$X(x)$，必须满足常微分方程的初值问题：
$$
X''+\lambda X=0,X(0)=X(l)=0
$$
我们把上式这种应用分离变量后得到的微分方程和相应的边界条件成为相应原来偏微分方程初值问题的本征值问题。使得该本征值问题有非零解的常数$\lambda$称为本征值（或特征值），相应的解$X(x)$称为本征函数（或特征函数）

如果$\lambda<0$，根据常微分方程的求解方法：
$$
X(x)=C_1e^{-\sqrt{-\lambda x}}+C_2e^{-\sqrt{\lambda x}}
$$
将边界条件代入后，得到两个线性代数方程，发现$C_1=C_2=0$，意味着$X=0$，该讨论无意义，故$\lambda<0$无意义。

如果$\lambda=0$，常微分方程求解为：
$$
X(x)=C_1+C_2x
$$
代入边界条件后，同样发现$C_1=C_2=0$，故$\lambda=0$无意义。

所以，$\lambda>0$，为了书写方便，记$\lambda=k^2$，求解得到：
$$
X(x)=C_1\cos kx+C_2\sin kx
$$
将边界条件代入，得：
$$
\begin{cases}
C_1=0\\
C_1\cos kl+C_2 \sin kl=0
\end{cases}
$$
要求$X(x)$有非零解，必须$C_2\neq0$，那么只有：
$$
\sin kl=0
$$
解得：
$$
k=\frac{n\pi}l, \quad n\in\mathbb{N}_+
$$
这样$X(x)$的解（本征方程）为：
$$
X_n(x)=C_2\sin\frac{n\pi x}{l}
$$
该解满足齐次方程和齐次边界条件。现在我们得到了$X(x)$的表达式以及$\lambda$的值：
$$
\lambda=k^2=\frac{\pi^2n^2}{l^2},\quad n\in \mathbb{N}_+
$$
把相应的$\lambda$代入到$T(t)$的微分方程：
$$
T''+\frac{\pi^2n^2}{l^2} a^2 T=0
$$
使用常微分方程解法求解得到$T$的表达式：
$$
T_n(t)=A_n\cos\frac{n\pi at}{l}+B_n\sin\frac{n\pi at}{l},\quad n\in \mathbb{N}_+
$$
也就是说，与$n$有关的解为：
$$
u_n(x,t)=X_n(x)T_n(t)=\left(A_n\cos\frac{n\pi at}{l}+B_n\sin\frac{n\pi at}{l}\right)\sin\frac{n\pi x}{l},\quad n\in\mathbb{N}_+
$$
该解称为本征振动，由求解过程可知，本征值和本征函数与边界条件密切相关。显然，这个形式的解满足相应的齐次方程和齐次的边界条件，由于方程和边界条件都是线性，这些解的叠加也满足原来的齐次方程和齐次的边界条件。
$$
\sum_{n=1}^\infty u_n(x,t)=\sum_{n=1}^\infty\left(A_n\cos\frac{n\pi at}{l}+B_n\sin\frac{n\pi at}{l}\right)\sin\frac{n\pi x}{l}
$$
上式中的系数$A_n,B_n$需要根据初始条件来确定。由于每个驻波（本征振动）都满足齐次方程和齐次边界条件，根据叠加原理，假设解为驻波的合成：
$$
u(x,t)=\sum_{n=1}^\infty\left(A_n\cos\frac{n\pi at}{l}+B_n\sin\frac{n\pi at}{l}\right)\sin\frac{n\pi x}{l}
$$
合成后的解要满足$t=0$初始条件：
$$
u|_{t=0}=\varphi(x),u_t|_{t=0}=\psi(x)
$$
因此有：
$$
\sum_{n=1}^\infty A_n\sin\frac{n\pi x}{l}=\varphi(x)
$$

$$
\sum_{n=1}^\infty B_n\frac{n\pi a}{l}\sin\frac{n\pi x}{l}=\psi(x)
$$

联系傅里叶正弦级数展开，或者利用傅里叶正弦级数的正交性，根据傅里叶级数展开的唯一性，得到：：
$$
A_n=\frac{2}{l}\int_0^l\varphi(\xi)\sin\frac{n\pi\xi}{l}\mathrm{d}\xi
$$

$$
B_n=\frac{2}{n\pi a}\int_0^l\psi(\xi)\sin\frac{n\pi\xi}{l}\mathrm{d}\xi
$$

到此，我们得到了最终的解：
$$
u(x,t)=\sum_{n=1}^\infty\left(A_n\cos\frac{n\pi at}{l}+B_n\sin\frac{n\pi at}{l}\right)\sin\frac{n\pi x}{l}
$$

$$
A_n=\frac{2}{l}\int_0^l\varphi(\xi)\sin\frac{n\pi\xi}{l}\mathrm{d}\xi
$$

$$
B_n=\frac{2}{n\pi a}\int_0^l\psi(\xi)\sin\frac{n\pi\xi}{l}\mathrm{d}\xi
$$

该解称为古典解。由于级数的系数由$\varphi,\psi$所确定，因此只有当$\varphi,\psi$满足傅里叶级数展开的收敛条件时，解才收敛。

#### (2) 物理意义

我们来看本征振动问题的物理意义，对于：
$$
u(x,t)=\sum_{n=1}^\infty\left(A_n\cos\frac{n\pi at}{l}+B_n\sin\frac{n\pi at}{l}\right)\sin\frac{n\pi x}{l}
$$
括号内的内容表示每一个点的谐振，括号外的内容表示每个点的振幅。每一个质点（固定$x$）作振幅不等的简谐运动，每个点的振幅与位置有关。其中振幅为零的点称为节点或波节，振幅最大的点则位于两个节点之间，我们称之为腹点或波腹。节点静止不动，所以波形没有传播（叫驻波）。相邻两个节点之间的距离$l/n$称为半波长。$n = 1$的驻波称为基波，其他的驻波称为$n$次谐波。两个波长、周期、频率和波速皆相同的正弦波相向行进干涉而成的合成波 ，均可产生这个现象，其结果是在一系列固定的位置产生波腹（即振动加强点）和波节（即振动减弱点） 。

> [!TIP]
>
> **齐次方程分离变量法总结**：
>
> 1. 先假设解能写成分离变量的形式。
> 2. 把分离变量形式代入微分方程后，得到两个独立的常微分方程（由常数相关联）。
> 3. 把分离变量形式代入齐次边界条件，得到相应的齐次的边界条件。
> 4. 其中一个常微分方程和齐次边界条件组成一个本征值问题，求解后得到相应的本征值和本征函数。
> 5. 把相应的本征值代入另外一个常微分方程，并求出该微分方程的通解。
> 6. 本征函数和上面的通解合成为驻波解（或本征振动）。
> 7. 驻波的线性叠加假设为原方程的解，代入初始条件。
> 8. 把初始条件展开为傅里叶级数，比较系数后可以得到每个驻波的系数。

### 2、齐次方程和齐次边界条件的分离变量法的应用

#### (1) 两端自由的有限长细长杆的振动问题

该问题的定解问题为：
$$
u_tt-a^2u_xx=0
$$

$$
u_x|_{x=0}=u_x|_{x=l}=0
$$

$$
u|_{t=0}=\varphi(x),u_t|_{t=0}=\psi(x)
$$

假设分离变量的形式为：
$$
u(x,t)=X(x)T(t)
$$
代入到泛定方程和边界条件能够得到本征值为：
$$
X''+\lambda X=0\qquad X'(0)=0,X'(l)=0
$$
和前面的推导方法相同进行分类讨论，得出只有当$\lambda=k^2>0$时，得出：
$$
k=\frac{n\pi}{l},n\in\mathbb{N}_+
$$
得到本征方程：
$$
X_n(x)=C_n\cos\frac{n\pi}{l}x,n\in\mathbb{N}_+
$$
对应的$T(t)$解为：
$$
T_n(t)=A_n\cos\frac{n\pi at}{l}+B_n\sin\frac{n\pi at}{l}
$$

$$
T(0)=A_0+B_0t
$$

因此原方程的解为：
$$
u(x,t)=A_0+B_0t+\sum_{n=1}^\infty\left(A_n\cos\frac{n\pi at}{l}+B_n\sin\frac{n\pi at}{l}\right)\cos\frac{n\pi}{l}x
$$
代入初始条件得到：
$$
A_0+\sum_{n=1}^\infty A_n\cos\frac{n\pi}{l}x=\varphi(x)
$$

$$
(B_0t+\sum_{n=1}^\infty B_n\frac{n\pi at}{l})'|_{t=0}=\varphi(x)\Rightarrow B_0+\sum_{n=1}^\infty\frac{n\pi a}{l}B_n\cos\frac{n\pi}{l}x=\psi(x)
$$

#### (2) 有限长细长杆的热传导问题

有限长杆的热传导问题。长为$l$细长杆， 侧面绝热，左端温度为零，右端与温度为零的介质进行自由传热。已知初始温度分布为$\varphi(x)$。该问题可以简化为一维杆的传热问题，定解问题为：
$$
u_{t}=a^2u_{xx}
$$

$$
u(0,t)=0,\quad u_x|_{x=l}+hu|_{x=l}=0
$$

$$
u(x,0)=\varphi(x)
$$

假设分离变量形式的解为：
$$
u(x,t)=X(x)T(t)
$$
分离变量形式的解代入到泛定方程中得到：
$$
\frac{T'}{a^2T}=\frac{X''}{X}=-\beta^2
$$
改写为：
$$
T'+a^2\beta^2T=0
$$

$$
X''+\beta^2X=0
$$

分离变量形式的解代入到边界条件中得：
$$
X(0)=0,\quad X'(l)+hX(l)=0
$$
那么本征值问题为：
$$
X''+\beta^2X=0
$$

$$
X(0)=0,\quad X'(l)+hX(l)=0
$$

使用常微分方程方法求解分离变量形式的解，得到：
$$
X(x)=A\cos\beta x+B\sin\beta x
$$
代入边界条件，得到：
$$
A=0
$$

$$
\beta \cos \beta l+h\sin \beta l=0
$$

即：
$$
\tan \beta l=-\frac{\beta}h
$$
方程的解可以看成曲线$y_1=\tan(l\beta)$与直线$y_2=-\frac\beta h$的交点。通过数值方法可以求出这些固有频率的值，已经对应的固有函数。当得到$\beta$值后，$T$的函数形式也可以通过解常微分方程来确定：
$$
X_n(x)=B_n\sin\beta_n x
$$

$$
T_n(t)=A_ne^{-\beta^2_na^2t}
$$

其中的$n\in\mathbb{N}_+$，相应的：
$$
u(x,t)=\sum_{n=1}^\infty C_ne^{-\beta_n^2a^2t}\sin\beta_nx
$$
上式应当满足初始条件：
$$
\varphi(x)=\sum_{n=1}^\infty C_n\sin\beta_nx
$$
使用三角函数正交性的方法：
$$
\int_{-l}^{l}\sin\beta_n x\cdot\sin\beta_m x=L_n \delta_{nm}
$$

$$
\delta_{nm}=\begin{cases}0,n\neq m\\1,n=m\end{cases}
$$

得到系数为：
$$
C_n=\frac{1}{L_n}\int_0^l\varphi(x)\sin\beta_nx\mathrm{d}x
$$

#### (3) 圆板区域热传导的稳定分布

这个问题使用的是圆域内二维拉普拉斯方程的分离变量法：
$$
\nabla^2u=\Delta u=0,\rho<\rho_0
$$

$$
u|_{\rho=\rho_0}=f(\varphi)
$$

圆形区域， 采用极坐标比较合适。在极坐标中，拉普拉斯方程为：
$$
\frac{\partial^2u}{\partial\rho^2}+\frac{1}{\rho}\frac{\partial u}{\partial\rho}+\frac{1}{\rho^2}\frac{\partial^2u}{\partial\varphi^2}=0
$$
化简为：
$$
\rho\frac{\partial}{\partial\rho}\left(\rho\frac{\partial u}{\partial\rho}\right)+\frac{\partial^2u}{\partial\varphi^2}=0
$$
应用分离变量法：
$$
u(\rho,\varphi)=R(\rho)\varPhi(\varphi)
$$
对应的解为：
$$
\rho\frac{\mathrm{d}}{\mathrm{d}\rho}\left(\rho\frac{\mathrm{d}R}{\mathrm{d}\rho}\right)\varPhi+R\frac{\mathrm{d}^2\varPhi}{\mathrm{d}\varphi^2}=0
$$
化简得到：
$$
\frac{\rho}{R}\frac{\mathrm{d}}{\mathrm{d}\rho}{\left(\rho\frac{\mathrm{d}R}{\mathrm{d}\rho}\right)}=-\frac{\varPhi^{\prime\prime}}{\varPhi}=\lambda
$$
等式左边是$\rho$的函数，等式右边是$\varphi$的函数，只有他们等于常数$\lambda$的时候才相等，那么可以写为：
$$
\varPhi''+\lambda \varPhi=0
$$

$$
\rho^2R''+\rho R'-\lambda R=0
$$

这里应当注意，$\varPhi$需要满足周期边界条件：
$$
\varPhi(2\pi+\varphi)=\varPhi(\varphi)
$$
并且$R$满足自然边界条件：
$$
R(0)\neq\infty
$$
于是即可得到本征值问题：
$$
\varPhi''+\lambda \varPhi=0
$$

$$
\varPhi(2\pi+\varphi)=\varPhi(\varphi)
$$

> [!NOTE]
>
> 由于是在极坐标中解决热传导稳态分布问题，上述过程与时间无关，初始条件失效，需要寻找其他条件，如周期边界条件。

要满足周期边界条件，本征值应当$\lambda=m^2>0$，求解得到本征函数为：
$$
\varPhi_0=A_0
$$

$$
\varPhi_m=A_m\cos m\varphi+B_m \sin m\varphi
$$

给定$\lambda=m^2$后，$R$所要满足的常微分方程为：
$$
\rho^2 R''+\rho R'-m^2R=0
$$
这是欧拉方程，使用[常微分方程](https://www.laoguantx.top/posts/odesolutions5/)方法求解，得到：
$$
R_0=C_0+D_0\ln \rho,\quad m=0
$$

$$
R_m=C_m\rho^{m}+D_m\rho^{-m},\quad m\in\mathbb{N}_+
$$

考虑到$R(0)$必须有限，那么$D_0=D_m=0$，因此分离变量形式的本征解为：
$$
\begin{aligned}&u_0(\rho,\varphi)=C_0\\&u_m(\rho,\varphi)=\rho^m(A_m\cos m\varphi+B_m\sin m\varphi)\end{aligned}
$$
根据叠加原理，原问题的解可以假设为：
$$
u=C_0+\sum_{m=1}^\infty\rho^m(A_m\cos m\varphi+B_m\sin m\varphi)
$$
该解应当满足原问题的边界条件：
$$
u|_{\rho=\rho_0}=f(\varphi)
$$
代入得：
$$
C_0+\sum_{m=1}^\infty\rho_0^m(A_m\cos m\varphi+B_m\sin m\varphi)=f(\varphi)
$$
把$f(\varphi)$进行傅里叶级数展开，比较前面的系数，得到：
$$
\begin{aligned}&C_0=\frac{1}{2\pi}\int_0^{2\pi}f(\varphi)\mathrm{d}\varphi\\&A_m=\frac{1}{\rho_0^m\pi}\int_0^{2\pi}f(\varphi)\cos m\varphi \mathrm{d}\varphi\\&B_m=\frac{1}{\rho_0^m\pi}\int_0^{2\pi}f(\varphi)\sin m\varphi \mathrm{d}\varphi\end{aligned}
$$
把系数代入到级数解的表达式中，得到：
$$
u(\rho,\varphi)=\frac{1}{\pi}\int_0^{2\pi}f(t)\left[\frac{1}{2}+\sum_{m=1}^\infty\left(\frac{\rho}{\rho_0}\right)^m\cos m(\varphi-t)\right]\mathrm{d}t
$$
参考泊松公式相关内容，可以将上面的积分（泊松方程积分形式）求解：
$$
u(\rho,\varphi)=\frac{1}{2\pi}\int_0^{2\pi}f(t)\frac{\rho_0^2-\rho^2}{\rho_0^2+\rho^2-2\rho_0\rho\cos(\varphi-t)}\mathrm{d}t
$$

#### (4) 矩形区域内热传导的稳态分布

矩形区域内，一边温度为$0$，相邻一边温度给定，另外两边绝热。该问题在矩形区域内使用分离变量法：
$$
\Delta u=\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}=0,0<x<a,0<y<b
$$

$$
u\left|_{x=0}=0,u\right|_{y=0}=f(x),\frac{\partial u}{\partial x}|_{x=a}=0,\frac{\partial u}{\partial y}|_{y=b}=0
$$

方程齐次，与$x$轴平行方向边界条件齐次，使用分离变量法：
$$
u(x,y)=X(x)Y(y)
$$
代入到控制方程中：
$$
\frac{X^{\prime\prime}(x)}{X(x)}=-\frac{Y^{\prime\prime}(y)}{Y(y)}=-\lambda
$$
写为：
$$
X''(x)+\lambda X(x)=0
$$

$$
Y''(y)-\lambda Y(y)=0
$$

代入到两条与$x$平行的边界条件：
$$
X(0)=0,X'(a)=0
$$
然后得到本征值问题：
$$
X''(x)+\lambda X(x)=0
$$

$$
X(0)=0,X'(a)=0
$$

求解得到本征值为：
$$
\lambda_n=\left(\frac{2n-1}{2a}\right)^2\pi^2,\quad n\in\mathbb{N}_+
$$
对应的本征值函数为：
$$
X_n(x)=\sin\frac{2n-1}{2a}\pi x
$$
然后求解$Y(y)$，得到：
$$
Y(y)=C_n\sinh\frac{2n-1}{2a}\pi y+D_n\cosh\frac{2n-1}{2a}\pi y
$$
这样满足控制方程和与$x$轴平行方向上边界条件的本征解为：
$$
u_n(x,y)=\left(C_n\sinh\frac{2n-1}{2a}\pi y+D_n\cosh\frac{2n-1}{2a}\pi y\right)\sin\frac{2n-1}{2a}\pi x
$$
原问题的级数解为：
$$
u(x,y)=\sum^\infty_{n=1}\left(C_n\sinh\frac{2n-1}{2a}\pi y+D_n\cosh\frac{2n-1}{2a}\pi y\right)\sin\frac{2n-1}{2a}\pi x
$$
把级数形式的解代入到与$y$轴平行的两个边界条件，得：
$$
u(x,y)|_{y=0}=\sum_{n=1}^\infty\left(D_n\sin\frac{2n-1}{2a}\pi x\right)=f(x)
$$

$$
\frac{\partial u}{\partial y}|_{y=b}=\sum_{n=1}^\infty\frac{2n-1}{2a}\pi\left(C_n\cosh\frac{2n-1}{2a}\pi b+D_n\sinh\frac{2n-1}{2a}\pi b\right)\mathrm{sin}\frac{2n-1}{2a}\pi x=0
$$

由于本征函数是正交的，得到了两个待定系数：
$$
D_n=\frac{2}{a}\int_0^af(x)\sin\frac{2n-1}{2a}\pi x \mathrm{d}x
$$

$$
C_n=-D_n\tanh \frac{2n-1}{2a}\pi b
$$

### 3、非齐次边界条件的稳态问题分离变量法

![image-20251107113310680](https://laoguantx.top/article/数学/数学物理方法/分离变量法/image-20251107113310680.png)

如图，矩形区域边界的温度保持不变，求稳定后的温度分布。该问题的定解问题为：
$$
u_{xx}+u_{yy}=0
$$

$$
u|_{x=0}=u_0,u|_{x=a}=u_0
$$

$$
u_{y=0}=u_0,u|_{y=b}=U
$$

边界条件非齐次的，无法使用分离变量法。因此，我们把解拆分：
$$
u(x,y)=v(x,y)+w(x,y)
$$
满足：
$$
\begin{aligned}&\boxed{\begin{array}{c}v_{xx}+v_{yy}=0\\\nu|_{x=0}=u_0,v|_{x=a}=u_0\\\nu|_{y=0}=0,v|_{y=b}=0\end{array}}\quad+\quad\boxed{\begin{array}{c}w_{xx}+w_{yy}=0\\w|_{x=0}=0,w|_{x=a}=0,\\w|_{y=0}=u_0,w|_{y=b}=U\end{array}}\end{aligned}
$$
显然，根据叠加原理拆分后的结果和原来问题是等价。对于$v$，与$y$轴平行的边界是齐次，对于$w$，与$x$轴平行的边界是齐次；从而可以分别对 $v$ 和 $w$ 应用分离变量法。但是算两次，很烦。

针对当前的问题，也可以换一个思路，令新的函数$v(x,y)$满足：
$$
v(x,y)=u(x,y)-u_0
$$
显然，新的函数满足：
$$
v_{xx}+v_{yy}=0
$$

$$
v|_{x=0}=0,v|_{x=a}=0
$$

$$
v|_{y=0}=0,v|_{y=b}=U-u_0
$$

现在与$x$轴平行的边界条件齐次了，可以直接使用分离变量法求解。设：
$$
v(x,y)=X(x)Y(y)
$$
代入到泛定方程和齐次边界条件后得到：
$$
X''+\lambda X=0
$$

$$
X(0)=0,X(a)=0
$$

$$
Y''-\lambda Y=0
$$

相同的方法求解出$v(x,y)$的解：
$$
v(x,y)=\sum_{n=1}^\infty\left(A_ne^{n\pi y/a}+B_ne^{-n\pi y/a}\right)\sin\frac{n\pi x}{a}
$$
代入与$y$轴平行的两个边界条件：
$$
\sum_{n=1}^\infty\left(A_n+B_n\right)\sin\frac{n\pi x}{a}=0
$$

$$
\sum_{i\setminus n=1}^\infty\left(A_ne^{n\pi b/a}+B_ne^{-n\pi b/a}\right)\sin\frac{n\pi x}{a}=U-u_0
$$

把等式右边进行傅里叶级数展开，并比较两边系数，得到：
$$
A_n=-B_n=\begin{cases}\quad0,(n=2k)\\\frac{a(U-u_0)}{n\pi(e^{n\pi b/a}-e^{-n\pi b/a})},(n=2k+1)&\end{cases}
$$

## 三、非齐次振动方程和输运方程

### 1、傅里叶级数法

对于一个强迫振动问题，两点自由的细长杆，沿轴向外力受外加分布力作用下进行振动。定解问题为：
$$
u_{tt}-a^2u_{xx}=f(x,t)\quad(0<x<l)
$$

$$
u_x|_{x=0}=0,u_x|_{x=l}=0
$$

$$
u|_{t=0}=\varphi(x),u_t|_{t=0}=\psi(x)\quad(0<x<l)
$$

在这个定解问题中，边界条件是齐次的，但是泛定方程是非齐次的，此处假设其满足：
$$
f(x,t)=A\cos\frac{\pi x}l\sin\omega t
$$
首先假设泛定方程的解可以使用分离变量法，根据前面齐次方程和边界条件中的分析，分离变量法得到的本征值和本征函数为：
$$
\lambda_n=\frac{n^2\pi^2}{l^2}
$$

$$
X_n(x)=\cos\frac{n\pi}lx,n\in\mathbb{N}_+
$$

对应的本征值问题为：
$$
X''+\lambda X=0\quad(0<x<l)
$$

$$
X'(0)=X'(l)=0
$$

把泛定方程中的右端项（也就是强迫项），用本征函数作傅里叶级数展开（系数是时间$t$的函数）
$$
f(x,t)=\sum_{n=0}^\infty f_n(t)X_n(x)
$$
对于当前问题，其傅里叶级数展开只有一项非零：
$$
f(x,t)=A\cos\frac{\pi x}{l}\sin\omega t
$$

$$
f_1=A\cos\frac{\pi x}{l},f_n=0,n\neq0
$$

代入到泛定方程，得到关于$X_n(x)$项的等式：
$$
\sum_{n=0}^\infty\left[T_n^{\prime\prime}+\frac{n^2\pi^2a^2}{l^2}T_n\right]X_n(x)=\sum_{n=0}^\infty f_n(t)X_n(x)
$$
要求等式对于任何的$x,t$都相等，那么本征函数前面的系数相等：
$$
T_n^{\prime\prime}+\frac{n^2\pi^2a^2}{l^2}T_n=f_n(t)
$$
对于本问题：
$$
T_1^{\prime\prime}+\frac{n^2\pi^2a^2}{l^2}T_1=A\sin\omega t
$$

$$
T_n^{\prime\prime}+\frac{n^2\pi^2a^2}{l^2}T_n=0(n\neq 1)
$$

展开初始条件：
$$
\varphi(x)=\sum_{n=0}^\infty\varphi_nX_n(x)=\sum_{n=0}^\infty\varphi_n\cos\frac{n\pi}{l}x
$$

$$
\psi(x)=\sum_{n=0}^{\infty}\psi_{n}X_{n}(x)=\sum_{n=0}^{\infty}\psi_{n}\cos\frac{n\pi}{l}x
$$

将初始条件代入到解中：
$$
\sum_{n=0}^\infty T_n(0)X_n(x)=\varphi(x)=\sum_{n=0}^\infty\varphi_nX_n(x)
$$

$$
\sum_{n=0}^\infty T_n^{\prime}(0)X_n(x)=\psi(x)=\sum_{n=0}^\infty\psi_nX_n(x)
$$

根据傅里叶级数展开的唯一性，系数相同：
$$
T_n(0)=\varphi_n
$$

$$
T'_n(0)=\psi_n
$$

所以我们一共得到了以下几个微分方程：
$$
\begin{cases}
T_0^{^{\prime\prime}}=0\\T_0(0)=\varphi_0\\T_0^{^{\prime}}(0)=\psi_0
\end{cases}
$$

$$
\begin{cases}T_1^{\prime\prime}+\frac{\pi^2a^2}{l^2}T_1=A\sin\omega t\\T_1(0)=\varphi_1\\T_1^{^{\prime}}(0)=\psi_1\end{cases}
$$

$$
\begin{cases}T_{n}^{"}+\frac{n^{2}\pi^{2}a^{2}}{l^{2}}T_{n}=0(n\neq1)\\T_n(0){=}\varphi_n\\T_n^{\prime}(0){=}\psi_n\end{cases}
$$

分别求解，得到：
$$
T_0(t)=\varphi_0+\psi_0t
$$

$$
T_1=\frac{Al}{\pi a}\frac{1}{\omega^2-\pi^2a^2/l^2}\left(\omega\sin\frac{\pi at}{l}-\frac{\pi a}{l}\sin\omega t\right)+\varphi_1\cos\frac{\pi at}{l}+\frac{l}{\pi a}\psi_1\sin\frac{\pi at}{l}
$$

$$
T_{\mathrm{n}}=\varphi_{n}\cos\frac{n\pi at}{l}+\frac{l}{n\pi a}\psi_{n}\sin\frac{n\pi at}{l},n\neq0,1
$$

合并起来之后，最终解为：
$$
u(x,t)=\varphi_{0}+\psi_{0}t+\left[\frac{Al}{\pi a}\frac{1}{\omega^{2}-\pi^{2}a^{2}/l^{2}}\left(\omega\sin\frac{\pi at}{l}-\frac{\pi a}{l}\sin\omega t\right)\right]\mathrm{cos}\frac{\pi x}{l}+\sum_{n=1}^\infty\left(\varphi_n\cos\frac{n\pi at}{l}+\frac{l}{n\pi a}\psi_n\sin\frac{n\pi at}{l}\right)\cos\frac{n\pi x}{l}
$$
如果初始条件为零，那么解为：
$$
u(x,t)=\left[\frac{Al}{\pi a}\frac{1}{\omega^2-\pi^2a^2/l^2}\left(\omega\sin\frac{\pi at}{l}-\frac{\pi a}{l}\sin\omega t\right)\right]\mathrm{cos}\frac{\pi x}{l}
$$


>  [!TIP]
>
>  **泛定方程非齐次但但边界条件齐次定解问题的傅里叶级数法总结**：
>
>  1. 先用分离变量法求齐次方程、齐次边界条件所对应的本征值和本征函数。
>  1. 对于泛定方程的非齐次项（强迫项），也用上面的本征函数进行傅里叶级数展开。
>  1. 把分离变量形式的解表示成叠加形式（或者说本征函数的广义傅里叶级数展开），并代入到非齐次泛定方程，比较方程两边广义傅里叶级数的系数得到另外一个函数所要满足的微分方程。
>  1. 把初始条件也用本征函数进行傅里叶级数展开，比较傅里叶级数的系数，得到另外一个函数所要满足的初始条件。
>  1. 求解另外一个函数微分方程的边值问题，可以得到其相应的解。
>  1. 再把解代入，就得到了相应的广义傅里叶级数解。

### 2、冲量定理法

对于一个强迫振动问题，两点自由的细长杆，沿轴向外力受外加分布力作用下进行振动。定解问题为：
$$
u_{tt}-a^2u_{xx}=f(x,t)\quad(0<x<l)
$$

$$
u_x|_{x=0}=0,u_x|_{x=l}=0
$$

$$
u|_{t=0}=\varphi(x),u_t|_{t=0}=\psi(x)\quad(0<x<l)
$$

除了使用傅里叶级数法，还可以利用叠加原理，分解成一个齐次问题和一个非齐次问题：
$$
\boxed{\begin{array}{c}u_{tt}-a^2u_{xx}=f(x,t)\\u|_{x=0}=0,u|_{x=l}=0\\u|_{t=0}=\varphi(x),u|_{t=0}=\varphi(x)\end{array}}=\boxed{\begin{array}{c}u_{tt}^\mathrm{I}-a^2u_{xx}^\mathrm{I}=0\\u^\mathrm{I}|_{x=0}=0,u^\mathrm{I}|_{x=l}=0\\u^\mathrm{I}|_{t=0}=\varphi(x),u^\mathrm{I}_t|_{t=0}=\psi(x)\end{array}}+\boxed{\begin{array}{c}u_{tt}^\mathrm{II}-a^2u_{xx}^\mathrm{II}=f(x,t)\\u^\mathrm{II}|_{x=0}=0,u^\mathrm{II}|_{x=l}=0\\u^\mathrm{II}|_{t=0}=0,u^\mathrm{II}_t|_{t=0}=0\end{array}}
$$
前一个问题可以直接使用分离变量法，后一个问题可以使用冲量定理，冲量定理要求初始条件应当是齐次的。讨论初始静止、两端固定的弦的振动问题：
$$
u_{tt}-a^2u_{xx}=f(x,t),0<x<l
$$

$$
u|_{x=0}=0,u|_{x=l}=0
$$

$$
u|_{t=0}=0,u_t|_{t=0}=0
$$

把外加载荷等价于一系列“瞬间力”的连续作用，把外加载荷作用下的系统响应看成是这一系列“瞬间力”引起的振动的叠加。作用在每单位长度弦上的外力$F(x,t)=\rho f(x,t)$，其中$\rho$可以理解为线密度，$f(x,t)$表示$x$位置$t$时刻的加速度（量纲相同），它从零时刻一直持续到时刻$t$。利用$\delta$函数的卷积性质，可以将外力表示为：
$$
F(x,t)=\int_0^tF(x,\tau)\delta(t-\tau)\mathrm{d}\tau=\int_0^t\rho f(x,\tau)\delta(t-\tau)\mathrm{d}\tau
$$
这里的$\delta(t)$函数是一个脉冲函数。$F(x,\tau)\delta(t-\tau)\mathrm{d}\tau$可以看成是在$(\tau,\tau+\mathrm{d}\tau)$时间内，大小为$F(x,\tau)\delta(t-\tau)\mathrm{d}\tau$的瞬间力作用，冲量为$F(x,t)\mathrm{d}\tau$，由该瞬间力作用所引起的振动$u^{(\tau)}(x,t)$可以用下面的定解问题来描述：
$$
\begin{aligned}&u_{tt}^{(\tau)}-a^2u_{xx}^{(\tau)}=\frac{F(x,\tau)}{\rho}\delta(t-\tau)\mathrm{d}\tau=f(x,\tau)\delta(t-\tau)\mathrm{d}\tau\\&u^{(\tau)}|_{x=0}=0,u^{(\tau)}|_{x=l}=0,u^{(\tau)}|_{t=0}=0,u_t^{(\tau)}|_{t=0}=0\end{aligned}
$$
该瞬间力之作用在$(\tau+\mathrm{d}\tau)$时间内，在$\tau$时刻前，$(0,\tau-0)$时刻内瞬间力还没开始作用，此时弦是静止状态，但是由于力作用的时间非常短，弦上的各点来不及产生位移，但是获得了一个速度，根据冲量定理，外力作用于系统上的冲量等于系统动量的增量，因此单位长度弦上的动量变化量等于瞬间力的冲量：
$$
\rho u_t^{(\tau)}|_{t=\tau+\mathrm{d}\tau}-\rho u_t^{(\tau)}|_{t=\tau-0}=F(x,\tau)\mathrm{d}\tau=\rho f(x,\tau)\mathrm{d}\tau
$$
由于$u_t^{(\tau)}|_{t=\tau-0}=0$，故上式可以化简：
$$
u_t^{(\tau)}|_{t=\tau+\mathrm{d}\tau}=f(x,\tau)\mathrm{d}\tau
$$
那么在时刻$\tau+\mathrm{d}\tau$之后，瞬间力已经作用过了，弦上不受外力，$u^{(\tau)}(x,t)$满足齐次方程，其定解问题为：
$$
u_{_{tt}}^{(\tau)}-a^{2}u_{_{xx}}^{(\tau)}=0
$$

$$
u^{(\tau)}\mid_{x=0}=0,u^{(\tau)}\mid_{x=l}=0
$$

$$
u^{(\tau)}\mid_{t=\tau+\mathrm{d}\tau}=0,u_t^{(\tau)}\mid_{t=\tau+\mathrm{d}\tau}=f(x,\tau)\mathrm{d}\tau
$$

该定解问题与之前提到的“由该瞬间力作用所引起的振动$u^{(\tau)}(x,t)$的定解问题”等价。使用分离变量法可以求解出$u^{(\tau)}$，其中必定含有因子$\mathrm{d}\tau$，记$u^{(\tau)}(x,t)=v(x,t;\tau)\mathrm{d}\tau$，则$v(x,t;\tau)$满足定解问题：
$$
v_{tt}-a^2v_{xx}=f(x,\tau)\delta(t-\tau)
$$

$$
v\mid_{x=0}=0,v\mid_{x=l}=0
$$

$$
v\mid_{t=0}=0,v_{t}|_{t=0}=0
$$

即：
$$
v_{_{tt}}-a^{2}v_{_{xx}}=0
$$

$$
v\mid_{x=0}=0,v\mid_{x=l}=0
$$

$$
v\mid_{t=\tau}=0\mathrm{,}v_t\mid_{t=\tau}=f(x,\tau)
$$

然后使用分离变量法求解出上面定解问题，但是注意，此处的初始时刻为$\tau$时刻，而非零。

既然外加力是一系列瞬时力的线性叠加，那么原定解问题的解也应该是瞬时力所引起的振动的叠加，所以：
$$
u\left(x,t\right)=\sum_{\tau=0}^tu^{\left(\tau\right)}\left(x,t\right)=\int_0^tv\left(x,t;\tau\right)\mathrm{d}\tau
$$
得到了最终结果。

>  [!TIP]
>
>  **泛定方程非齐次但但边界条件和初始条件都齐次的定解问题傅里叶级数法总结**：
>
>  1. 先得到解瞬态的定解问题，要注意此时除了原来的时间变量$t$外，还有瞬态问题开始作用的时间$\tau$。此时方程是齐次，边界条件是齐次，但是初始条件（初始时间是$\tau$）是非齐次。 
>  1. 用分离变量法求得原问题的本征值和本征函数（与齐次方程及边界条件的形式有关）。
>  1. 把瞬态问题的解展开成本征函数的傅里叶级数，其系数是时间$t$的函数，代入齐次方程，得到每个系数函数所要满足的常微分方程，求出系数函数的通解。
>  1. 把瞬态问题傅里叶级数的解形式代入到初始条件，得到系数函数通解中的常数，从而得到瞬态解的级数表达式。
>  1. 把瞬态解的级数表达式代入到原问题解得积分表达式，积分后得到相应的解。

## 四、非齐次边界条件的处理

### 1、一般处理方法

对于如下的自由振动问题，两端给定位移，给定初始形状和初始速度：
$$
u_{tt}-a^2u_{xx}=0
$$

$$
u|_{x=0}=\mu(t),u|_{x=l}=v(t)
$$

$$
u|_{t=0}=\varphi(x),u_t|_{t=0}=\psi(x)
$$

我们自由地选择一个特殊的解，让他单纯满足非齐次的边界条件，这种解有很多，我们取：
$$
m(x,t)=\frac{v(t)-\mu(t)}lx+\mu(t)
$$
然后假设原来问题的解是该特殊解与另外一个未知解的叠加，即：
$$
u(x,t)=m(x,t)+w(x,t)
$$
移项得到：
$$
w(x,t)=u(x,t)-m(x,t)
$$
对于未知的函数$w(x,t)$满足：
$$
w_{tt}-a^{2}w_{xx}=\frac{x}{l}\left[\mu^{\prime\prime}(t)-v^{\prime\prime}(t)\right]-\mu^{\prime\prime}(t)
$$

$$
w|_{x=0}=0,w|_{x=l}=0
$$

$$
w|_{t=0}=\varphi(x)+\frac{1}{l}[\mu(0)-v(0)]x-\mu(0),w|_{t=0}=\psi(x)+\frac{1}{l}\left[\mu^{\prime}(0)-v^{\prime}(0)\right]x-\mu^{\prime}(0)
$$

现在我们将方程转化为了齐次边界条件的形式，使用傅里叶级数法或者冲量定理法可以求解。

### 2、特殊处理方法

自由选择特殊解存在一个不足之处，任意选择一个普通的特殊解可能会使得泛定方程变得即为复杂，会把人解麻了。所以我们应当尽量使变化后的泛定方程变得简单。

#### (1) 振动方程举例

例如一个特定的问题：
$$
u_{tt}-a^2u_{xx}=0
$$

$$
u|_{x=0}=0,u|_{x=l}=A\sin\omega t
$$

$$
u|_{t=0}=0,u_t|_{t=0}=0
$$

如果按照前面一般的处理方法，取特解：
$$
v(x,t)=\frac{Ax}l\sin\omega t
$$
泛定方程会让你裂开。所以我们想要找到一个特解，即满足其次泛定方程，又满足非齐次的边界条件，从而简化问题，即特解满足：
$$
v_{tt}-a^2v_{xx}=0(0<x<l),v|_{x=0}=0,v|_{x=l}=A\sin\omega t
$$
假设：
$$
v(x,t)=X(x)\sin\omega t
$$
代入泛定方程，得到方程的通解：
$$
X(x)=C\cos\left(\frac{\omega x}a\right)+D\sin\left(\frac{\omega x}a\right)
$$
代入边界条件，得到：
$$
X(x)=\frac{A}{\sin\left(\frac{\omega x}a\right)}\sin\left(\frac{\omega x}a\right)
$$
也就是说特解为：
$$
v(x,t)=\frac{A\sin\left(\frac{\omega x}a\right)}{\sin\left(\frac{\omega x}a\right)}\sin\omega t
$$
应用叠加原理，取$w(x,t)=u(x,t)-v(x,t)$，那么$w(x,t)$满足：
$$
w_{tt}-a^2w_{xx}=0
$$

$$
w|_{x=0}=0,w|_{x=l}=0
$$

$$
w|_{t=0}=0,w_t|_{t=0}=-A\omega\frac{\sin(\omega x/a)}{\sin(\omega l/a)}
$$

该问题可以使用分离变量法求解。

#### (2) 输运方程举例

对于一个热传导问题，左端绝热，右端温度给定，初始条件给定，内部有持续热源，其定解问题为：
$$
u_t-a^2u_{xx}=-b^2u,0<x<l
$$

$$
u_x|_{x=0}=0,u|_{x=l}=u_1
$$

$$
u|_{t=0}=\frac{u_1}{l^2}x^2
$$

定解问题的泛定方程是齐次方程，可以使用分离变量法。为了将边界条件齐次化，叠加一个恒定的解$u_1$，即：
$$
u(x,t)=V(x,t)+u_1
$$

$$
V(x,t)=u(x,t)-u_1
$$

那么新函数$V(x,t)$满足：
$$
V_t-a^2V_{xx}=-b^2V-b^2u_1,0<x<l
$$

$$
V_x|_{x=0}=0,V|_{x=l}=0
$$

$$
V|_{t=0}=\frac{u_1}{l^2}x^2-u_1
$$

于是该问题的边界条件已经化为齐次。使用傅里叶级数法或者冲量定理法求解。

## 五、泊松方程

拉普拉斯方程表示形式为：
$$
\Delta u=0
$$
其中$\Delta$为拉普拉斯算子。而泊松方程表示为：
$$
\Delta u =f(x,y,z)
$$
泊松方程与时间无关，所以不能使用冲量定理法。对于泊松方程， 不管边界条件如何，我们可以先找到一个满足非齐次泛定方程的特解（当然形式越简单越好），再利用叠加原理，把原问题转换为拉普拉斯方程问题，从而可以用前面的分离变量法进行求解。

例如在圆域$\rho<\rho_0$内泊松方程的边值问题：
$$
\Delta u =a+b(x^2-y^2)
$$

$$
u|_{\rho=\rho_0}=c
$$

先寻找满足泊松方程的一个特解，比如：
$$
v=\frac{a}{4}(x^2+y^2)+\frac{b}{12}(x^4-y^4)
$$
对于圆域问题，使用极坐标变换：
$$
v=\frac{a}{4}\rho^2+\frac{b}{12}\rho^4\cos2\varphi
$$
应用叠加原理，取：
$$
w(x,y)=u(x,y)-v(x,y)
$$
那么将泊松方程变为拉普拉斯方程：
$$
\Delta w=0
$$

$$
w|_{\rho=\rho_0}=c-(\frac{a}{4}\rho^2+\frac{b}{12}\rho^4\cos2\varphi)
$$

然后使用分离变量法，利用自然周期边界条件求解结果。
