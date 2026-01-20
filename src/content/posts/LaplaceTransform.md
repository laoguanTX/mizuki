---
title: 拉普拉斯变换
published: 2025-10-22
category: ["数学", "数学物理方法"]
tags: ["复变函数"]
alias: "laplacetransform"
---
## 一、拉普拉斯变换

### 1、拉普拉斯变换的定义

傅里叶积分和傅里叶变换的应用要满足以下两个条件：

1. 原函数$f(t)$定义域为$(-\infty,+\infty)$。
2. 原函数$f(t)$在定义域$(-\infty,+\infty)$区间上必须是绝对可积。

为了能让更多的函数能够应用傅里叶变换，我们构造一个新的函数$g(t)$：
$$
g(t)=e^{-\sigma t}f(t)H(t)
$$
通过引入阶跃函数$H(t)$后可以把$f(t)$函数延拓到整个实轴上$(-\infty,+\infty)$，只不过在$(-\infty,0)$上的函数值为$0$。后面内容将会省略$H(t)$函数。$\sigma>0$是一个正的实数，只要其取值足够大，总能保证$g(t)$在区间$(-\infty,+\infty)$上时绝对可积的，把$e^{-\sigma t}$称为收敛因子，对于一般的物理问题，都满足这个条件。

当函数$f(x)$除了在有限个第一类间断点外处处连续时，$g(t)$函数满足狄利克雷条件及绝对可积条件，从而
可以进行傅里叶变换与逆变换：

$$
G(\omega)=\frac1{2\pi}\int_{-\infty}^\infty g(t)e^{-\mathrm{i}\omega t}\mathrm{d}t=\frac1{2\pi}\int_0^\infty f(t)e^{-\sigma t}e^{-\mathrm{i}\omega t}\mathrm{d}t
$$
引进一个新的变量：$p = \sigma + \mathrm{i}\omega$ 及新的函数 $\bar{f}(p) = 2\pi G(\omega)$

$$
\bar{f}(p) = \int_{0}^{\infty} f(t)e^{-pt}dt
$$
其中积分$\int_{0}^{\infty}f(t)e^{-pt}dt$称为**拉普拉斯积分**，$\bar{f}(p)$称为$f(t)$的**拉普拉斯变换函数**。代表着从$f(t)$到$\bar{f}(p)$的一种变换，称为**拉普拉斯变换**，$e^{-pt}$称为**拉普拉斯变换的核**。

$G(\boldsymbol{\omega})$的傅里叶逆变换是：

$$
g\left(t\right)=\int_{-\infty}^\infty G\left(\omega\right)\mathrm{e}^{\mathrm{i}\omega t}\mathrm{d}\omega=\frac1{2\pi}\int_{-\infty}^\infty\bar{f}(\sigma+\mathrm{i}\omega)\mathrm{e}^{\mathrm{i}\omega t}\mathrm{d}\omega
$$

即：

$$
f(t)=\frac1{2\pi}\int_{-\infty}^\infty\bar{f}(\mathrm{~}\sigma\mathrm{~}+\mathrm{~i}\omega\mathrm{~})\mathrm{~e}^{(\mathrm{~}\sigma+\mathrm{i}\omega\mathrm{~})t}\mathrm{~d}\omega
$$

由$\sigma+\mathrm{i}\omega=p$ ,有 $\mathrm{d}\omega=\frac1{\mathrm{i}}\mathrm{d}p$，所以：
$$
f(t)=\frac{1}{2\pi\mathrm{i}}\int_{\sigma-\mathrm{i}\infty}^{\sigma+\mathrm{i}\infty}\bar{f}(p)\mathrm{e}^{pt}\mathrm{d}p
$$
$\bar{f}(p)$又称为**像函数**，而$f(t)$称为**原函数**，它们之间的关系常用简单的符号写为：

$$
\bar{f}(p)=\mathscr{L}\left[f(t)\right]
$$
$$
f(t)=\mathscr{L}^{-1}[\bar{f}(\mathrm{~}p)]
$$

使用拉普拉斯变换存在的条件：

1. 原函数$f(t)$最多只有有限个第一类间断点，在其他点上都是连续的。
2. 原函数$f(t)$有有限的增长指数。也就是说，存在正数$M$ 及非负的实数$\sigma$（称为增长指数），对于任何$t>0$满足：$|f(t)|<Me^{\sigma t}$

