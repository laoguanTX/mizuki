---
title: 格林函数
published: 2025-12-16
category: ["数学", "数学物理方法"]
tags: ["偏微分方程", "数学物理方程"]
alias: "greensfunction"
---
## 一、泊松方程的格林函数法

### 1、格林函数

格林函数又称点源函数，代表一个点源在一定的边界条件和（或）初始条件下所产生的场，知道了点源的场就可以用叠加的方法求出任意源所产生的场。冲量定理是在时间域上进行叠加，这里把问题扩充到空间域上进行叠加。形式为：
$$
\begin{aligned}&\Delta u=f(\vec r ),\vec r \in T\\&\left[\alpha\frac{\partial u}{\partial n}+\beta u\right]_{\Sigma}=\varphi(\vec r )\\&f(\vec r )=\iiint_Tf(\vec r _0)\delta(\vec r -\vec r _0)dV_0
\end{aligned}
$$

### 2、格林公式

#### (1) 第一格林公式

设 $u(\vec{r})$ 和 $v(\vec{r})$ 在区域 $T$ 及其边界 $\Sigma$ 上具有连续一阶导数，而在 $T$ 中具有连续二阶导数，应用向量分析的高斯定理将曲面积分：
$$
\iint_{\Sigma} u \nabla v \cdot \mathrm{d} \vec{S}
$$

化成体积积分：

$$
\begin{align*}
\iint_{\Sigma} u \nabla v \cdot \mathrm{d} \mathbf{S}
&= \iiint_{T} \nabla \cdot (u \nabla v) \, \mathrm{d}V \\
&= \iiint_{T} \left[ u \Delta v + \nabla u \cdot \nabla v \right] \, \mathrm{d}V
\end{align*}
$$

这称为第一格林公式。即：

$$
\iint_{\Sigma} u \nabla v \cdot \mathrm{d} \mathbf{S} = \iiint_{T} u \Delta v \mathrm{d}V + \iiint_{T} \nabla u \cdot \nabla v \mathrm{d}V
$$

#### (2) 第二格林公式

根据第一类格林公式，我们还可以得出：
$$
\iint_{\Sigma} v \nabla u \cdot \mathrm{d} \mathbf{S} = \iiint_{T} v \Delta u \mathrm{d}V + \iiint_{T} \nabla v \cdot \nabla u \mathrm{d}V
$$
将两个格林公式相减，可以得到：

由高斯公式及格林第一公式可得：

$$
\iint_{\Sigma} (u \nabla v - v \nabla u) \cdot \mathrm{d} \vec{S} = \iiint_{T} (u \Delta v - v \Delta u) \mathrm{d}V
$$

亦即：

$$
\iint_{\Sigma} \left( u \frac{\partial v}{\partial n} - v \frac{\partial u}{\partial n} \right) \mathrm{d}S
= \iiint_{T} \left( u \Delta v - v \Delta u \right) \mathrm{d}V
$$

其中 $\frac{\partial}{\partial n}$ 表示沿边界 $\Sigma$ 的外法向求导数。该公式称为第二格林公式。

### 3、泊松方程的基本积分公式

