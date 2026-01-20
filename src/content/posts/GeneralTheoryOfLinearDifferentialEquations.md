---
title: 线性微分方程解的一般理论
published: 2025-05-01
category: ["数学", "高等数学"]
tags: ["线性代数", "微积分", "常微分方程"]
alias: "generaltheoryoflineardifferentialequations"
---
## 一、线性微分方程

### 1、方程形式

我们将未知函数 $y$ 及其导数 $\frac{\mathrm{d}y}{\mathrm{d}x}, \cdots, \frac{\mathrm{d}^ny}{\mathrm{d}x^n}$ 是一次式的 $n$ 阶微分方程，称为线性微分方程。这是在应用中经常遇到的一类方程，其一般形式是：
$$
\frac{\mathrm{d}^ny}{\mathrm{d}x^n} + p_1(x) \frac{\mathrm{d}^{n-1}y}{\mathrm{d}x^{n-1}} + \cdots + p_{n-1}(x) \frac{\mathrm{d}y}{\mathrm{d}x} + p_n(x)y = f(x)
$$
其中 $p_1(x), p_2(x), \cdots, p_n(x)$ 及 $f(x)$ 都是 $x$ 的已知函数。当 $f(x) \not\equiv 0$ 时，称为非齐次线性微分方程，其中 $f(x)$ 称自由项，当 $f(x) \equiv 0$ 时，称：
$$
\frac{\mathrm{d}^ny}{\mathrm{d}x^n} + p_1(x) \frac{\mathrm{d}^{n-1}y}{\mathrm{d}x^{n-1}} + \cdots + p_{n-1}(x) \frac{\mathrm{d}y}{\mathrm{d}x} + p_n(x)y = 0
$$
为齐次线性微分方程。

### 2、解的存在唯一性定理

#### （1）定理

设线性微分方程中的系数$p_i(x)(i=1,\cdotp\cdotp\cdotp,n)$以及$f(x)$ 都在区间$(a,b)$ 内连续，$x_0\in(a,b)$，则在该区间内存唯一的 $y = \varphi(x)$，满足初值问题（线性微分方程和初值条件$y^{(i)}\mid_{x=x_0}=y_0^{(i)}(i=0,1,\cdots,n-1)$，并且 $y=\varphi(x)$ 在$(a,b)$ 内连续， 有直至$n$阶的连续导数。

