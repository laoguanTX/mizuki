---
title: 数学物理定解问题
published: 2025-11-08
category: ["数学", "数学物理方法"]
tags: ["数学物理方程", "偏微分方程"]
alias: "initialboundaryvalueproblemsformathematicalphysics"
---
## 一、数学物理方程的导出

### 1、一维波动方程或者弦的微小横振动

#### (1) 物理问题

一固定长度的柔软、均匀细弦，两端拉紧（一般两端固定）。在垂直于弦线方向施加外加激励（可能在初始时刻施加，也可能是在运动过程中持续施加）让它离开原来平衡位置， 在此外加激励作用下弦将作微小的横向振动，需要找到弦上个每个点的运动方程。

#### (2) 问题简化

题目中提到的几处字眼：

- 柔软：只能承受轴向的载荷（弦只能承受张力，而杆能承受压力和拉力），忽略弯曲刚度（或者说弯矩）和剪切的影响，轴向载荷的方向与弦变形后的切线方向相一致。
- 轻质：不考虑重力所产生的影响。
- 均匀：单位长度的质量密度为一常数。
- 微小的横向振动：不考虑在张力作用下弦(（绳）的伸长变形（沿轴向的变形），只考虑弦（绳）上每个点的横向运动。弦（绳）的横向位移相对于弦（绳）的长度来说，是个小量。图中弦变形后的角度$\alpha$非常小，$\alpha\ll1$。

下面是问题简化后的研究示意图：

![image-20251029154644960](https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251029154644960.png)

图示比较夸张，以便于画图，实际角度很小。

#### (3) 分析的参数与变量

用$x$表示弦（绳）的位置，$u(x,t)$表示$t$时刻$x$位置处的横向位移。由于是微小的横向振动，故每个点只发生横向移动，忽略水平方向运动的影响。$\rho$表示单位长度的质量，$\mathrm{d}s$表示所分析微段的长度。

#### (4) 问题求解

微段水平方向（$x$轴）的平衡：

$$
T_2\cos\alpha_2-T_1\cos\alpha_1=0
$$

微段垂直方向（$u$轴）的平衡：

$$
T_2\sin\alpha_2-T_1\sin\alpha_1=(\rho \mathrm{d}s)u_n
$$

对于水平方向上的平衡方程，根据小变形假设：横向位移相对于弦（绳）的长度来说是小量，图中弦变形后的角度$\alpha$非常小。
$$
{\alpha_1} = 1,\cos{\alpha_1} \approx 1,{\alpha_2} = 1,\cos{\alpha_2} \approx 1
$$

从而：

$$
T_1 = T_2 = T
$$

不考虑轴向运动影响,那么弦内张力保持不变。

对于垂直方向上的平衡方程，根据小变形假设：横向位移相对于弦（绳）的长度来说是小量。
$$
\mathrm{d}s=\sqrt{\mathrm{d}x^2+\mathrm{d}u^2}=\sqrt{1+u_x^2}\mathrm{d}x\approx \mathrm{d}x
$$

$$
\sin\alpha_1\approx\alpha_1\approx\tan\alpha_1=u_x(x,t),\sin\alpha_2\approx\alpha_2\approx\tan\alpha_2=u_x(x+\mathrm{d}x,t)
$$

由于$T_1=T_2=T$，则：

$$
T(u_x|_{x+dx}-u_x|_{x})=\rho u_{tt}\mathrm{d}x
$$

$$
u_x|_{x+dx}=u_x|_{x}+u_{xx}|_{x}\mathrm{d}x+o(\mathrm{d}x)
$$

忽略高阶小量：

$$
Tu_{xx}\mathrm{d}x=\rho u_{tt}\mathrm{d}x
$$
即：
$$
Tu_{xx}=\rho u_{tt}
$$
设$a^2=\frac{T}{\rho}$，则：
$$
u_{tt}=a^2u_{xx}
$$
由此，得到了弦（绳）的自由振动方程。$a$的量纲为速度量纲，可以将$a$称为波速，即波传播的速度。

如果考虑有单位长度$F(x,t)$的外加横向力作用，即$f(x,t)=F(x,t)/\rho$，可以得到：

$$
T\left(u_{x}\mid_{x+dx}-u_{x}\mid_{x}\right)+F(x,t)\mathrm{d}x=\rho u_{n}\mathrm{d}x
$$
化简得出强迫振动方程：
$$
u_{n}-a^{2}u_{xx}=f(x,t)
$$

### 2、二维波动方程或者薄膜的微小横振动

#### (1) 物理问题

一张均匀张紧的轻质薄膜，离开水平位置沿垂直于水平位置的微小振动。

![image-20251029133319688](https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251029133319688.png)

#### (2) 分析的参数与变量

用$(x,y)$表示膜的位置，$u(x,y,t)$表示在$t$时刻在$(x,y)$位置处膜的横向位移。和弦问题一样， 根据水平方向的力平衡（任意方向），可知膜上的张力处处相同，记单位长度膜上的张力（注意是法线方向）为$T$。

#### (3) 问题求解

取平面上微小单元$\mathrm{d}x\mathrm{d}y$进行受力分析，沿$x$轴方向两对边上由张力引起的横向合力为：（泰勒展开并忽略高阶小量）
$$
\left(Tu_x|_{x+\mathrm{d}x}-Tu_x|_x\right)\mathrm{d}y=Tu_{xx}\mathrm{d}x\mathrm{d}y
$$
沿$y$轴方向两对边上由张力引起的横向合力为：（泰勒展开并忽略高阶小量）
$$
\left(Tu_y|_{y+\mathrm{d}y}-Tu_y|_y\right)\mathrm{d}x=Tu_{yy}\mathrm{d}x\mathrm{d}y
$$
使用$\rho$表示单位面积的质量，对微元体受力分析，应用牛顿第二定律，可以得到：
$$
Tu_{xx}\mathrm{d}x\mathrm{d}y+Tu_{yy}\mathrm{d}x\mathrm{d}y=\rho u_{tt}\mathrm{d}x\mathrm{d}y
$$
可以将上式改写为：
$$
\rho u_{tt}=T\Delta_2u
$$

> [!NOTE]
> 其中$\Delta_2$为二维拉普拉斯算符，也可以直接记作$\Delta$：
> $$
> \Delta_2=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}
> $$

