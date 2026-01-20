---
title: 柱函数
published: 2025-12-17
category: ["数学", "数学物理方法"]
tags: ["偏微分方程", "数学物理方程", "常微分方程"]
alias: "columnfunction"
---
## 一、三类柱函数

前面已经求出$\nu$阶贝塞尔方程的通解，即：
$$
y(x)=C_1J_\nu(x)+C_2J_{-\nu}(x)
$$
或者是：
$$
y(x)=C_1J_\nu(x)+C_2N_{\nu}(x)
$$
其中第一个通解不适用于整数$m$阶贝塞尔方程，但是第二个对整数阶的情况照样适用。通常又取线性独立的两个函数：
$$
H_\nu^{(1)}(x)=J_\nu(x)+\mathrm{i}N_\nu(x)
$$

$$
H_\nu^{(2)}(x)=J_\nu(x)-\mathrm{i}N_\nu(x)
$$

这两个函数叫做第一种和第二种汉克尔函数，于是$\nu$阶贝塞尔方程的通解又可以表示为：
$$
y(x)=C_1H_\nu^{(1)}(x)+C_2H_\nu^{(2)}(x)
$$
贝塞尔函数、诺依曼函数、汉克尔函数分别叫做第一类、第二类、第三类柱函数。

前面提到过，当$x\to 0$时，$J_{-v}(x),N_0(x),N_\nu(x)$都不是有限的，由于圆柱内部的自然边界条件，应当舍弃诺依曼函数和负阶贝塞尔函数，只要零阶和正阶的贝塞尔函数。当$x\to\infty$时，根据柱函数的渐进公式（后面会证）：
$$
\begin{aligned}&H_{\nu}^{(1)}\left(x\right)\sim\sqrt{\frac{2}{\pi x}}\mathrm{e}_{\cdot}^{\mathrm{i}\left(x-\nu\pi/2-\pi/4\right)}\\&H_{\nu}^{(2)}(x)\sim\sqrt{\frac{2}{\pi x}}\mathrm{e}^{-\mathrm{i}(x-\nu\pi/2-\pi/4)}\\&J_{\nu}(x)\sim\sqrt{\frac{2}{\pi x}}\cos(x-\nu\pi/2-\pi/4)\\&N_{\nu}(x)\sim\sqrt{\frac{2}{\pi x}}\sin(x-\nu\pi/2-\pi/4)\end{aligned}
$$
$J_\nu(x),N_\nu(x),H_\nu^{(1)},H_\nu^{(2)}$都趋向于$0$，均不可舍弃。

下面推导三类柱函数的递推公式，以贝塞尔函数为例，根据其定义，得：
$$
\begin{aligned}\frac{\mathrm{d}}{\mathrm{d}x}\left[\frac{J_{\nu}(x)}{x^{\nu}}\right]&=\frac{\mathrm{d}}{\mathrm{d}x}\left[\sum_{k=0}^{\infty}\frac{(-1)^{k}}{k!\Gamma(\nu+k+1)}\left(\frac{1}{2}\right)^{\nu+2k}x^{2k}\right]\\&=\sum_{k=1}^\infty\frac{(-1)^k2k}{k!\Gamma(\nu+k+1)}\left(\frac{1}{2}\right)^{\nu+2k}x^{2k-1}\end{aligned}
$$
令$k=l+1$，则：
$$
\begin{aligned}\frac{\mathrm{d}}{\mathrm{d}x}\left[\frac{J_{\nu}(x)}{x^{\nu}}\right]&=\sum_{l=0}^{\infty}\frac{(-1)^{l+1}2(l+1)}{(l+1)!\Gamma(\nu+l+1+1)}\left(\frac{1}{2}\right)^{\nu+2l+2}x^{2l+1}\\&=-\frac{1}{x^\nu}\sum_{l=0}^\infty\frac{(-1)^l}{l!\Gamma(\nu+1+l+1)}\left(\frac{x}{2}\right)^{\nu+1+2l}\\&-\frac{J_{\nu+1}(x)}{x^\nu}\end{aligned}
$$
仿照这种方法，可以推导出：
$$
\frac{\mathrm{d}}{\mathrm{d}x}[x^\nu J_\nu(x)]=x^\nu J_{\nu-1}(x)
$$
上面两式都是贝塞尔函数的线性关系式，由于诺依曼函数时正负阶贝塞尔函数的线性组合、汉克尔函数是贝塞尔函数和诺依曼函数的线性组合，所以上面的两式也适用于诺依曼函数和汉克尔函数。总之，用$Z_\nu(x)$表示三类柱函数，总有：
$$
\frac{\mathrm{d}}{\mathrm{d}x}[x^\nu Z_\nu(x)]=x^\nu Z_{\nu-1}(x)
$$

$$
\frac{\mathrm{d}}{\mathrm{d}x}[\frac{Z_\nu(x)}{x^\nu}]=-\frac{J_{\nu-1}(x)}{x^\nu}
$$

将上面两式展开，并联立化简，可以得到递推公式：
$$
Z_{\nu-1}(x)-Z_{\nu+1}(x)=2Z_{\nu}'(x)
$$

$$
Z_{\nu+1}(x)-2\nu \frac{Z_{\nu}(x)}x+Z_{\nu-1}(x)=0
$$

## 二、贝塞尔方程

### 1、贝塞尔函数与本征值问题

对于圆柱的内部问题，如果柱侧面有齐次边界条件，则贝塞尔函数$\mu<0$的情况应该排除，因为$\mu<0$导出的虚宗量贝塞尔方程的解为$C_1I_\nu+C_2I_{-\nu}$，其中由于$x=0$处有限，故$C_2=0$，又由于$I_\nu$恒正，故解恒不为$0$，得到$C_1=0$，为平凡解，除非$x=\sqrt{\mu}\rho=0$。（对于拉普拉斯方程的虚宗量贝塞尔方程的通解为：）
$$
C_1 I_\nu(x) + C_2 I_{-\nu}(x)
$$
$$
I_\nu(x) = \mathrm{i}^{-\nu} J_\nu(\mathrm{i}x) = \sum_{k=0}^\infty \frac{1}{k!\Gamma(\nu+k+1)} \left(\frac{x}{2}\right)^{\nu+2k}, \quad x = \sqrt{-\mu\rho}
$$
$$
I_{-\nu}(x) = \mathrm{i}^{\nu} J_{-\nu}(\mathrm{i}x) = \sum_{k=0}^\infty \frac{1}{k!\Gamma(-\nu+k+1)} \left(\frac{x}{2}\right)^{-\nu+2k}
$$