泊松方程为：
$$
\Delta u=f(\vec{r})\quad(\vec{r}\in T)
$$
其边界条件可以统一表示为：
$$
\left[\alpha\frac{\partial u}{\partial n}+\beta u\right]=\varphi(M)
$$
为了研究点源产生的场，需要使用$\delta$函数描述一个单位正点量的密度分布函数，如果使用$v(\vec{r},\vec{r}_0)$表示位于$\vec{r}_0$点的单位强度正点源在$\vec r$产生的场（$v$是我们构造出的解），即满足：
$$
\Delta v(\vec r,\vec r_0)=\delta(\vec r-\vec r_0)
$$
现在利用格林函数导出泊松方程解的积分表达式，将$v$乘上泊松方程，$u$乘上上式，相减，利用第二格林公式，在区域$T$内求积分，得到：
$$
\iiint_T \left( v \Delta u - u \Delta v \right) \mathrm{d}V = \iiint_T v f \mathrm{d}V - \iiint_T u \delta(\vec{r} - \vec{r}_0) \mathrm{d}V
$$
但是$\vec r=\vec r _0$的位置是$v$的奇点，格林公式不适用，所以可以在奇点周围挖去一个半径为$\varepsilon$的小球$K_\varepsilon$，对于剩下的体积，格林公式成立。由于挖去小球后，$\delta(\vec r-\vec r_0)$恒为$0$，故：
$$
\iint_{\Sigma}\left(v\frac{\partial u}{\partial n}-u\frac{\partial v}{\partial n}\right)\mathrm{d}S+\iint_{\Sigma_{\varepsilon}}\left(v\frac{\partial u}{\partial n}-u\frac{\partial v}{\partial n}\right)\mathrm{d}S=\iiint_{T-K_{\varepsilon}}vf\mathrm{d}V
$$
根据物理上的高斯公式，当$\vec r$非常接近$\vec r_0$的时候，边界条件的影响远远小于$\vec r_0$处的影响，方程$\Delta v(\vec r,\vec r_0)=\delta(\vec r-\vec r_0)$的解可以看做是一个位于$\vec r_0$而电荷量为$-\varepsilon_0$的点电荷静电场的电势，即$v\approx -\frac{1}{4\pi|\vec r-\vec r_0|}$，令$\varepsilon\to 0$，右边的积分可以将$K_\varepsilon$补齐，该点的体积分值为$0$，那么右边可以直接写作：
$$
\iiint_{T}vf\mathrm{d}V
$$
左边的小球内的面积分近似写作（不严谨，但是对了，多了你别管）：
$$
\iint_{\Sigma_\varepsilon} v \frac{\partial u}{\partial n} \, \mathrm{d}S = \iint_{\Sigma_\varepsilon} \frac{\partial u}{\partial n} \left( -\frac{1}{4\pi} \frac{1}{\varepsilon} \right) \varepsilon^2 \mathrm{d}\Omega
= -\frac{\varepsilon}{4\pi} \iint_{\Sigma_\varepsilon} \frac{\partial u}{\partial n} \mathrm{d}\Omega
= -\varepsilon  \frac{\partial u}{\partial n} |_{\vec r  = \vec r _0} \to 0
$$

$$
\iint_{\Sigma_\varepsilon} u \frac{\partial v}{\partial n} \, \mathrm{d}S 
= -\iint_{\Sigma_\varepsilon} u \frac{\partial}{\partial } \left( -\frac{1}{4\pi} \frac{1}{r} \right) \mathrm{d}S
= -\frac{1}{4\pi} \iint_{\Sigma_\varepsilon} u \frac{1}{r^2} \cdot r^2 \mathrm{d}\Omega
= -u(\vec r _0)
$$

其中，$\Sigma_\varepsilon$ 表示以 $r_0$ 为中心、半径为 $\varepsilon$ 的球面，$\mathrm{d}\Omega$ 为球面上的立体角元素（单位球）。极限 $\varepsilon \to 0$ 时，$u$ 在 $r_0$ 处的值被“采样”出来。这样，$u(\vec{r}_0)$可以写为：
$$
u(\vec r _0) = \iiint_T v(\vec r , \vec r _0) f(\vec r ) \mathrm{d}V 
- \iint_{\Sigma} \left[ v(\vec r , \vec r _0) \frac{\partial u(\vec r )}{\partial n} 
- u(\vec r ) \frac{\partial v(\vec r , \vec r _0)}{\partial n} \right] \mathrm{d}S
$$
该式称为泊松方程的基本积分公式。

### 4、边界条件

