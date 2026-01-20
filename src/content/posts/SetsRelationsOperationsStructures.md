---
title: 集合、关系、运算、结构
published: 2024-10-04
category: ["数学", "线性代数"]
tags: ["线性代数"]
alias: "setsrelationsoperationsstructures"
---
### 一、集合、子集、幂集、直积

1. 设$A,B$是两个集合，如果$A,B$含的元素全相同，就说$A,B$相等，记作$A=B$。如果对任意的$a\in A$，均有$a\in B$，则称$A$是$B$的子集，或说$A$含于$B$，$B$包含$A$，记作$A\subset B$.
   对任意的集合$A$ ,均有$\emptyset\subset A,A\subset A$.显然，集合$A,B$相等，当且仅当$A\subset B$与$B\subset A$同时成立。

2. 非空集合$A$的所有子集组成的集合称为$A$的幂集，记作：$P(A)$或$2^A$。若集$A$含有$n$个不同元素，则其幂集$P(A)$含有$2^n$个不同元素。例如集合$A=\{a,b,c\}$的幂集：$$P(A)=\{\emptyset,\{a\},\{b\},\{c\},\{a,b\},\{a,c\},\{b,c\},A\}$$

3. 我们把非空集$A, B$的任一对有次序的元素$x\in A,y\in B$叫有序二元组（或称序偶），记作$( x, y)$，并称$x$为第一元素，$y$为第二元素。序偶中的两个元素也可属于同一集合（即$A=B$）。两个序偶$(x_1,y_1),(x_2,y_2)$相等，当且仅当$x_{1}=x_{2},y_{1}=y_{2}$。由集合$A,B$中所有元素构成的序偶组成的集合，叫做集合$A$和$B$的笛卡儿乘积（或称直积），即：
   设$A,B$是两个非空集，我们把集合$A\times B=\{(a,b)\mid a\in A,b\in B\}$称为$A$和$B$的笛卡儿乘积（或称直积）。特别地，当$B=A$时，$A\times A$（也常记作$A^2$）是$A$中一切元素所作成的序偶集合例如，$\mathbf{R} ^{2}= \mathbf{R} \times \mathbf{R}$可表示平面直角坐标系中全部点的坐标的集合。

4. 定义 1.4 设$A,B$是两个集合 ,我们把集合
   $A\cap B=\left\{x\mid x\in A且x\in B\right\}$,
   $A\cup B=\{x\mid x\in A或x\in B\}$,
   $A\backslash B=\{x\mid x\in A$ 但$x\notin B\}$
   分别叫做$A$和$B$的交集，$A$和$B$的并集，$B$在$A$中的余集。余集也可记作$\complement _AB$或 $A-B$，称$A-B$为$A$与$B$的差集。如果$B\in P(X)$，即$B\subset X$，则$B$在$X$中的余集$X\backslash B$常记作$\bar{B}$.


### 二、二元关系及性质

1. 设$X$是一个集合，$R$是涉及两个元素的一个规则，如果对于$X$中的任两个元素$a,b$均可确定它们是适合$R$（记作$aRb$）或不适合$R$（记作$a\bar{R}b$），就称$R$是集$X$中的一个二元关系。如果把$aRb$用序偶（$a,b$）表示，那末集$X$中所有适合关系$R$的元素组组成的集合是$X\times X$的一个子集。因此，我们也可把$X\times X$的一个子集$R$定义为集$X$中的一个二元关系。更一般地，我们把$X\times Y$的一个子集$R$定义为集$X$与$Y$间的一个二元关系。
2. 设$R$是集$X$中的一个二元关系，如果：
   1. 对任意的$a\in X$，均有$aRa$，则称$R$是自反的（或称反身的）；
   2. 对任意的$a,b\in X$，若有$aRb$就有$bRa$，则称$R$是对称的；
   3. 对任意的$a,b\in X$，由$aRb$和$bRa$，可推出$a=b$，则称$R$是反对称的；
   4. 对任意的$a,b,c\in X$，若有$aRb$和$bRc$，就有$aRc$，则称$R$是传递的。关系$R$是自反的、对称的、反对称的和传递的，也常说成$R$具有自反性、对称性、反对称性和传递性。