这样，只需要考虑$\mu \ge 0$的情况，在这种情况下，$R(\rho)$应该是整数$m$阶贝塞尔方程的解，由于圆柱轴上的自然边界条件，这两个方程的两个线性独立解之中，我们只要负阶贝塞尔函数：
$$
R(\rho)=J_m(x)=J_m(\sqrt{\mu}\rho)\quad (m\ge 0)
$$
柱侧的边界条件决定了$\mu$的可能值，这些就是整数$m$阶贝塞尔方程在所给边界条件的本征值，本征函数为$J_m(\sqrt{\mu}\rho)$，下面分别讨论不同类型的边界条件。

#### (1) 第一类齐次边界条件

第一类齐次边界条件$R(\rho_0)=0$，$\rho_0$为圆柱的半径，代入到解中得到$J_m(\sqrt\mu \rho_0)=0$，这是一个超越方程，使用工具求解。本征值：
$$
\mu_n^{(m,1)}=\left(\frac{x_n^{(m,1)}}{\rho_0}\right)^2=\left(\frac{x_n^{(m)}}{\rho_0}\right)^2
$$
其中$x_n^{(m)}$是$J_m(x)$的第$n$个正零点，而$x_n^{(m,1)}$表示$J_m(x)$在满足第一类齐次边界条件下方程：
$$
J_m(x_0)=0
$$
的第$n$个正根，故$x_n^{(m,1)}=x_n^{(m)}$。为什么一定是正根呢，首先$\rho_0\neq 0$，如果$\mu=0$，则原方程退化为简单常微分方程，其解为：
$$
R(\rho)=\begin{cases}E+F\ln\rho&\quad(m=0)\\E\rho^m+\dfrac{F}{\rho^m}&\quad(m=1,2,3,\cdots)&&\end{cases}
$$
在第一类齐次边界条件下，只有平凡解，无意义。所以，$\mu=0$不是本征值。

> [!NOTE]
>
> 贝塞尔函数的零点可以通过下面公式计算：
> $$
> x_n^{(m)}=A-\frac{B-1}{8A}\left(1+\frac{C}{3\left(4A\right)^2}+\frac{2D}{15\left(4A\right)^4}+\frac{E}{105\left(4A\right)^6}+\cdots\right)
> $$
> 其中：
> $$
> A=\left(m-\frac{1}{2}+2n\right)\frac{\pi}{2}B=4m^{2},C=7B-31,D=83B^2-982B+3779
> $$
>
> $$
> E=6949B^3-153855B^2+1585743B-6277237
> $$
>
> 非常逆天。同时，特殊位置的贝塞尔函数存在下面关系：
> $$
> J_0\left(0\right)=1,\quad J_m\left(0\right)=0
> $$
>
> $$
> x\to\infty,J_m\left(x\right)\sim\sqrt{1/x}\cos\left(x-m\pi/2-\pi/4\right)
> $$
>
> 即$x\to\infty$时，贝塞尔函数近似于三角函数。
>
> 由于：
> $$
> J_m(x)=(-1)^mJ_m(x)
> $$
> 则贝塞尔函数零点正负成对，绝对值相同。
>
> 由于：
> $$
> x\to\infty,J_m\left(x\right)\sim\sqrt{1/x}\cos\left(x-m\pi/2-\pi/4\right)
> $$
> 则贝塞尔函数有无穷多个零点。
>
> 由于：
> $$
> \frac{\mathrm{d}}{\mathrm{d}x}[x^m J_m(x)]=x^m J_{m-1}(x)
> $$
> 则$J_m(x)$的绝对值最小的零点比$J_{m+1}(x)$的绝对值最小的零点更接近于零。
>
> 由于：
> $$
> \frac{\mathrm{d}}{\mathrm{d}x}[\frac{J_m(x)}{x^m}]=-\frac{J_{m-1}(x)}{x^m}
> $$
> 则$J_m(x)$与$J_{m+1}(x)$的零点两两相间。

#### (2) 第二类齐次边界条件

第二类齐次边界条件$R'(\rho_0)=0$，如果$\mu=0$，则原方程退化为简单常微分方程，其解为：
$$
R(\rho)=\begin{cases}E+F\ln\rho&\quad(m=0)\\E\rho^m+\dfrac{F}{\rho^m}&\quad(m=1,2,3,\cdots)&&\end{cases}
$$
在第二类齐次边界条件下，只有平凡解，无意义。所以，$\mu=0$不是本征值。在$\mu\neq0$的情况下，这个条件即为$J'_m(\sqrt{\mu}\rho_0)=0$，所以本征值：
$$
\mu_n^{(m,2)}=\left(\frac{x_n^{(m,2)}}{\rho_0}\right)^2
$$
记$x_0=\sqrt{\mu}\rho_0$，其中$x_n^{(m,2)}$是$J_m(x)$在第二类齐次边界条件下方程：
$$
\frac{x_0}{\rho_0}J'_m(x_0)=0
$$
的第$n$个正根，即$J'_m(x)$的第$n$个正的零点。在$m=0$的特例下：
$$
J_0'(x)=-J_1(x)
$$
也就是$x_n^{(0,2)}=x_n^{(0)}$，其他情况下，根据递推公式：
$$
J_{m-1}(x)-J_{m+1}(x)=2J_{m}'(x)
$$
得知$J'_m(x)$的零点可以从$J_{m-1}(x)$和$J_{(m+1)}(x)$的零点得出。

