---
title: 复变函数的幂级数展开
published: 2025-10-10
category: ["数学", "数学物理方法"]
tags: ["复变函数"]
alias: "powerseriesexpansionofcomplexfunctions"
---

## 一、函数级数与复（函）数级数

### 1、函数级数相关性质

#### (1) 函数级数

如果级数每一项都为函数：

$$
S=\sum_{k=0}^{\infty}u_k\left(z\right)
$$

则称其为函数级数。

#### (2)函数级数的点收敛性（单点收敛）

如果对于某一个点$z_0$，级数$\Sigma u_k\left(z_0\right)$收敛，那么我们称级数在$z_0$收敛。

#### (3)函数级数的区域收敛性（逐点收敛）

如果级数对于区域内的每一点都收敛，那么我们称级数在区域收敛。

#### (4)级数的一致收敛性（一致收敛）

对于$\forall\varepsilon>0$，$\exists$与$z$无关的$N(\varepsilon)$，当正整数 $n>N(\varepsilon)$ 时，$\forall p\in\mathbb{N}$和$\forall z\in B$成立：

$$
\left|\sum_{k=1}^pu_{n+k}(z)\right|<\varepsilon 
$$
如果在区域$G$内，$|u_k(z)|<a_k$，$a_k$与$z$无关，$\sum_{k=0}^\infty a_k$收敛，则$\sum_{k=0}^\infty u_k(z)$在区域$G$内绝对且一致收敛。

### 2、一致收敛的性质

1. 一致收敛的级数， 如果每项连续，那么其和函数也连续；求极限（连续性）可以与求和交换次序，求积分与求和可以交换次序。

2. 魏尔施特拉斯定理：一致收敛的级数，如果每项解析，那么和函数也是解析。导数与求和可以交换次序，也就是说，可以先逐项求导，然后再求和。求导后再求和得到的级数在区域内也是一致收敛。

### 3、复数级数

对于复数级数或者复函数级数，可以分解两个级数：一个级数与实部相关， 另一个级数与虚部相关，所以可以归结为两个实数级数的收敛性问题。

## 二、幂函数

### 1、收敛圆与收敛半径

下面我们将讨论以$z_0$为中心的幂级数(每项都是幂函数)问题：

$$
\sum_{k=0}^\infty a_k(z-z_0)^k=a_0+a_1(z-z_0)+a_2(z-z_0)^2+\cdots
$$

考察由各项的模所组成的正实数级数的收敛性：

$$
\sum_{k=0}^\infty\left|a_k\right|\left|z-z_0\right|^k=\left|a_0\right|+\left|a_1\right|\left|z-z_0\right|+\left|a_2\right|\left|z-z_0\right|^2+\cdots
$$

如果幂级数$S=\sum_k=0^\infty a_k\left(z-z_0\right)^n$在圆内$|z-z_0|<R$绝对收敛，在圆外$|z-z_0|<R$ 发散，那我们称这个圆为收敛圆，圆的半径为收敛半径。$R=0$ 说明除$z_0$外处处发散，$R=\infty$ 说明处处都是收敛。

可以使用达朗贝尔比值判别法和柯西根值判别法等证明收敛性。

### 2、阿贝尔第一定理

如果幂级数$S=\sum_{k=0}^\infty a_k\left(z-c\right)^k$在某点$z_0$收敛，则在以$c$为圆心，$\left|z_0-c\right|$为半径的圆内 $\left|z-c\right|<|z_0–c|$绝对收敛，在闭圆内$|z–c|\leq r<|z_0–c|$一致收敛。

