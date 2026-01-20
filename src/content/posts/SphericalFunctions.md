---
title: 球函数
published: 2025-12-12
category: ["数学", "数学物理方法"]
tags: ["数学物理方程", "偏微分方程", "常微分方程"]
alias: "sphericalfunctions"
---
根据前面的知识，对拉普拉斯方程和亥姆霍兹方程进行分离变量，得到球函数方程：
$$
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial Y}{\partial\theta}\right)+\frac{1}{\sin^2\theta}\frac{\partial^2Y}{\partial\varphi^2}+l(l+1)Y=0
$$
球函数方程的解$Y(\theta,\varphi)$称为球函数，即定义在半径$r$的球面上的函数，然后再分离变量，得到：
$$
Y(\theta,\varphi)=(A\cos m\varphi+B\sin m\varphi)\Theta(\theta)
$$
其中$\Theta(\theta)$需要从$l$阶连带的勒让德方程：
$$
(1-x^{2})\frac{d^{2}\Theta}{dx^{2}}-2x\frac{d\Theta}{dx}+\left[l(l+1)-\frac{m^{2}}{1-x^{2}}\right]\Theta=0
$$
中解出，式中采用变量代换：
$$
x=\cos\theta
$$

## 一、轴对称球函数

### 1、勒让德多项式

当$m=0$时，勒让德方程为：
$$
(1-x^{2})\frac{d^{2}\Theta}{dx^{2}}-2x\frac{d\Theta}{dx}+l(l+1)\Theta=0
$$
使用之前的方法，求出对应级数退化的多项式，将他们分别乘以适当的系数，使得最高次幂项$x^l$的系数为：
$$
a_l=\frac{(2l)!}{2^l(l!)^2}
$$
反用系数递推公式，改写为：
$$
a_k=\frac{(k+2)(k+1)}{(k-l)(k+l+1)}a_{k+2}
$$
就可以把系数一一计算出来，得：
$$
a_{l-2n}=(-1)^n\frac{(2l-2n)!}{n!2^l(l-n)!(l-2n)!}
$$
将$n$记为$k$，求得$l$阶勒让德多项式的具体表达式：
$$
P_l(x)=\sum_{k=0}^{[l/2]}(-1)^k\frac{(2l-2k)!}{2^lk!(l-k)!(l-2k)!}x^{l-2k}
$$
其中$[l/2]$表示不大于${l/2}$的最大整数。由此写出前几个勒让德多项式：
$$
P_0(x)=1
$$

$$
P_1(x)=\cos\theta
$$

$$
P_2(x)=\frac12(3x^2-1)=\frac14(3\cos 2\theta+1)
$$

现在计算$P_l(0)$，这应当等于多项式$P_l(x)$的常数项，如$l=2n+1$，则$P_{2n+1}(x)$只含奇次幂项，不含常数项，所以：
$$
P_{2n+1}(0)=0
$$
如果$l=2n$，则$P_{2n}(x)$含有常数项，即：
$$
P_{2n}(0)=(-1)^n\frac{(2n)!}{2^nn!2^nn!}=(-1)^n\frac{(2n)!}{\left[(2n)!!\right]^2}=(-1)^n\frac{(2n-1)!!}{(2n)!!}
$$

### 2、勒让德多项式的微分表示

用二项式定理把$(x^2-1)^l$展开：
$$
\begin{aligned}\frac{1}{2^{l}l!}(x^{2}-1)^{l}&=\frac{1}{2^{l}l!}\sum_{k=0}^{l}\frac{l!}{(l-k)!k!}(x^{2})^{l-k}(-1)^{k}\\&=\sum_{k=0}^{l}(-1)^{k}\frac{1}{2^{l}k!(l-k)!}x^{2l-2k}\end{aligned}
$$
把上式求导$l$次，凡是幂次$2l-2k$低于$l$的项在求导过程中都变成$0$，所以只需要保留幂次$2l-2k\ge$的项，即$k\le \frac{l}2$，这样：
$$
\begin{aligned}&\frac{1}{2^ll!}\frac{\mathrm{d}^l}{\mathrm{d}x^l}(x^2-1)^l\\&=\sum_{k=0}^{[l/2]}(-1)^k\frac{(2l-2k)(2l-2k-1)\cdots(l-2k+1)}{2^lk!(l-k)!}x^{l-2k}\\&=\sum_{k=0}^{[l/2]}(-1)^k\frac{(2l-2k)!}{2^lk!(l-k)!(l-2k)!}x^{l-2k}=\mathrm{P}_{l}(x)\end{aligned}
$$
于是我们得到了勒让德多项式的微分形式：
$$
P_l(x)=\frac{1}{2^ll!}\frac{\mathrm{d}^l}{\mathrm{d}x^l}(x^2-1)^l
$$
该公式叫做罗德里格斯公式。