泊松方程的基本积分公式将$u$用区域$T$上的体积分以及其边界上的面积分表示了出来，但是泊松方程的基本积分公式中，我们需要同时知道$u$以及$\frac{\partial u}{\partial n}$在边界$\Sigma$上的值，但是三种边界条件只能得到其一或者是两者的线性组合，还不能直接求出三类边值问题。但是，如果我们对$v$取提出适当的边界条件，即可解决问题。

#### (1) 第一类边值问题

对于第一边值问题，$u$ 在边界 $\Sigma$ 上的值是已知的函数 $\varphi(M)$。如果要求 $v$ 满足齐次的第一类边界条件
$$
v\Big|_{\Sigma} = 0
$$
则泊松方程的基本积分公式中含 $\dfrac{\partial u}{\partial n}$ 的一项等于零，从而不需要知道 $\dfrac{\partial u}{\partial n}$ 在边界上的值。

满足方程及边界条件的解称为泊松方程第一边值问题的格林函数，用 $G(\vec r , \vec r _0)$ 表示。这样，泊松方程的基本积分公式成为
$$
u(\vec r _0) = \iiint_T G(\vec r , \vec r _0) f(r) \mathrm{d}V + \iint_{\Sigma} \varphi(\vec r ) \frac{\partial G(\vec r , \vec r _0)}{\partial n} \mathrm{d}S
$$

#### (2) 第三边值问题

对于第三边值问题，令 $v$ 满足齐次的第三类边界条件：
$$
\left[\alpha \frac{\partial v}{\partial n} + \beta v\right]_{\Sigma} = 0
$$

满足方程及边界条件的解称为泊松方程第三类边值问题的格林函数，也用 $G(\vec r , \vec r _0)$ 表示。以 $G(\vec r , \vec r _0)$ 乘$u$的边界条件等式两边，得：
$$
\left[\alpha G \frac{\partial u}{\partial n} + \beta G u\right]_{\Sigma} = G\varphi
$$

又以 $u$ 乘 $v$ 的边界条件等式两边，并以 $G$ 代替其中的 $v$，得：
$$
\left[\alpha u \frac{\partial G}{\partial n} + \beta G u\right]_{\Sigma} = 0
$$

将这两式相减，得：
$$
\alpha \left[ G \frac{\partial u}{\partial n} - u \frac{\partial G}{\partial n} \right]_{\Sigma} = G\varphi
$$

将此式代入泊松方程的基本积分公式，得：
$$
u(\vec r _0) = \iiint_T G(\vec r , \vec r _0) f(\vec r ) \mathrm{d}V 
- \frac{1}{\alpha} \iint_{\Sigma} G(\vec r , \vec r _0) \varphi(\vec r ) \mathrm{d}S
$$

#### (3) 第二边值问题

第二边值问题不可以通过上述方法解决，假如说令$v$满足齐次第二类边界条件，在物理上，就表示在$\vec r_0$处有一个热源，格林函数看作是区域内的温度分布，但是边界绝热，没有热量散失，这样区域内部的温度就爆了，所以这种解法不能成功。解决这个问题要引入推广的格林函数，对于三维空间：
$$
\Delta G=\delta\left(x-x_0\right)\delta\left(y-y_0\right)\delta\left(z-z_0\right)-\frac{1}{V_T}
$$

$$
\frac{\partial G}{\partial n}|_{\Sigma}=0
$$

式子中的$V_T$是$V$的体积，对于二维空间：
$$
\Delta G=\delta\left(x-x_0\right)\delta\left(y-y_0\right)-\frac{1}{A_T}
$$

$$
\frac{\partial G}{\partial n}|_{\Sigma}=0
$$

式中$A_T$是$T$的面积。方程右边的项是均匀分布的热汇密度，这些热汇的总体恰好吸收了点热源释放的热量，不多也不少。将这个格林函数带回到泊松方程的基本积分公式即可：
$$
u(\vec r _0) = \iiint_T G(\vec r , \vec r _0) f(\vec r ) \mathrm{d}V 
- \iint_{\Sigma} G(\vec r , \vec r _0) \varphi(\vec r ) \mathrm{d}S
$$