> **证明**：已知：
> $$
> \sum_{k=0}^{\infty} a_k (z_0-c)^k \quad\text{收敛}
> $$
> 存在$q$，使得：
> $$
> \left| a_k (z_0-c)^k \right| < q
> $$
> 对于任意$z$，有：
> $$
> \left| a_k(z-c)^k \right| 
> = \left| a_k (z_0-c)^k \right| \cdot \left| \frac{z-c}{z_0-c} \right|^k 
> < q \left| \frac{z-c}{z_0-c} \right|^k
> $$
> 当$\left| \frac{z-c}{z_0-c} \right| < 1$时，级数：
> $$
> \sum_{k=0}^{\infty} \left| \frac{z-c}{z_0-c} \right|^k
> $$
> 收敛（这是一个等比级数），所以：
> $$
> \sum_{k=0}^{\infty} a_k (z-c)^k
> $$
> 在 $|z-c| < |z_0-c|$ 内绝对收敛。
> 
>再考虑一致收敛性。令 $|z-c| \leq r < |z_0-c|$，则
> $$
> \left| a_k(z-c)^k \right| < q \left| \frac{r}{z_0-c} \right|^k
> $$
> 由于
> $$
> \sum_{k=0}^{\infty} \left| \frac{r}{z_0-c} \right|^k
> $$
> 收敛（$M$ 判别法），所以
> $$
> \sum_{k=0}^{\infty} a_k (z-c)^k
> $$
> 在 $|z-c| \leq r < |z_0-c|$ 内一致收敛。

### 3、幂级数的解析性

<img src="https://laoguantx.top/article/数学/数学物理方法/复变函数的幂级数展开/image-20250926113215902.png" alt="image-20250926113215902" style="zoom:50%;" />

连续函数$w$的幂级数展开为：

$$
w(\zeta) = a_0 + a_1 (\zeta - z_0) + a_2 (\zeta - z_0)^2 + \cdots
$$
如上图所示，考虑半径$R_1$略小于收敛半径$R$的圆：
$$
C_{R_1}: |\zeta - z_0| = R_1 < R
$$

对于圆内的任意一点$z$及圆上的任意点$\zeta$

$$
|z - z_0| < R_1 < R, |\zeta - z_0| = R_1
$$
$$
\frac{w(\zeta)}{\zeta - z} = \frac{a_0}{\zeta - z} + \frac{a_1 (\zeta - z_0)}{\zeta - z} + \frac{a_2 (\zeta - z_0)^2}{\zeta - z} + \cdots
$$

两边沿圆周进行路径积分：

$$
\frac{1}{2\pi \mathrm{i}} \oint_{C_{R_1}} \frac{w(\zeta)}{\zeta - z} \mathrm{d}\zeta = \frac{1}{2\pi \mathrm{i}} \oint_{C_{R_1}} \left( \frac{a_0}{\zeta - z} + \frac{a_1 (\zeta - z_0)}{\zeta - z} + \frac{a_2 (\zeta - z_0)^2}{\zeta - z} + ... \right) \mathrm{d}\zeta
$$
根据柯西积分公式可以得到：

$$
\frac1{2\pi\mathrm{i}}\oint_{C_{R1}}\frac{w(\zeta)}{\zeta-z}\mathrm{d}\zeta=a_0+a_1(z-z_0)+a_2(z-z_0)^2+...+a_n(z-z_0)^n+\cdots
$$

也就是说，幂级数可以表示为一个连续函数的回路积分。根据柯西型积分的解析性定理，可以得到：幂级数在其收敛圆内部是一个解析函数，在收敛圆内不会出现奇点。

## 三、泰勒级数展开

<img src="https://laoguantx.top/article/数学/数学物理方法/复变函数的幂级数展开/image-20250926114924495.png" alt="image-20250926114924495" style="zoom:50%;" />

设$f(z)$在以$z_{0}$为圆心的圆$C_{R}:|z-z_{0}|≤R$内解析，则对圆内的任意$z$点，$f(z)$可展为幂级数：
$$
f(z)=\sum_{k=0}^{\infty}a_{k}(z-z_{0})^{k}
$$

$$
a_{k}=\frac{1}{2\pi \mathrm{i}}\oint_{C_{R_{1}}}\frac{f(\zeta)}{(\zeta-z_{0})^{k+1}}\mathrm{d}\zeta=\frac{f^{(k)}(z_{0})}{k!}
$$

$$
C_{R_{1}}:|\zeta-z_{0}|<R_{1}<R
$$

上式成为函数以$z_0$为中心的泰勒级数。