### 3、均匀细长杆的纵向振动

#### (1) 物理问题

一根均匀的细长杆，寻找沿轴向的纵向位移所应该遵循的方程。

#### (2) 分析的参数与变量

![image-20251029134759095](https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251029134759095.png)

$x$表示某点的位置，$u(x,t)$表示$t$时刻$x$位置处的纵向位移。

#### (3) 问题简化

横截面变形后还是横截面，横截面形状保持不变。用位移的梯度$\varepsilon=\frac{\mathrm{d}u}{\mathrm{d}x}$（应变）来表征变形的程度。用单位横截面上的平均载荷来表征受力情况。

#### (4) 问题求解

$B$段左边的位移为$u(x,t)$，$B$段右边的位移为$u(x+\mathrm{d}x,t)$，所以$B$段的变形量为：

$$
u(x+\mathrm{d}x,t)-u(x,t)=u_x\mathrm{d}x
$$

根据胡克定律：
$$
\sigma(x)=\frac{N}{S(x)},\sigma(x)=E\varepsilon(x)
$$
其中$S$为杆的横截面积，$E$为材料的弹性模量（类同于弹簧的劲度系数），$N$为杆拉压中的内力。

$B$ 段左边由于变形受到$A$ 段对它的作用力为：$ESu_x(x,t)$；$B$段右边由于变形受到$C$段对它的作用力为：$ESu_x(x+\mathrm{d}x,t)$。这里$S$为杆的横截面积，$E$为材料的弹性模量。

根据牛顿第二定律及力的平衡关系：

$$
\rho S\mathrm{d}xu_{tt}=ES\left[u_x(x+\mathrm{d}x,t)-u_x(x,t)\right]=ESu_{xx}\mathrm{d}x
$$

得到：

$$
u_{tt}=a^2u_{xx}
$$

其中：

$$
a^2=E/\rho
$$

$a$具有速度量纲，也是波速。

### 4、扩散方程

#### (1) 物理问题

由于物体内部物质浓度的分布不匀，导致物质从浓度高的区域向浓度低的区域转移（我们称这种现象为扩散）。分析物体扩散所需要满足的方程。

扩散问题遵循菲克第一定律：通过单位面积例子数率（通常称为粒子流通量）与粒子浓度的梯度成正比，方向与梯度方向相反，其比例系数称为扩散系数。并遵循质量守恒定律。

#### (2) 分析的参数与变量

取空间中任意一个微元体（一般是一个平行六面体），根据扩散定律（菲克第一定律）和质量守恒定律，来分析浓度的变化过程。

<img src="https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251029145125733.png" alt="image-20251029145125733" style="zoom:50%;" />

用$(x,y,z)$表示位置，$t$表示时间，$u(x,y,z,t)$表示$(x,y,z)$位置在$t$时刻的浓度，那么，在某一个位置处，浓度的扩散流强度$q$为：
$$
q=-D\nabla u=-D(\frac{\partial u}{\partial x},\frac{\partial u}{\partial y},\frac{\partial u}{\partial z})
$$
比例系数$D$即为扩散系数，与物质的性态、温度等有关。

#### (3) 问题求解

单位时间内，沿$x$轴左边面上的流入量$q_1|_x=\mathrm{d}y\mathrm{d}z$，沿$x$轴右边面上的流出量$q_1|_{x+\mathrm{d}x}\mathrm{d}y\mathrm{d}z$，所以沿着$x$轴方向的净流入量为：
$$
q_1|_x\mathrm{d}y\mathrm{d}z-q_1|_{x+\mathrm{d}x}\mathrm{d}y\mathrm{d}z=-\frac{\partial q_1}{\partial x}\mathrm{d}x\mathrm{d}y\mathrm{d}z
$$
同理获得沿着其他轴方向的净流入量，获得总的流入量：
$$
-\frac{\partial q_1}{\partial x}\mathrm{d}x\mathrm{d}y\mathrm{d}z-\frac{\partial q_2}{\partial y}\mathrm{d}x\mathrm{d}y\mathrm{d}z-\frac{\partial q_3}{\partial z}\mathrm{d}x\mathrm{d}y\mathrm{d}z
$$
进一步化简得到：
$$
\left[\frac{\partial}{\partial x}\left(D\frac{\partial u}{\partial x}\right)+\frac{\partial}{\partial y}\left(D\frac{\partial u}{\partial y}\right)+\frac{\partial}{\partial z}\left(D\frac{\partial u}{\partial z}\right)\right]\mathrm{d}x\mathrm{d}y\mathrm{d}z
$$
根据质量守恒定律，在没有源（产生物质）或者汇（吸收物质）的条件下，该区域内物质总量的变化量等于流入的物质总量。即：
$$
\frac{\partial u}{\partial t}\mathrm{d}x\mathrm{d}y\mathrm{d}x=\left[\frac{\partial}{\partial x}\left(D\frac{\partial u}{\partial x}\right)+\frac{\partial}{\partial y}\left(D\frac{\partial u}{\partial y}\right)+\frac{\partial}{\partial z}\left(D\frac{\partial u}{\partial z}\right)\right]\mathrm{d}x\mathrm{d}y\mathrm{d}z
$$
如果扩散系数在空间中是一致的，那么三维的扩散方程为：
$$
u_t=a^2\Delta_3u
$$
其中$a^2=D$。

> [!NOTE]
> 
> 其中$\Delta_3$为三维拉普拉斯算符：
>
> $$
> \Delta_2=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}+\frac{\partial^2}{\partial z^2}
> $$