### 5、格林函数的对称性

第一类和第三类边值问题的导出公式的物理解释存在一定的困难，公式左边$u$的宗量$\vec r _0$表明观测点在$\vec r _0$，但是右边积分中的$f(\vec r )$表示源在$\vec r$，格林函数又表示$\vec r _0$的点源在$\vec r$点产生的场，难以使用物理解释公式，但是可以利用格林函数的对称性（$G(\vec r _1,\vec r _2)=G(\vec r _2,\vec r _1)$）解决这个问题，这里不作证明。于是，将$\vec r$和$\vec r _0$对调后，得到了：
$$
u(\vec r ) = \iiint_T G(\vec r , \vec r _0) f(\vec r _0) \mathrm{d}V + \iint_{\Sigma} \varphi(\vec r _0) \frac{\partial G(\vec r , \vec r _0)}{\partial n} \mathrm{d}S
$$

$$
u(\vec r ) = \iiint_T G(\vec r , \vec r _0) f(\vec r _0) \mathrm{d}V 
- \iint_{\Sigma} G(\vec r , \vec r _0) \varphi(\vec r _0) \mathrm{d}S
$$

$$
u(\vec r ) = \iiint_T G(\vec r , \vec r _0) f(\vec r _0) \mathrm{d}V 
- \frac{1}{\alpha} \iint_{\Sigma} G(\vec r , \vec r _0) \varphi(\vec r _0) \mathrm{d}S
$$

上面三式即为第一、二、三边值问题解的积分表示式。

对于拉普拉斯方程，即$f(\vec r )=0$，那么只需要让上式右边第一项取$0$即可。

## 二、用电像法求格林函数

### 1、基本解

对于无限区域的边值问题，使用格林函数通常可以得到有限形式的格林函数，即基本解。一般边值问题的格林函数可以分解为两部分：
$$
G=G_0+G_1
$$
其中$G_0$为基本解，对于三维泊松方程：
$$
\Delta G_0=\delta(\vec r -\vec r _0)
$$
$G_1$满足相应的齐次方程（拉普拉斯方程）以及边界条件。基本解可以通过物理方法求解，例如在静电场，它描述的是位于点$r_0$，电荷量为$-\varepsilon_0$的点电荷在无界空间中所产生的电场在$r$点的电势，即$G_0=\frac{1}{4\pi|\vec r -\vec r _0|}$，当然还有另一种方法，利用球坐标系和第二格林公式能够解出。类似地可以得到二维泊松方程的基本解：
$$
G_0=-\frac{1}{2\pi}\ln \frac{C}{|\vec r -\vec r _0|}
$$

### 2、使用电像法求格林函数

考虑一个物理问题，设一接地导体球内的$M_0(\vec r _0)$点放置一带电荷量为$-\varepsilon_0$的点电荷，则球内电势满足泊松方程：
$$
\Delta G=\delta (\vec r -\vec r _0)
$$
边界条件为：
$$
G|_{边界}=0
$$
这里的$G$便是泊松方程第一边值问题的格林函数。根据电磁学，在接地导体球内放置电荷时，导体球面上将产生感应电荷，因此球内电势应该是球内电荷直接产生的电势与感应电荷所产生的电势之和，于是，$G$可以写成两部分叠加：
$$
G=G_0+G_1
$$
$G_0$是不考虑球面边界条件影响的电势，$G_1$是感应电荷引起的。由前面的讨论可知，$G_0$满足：
$$
\Delta G_0=\delta(\vec r -\vec r _0)
$$
$G_1$满足：
$$
\Delta G_1=0
$$
以及边界条件：
$$
G_1|_{球面}=(G-G_0)|_{球面}=-G_0|_{球面}
$$
这样，$G_0$就是基本解，$G_1$可以通过分离变量法求解，但是结果往往是无穷级数，下面使用电像法来求得有限形式的解。