> 证明：（较为困难，未做要求）
>
> 考虑区间$(a, b)$上的$n$阶线性微分方程：
> $$
> \frac{\mathrm{d}^n y}{\mathrm{d}x^n} + p_1(x)\frac{\mathrm{d}^{n-1}y}{\mathrm{d}x^{n-1}} + \cdots + p_{n-1}(x)\frac{\mathrm{d}y}{\mathrm{d}x} + p_n(x)y = f(x),
> $$
> 其中$p_i(x)\ (i=1,\dots,n)$和$f(x)$在$(a,b)$内连续。对任意初值条件
> $$
> y^{(i)}(x_0) = y_0^{(i)} \quad (i=0,1,\dots,n-1),\quad x_0 \in (a,b),
> $$
> 存在唯一解$y = \varphi(x)$在$(a,b)$上满足条件，且$\varphi(x)$在$(a,b)$上有直至$n$阶连续导数。
>
> 1. **转化为一阶线性方程组**  
>    定义新变量：
>    $$
>    y_1 = y,\ y_2 = y',\ \dots,\ y_n = y^{(n-1)},
>    $$
>    原方程等价于：
>    $$
>    \begin{cases}
>    y_1' = y_2, \\
>    y_2' = y_3, \\
>    \ \vdots \\
>    y_{n-1}' = y_n, \\
>    y_n' = -p_1(x)y_n - \cdots - p_n(x)y_1 + f(x).
>    \end{cases}
>    $$
>    其向量形式为：
>    $$
>    \mathbf{y}' = A(x)\mathbf{y} + \mathbf{F}(x),
>    $$
>    其中
>    $$
>    A(x) = \begin{pmatrix}
>    0 & 1 & 0 & \cdots & 0 \\
>    0 & 0 & 1 & \cdots & 0 \\
>    \vdots & \vdots & \vdots & \ddots & 1 \\
>    -p_n(x) & -p_{n-1}(x) & \cdots & -p_1(x)
>    \end{pmatrix},\quad
>    \mathbf{F}(x) = \begin{pmatrix}0 \\ \vdots \\ 0 \\ f(x)\end{pmatrix}.
>    $$
>
> 2. **验证连续性条件**  
>    $A(x)$与$\mathbf{F}(x)$在$(a,b)$上连续（因$p_i(x)$和$f(x)$连续）。
>
> 3. **利普希茨条件**  
>    右端函数$\mathbf{y}' = A(x)\mathbf{y} + \mathbf{F}(x)$关于$\mathbf{y}$是线性的，故在任意闭区间$[c,d] \subset (a,b)$上满足利普希茨条件：
>    $$
>    \|A(x)\mathbf{y}_1 - A(x)\mathbf{y}_2\| \leq L \|\mathbf{y}_1 - \mathbf{y}_2\|,
>    $$
>    其中$L = \sup_{x \in [c,d]} \|A(x)\|$。
>
> 4. **局部存在唯一性**  
>    由Picard-Lindelöf定理，初值问题在$x_0$的邻域内存在唯一局部解。
>
> 5. **解的全局延拓**  
>    因$A(x)$和$\mathbf{F}(x)$在$(a,b)$上连续，线性方程的解可延拓至整个$(a,b)$，无爆破现象。
>
> 6. **解的光滑性**  
>    解$\mathbf{y}(x)$的分量$y_1(x)$即原方程解$y = \varphi(x)$，且满足：
>    $$
>    y^{(k)}(x) = y_{k+1}(x) \quad (k=0,\dots,n-1),
>    $$
>    $y^{(n)}(x)$由方程右端连续函数确定，故$\varphi(x) \in C^n(a,b)$。
>
> **结论**  
> 存在唯一解$y = \varphi(x)$在$(a,b)$上满足初值条件，且$\varphi(x)$在$(a,b)$上有$n$阶连续导数。

#### （2）推论

设上述定理的条件成立，则满足齐次线性微分方程条件及零初值条件$y^{(i)}\mid_{x=x_0}=0(i=0,1,\cdotp\cdotp\cdotp,n-1)$
的唯一解是$y(x)\equiv0$。

> 证明：
>
> 证明因为$y(x)\equiv0$满足齐次线性方程及零初值条件，再由上述解的存在唯一性定理，故此唯一解必是 $y(x)\equiv0$，证毕。

## 二、齐次线性微分方程通解的结构

为书写简单，将线性微分方程的左边即为$L[y]$，即：
$$
L[y] \equiv \frac{\mathrm{d}^n y}{\mathrm{d}x^n} + p_1(x) \frac{\mathrm{d}^{n-1} y}{\mathrm{d}x^{n-1}} + \cdots + p_n(x) y
$$

### 1、线性微分方程的线性性

设$c$是一个常数，$y(x)$是一个函数且有直到$n$阶导数，则：
$$
L[cy]=cL[y]
$$
$$
L[y_1+y_2]=L[y_1]+L[y_2]
$$
即：
$$
L\left[\sum_{i=1}^{m}c_{i}y_{i}\right]=\sum_{i=1}^{m}c_{i}L\left[y_{i}\right]
$$
由于$L[y]$具有上面的性质，所以称其为线性微分算子。并推导出以下定理：

设 $y_1(x), \cdots, y_m(x)$ 是齐次线性方程 (2.2) 的 $m$ 个解（有 $m$ 个解是因为不受初值问题约束），$c_1, \cdots, c_m$ 是 $m$ 个常数，则：
$$
y = c_1 y_1(x) + \cdots + c_m y_m(x)
$$
也是齐次线性方程的解。

### 2、朗斯基行列式

设$m$个函数$y_1(x),\cdots,y_m(x)$有直至$m-1$阶的导数，则称由它们构成的行列式：
$$
w(x)=\left|\begin{array}{llll}
y_{1}(x) & y_{2}(x) & \cdots & y_{m}(x) \\
y_{1}^{\prime}(x) & y_{2}^{\prime}(x) & \cdots & y_{m}^{\prime}(x) \\
\vdots & \vdots & & \vdots \\
y_{1}^{(m-1)}(x) & y_{2}^{(m-1)}(x) & \cdots & y_{m}^{(m-1)}(x)
\end{array}\right|
$$
为函数$y_1(x),\cdots,y_m(x)$的**朗斯基行列式**。