退化到一维问题（也就是只有沿一个方向的扩散），那么扩散方程为：
$$
u_t=a^2u_{xx}
$$
对于有源或者有汇的扩散问题，那么相应的扩散方程为：
$$
u_t-a^2\Delta_3u=F(x,y,z,t,u)
$$

### 5、热传导方程

#### (1) 物理问题

由于物体内部温度分布的不匀，导致热量从温度高的区域向温度低的区域转移（我们称这种现象为热传导）。分析热传导所需要满足的方程。

热传导问题遵循热传导定律（又称为傅里叶定律）：在导热过程中，单位时间内通过给定截面的导热量，正比于垂直于该截面方向上的温度变化率和截面面积；热量传递的方向与温度升高的方向相反（和扩散问题的菲克第一定律类似）。并遵循能量守恒定律。

#### (2) 分析的参数与变量

与扩散问题的分析方法相同。取任意的一个微元体（一般为一个平行六面体），根据热传导定律来分析流经六面体上六个面单位时间的热能，再根据能（热）量守恒定律：通过边界进入微元体的中热量导致微元体内部的温度变化，从而得到相应的温度变化规律。

<img src="https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251029145125733.png" alt="image-20251029145125733" style="zoom:50%;" />

用$u(x,y,z,t)$表示$t$时刻在$(x,y,z)$处的温度，并利用热传导定律：
$$
q=-k\nabla u
$$
其中$q$成为热流强度，即单位时间通过单位横截面积的热量，反应了热传导能力的强弱，$k$称为热传导系数，或者说是热传导率。

#### (3) 问题求解

仿照扩散问题的推导过程，应用热传导定律和能（热）量守恒定律，对于没有热源（汇）的一维和三维问题，相应的热传导方程分别为：
$$
c\rho u_t=\frac{\partial}{\partial x}(ku_x)
$$

$$
c\rho u_t=\left[\frac{\partial}{\partial x}\left(ku_x\right)+\frac{\partial}{\partial y}\left(ku_y\right)+\frac{\partial}{\partial z}\left(ku_z\right)\right]
$$

其中$c$为比热容，$\rho$为物体的质量密度。

化为标准形式为：
$$
u_t=a^2u_{xx}
$$

$$
u_t=a^2\nabla_3u
$$

其中$a=\frac{k}{c\rho}$。

### 6、静电场方程

#### (1) 物理问题

在电荷周围存在电场。电荷和电荷之间有力的作用，这个作用依靠电场来进行传递。由静电荷所产生的电场，我们称之为静电场。这里研究静电场满足的方程。

#### (2) 分析的参数与变量

静电场遵循的物理规律是高斯定理：
$$
\oint_\sum E\cdot\mathrm{d}S=\frac1{\varepsilon_0}\int_T \rho\mathrm{d}V
$$
表示的是闭合曲面$\sum$包裹的空间$T$中电荷量和通过闭合曲面电通量之间的关系。其中$\rho$表示单位体积的电荷量，$\varepsilon_0$为真空介电常数。

#### (3) 问题求解

数学上学过高斯公式：
$$
\oint_\sum E\cdot \mathrm{d}S=\int_T\nabla\cdot E\mathrm{d} V
$$
两个公式联立得到：
$$
\int_T\nabla\cdot E\mathrm{d} V=\frac1{\varepsilon_0}\int_T \rho\mathrm{d}V
$$
由于区域$T$是任意选择的，所以被积函数是相等的：
$$
\nabla\cdot E=\frac{\rho}{\varepsilon_0}
$$
由于电场是无旋场（电力线不相交，电场中任意一点的电场强度不可能有两个方向），$\nabla\times T=\boldsymbol{0}$，因此存在一个势函数，使得：
$$
E=-\nabla V
$$
结合被积函数的相等关系，得到：
$$
-\nabla\cdot\nabla V=-\Delta V=\frac{\rho}{\varepsilon_0}
$$
最终得到静电场的势函数满足泊松方程：
$$
\Delta V=-\frac{\rho}{\varepsilon_0}
$$
那么在无源静电场的势函数满足拉普拉斯方程：
$$
\Delta V=0
$$

### 7、稳态问题：稳定的浓度分布和稳定的温度分布

在扩散问题中，如果扩散源强度不随时间变化，$F=F(x,y,z)$ ,那么当扩散时间足够长后，空间中各点的浓度将不再随时间发生变化，趋于一个稳定状态。

- 有源：

$$
D\Delta u=-F(x,y,z)
$$

- 无源

$$
\Delta u=0
$$

在热传导问题中，如果热源强度不随时间变化，$F=F(x,y,z)$，那么当热传导时间足够长后，空间中各点的温度将不再随时间发生变化，趋于一个稳定状态。

- 有源

$$
k\Delta u=-F(x,y,z)
$$

- 无源

$$
\Delta u=0
$$

### 8、声学方程

不学。

## 二、定解条件

对于常微分方程，我们必须给定合适的边界条件，才能求得相应的解。前面推导得到的各种偏微分方程也是一样，它们只反映了这些物理问题的共性（所要遵循的物理规律）。 对于具体的问题，必须要给定合适的定解条件，才能得到一个确定的结果，使得问题的解是存在而且唯一的。

### 1、初始条件

反映了系统初始时刻状态对结果的影响，必须给出整个分析区域上而不是个别点上的分布情况。

- 对于运输过程（扩散、热传导）方程中只出现时间$t$的一阶微分，只需要初始状态条件。
- 对于振动过程（弦、膜、杆振动，声振动和声波，电磁波等波动方程），由于方程中出现了时间$t$的二阶微分， 因此需要给定两种初始条件：初始的状态+初始的“速度”。
- 对于稳态问题，由于初始状态不影响最终的稳态分布规律，因此无需给出初始条件。

### 2、边界条件