> **证明**：应用柯西公式：
> $$
> f(z)=\frac{1}{2\pi \mathrm{i}}\oint_{C_{R_{1}}}\frac{f(\zeta)}{\zeta-z}\mathrm{d}\zeta
> $$
>
> 对积分函数分母进行配凑：
> $$
> \frac{1}{\zeta-z}=\frac{1}{(\zeta-z_{0})-(z-z_{0})}
> $$
>  得到：
> $$
> \frac{1}{\zeta-z}=\frac{1}{\left(\zeta-z_0\right)-\left(z-z_0\right)}=\frac{1}{\zeta-z_0}\cdot\frac{1}{1-\frac{z-z_0}{\zeta-z_0}}
> $$
> 因为$|\frac{z-z_0}{\zeta-z_0}|<1$，得到：
> $$
> \frac{1}{\zeta-z}=\frac{1}{\zeta-z_0}\sum_{k=0}^\infty\frac{\left(z-z_0\right)^k}{\left(\zeta-z_0\right)^k}=\sum_{k=0}^\infty\frac{\left(z-z_0\right)^k}{\left(\zeta-z_0\right)^{k+1}}
> $$
> 回代到$f(z)$中：
> $$
> f(z)=\sum_{k=0}^{\infty}\left(z-z_{0}\right)^{k}\cdot\frac{1}{2\pi\mathrm{i}}\oint_{C_{R_{1}}}\frac{f(\zeta)}{\left(\zeta-z_{0}\right)^{k+1}}\mathrm{d}\zeta
> $$
> 由于级数是一致收敛的，积分和求和可以交换顺序，并使用高阶柯西公式，得到：
> $$
> \frac{1}{2\pi\mathrm{i}}\oint_{C_{R_1}}\frac{f(\zeta)}{\left(\zeta-z_0\right)^{k+1}}\mathrm{d}\zeta=\frac{f^{(k)}\left(z_0\right)}{k!}
> $$
>
> $$
> f(z)=\sum_{k=0}^{\infty}\frac{f^{(k)}\left(z_{0}\right)}{k!}\left(z-z_{0}\right)^{k}\quad\left(|z-z_{0}|<R\right)
> $$
>
> 

多值函数在规定好单值分支后，在其解析区域内也可以做泰勒展开。

## 四、解析延拓

### 1、解析延拓的解释

当我们在一定区域$D_{\mathrm{l}}$内确定了一个解析函数$f_1$之后，考虑能否把它延拓到更大范围 $D$上的解析函数$f$，要求延拓后函数$f$在$D_{1}$上和解析函数$f_{1}$相同，这就是解析延拓。简单地说，解析延拓就是解析函数定义域的扩大。

通常可以用泰勒级数进行解析延拓：在解析函数延拓前的区域中任选一点，求得解析函数在该点的各阶导数，然后在该点附近对原来的解析函数进行泰勒展开，分析泰勒级数展开的收敛半径，如果该收敛半径超过了延拓前函数的定义域范围，表明延拓成功。

### 2、解析函数的零点

函数的零点：函数$f(z)$在$z=z_{0}$解析，那么可以在该点附近进行泰勒展开

$$
f(z)=\sum_{k=0}^{\infty}a_{k}(z-z_{0})^{k}
$$

如果$a_{0}=a_{1}=\ldots=a_{m-1}=0,a_{m}\neq0$称$z=z_{0}$为函数$f(z)$的m阶零点。

$$
f(z)=\sum_{k=m}^{\infty}a_{k}(z-z_{0})^{k}=(z-z_{0})^{m}\sum_{k=0}^{\infty}a_{m+k}(z-z_{0})^{k}=(z-z_{0})^{m}\varphi(z)
$$

函数$\varphi(z)$在$z=z_{0}$解析，而且$\varphi(z_{0})\neq0$。

### 3、零点的孤立性定理

设函数$f(z)$在区域$G$内解析，若$f(z)$在$G$内的一个子集中恒等于零，那么$f(z)$在区域G内恒等于零。设$f(z)$在区域$G$内解析且不恒等于零，$a$为其零点。则必能找到$a$的邻域，使在此邻域内$z=a$是$f(z)$的唯一零点。

### 4、解析延拓的唯一性定理