> [!NOTE]
>
> 贝塞尔函数导数的零点$x_n^{(m,2)}>0$可以使用下面公式计算：
> $$
> x_n^{(m)}=A-\frac{B+3}{8A}-\frac{C}{6\left(4A\right)^3}-\frac{D}{15\left(4A\right)^5}-\cdots
> $$
> 其中：
> $$
> A=\left(m+\frac{1}{2}+2n\right)\frac{\pi}{2},B=4m^2, C=7B^2+82B-9
> $$
>
> $$
> D=83B^3+2075B^2-3039B+3537
> $$
>
> 非常逆天。

#### (3) 第三类齐次边界条件

第三类齐次边界条件形如$R(\rho_0)+HR'(\rho_0)=0$，记$x_0=\sqrt{\mu}\rho_0,h=\frac{\rho_0}H$，这个条件即为方程：
$$
J_m(x_0)=\frac{x_0}{h+m}J_{m+1}(x_0)
$$
第三类齐次边界条件下的本征值为：
$$
\mu_n^{(m,3)}=\left(\frac{x_n^{(m,3)}}{\rho_0}\right)^2
$$
其中$x_n^{(m,3)}$是方程的第$n$个正根。这玩意你就去查表吧。

> [!NOTE]
>
> 后面统一使用$x_n^{(m)}$表示$J_m(x)$的第$n$个正零点，$x_m^{(m,t)},\mu_n^{(m,t)}$表示第$t$类齐次边界条件下的第$n$个正根或者本征值。不指明齐次边界条件种类的话，记本征值为$\mu_n^{(m)}$或者$\mu_n$。

### 2、贝塞尔函数的正交关系

贝塞尔函数是施图姆-刘维尔本征值问题正交关系的特例，对应于不同本征值的同节贝塞尔函数在区间$[0,\rho_0]$上带权重$\rho$正交：
$$
\int_{0}^{\rho_{0}}J_{m}(\sqrt{\mu_{n}}\rho)J_{m}(\sqrt{\mu_{l}}\rho)\rho d\rho=0\quad(n\neq l)
$$

### 3、贝塞尔函数的模

下面计算贝塞尔函数$J_m(\sqrt{\mu_n^{(m)}}\rho)$的模。
$$
\left[N_{n}^{(m)}\right]^{2}=\int_{0}^{\rho_{0}}\left[J_{m}\left(\sqrt{\mu_{n}^{(m)}}\rho\right)\right]^{2}\rho\mathrm{~d}\rho
$$
记$\sqrt{\mu_n^{(m)}}\rho=x,\sqrt{\mu_n^{(m)}}\rho_0=x_0$，则：

$$
\left[N_{n}^{(m)}\right]^{2}=\frac{1}{\mu_{n}^{(m)}}\int_{0}^{x_{0}}\left[\mathrm{~J}_{m}(x)\right]^{2}x\mathrm{d}x=\frac{1}{2\mu_{n}^{(m)}}\int_{0}^{x_{0}}\left[\mathrm{~J}_{m}(x)\right]^{2}\mathrm{d}\left(x^{2}\right)
$$
$$
\left[N_{n}^{(m)}\right]^{2}=\frac{1}{2\mu_{n}^{(m)}}\left[x^{2}\mathrm{~J}_{m}^{2}(x)\right]_{0}^{x_{0}}-\frac{1}{\mu_{n}^{(m)}}\int_{0}^{x_{0}}\left[x^{2}\mathrm{~J}_{m}(x)\right]\mathrm{~J}_{m}^{\prime}(x)\mathrm{d}x
$$

然后将右边积分使用贝塞尔方程改写：
$$
\left[N_{n}^{(m)}\right]^{2}=\frac{1}{2\mu_{(m)}}\left[x^{2}\mathrm{J}_{m}^{2}\right]_{0}^{x_{0}}+\frac{1}{\mu_{(m)}}\int_{0}^{x_{0}}\left[x^{2}\mathrm{J}_{m}^{\prime\prime}(x)+x\mathrm{J}_{m}^{\prime}(x)-m^{2}\mathrm{J}_{m}(x)\right]\mathrm{J}_{m}^{\prime}(x)\mathrm{d}x
$$
最后得到：
$$
\left[N_{n}^{(m)}\right]^{2}=\frac{1}{2}\left(\rho_0^2-\frac{m^2}{\mu_n^{(m)}}\right)\left[\mathbf{J}_m(\sqrt{\mu_n^{(m)}}\rho_0)\right]^2+\frac{1}{2}\rho_0^2\left[\mathbf{J}_m^{\prime}(\sqrt{\mu_n^{(m)}}\rho_0)\right]^2
$$
分别代入不同的齐次边界条件类型：

- 第一类齐次边界条件：
  $$
  \left[N_{n}^{(m)}\right]^{2}=\frac{1}{2}\rho_{0}^{2}\left[J_{m+1}\left(\sqrt{\mu_{n}^{(m)}}\rho_{0}\right)\right]^{2}
  $$

- 第二类齐次边界条件：
  $$
  \left[N_n^{(m)}\right]^2=\frac{1}{2}\left(\rho_0^2-\frac{m^2}{\mu_n^{(m)}}\right)\left[J_m\left(\sqrt{\mu_n^{(m)}}\rho_0\right)\right]^2
  $$

- 第三类齐次边界条件：
  $$
  \left[N_{n}^{(m)}\right]^{2}=\frac{1}{2}\left(\rho_{0}^{2}-\frac{m^{2}}{\mu_{n}^{(m)}}+\frac{\rho_{0}^{2}}{\mu_{n}^{(m)}\mathrm{H}}\right)\left[\mathrm{J}_{m}\left(\sqrt{\mu_{n}^{(m)}}\rho_{0}\right)\right]^{2}
  $$

### 4、傅里叶-贝塞尔级数