一般情况下，我们所研究的对象不是孤立，而是处在一个环境之中。周围环境通过系统的边界对区域内的状态产生影响，这种影响需要用边界条件进行描述。

#### (1) 第一类（狄利克雷条件）

第一类条件为给定了边界上物理量所要满足的条件。

1. 细杆导热问题：比如端点$x=a$的温度$u(x=a,t)$按已知函数$f(t)$发生变化。
2. 细杆振动问题：比如端点$x=a$固定，$u(x=a,t)=0$。
3. 弦的振动问题：比如端点$a=a,x=b$同时固定，$u(x=a,t)=u(x=b,t)=0$。

#### (2) 第二类（纽曼条件）

第二类条件为给定物理量沿边界上外法线方向（$\vec{n}$）的导数（边界的梯度）所要满足的条件。

1. 细杆纵向振动问题：

      ![image-20251031102259897](https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251031102259897.png)

      如果在右端部$x=b$有一个沿着轴向的外力$f(t)$该外力作用在边界上，那么在右边界取一个非常小的微段，根据受力，由于$\mathrm{d}m$很小，所以惯性力可以忽略，即：
      $$
      ES\frac{\partial u}{\partial x}\big|_{x=b}=f(t)=ES\frac{\partial u}{\partial \vec{n}}
      $$
      同样地，在左端侧进行同样的处理：
      $$
      -ES\frac{\partial u}{\partial x}=f(t)=ES\frac{\partial u}{\partial \vec{n}}
      $$
      这里外力$f(t)$指向$x$轴正方向。合起来：
      $$
      ES\frac{\partial u}{\partial \vec{n}}=f(t)
      $$
      如果边界自由：
      $$
      ES\frac{\partial u}{\partial \vec{n}}=0
      $$

2. 热传导问题：

      根据傅里叶定理，在任意位置的热流强度为：
      $$
      q=-k\nabla u
      $$
      所以沿着边界外法线方向的热流强度为：
      $$
      q_n=n\cdot q=-\vec{n}\cdot k\nabla u=-k\frac{\partial u}{\partial \vec{n}}
      $$
      边界上沿外法线的热流强度$q_n$大于零，说明热量是从物体内部向外部传递。反之亦然。如果在边界上给定了沿外法线方向的热流强度$f(t)$，那么根据傅里叶定律得到的热流强度在边界上应该等于给定的热流强度（$f(t)$只是 一个数值）：
      $$
      q_n=f(t)
      $$

#### 第三类（混合边界条件，罗宾边界条件）

第三类条件为给定边界上物理量与物理量沿外法线方向的方向导数之间所应该满足的关系。

   1. 细长杆的纵向振动问题：

      ![image-20251031104126296](https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251031104126296.png)
      在右边端点$x=b$有一个固定的弹簧支撑，右边端点附近去一个微段，忽略惯性力，根据胡克定律可以得到：
      $$
      \left(ES\frac{\partial u}{\partial \vec{n}}+Ku\right)\big|_{x=b}=0,\left(ES\frac{\partial u}{\partial x}+Ku\right)\big|_{x=b}=0
      $$
      在左边端点$x=a$有：
      $$
      \left(ES\frac{\partial u}{\partial \vec{n}}+Ku\right)\big|_{x=a}=0,\left(ES\frac{\partial u}{\partial x}-Ku\right)\big|_{x=a}=0
      $$

   2. 细杆自由冷却问题：

      端部放在一个确定温度的环境中自由冷却，端部与环境之间由于存在温差有热对流，此时既不能立即确定温度，也不能立即确定温度的梯度。根据牛顿冷却定理：
      $$
      \frac{\mathrm{d}T}{\mathrm{d}t}=h(T_e-T)
      $$
      其中$h$为热交换系数，$T_e$为环境温度。

      根据热能守恒定律，边界上的热传导引起的热量变化量应该等于热交换引起的热量变化量。
      
      ![image-20251031111747862](https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251031111747862.png)
      
      如果左端部$x=a$放置在温度$\theta$的环境中自由冷却，环境的热交换系数为$h$。
      $$
      q_n=-k\frac{\partial u}{\partial \vec{n}}|_{x=a}=h\left(u|_{x=a}-\theta\right)
      $$
      
      $$
      -k\frac{\partial u}{\partial x}|_{x=a}=h\left(\theta-u|_{x=a}\right)
      $$
      
      $$
      \frac{\partial u}{\partial x}|_{x=a}=-\frac{\partial u}{\partial \vec{n}}|_{x=a}
      $$
      
      如果右端部$x=b$放置在温度$\theta$的环境中自由冷却，环境的热交换系数为$h$。
      $$
      q_n=-k\frac{\partial u}{\partial \vec{n}}|_{x=b}=h\left(u|_{x=b}-\theta\right)
      $$
      
      $$
      -k\frac{\partial u}{\partial x}|_{x=b}=h\left(u|_{x=b}-\theta\right)
      $$
      
      $$
      \frac{\partial u}{\partial x}|_{x=b}=\frac{\partial u}{\partial \vec{n}}|_{x=b}
      $$
      
      对于一般表面的自由冷却问题：
      $$
      q_n=-k\frac{\partial u}{\partial \vec{n}}|_{x=a}=h(u-\theta)
      $$

### 3、衔接（连续）条件

对于有些问题，我们所要分析的物理量在区域内某个位置可能有间断（比如有侧向集中载荷作用于振动弦的中间），或者所研究对象的物理属性发生间断（如细长杆是由两种不同截面的杆连接而成、热传导细杆中不同区域的热传导系数不同等等），此时我们无法用一个在整个区域内连续（或者光滑）的函数来表示所要研究的物理量，必须用两个或者更多的函数来分别表示不同区域的解（或者是用分段的连续函数来表示），这些函数在交界处需要满足与物理现象相对应的连续条件（值连续、导数连续等等）， 这样的连续条件我们称之为衔接条件。