### 三、等价关系、等价类、商集

1. （等价关系）集合$X$中的一个二元关系$R$称为等价关系，如果$R$是自反的、对称的和传递的。
   例如：数的相等关系、直线的平行关系、三角形的相似关系、多边形的顶点数相等的关系、人口集合中肤色相同或性别相同的关系、平面点集的点在固定直线上投影相同的关系都是等价关系。
2. （元素的等价和等价类）设$R$是集$X$中的一个等价关系，$a,b\in X$，如果$aRb$，则称$a,b$关于$R$是等价的，并把所有与$a$等价的元素集合
   $$\bar{a}\:=\:\{\:x\:|\:xRa\:,x\:\in\:X\}$$
   称为$a$关于$R$的等价类（简称$a$的等价类）。

---

> **定理** 设$R$是集$X$中的一个等价关系，$a,b\in X$，则$\overline{a}=\bar{b}$当且仅当$aRb$.
>
> **证明** 若$\bar{a}=\bar{b}$，则由$a\in\bar{a}=\bar{b}$得$aRb$；反之，若$aRb$，则对任意的$x\in\bar{a}$，即$xRa$，由传递性得$xRb$，即$x\in\bar{b}$，故$\bar{a}\subset\bar{b}$；同理可证$\bar{b}\subset\bar{a}$，因此$\bar{a}=\bar{b}$.
> 通常我们把$a$称为$\bar{a}$的代表元。$\overline{a}$中任一元素$b$均可作为
> $\bar{a}$ 的代表元。

---

> **推论** 若$R$是集$X$中的等价关系，则对任意的$a,b\in X$，只能是$\overline a=\bar{b}$或$\bar{a}\cap\bar{b}=\emptyset$.
>
> **证明** 设$\bar{a}\cap\bar{b}\neq\emptyset$，则存在$x\in\bar{a}\cap\bar{b}$，于是有$xRa$和$xRb$，再由$R$的对称性得$aRx$ ,由$R$的传递性得$aRb$，从而$\overline a=\bar{b}$.

---

> **定理** 若$R$是集$X$中的一个等价关系，则$X$中存在关于$R$的一族互不相交的等价类：
> $$\{\bar{a} _i: a_i\in X, i\in I\}$$
> （其中$I$是所有等价类的代表元$a_i$的下标$i$组成的指标集），使得$X=\bigcup_{i\in I}\overline{a}_i$.
>
> **证明** 由于对任意的$a$，均有$a\in\bar{a}$，所以显然有$X=\bigcup_{a\in X}\overline{a}$。根据推论，这个式子右边的任意两个等价类不是相等就是互不相交，因此，取$\bar{a}(a\in X)$中所有互不相交的$\bar{a}_i(i\in I)$，其并集就等于$X$.

---

3. 以集$X$的等价关系$R$来划分的所有等价类作为元素所组成的集合，称为$X$关于$R$的商集，记作$X/R$.

### 四、序关系、偏序集、全序集、数学归纳法原理

1. 集$X$中的一个二元关系$R$称为偏序关系，如果$R$具有自反性、反对称性和传递性。偏序关系$R$常记作$<$，$a<b$读作“$a$小于或等于$b$”，具有偏序关系$<$的集$X$称为偏序集，记作$(X,<)$.

2. 设$(X,<)$是一个偏序集：
   1. 如果对任意的$a,b\in X$，均有$a<b$或 $b<a$，则称$(X,<)$为全序集，$<$为全序关系。
   2. 如果$X$的任意非空子集都有最小元$a$（即对任意的$x\in A$，均有$a\in A,a<x$），则称$(X,<)$为良序集。

   良序集必是全序集，因为良序集中任两个元素$a,b$组成的子集必有$a<b$或$b<a$.

---

