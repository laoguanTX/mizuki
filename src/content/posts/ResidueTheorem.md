---
title: 留数定理
published: 2025-10-12
category: ["数学", "数学物理方法"]
tags: ["复变函数"]
alias: "residuetheorem"
---

## 一、留数定理

### 1、留数

<img src="https://laoguantx.top/article/数学/数学物理方法/留数定理/image-20251011130147155.png" alt="image-20251011130147155" style="zoom:50%;" />

如果复变函数$f(z)$有一个孤立奇点$z_{0}$，$f(z)$在$z_{0}$的去心邻域上是解析。根据洛朗级数展开定理，在以$z_{0}$为圆心、内半径足够小的圆环域上，$f(z)$可以展为洛朗级数：
$$
f(z)=\sum_{k=-\infty}^{\infty}a_{k}(z-z_{0})^{k}
$$

在洛朗级数的收敛环中取任意一个包围$z_{0}$的小回路$l_{0}$，计算回路积分：

$$
\oint_{l_{0}}f(z)\mathrm{d}z=\oint_{l_{0}}\sum_{k=-\infty}^{\infty}a_{k}(z-z_{0})^{k}\mathrm{d}z=\sum_{k=-\infty}^{\infty}\oint_{l_{0}}a_{k}(z-z_{0})^{k}\mathrm{d}z
$$