设$f(z)$在区域$G$内解析.若在$G$内存在$f(z)$的无穷多个零点，且无穷多个零点有极限：$\lim_{n\to\infty}z_n=z_0$,那么f(z)$在G$内恒为零。

> **证明**：$\lim _{n\to \infty} z_n= z_0$ 根据函数的连续性：$\lim _{n\to \infty} f( z_n) = f( z_0) = 0$，所以$z_0$也是函数的零点。如果函数不恒为零，由零点的孤立性定理，存在$z_{0}$的某个邻域，在此邻域内$z_0$是其唯一的零点，这与上面的条件矛盾，所以，函数只能恒为零。

于是可以得出解析延拓的唯一性定理：设在区域$G$内有两个解析函数$f_1( z) $和$f_2( z) $, 在$ G $内存在无穷多个点$z_n$，$f_1( z_n) = f_2( z_n)$，而且$\lim _{n\to \infty }z_n= z_0\in G$。那么在该区域$G$内，$f_1(z)=f_2(z)$。

## 五、洛朗级数展开

当所研究的区域上存在函数的奇点（也就是函数不解析）时，无法展开成泰勒级数，需要考虑在去除奇点后的环域上进行展开。

![image-20251010185950196](https://laoguantx.top/article/数学/数学物理方法/复变函数的幂级数展开\image-20251010185950196.png)

对于下面的双边幂级数（同时存在正幂次项和负幂次项）：
$$
\begin{aligned}&\sum_{k=-\infty}^{\infty}a_{k}\left(z-z_{0}\right)^{k}=\sum_{k=-\infty}^{-1}a_{k}\left(z-z_{0}\right)^{k}+\sum_{k=0}^{\infty}a_{k}\left(z-z_{0}\right)^{k}=A_{N}+A_{P}\\&A_{N}=\sum_{k=-\infty}^{-1}a_{k}(z-z_{0})^{k}\\&A_{P}=\sum_{k=0}^{\infty}a_{k}(z-z_{0})^{k}\end{aligned}
$$
只有两部分级数$A_N,A_P$都收敛才能保证原来级数的收敛性，对于正幂次部分，可以使用之前学过的级数判别法来求出其收敛半径$R_1$，收敛范围为：$|z-z_0|<R_0$。对于负幂次项部分，引入新的变量：$\zeta = \frac{1}{z-z_0}$：
$$
A_N=\sum_{k=-\infty}^{-1}a_k\left(z-z_0\right)^k=\sum_{k=1}^{\infty}c_k\zeta^k
$$
于是可以分析其收敛半径$R_2'$，回代得到原级数的收敛半径$R_2=\frac{1}{R_2'}$（圆的外部收敛），得到其收敛范围为：$|z-z_0|>R_1$。

- 如果$R_2<R_1$，则双边区域在环$R_2<|z-z_0|<R_1$内绝对且一致收敛，其和为一解析函数，级数可逐项求导。该环域称为该双边幂级数的收敛环。
- 如果$R_2> R_1$，则该级数处处发散。

于是，我们可以得出洛朗级数定理，其中$R_o=R_1,R_i=R_2$：