### 3、勒让德多项式的积分形式

利用高阶导数的柯西公式，微分表示可以改写为复变函数上的环路积分：
$$
P_l(x)=\frac{1}{2\pi\mathrm{i}}\frac{1}{2^l}\oint_C\frac{(z^2-1)^l}{(z-x)^{l+1}}\mathrm{d}z
$$
$C$为$z$平面上围绕$z=x$点的任意闭合回路。该公式叫做施列夫利积分。该积分还可以进一步化为定积分形式，取$C$为圆周，圆心在$z=x$，半径为$\sqrt{|x^2-1|}$，在$C$上，$z-x=\sqrt{x^2-1}e^{\mathrm{i}\psi}$，$\mathrm{d}z=\mathrm{i}\sqrt{x^2-1}e^{\mathrm{i}\psi}\mathrm{d}\psi$，代入到上式，得：
$$
P_{l}(x)=\frac{1}{2\pi \mathrm{i}}\frac{1}{2^{l}}\int_{-\pi}^{\pi}\frac{[(x+\sqrt{x^{2}-1}e^{\mathrm{i}\psi})^{2}-1]^{l}}{(\sqrt{x^{2}-1})^{l+1}(e^{\mathrm{i}\psi})^{l+1}}\cdot[\mathrm{i}\sqrt{x^{2}-1}e^{\mathrm{i}\psi}]\mathrm{d}\psi
$$
化简得到：
$$
P_l(x)=\frac{1}{\pi}\int_{0}^{\pi}[x+\mathrm{i}\sqrt{1-x^{2}}\cos\psi]^{l}\mathrm{d}\psi
$$
这叫做拉普拉斯积分，由此可以看出：
$$
\begin{aligned}\mid P_{l}(x)\mid&\leqslant\frac{1}{\pi}\int_0^\pi\mid\cos\theta+\mathrm{isin}\theta\cos\psi\mid^l\mathrm{d}\psi\\&=\frac{1}{\pi}\int_{0}^{\pi}\left[\cos^{2}\theta+\sin^{2}\theta\cos^{2}\psi\right]^{1/2}\mathrm{d}\psi\\&\leqslant\frac{1}{\pi}\int_0^\pi\left[\cos^2\theta+\sin^2\theta\right]^{l/2}\mathrm{d}\psi\\&=\frac{1}{\pi}\int_0^\pi\mathrm{d}\psi=1\end{aligned}
$$
即：
$$
|P_l(x)|\le 1(-1\le x\le1)
$$

### 4、勒让德多项式的正交关系

作为施图姆-刘维尔本征值问题的正交关系特例，不同阶的勒让德多项式在$(-1,+1)$上正交，即：
$$
\int_{-1}^{+1}P_k(x)P_l(x)\mathrm{d}x=0\quad(l\neq k)
$$
如果从$x$回到原来的变数$\theta$，则：
$$
\int_0^\pi P_k(\cos\theta)P_l(\cos\theta)\sin\theta\mathrm{d}\theta\quad(l\neq k)
$$

### 5、勒让德多项式的模

