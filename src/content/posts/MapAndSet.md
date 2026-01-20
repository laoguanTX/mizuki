---
title: 集合与映射
published: 2024-07-27
category: ["数学", "大中衔接"]
tags: ["大中衔接"]
catalog: 1
excerpt: 
imgst: 
alias: "mapandset"
---


### 一、集合

#### 1、证明集合相等的方法

证明$A=B$，要证明$A\in B$且$B\in A$

#### 2、集合的运算与运算律

1. $A\cup B=\{x\mid x\in A$或$x\in B\}$
   $A\cap B=\{x\mid x\in A$且$x\in B\}$
   $A\setminus B= \{ x\mid x\in A$且$x\not\in B\}$
   若$A\subset X$，则称$A$在$X$中的余集（补集）为：$A^c=X\setminus A=\{x\in X\mid x\not\in A\}$

2. 交换律：$A\cup B=B\cup A,A\cap B=B\cap A$
   结合律：$( A\cup B) \cup C= A\cup ( B\cup C)$，$( A\cap B) \cap C= A\cap ( B\cap C)$
   分配律：$A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$，$A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$
   德摩根法则：$(A\cup B)^{c}=A^{c}\cap B^{c}$，$(A\cap B)^{c}=A^{c}\cup B^{c}$

---

> 例1：
>
> 设$A=\{x\mid x=m^2+n^2,m,n\in\mathbb{Z}\}$，证明：若$a,b\in A$，则$ab\in A$.
>
> 证明：若$a,b\in A$,则存在整数$m_1,n_1,m_2,n_2$使得：
> $$a=m_1^2+n_1^2,b=m_2^2+n_2^2$$
> 因此有：
> $$\begin{aligned}\text{ab}&=({m_{1}}^{2}+{n_{1}}^{2})({m_{2}}^{2}+{n_{2}}^{2})\\&=m_{1}^{2}m_{2}^{2}+n_{1}^{2}n_{2}^{2}+m_{1}^{2}n_{2}^{2}+n_{1}^{2}m_{2}^{2}\\&=(m_{1}^{2}m_{2}^{2}+n_{1}^{2}n_{2}^{2}+2m_{1}m_{2}n_{1}n_{2})+(m_{1}^{2}n_{2}^{2}+n_{1}^{2}m_{2}^{2}-2m_{1}m_{2}n_{1}n_{2})\end{aligned}$$
> 即得：
> $$ab=(m_1m_2+n_1n_2)^2+(m_1n_2-n_1m_2)^2\in A.$$

---

3. $A\cup B=\varnothing\Leftrightarrow A=\varnothing=B.$
   $A\cup B=A\setminus B\Leftrightarrow B=\varnothing.$
   $A\cap B=A\setminus B\Leftrightarrow A=\varnothing.$
   $A\cup B\subset C\Leftrightarrow A\subset C,B\subset C$
   $A\cup B=A\cap B\Leftrightarrow A=B.$
   $A\setminus B=A\Leftrightarrow B\setminus A=B.$

---

> 例2：
>
> 已知集合$A= \{ ( x, y) \mid ax+ y= 1\}$， $B= \{ ( x, y) \mid x+ ay= 1\}$，
> $C= \{ ( x, y) \mid x^2+ y^2= 1\} $. 问：当$a$ 为何值时，$(A\cup B)\cap C$ 为含有两个元素的集合？
>
> 解法一：集合运算
>
> 由集合的分配律，可知$(A\cup B)\cap C=(A\cap C)\cup(B\cap C)$.
> $A\cap C,B\cap C$分别表示的是下述方程组的解：
> $(I)\begin{cases}ax+y=1\\x^2+y^2=1&\end{cases}$解得$(x,y)=(0,1),(\frac{2a}{1+a^2},\frac{1-a^2}{1+a^2})$
> $(II)\begin{cases}x^2+y^2=1\\x+ay=1&\end{cases}$解得$(x,y)=(1,0),(\frac{1- a^2}{1+a^2},\frac{2a}{1+a^2})$
> 由此，为了使得$(A\cup B)\cap C$只含有两个元素的集合，可得$a=0$或$a=1$.
>
> 解法二：数形结合
>
> 集合$A$与集合$B$分别看作是两条直线，集合$C$看做是一个圆，两直线分别过定点$(0,1)$和$(1,0)$，若两直线与$C$只有两个交点，只存在与以下两种情况：
>
> 1. $AB$共线
> 2. $AB$分别与$C$相切
>
> 综上得出$a=0$或$a=1$.

---

#### 3、可数集、可数无限集

给定集合$X.$
称$X$为有限集，如果$X$是空集或者存在$n\in N$和一一映射$f:\{1,2,\cdots,n\}\to X$，此时称$x$有$n$个元素，记作$|X|=n.$
称$X$为无限集，如果它不是有限集。
称$X$为可数无限集，如果存在一一映射 $f:N\to X$.
称$X$为可数集，如果它是有限集或可数无限集。
称$X$为不可数集，如果它不是可数集。
整数集合$Z$是可数无限集，构造——映射：
$f : N \to Z$
$f(n)=\begin{cases}\frac n2,&n\text{为偶数}\\-\frac{n-1}2,&n\text{为奇数}\end{cases}$