根据施图姆-刘维尔本征值问题性质，本征函数组$J_m(\sqrt{\mu_n^{(m)}}\rho)$是完备的，可以作广义傅里叶级数展开的基。在区间$[0,\rho_0]$上的函数$f(\rho)$的傅里叶-贝塞尔级数是：
$$
\begin{cases}\begin{aligned}&f(\rho)=\sum_{n=1}^{\infty}f_{n}\mathrm{~J}_{m}\left(\sqrt{\mu_{n}^{(m)}}\rho\right)\\&f_{n}=\frac{1}{\left[N_{n}^{(m)}\right]^{2}}\int_{0}^{\rho_{0}}f(\rho)\mathrm{J}_{m}\left(\sqrt{\mu_{n}^{(m)}}\rho\right)\rho\mathrm{d}\rho\end{aligned}\end{cases}
$$

> [!TIP]
>
> 计算$f_n$时，可以使用下面的公式，分别是对之前结论的应用：
> $$
> \int x^{-m} \mathrm{J}_{m+1}(x) \, \mathrm{d}x = -x^{-m} \mathrm{J}_{m}(x) + C
> $$
> $$
> \int \mathrm{J}_{1}(x) \, \mathrm{d}x = -\mathrm{J}_{0}(x) + C
> $$
> $$
> \int x^{m} \mathrm{J}_{m-1}(x) \, \mathrm{d}x = x^{m} \mathrm{J}_{m}(x) + C
> $$

对于$\rho_0\to\infty$的情况，有傅里叶-贝塞尔积分：
$$
\begin{cases}\begin{aligned}f(\rho)=\int_0^\infty F(\omega)J_m(\omega\rho)\omega\mathrm{d}\omega\\F(\omega)=\int_0^\infty f(\rho)J_m(\omega\rho)\rho\mathrm{d}\rho\end{aligned}\end{cases}
$$

### 5、母函数

将$e^{\frac{1}2xz}$和$e^{-\frac{1}2x\frac1z}$分别展开为绝对收敛级数，逐项相乘得到：
$$
e^{\frac{1}{2}x\left(z-\frac{1}{z}\right)} =
\sum_{m=0}^{\infty} \left[ \sum_{n=0}^{\infty} \frac{(-1)^n}{(m+n)! \; n!} \left( \frac{x}{2} \right)^{m+2n} \right] z^m+ \sum_{m=-\infty}^{-1} \left[ (-1)^m \sum_{n=0}^{\infty} \frac{(-1)^n}{n! \; (|m|+n)!} \left( \frac{x}{2} \right)^{|m|+2n} \right] z^m\quad\left( 0 < |z| < \infty \right)
$$
上式前一个求和的$[]$内为$m$阶贝塞尔函数，后面一个$[]$是$(-1)^mJ_{|m|}(x)$，即$J_{-|m|}(x)$，所以：
$$
e^{\frac{1}{2}x\left(z-\frac{1}{z}\right)} = \sum_{m=-\infty}^{\infty} J_m(x) z^m \quad (0 < |z| < \infty)
$$
所以$e^{\frac{1}{2}x\left(z-\frac{1}{z}\right)}$叫做贝塞尔函数的母函数，令$z=e^{\mathrm{i}\zeta}$，上式改写为：

$$
e^{\mathrm{i}x\sin{\zeta}} = \sum_{m=-\infty}^{\infty} J_m(x) e^{\mathrm{i}m\zeta}
$$

又令$\zeta=\psi-\frac{\pi}2$：

$$
e^{\mathrm{i}x\cos{\psi}} = \sum_{m=-\infty}^{\infty} (-i)^m J_m(x) e^{\mathrm{i}m\psi}
$$

再令$\psi=\theta +\pi$：

$$
e^{\mathrm{i}x\cos{\theta}} = \sum_{m=-\infty}^{\infty} \mathrm{i}^m J_m(x) e^{\mathrm{i}m\theta}
$$
上述公式都是等价的。

### 6、积分表达式

把母函数$e^{\frac{1}{2}x\left(z-\frac{1}{z}\right)}$等式的右边看作是复数形式的傅里叶级数，那么$J_m(x)$就是$x^{\mathrm{i}s\sin \zeta}$的傅里叶系数，所以：
$$
J_m(x) = \frac{1}{2\pi} \int_{-\pi}^{\pi} e^{ix\sin{\zeta}} e^{-im\zeta} \mathrm{d}\zeta 
= \frac{1}{2\pi} \int_{-\pi}^{\pi} e^{ix\sin{\zeta} - im\zeta} \mathrm{d}\zeta
$$
利用复数的三角函数展开，化简积分，得到：
$$
J_m(x)=\frac 1{2\pi}\int_{-\pi}^{\pi}e^{\mathrm{i}m\zeta-\mathrm{i}x\sin \zeta}\mathrm{d}\zeta
$$
这就是贝塞尔函数的积分表达式，使用变量代换可以得到其他形式。

### 7、诺依曼函数

研究圆柱内部问题时，圆柱轴上的自然边界条件排除了诺依曼函数，但是如果是空心圆柱，不涉及$\rho=0$处的边界条件，就不能排除诺依曼函数了。例如对于定解问题：
$$
\begin{cases}
  \begin{aligned}
    &u_t - a^2 \Delta_2 u = 0, \\
    &u \big|_{\rho = \rho_1} = U_0\quad u \big|_{\rho = \rho_2} = U_0 \\
    &u \big|_{t = 0} = f(\rho)
  \end{aligned}
\end{cases}
$$
首先利用$u=U_0+v$，将边界条件化为齐次：
$$
\begin{cases}
  \begin{aligned}
    &v_t - a^2 \Delta_2 v = 0, \\
    &v \big|_{\rho = \rho_1} = 0\quad v \big|_{\rho = \rho_2} = 0 \\
    &v \big|_{t = 0} = f(\rho)-U_0
  \end{aligned}