如果前一部分中$k=l$，则可以计算其模$N_l$：
$$
N_l^2=\int_{-1}^{+1}[P_l(x)]^2\mathrm{d}x
$$
将上式的$P_l(x)$使用微分表示，并使用分部积分：
$$
\begin{aligned}N_{l}^2&=\frac{1}{2^{2l}\left(l!\right)^{2}}\int_{-1}^{+1}\frac{\mathrm{d}^{l}(x^{2}-1)^{l}}{\mathrm{d}x^{l}}\frac{\mathrm{d}}{\mathrm{d}x}\left[\frac{\mathrm{d}^{l-1}(x^{2}-1)^{l}}{\mathrm{d}x^{l-1}}\right]\mathrm{d}x\\&=\frac{1}{2^{2l}\left(l!\right)^2}\left[\frac{\mathrm{d}^l\left(x^2-1\right)^l}{\mathrm{d}x^l}\frac{\mathrm{d}^{l-1}\left(x^2-1\right)^l}{\mathrm{d}x^{l-1}}\right]_{-1}^{+1}\\&-\frac{1}{2^{2l}(l!)^2}\int_{-1}^{+1}\frac{\mathrm{d}^{l-1}(x^2-1)^l}{\mathrm{d}x^{l-1}}\frac{\mathrm{d}}{\mathrm{d}x}\left[\frac{\mathrm{d}^l(x^2-1)^l}{\mathrm{d}x^l}\right]\mathrm{d}x\end{aligned}
$$
这里的$(x^2-1)^l$是$2l$次多项式，它的$2l$阶导数也就是最高幂项$x^{2l}$的二阶导数，即$(2l)!$，于是：
$$
N_l^2=(-1)^l\frac{(2l)!}{2^{2l}(l!)^2}\int_{-1}^{+1}(x-1)^l(x+1)^l\mathrm{d}x
$$
分部积分，得到：
$$
N_l^2=(-1)^l\frac{(2l)!}{2^{2l}(l!)^2}\cdot(-1)\frac{l}{l+1}\int_{-1}^1(x-1)^{l-1}(x+1)^{l+1}\mathrm{d}x
$$
观察分部积分过程，每次分部积分都会使$(x-1)$的幂次降低一次，$(x+1)$的幂次升高一次，且积分乘上一个相应的常数因子，共操作$l$次，得到勒让德多项式的模：

$$
N_l=\sqrt{\frac{2}{2l+1}},\quad(l\in\mathbb{N})
$$

### 6、广义傅里叶级数

根据上面的证明，可知勒让德多项式$P_l(x)$是完备的，可以作为广义傅里叶级数展开的基，定义在$x$的区间$[-1,+1]$上的函数$f(x)$或者定义在$\theta$区间$[0,\pi]$上的函数$f(\theta)$都可以展开为广义傅里叶级数。
$$
\begin{cases}\begin{aligned}&f(x)=\sum_{l=0}^{\infty}f_l{P}_l(x)\\&f_l=\frac{2l+1}{2}\int_{-1}^{+1}f(x){P}_l(x)\mathrm{d}x\end{aligned}\end{cases}
$$
或：
$$
\begin{cases}\begin{aligned}&f(\theta)=\sum_{l=0}^{\infty}f_l{P}_l(\cos\theta),\\&f_l=\frac{2l+1}{2}\int_0^\pi f(\theta){P}_l(\cos\theta)\sin\theta\mathrm{d}\theta\end{aligned}\end{cases}
$$

### 7、拉普拉斯方程的轴对称定解问题

拉普拉斯方程的定解问题，如果有对称轴，自然就取这对称轴为球坐标的极轴，取这对称轴为球坐标的极轴，由此问题与$\varphi$无关，只需要用$m=0$的轴对称球函数。如果定解问题只在半球区域内有意义，则应当根据边界条件类型，选择使用奇延拓或者偶延拓，然后使用勒让德方法。

### 8、母函数

在单位球北极放置一个$4\pi\varepsilon_0$单位的正电荷，则在球内任意一点$M$的静电势为：
$$
\frac{1}{d}=\frac{1}{\sqrt{1-2r\cos\theta +r^2}}
$$
静电势$\frac1d$遵从拉普拉斯方程，且以球坐标系的极轴作为对称轴，因此应当满足拉普拉斯方程一般解的形式，即：
$$
\frac{1}{d}=\sum_{l=0}^\infty\left(A_lr^l+B_l\frac{1}{r^{l+1}}\right)P_l(\cos\theta)
$$
研究球心处的电势，应该有限，所以$B_l=0$，故：
$$
\frac{1}{\sqrt{1-2r\cos^2\theta+r^2}}=\sum_{l=0}^\infty A_lr^lP_l(\cos\theta)
$$
可以利用广义傅里叶方法展开，更简单地，可以令$\theta=0$：
$$
\frac{1}{1-r}=\sum^\infty_{i=0}A_lr^l
$$
上式左边使用泰勒展开，配凑系数相等得到$A_l=1$，于是：
$$
\frac{1}{\sqrt{1-2r\cos^2\theta+r^2}}=\sum_{l=0}^\infty r^lP_l(\cos\theta),r<1
$$
同样的方法，计算出球外的静电势，结果为：
$$
\frac{1}{\sqrt{1-2r\cos\theta+r^2}}=\sum_{l=0}^\infty\frac{1}{r^{l+1}}\mathrm{P}_l(\cos\theta),r>1
$$
于是，$\frac{1}{\sqrt{1-2r\cos\theta+r^2}}$被叫做勒让德多项式的母函数（或者是生成函数），用半径$R$的球代替单位球，则：
$$
\frac{1}{\sqrt{R^2-2rR\cos\theta+r^2}}=\begin{cases}\begin{aligned}\sum_{l=0}^\infty\frac{1}{R^{l+1}}r^l\mathrm{P}_l(\cos\theta)&(r<R)\\\sum_{l=0}^\infty R^l\frac{1}{r^{l+1}}\mathrm{P}_l(\cos\theta)&(r>R)&\end{aligned}\end{cases}
$$