那么拉普拉斯变换在半平面$\mathrm{Re}(p)>\sigma$上存在，而且在此半平面内，像函数就是函数$\bar{f}(p)$。这是拉普拉斯变换存在的充分条件。显然，$\sigma$有下确界$\sigma_0$，称之为绝对**收敛横标**。

### 2、拉普拉斯变换的性质

#### (1) 线性性

$$
\mathscr{L}[\alpha f_1+\beta f_2]=\alpha\mathscr{L}[f_1]+\beta\mathscr{L}[f_2]
$$

#### (2) 解析性

$$
\mathscr{L}[f]=\int_0^\infty f(t)e^{-pt}\mathrm{d}t
$$

该函数是解析的，所以求导数和求积分可以交换次序。

#### (3) 导数定理

1. 一阶导数性质：

$$
\mathscr{L}[f^{\prime}]=p\mathscr{L}[f]-f(0)
$$

> **证明**：
> $$
> \begin{aligned}
> \mathscr{L}[f^{\prime}]&=\int_0^\infty f^{\prime}e^{-pt}\mathrm{d}t\\&=\int_0^\infty e^{-pt}\mathrm{d}f\\&=e^{-pt}f\bigg|_0^\infty+p\int_0^\infty fe^{-pt}\mathrm{d}t\\&=p\mathscr{L}[f]-f(0)
> \end{aligned}
> $$
> 

2. 高阶导数性质：
$$
   \mathscr{L}[f^{(n)}]=p^n\mathscr{L}[f]-p^{n-1}f(0)-p^{n-2}f^{(1)}(0)-...-p^1f^{(n-2)}(0)-f^{(n-1)}(0)
$$
   上式通过一阶导数性质递推可得。

#### (4) 积分性质
$$
\mathscr{L}[\int_0^t\psi(\tau)\mathrm{d}x]=\frac{1}{p}\mathscr{L}[\psi(t)]
$$
> **证明**：
> $$
> f(t)=\int_0^t\psi(\tau)\mathrm{d}x\Rightarrow f'(t)=g(t)
> $$
> 利用拉普拉斯变换性质代入即可。

#### (5) 相似性质

相似即为在时间尺度上进行缩放：
$$
\mathscr{L}[f(at)]=\frac{1}{a}\overline{f}{\left(\frac{p}{a}\right)},\quad a>0
$$
> **证明**：
>
> 令$g(t)=f(at),a>0$，有：
> $$
> \int_0^\infty g(t)e^{-pt}\mathrm{d}t=\int_0^\infty f(at)e^{-pt}\mathrm{d}t\xlongequal{y=at}\frac{1}{a}\int_0^\infty f(y)e^{-\frac{p}{a}y}\mathrm{d}y=\frac{1}{a}\overline{f}\left(\frac{p}{a}\right)
> $$

#### (6) 位移性质

位移表示在频率域上进行平移：
$$
\mathscr{L}[\mathrm{e}^{-\lambda t}f(t)]=\overline{f}\left(p+\lambda\right)
$$
> **证明**：
>
> 令$g(t)=e^{-\lambda t}f(t)$，有：
> $$
> \int_0^\infty f(t)\mathrm{e}^{-\lambda t}\mathrm{e}^{-pt}\mathrm{d}t=\int_0^\infty f(t)\mathrm{e}^{-(\lambda+p)t}\mathrm{d}t
> $$

#### (7) 延迟性质

延迟表示在时间域上平移：
$$
\mathscr{L}[f(t-t_0)H(t-t_0)]=\mathrm{e}^{-pt_0}\mathscr{L}[f(t)]
$$
> **证明**：
> $$
> \begin{aligned}
> \mathscr{L}[f(t-t_0)H(t-t_0)]&=\int_0^\infty f(t-t_0)H(t-t_0)\mathrm{e}^{-pt}\mathrm{d}t\\&=\int_{t_0}^\infty f(t-t_0)\mathrm{e}^{-pt}\mathrm{d}t\\&\xlongequal{t-t_0=y}\int_0^\infty f(y)e^{-py}\mathrm{e}^{-pt_0}\mathrm{d}y\\&=\mathrm{e}^{-pt_0}\overline{f}\left(p\right)
> \end{aligned}
> $$