如何判别$n$阶齐次线性方程$n$个解的线性无关（相关），有下述定理：

**定理：**设$y_1(x),\cdotp\cdotp\cdotp,y_n(x)$是齐次线性方程的$n$个解，则$y_{1}(x),\cdots,y_{n}(x)$ 在区间$(a,b)$ 内线性相关的充分必要条件是它们的朗斯基行列式：
$$
w(x)=\left|\begin{array}{llll}y_{1}(x) & y_{2}(x) & \cdots & y_{n}(x) \\ y_{1}^{\prime}(x) & y_{2}^{\prime}(x) & \cdots & y_{n}^{\prime}(x) \\ \vdots & \vdots & & \vdots \\ y_{1}^{(n-1)}(x) & y_{2}^{(n-1)}(x) & \cdots & y_{n}^{(n-1)}(x)\end{array}\right| \equiv 0, x \in(a, b)
$$

> 证明：
>
> 先证必要性。设 $y_1(x),\cdots,y_n(x)$ 线性相关。则存在不全为零的 $n$ 个常数 $a_1,\cdots,a_n$，使
> $$
> {a_1y_1(x)+\cdots+a_ny_n(x)\equiv0, x\in(a,b)}
> $$
> 将上述恒等式两边依次求 $1,2,\cdots,n-1$ 阶导数，得：
> $$
> {a_1y_1'(x)+\cdots+a_ny_n'(x)\equiv0}
> $$
> $$
> \cdots
> $$
> $$
> {a_1y_1^{(n-1)}(x)+\cdots+a_ny_n^{(n-1)}(x)\equiv0}
> $$
> 由上式构成的关于 $a_1,\cdots,a_n$ 的齐次线性代数方程组可知，它有一组不全为零的解$a_1,\cdots,a_n$，故对一切 $x\in(a,b)$，该代数方程组的系数行列式应等于零，即 $w(x)\equiv0, x\in(a,b)$。
> 再证充分性。设 $w(x)\equiv0$，取 $x_0\in(a,b)$，于是 $w(x_0)=0$，则关于未知数 $a_1,\cdots,a_n$ 的齐次线性代数方程组：
> $$
> \begin{array}{l}
> {a_1y_1(x_0)+\cdots+a_ny_n(x_0)=0}\\
> {a_1y_1'(x_0)+\cdots+a_ny_n'(x_0)=0}\\
> {\cdots}\\
> {a_1y_1^{(n-1)}(x_0)+\cdots+a_ny_n^{(n-1)}(x_0)=0}
> \end{array}
> $$
> 有不全为零的解 $a_1^*,\cdots,a_n^*$。由线性性可知，
> $$
> y(x)=\sum_{i=1}^na_i^*y_i(x)
> $$
> 是齐次线性方程的解，且满足零初值条件。
> $$
> y^{(j)}(x_0)=\sum_{i=1}^na_i^*y_i^{(j)}(x_0)=0 (j=0,1,\cdots,n-1)
> $$
> 再由定理的推论知，$y(x)\equiv0$，即：
> $$
> {a_1^*y_1(x)+\cdots+a_n^*y_n(x)\equiv0, x\in(a,b)}
> $$
> 但因 $a_{1}^{*},\cdots,a_{n}^{*}$ 不全为零， $y_{1}(x),\cdots,y_{n}(x)$ 线性相关。

根据定理的证明过程得到推论：

**推论：**设$y_1(x),\cdotp\cdotp\cdotp,y_n(x)$是齐次线性方程的$n$个解，则它们的朗斯基行列式在区间$(a,b)$内或者处处不为零，或者处处为零。

为了便于应用，给出定理的另一种表示方法。

**定理：**设$y_1(x),\cdotp\cdotp\cdotp,y_n(x)$是齐次线性方程的$n$个解，则$y_{1}(x),\cdots,y_{n}(x)$ 在区间$(a,b)$ 内线性无关的充分必要条件是它们的朗斯基行列式$W(x)\neq0,x\in(a,b)$。