### 9、递推公式

母函数可以推导出勒让德多项式的递推公式，将上式改写为：
$$
\frac{1}{\sqrt{1-2rx+r^2}}=\sum_{l=0}^\infty r^l{P}_l(x)
$$
两边对$r$求导，并化简得：
$$
\frac{x-r}{\sqrt{1-2rx+r^2}}=(\begin{array}{c}1-2rx+r^2\end{array})\sum_{l=0}^\infty lr^{l-1}{P}_l(\begin{array}{c}x\end{array})
$$
将该写的未求导的公式代入到求导后的公式，得：
$$
(x-r)\sum_{l=0}^{\infty}r^{l}{P}_{l}(x)=(1-2rx+r^{2})\sum_{l=0}^{\infty}lr^{l-1}{P}_{l}(x)
$$
观察两边$r^k$的系数，得到：
$$
(k+1){P}_{k+1}(x)-(2k+1)x{P}_{k}(x)+k{P}_{k-1}(x)=0\quad(k\ge1)
$$
利用这个式子可以从$P_{k-1}(x),P_k(x)$推导出$P_{k+1}$，这个称为勒让德多项式的递推公式。如果将改写的式子对$x$求导，采取类似的方法化简，比较系数后，可以得到另外一个递推公式：
$$
{P}_k(x)={P}_{k+1}^{\prime}(x)-2x{P}_{k}^{\prime}(x)+{P}_{k-1}^{\prime}(x)\quad(k\ge1)
$$
类似的递推公式还有：
$$
{P}_{k+1}^{\prime}(x)=(k+1){P}_{k}(x)+x{P}_{k}^{\prime}(x)
$$

$$
k{P}_{k}(x)=x{P}_{k}^{\prime}(x)-{P}_{k-1}^{\prime}(x)\quad(k\ge1)
$$

$$
(x^{2}-1){P}_{k}^{\prime}(x)=kx{P}_{k}(x)-k{P}_{k-1}(x)\quad(k\ge1)
$$

$$
(2k+1){P}_k(x)={P}_{k+1}^{\prime}(x)-{P}_{k-1}^{\prime}(x)\quad(k\ge1)
$$

## 二、连带勒让德函数

### 1、连带勒让德函数

$l$阶连带勒让德函数的表达式为：
$$
(1-x^2)\frac{\mathrm{d}^2\Theta}{\mathrm{d}x^2}-2x\frac{\mathrm{d}\Theta}{\mathrm{d}x}+\left[l(l+1)-\frac{m^2}{1-x^2}\right]\Theta=0\quad(x=\cos\theta)
$$
$x_0=0$是连带勒让德方程的常点，可以通过一般级数解法求得级数解，但是递推公式极为复杂，难以求出系数的一般形式。所以考虑其他方法，作变换：
$$
\Theta=(1-x^2)^\frac{m}2y(x)
$$
在这个这个变换下：
$$
\frac{\mathrm{d}\Theta}{\mathrm{d}x}=(1-x^2)^\frac{m}{2}y^{\prime}-m(1-x^2)^\frac{m}{2}-xy
$$

$$
\frac{\mathrm{d}^2\Theta}{\mathrm{d}x^2}=(1-x^2)^{\frac{m}{2}}y^{\prime\prime}-2m(1-x^2)^{\frac{m}{2}-1}xy^{\prime}-m(1-x^{2})^{\frac{m}{2}-1}y+m(m-2)(1-x^{2})^{\frac{m}{2}-2}x^{2}y
$$

将上面的式子代入到连带勒让德方程中，化为$y(x)$的微分方程：
$$
(1-x^2)y^{\prime\prime}-2(m+1)xy^{\prime}+[l(l+1)-m(m+1)]y=0
$$
上式可以使用级数解法直接求解，但是还有更简单的方法。观察上面的微分方程，就是勒让德方程逐项求导$m$次后得到的方程。