#### (8) 卷积性质
$$
\mathscr{L}[f*g]=\mathscr{L}[f]\cdotp\mathscr{L}[g]
$$

> **证明**：
>
> $$
> f*g=\int_{-\infty}^\infty f(\tau)g(t-\tau)\mathrm{d}\tau=\int_0^tf(\tau)g(t-\tau)\mathrm{d}\tau
> $$
>
> $$
> \mathscr{L}[f^*g]=\int_0^\infty(f^*g)\mathrm{e}^{-pt}\mathrm{d}t=\int_{t=0}^\infty\left(\int_{\tau=0}^tf(\tau)g(t-\tau)d\tau\right)\mathrm{e}^{-pt}\mathrm{d}t
> $$
>
> 这道积分是先固定$t$对$\tau$进行积分，再对$t$进行积分，我们可以改变积分次序，得到：
> $$
> \begin{aligned}
> \mathscr{L}[f^*g]&=\int_{\tau=0}^\infty\left(\int_{t=\tau}^\infty f(\tau)g(t-\tau)\mathrm{e}^{-pt}\mathrm{d}t\right)\mathrm{d}\tau\\&\xlongequal{t-\tau=\xi}\int_{\tau=0}^\infty f(\tau)\mathrm{e}^{-p\tau}\mathrm{d}\tau\left(\int_{\xi=0}^\infty g(\xi)\mathrm{e}^{-p\xi}\mathrm{d}\xi\right)=\mathscr{L}[f]\cdotp\mathscr{L}[g]\end{aligned}
> $$

#### (9) 初值定理

如果函数$f(x)$拉普拉斯变换存在，$\mathscr{L}[f(t)]=\bar{f}(p)$ 而且当$p\to\infty$时 $p\bar{f}(p)$的极限存在，那么有：

$$
f(0)=\lim_{p\to\infty}p\bar{f}(p)
$$
证明不作要求。

#### (10) 终值定理

如果函数$f(x)$拉普拉斯变换存在，$\mathscr{L}[f(t)]=\bar{f}(p)$ 而且当$p\to0$时 $p\bar{f}(p)$的极限存在，那么有：

$$
f(\infty)=\lim_{p\to0}p\bar{f}(p)
$$
证明不作要求。

#### (11) 我也不知道叫什么名字的定理

当 $t \to 0$ 时，$\left| \frac{f(t)}{t} \right|$ 有界，那么：
$$
\mathcal{L}\left[\frac{f}{t}\right] = \int_p^{\infty} \overline{f}(q)\mathrm{d}q
$$

#### (12) 第二个我也不知道叫什么名字的定理

如果函数$f(x)$的拉普拉斯变换存在，则：
$$
\mathscr{L}[xf(x)]=-\mathscr{L}'[f(x)]
$$
对拉普拉斯变换的定义式两边求导即可。

## 二、拉普拉斯变换的反演

拉普拉斯变换主要用于求解线性微分方程(或积分方程)。对原方程进行拉普拉斯变换后，可以得到像函数所遵从的代数方程，求解代数方程得到像函数，然后再把像函数还再回到原函数，称为拉普拉斯变换的反演。
$$
f(t)=\mathscr{L}^{-1}[f(t)]\Leftarrow \bar{f}(p)=\mathscr{L}[f(t)]
$$
**反演的唯一性问题**：如果两个函数的拉普拉斯变换相同，而且这两个函数是连续的，那么这两个函数必定相等。根据反演的唯一性，我们可以利用前面拉普拉斯变换的性质来求像函数反演的结果。

### 1、有理分式反演法

如果像函数是有理分式，只要将有理分式进行因式分解，然后利用拉普拉斯变换的一些基本性质就能得到相应的原函数：
$$
\bar{f}(p)=\frac{Q(p)}{R(p)}
$$

### 2、查表法

根据延迟定理、位移定理和卷积定理，配合拉普拉斯变换表解决反演问题。

### 3、黎曼-梅林反演公式法

$$
f(t)=\frac{1}{2\pi\mathrm{i}}\int_{\sigma-\mathrm{i}\infty}^{\sigma+\mathrm{i}\infty}\bar{f}(p)e^{pt}\mathrm{d}p
$$