电像法是用另一设想的等效点电荷来代替感应电荷。由于感应电荷在球内的场时无源的，所以等效电荷不在球内，根据对称性，等效电荷$M_1$在$OM_0$的延长线上，记等效电荷量为$q$，那么在空间中产生的电势是$G_1(\vec r ,\vec r _0)=-\frac{q}{4\pi\varepsilon_0|\vec r -\vec r _1|}$。

<img src="https://laoguantx.top/article/数学/数学物理方法/格林函数/image-20251224163725273.png" alt="image-20251224163725273" style="zoom:67%;" />

如图，$P$为球面上的一点，$OM_0=_0,OM_1=r_1$，球的半径为$a$，$\triangle OM_1P\simeq \triangle OM_0P$，若想要$P$点的电势为$0$，可以得到关系：
$$
\frac{1}{\left|\vec r-\vec r_0\right|}|_\text{球面上}{:}\frac{1}{\left|\vec r-\vec r_1\right|}|_\text{球面上}{=}\frac{1}{r_0}:\frac{1}{a}
$$
因此，取$q=\frac{\varepsilon_0 a}{r_0}$，则球面上的总电势为$0$。这个设想的$M_1$点的等效电荷叫做电像，这样球内一点的总电势：
$$
G(\vec r , \vec r _0) = -\frac{1}{4\pi} \frac{1}{|\vec r  - \vec r _0|} + \frac{a}{r _0} \frac{1}{4\pi} \frac{1}{\left| \vec r  - \frac{a^2}{\vec r _0^2} \vec r _0 \right|}
$$
同样地，若$M_0(\vec r _0)$为二维圆内的一点，则圆内的泊松方程第一边值问题的格林函数可以通过电像法求解为
$$
G(\vec r , \vec r _0) = -\frac{1}{2\pi} \ln |\vec r  - \vec r _0| 
+ \frac{1}{2\pi} \ln |\vec r  - \frac{a^2}{\vec r _0^2} \vec r _0| 
+ \frac{1}{2\pi} \ln \frac{a}{\vec r _0}
$$

## 三、含时间的格林函数

含时间的格林函数主要是解决波动问题和输运问题，例如一般的强迫振动问题：
$$
u_{tt}a^2\Delta u =f(\vec r,t)
$$
$$
\left(
    \alpha \frac{\partial u}{\partial n} + \beta u
\right) \Bigg|_{\,\Sigma} = \theta(M, t)
$$

$$
u\Big|_{t=0} = \varphi(\vec{r}), \qquad u_t\Big|_{t=0} = \psi(\vec{r})
$$

根据分离变量法中提到的冲量定理，可以将持续地作用力$f$看作是前后相继的脉冲力的叠加：
$$
f(\vec{r}, t) = \iiint_T \int_t f(\vec{r}_0, \tau)
\delta(\vec{r} - \vec{r}_0)
\delta(t - \tau)
\mathrm{d} V_0
\mathrm{d}\tau
$$
将单位脉冲点力所引起的振动记为$G(\vec r,t;,\vec r_0,t_0)$，称作波动问题的格林函数。求得了格林函数，可以使用叠加的方法求出任意力$f(\vec r,t)$引起的振动，$G$的定解问题为：

$$
G_{tt} - a^2 \Delta G = \delta(\vec r - \vec r_0)\,\delta(t - t_0)
$$
$$
\left( \alpha \frac{\partial G}{\partial n} + \beta G \right) \Bigg|_{\Sigma} = 0
$$
$$
G \Big|_{t=0} = 0, \quad G_t \Big|_{t=0} = 0
$$

该定解问题可以使用前面学过的冲量定理法，因为定解问题含有冲量特性。