\end{cases}
$$
因为是当前是在极坐标系，所以不考虑$Z(z)$，问题也与$\varphi$无关，所以$m=0$，利用：
$$
v=\left[ A J_0(k\rho) + B N_0(k\rho) \right] e^{-k^2 a^2 t}
$$
其中，$ A J_0(k\rho) + B N_0(k\rho)$是特征函数。代入边界条件：
$$
\begin{cases}AJ_{0}(k\rho_{1})+BN_{0}(k\rho_{1})=0\\AJ_{0}(k\rho_{2})+BN_{0}(k\rho_{2})=0\end{cases}
$$
该齐次线性方程组有非零解的条件时系数行列式为零，所以：
$$
J_{0}(k\rho_{1})N_{0}(k\rho_{2})-J_{0}(k\rho_{2})N_{0}(k\rho_{1})=0
$$
这个方程的根$k_n$可以查表得出，然后求解得到$A_n,B_n$的比值：
$$
\frac{B_{n}}{A_{n}}=-\frac{J_{0}\left(k_{n}\rho_{1}\right)}{N_{0}\left(k_{n}\rho_{1}\right)}
$$
将上面的本征解叠加，得到：
$$
v(\rho,t)=\sum_{n=1}^{\infty}C_n\left[N_0(k_n\rho_1)J_0(k_n\rho)-J_0(k_n\rho_1)N_0(k_n\rho)\right]e^{-k_n^2a^2t}
$$
上面的$C_n=\frac{A_n}{N_0(k_n\rho_1)}$，尚未求出，为了求出$C_n$，要代回初始条件：
$$
\sum_{n=1}^{\infty}C_{n}\left[N_{0}\left(k_{n}\rho_{1}\right)J_{0}\left(k_{n}\rho\right)-J_{0}\left(k_{n}\rho_{1}\right)N_{0}\left(k_{n}\rho\right)\right]=f(\rho)-U_0
$$
将上式右边以$N_{0}\left(k_{n}\rho_{1}\right)J_{0}\left(k_{n}\rho\right)-J_{0}\left(k_{n}\rho_{1}\right)N_{0}\left(k_{n}\rho\right)$为基展开（可以证明他是正交的），比较两边系数得出$C_n$。算完之后反代得到$u$的表达式。

### 8、汉克尔函数

波动方程在柱坐标系中分离变量形式的解为：
$$
\left\{
\begin{aligned}
    &J_m\left(\sqrt{k^2 - h^2}\,\rho\right) \\
    &N_m\left(\sqrt{k^2 - h^2}\,\rho\right)
\end{aligned}
\right\}
\text{或}
\left\{
\begin{aligned}
    &H_m^{(1)}\left(\sqrt{k^2 - h^2}\,\rho\right) \\
    &H_m^{(2)}\left(\sqrt{k^2 - h^2}\,\rho\right)
\end{aligned}
\right\}
\left\{
\begin{aligned}
    &\cos m\varphi \\
    &\sin m\varphi
\end{aligned}
\right\}
\left\{
\begin{aligned}
    &\cos hz \\
    &\sin hz
\end{aligned}
\right\}
\left\{
\begin{aligned}
    &e^{ikat} \\
    &e^{-ikat}
\end{aligned}
\right\}
$$
这里将$\cos kat$和$\sin kat$表示为了复数形式。在$\rho$较大时，取时间因子为$e^{-\mathrm{i}kat}$，并省略有关$\varphi,z$的因子，利用渐进公式，有：

$$
\begin{aligned}
&\mathrm{H}_m^{(1)}\left(\sqrt{k^2-h^2}\,\rho\right) e^{-ikat}
\sim 
\sqrt{\frac{2}{\pi\sqrt{k^2-h^2}\,\rho}}
e^{i\left(\sqrt{k^2-h^2}\,\rho - kat - m\pi/2 - \pi/4\right)}
\\&\mathrm{H}_m^{(2)}\left(\sqrt{k^2-h^2}\,\rho\right) e^{-ikat}
\sim 
\sqrt{\frac{2}{\pi\sqrt{k^2-h^2}\,\rho}}
e^{-i\left(\sqrt{k^2-h^2}\,\rho + kat - m\pi/2 - \pi/4\right)}
\\&J_m\left(\sqrt{k^2-h^2}\,\rho\right) e^{-ikat}
\sim 
\sqrt{\frac{2}{\pi\sqrt{k^2-h^2}\,\rho}}
\cos\left(\sqrt{k^2-h^2}\,\rho - m\pi/2 - \pi/4\right)
e^{-ikat}
\\&N_m\left(\sqrt{k^2-h^2}\,\rho\right) e^{-ikat}
\sim 
\sqrt{\frac{2}{\pi\sqrt{k^2-h^2}\,\rho}}
\sin\left(\sqrt{k^2-h^2}\,\rho - m\pi/2 - \pi/4\right)
e^{-ikat}
\end{aligned}
$$
上面第一个式子是朝着$+\rho$方向传播的波，即向外发散的波，第二个式子是朝着$-\rho$方向传播的波，即向内会聚的波。但是贝塞尔函数和诺依曼函数中$\rho,t$是分离的，是驻波。

如果取时间因子为$e^{ikat}$，则上面第一个式子是朝着$-\rho$方向传播的波，即向内会聚的波，第二个式子是朝着$+\rho$方向传播的波，即向外发散的波。贝塞尔函数和诺依曼函数仍然是驻波。