1. 弦的侧向受力

      <img src="https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251031112546143.png" alt="image-20251031112546143" style="zoom:50%;" />

      如图，弦在$x=x_0$处收到一个侧向集中载荷的作用，用$u_L$和$u_R$来表示左右边的解，则位移连续条件为：
      $$
      u_L(x_0^-,t)=u_R(x_o^+,t)
      $$
      力的连续条件（横向）：
      $$
      Tu_{Rx}(x_0^+,t)+Tu_{Lx}(x_0^-,t)-F(t)=0
      $$

2. 两细长杆的连接

      ![image-20251031113022647](https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251031113022647.png)

      如图所示，细长杆由两部分连接而成，材料的参数相同，左边的横截面积为$S_1$，右边的横截面积为$S_2$，如果记左边的纵向位移为$u_1$，右边的纵向位移为$u_2$，那么这两个位移在交界处需要满足的位移连续条件为：
      $$
      u_1(x_0^-,t)=u_2(x_0^+,t)
      $$
      同时，它们还需要满足力的连续条件：

      ![image-20251031113210414](https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251031113210414.png)
      $$
      S_1\frac{\partial u_1}{\partial x}(x_0^-,t){=}S_2\frac{\partial u_2}{\partial x}(x_0^+,t)
      $$

3. 两材料之间的热传导

      ![image-20251031113325016](https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251031113325016.png)

      如图所示，细长杆由两部分连接而成，材料的两边的热传导系数不同，那么两边需要用不同的温度函数来表示。这两个温度函数位移在交界处需要满足的温度的连续条件为：
      $$
      T_A(x_0^-,t)=T_B(x_0^+,t)
      $$
      同时，它们还需要满足在交界面上热流强度的连续条件：
      $$
      -k_A\frac{\partial T_A}{\partial x}(x_0^-,t)=-k_B\frac{\partial T_B}{\partial x}(x_0^+,t)
      $$

### 4、自然边界条件

当区域无限时，按照问题的实际意义，常要求无限远的值趋向于零；或者是在实际问题中的零位置上物理量存在并有意义，于是将结果中对应幂次项的系数设为零。这一类理论与实际结合的条件称为自然边界条件。

## 三、数学物理方程的分类

### 1、线性二阶偏微分方程

#### (1) 相关定义与性质

$$
\sum_{j=1}^n\sum_{i=1}^na_{ij}u_{x_ix_j}+\sum_{i=1}^nb_iu_{x_i}+cu+f=0
$$

如果系数 $a_ij,b_i,c$及$f$与$u$无关，只是$x_1,x_2,...,x_n$的函数或者是常数，那么该方程对于$u$及其各阶导数来说是线性的，因此微分方程也是线性的。

记微分算子$L$：

$$
Lu= \sum _{i= 1}^n\sum _{i= 1}^na_{ij}u_{x_i, x_j}+ \sum _{i= 1}^nb_iu_{x_i}+ cu\Rightarrow Lu= f
$$

$L$是线性，可以得到：

$$
L( u+ v ) = Lu+ Lv, L( \alpha u) = \alpha L( u) , \forall u, v , \alpha \in C
$$
线性二阶偏微分方程中，如果自由项$f\equiv0$，称方程为齐次的，否则称为非齐次的。

#### (2) 定解条件

对于齐次方程：
$$
u=0,\frac{\partial u}{\partial \vec{n}}=0,S\frac{\partial u}{\partial \vec{n}}+ku=0
$$
对于非齐次方程：
$$
u=a,\frac{\partial u}{\partial \vec{n}}=f,S\frac{\partial u}{\partial \vec{n}}+ku=f(t)
$$

#### (3) 叠加原理

若泛定方程和定解条件都是线性的（可以是非齐次），可以把泛定方程和定解条件分别拆成多个线性方程的合理叠加。只要各部分的解分别满足各自的泛定方程和定解条件，那么叠加后的函数可以满足原来的方程和定解条件。也就是说原来问题的解可以看成各部分解的线性叠加。利用叠加原理可以将复杂方程的解拆分成几个比较简单问题的解。

在物理上，可以理解为：几种不同原因综合所产生的效果，等于这些不同原因单独产生效果的累加。

### 2、两个自变量方程的分类

$$
a_{11}u_{xx}+2a_{12}u_{xy}+a_{22}u_{yy}+b_1u_x+b_2u_y+cu+f=0
$$

其中系数均为实数。

引入两个新的自变量，进行坐标变换：
$$
\begin{cases}x=x(\xi,\eta)\\y=y(\xi,\eta)&\end{cases}\begin{cases}\xi=\xi(x,y)\\\eta=\eta(x,y)&\end{cases}
$$
这里要求坐标变换的雅可比矩阵非奇异，即可逆，保证变换是可逆的：
$$
|J|=\frac{\partial(\xi,\eta)}{\partial(x,y)}\neq 0
$$
利用变换后的坐标，求出原方程的偏导数：
$$
u_x=u_\xi\xi_x+u_\eta\eta_x
$$

$$
u_y=u_\xi\xi_y+u_\eta\eta_y
$$

$$
u_{xx}=u_{\xi\xi}\xi_x^2+2u_{\xi\eta}\xi_x\eta_x+u_{\eta\eta}\eta_x^2+u_\xi\xi_{xx}+u_\eta\eta_{xx}
$$

$$
u_{xy}=u_{\xi\xi}\xi_x\xi_y+u_{\xi\eta}\left(\xi_x\eta_y+\xi_y\eta_x\right)+u_{\eta\eta}\eta_x\eta_y+u_\xi\xi_{xy}+u_\eta\eta_{xy}
$$

$$
u_{yy}=u_{\xi\xi}\xi_y^2+2u_{\xi\eta}\xi_y\eta_y+u_{\eta\eta}\eta_y^2+u_\xi\xi_{yy}+u_\eta\eta_{yy}
$$