> **证明**：
>
> 上面的微分方程是勒让德方程逐项求导$m$次后得到的方程。根据莱布尼茨求导法则，有：
> $$
> \begin{aligned}(uv)^{(m)}&=uv^{(m)}+\frac{m}{1!}u^{\prime}v^{(m-1)}+\frac{m(m-1)}{2!}u^{\prime\prime}v^{(m-2)}+\cdots+\\&+\frac{m(m-1)(m-2)\cdots(m-k+1)}{k!}u^{(k)}v^{(m-k)}+\cdots\\&+u^{(m)}v,\end{aligned}
> $$
> 将勒让德方程：
> $$
> (1-x^2)P^{\prime\prime}-2xP^{\prime}+l(l+1)P=0
> $$
> 对$x$求导$m$次，结果为：
> $$
> \left[(1-x^2)P^{(m+2)}-m2xP^{(m+1)}-\frac{m(m-1)}{2} 2P^{(m)} \right]-2[xP^{(m+1)}+mP^{(m)}]+l(l+1)P^{(m)}=0
> $$
> 化简得：
> $$
> (1-x^2){P^{(m)}}^{\prime\prime}-2(m+1)x{P^{(m)}}^{\prime}+[l(l+1)-m(m+1)]{P^{(m)}}=0
> $$
> 即为$l$阶连带勒让德方程。其中：
> $$
> y(x)=P^{(m)}(x)
> $$

前面已经学过勒让德方程和自然边界条件（在$x=\pm1$有限）构成本征值问题，本征值为$l(l+1)$，而$l$为整数，本征函数则是勒让德多项式$P_l(x)$，那么$l$阶连带勒让德方程与自然边界条件也构成本征值问题，本征值为$l(l+1)$，本征函数为$P_l(x)$的$m$阶导数，即：
$$
y(x)=P_l^{(m)}(x)
$$
带回原连带勒让德方程，得到：
$$
P_l^m(x)=\Theta=(1-x^2)^\frac{m}2P_l^{(m)}(x)
$$
其中$P_l^m(x)$为连带勒让德函数。由于$P_l(x)$为$l$次多项式，最多只能求导$l$次，所以$l\ge m$，当$m=0$时，方程和结果均退化为普通的$l$阶勒让德方程和勒让德多项式。

### 2、连带勒让德函数的微分表示

由勒让德多项式的微分表示可以得到连带勒让德函数的微分表示：
$$
{P}_l^m(x)=\frac{(1-x^2)^{\frac{m}{2}}}{2^ll!}\frac{\mathrm{d}^{l+m}}{\mathrm{d}x^{l+m}}(x^2-1)^l
$$
这也叫做罗德里格斯公式，观察公式可知，当$l-m$为偶数时，$P_l^m(x)$为偶函数，否则为奇函数。

在之前的推导中，一直是把$m$看作是正整数，但是在连带勒让德方程中只出现了$m^2$，所以可以将$-m$代入，连带勒让德方程仍然不变，此时得到连带勒让德函数为：
$$
{P}_l^{-m}(x)=\frac{(1-x^2)^{-\frac{m}{2}}}{2^ll!}\frac{\mathrm{d}^{l-m}}{\mathrm{d}x^{l-m}}(x^2-1)^l
$$
这也是连带勒让德方程的解且满足自然边界条件，但是他实际上与$P_l^m$是相关的，他们只相差一个常数，将两者作比，得到：
$$
{P}_{l}^{m}(x)=(-1)^{m}\frac{(l+m)!}{(l-m)!}{P}_{l}^{-m}(x)
$$

### 3、连带勒让德函数的积分表示

按照柯西公式，微分表达式可以表示成环路积分：
$$
{P}_l^m(x)=\frac{(1-x^2)^{\frac{m}{2}}}{2^l}\frac{1}{2\pi\mathrm{i}}\frac{(l+m)!}{l!}\oint_C\frac{(z^2-1)^l}{(z-x)^{l+m+1}}\mathrm{d}z
$$
$C$为$z$平面上围绕$z=x$的任意闭合回路，这也叫作施列夫利积分。同样地，这也能进一步表示为定积分，取$C$为圆周，圆心在$z=x$，半径为$\sqrt{|x^2-1|}$，在$C$上，$z-x=\sqrt{x^2-1}e^{\mathrm{i}\psi}$，$\mathrm{d}z=\mathrm{i}\sqrt{x^2-1}e^{\mathrm{i}\psi}\mathrm{d}\psi$，代入到上式，得：
$$
P_l^m(x)=\frac{\mathrm{i}^m}{2\pi}\frac{(l+m)!}{l!}\int_{-\pi}^{\pi}\mathrm{e}^{-\mathrm{i}m\psi}\left[x+\sqrt{x^2-1}\frac{1}{2}(\mathrm{e}^{-\mathrm{i}\psi}+\mathrm{e}^{\mathrm{i}\psi})\right]^l\mathrm{d}\psi
$$
这也叫作拉普拉斯积分。