这样研究波的发散问题，使用汉克尔函数研究比较方便。例如一个半径为$\rho_0$的长圆柱面，其径向速度分布为：
$$
v=v_0\cos\omega t
$$
试求解柱面发射的恒定声振动的速度势$u$，设$\rho_0$远小于声波波长$\lambda$。该定解问题为：
$$
\begin{cases}u{_{tt}}-a^2\Delta_2u=0\\u_\rho\mid_{\rho=\rho_0}=v_0\mathrm{e}^{-\mathrm{i}\boldsymbol{\omega}t}\end{cases}
$$
该问题与$Z(z),\varphi$无关，所以没有$z$且$m=0$，边界条件的时间因子$e^{-\mathrm{i}\omega t}$，其实部是$\cos \omega t$，能够得到问题的恒定解为：
$$
\begin{Bmatrix}H_{0}^{(1)}(\kappa\rho)\\H_{0}^{(2)}(\kappa\rho)\end{Bmatrix}e^{-ikat}
$$
且$ka=\omega$，$a=f\lambda$表示波速，$k=\frac{2\pi}{\lambda}$表示波数。由于这是一个声波发射问题，已知时间函数是$e^{-\mathrm{i}\omega t}$，因此只取$H_0^{(1)}(k\rho)$，舍弃$H_0^{(2)}(k\rho)$，在这个例子中，$k$只有$\frac{\omega}{a}$一个值，所以无需叠加，故结果形式为：
$$
u\left(\rho,t\right)=AH_0^{\left(1\right)}\left(\frac{\omega}{a}\rho\right)e^{-\mathrm{i}\omega t}
$$
将结果代入边界条件，由于$\rho_0\ll\lambda$，所以$\frac{\omega}{a}\rho$很小，根据汉克尔函数的表达式（前面找），当参数趋向于零时，利用泰勒展开，可以将上式化为：
$$
A\left[\frac{\partial}{\partial\rho}\left(1+\mathrm{i}\frac{2}{\pi}\mathrm{ln}\frac{\omega\rho}{2a}+\mathrm{i}C\right)\right]_{\rho=\rho_0}=v_0
$$
即：
$$
\mathrm{i}A\frac{2}{\pi\rho_0}=v_0
$$
回代，得到答案：
$$
u\left(\rho,t\right)=-\mathrm{i} v_0\rho_0H_0^{\left(1\right)}\left(\frac{\omega}{a}\rho\right)e^{-\mathrm{i}\omega t}
$$
当$\rho$较大的时候使用渐进公式，并取实部：
$$
u\left(\rho,t\right)\sim v_0\rho_0\sqrt{\frac{\pi a}{2\omega\rho}}\sin\left(\frac{\omega}{a}\rho-\omega t-\frac{\pi}{4}\right)
$$
这是一个振幅按照$\frac{1}{\sqrt{\rho}}$减小的柱面波。

## 三、虚宗量贝塞尔方程

前面研究的圆柱状区域的拉普拉斯方程定解问题都是柱侧面有齐次边界条件的，这种问题只需要考虑$\mu\ge0$的情况，如果圆柱上下底面边界条件齐次，但是侧面边界条件非齐次，这时齐次方程$Z''+h^2Z=0$和上下底面的齐次边界条件构成本征值问题，其中$h^2=-\mu\ge0$，应该考虑$\mu\le0$的解，$\mu=0$的情况比较简单，当$\mu<0$时，则引至虚宗量贝塞尔方程：
$$
x^2\frac{\mathrm{d}^2R}{\mathrm{d}x^2}+x\frac{\mathrm{d}R}{\mathrm{d}x}-(x^2+m^2)R=0\quad(x=h\rho)
$$
方程的解为$m$阶虚宗量贝塞尔函数：
$$
I_m(x)=\sum_{k=0}^\infty\frac{1}{k!(m+k)!}{\left(\frac{x}{2}\right)}^{m+2k}
$$
对于整数$m$，$I_m(x)=I_{-m}(x)$，不是线性独立的，需要寻找另一个解，根据：
$$
H_{\nu}^{(1)}(\mathrm{i}x)=J_{\nu}(\mathrm{i}x)+\mathrm{i}N_{\nu}(\mathrm{i}x)
$$
有：
$$
H_\nu^{(1)}(\mathrm{i}x)=\frac{\mathrm{e}^{-\mathrm{i}\nu\pi}J_\nu(\mathrm{i}x)-J_{-\nu}(\mathrm{i}x)}{-\mathrm{i}\sin\nu\pi}
$$
继续变形，得到：
$$
H_{\nu}^{(1)}(\mathrm{i}x)=\frac{\mathrm{e}^{-\mathrm{i}\nu\pi}\mathrm{i}^{\nu}I_{\nu}(x)-\mathrm{i}^{-\nu}I_{-\nu}(x)}{-\mathrm{i}\sin\nu\pi}=\frac{\mathrm{e}^{-\mathrm{i}\frac{\nu}{2}\pi}}{-\mathrm{i}}\frac{I_{\nu}(x)-I_{-\nu}(x)}{\sin\nu\pi}
$$
右边乘以$\pi\mathrm{i}e^{\mathrm{i}\nu\pi/2}$，使其变为实值函数，记作$K_\nu(x)$，即虚宗量汉克尔函数：
$$
K_\nu(x)=\frac{\pi}{2}\frac{I_{-\nu}(x)-I_\nu(x)}{\sin\nu\pi}
$$
于是$\nu$阶虚宗量贝塞尔方程的两个线性解即为虚宗量贝塞尔函数和虚宗量汉克尔函数。令$\nu$趋向于整数$m$，有：
$$
\begin{aligned}
\lim_{\nu \to m} K_\nu(x)
&= \lim_{\nu \to m} \frac{\pi}{2} \mathrm{i}\mathrm{e}^{\mathrm{i} \frac{\pi}{2} \nu} H_\nu(\mathrm{i}x) \\
&= \lim_{\nu \to m} \frac{\pi}{2} \mathrm{i} \mathrm{e}^{\mathrm{i} \frac{\pi}{2} \nu} \left[ J_\nu(\mathrm{i}x) + \mathrm{i} N_\nu(\mathrm{i}x) \right] \\
&= \frac{\pi}{2} \mathrm{i}^{m+1} \left[ J_m(\mathrm{i}x) + \mathrm{i} N_m(\mathrm{i}x) \right] 
\end{aligned}
$$
化简右边的式子，得到：
$$
\begin{aligned}
K_m(x) 
&= \lim_{\nu \to m} K_\nu(x) \\
&= \frac{1}{2} \sum_{n=0}^{m-1} (-1)^n \frac{(m-n-1)!}{n!} \left( \frac{x}{2} \right)^{-m+2n} + (-1)^{m+1} \sum_{n=0}^{\infty} \frac{1}{n! (m+n)!} \left\{ \ln \frac{x}{2} - \frac{1}{2} \left[ \psi(m+n+1) + \psi(n+1) \right] \right\} \left( \frac{x}{2} \right)^{m+2n} \quad\left(m = 0, 1, 2, \cdots,\ |\arg x| < \pi \right).
\end{aligned}
$$
这个极限就是整数$m$阶虚宗量汉克尔函数，记作$K_m(x)$，当$m=0$时，第一个有限求和项不存在。