带回到原来的偏微分方程中，使用新自变量表示偏微分方程：
$$
A_{11}u_{\xi\xi}+2A_{12}u_{\xi\eta}+A_{22}u_{\eta\eta}+B_1u_\xi+B_2u_\eta+Cu+F=0
$$
其中的系数为：
$$
A_{11}=a_{11}\xi_{x}^{2}+2a_{12}\xi_{x}\xi_{y}+a_{22}\xi_{y}^{2}
$$

$$
A_{12}=a_{11}\xi_{x}\eta_{x}+a_{12}\left(\xi_{x}\eta_{y}+\xi_{y}\eta_{x}\right)+a_{22}\xi_{y}\eta_{y}
$$

$$
A_{22}=a_{11}\eta_{x}^{2}+2a_{12}\eta_{x}\eta_{y}+a_{22}\eta_{y}^{2}
$$

$$
B_1=a_{11}\xi_{xx}+2a_{12}\xi_{xy}+a_{22}\xi_{yy}+b_1\xi_x+b_2\xi_y
$$

$$
B_2=a_{11}\eta_{xx}+2a_{12}\eta_{xy}+a_{22}\eta_{yy}+b_1\eta_x+b_2\eta_y
$$

$$
C=c\quad F=f
$$

其中$A_{11}$与$A_{22}$的形式非常类似，尝试寻找条件，使$A_{11}=0,A_{22}=0$。即寻找新坐标$z(x,y)=C$，满足：
$$
a_{11}z_x^2+2a_{12}z_xz_y+a_{22}z_y^2=0
$$
变形得到：
$$
a_{11}\left(-\frac{z_x}{z_y}\right)^2-2a_{12}\left(-\frac{z_x}{z_y}\right)+a_{22}=0
$$
对$z(x,y)=C$的两边微分：
$$
\mathrm{d}z=z_x\mathrm{d}x+z_y\mathrm{d}y=0
$$
变形得到：
$$
\frac{\mathrm{d}y}{\mathrm{d}z}=-\frac{z_x}{z_y}
$$
回代，得到原来偏微分方程的特征方程：
$$
a_{11}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)^2-2a_{12}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)+a_{22}=0
$$
若$a_{11}=0$，直接移项求解，若不为零，求解得到：
$$
\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{a_{12}\pm\sqrt{a_{12}^2-a_{11}a_{22}}}{a_{11}}
$$
对应的解$\xi(x,y)=C$或者$\eta(x,y)=C$为特征线。记$\Delta=a_{12}^2-a_{11}a_{22}$，进行如下分类，这些分类代表着偏微分方程的特征方程的几何形状（联系解析几何）：

- 当$\Delta>0$时，有两个实函数解，这种类型称为双曲型，波动方程为其代表。
- 当$\Delta=0$时，有一个实函数解，这种类型称为抛物型，扩散方程为其代表。
- 当$\Delta<0$时，有两个共轭复函数解，这种类型称为椭圆型，拉普拉斯方程为其代表。

同时注意到：
$$
A_{12}^2-A_{11}A_{22}=\left(a_{12}^2-a_{11}a_{22}\right)\left(\xi_x\eta_y-\xi_y\eta_x\right)^2
$$
自变量替换之后，方程的属性保持不变。

#### (1) 双曲型方程

特征方程有两组不同的解，用与之对应的两个$z$的解作为变换函数，可以将$A_{11}$与$A_{22}$变为$0$；根据上文推导，知：
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{a_{12} \pm \sqrt{a_{12}^2 - a_{11} a_{22}}}{a_{11}}
$$

所以$z(x, y)$ 为：

$$
z(x, y) = a_{11} y - \left( a_{12} \pm \sqrt{a_{12}^2 - a_{11} a_{22}} \right) x = C
$$

于是得到了最开始的变量代换方法：

$$
\xi, \eta = a_{11} y - \left( a_{12} \pm \sqrt{a_{12}^2 - a_{11} a_{22}} \right) x
$$

再作自变量变换：

$$
\alpha = \frac{1}{2} (\xi + \eta), \qquad \beta = \frac{1}{2} (\xi - \eta)
$$

从而得到用自变量 $\alpha$ 与 $\beta$ 所表示的双曲型方程标准形式：

$$
u_{\alpha \alpha} - u_{\beta \beta} = \frac{1}{A_{12}} \left[ (B_1 + B_2)u_{\alpha} + (B_1 - B_2)u_{\beta} + 2Cu + 2F \right]
$$

前面的各种波动（或振动）方程就属于双曲型方程。

#### (2) 抛物型方程

由于$\Delta =0$，所以
$$
\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{a_{12}}{a_{11}}
$$

对应的特征变量变换为：

$$
z(x, y) = a_{11} y - a_{12} x = C
$$

只取一组特征变量，令：

$$
\xi = a_{11} y - a_{12} x
$$

两边分别对 $x$ 和 $y$ 求偏导，得到：

$$
\frac{\xi_x}{\xi_y} = -\frac{\mathrm{d}y}{\mathrm{d}x} = -\frac{a_{12}}{a_{11}}
$$

把 $\xi$ 代入 $A_{11}$、$A_{12}$的表达式：
$$
A_{11} = a_{11} \xi_x^2 + 2 a_{12} \xi_x \xi_y + a_{22} \xi_y^2 = 0
$$

$$
A_{12} = a_{11} \xi_x \eta_x + a_{12} (\xi_x \eta_y + \xi_y \eta_x) + a_{22} \xi_y \eta_y
$$

由于 $\frac{\xi_x}{\xi_y} = -\frac{a_{12}}{a_{11}}$，故有：

$$
A_{12} = \frac{\xi_y \eta_y}{a_{11}} [a_{12}^2 - a_{11} a_{22}] = 0
$$