### 4、连带勒让德函数的正交关系

作为施图姆-刘维尔本征值问题的正交关系特例，不同阶的勒让德多项式在$(-1,+1)$上正交，即：
$$
\int_{-1}^{+1}P^m_k(x)P^m_l(x)\mathrm{d}x=0\quad(l\neq k)
$$
如果从$x$回到原来的变数$\theta$，则：
$$
\int_0^\pi P^m_k(\cos\theta)P^m_l(\cos\theta)\sin\theta\mathrm{d}\theta\quad(l\neq k)
$$

### 5、连带勒让德函数的模

计算连带勒让德函数的模时，可以利用$P_l^m(x)$与$P_l^{-m}(x)$的关系，有：
$$
\begin{aligned}(N_{l}^{m})^{2}&=\int_{-1}^{+1}\left[\mathrm{P}_{l}^{m}(x)\right]^{2}\mathrm{d}x=(-1)^{m}\frac{(l+m)!}{(l-m)!}\int_{-1}^{+1}\mathrm{P}_{l}^{-m}(x)\mathrm{P}_{l}^{m}(x)\mathrm{d}x\\&=(-1)^m\frac{(l+m)!}{(l-m)!}\frac{1}{2^{2l}(l!)^2}\int_{-1}^{+1}\frac{\mathrm{d}^{l-m}}{\mathrm{d}x^{l-m}}(x^2-1)^l\times\frac{\mathrm{d}^{l+m}}{\mathrm{d}x^{l+m}}(x^2-1)^l\mathrm{d}x\end{aligned}
$$
仿照勒让德多项式计算模的方法，进行连续地分部积分，得到：
$$
N_l^m=\sqrt{\frac{(l+m)!2}{(l-m)!(2l+1)}}
$$

### 6、广义傅里叶级数

根据上面的证明，可知勒让德函数$P_l^m(x)$是完备的，可以作为广义傅里叶级数展开的基，定义在$x$的区间$[-1,+1]$上的函数$f(x)$或者定义在$\theta$区间$[0,\pi]$上的函数$f(\theta)$都可以展开为广义傅里叶级数。
$$
\begin{cases}\begin{aligned}&f(x)=\sum_{l=0}^{\infty}f_l{P}^m_l(x)\\&f_l=\frac{2l+1}{2}\frac{(l-m)!}{(l+m)!}\int_{-1}^{+1}f(x){P}^m_l(x)\mathrm{d}x\end{aligned}\end{cases}
$$
或：
$$
\begin{cases}\begin{aligned}&f(\theta)=\sum_{l=0}^{\infty}f_l{P}^m_l(\cos\theta),\\&f_l=\frac{2l+1}{2}\frac{(l-m)!}{(l+m)!}\int_0^\pi f(\theta)P^{m}_l(\cos\theta)\sin\theta\mathrm{d}\theta\end{aligned}\end{cases}
$$

### 7、连带勒让德函数的递推公式

连带勒让德函数的基本递推公式有四个：
$$
(2k+1)x{P}_k^m(x)=(k+m){P}_{k-1}^m(x)+(k-m+1){P}_{k+1}^m(x)\quad(k\ge1)
$$

$$
(2k+1)(1-x^2)^{1/2}{P}_k^m(x)={P}_{k+1}^{m+1}(x)-{P}_{k-1}^{m+1}(x)\quad(k\ge1)
$$

$$
(2k+1)(1-x^{2})^{1/2}{P}_{k}^{m}(x)=(k+m)(k+m-1){P}_{k-1}^{m-1}(x)-(k-m+2)(k-m+1){P}_{k+1}^{m-1}(x)\quad(k\ge1)
$$

$$
(2k+1)(1-x^2)\frac{\mathrm{d}P_k^m(x)}{\mathrm{d}x}=(k+1)(k+m){P}_{k-1}^{m}(x)-k(k-m+1){P}_{k+1}^{m}(x)\quad(k\ge1)
$$