这里$\sigma$是大于收敛横标$\sigma_0$任意正数。积分路径是 $p$ 平面上与虚轴平行的一条直线。像函数$\bar{f}(p)$是$p$的解析函数，可以借助于留数定理来求该积分的主值。该反演公式在原函数的连续点收敛到原函数的值，在间断点收敛到左右极限的平均值。

构造辅助围道（围道内函数解析），右边直线$L$上积分与要求的积分相关，$C_R$是以原点为圆心，半径为$R$的圆，使得像函数的所有奇点都包含在该围道内所围成的区域内。

<img src="https://laoguantx.top/article/数学/数学物理方法/拉普拉斯变换/image-20251018120306795.png" alt="image-20251018120306795" style="zoom:50%;" />

根据推广的约当引理，当半径趋向于无穷大时，沿$C_R$上的积分值趋向于零，应用留数定理，求得上面黎曼-梅林反演公式的值为：
$$
f(t)=\sum\mathrm{Res}(\bar{f}(p)e^{pt})
$$
当$\bar{f}(p)$是多值函数时，为了应用留数定理积分路径需要做一些修改，保证积分只在某单值分支上进行。

## 三、 拉普拉斯变化应用

### 1、求解常微分方程

#### (1) 非线性二阶常微分方程

> **例**：对于非线性二阶常微分方程：$4y''+y=g(t)$，可以对方程两边进行拉普拉斯变换：
> $$
> \mathscr{L}[4y^{\prime\prime}]+\mathscr{L}[y]=\mathscr{L}[g(t)]
> $$
> 利用拉普拉斯的导数性质，记：$Y(p)=\mathscr{L}[y],G(p)=\mathscr{L}[g(t)]$，得到：
> $$
> \mathscr{L}[y'']=p^2\mathscr{L}[y]-py(0)-y^{\prime}(0)=p^2Y-3p+7
> $$
> 带回方程，得到：
> $$
> Y=\frac{3p}{p^2+1/4}-\frac{7}{p^2+1/4}+\frac{G/4}{p^2+1/4}
> $$
> 求逆变换，利用拉普拉斯的卷积性质，得：
>
> $$
> \begin{aligned}&y(t)=3\cos\left(\frac{t}{2}\right)-7\sin\left(\frac{t}{2}\right)+\frac{1}{2}g*\sin\left(\frac{t}{2}\right)\\&g*\sin\left(\frac{t}{2}\right)=\int_0^tg(\tau)\sin\left(\frac{t-\tau}{2}\right)d\tau\end{aligned}
> $$

#### (2) 变系数常微分方程

> **例**：对于变系数常微分方程：
> $$
> y’’+xy’+y=0,y(0)=1,y’(0)=0
> $$
> 记：$Y(p)=\mathscr{L}[y]$，两边进行拉普拉斯变换：
> $$
> p^2Y-py(0)-y^{\prime}(0)-\frac{\mathrm{d}}{\mathrm{d}p}\left(pY-y(0)\right)+Y=0
> $$
> 化简得到：
> $$
> pY-1-Y'=0
> $$
> 由于：
> $$
> \mathscr{L}[y^{\prime}]=pY-1,\mathscr{L}[xy]=-Y^{\prime}
> $$
> 可以对化简之后的方程两边求拉普拉斯逆变换：
> $$
> y'+xy=0
> $$
> 使用常微分方程求解方法求解，得到答案：
> $$
> y(x)=\mathrm{e}^{-x^2/2}
> $$

### 2、求解积分方程

> **例**：对于方程$y(t)-\int_0^te^{t-\tau}y(\tau)\mathrm{d}\tau=t$，两边进行拉普拉斯变换，利用卷积性质，得到：
> $$
> \mathscr{L}[y(t)]-\mathscr{L}[\mathrm{e}^t]\mathscr{L}[y(t)]=\mathscr{L}(t)
> $$
> 解得：
> $$
> \mathscr{L}[y(t)]=\frac{p-1}{p^2(p-2)}=-\frac{1}{4}\frac{1}{p}+\frac{1}{2}\frac{1}{p^2}+\frac{1}{4}\frac{1}{p-2}
> $$
> 求逆变换，得到：
> $$
> y(t)=\mathscr{L}^{-1}[Y]=-\frac{1}{4}+\frac{t}{2}+\frac{1}{4}e^{-2t}
> $$