把 $\xi$ 代入$A_{22}$ 的表达式
$$
A_{22} = \eta_y^2 \left[ a_{11} \left( \frac{\eta_x}{\eta_y} \right)^2 + 2 a_{12} \frac{\eta_x}{\eta_y} + a_{22} \right]
$$

即：

$$
A_{22} = \eta_y^2 \left( \sqrt{a_{11}} \frac{\eta_x}{\eta_y} \pm \sqrt{a_{22}} \right)^2
$$

只要选择合适的 $\eta$，使得

$$
\frac{\eta_x}{\eta_y} \neq \frac{a_{22}}{a_{11}}
$$

即可保证 $A_{22} \neq 0$。从而得到新坐标下的控制方程，即抛物方程的标准形式：

$$
u_{\eta \eta} = -\frac{1}{A_{22}} \left(B_1 u_{\xi} + B_2 u_{\eta} + C u + F \right)
$$

 前面的扩散方程、热传导方程等都属于抛物方程。

#### (3) 椭圆方程

特征方程只有一组共轭复函数解 $\xi(x, y)$ 及 $\xi^*(x, y)$。由于 $A_{11} = 0,\quad A_{22} = 0$，此时方程为：

$$
u_{\xi \eta} = -\frac{1}{2A_{12}} \left( B_1 u_{\xi} + B_2 u_{\eta} + C u + F \right)
$$

我们取 $\alpha$ 和 $\beta$ 分别为 $\xi(x, y)$ 函数的实部和虚部，即：

$$
\alpha = \mathrm{Re}(\xi), \qquad \beta = \mathrm{Im}(\xi)
$$

那么，方程变为：

$$
u_{\alpha \alpha} + u_{\beta \beta} = -\frac{1}{A_{12}} \left[ (B_1 + B_2) u_{\alpha} + i (B_2 - B_1) u_{\beta} + 2Cu + 2F \right]
$$

这是椭圆方程的标准形式。前面的稳定浓度分布、稳定扩散分布及静电场势函数等都属于椭圆方程。

## 四、定解问题

### 1、行波法

对于均匀弦的横向振动或者是均匀杆的纵向振动，存在：
$$
\frac{\partial^2u}{\partial t^2}-a^2\frac{\partial^2u}{\partial x^2}=0
$$
平方差公式进行因式分解：
$$
\left(\frac{\partial}{\partial t}+a\frac{\partial}{\partial x}\right)\left(\frac{\partial}{\partial t}-a\frac{\partial}{\partial x}\right)u=0
$$
引入新的坐标：
$$
X=x+at,Y=x-at
$$
代入到控制方程中，得到在新坐标系下的控制方程：
$$
\frac{\partial^2u}{\partial X\partial Y}=0
$$
显然，该方程的通解为：
$$
u=f_1(X)+f_2(Y)=f_(x+at)+f_2(x-at)
$$
这个解可以看成是两个函数$f_1(X),f_2(Y)$的叠加：

<img src="https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251031122050064.png" alt="image-20251031122050064" style="zoom:50%;" />

- 对于$f_1(X)$：站在移动的坐标系 $X=x+at$（$x=X-at$，该坐标系以恒定的速度$\alpha$向坐标轴的负方向移动）上来看，解的形式始终不变（位置和形状与$t$无关）。
- 对于$f_2(X)$：站在移动的坐标系 $Y=x-at$（$x=Y+at$，该坐标系以恒定的速度$a$向坐标轴的正方向移动）上来看，解的形式始终不变（位置和形状与$t$无关）。

这种解法称为行波法。

### 2、达朗贝尔公式及其应用

#### (1) 考虑无限长弦的波动问题

对于足够长的弦，在有限时间内，远处的边界条件不会对结果有影响。 对于足够长的弦，我们可以把它近似为一个无限长的弦问题（没有边界条件）。
$$
\frac{\partial^2u}{\partial t^2}-a^2\frac{\partial^2u}{\partial x^2}=0\quad(-\infty < x < \infty)
$$

初始条件分别为位移的初始条件和速度的初始条件：

$$
u|_{t=0}=\varphi(x),u_t|_{t=0}=\psi(x) \quad (-\infty < x < \infty)
$$

把两个初始条件代入通解表达式：
$$
u=f_1(X)+f_2(Y)=f_1(x+at)+f_2(x-at)
$$

分别可以得到：

$$
f_1(x)+f_2(x)=\varphi(x) \quad \quad af_1'(x)-af_2'(x)=\psi(x)
$$
对第二个方程的两边积分
$$
f_1(x)-f_2(x)=\frac{1}{a}\int_{x_0}^x\psi(\xi)\mathrm{d}\xi+f_1(x_0)-f_2(x_0)
$$
联立第一个初始条件方程，得到：
$$
\begin{cases}
f_{1}(x)=\frac{1}{2}\varphi(x)+\frac{1}{2a}\int_{x_{0}}^{x}\psi(\xi)\mathrm{d}\xi+\frac{1}{2}\left[f_{1}\left(x_{0}\right)-f_{2}\left(x_{0}\right)\right]\\f_{2}(x)=\frac{1}{2}\varphi(x)-\frac{1}{2a}\int_{x_{0}}^{x}\psi(\xi)\mathrm{d}\xi-\frac{1}{2}\left[f_{1}\left(x_{0}\right)-f_{2}\left(x_{0}\right)\right]
\end{cases}
$$
带入通解表达式，得到达朗贝尔公式：
$$
u(x,t)=\frac{1}{2}[\varphi(x+at)+\varphi(x-at)]+\frac{1}{2a}\int_{x-at}^{x+at}\psi(\xi)\mathrm{d}\xi
$$
其中包含两项：第一项表示初始形状带来的影响，后一项积分项表示初始速度带来的影响。下面将讨论该问题的两种特殊情况