## 三、一般的球函数

### 1、球函数

球函数方程的解叫做球函数：
$$
{Y}_l^m(\theta,\varphi)={P}_l^m(\cos\theta)(A\sin m\varphi+B\cos m\varphi)\quad(m=0,1,2,\cdots,l;l=0,1,2,3,\cdots)
$$
线性独立的$l$阶球函数共有$2l+1$个，这是因为对于$m=0$，有一个球函数$P_l(x)$，当$m\neq0$，时各有两个球函数$P_l^m(x)\cos m\varphi,P_l^m(x)\sin m\varphi$。根据欧拉公式，可以组合为：
$$
{Y}_l^m(\theta,\varphi)={P}_l^{|m|}(\cos\theta)e^{\mathrm{i}m\varphi}\quad(m=-l,\cdots,0,1,\cdots,l;l=0,1,2,\cdots)
$$

### 2、球函数的正交关系

球函数中的任意两个在球面$S$上（即$0\le\theta\le\pi,0\le\varphi\le 2\pi$）正交：
$$
\iint_S{Y}_l^m(\theta,\varphi){Y}_k^n(\theta,\varphi)\sin\theta\mathrm{d}\theta\mathrm{d}\varphi=0\quad(m\neq n或l\neq k)
$$

### 3、球函数的模

使用三角函数表示的球函数进行积分：
$$
\begin{aligned}
(N_{l}^{m})^{2}&=\iint_S[Y_{l}^{m}(\theta,\varphi)]^{2}\sin\theta\mathrm{d}\theta\mathrm{d}\varphi\\&=\int_{0}^{\pi}[P_{l}^{m}(\cos\theta)]^{2}\sin\theta\mathrm{d}\theta\int_{0}^{2\pi}(A\sin^2 m\varphi+B\cos^2 m\varphi)\mathrm{d}\varphi\\&=\int_{-1}^{+1}[P_{l}^{m}(x)]^{2}\mathrm{d}x\int_{0}^{2\pi}(A\sin^2 m\varphi+B\cos^2 m\varphi)\mathrm{d}\varphi
\end{aligned}
$$
前一个积分值已经得出，后一个积分不会积建议重修微积分。代入得到球函数的模：
$$
N_{l}^{m}=\sqrt{\frac{2\pi\delta_{m}}{2l+1}\frac{(l+m)!}{(l-m)!}}
$$
其中$\delta_m=\begin{cases}2,\quad m=0\\1,\quad m=1,2,3,\cdots \end{cases}$。

因为：
$$
\int_0^{2\pi}{e}^{\mathrm{i}m\varphi}\left[{e}^{\mathrm{i}m\varphi}\right]^*\mathrm{d}\varphi=\int_0^{2\pi}1\mathrm{d}\varphi=2\pi
$$
所以使用复数形式的球函数计算模的平方：
$$
\begin{aligned}(N_{l}^{m})^{2}&=\iint_S{Y}_{l}^{m}(\theta,\varphi)\left[{Y}_{l}^{m}(\theta,\varphi)\right]^{*}\sin\theta\mathrm{d}\theta\mathrm{d}\varphi\\&=\int_0^\pi\left[{P}_l^{|m|}(\cos\theta)\right]^2\sin\theta\mathrm{d}\theta\cdot\int_0^{2\pi}{e}^{\mathrm{i}m\varphi}\left[{e}^{\mathrm{i}m\varphi}\right]^*\mathrm{d}\varphi\\&=\frac{2}{2l+1}\cdot\frac{(l+| m|)!}{(l-| m|)!}\cdot2\pi\end{aligned}
$$
得到：
$$
N_l^m=\sqrt{\frac{4\pi}{2l+1}\cdot\frac{(l+|m|)!}{(l-|m|)!}}
$$

### 4、球面上的函数的广义傅里叶级数