含时格林函数的对称性比较特殊，在空间上可以互换位置，但是时间上有前后和因果关系：
$$
G(\vec r, t ; \vec r_0, t_0) = G(\vec r_0, -t_0 ; \vec r, -t)
$$
将定解问题中的$\vec r,t$替换为$\vec r_0,t_0$：

$$
u_{t_0 t_0}(\vec{r}_0, t_0) - a^2 \Delta_0 u(\vec{r}_0, t_0) = f(\vec{r}_0, t_0)
$$
$$
\left[
\alpha \frac{\partial u(\vec{r}_0, t_0)}{\partial n_0}
+ \beta u(\vec{r}_0, t_0)
\right] \Bigg|_{\Sigma_0}
= \theta(M_0, t_0)
$$
$$
u(\vec{r}_0, t_0)\Big|_{t_0=0} = \varphi(\vec{r}_0), \quad
u_{t_0}(\vec{r}_0, t_0)\Big|_{t_0=0} = \psi(\vec{r}_0)
$$

然后将格林函数中的$\vec r$和$\vec r_0$对调。$t,t_0$变换为$-t_0,-t$，利用对称关系，得到：
$$
G_{t t_0}(\vec{r}, t; \vec{r}_0, t_0) - a^2 \Delta_0 G(\vec{r}, t; \vec{r}_0, t_0) = \delta(\vec{r} - \vec{r}_0)\, \delta(t - t_0)
$$

将上式与替换后的波动方程相乘：
$$
u(\vec r,t)=
\iiint_{T_0} \int_{0}^{t+\varepsilon} 
    \left( G u_{t_0 t_0} - u G_{t_0 t_0} \right) \mathrm{d}V_0 \mathrm{d}t_0
    - a^2 \iiint_{T_0} \int_{0}^{t+\varepsilon}
    \left( G \Delta_0 u - u \Delta_0 G \right) \mathrm{d}V_0 \mathrm{d}t_0
$$
利用第二格林公式和初始条件，化简（$t<t_0$时，$G=0$）：
$$
u(\vec r,t)=\iiint_{T_0} \int_0^t G(\vec{r}, t; \vec{r}_0, t_0) f(\vec{r}_0, t_0) \, \mathrm{d}V_0 \mathrm{d}t_0 
+ a^2 \iiint_{\Sigma_0} \int_0^t \left( G \frac{\partial u}{\partial n_0} - u \frac{\partial G}{\partial n_0} \right) \mathrm{d}S_0 \mathrm{d}t_0 
+ \iiint_{T_0} \left[ G u_{t_0} - u G_{t_0} \right]_{t_0=0} \mathrm{d}V_0.
$$
对于输运问题：


$$
u_t - a^2 \Delta u = f(\vec{r}, t)
$$
$$
\left[
\alpha \frac{\partial u}{\partial n} + \beta u
\right] \Bigg|_{\Sigma} = \theta(M, t)
$$
$$
u \Big|_{t=0} = \varphi(\vec{r})
$$

使用类似的方法，格林函数满足的定解问题为：
$$
G_t - a^2 \Delta G = \delta(\vec{r} - \vec{r}_0)\, \delta(t - t_0)
$$
$$
\left(
\alpha \frac{\partial G}{\partial n} + \beta G
\right) \Bigg|_{\Sigma} = 0
$$
$$
G \Big|_{t=0} = 0
$$

解为：
$$
u(\vec{r}, t) = \iiint_{T_0} \int_0^t G(\vec{r}, t; \vec{r}_0, t_0) f(\vec{r}_0, t_0) \mathrm{d}V_0 \mathrm{d}t_0
+ a^2 \iiint_{\Sigma_0} \int_0^t \left[ G \frac{\partial u}{\partial n_0} - u \frac{\partial G}{\partial n_0} \right] \mathrm{d}S_0 \mathrm{d}t_0
+ \iiint_{T_0} (G u)_{t_0 = 0} \mathrm{d}V_0
$$