1. 如果无限长弦初始是静止的，即初始条件为：
   $$
   u|_{t=0}=\varphi(x),u_t|_{t=0}=0\quad (-\infty < x < \infty)
   $$
   根据达朗贝尔公式，得到相应的解为：
   $$
   u(x,t)=\frac{1}{2}[\varphi(x+at)+\varphi(x-at)]
   $$
   只保留下了达朗贝尔公式的第一项，即该波动问题的解可以看成是两只波的叠加，其中一支波形$\varphi(x)/2$以波速$a$向左移动，另一支波形$\varphi(x)/2$以波速$a$向右移动。

   ![image-20251105134030675](https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251105134030675.png)

2. 如果无限长的弦初始位置为零，并具有初始速度，即初始条件为：
   $$
   u|_{t=0}=0,  u_t|_{t=0}=\psi(x)\quad (-\infty < x < \infty)
   $$
   根据达朗贝尔公式，相应的解可以写为：
   $$
   u(x,t)=\frac{1}{2a}\int_{x-at}^{x+at}\psi(\xi)\mathrm{d}\xi
   $$
   利用定积分性质写为：
   $$
   u(x,t)=\frac{1}{2a}\int_{-\infty}^{x+at}\psi(\xi)\mathrm{d}\xi-u(x,t)=\frac{1}{2a}\int_{-\infty}^{x-at}\psi(\xi)\mathrm{d}\xi
   $$
   记：
   $$
   \Psi(x)=\frac{1}{2a}\int_{-\infty}^{x}\psi(\xi)\mathrm{d}\xi
   $$
   那么解为：
   $$
   u(x,t)=\Psi(x+at)-\Psi(x-at)
   $$
   <img src="https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251105134843393.png" alt="image-20251105134843393" style="zoom: 67%;" />

#### (2) 半无限长弦的振动

该问题与无限长弦振动问题的区别在于方程成立的定义域，其中一头是有边界的：
$$
\frac{\partial^2u}{\partial t^2}-a^2\frac{\partial^2u}{\partial x^2}=0\quad (0 < x < \infty)
$$
初始条件为：
$$
u|_{t=0}=\varphi(x),u_t|_{t=0}=\psi(x)\quad (0 < x < \infty)
$$
在左端常见的有三种边界条件：

1. 端点固定

   ![image-20251105140055745](https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251105140055745.png)
   $$
   u(0,t)=0
   $$

2. 张力的竖直方向的分离为$0$

   <img src="https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251105140107225.png" alt="image-20251105140107225" style="zoom:50%;" />
   $$
   u_x(0,t)=0
   $$

3. 弹性支撑

   <img src="https://laoguantx.top/article/数学/数学物理方法/数学物理定解问题/image-20251105140126157.png" alt="image-20251105140126157" style="zoom:50%;" />
   $$
   u_x(0,t)-hu(0,t)=0
   $$

需要根据左边的边界条件来考虑进行奇延拓还是偶延拓，以左端固定的半无限长弦振动问题举例，满足：
$$
\begin{aligned}\frac{\partial^2u}{\partial t^2}-a^2\frac{\partial^2u}{\partial x^2}&=0\quad(0\leq x<\infty)\\u|_{t=0}=\varphi(x),u_t|_{t=0}&=\psi(x)\quad(0<x<\infty)\quad u|_{x=0}=0\end{aligned}
$$
把初始条件进行奇延拓（因为函数$x=0$处值为$0$，如果一阶导为$0$，则使用偶延拓）：
$$
\varphi_{odd}=\begin{cases}\varphi(x),x>0\\0,x=0\\-\varphi(-x),x<0&\end{cases},\psi(x)_{odd}=\begin{cases}\psi(x),x>0\\0,x=0\\-\psi(-x),x<0&\end{cases}
$$
这样该问题就能等价成一个无限长弦的振动问题：
$$
\frac{\partial^2v}{\partial t^2}-a^2\frac{\partial^2v}{\partial x^2}=0,(-\infty<x<\infty)\quad\left.v\right|_{t=0}=\varphi_{odd}(x),v_t|_{t=0}=\psi_{odd}(x)(-\infty<x<\infty)
$$
$x>0$部分的解$v(x,t)$就是原来问题的解$u(x,t)$。根据达朗贝尔公式，写出无限长弦振动问题的解为：
$$
v(x,t)=\frac{1}{2}[\varphi_{odd}(x+at)+\varphi_{odd}(x-at)]+\frac{1}{2a}\int_{x-at}^{x+at}\psi_{odd}(\xi)\mathrm{d}\xi
$$
我们关心的事$x>0$部分的解，所以将原函数回代时，要进行分段函数的转化：

对于$x>at$时：
$$
u(x,t)=\frac{1}{2}[\varphi(x+at)+\varphi(x-at)]+\frac{1}{2a}\int_{x-at}^{x+at}\psi(\xi)\mathrm{d}\xi
$$
对于$x<at$时：
$$
\begin{aligned}v(x,t)&=\frac{1}{2}[\varphi(x+at)-\varphi(at-x)]-\frac{1}{2a}\int_{x-at}^{0}\psi(-\xi)\mathrm{d}\xi+\frac{1}{2a}\int_{0}^{x+at}\psi(\xi)\mathrm{d}\xi\\&=\frac{1}{2}[\varphi(x+at)-\varphi(at-x)]+\frac{1}{2a}\int_{at-x}^0\psi(\xi)\mathrm{d}\xi+\frac{1}{2a}\int_0^{x+at}\psi(\xi)\mathrm{d}\xi\\&=\frac{1}{2}[\varphi(x+at)-\varphi(at-x)]+\frac{1}{2a}\int_{at-x}^{x+at}\psi(\xi)\mathrm{d}\xi\end{aligned}
$$

### 3、偏微分方程解的适定性

实际问题的解需要满足：

- 解的存在性
- 解的唯一性
- 解的稳定性（如果定解条件的数值发生细微的改变，解的数值也只做细微的改变）

若偏微分方程的解满足上述三个条件，就称为适定，也称定解问题的适定性。
