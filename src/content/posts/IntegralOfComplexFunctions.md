---
title: 复变函数的积分
published: 2025-09-25
category: ["数学", "数学物理方法"]
tags: ["复变函数"]
alias: "integralofcomplexfunctions"
---

> [!NOTE]
> 在“数学物理方法”分类中，所有文章的闭合曲线积分方向如下规定：沿着曲线行走，要积分的区域一直在左手方位，那么行走的方向即为积分方向。

## 一、复变函数的积分

### 1、复变函数积分的定义

![image-20250924131659304](https://laoguantx.top/article/数学/数学物理方法/复变函数的积分/image-20250924131659304.png)

给定一个复变函数$f(z)$以及复平面上的一条光滑的曲线$l$。我们把光滑的曲线分成$n$段（不一定是均分），其中$n+1$个点的坐标分别为：
$$
z_k,k=0,1,2,...,n
$$

在第 $k$ 个分段$[z_k-1,z_k]$上任意取一点$\zeta_k\in[z_k-1,z_k]$，进行如下的求和：

$$
\sum_{k=1}^nf\left(\zeta_k\right)\left(z_k-z_{k-1}\right)=\sum_{k=1}^nf\left(\zeta_k\right)\Delta z_k
$$

当分段数量$n\to\infty$，且每个分段对应的$\Delta z=z_k-z_{k-1}\to0$（实际上是该段的长度$\to 0$），如果上面求和极限存在， 且该极限的值与$\zeta_k$的取值方式无关，那么我们称该极限就是复变函数$f(z)$沿着曲线$l$的路径积分，记作：

$$
\int_lf(z)\mathrm{d}z=\lim_{\max|\Delta z_k|\to0}\sum_{k=1}^nf\left(\zeta_k\right)\Delta z_k
$$

### 2、复变积分的计算方法

考虑到

$$
\begin{aligned}&z=x+\mathrm{i}y\\&f(z)=u(x,y)+\mathrm{i}v(x,y)\end{aligned}
$$

可以把上面积分表示为：

$$
\int_lf(z)\mathrm{d}z=\int_l\left[u(x,y)\mathrm{d}x-v(x,y)\mathrm{d}y\right]+\int_l\mathrm{i}\left[\left(v(x,y)\mathrm{d}x+u(x,y)\mathrm{d}y\right)\right]
$$

也就是说，复变函数的路径积分可以归结为几个实变函数的线积分（第二类线积分）。因此实变函数中线积分的一些性质对于复变函数的路径积分同样成立。

## 二、柯西定理

对于一般的复变函数，其积分值不仅依赖于起点和终点，还有可能与积分的具体路径有关。沿着不同积分路径的积分可能不尽相同。联系微积分的相关知识，寻找积分与路径无关的复变函数的特点。[^1]

### 1、单连通区域柯西定理

如果复变函数$f(z)$在闭的单连通区域$B$上是解析，则沿$B$上任意一段简单的光滑闭合曲线$l$（这里简单指曲线不交叉，$l$围成一个单连通区域$\Omega$）有积分关系：

$$
\oint_lf(z)\mathrm{d}z=0
$$

> **证明**：$l$ 是简单的封闭曲线，在其所围成单连通区域$\Omega$上有格林公式：
>
> $$
> \oint_lP\mathrm{d}x+Q\mathrm{d}y=\iint_\Omega\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\mathrm{d}y
> $$
>
> 复变函数的积分可以化为：
>
> $$
> \oint_lf(z)\mathrm{d}z=\oint_l[u(x,y)\mathrm{d}x-v(x,y)\mathrm{d}y]+\mathrm{i}\oint_l[v(x,y)\mathrm{d}x+u(x,y)\mathrm{d}y]
> $$
>
> 包含两个实变函数的线积分，由于$f(z)$在$B$上解析，因而$\frac{\partial u}{\partial x},\frac{\partial u}{\partial y},\frac{\partial v}{\partial x},\frac{\partial v}{\partial y}$在$B$上连续，而且满足柯西-黎曼方程
> $$
> \frac{\partial u}{\partial x}=\frac{\partial v}{\partial y},\frac{\partial v}{\partial x}=-\frac{\partial u}{\partial y}
> $$
> 所以可以将原式进行变形：
> $$
> \begin{aligned}&\oint_lP\mathrm{d}x+Q\mathrm{d}y=\iint_\Omega\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\mathrm{d}y\\&\oint_l[u(x,y)\mathrm{d}x-v(x,y)\mathrm{d}y]=\iint_\Omega\left(-\frac{\partial u}{\partial y}-\frac{\partial v}{\partial x}\right)dxdy=0\\&\oint_l[v(x,y)\mathrm{d}x+u(x,y)\mathrm{d}y]=\iint_\Omega\left(\frac{\partial u}{\partial x}-\frac{\partial v}{\partial y}\right)dxdy=0\\&\oint_lf(z)\mathrm{d}z=0\end{aligned}
> $$

### 2、多连通区域柯西定理

有时侯，复变函数在区域上并非是处处解析，在某些点或者某些子区域上不可导（甚至不连续或根本没有定义，我们称这样不解析的点为奇点）。为了应用柯西定理，我们需要去掉这些奇点附近的区域（挖去一个大小合适的孔洞），来构造一个多连通区域，使得该复变函数在此多连通区域内是解析的。（可以联想微积分中的绕洞积分）

多连通区域柯西定理：如果$f(z)$是闭多连通区域上的单值解析函数，那么在多连通区域的边界上有：

$$
\oint_lf(z)\mathrm{d}z+\sum_{i=1}^n\oint_{l_i}f(z)\mathrm{d}z=0
$$

式中$l$为区域外边线，$l_i$为区域的第$i$条内边界线，所有积分均沿着边界线的正方向进行。（外边界：逆时针方向，内边界：顺时针方向）

> **证明**：
>
> 和多连通区域上格林公式的证明相同，我们在多连通区域上进行开槽， 把多连通区域转化为一个单联通区域。根据 在此单联通区域上，复变函数是解析， 所以沿此单联通区域边界的路径积分为零。显然在开槽附近两条直线上的线积分由于走向相反，正好抵消。如果把内边界换成逆时针方向，那么内外边界的积分值相同。

## 三、复变函数的不定积分

根据柯西定理，如果复变函数$f(z)$在单连通区域$B$上是解析，那么沿B上任何一路径$l$的积分只与起点和终点的位置有关，而与路径的具体走向无关（沿封闭曲线的积分为零）。因此，当起点$z_0$固定后，可以定义一个单值的不定积分：

$$
F(z)=\int_{z_0}^zf(\zeta)d\zeta
$$

可以证明，上述定义的不定积分$F(z)$在$B$上也是解析，且$F’(z)=f(z)$，称 $F(z)$ 是$f(z)$ 的一个原函数。

> **例**：计算积分$I=\oint_l(z-\alpha)^n\mathrm{d}z,n\in\mathbb{Z}$。$\alpha$是复平面的任意一点，$l$，为任意一条封闭曲线。
>
> **解**：
>
> 如果$\alpha$不在$l$所围成的区域中，那么被积函数是解析的，根据柯西定理，积分值为零。如果$\alpha$位于$l$所围成的区域内时，可以分成下面两种情况：
>
> 1. 如果$n\geq0$,那么被积函数在$l$所围成的区域上依旧是解析的，积分值也为零。
>
> 2. 如果 $n<0$,那么被积函数在$l$所围成的区域中有一个奇点$\alpha$,复变函数$(z-\alpha)^n$不解析。
>
>    ![image-20250924135444883](https://laoguantx.top/article/数学/数学物理方法/复变函数的积分/image-20250924135444883.png)
>
> 对于第二种情况，我们以点$\alpha$为圆心，在$l$所围成的区域内作一个圆（其半径为$R$）圆的边界为$C$ 。显然，复变函数$(z-\alpha)^n$ 在挖去了圆的区域（由$C$和$l$所围成的区域）上是解析的，根据柯西定理，函数 $(z-\alpha)^n$ 在沿圆周$C$上的积分和沿封闭曲线$l$的积分是相同。我们可以用沿圆周$C$的积分来代替。
>
> 在圆周C上:
> 
> $$
> z - \alpha = Re^{\mathrm{i}\varphi}
> $$
> 
> $$
> I = \oint_C (z - \alpha)^n \mathrm{d}z = \int_0^{2\pi} \left(Re^{\mathrm{i}\varphi}\right)^n R\mathrm{i} e^{\mathrm{i}\varphi} \mathrm{d}\varphi = \mathrm{i}R^{n+1} \int_0^{2\pi} e^{\mathrm{i}(n+1)\varphi} \mathrm{d}\varphi
> $$
> 
> 如果 $n = -1$：
> 
> $$
> I = \mathrm{i}R^{n+1} \int_0^{2\pi} d\varphi = 2\pi \mathrm{i}
> $$
> 
> 如果 $n \neq -1$：
> 
> $$
> I = \mathrm{i}R^{n+1} \int_0^{2\pi} e^{\mathrm{i}(n+1)\varphi} \mathrm{d}\varphi = \frac{\mathrm{i}R^{n+1}}{\mathrm{i}(n+1)} \int_0^{2\pi} e^{\mathrm{i}(n+1)\varphi} \mathrm{d}(\mathrm{i}(n+1)\varphi) = 0
> $$
> 
> 最终得到：
> 
> $$
> I = \oint_C (z - \alpha)^n \mathrm{d}z = \begin{cases} 2\pi \mathrm{i}, & n = -1 \\ 0, & n \neq -1 \end{cases}
> $$
> 
> 从这个例子我们可以看到，当被积函数不是解析（有奇点）时, 我们可以构造挖去奇点的圆形区域, 根据柯西定理, 用圆形区域边界的积分来代替。

## 四、柯西积分公式

### 1、单连通区域上的柯西积分公式

如果$f(z)$在闭单连通区域$B$上解析，$l$为$B$边界，$\alpha\in B$，则有柯西积分公式：
$$
f(\alpha)=\frac{1}{2\pi \mathrm{i}}\oint_l\frac{f(z)}{z-\alpha}\mathrm{d}z
$$

> **证明**：根据前面例子所得到的结论，对于任意包含点$\alpha$ 的简单封闭曲线$l$,成立
>
> $$
> \oint_l\frac{\mathrm{d}z}{z-\alpha}=2\pi\mathrm{i}
> $$
>
> 因此有恒等关系：
>
> $$
> f( \alpha ) \equiv \frac {f(\alpha ) } {2\pi \mathrm{i} }\oint _l\frac 1{z- \alpha }\mathrm{d}z= \frac 1{2\pi \mathrm{i} }\oint _l\frac {f( \alpha ) }{z- \alpha }\mathrm{d}z
> $$
>
> 所以只需要证明：
>
> $$
> \frac 1{2\pi \mathrm{i} }\oint _l\frac {f( z) }{z- \alpha }\mathrm{d}z= \frac 1{2\pi \mathrm{i} }\oint _l\frac {f( \alpha ) }{z- \alpha }\mathrm{d}z
> $$
> 即：
> $$
> \frac{1}{2\pi\mathrm{i}}\oint_l\frac{f(z)-f(\alpha)}{z-\alpha}\mathrm{d}z=0
> $$
> ![image-20250924142628152](https://laoguantx.top/article/数学/数学物理方法/复变函数的积分/image-20250924142628152.png)
>
> 函数$f(z)$是解析，因此被积函数只有$\alpha$一个奇点。不妨以$\alpha$为圆心，任意小的$\varepsilon$为半径，作一个小圆，记圆的边界$C_\varepsilon$。显然在$l$与$C_\varepsilon$所围成的复连通区域上被积函数是单值解析，根据柯西定理，沿$l$积分和沿$C_\varepsilon$的积分值应该是相等。
>
> $$
> \frac1{2\pi\mathrm{i}}\oint_l\frac{f(z)-f(\alpha)}{z-\alpha}\mathrm{d}z=\frac1{2\pi\mathrm{i}}\oint_{C_\varepsilon}\frac{f(z)-f(\alpha)}{z-\alpha}\mathrm{d}z
> $$
>
> 因此需要证明：
>
> $$
> \frac1{2\pi\mathrm{i}}\oint_{C_\varepsilon}\frac{f(z)-f(\alpha)}{z-\alpha}\mathrm{d}z=0
> $$
> 根据积分不等式：
>
> $$
> \begin{aligned}
> &\left|\oint_{C_\varepsilon}\frac{f(z)-f(\alpha)}{z-\alpha}\mathrm{d}z\right|\\\leq&\oint_{C_\varepsilon}\frac{\left|f(z)-f(\alpha)\right|}{\left|z-\alpha\right|}|\mathrm{d}z|\\\leq&\frac{\max|f(z)-f(\alpha)|}{\varepsilon}\oint_{C_\varepsilon}|\mathrm{d}z|
> \end{aligned}
> $$
> 由于$f(z)$是个连续函数，$C_\varepsilon:|z-\alpha|=\varepsilon$，只要半径$\varepsilon$ 足够小，$|f(z)-f(\alpha)|$可以任意小。
> 也就是说当$\varepsilon\to0$时，$| f(z)-f(\alpha)|\to0$：
> $$
> \lim_{\varepsilon\to0}\frac1{2\pi\mathrm{i}}\oint_{C_\varepsilon}\frac{f(z)-f(\alpha)}{z-\alpha}\mathrm{d}z=0
> $$
> 最终得到：
> $$
> \begin{aligned}&\frac{1}{2\pi\mathrm{i}}\oint_{C_\varepsilon}\frac{f(z)-f(\alpha)}{z-\alpha}\mathrm{d}z=0\\&\frac{1}{2\pi\mathrm{i}}\oint_l\frac{f(z)-f(\alpha)}{z-\alpha}\mathrm{d}z=\frac{1}{2\pi\mathrm{i}}\oint_{C_\varepsilon}\frac{f(z)-f(\alpha)}{z-\alpha}\mathrm{d}z=0\end{aligned}
> $$
> 证毕

换一种表述，如果$f(z)$在闭的单连通区域$B$上解析，那么，对于区域$B$内任意一条包含$z$的封闭曲线$l$：

$$
f(z)=\frac1{2\pi\mathrm{i}}\oint_l\frac{f(\zeta)}{\zeta-z}\mathrm{d}\zeta 
$$

从柯西积分公式可以看到：在区域内的一个解析函数，当在区域边界上的函数值给定以后，根据柯西积分公式，区域内任意一点的函数值也就确定下来了。换个说法，如果两个解析函数在边界上的值相同，那么它们在区域内任意一点的函数值也相同。

### 2、多联通区域上的柯西积分公式

对于多连通区域上的解析函数，同样可以得到相应的柯西积分公式：

$$
f(z)=\frac1{2\pi\mathrm{i}}\oint_l\frac{f(\zeta)}{\zeta-z}\mathrm{d}\zeta+\sum_{n=1}^N\frac1{2\pi\mathrm{i}}\oint_{l_n}\frac{f(\zeta)}{\zeta-z}\mathrm{d}\zeta
$$

### 3、区域外部的柯西积分公式

设$f(z)$在闭回路$l$的外部区域是解析，而且$f(z)$在无穷远处的函数值有限，那么
有下面的柯西积分公式：

$$
f(z)=-\frac1{2\pi\mathrm{i}}\oint_l\frac{f(\zeta)}{\zeta-z}d\zeta+f(\infty)
$$

这里要注意沿边界$l$的积分方向，若沿曲线积分正方向，则需要添加负号。

### 4、高阶导数柯西公式

如果$f(z)$在封闭曲线$l$内解析，那么对于封闭曲线$l$内的任意点$z$，有柯西积分公式：

$$
f(z)=\frac1{2\pi\mathrm{i}}\oint_l\frac{f(\zeta)}{\zeta-z}\mathrm{d}\zeta
$$

由于$z$ 不在曲线上，$\zeta-z\neq0$，所以右边积分表达式中被积函数可以求导，两边对$z$求导数得到

$$
f^{\prime}(z)=\frac1{2\pi\mathrm{i}}\oint_l\frac{f(\zeta)}{\left(\zeta-z\right)^2}\mathrm{d}\zeta 
$$

更进一步，还可以继续进行求导，得到更为高阶的导数：

$$
f^{(n)}(z)=\frac{n!}{2\pi\mathrm{i}}\oint_l\frac{f(\zeta)}{\left(\zeta-z\right)^{n+1}}\mathrm{d}\zeta
$$

由此可以得出定理：解析函数可以求任意次导数，而且其任意次导数依旧是解析的。而实函数没有这个性质。

### 5、柯西型积分的解析性定理

若$g(z)$是区域内任意的连续函数，$C$ 是任意一条曲线（可以不闭合），对于区域内不在曲线$C$上的任意点$z_0$，定义：

$$
G(z_0)=\int_C\frac{g(\xi)}{\zeta-z_0}\mathrm{d}\xi
$$

可以证明这样定义的函数$G(z)$是解析的，而且：

$$
G'(z_0)=\int_C\frac{g(\xi)}{\left(\xi-z_0\right)^2}\mathrm{d}\xi
$$

### 6、柯西积分公式的一般形式及其变形

柯西积分公式的一般形式：$f(z)$是简单封闭曲线区域内任意的解析函数，对于区域内不在曲线$l$上的任意点$z$：

$$
f^n(z)=\frac{n!}{2\pi\mathrm{i}}\oint_l\frac{f(\zeta)}{\left(\zeta-z\right)^{n+1}}\mathrm{d}\zeta
$$

也可以变形为：

$$
\oint _l\frac {f( z) }{\left ( z- z\right ) ^{n+ 1}}\mathrm{d}z= \frac {2\pi \mathrm{i} f^n( z_0) }{n! }
$$

可用来求函数的围道积分。

> **例**：求积分：
>
> $$
> I=\oint_{C:|z|=1}\frac{e^{2z}}{z^4}\mathrm{d}z
> $$
>
> 构造函数和变量：
>
> $$
> f(z)=e^{2z},z_0=0
> $$
>
> 使用柯西积分公式：
>
> $$
> \oint_l\frac{f(z)}{\left(z-z_0\right)^{n+1}}\mathrm{d}z=\frac{2\pi\mathrm{i}f^n(z_0)}{n!}
> $$
>
> 最后得到：
>
> $$
> \begin{aligned}
> I&=\oint_{C:|z|=1}\frac{e^{2z}}{z^4}\mathrm{d}z\\&=\oint_{C:|z|=1}\frac{f(z)}{\left(z-z_0\right)^4}\mathrm{d}z\\&=\frac{2\pi\mathrm{i}f^3(z_0)}{3!}\\&=\frac{8\pi\mathrm{i}}3
> \end{aligned}
> $$

## 五、柯西公式扩展

### 1、柯西不等式

假设复变函数$f(z)$在圆形边界$C_R{:}|z-z_0|=R$及其内部是解析，其在边界$C_R$上的最大值为$M_R$，那么有：

$$
\left|f^n(z_0)\right|\leq\frac{n!M_R}{R^n}
$$

### 2、刘维尔定理

如果$f(z)$在全平面上为解析函数（全纯函数，整函数），并且是有界的，即$|f(z)|\leq N$，那么$f(z)$在整个复平面上必定是常数。

### 3、平均值定理

如果复变函数$f(z)$在圆形区域$|z-z_0|\leq r$上解析，那么有：

$$
f(z_0)=\frac1{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})\mathrm{d}\theta
$$
也就是说，圆心处的函数值是圆周上函数值的算术平均。

### 4、模数定理

设复变函数$f(z)$在某个闭区域上为解析且不为常数，那么$|f(z)|$只能在区域的边界线$l$上取到极大值。

[^1]:参考文章[格林公式、高斯公式、斯托克斯公式](https://www.laoguantx.top/posts/greentheoremgausstheoremstokestheorem/)，应用格林公式