![image-20251010191418825](https://laoguantx.top/article/数学/数学物理方法/复变函数的幂级数展开\image-20251010191418825.png)

设 $f(z)$ 在环形区域 $R_i < |z - z_0| < R_o$ 的内部单值解析，那么对于环形区域内任一点$z$，$f(z)$ 都可展开为如下的幂级数:

$$
f(z) = \sum_{k=-\infty}^{\infty} a_k (z - z_0)^k
$$
$$
a_k = \frac{1}{2\pi \mathrm{i}} \oint_C \frac{f(\zeta)}{(\zeta - z_0)^{k+1}} \mathrm{d}\zeta
$$

其中 $C$ 是环形区域内任意一条简单的封闭曲线，积分方向为常规逆时针。由于函数不在封闭曲线的区域内解析，与泰勒展开不同，这个系数和导数之间没有关系。所以计算相当复杂，一般会采取其他方法获取其级数形式。

> **证明**：
>
> 证明：将外圆稍稍缩小为$C_{o}$，内圆稍稍扩大为 $C_{i}$，对于任意位于$C_{o}$和$C_{i}$所围成的区域中点$z$，应用多连通区域柯西积分公式：
>
> $$
> f(z) = \frac{1}{2\pi \mathrm{i}} \oint_{C_{o}} \frac{f(\zeta)}{(\zeta-z)} \mathrm{d}\zeta + \frac{1}{2\pi \mathrm{i}} \oint_{C_{i}} \frac{f(\zeta)}{(\zeta-z)} \mathrm{d}\zeta
> $$
>
> ![image-20251010192904805](https://laoguantx.top/article/数学/数学物理方法/复变函数的幂级数展开\image-20251010192904805.png)
>
> 沿外圆 $C_{o}$： $|\zeta-z_{0}| > |z-z_{0}|$，有：
> $$
> \begin{aligned}
> \frac{1}{\zeta-z} &= \frac{1}{(\zeta-z_{0})-(z-z_{0})} \\&= \frac{1}{\zeta-z_{0}} \cdot \frac{1}{1-\frac{z-z_{0}}{\zeta-z_{0}}}
> \\&= \frac{1}{\zeta-z_{0}} \sum_{k=0}^{\infty} \frac{(z-z_{0})^{k}}{(\zeta-z_{0})^{k+1}} \\&= \sum_{k=0}^{\infty} \frac{(z-z_{0})^{k}}{(\zeta-z_{0})^{k+1}}
> \end{aligned}
> $$
> 沿内圆$C_i:$ $\left | \zeta - z_0\right | < \left | z- z_0\right |$，有：
>
> $$
> \begin{aligned}
> \frac{1}{\zeta-z}&=\frac{1}{\left(\zeta-z_0\right)-\left(z-z_0\right)}\\&=-\frac{1}{z-z_0}\frac{1}{1-\frac{\zeta-z_0}{z-z_0}}
> \\&=-\frac{1}{z-z_{0}}\sum_{l=0}^{\infty}\frac{\left(\zeta-z_{0}\right)^{l}}{\left(z-z_{0}\right)^{l}}\\&=-\sum_{l=0}^{\infty}\frac{\left(\zeta-z_{0}\right)^{l}}{\left(z-z_{0}\right)^{l+1}}
> \end{aligned}
> $$
>
> 综合起来：
>
> $$
> \begin{aligned}&f(z)=\frac{1}{2\pi\mathrm{i}}\oint_{C_{o}}\frac{f(\zeta)}{(\zeta-z)}\mathrm{d}\zeta+\frac{1}{2\pi\mathrm{i}}\oint_{C_{i}}\frac{f(\zeta)}{(\zeta-z)}\mathrm{d}\zeta\\&=\sum_{k=0}^{\infty}\left(z-z_{0}\right)^{k}\frac{1}{2\pi\mathrm{i}}\oint_{C_{o}}\frac{f(\zeta)}{\left(\zeta-z_{0}\right)^{k+1}}\mathrm{d}\zeta-\sum_{l=0}^{\infty}\left(z-z_{0}\right)^{-(l+1)}\frac{1}{2\pi\mathrm{i}}\oint_{C_{i}}\left(\zeta-z_{0}\right)^{l}f(\zeta)\mathrm{d}\zeta\end{aligned}
> $$
> 对于后面这一项，令$k=-(l+1)$，则：$l=-k-1$，有：
>
> $$
> \sum_{l=0}^{\infty}(z-z_{0})^{-(l+1)}\frac{1}{2\pi \mathrm{i}}\oint_{C_{i}}(\zeta-z_{0})^{l}f(\zeta)\mathrm{d}\zeta=\sum_{k=-\infty}^{\infty}(z-z_{0})^{k}\frac{1}{2\pi \mathrm{i}}\oint_{C_{i}}\frac{f(\zeta)}{(\zeta-z_{0})^{k+1}}\mathrm{d}\zeta
> $$
>
> 所以，刚才的积分表达式为：
>
> $$
> \begin{aligned}
> f(z)&=\frac{1}{2\pi \mathrm{i}}\oint_{C_{o}}\frac{f(\zeta)}{(\zeta-z)}\mathrm{d}\zeta+\frac{1}{2\pi \mathrm{i}}\oint_{C_{i}}\frac{f(\zeta)}{(\zeta-z)}\mathrm{d}\zeta
> \\&=\sum_{k=0}^{\infty}(z-z_{0})^{k}\frac{1}{2\pi \mathrm{i}}\oint_{C_{o}}\frac{f(\zeta)}{(\zeta-z_{0})^{k+1}}\mathrm{d}\zeta-\sum_{k=-1}^{\infty}(z-z_{0})^{k}\frac{1}{2\pi \mathrm{i}}\oint_{C_{i}}\frac{f(\zeta)}{(\zeta-z_{0})^{k+1}}\mathrm{d}\zeta
> \end{aligned}
> $$
>
> 在环形区域上，积分项中的$\zeta-z_{0}\neq 0$，所以上述积分项中每一项在$C_{o}$和$C_{i}$所围成的区域中是解析的。根据柯西定理，对于该区域内任意一条简单的封闭曲线，始终成立。
> $$
> \oint_{C_{c}}\frac{f(\zeta)}{(\zeta-z_{0})^{k+1}}\mathrm{d}\zeta=\oint_{C}\frac{f(\zeta)}{(\zeta-z_{0})^{k+1}}\mathrm{d}\zeta
> $$
> $$
> \oint_{C_{c}}\frac{f(\zeta)}{(\zeta-z_{0})^{k+1}}\mathrm{d}\zeta=-\oint_{C}\frac{f(\zeta)}{(\zeta-z_{0})^{k+1}}\mathrm{d}\zeta
> $$
> 所以可以得到如下的洛朗级数表达式：
> $$
> f(z)=\sum_{k=-\infty}^{\infty}a_{k}(z-z_{0})^{k}
> $$
> $$
> a_{k}=\frac{1}{2\pi \mathrm{i}}\oint_{C}\frac{f(\zeta)}{(\zeta-z_{0})^{k+1}}\mathrm{d}\zeta
> $$
>
> 证毕。

洛朗级数展开的正幂次项成为正则部分，收敛半径为$|z-z_0|<R_o$，负幂次项为主要部分，收敛半径为$|\frac{1}{z-z_0}|<\frac{1}{R_i}$。洛朗级数展开是唯一的。

## 六、孤立奇点

### 1、孤立奇点的定义

若函数$f(z)$在某点$z_0$不可导，而在$z_0$的任意小邻域内除$z_0$外处处可导，便称$z_0$为$f(z)$的孤立奇点。若在$z_{0}$的无论多么小的邻域内总可以找到除$z_{0}$以外的不可导的点，便称$z_0$为$f(z)$的非孤立奇点。在挖去孤立奇点$z_0$而形成的环域上的解析函数$f(z)$可展为洛朗级数：
$$
f(z)=\sum_{k=-\infty}^\infty a_k(z-z_0)^k
$$

其中洛朗级数的正幂部分为解析部分，负幂部分称为主要部分或无限部分。

### 2、孤立奇点的分类

1. 可去奇点：在挖去孤立奇点后而形成的环域上的解析函数$f(z)$的洛朗展开级数，如果没有负幂次项，则称之为可去奇点。其满足：
   $$
   f(z)=\sum_{k=0}^{\infty}a_{k}\left(z-z_{0}\right)^{k}\
   $$

   $$
   \lim_{z\to z_{0}}f(z)=\sum_{k=0}^{\infty}a_{k}\left(z-z_{0}\right)^{k}=a_{0}
   $$

   $$
   f(z)=\frac{\sin z}{z},f(z)=\frac{z^{2}-1}{z-1}
   $$

2. $m$阶极点（没拼错，就是极点）：含有最高$m$次的负幂级数。满足：
   $$
   \begin{aligned}&f(z)=\sum_{k=-m}^{\infty}a_{k}(z-z_{0})^{k},a_{-m}\neq0\\&f(z)=\frac{g(x)}{(z-z_{0})^{m}}\end{aligned}
   $$

3. 本性奇点：含有无限项负幂级数。满足：
   $$
   f(z)=\sum_{k=-\infty}^{\infty}a_{k}(z-z_{0})^{k},a_{-m}\neq0
   $$