> **定理** 设$M\subset\mathbb{N}^{*}$，如果$1\in M$，且当$n-1\in M$时可推出$n\in M$，则$M=\mathbf{N}^*$。
> **证** 设$M^{\prime}=\mathbf{N}^*\setminus M\neq\emptyset$，则1年$M^{\prime}$，由于$M^{\prime}\subset\mathbf{N}^*$,所以$M^{\prime}$必有最小数$a\notin M$，于是$a>1,a-1\notin M^{\prime}$，即$a-1\in M$，如此由定理假设又得$a\in M$，这与$a\notin M$矛盾。故$M^\prime=\emptyset$，即$M=\mathbf{N}^*$.

---

3. 依据这上面的定理，要证明一个命题对所有正整数成立，只需证明：
   1. 命题对$n=1$成立；
   2. 若命题对$k-1$成立，则命题对$k$也成立。这就是通常的数学归纳法。

此外，数学归纳法还有另一种形式，称为第二数学归纳法。

4. 第二数学归纳法原理：设$P(n)$是与正整数有关的一个命题，如果：
	1. $P(n)$对$n=1$成立；
	2. 假设$P(n)$对任意的$n<k$成立，则$P(n)$对$n=k$也成立，那末命题$P(n)$对一切正整数$n$都成立。

### 五、向量运算

1. 向量内积：向量$a$与$b$的内积$a\cdot b$是一个实数，且$\vec{a}\cdot \vec{b}=\mid \vec{a}\mid\mid \vec{b}\mid\cos\theta$，其中$\theta$为$a$与$b$的夹角（以后 $\theta$ 也常记作$\langle a,b\rangle$），并规定 $0\leqslant \theta \leqslant \pi$. 若$\vec{a}, \vec{b}$ 有一个是零向量，则规定$\vec{a}\cdot \vec{b}=\vec0$.

2. 向量$\vec{a}$与$\vec{b}$的外积$\vec{a}\times \vec{b}$是一个向量，其长度为$\mid \vec{a}\times \vec{b}\mid=\mid \vec{a}\mid\mid \vec{b}\mid\sin\langle \vec{a},\vec{b}\rangle$.
   $a\times b$的方向为：

   1. $\vec{a}\times \vec{b}$与$\vec{a},\vec{b}$都垂直；
   2. $\vec{a},\vec{b},\vec{a}\times \vec{b}$按“右手法则”确定$\vec{a}\times \vec{b}$的指向，即把$\vec{a},\vec{b},\vec{a}\times \vec{b}$的起点放在一起，将右手的四指（不含拇指）伸开由$\vec{a}$转到$\vec{b}$（转过的角度为$\langle \vec{a},\vec{b}\rangle$），此时张开的拇指（与四指垂直）的指向就是$\vec{a}\times \vec{b}$ 的方向（这种由$\vec{a},\vec{b}$确定$\vec{a}\times \vec{b}$的指向的方法称为“右手法则”）。若$\vec{a}, \vec{b}$有一个是零向量，规定$\vec{a}\times \vec{b}= \vec{0}$.

3. 对向量$\vec{a},\vec{b},\vec{c}$，先将$\vec{b},\vec{c}$作外积，再将其与$\vec{a}$作内积，即$\vec{a} \cdot (\vec{b}\times\vec{c})$称为向量的混合积。

   向量$\vec{a},\vec{b},\vec{c}$的混合积是一个数量，它的绝对值$|\vec{a}\cdot(\vec{b}\times \vec{c})|$的几何意义是以$\vec{a},\vec{b},\vec{c}$为邻边的平行六面体的体积。

4. $$\begin{aligned}\boldsymbol{a}\times\boldsymbol{b}&=\begin{vmatrix}\boldsymbol{e}_1&\boldsymbol{e}_2&\boldsymbol{e}_3\\\\a_1&a_2&a_3\\\\b_1&b_2&b_3\end{vmatrix}=\begin{vmatrix}a_2&a_3\\\\b_2&b_3\end{vmatrix}\boldsymbol{e}_1-\begin{vmatrix}a_1&a_3\\\\b_1&b_3\end{vmatrix}\boldsymbol{e}_2+\begin{vmatrix}a_1&a_2\\\\b_1&b_2\end{vmatrix}\boldsymbol{e}_3\\\boldsymbol{a}\cdot(\boldsymbol{b}\times\boldsymbol{c})&=\begin{vmatrix}a_1&a_2&a_3\\\\b_1&b_2&b_3\\\\c_1&c_2&c_3\end{vmatrix}=a_1\begin{vmatrix}b_2&b_3\\\\c_2&c_3\end{vmatrix}-a_2\begin{vmatrix}b_1&b_3\\\\c_1&c_3\end{vmatrix}+a_3\begin{vmatrix}b_1&b_2\\\\c_1&c_2\end{vmatrix}\end{aligned}$$

   其中二阶行列式的定义为：

   $$\begin{vmatrix}a&b\\\\c&d\end{vmatrix}=ad-bc$$