当$x\to0$时：
$$
I_1(0)=1,I_m(0)=0,K_m(x)\to\infty
$$
这样，如果所研究的区域包括圆柱轴线，即$x=h\rho=0$，那么在轴线上的自然边界条件应该排除虚宗量汉克尔函数。当$x\to\infty$时，引入渐渐公式，对于较大的$x$，有：
$$
I_m(x)=\frac{1}{2\sqrt{x}}e^x
$$

$$
K_m(x)=\frac{\pi}{2\sqrt{x}}e^{-x}
$$

所以如果研究区域伸向无穷远，应该排除$I_m(x)$。

## 四、球贝塞尔方程

使用球坐标对亥姆霍兹方程进行分离变量，得到球贝塞尔方程：
$$
r^2\frac{\mathrm{d}^2R}{\mathrm{d}r^2}+2r\frac{\mathrm{d}R}{\mathrm{d}r}+[k^2r^2-l(l+1)]R=0
$$
把自变数$r$和函数$R(r)$分别变换为$x$和$y(x)$：
$$
x=kr,R(r)=\sqrt{\frac{\pi}{2x}}y(x)
$$
则方程化为$l+\frac{1}{2}$阶贝塞尔方程：
$$
x^2\frac{\mathrm{d}^2y}{\mathrm{d}x^2}+x\frac{\mathrm{d}y}{\mathrm{d}x}+\left[x^2-\left(l+\frac{1}{2}\right)^2\right]y=0
$$
如果$k=0$，则方程退化，两个线性独立解为$r^l,\frac{1}{r^{l+1}}$，比较简单，下面讨论$k\neq0$的情况。

### 1、线性独立解

$l + 1/2 $阶贝塞尔方程有如下几种解
$$
J_{l+1/2}(x), \quad J_{-(l+1/2)}(x), \quad N_{l+1/2}(x), \quad H_{l+1/2}^{(1)}(x), \quad H_{l+1/2}^{(2)}(x)
$$

其中任取两个就组成$l + 1/2 $阶贝塞尔方程的线性独立解。这样，球贝塞尔方程的线性独立解也就是下列五种之中任取的两种：

- 球贝塞尔函数：

$$
j_l(x) = \sqrt{\frac{\pi}{2x}} J_{l+1/2}(x), \qquad j_{-l}(x) = \sqrt{\frac{\pi}{2x}} J_{-l+1/2}(x)
$$

- 球诺伊曼函数：

$$
n_l(x) = \sqrt{\frac{\pi}{2x}} N_{l+1/2}(x)
$$

- 球汉克尔函数：

$$
h_l^{(1)}(x) = \sqrt{\frac{\pi}{2x}} H_{l+1/2}^{(1)}(x)
$$
$$
h_l^{(2)}(x) = \sqrt{\frac{\pi}{2x}} H_{l+1/2}^{(2)}(x)
$$

### 2、递推公式

用 $z_l(x)$代表球贝塞尔函数、球诺伊曼函数及球汉克尔函数，即：
$$
\mathrm{z}_l(x)=\sqrt{\frac\pi{2x}}\mathrm{Z}_{l+1/2}(x)
$$
利用之前的方法，可以得到如下几个递推公式：
$$
z_{l-1}(x) + z_{l+1}(x) = (2l+1) \frac{z_l(x)}{x}
$$

$$
\frac{\mathrm{d}}{\mathrm{d}x} \left[ z_l(x) / x^l \right] = -\frac{z_{l+1}(x)}{x^l}
$$

$$
\frac{\mathrm{d}}{\mathrm{d}x} \left[ x^{l+1} z_l(x) \right] = x^{l+1} z_{l-1}(x)
$$

$$
z_l'(x) - l \frac{z_l(x)}{x} = -z_{l+1}(x)
$$

$$
z_l'(x) + (l+1) \frac{z_l(x)}{x} = z_{l-1}(x)
$$

$$
z_{l-1}(x) - z_{l+1}(x) = 2 z_l'(x) + \frac{z_l(x)}{x}
$$

$$
\frac{z_l(x)}{x} = \frac{z_{l-1}(x) + z_{l+1}(x)}{2l+1}
$$
$$
z_l'(x) = \frac{l z_{l-1}(x) - (l+1) z_{l+1}(x)}{2l+1}
$$

### 3、初等函数表示式

根据前面得到的：
$$
J_{1/2}(x) = \sqrt{\frac{2}{\pi x}} \sin x, \qquad
J_{-1/2}(x) = \sqrt{\frac{2}{\pi x}} \cos x
$$
有：
$$
j_0(x)=\frac{\sin x}{x},\quad j_{-1}(x)=\frac{\cos x}{x}
$$
于是反复使用递推公式，可以得到$j_l(x)$的初等函数表达式。

根据诺依曼函数定义：
$$
N_{l+1/2}(x) = \frac{J_{l+1/2}(x)\cos\left[(l+1/2)\pi\right] - J_{-(l+1/2)}(x)}{\sin\left[(l+1/2)\pi\right]}
= (-1)^{l+1} J_{-(l+1/2)}(x)
$$
于是得到：
$$
n_0(x)=-\frac{\cos x}{x},\quad n_{-1}(x)=\frac{\sin x}{x}
$$
反复使用递推公式，可以得到$n_l(x)$的初等函数表达式。