### 3、求解LR回路问题

> **例1**：
>
> <img src="https://laoguantx.top/article/数学/数学物理方法/拉普拉斯变换/image-20251022135328727.png" alt="image-20251022135328727" style="zoom:50%;" />
>
> 在如图所示的LR电路中，交变信号源为$E_0\sin\omega t$，在$t=0$时刻合上电源，求电流变化规律。
>
> **解1**：根据基尔霍夫电压定律，电流所要满足的电流：
> $$
> L\frac{\mathrm{d}}{\mathrm{d}t}j+Rj=E_0\sin\omega t,j(0)=0
> $$
> 对方程两边进行拉普拉斯变换，记$J(p)=\mathscr{L}[j(t)]$：
> $$
> LpJ+RJ=E_0\frac{\omega}{p^2+\omega^2}
> $$
> 移项求解：
> $$
> J=\frac{E_0}{Lp+R}\frac{\omega}{p^2+\omega^2}=\frac{E_0}{L}\frac{1}{p+R/L}\frac{\omega}{p^2+\omega^2}
> $$
> 利用拉普拉斯变换的卷积性质，逆变换得到$j(t)$：
> $$
> J=\frac{E_0}{L}\mathscr{L}\left[\mathrm{e}^{-(R/L)t)}\right]\mathscr{L}\left[\sin\omega t\right]
> $$
>
> $$
> j(t)=\frac{E_0}{L}\int_0^t\mathrm{e}^{-(R/L)(t-\tau)}\sin\omega\tau\mathrm{d}\tau
> $$
>
> 将后面的积分求解，使用分部积分法，得到：
> $$
> j(t)=-\frac{E_0\omega}{\omega^2+R^2/L^2}\cos\omega t+\frac{E_0\omega}{\omega^2+R^2/L^2}\mathrm{e}^{-(R/L)t}+\frac{E_0R/L}{\omega^2+R^2/L^2}\sin\omega t
> $$

> **例2**：
>
> <img src="https://laoguantx.top/article/数学/数学物理方法/拉普拉斯变换/image-20251022140759574.png" alt="image-20251022140759574" style="zoom:50%;" />
>
> 如图所示，两个线圈具有相同的$R$（电阻），$L$（电感）和$C$（电容），线圈之间互感系数为$M$。初级线路有电压为$E_0$的直流电源。现在接通初级线路中的开关$s$， 问次级电路中电流$j_2$的变化情况如何？
>
> **解2**：根据基尔霍夫定律，初级电路满足：
> $$
> L\frac{\mathrm{d}}{\mathrm{d}t}j_1+Rj_1+\frac{1}{C}\int_0^tj_1\mathrm{d}t+M\frac{\mathrm{d}}{\mathrm{d}t}j_2=E_0
> $$
> 次级电路满足：
> $$
> L\frac{\mathrm{d}}{\mathrm{d}t}j_2+Rj_1+\frac{1}{C}\int_0^tj_2\mathrm{d}t+M\frac{\mathrm{d}}{\mathrm{d}t}j_1=0
> $$
> 初始条件为：$j_1(0)=j_2(0)=0$。
>
> 对方程进行拉普拉斯变换，设$J(p)=\mathscr{L}[j(t)]$得：
> $$
> \left(Lp+R+\frac{1}{Cp}\right)J_1+MpJ_2=\frac{E_0}{p}
> $$
>
> $$
> \left(Lp+R+\frac{1}{Cp}\right)J_2+MpJ_1=0
> $$
>
> 求解得：
> $$
> \begin{aligned}&J_2=\frac{E_0Mp^2}{M^2p^4-\left(Lp^2+Rp+1/C\right)^2}\\&J_2=\frac{E_0}{2}{\left(\frac{1}{(L+M)p^2+Rp+1/C}-\frac{1}{(L-M)p^2+Rp+1/C}\right)}\end{aligned}
> $$
> 配方、利用拉普拉斯变换的平移性质，进行拉普拉斯逆变换，解得：
> $$
> j_2(t)=\frac{E_0}{2(L+M)\sqrt{\frac{1}{C(L+M)}-\frac{R^2}{4(L+M)^2}}}\mathrm{e}^{-\frac{R}{2(L+M)}t}\sin\sqrt{\frac{1}{C(L+M)}-\frac{R^2}{4(L+M)^2}}t-\frac{E_0}{2(L-M)\sqrt{\frac{1}{C(L-M)}-\frac{R^2}{4(L-M)^2}}}\mathrm{e}^{-\frac{R}{2(L-M)}t}\sin\sqrt{\frac{1}{C(L-M)}-\frac{R^2}{4(L-M)^2}}t
> $$