#### 4、集族及其运算

假设$\mathcal{F}$是一集族（即由集合组成的集合）。
(1)集族$\mathcal{F}$中所有集合的并集定义为：
$\bigcup \mathcal{F} = \left \{ x|\text{至少存在一个集合} A\in \mathcal{F} , \text{使得}x\in A\right \}$.
(2)集族$\mathcal{F}$中所有集合的交集定义为：
$\bigcap \mathcal{F} = \left \{ x|\text{对于任意的集合}A\in \mathcal{F} , \text{都有}x\in A\right \}$.
如果集族$\mathcal{F}=\left\{A_1,A_2,\cdots,A_n\right\}$，则集族的并和交分别记为：
$$\bigcup_{i=1}^{n}A_{i},\bigcap_{i=1}^{n}A_{i}$$
如果集族$\mathcal{F}=\left\{A_1,A_2,\cdotp\cdotp\cdotp,A_n,\cdotp\cdotp\cdotp\right\}$，则集族的并和交分别记为：
$$\bigcup_{i=1}^{+\infty}A_{i},\bigcap_{i=1}^{+\infty}A_{i}$$

### 二、映射

#### 1、映射的定义和性质

设$X,Y$为两个集合。

如果对于任一元素$x\in X$，都存在唯一的$y\in Y$与之对应，那么就称定义了一个从$x$到$Y$的映射，记作$f:X\to Y$，$Y$称为$X$在映射$f$下的像，记作 $y=f(x)$，$X$称为映射$f$的定义域。

设$A\subset X,B\subset Y$，定义:

1. 象集：$f(A)=\{f(x)\in Y\mid x\in A\}$
2. 原象集：$f^{-1}(B)=\{x\in X\mid f(x)\in B\}$
   **注意：这里的$f^{-1}$并不一定是一个映射。**

称两个映射$f$和$g$相等，记作$f=g$ ，是指它们的定义域相同（记为$A$），
且对于任意的$x\in A$，有$f(x)=g(x)$.

#### 2、映射的分类

对于映射$f:X\to Y$.

1. 若$f(X)\subset Y$，则称$f$是内射。
2. 若$f(X)=Y$，则称$f$是满射或全射。
3. 若$\forall y\in f(X),f^{-1}(y)$是单点集，则称$f$是单射。
4. 若$f$既是单射又是满射，则称$f$是一一映射或双射。

设$f:X\to Y$ 是一一映射，则可以通过下述方法

1. 若$x\mapsto y$,则$y\mapsto x$$f$是单射等价于：
2. 若$x_1,x_2\in X,x_1\neq x_2$，则$f(x_1)\neq f(x_2)$.
3. 若$x_1,x_2\in X,f(x_1)=f(x_2)$，则$x_1=x_2$.

#### 3、逆映射

作出一个映射$f^{-1}:Y\to X$.也就是说只有当$x$在$f$下的象为$y$，才让$x$与$y$对应。由于$f$是满射，这样就保证了$x$的存在性；由于$f$是单射，这样就保证了$x$的唯一性。由此可得映射$f^{-1}:Y\to X$完全确定，称之为映射$f$的逆映射。

注意到：映射$f^{-1}:Y\to X$也是一一映射。

#### 4、复合映射

定义：设有映射$f:X\to Y$，$g:Y\to Z$，且$g$定义在$f$的值域上，则可用

$$(g\circ f)(x)=g(f(x))$$

确定$X$上的一个新映射$g\circ f:X\to Z$.该映射称为映射$f$与映射$g$的复合。
复合映射的交换律 一般来讲是不成立的。
复合映射有结合律：设$f{:}X\to Y,g{:}Y\to Z,h{:}Z\to W$ ，则：

$$h\circ(g\circ f)=(h\circ g)\circ f\:$$

$$\begin{aligned}\forall x\in X,(h\circ(g\circ f))(x)&=h((g\circ f)(x))=h(g(f(x)))\\&=(h\circ g)(f(x))=((h\circ g)\circ f)(x).\end{aligned}$$

---

> 例3:
>
> 设有映射$f:X\to Y,g:Y\to Z$，证明 :
> (1)若$g\circ f$ 是单射，则 $f$是单射。
> (2)若 $g \circ f$ 是满射，则 $g$ 是满射。
>
> 证：
>
> (1)若对任意的$x_1,x_2\in\ X,f(x_1)=f(x_2)$,则$g(f(x_1))=g(f(x_2)).$
> 由于 $g\circ f$ 是单射，因此有$x_1=x_2$. 即$f$ 是单射。
> (2)由于$g\circ f$是满射，所以对于任意的$z\in Z$,存在$x\in X,g((f(x))=z$
> 也即有$y=f(x)\in Y$,使得$g(y)=z.$于是有$g$是满射。

---

> 例4:
>
> 设有映射$f:X\to Y$，$g:Y\to X$，$\mathrm{id}_X$表示恒等映射，证明：
> (I)若$g\circ f=\mathrm{id}_X$，则$f$是 单 射，$g$是满射。
> (II)若$g\circ f=\mathrm{id}_x$，$f\circ g=\mathrm{id}_Y$，则$f,g$是一一映射，且$f^-1=g,g^{-1}=f$.

---