### 3、齐次线性微分方程通解结构定理

由此我们可以证明下述齐次线性微分方程的通解结构定理。

**定理：**设$y_1(x),\cdotp\cdotp\cdotp,y_n(x)$是齐次线性方程的$n$个线性无关的解，$c_1,\cdotp\cdotp\cdotp,c_n$是$n$个任意常数，则：
$$
y(x)=\sum_{i=1}^nc_iy_i(x)
$$
是其通解。

> 证明：
>
> 由定理知，上式为解。为了证明其是通解，只需证明，对任意给定的初值条件，总可以找到相应的一组常数$c_i^*(i=1,\cdotp\cdotp\cdotp,n)$，使得当$c_i=c_i^*$时所对应的解满足初值条件。即证以$c_i(i=1,\cdotp\cdotp\cdotp,n$)为未知数的线性代数方程组：
> $$
> \sum_{i=1}^nc_iy_i^{(j)}\left(x_0\right)=y_0^{(j)}\quad(j=0,1,\cdotp\cdotp\cdotp,n-1)
> $$
> 存在解就可以了，因为系数行列式是$W(x_0)$，根据定理，由线性无关解 $y_{1}(x)$, $\cdots$, $y_{n}(x)$ 构成的朗斯基行列式 $w(x) \neq 0$，因此 $w(x_{0}) \neq 0$。故有唯一的解 $c_{i} = c_{i}^{*} (i = 1, \cdots, n)$。由此构成的:
> $$
> y(x) = \sum_{i=1}^{n} c_{i}^{*} y_{i}(x)
> $$
> 必满足初值条件，证毕。

**定义：**设$y_1(x),\cdotp\cdotp\cdotp,y_n(x)$是齐次线性方程的$n$个线性无关的解，则称 $y_1(x),\cdotp\cdotp\cdotp,y_n(x)$ 是它的一个**基本解组**。

那么如何确定基本解组是否存在？存在以下定理：

**定理：**齐次线性方程必有且正好有$n$个线性无关的解，即齐次线性微分方程的基本解组必存在

> 证明：
> 考虑初值条件 $E_i$：
> $$
> y^{(0)}(x_0) = 0, \cdots, y^{(i-2)}(x_0) = 0, y^{(i-1)}(x_0) = 1
> $$
> $$
> y^{(i)}(x_0) = 0, \cdots, y^{(n-1)}(x_0) = 0
> $$
> 注意在 $x_0$ 处只是 $y$ 的第 $(i-1)$ 阶导数的值为$1$，其余各阶导数的值都为零。对于每一个 $i(i=1,\cdots,n)$，分别存在唯一的解 $y_i(x)$。由这 $n$ 个解 $y_1(x),\cdots,y_n(x)$ 构成的朗斯基行列式在 $x=x_0$ 处的值为：
> $$
> w(x_{0}) = \begin{vmatrix} 1 & & & \mathbf{0} \\ &  1 & & \\ & &  \ddots &  \\ \mathbf{0} &  & & 1 \end{vmatrix} = 1 \neq 0
> $$
> 故知 $y_1(x),...,y_n(x)$ 线性无关，即存在 $n$ 个线性无关解。它们构成一个基本解组，再由定理可知，任意$n+1$个解必线性相关，故有且正好有$n$个线性无关的解。证毕。

## 三、非齐次线性微分方程的通解结构

### 1、引理

1. 设$y_1^*$与$y_2^*$是非齐次线性方程的两个解，则$y_1^*-y_2^*$是对应的齐次线性方程的一个解。
2. 设$y^{*}$与$y$分别是非齐次线性方程的一个解及对应的齐次线性方程的一个解，则 $y^*+y$ 也是非齐次线性方程的一个解。

### 2、通解结构定理

设 $y*$ 是非齐次线性方程的一个解，$Y$是其所对应的齐次线性方程的通解，则：
$$
y=Y+y^*
$$
是非齐次线性方程的通解。

证明过程与线性代数中非齐次线性方程和齐次线性方程解的关系类似。