定义在球面$S(0\le\theta\le\pi,0\le\varphi\le2\pi)$上的函数$f(\theta,\varphi)$可以用球函数展开成二重广义傅里叶级数。现在以三角函数形式的球函数为基，把函数$f$进行展开：
$$
f(\theta,\varphi)=\sum_{m=0}^\infty[A_m(\theta)\cos m\varphi+B_m(\theta)\sin m\varphi]
$$
这里$\theta$作为参数出现在傅里叶系数中：
$$
\begin{cases}\begin{aligned}A_m(\theta)&=\frac{1}{\pi\delta_m}\int_0^{2\pi}f(\theta,\varphi)\cos m\varphi\mathrm{d}\varphi\\B_m(\theta)&=\frac{1}{\pi}\int_0^{2\pi}f(\theta,\varphi)\sin m\varphi\mathrm{d}\varphi\end{aligned}\end{cases}
$$
然后以$P_l^m(\cos \theta)$为基，继续把$A_m(\theta),B_m(\theta)$展开，有：
$$
\begin{cases}\begin{aligned}A_m(\theta)=\sum_{l=m}^\infty A_l^m\mathrm{P}_l^m(\cos\theta)\\B_m(\theta)=\sum_{l=m}^\infty B_l^m\mathrm{P}_l^m(\cos\theta)\end{aligned}\end{cases}
$$
然后利用广义傅里叶展开，得到：
$$
\begin{cases}\begin{aligned}A_l^m&=\frac{2l+1}{2}\cdot\frac{(l-m)!}{(l+m)!}\int_0^\pi A_m(\theta)\mathrm{P}_l^m(\cos\theta)\sin\theta\mathrm{d}\theta\\&=\frac{2l+1}{2\pi\delta_m}\cdot\frac{(l-m)!}{(l+m)!}\int_0^\pi\int_0^{2\pi}f(\theta,\varphi)\mathrm{P}_l^m(\cos\theta)\cos m\varphi\sin\theta\mathrm{d}\theta\mathrm{d}\varphi\\B_l^m&=\frac{2l+1}{2}\cdot\frac{(l-m)!}{(l+m)!}\int_{0}^{\pi}B_{m}(\theta)\mathrm{P}_{l}^{m}(\cos\theta)\sin\theta\mathrm{d}\theta\\&=\frac{2l+1}{2\pi}\cdot\frac{(l-m)!}{(l+m)!}\int_{0}^{\pi}\int_{0}^{2\pi}f(\theta,\varphi)\mathrm{P}_{l}^{m}(\cos\theta)\sin m\varphi\sin\theta\mathrm{d}\theta\mathrm{d}\varphi\end{aligned}\end{cases}
$$
带回到$f(\theta,\varphi)$在球面$S$上的展开式：
$$
f(\theta,\varphi)=\sum_{m=0}^\infty\sum_{l=m}^\infty\left[A_l^m\cos m\varphi+B_l^m\sin m\varphi\right]{P}_l^m(\cos\theta)
$$
这里两个求和符号可以交换。如果想要展开复数形式的广义傅里叶级数，则有：
$$
f(\theta,\varphi)=\sum_{l=0}^{\infty}\sum_{m=-l}^{l}C_{l}^{m}\mathrm{P}_{l}^{|m|}(\cos\theta)\mathrm{e}^{\mathrm{i}m\varphi}
$$
其中系数$C_l^m$的计算公式为：
$$
C_l^m=\frac{2l+1}{4\pi}\frac{(l-|m|)!}{(l+|m|)!}\int_0^\pi \int_0^{2\pi} f(\theta,\varphi) P_l^{|m|} (\cos\theta) [e^{\mathrm{i}m\varphi}] ^* \sin\theta\mathrm{d}\theta\mathrm{d}\varphi
$$

### 5、正交归一化的球函数

物理学常常使用正交归一化的球函数，定义为：
$$
Y_{lm}(\theta,\varphi) = \frac{1}{N_l^m}Y_l^m(\theta,\varphi) = \sqrt{\frac{2l+1}{4\pi}}\cdot\frac{(l-|m|)!}{(l+|m|)!}P_l^{|m|}(\cos\theta)e^{\mathrm{i}m\varphi}\quad(l=0,1,2,\cdots;m=-l,-l+1,\cdots,0,\cdots,l-1,l)
$$
在这个正交归一化的球函数下，其正交归一，球面上的函数$f(\theta,\varphi)$可以使用正交归一球函数展开，即：
$$
f(\theta,\varphi)=\sum_{l=0}^\infty\sum_{m=-l}^lC_{lm}Y_{lm}(\theta,\varphi)
$$
广义傅里叶系数$C_{lm}$为：
$$
C_{lm}=\int_0^{2\pi}\int_0^\pi f(\theta,\varphi)Y_{lm}^*(\theta,\varphi)\sin^2\theta\mathrm{d}\theta\mathrm{d}\varphi
$$