### 六、代数结构：群、环、域

#### 1、群

代数系统$\langle G: \circ \rangle$称为群，如果：

  1. 运算封闭性。

  2. 运算$\circ$满足结合律，即$\forall a,b,c\in G,a\circ(b\circ c)=(a\circ b)\circ c$

  3. $G$关于运算$\circ$存在单位元，即$\exists e\in G$，使 $\forall a\in G$，有 $a\circ e=e\circ a=a$

  4. $G$中每个元素关于$\circ$都可逆，即$\forall a\in G,\exists b\in G$使得$a\circ b=$ $b\circ a=e$（单位元），并称$a$为可逆元，$b$为$a$的逆元，记作$b=a^{-1}$.

​	 $\left\langle G:\circ\right\rangle$是一个群，也说$G$关于$\circ$构成群。如果运算还满足交换律，即$\forall a,b\in G$，有$a\circ b=b\circ a$，则称$\langle G: \circ \rangle$为交换群，也称Abel群。
​	当$\langle G:\circ\rangle$适合条件1时称之为半群。所以说，半群是一个带有结合律的二元运算的非空集合。

​	当$\langle G:\circ\rangle$适合条件1和2时，称之为含幺半群。

​	如果群$G$的子集$H$关于$G$的运算也构成群，则称$H$为$G$的子群，记作$H\leq G$。

#### 2、环

代数系$\langle R:+,\circ\rangle$称为环，如果:

1. $\langle R:+\rangle$是交换群（加法群），其单位元记作$0$（也称为环$R$的乘法零元）；

  2. $\langle R: \circ\rangle$是半群；
  3. 运算“$\circ$”对“$+$”满足左、右分配律，即$\forall a,b,c\in R,a\left ( \:b\:+ \:c\:\right ) = ab$ + $ac$ ; $(b+c)a=ba+ca.$

  	定义中的(3)是重要的，没有它，$R$只是对“$+$”和“$\circ$”分别构成交换群和半群，而不能成为区别于群结构的另一种代数结构。

 	 如果环$\langle R:+,\circ\rangle$ 中的乘法满足交换律。则称其为交换环；如环关于乘法存在单位元（乘法单位元$e$ 也常记作$1$），则称之为含幺环。

#### 3、域

代数系$\langle F:+,\circ \rangle$称为一个域，如果它是至少含有两个元的交换环，且$F\backslash\{0\}$关于乘法运算是交换群。

​	由定义可见，$F$至少含加法单位元（即环的零元$0$）和乘法单位元$e$.

​	任一个数集对于数的加法和乘法要构成一个域都必须含$0$和$1$.有理数集$\mathbb{Q}$、实数集$\mathbb{R}$和复数集$\mathbb{C}$对数的加法和乘法都构成域，分别称为有理数域、实数域、复数域。
​	根据域的公理化定义，数集$F$对数的加法和乘法构成数域的条件也可表述为：数集$F$含$0$，$1$，且对数的加、减、乘、除（除数不为$0$）运算封闭。这是因为：对减法封闭即（$\forall a,b\in F,a-b\in F$）保证了$F$中任何非零数$a$对加法可逆（即$(-a)=0-a\in F$）；对除法封闭（即$\forall a,b\in F$，且$a\neq0$，均有$\frac ba\in F$）保证了$F$中任何非零数$a$对乘法可逆（即$a^-1=\frac1a\in F$）。