根据[这个例子](https://www.laoguantx.top/posts/integralofcomplexfunctions#heading-6)，可得：

$$
\oint_{l_{0}}f(z)\mathrm{d}z=2\pi\mathrm{i}a_{-1}
$$
所以可以得到结论，对于任意包围了$l_0$的简单封闭曲线$l$，如果区域内没有其他的奇点，那么，据柯西定理：

$$
\oint_lf(z)\mathrm{d}z=\oint_{l_0}f(z)\mathrm{d}z=2\pi\mathrm{i}a_{-1}
$$

从在复变函数的积分来看，洛朗级数展开中系数$a_{-1}$有特别重要的地位。$\alpha_{-1}$在复变函数中被称为

函数$f( z)$在点$z_0$的留数（或残数），通常记作$ \mathrm{Res} \:f( z_0)$，$\mathrm{Res}\:f(z_0)=a_{-1}$。

$$
\oint_lf(z)\mathrm{d}z=2\pi\mathrm{iRes}\:f(z_0)
$$

### 2、柯西留数定理

<img src="https://laoguantx.top/article/数学/数学物理方法/留数定理/image-20251011131220540.png" alt="image-20251011131220540" style="zoom:50%;" />

设函数$f(z)$在回路 $l$ 所围区域$B$上除有限个孤立奇点$b_1,b_2,...,b_n$外解析，在闭区域$B$上除这些奇点外连续，则：
$$
\oint_lf(z)\mathrm{d}z=2\pi\text{i}\sum_{j=1}^n\text{Res }f(b_j)
$$

也就是说：$f$沿$l$的路径积分，等于$2\pi\mathrm{i}$乘上$f$在$l$内部所有孤立奇点留数的总和。

> **证明**：在每个奇点附近作只包含该奇点的小回路：$l_{1},l_{2}…,l_{n}$。每个小回路只包含一个奇点，所以：
> $$
> \oint_{l_{j}} f(z)\mathrm{d}z = 2\pi \mathrm{i} \mathrm{Res}\:f(b_{j})
> $$
>
> 函数在小回路外的多连通区域中解析，按照多连通区域的柯西积分定理：
> $$
> \begin{aligned}
> &\oint_lf(z)\mathrm{d}z=\sum_{j=1}^n\oint_{l_j}f(z)\mathrm{d}z\\\Rightarrow&\oint_lf(z)\mathrm{d}z=2\pi\mathrm{i}\sum_{j=1}^n\mathrm{Res~f}(b_j)
> \end{aligned}
> $$
> 

### 3、无穷远处的留数

无穷远处的留数：如果无穷远处$\infty$是$f(z)$的孤立奇点，我们可以找到足够大的回路，使得函数在回路外的区域内没有有限的奇点，$f(z)$在无穷远的邻域是解析，可以展开为洛朗级数：

$$
f(z)=\sum_{k=-\infty}^\infty a_kz^k
$$

在回路正向（奇点为无穷远，积分区域在外，这里是顺时针方向）的积分为：

$$
\oint_Cf(z)\mathrm{d}z=\oint_C\sum_{k=-\infty}^\infty a_kz^k\mathrm{d}z=-2\pi\mathrm{i}a_{-1}
$$
定义无穷远处的留数：
$$
\mathrm{Res}\:f(\infty)=-a_{-1}
$$
所以有（积分区域在内，方向为逆时针方向）：
$$
\oint_Cf(z)\mathrm{d}z=-2\pi\mathrm{iRes}\:f(\infty)
$$
这与有限元点的留数定理结果一致。使用代换$t=\frac{1}{z}$回代即可证明。

于是可以得出一个定理：函数$f(z)$在整个复平面上只有有限个奇点$z_1,z_2,...,z_N$，除此外全部解析，而且无穷远处$\infty$ 也是$f(z)$的孤立奇点，那么函数$f(z)$在所有奇点（包括无穷远处）处的留数之和为零。即：

$$
\sum_{i=1}^N\operatorname{Res}f(z_i)+\operatorname{Res}f(\infty)=0
$$

### 4、留数计算

#### (1) 一阶极点处的留数

如果 $z_{0}$ 是 $f(z)$ 的一阶极点，那么 $f(z)$ 在 $z_{0}$ 附近的洛朗展开为：

$$
f(z) = a_{-1}(z - z_{0})^{-1} + a_{0} + a_{1}(z - z_{0}) + \ldots
$$

因此：

$$
\lim_{z \rightarrow z_{0}} (z - z_{0})f(z) = \lim_{z \rightarrow z_{0}} [a_{-1} + a_{0}(z - z_{0}) + a_{1}(z - z_{0})^{2} + \ldots] = a_{-1}
$$

也就是说：

$$
\text{Res } f(z_{0}) = a_{-1} = \lim_{z \rightarrow z_{0}} [(z - z_{0})f(z)]
$$

对于有理函数：$f(z) = \frac{P(z)}{Q(z)}$ 其中 $P(z)$ 在 $z_{0}$ 解析，$z_{0}$ 是 $Q(z)$ 的一阶零点，那么：

$$
\text{Res } f(z_{0}) = \lim_{z \rightarrow z_{0}} (z - z_{0})f(z) = \lim_{z \rightarrow z_{0}} (z - z_{0}) \frac{P(z)}{Q(z)} = \frac{P(z_{0})}{Q'(z_{0})}
$$

更一般：$f(z) = \frac{P(z)}{z - z_{0}}$ 其中 $P(z)$ 在 $z_{0}$ 解析，那么 $\text{Res } f(z_{0}) = P(z_{0})$

#### (2) $m$阶极点的留数

如果$z_{0}$是$f(z)$的$m$阶极点, 那么$f(z)$在$z_{0}$附近的洛朗展开为：

$$
f(z)=\frac{a_{-m}}{\left(z-z_{0}\right)^{m}}+\frac{a_{-m+1}}{\left(z-z_{0}\right)^{m-1}}+\cdots+a_{-1}+\frac{a_{0}}{z-z_{0}}+a_{1}\left(z-z_{0}\right)+a_{2}\left(z-z_{0}\right)^{2}+\cdots
$$
$$
(z-z_{0})^{m}f(z)=a_{-m}+a_{-m+1}\left(z-z_{0}\right)+\cdots+a_{-1}\left(z-z_{0}\right)^{m-1}+a_{0}\left(z-z_{0}\right)^{m}+a_{1}\left(z-z_{0}\right)^{m+1}+\cdots
$$

如果$z\to z_{0}$时右边为非零的有限值, 说明是$m$阶极点。两边对$z$求$(m-1)$阶导数, 那么：

$$
\frac{\mathrm{d}^{m-1}}{\mathrm{d}z^{m-1}}\left[\left(z-z_{0}\right)^{m}f(z)\right]=a_{-1}(m-1)!+m!a_{0}\left(z-z_{0}\right)+\cdots
$$

从而可以得到：

$$
a_{-1}=\operatorname{Res}{f(z_{0})}=\frac{1}{(m-1)!}\lim_{z\to z_{0}}\left\{\frac{\mathrm{d}^{m-1}}{\mathrm{d}z^{m-1}}\left[\left(z-z_{0}\right)^{m}f(z)\right]\right\}
$$

#### (3) 函数直接展开法

对于高阶极点的留数，有时候利用函数直接展开法更为有效

$$
f(z)=\left(z-z_0\right)^{-m}\varphi(z)
$$
$$
\varphi(z)=\sum_{k=0}^{\infty}a_{k}\left(z-z_{0}\right)^{k}
$$

那么$\varphi(z)$泰勒展开式中$z$的$(m-1)$次项的系数就是函数的留数。

### 5、极点次数判断定理

极点次数的判断定理：$z_{0}$为$f(z)$处的孤立奇点，那么$z_{0}$为$f(z)$处的$m(m\in\mathbb{N})$极级点的充要条件是存在一个在$z_{0}$处非零的解析函数$P(z)$，$P(z_{0})\neq 0$，且在$z_{0}$的去心邻域中可以表示成$f(z)=P(z)/(z-z_{0})^{m}$。

$$
\text{Res }f(z_{0})=\begin{cases}P(z_{0}),m=1\\\frac{P^{(m-1)}(z_{0})}{(m-1)!},m>1\end{cases}
$$

如果$f(z)=\frac{P(z)}{Q(z)}$，$z_{0}$为$P(z)$处的$m$阶零点，$z_{0}$为$Q(z)$处的$n$阶零点

$$
P(z_{0})=(z-z_{0})^{m}p(z)\quad Q(z_{0})=(z-z_{0})^{n}q(z)
$$

$$
f(z)=\frac{(z-z_{0})^{m}p(z)}{(z-z_{0})^{n}q(z)}=\frac{\varphi(z)}{(z-z_{0})^{n-m}}，\varphi(z)=\frac{p(z)}{q(z)}
$$
$$
\varphi(z_{0})=\frac{p(z_{0})}{q(z_{0})}\neq 0
$$

$$
\text{Res }f(z_{0})=\frac{\varphi^{(k)}(z_{0})}{k!}，k=n-m-1\geq 0
$$

## 二、应用留数定理计算实变函数定积分

### 1、类型一：$I=\int_0^{2\pi}R(\cos x,\sin x)\mathrm{d}x$

作变换$z=e^\mathrm{i\theta}$，可以把 积分路径从实变函数中的$[0,2π]$，变换到复平面上的单位圆。此时有变换关系：

$$
\sin\theta=\frac{e^{\mathrm{i}\theta}-e^{-\mathrm{i}\theta}}{2\mathrm{i}}=\frac{z-1/z}{2\mathrm{i}}=\frac{z^2-1}{2\mathrm{i}z}
$$
$$
\cos\theta=\frac{e^{\mathrm{i}\theta}+e^{-\mathrm{i}\theta}}{2}=\frac{z+1/z}{2}=\frac{z^2+1}{2z}
$$
$$
\mathrm{d}\theta=\frac{\mathrm{d}z}{\mathrm{i}z}
$$

回代到原积分中：
$$
\begin{aligned}I&=\oint_{C:|z|=1}R\left(\frac{z^{2}+1}{2z},\frac{z^{2}-1}{2\mathrm{i}z}\right)\frac{dz}{\mathrm{i}z}\\&=\frac{1}{\mathrm{i}}\oint_{C:|z|=1}f(z)dz\\f(z)&=\frac{1}{z}R\left(\frac{z^{2}+1}{2z},\frac{z^{2}-1}{2\mathrm{i}z}\right)\end{aligned}
$$
根据留数定理：
$$
I=2\pi\sum_{|z_k|<1}\text{Res}f(z_k)
$$
也就是将$f(z)$在单位圆内的所有留数之和乘以$2\pi$。

### 2、类型二：$I=\int^{+\infty}_{-\infty}f(x)\mathrm{d}x$

![image-20251012135119107](https://laoguantx.top/article/数学/数学物理方法/留数定理/image-20251012135119107.png)
$$
\int_{-\infty}^{\infty} f(x)\mathrm{d}x=\lim_{R\to\infty}\int_{-R}^{R}f(x)\mathrm{d}x
$$
为了应用柯西留数定理来求得等式右边的积分，我们人为地在复平面上构造一个如图所示的围道（封闭的路径），包括一个半圆 $C_R$ 及实轴上的一条直线。根据柯西留数定理：
$$
\oint_L f(z)\mathrm{d}z=\int_{C_R} f(z)\mathrm{d}z+\int_{-R}^{R}f(x)\mathrm{d}x=2\pi \mathrm{i}\sum_{j=1}^{n}\text{Res }f(b_j)
$$
在实轴上 $z=x+iy=x$，$f(z)=f(x)$，$-R\to R$ 指实轴上从 $-R$ 到 $R$ 的路径。$b_1,b_2,\cdots$ 是封闭曲线所围成的区域内的奇点。
$$
\int_{C_R}f(z)\mathrm{d}z+\int_{-R}^Rf(x)\mathrm{d}x=2\pi\mathrm{i}\sum_{j=1}^n\mathrm{Res}f(b_j)
$$
当半径$R$ 足够大后，$f(z)$在上半平面上的所有奇点都可以包围在封闭路径之中，也就是说，上面等式中右边部分的值将固定不变，这时，如果$R\to\infty$时左边第一项积分值趋于一个固定的值（有极限），那么我们就可以求得相应的反常积分值。

下面我们讨论在何时满足$\lim_{R\to\infty}\int_{C_R}f(z)\mathrm{d}z=0$

- 函数$f(z)=\frac{P(z)}{Q(z)}$是有理函数，$\text{deg}Q-\text{deg}P\geq2$（$\text{deg}$ 指多项式的最高幂次），上式成立。

- 当半径$R\to\infty$时，$zf(z)\to0$（一致趋向于零），上式也成立。

> **证明**：利用不等式：
> $$
> \left|\int_{C_R}f(z)dz\right|\leq\int_{C_R}|f(z)||dz|=\int_{C_R}\left|\frac{P(z)}{Q(z)}\right||dz|
> $$
> $P(z),Q(z)$是多项式当$R$足够大时：
>
> $$
> |P(z)|\sim c_1|z|^{\deg P(z)} \quad |Q(z)|\sim c_2|z|^{\deg Q(z)}
> $$
> $$
> \left|\int_{C_R}f(z)dz\right|\leq C\frac{1}{R}\to0
> $$
>
> 当半径$R\to\infty$时，$zf(z)\to0$（一致趋于零），上式也成立。

更一般地，可以推导**大圆弧定理**：$f(z)$在$z=\infty$的邻域内连续，$\theta_1\leq\arg(z)\leq\theta_2$，当$|z|\rightarrow\infty$时，$zf(z)$一致趋向于$K$，那么：
$$
\lim_{R\rightarrow\infty}\int_{C_R}f(z)\mathrm{d}z=\mathrm{i}K(\theta_2-\theta_1)
$$
![image-20251012140356529](https://laoguantx.top/article/数学/数学物理方法/留数定理/image-20251012140356529.png)

> **证明**：
>
> 记$z=R\mathrm{e}^{\mathrm{i}\theta}$
>
> $$
> \int_{C_R}\frac{\mathrm{d}z}{z}=\int_{\theta_1}^{\theta_2}\mathrm{i}\mathrm{d}\theta=\mathrm{i}\left(\theta_2-\theta_1\right)
> $$
>
> $$
> \int_{C_{R}}f(z)\mathrm{d}z-\mathrm{i}K(\theta_2-\theta_1)=\int_{C_{R}}f(z)\mathrm{d}z-\int_{C_{R}}\frac{K\mathrm{d}z}z=\int_{C_{R}}\frac{zf(z)-K}z\mathrm{d}z
> $$
>
> $$
> \left|\int_{C_R}f(z)\mathrm{d}z-\mathrm{i}K(\theta_2-\theta_1)\right|\leq\int_{C_R}\frac{\left|zf(z)-K\right|}{\left|z\right|}|\mathrm{d}z|
> $$
>  $R\to\infty,zf(z)\to K$ 一致趋向于$K$，$\forall\varepsilon>0,\exists M(\varepsilon)$，当$R>M,\left|zf(z)-K\right|<\varepsilon$：
>
> $$
> \left|\int_{C_R}f(z)\mathrm{d}z-\mathrm{i}K(\theta_2-\theta_1)\right|\leq\int_{C_R}\frac{\left|zf(z)-K\right|}{\left|z\right|}\left|\mathrm{d}z\right|\leq\varepsilon\int_{C_R}\frac{\left|\mathrm{d}z\right|}{\left|z\right|}=\varepsilon\left(\theta_2-\theta_1\right)
> $$
>
> 由于$\varepsilon$的任意性：
>
> $$
> \lim\limits_{R\to\infty}\left|\int\limits_{C_R}f(z)\mathrm{d}z-\mathrm{i}K(\theta_2-\theta_1)\right|=0\Rightarrow\int\limits_{C_R}f(z)\mathrm{d}z=\mathrm{i}K(\theta_2-\theta_1)
> $$
>
> 大圆弧定理得证：
>
> $$
> R\to \infty , zf( z) \to 0\Rightarrow \lim _{B\to \infty }\int _Cf( z) \mathrm{d}z= 0
> $$

### 3、类型三$I=\int^{+\infty}_{-\infty}F(x)e^{\mathrm{i}mx}\mathrm{d}x$

对于这类积分，指数函数可以利用欧拉公式分解为两部分：
$$
\operatorname{Re}I=\int_{-\infty}^{\infty}F(x)\cos mx\mathrm{d}x
$$

$$
\operatorname{Im}I=\int_{-\infty}^{\infty}F(x)\sin mx\mathrm{d}x
$$

所以我们可以通过计算类型三所示积分的值，取其实部或者虚部来获得上述两种实变函数的定积分。

首先我们需要使用 Jordan（约当）引理：$m>0,0≤\arg(z)\le \pi$，在上半平面内当$|z|\to\infty$时，$F(z)$ 一致地趋向于$0$，那么：

$$
\lim_{R\to\infty}\int_{C_R}F(z)e^{\mathrm{i}mz}\mathrm{d}z=0
$$
该引理的证明不做要求。

![image-20251012135119107](https://laoguantx.top/article/数学/数学物理方法/留数定理/image-20251012135119107.png)

和第二类问题类似，我们需要构造一个围道，该围道由实轴和一个半圆所组成（至于半圆位于上半平面还是下半平面，需要根据$m$的值来定）
$$
\oint_{I} F(z)e^{\mathrm{i}mz}\mathrm{d}z = \int_{C_{R}} F(z)e^{\mathrm{i}mz}\mathrm{d}z + \int_{-R}^{R} F(x)e^{\mathrm{i}mx}\mathrm{d}x = 2\pi \mathrm{i} \sum_{j=1}^{n} \text{Res } f(b_{j})
$$
$$
\lim_{R\rightarrow\infty} \int_{C_{R}} F(z)e^{\mathrm{i}mz}\mathrm{d}z = 0
$$

$$
\lim\limits_{R\to\infty}\int_{-R}^{R}F(x)e^{\mathrm{i}mx}\mathrm{d}x=2\pi\mathrm{i}\sum\limits_{j=1}^{n}\mathrm{Res}\left(F(z)e^{\mathrm{i}mz},b_{j}\right)
$$

分别比较等式两边实部和虚部的值，就可以得到：

$$
\mathrm{Re}\:I+\mathrm{i}\:\mathrm{Im}\:I=\int_{-\infty}^{\infty}F(x)\cos mx\mathrm{d}x+\mathrm{i}\:\int_{-\infty}^{\infty}F(x)\sin mx\mathrm{d}x=2\pi\mathrm{i}\sum_{j=1}^{n}\mathrm{Res}\:(F(z)e^{\mathrm{i}mz},b_{j})
$$

当积分表达式中的$m <0$时，我们需要在下半平面构建一个由实轴和半圆所组成的围道，此时，当半圆的半径趋向无穷大时，函数沿半圆的路径积分趋向于$0$。

### 4、特殊情况：实轴上有单极点（一阶极点）的情形

如果$f(z)$在实轴上有极点，我们称上面的积分为瑕积分，假设有一个瑕点$\alpha \in [a, b]$，定义瑕积分为：

$$
\int_a^bf(x)\mathrm{d}x=\lim_{\delta_1\to0}\int_a^{\alpha-\delta_1}f(x)\mathrm{d}x+\lim_{\delta_2\to0}\int_{\alpha+\delta_2}^bf(x)\mathrm{d}x
$$
定义瑕积分的主值为：

$$
\int_a^bf(x)\mathrm{d}x=\lim_{\varepsilon\to0}\biggl[\int_a^{\alpha-\varepsilon}f(x)\mathrm{d}x+\int_{\alpha+\varepsilon}^bf(x)\mathrm{d}x\biggr]
$$

对于上面的反常积分，我们考虑分的主值为：

$$
\int_{-\infty}^{\infty}f(x)\mathrm{d}x=\lim\limits_{\substack{R\to\infty\\\varepsilon\to0}}\biggl[\int_{-R}^{\alpha-\varepsilon}f(x)\mathrm{d}x+\int_{\alpha+\varepsilon}^{R}f(x)\mathrm{d}x\biggr]
$$
![image-20251012171939721](https://laoguantx.top/article/数学/数学物理方法/留数定理/image-20251012171939721.png)

当实轴上存在瑕点的时候，为了绕开瑕点处函数的奇异性，需要以瑕点为圆心，作一个足够小的圆，构造如图所示的围道。柯西留数定理对于该围道所围成的区域依旧成立。

$$
\int_{-R}^{\alpha-\varepsilon}f(x)\mathrm{d}x+\int_{C_{\varepsilon}}f(z)\mathrm{d}z+\int_{\alpha-\varepsilon}^{R}f(x)\mathrm{d}x+\int_{C_{R}}f(z)\mathrm{d}z=2\pi\text{i}\sum_{j=1}^{n}\text{Res}f(b_{j})
$$

对于函数沿外面半圆$C_{R}$的积分，依旧可以根据前面的大圆弧定理或者约当引理，当外圆的半径趋向无穷大时，相应的积分趋向于零。

对于瑕点附近的内部半圆，需要用到**小圆弧定理**：$f(z)$在$z=a$的去心邻域内连续，$\theta_1\leq\arg(z-a)\leq\theta_2$ ，当$(z-a)\to0$ 时，$(z-a)f(z)$一致趋向于$K$，那么：

$$
\lim\limits_{R\to0}\int\limits_{C_R}f(z)dz=\operatorname{i}K(\theta_2-\theta_1)
$$

这里$C_R$是以$z=a$为圆心$R$为半径的圆弧。

![image-20251012172634727](https://laoguantx.top/article/数学/数学物理方法/留数定理/image-20251012172634727.png)

> **证明**：
>
> 记 $z- a= R\mathrm{e} ^{\mathrm{i} \theta }$
>
> $$
> \int_{C_R}\frac{\mathrm{d}z}{z-a}=\int_{\theta_1}^{\theta_2}\mathrm{i}\mathrm{d}\theta=\mathrm{i}\left(\theta_2-\theta_1\right)
> $$
>
> $$
> \int_{C_{R}}f(z)\mathrm{d}z-\mathrm{i}K(\theta_2-\theta_1)=\int_{C_{R}}f(z)\mathrm{d}z-\int_{C_{R}}\frac{K\mathrm{d}z}{z-a}=\int_{C_{R}}\frac{(z-a)f(z)-K}{z-a}\mathrm{d}z
> $$
>
> $$
> \left|\int_{C_R}f(z)\mathrm{d}z-\mathrm{i}K(\theta_2-\theta_1)\right|\leq\int_{C_R}\frac{\left|(z-a)f(z)-K\right|}{\left|z-a\right|}\left|\mathrm{d}z\right|
> $$
>
> $( z- a) f( z) \to K$ 一致趋向于$K$，$\forall\varepsilon>0,\exists\delta(\varepsilon)$，当 $R< \delta , \left | ( z- a) f( z) - K\right | < \varepsilon$：
>
> $$
> \left|\int_{C_R}f(z)dz-\mathrm{i}K(\theta_2-\theta_1)\right|\leq\int_{C_R}\frac{\left|(z-a)f(z)-K\right|}{\left|z-a\right|}\left|dz\right|
> $$
>
> $$
> \left|\int_{C_R}f(z)dz-\mathrm{i}K(\theta_2-\theta_1)\right|\leq\varepsilon\int_{C_R}\frac{\left|dz\right|}{\left|z-a\right|}=\varepsilon\left(\theta_2-\theta_1\right)
> $$
>
> 由于$\varepsilon$的任意性：
>
> $$
> \lim\limits_{R\to0}\left|\int\limits_{C_R}f(z)dz-\mathrm{i}K(\theta_2-\theta_1)\right|=0
> $$
>
> $$
> \lim_{R\to0}\int_{C_R}f(z)dz=\mathrm{i}K(\theta_2-\theta_1)
> $$