由球汉克尔函数的定义：
$$
h_l^{(1)}(x)=j_l(x)+\mathrm{i}n_l(x),\quad h_l^{(2)}(x)=j_l(x)-\mathrm{i}n_l(x)
$$
可以直接得到球汉克尔函数的初等函数表达式。

### 4、极限取值

当$x\to 0$时，对于球贝塞尔函数：
$$
\begin{aligned}
j_l(x) &= \sqrt{\frac{\pi}{2}}\, x^{-1/2} \sum_{k=0}^{\infty} (-1)^k \frac{1}{k! \, \Gamma(l+k+3/2)} \left( \frac{x}{2} \right)^{l+1/2+2k} \\
&= \sqrt{\frac{\pi}{2}} \sum_{k=0}^{\infty} (-1)^k \frac{1}{k! \, \Gamma(l+k+3/2)} \left( \frac{1}{2} \right)^{l+1/2+2k} x^{l+2k}
\end{aligned}
$$
把$l$理解为非负整数，该级数只含有$x$的正幂次项，故$j_0(x)=1,j_l(x)=0(l\in \mathbb{N}^+)$

对于球诺依曼函数：
$$
\begin{aligned}
n_l(x) 
    &= (-1)^{l+1} j_{-(l+1)}(x) \\
    &= (-1)^{l+1} \sqrt{\frac{\pi}{2}} \sum_{k=0}^{\infty} (-1)^k \frac{1}{k!~\Gamma(-l+k+1/2)} \left(\frac{1}{2}\right)^{-l-\frac{1}{2}+2k} x^{-l+2k-1}
\end{aligned}
$$
既有$x$的正幂次项，也有负幂次项，所以，当$x\to0,n_l(x)\to\infty$。

当$x\to\infty$时，使用渐进公式：
$$
j_l(x) \sim \frac{1}{x} \cos \left( x - \frac{l+1}{2}\pi \right)
$$

$$
n_l(x) \sim \frac{1}{x} \sin \left( x - \frac{l+1}{2}\pi \right)
$$

$$
h_l^{(1)}(x) \sim \frac{1}{x} e^{\mathrm{i}x} (-i)^{l+1}
$$

$$
h_l^{(2)}(x) \sim \frac{1}{x} e^{-\mathrm{i}x} i^{l+1}
$$

从波动方程分离出来的时间因子是$e^{\mathrm{i}kat},e^{-\mathrm{i}kat}$，如果把时间因子$e^{-\mathrm{i}kat}$附在上面的渐进公式中时，$j_l(x),n_l(x)$对应驻波，$h_l^{(1)}(x)$对应朝$+x$方向传播传播，即从球坐标系极点向外发散，$h_l^{(2)}(x)$对应朝$-x$方向传播传播，即从球坐标系极点向内会聚。如果把时间因子$e^{\mathrm{i}kat}$附在上面的渐进公式中时，$j_l(x),n_l(x)$对应驻波，$h_l^{(1)}(x)$对应朝$-x$方向传播传播，即从球坐标系极点向内会聚，$h_l^{(2)}(x)$对应朝$+x$方向传播传播，即从球坐标系极点向外发散。

### 5、球形区域内的本征值问题

球贝塞尔方程是施图姆-刘维尔型方程，即：
$$
\frac{\mathrm{d}}{\mathrm{d}r}{\left(r^2\frac{\mathrm{d}R}{\mathrm{d}r}\right)}-l\left(l+1\right)R+k^2r^2R=0
$$
其中$k^2$为本征值，$r^2$为权重系数。方程在$r=0$处有自然边界条件，所以取$j_l(kr)$，舍弃$n_l(kr)$，并且$j_l(kr)$应当满足球面上的边界条件，这决定了本征值。对应不同本征值的本征函数在$[0,r_0]$上带权重$r^2$正交：
$$
\int_{0}^{r_{0}}\mathrm{j}_{l}(k_{m}r)\mathrm{j}_{l}(k_{n}r)r^{2}\mathrm{d}r=0\quad(k_{m}\neq k_{n})
$$
本征函数族$j_l(k_mr)(m=1,2,3,\cdots)$是完备的，可以作为广义傅里叶级数展开的基：
$$
\begin{cases}\begin{aligned}&f(r)=\sum_{m=1}^{\infty}f_m\mathrm{j}_l(k_mr)\\&\text{系数}f_m=\frac{1}{\left[N_m\right]^2}\int_0^{r_0}f(r)\mathrm{j}_l(k_mr)r^2\mathrm{d}r\end{aligned}\end{cases}
$$
式中$N_m$是本征函数$j_l(k_m,r)$的模：
$$
\left[N_{m}\right]^{2}=\int_{0}^{r_{0}}\left[j_{l}\left(k_{m}r\right)\right]^{2}r^{2}\mathrm{d}r=\frac{\pi}{2k_{m}}\int_{0}^{r_{0}}\left[\mathrm{J}_{l+1/2}\left(k_{m}r\right)\right]^{2}r\mathrm{d}r
$$

- 第一类齐次边界条件：

$$
\left[N_{n}^{(l)}\right]^{2}=\frac{\pi r_{0}^{2}}{4k_{n}}\left[\mathrm{J}_{l+1/2}^{\prime}\left(k_{n}r_{0}\right)\right]^{2}
$$

- 第二类齐次边界条件：

$$
\left[N_{n}^{(l)}\right]^{2}=\frac{\pi}{4k_{n}}\left[r_{0}^{2}-\frac{l(l+1)}{k_{n}^{2}}\right]\left[\mathrm{J}_{l+1/2}(k_{n}r_{0})\right]^{2}
$$

- 第三类齐次边界条件：

$$
\left[N_{n}^{(l)}\right]^{2}=\frac{\pi}{4k_{n}}\left[r_{0}^{2}+\frac{(r_{0}/H)(r_{0}/H-1)-l(l+1)}{k_{n}^{2}}\right]\left[J_{l+1/2}(k_{n}r_{0})\right]^{2}
$$