### 4、求解弹簧-质量-阻尼系统的强迫振动问题

> **例**：
>
> <img src="https://laoguantx.top/article/数学/数学物理方法/拉普拉斯变换/image-20251022142657716.png" alt="image-20251022142657716" style="zoom:50%;" />
>
> 求解方程：
> $$
> m\ddot{x}+kx=f(t),x(0)=x_0,\dot{x}(0)=\dot{x}_0
> $$
> **解**：
>
> 记$X(p)=\mathscr{L}[x(t)],F(p)=\mathscr{L}[f(t)]$，对方程两边进行拉普拉斯变换，得：
> $$
> mp^2X-mpx_0-m\dot{x}_0+kX=F
> $$
> 求解得：
> $$
> X=\frac{F+mpx_0+m\dot{x}_0}{mp^2+K}=\frac{1}{m}\frac{F}{p^2+K/m}+\frac{px_0}{mp^2+K/m}+\frac{\dot{x}_0}{p^2+K/m}
> $$
> 求拉普拉斯逆变换：
> $$
> x(t)=\frac{1}{m}\mathscr{L}^{-1}\left(F\frac{1}{p^2+k/m}\right)+\mathscr{L}^{-1}\left(\frac{px_0}{p^2+k/m}\right)+\mathscr{L}^{-1}\left(\frac{\dot{x}_0}{p^2+k/m}\right)
> $$
>
> $$
> x(t)=x_0\cos\left(\sqrt{\frac{k}{m}}t\right)+\frac{F+m\dot{x}_0}{k}\sin\left(\sqrt{\frac{k}{m}}t\right)
> $$
>
> 由答案可知，该系统的频率为$\sqrt\frac{k}{m}$。

### 5、求定积分

> **例**：
> $$
> I(t)=\int_0^\infty\frac{\cos tx}{x^2+a^2}dx
> $$
> 当然，这个积分可以使用留数定理求解。不过此处尝试使用拉普拉斯变换。首先对两边求拉普拉斯变换：
> $$
> \mathscr{L}[I(t)]=\int_0^\infty\frac{\mathscr{L}[\cos tx]}{x^2+a^2}\mathrm{d}x
> $$
> 积分函数的分子：
> $$
> \mathscr{L}[\cos tx]=\int_0^\infty\cos tx\mathrm{e}^{-pt}\mathrm{d}t=\frac{p}{p^2+x^2}
> $$
> 交换积分和拉普拉斯变换的次序：
> $$
> \begin{aligned}\mathscr{L}[I(t)]&=\int_0^\infty\frac{p}{(p^2+x^2)(x^2+a^2)}\mathrm{d}x\\&=\frac{p}{a^2-p^2}\int_0^\infty\left[\frac{1}{p^2+x^2}-\frac{1}{x^2+a^2}\right]\mathrm{d}x\end{aligned}
> $$
>
> $$
> \begin{aligned}\int_0^\infty\frac{1}{1+x^2}\mathrm{d}x&\xlongequal{x=\tan y}\int_0^{\pi/2}\frac{1}{1+\tan y^2}\frac{1}{\cos^2y}\mathrm{d}y\\&=\int_0^{\pi/2}\cos^2y\mathrm{d}y\\&=\frac{\pi}{2}\end{aligned}
> $$
>
> 得到：
> $$
> \mathscr{L}[I(t)]=\frac{\pi}{2}\frac{p}{a^2-p^2}\left(\frac{1}{p}-\frac{1}{a}\right)=\frac{\pi}{2a}\frac{1}{a+p}
> $$
> 使用拉普拉斯逆变换得到：
> $$
> I(t)=\frac{\pi}{2a}e^{-at}
> $$

