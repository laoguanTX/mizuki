---
title: 线性代数基本定义定理
published: 2025-01-05
category: ["数学", "线性代数"]
tags: ["线性代数"]
alias: "basicdefinitionsandtheoremsoflinearalgebra"
---
## 一、线性空间

### 1、定义：线性空间

设$V$ 是一个非空集合，$\mathbf{F}$ 是一个数域，我们定义两种运算，其中第一个运算是我们， 熟知的加法$+$。在线性空间的定义中，我们要求$\langle V:+\rangle$构成 Abel 群，即其中元素满足如下运算律：

1. （加法结合律）$\alpha + ( \beta + \gamma ) = ( \alpha + \beta ) + \gamma$, $\forall \alpha , \beta , \gamma \in V$ 

2. （加法单位元）$\exists0\in V$使得$\forall\alpha\in V$有$\alpha+0=0+\alpha=\alpha$
3. （逆元） $\forall \alpha \in V$，$\exists \beta \in V$，有$\alpha+\beta=\beta+\alpha=0$，记$\beta=-\alpha$
4. （交换律）$\forall \alpha , \beta \in V$， $\alpha + \beta = \beta + \alpha$

第二种运算和之前学习的其他代数结构不同，我们需要首先引人一个数域$\mathbf{F}$,接下来在$\mathbf{F}\times V$上定义取值于$V$的数乘运算，即$\mathbf{F}\times V$中的每个元素$(\lambda,\alpha)\mapsto\lambda\alpha\in V$, 并且数乘运算满足以下性质：$\forall \alpha , \beta \in V$, $\forall \lambda , \mu \in \mathbf{F}$以及$\mathbf{F}$上的乘法单位元 1,有

1. （数乘单位元）$1\cdot\alpha=\alpha$

2. （数乘结合律）$\lambda ( \mu \alpha ) = ( \lambda \mu ) \alpha$

3. （左分配律）$(\lambda+\mu)\alpha=\lambda\alpha+\mu\alpha$

4. （右分配律）$\lambda(\alpha+\beta)=\lambda\alpha+\lambda\beta$

### 2、定义：同构

设$V(\mathbf{F})$和$W(\mathbf{F})$是数域$\mathbf{F}$上的线性空间，若映射$\varphi{:}V(\mathbf{F})\to W(\mathbf{F})$满足：
$$
\varphi(\alpha+\beta)=\varphi(\alpha)+\varphi(\beta),\:\forall\alpha,\beta\in V(\mathbf{F})
$$
$$
\varphi(\lambda\alpha)=\lambda\varphi(\alpha),\:\forall\alpha\in V(\mathbf{F}),\:\forall\lambda\in\mathbf{F}
$$
则称$\varphi$是从$V(\mathbf{F})$到$W(\mathbf{F})$的一个同态，若$\varphi$是双射，则称$\varphi$是从$V(\mathbf{F})$到$W(\mathbf{F})$ 的一个同构，若$\varphi$是从$V(\mathbf{F})$到$W(\mathbf{F})$的一个同构，则称线性空间$V(\mathbf{F})$和$W(\mathbf{F})$ 是同构的，记为$V(\mathbf{F})\cong W(\mathbf{F})$。

### 3、定义：线性子空间

设$W$是线性空间$V(\mathbf{F})$的非空子集，如果$W$对$V$中的运算也构成域$\mathbf{F}$上的线性空间，则称$W$ 是$V$的线性子空间（简称子空间）。

### 4、定理：子空间判定的充要条件

数域$\mathbf{F}$上的线性空间$V(\mathbf{F})$的非空子集$W$为$V$的子空间的充分必要条件是$W$对于$V(\mathbf{F})$ 的线性运算封闭。

### 5、定义：线性表示与线性扩张

设$V(\mathbf{F})$是一个线性空间，$\alpha _i\in V$, $\lambda _i\in \mathbf{F} ( i= 1, 2, \ldots , m)$，则向量$\alpha=\lambda_1\alpha_1+$ $\lambda_{2}\alpha_{2}+\cdots+\lambda_{m}\alpha_{m}$称为向量组$\alpha_1,\alpha_{2},\ldots,\alpha_{m}$在域$\mathbf{F}$的线性组合，或说$\alpha$在域$\mathbf{F}$上可用向量组$\alpha_1,\alpha_2,\ldots,\alpha_m$线性表示。

### 5、定义：线性扩张

设$S$是线性空间$V(\mathbf{F})$的非空子集，我们称：
$$
\operatorname{span}(S)=\{\lambda_1\alpha_1+\dots+\lambda_k\alpha_k\mid\lambda_1,\dots,\lambda_k\in\mathbf{F},\:\alpha_1,\dots,\alpha_k\in S,\:k\in\mathbf{N}_+\}
$$
或：
$$
L(S)=\{\lambda_1\alpha_1+\dots+\lambda_k\alpha_k\mid\lambda_1,\dots,\lambda_k\in\mathbf{F},\:\alpha_1,\dots,\alpha_k\in S,\:k\in\mathbf{N}_+\}
$$
为$S$的线性扩张，即$S$中所有有限子集在域$\mathbf{F}$上的一切线性组合组成的$V(\mathbf{F})$的子集。

### 6、定理：线性扩张与线性子空间关系

线性空间$V(\mathbf{F})$的非空子集$S$的线性扩张$\operatorname{span}(S)$是$V$中包含$S$的最小子空间。

### 7、定义：线性相关与线性无关

设$V(\mathbf{F})$是一个线性空间，$\alpha_1,\alpha_2,\ldots,\alpha_m\in V$，若存在不全为$0$的$\lambda_1,\lambda_2,\ldots,\lambda_m\in\mathbf{F}$，使得：
$$
\lambda_1\alpha_1+\lambda_2\alpha_2+\cdots+\lambda_m\alpha_m=0
$$
成立，则称：$\alpha _1, \alpha _2, \ldots , \alpha _m$线性相关，否则称线性无关（即系数只能为$0$）。

### 8、定理：线性相关的等价表述

1. 向量组线性相关$\Longleftrightarrow$它们有系数不全为$0$的线性组合等于零向量。
2. 向量组线性无关$\Longleftrightarrow$它们只有系数全为$0$的线性组合才会等于零向量。
3. 向量组线性相关$\Longleftrightarrow$其中至少有一个向量可以由其余向量线性表示。
4. 向量组线性无关$\Longleftrightarrow$其中每一个向量都不能由其余向量线性表示。

### 9、定理：线性相关判定的充要条件

线性空间$V(\mathbf{F})$中的向量组$\alpha_1,\alpha_2,\ldots,\alpha_m$ $(m\geqslant2)$线性相关的充分必要条件是$\alpha_1,\alpha_2,\ldots,\alpha_m$中有一个向量可由其余向量在域$\mathbf{F}$上线性表示。

### 10、定理：线性表示唯一性

若向量组$\alpha_1,\alpha_2,\ldots,\alpha_m$线性无关，而向量组$\beta,\alpha_1,\alpha_2,\ldots,\alpha_m$线性相关，则$\beta$可由$\alpha_1,\alpha_2,\ldots,\alpha_m$线性表示，且表示法唯一。

### 11、定义：极大线性无关组和秩

设向量组$S=\{\alpha_1,\alpha_2,\ldots,\alpha_m\}$张成的线性空间为$V$,若存在$S$的一个线性无关向量组$B=\{\alpha_k1,\alpha_{k2},\ldots,\alpha_{kr}\}$,使得$V=\operatorname{span}(B)$，则称$B$为$S$的一个极大线性无关组，并称极大线性无关组的长度$r=r(S)$为$S$的秩。

### 12、定理：秩与线性相关的关系

设$V(\mathbf{F})$中向量组$\beta_1,\beta_2,\ldots,\beta_s$的每个向量可由另一向量组$\alpha_1,\alpha_2,\ldots,\alpha_r$线性表示。若$s>r$，则$\beta_{1},\beta_{2},\ldots,\beta_{s}$线性相关。

### 13、定义：基与维数

若线性空间$V(\mathbf{F})$的有限子集$B=\{\alpha_1,\alpha_2,\ldots,\alpha_n\}$线性无关，且 span$(B)=V$，称$B$为$V$的一组基，并称$n$为$V$的维数，记作$\dim V=n$。

### 14、定理：基的扩充

如果$W$是$n$维线性空间$V$的一个子空间，则$W$的基可以扩充为$V$的基。

### 15、定义：有限维线性空间和无限维线性空间

$V(\mathbf{F})$称为有限维线性空间，如果$V$中存在一个有限子集$S$使得$L(S)=V$，反之称为无限维线性空间。

### 16、定理：初等行变换不改变列的线性相关性

如标题。

### 17、定义：向量的坐标

设$B=\{\beta_1,\beta_2,\ldots,\beta_n\}$是$n$维线性空间$V(\mathbf{F})$的一组基，如果$V$中元素$\alpha$表示为$\alpha=a_{1}\beta_{1}+a_{2}\beta_{2}+\cdots+a_{n}\beta_{n}$，则其系数组$a_1,a_{2},\ldots,a_{n}$称为$\alpha$在基$B$下的坐标， 记为$\alpha_B=(a_1,a_2,\ldots,a_n)$。

### 18、定理：替换定理

设$\alpha_1,\alpha_2,\ldots,\alpha_r$线性无关，且可以被$\beta_1,\beta_2,\ldots,\beta_n$线性表示，则可以将$\beta_1,\beta_2,\ldots,\beta_n$中的$r$个向量替换成$\alpha_1,\alpha_2,\ldots,\alpha_r$后得到与$\beta_1,\beta_2,\ldots,\beta_n$等价的新向量组。

## 二、线性空间的运算

### 1、定义：线性空间的交、并、和

设$W_1,W_2$是线性空间$V(\mathbf{F})$的两个子空间，则：
$$
\begin{aligned}&W_{1}\cap W_{2}=\{\alpha\mid\alpha\in W_{1}\text{ 且 }\alpha\in W_{2}\}\\&W_{1}\cup W_{2}=\{\alpha\mid\alpha\in W_{1}\text{ 或 }\alpha\in W_{2}\}\\&W_{1}+W_{2}=\{\alpha_{1}+\alpha_{2}\mid\alpha_{1}\in W_{1},\:\alpha_{2}\in W_{2}\}\end{aligned}
$$
分别称为$W_1$ 和$W_2$ 的交、并、和。

### 2、定理：线性空间和、交、并的性质

设$W_1,W_2$是线性空间$V(\mathbf{F})$的两个子空间，则

1. $W_1\cap W_2$ 是$V$ 的子空间；
2. $W_{1}+ W_{2}$ 是$V$ 的子空间；
3. $W_1\cup W_2$ 为$V$的子空间 $\Longleftrightarrow W_1\subseteq W_2$ 或$W_2\subseteq W_1\Longleftrightarrow W_1\cup W_2=W_1+W_2$。

### 3、定理：覆盖定理

设$V_1,V_2,\ldots,V_s$是数域$\mathbf{F}$上线性空间$V(\mathbf{F})$的$s$个非平凡子空间，$V$中至少存在一个向量不属于$V_1,V_2,\ldots,V_s$中的任何一个，即$V_1\cup V_2\cup\cdots\cup V_s\subsetneq V$。

### 4、定理：维数公式

设$W_1,W_2$是线性空间$V(\mathbf{F})$的两个子空间，则$\dim W_{1}+\dim W_{2}=\dim(W_{1}+W_{2})+\dim(W_{1}\cap W_{2})$。

### 5、定义：线性空间的直和、补空间

设$W_1,W_2$是线性空间$V(\mathbf{F})$的两个子空间。若$W_1\cap W_2=\{0\}$，则$W_1+W_2$叫做$W_1$与$W_2$的直和，记作$W_1\oplus W_2$。进一步地，若$V=W_1\oplus W_{2}$，则称$W_1,W_{2}$为互补子空间，或$W_1$是$W_2$的补空间，或$W_2$是$W_1$的补空间。

### 6、定理：直和的性质

对于子空间$W_1,W_2$,下列命题等价：
1. $W_1+ W_2$是直和 ,即$W_1\cap W_2=\{0\}$
2. $W_1+ W_2$中的每个向量$\alpha$的分解式$\alpha = \alpha _1+ \alpha _2$ $( \alpha _1\in W_1$, $\alpha _2\in W_2)$唯一。
3. 零向量的分解式$\mathbf{0}=\alpha_1+\alpha_2$ $( \alpha _1\in W_1$, $\alpha _2\in W_2)$仅当$\alpha_1=\alpha_2=\mathbf{0}$时成立。
4. $\dim ( W_{1}+ W_{2}) = \dim W_{1}+ \dim W_{2}$

## 三、线性映射

### 1、定义：线性映射

从线性空间$V_1(\mathbf{F})$到$V_2(\mathbf{F})$的一个映射$\sigma$是线性的，如果$\forall\alpha,\beta\in V_1$和$\forall\lambda,\mu\in\mathbf{F}$
都有：
$$
\sigma(\lambda\alpha+\mu\beta)=\lambda\sigma(\alpha)+\mu\sigma(\beta)
$$
从线性空间$V$到自身的线性映射$\sigma$也叫作$V$上的线性变换，在有的教材中也称为算子。从线性空间$V(\mathbf{F})$到域$\mathbf{F}$的线性映射$f$叫作$V$上的线性泛函（或称线性函数，线性形式）。为方便称呼，我们称对于$V_1(\mathbf{F})$到$V_2(\mathbf{F})$的线性映射$\sigma,V_1(\mathbf{F})$是其出发空间，$V_2(\mathbf{F})$是其到达空间，也可简记为$\sigma:V_1\to V_{2}$。

### 2、定理：零向量的线性映射

设$\sigma$是线性空间$V_1(\mathbf{F})$到$V_2(\mathbf{F})$的线性映射，则$\sigma(0_1)=0_2$。

### 3、定理：线性相关的传递

设$\sigma$是线性空间$V_1(\mathbf{F})$到$V_2(\mathbf{F})$的线性映射，如果$V_1$中向量$\alpha_1,\alpha_2,\ldots,\alpha_n$线性相关，则$\sigma(\alpha_1),\sigma(\alpha_{2}),\ldots,\sigma(\alpha_{n})$ 也线性相关。反之，若$\sigma(\alpha_1),\sigma(\alpha_{2}),\ldots,\sigma(\alpha_{n})$线性无关，则$\alpha_1,\alpha_{2},\ldots,\alpha_{n}$必线性无关。

### 4、定义：线性映射的基本运算

设$\sigma,\tau\in\mathcal{L}(V_1,V_2)$，规定$\sigma$与$\tau$之和及$\lambda$与$\sigma$的数乘$\lambda\sigma$分别为
$$
\begin{matrix}(\sigma+\tau)(\alpha)=\sigma(\alpha)+\tau(\alpha),&\forall\alpha\in V_1\end{matrix}
$$
$$
(\lambda\sigma)(\alpha)=\lambda(\sigma(\alpha)),\:\forall\alpha\in V_1
$$

以及线性映射的复合运算：

$\tau\sigma(\alpha)=\tau(\sigma(\alpha)),\:\forall\alpha\in V_{1}$

### 5、定理：线性映射构成线性空间

$\mathcal{L}(V_1,V_2)$与上述定义的线性映射加法和数乘构成域$\mathbf{F}$上的线性空间。$\tau\sigma$是线性映射，逆映射$\sigma^{-1}$为线性映射。

### 6、定义：线性映射的像与核

设$\sigma$是线性空间$V_1(\mathbf{F})$到$V_2(\mathbf{F})$的线性映射。$V_1$的所有元素在$\sigma$下的像组成的集合：
$$
\sigma(V_1)=\{\beta\mid\beta=\sigma(\alpha),\:\alpha\in V_1\}
$$
称为$\sigma$的像（或值域），记作$\mathrm{Im}\:\sigma$，或记作$\mathrm{range}\:\sigma。$
$V_{2}$的零元$0_2$在$\sigma$下的完全原像：
$$
\sigma^{-1}(0_2)=\{\alpha\mid\sigma(\alpha)=0_2,\:\alpha\in V_1\}
$$
称为$\sigma$的核（或零空间），记作$\mathrm{Ker}\:\sigma$，或记作$\mathrm{Null}\:\sigma$。

### 7、定理：单射的判定

线性映射$\sigma$是单射当且仅当$\mathrm{Ker}\:\sigma=\{0\}$。

### 8、定理：映射的唯一性

1. 已知线性映射$\sigma,\tau\in\mathcal{L}(V_1,V_2)$，且有$V_1$的基$B=\{\alpha_1,\alpha_2,\ldots,\alpha_n\}.$若$\sigma(\alpha_i)=\tau ( \alpha _{i})$, $\forall \alpha _{i}\in B$，则有$\sigma=\tau$。
2. 设$B=\{\alpha_{1},\alpha_{2},\ldots,\alpha_{n}\}$是$V_1$的基，$S=\{\beta_{1},\beta_{2},\ldots,\beta_{n}\}$是$V_{2}$中任意$n$个向量，则存在唯一的$\sigma\in\mathcal{L}(V_1,V_2)$使得$\sigma(\alpha_i)=\beta_i,~i=1,2,\ldots,n$。

### 9、定义：线性映射的秩

设$\sigma\in\mathcal{L}(V_1,V_2)$,如果$\sigma(V_1)$是$V_2$的有限维子空间，则$\sigma(V_1)$的维数称为$\sigma$的秩记作$r(\sigma)$，即$r(\sigma)=\dim\sigma(V_{1})$。

### 10、定理：线性映射基本定理

设$\sigma\in\mathcal{L}(V_1,V_2)$，若$\dim V_1=n$，则：
$$
r(\sigma)+\dim\ker\sigma=n
$$

### 11、定理：线性映射基本定理推论

对$\sigma\in\mathcal{L}(V_1,V_2)$且$\dim V_1=\dim V_2=n$,下列条件等价：

1. $\ker \sigma = \{ 0\}$

2. $\sigma$ 为单射

3. $\sigma$ 为满射

4. $\sigma$为双射（可逆）

5. $r( \sigma ) = n$

### 12、定义：线性空间的同构

如果由线性空间$V_1(\mathbf{F})$到$V_2(\mathbf{F})$存在一个线性双射$\sigma$，则称$V_1(\mathbf{F})$和$V_2(\mathbf{F})$是同构的，记作$V_1(\mathbf{F})\cong V_2(\mathbf{F})$。$\sigma$称为$V_1(\mathbf{F})$到$V_2(\mathbf{F})$的一个同构映射。

### 13、定理：同构映射的秩不变

设$\sigma$是$V_1$到$V_2$的同构映射，$S_1=\{\alpha_1,\alpha_2,\ldots,\alpha_m\}$是$V_1$的任意一组向量， $S_{2}=\{\sigma(\alpha_{1}),\sigma(\alpha_{2}),\ldots,\sigma(\alpha_{m})\}$,则$r(S_{1})=r(S_{2})$，即同构映射保持映射前后向量组秩不变。

### 14、定理：同构的等价条件

两个线性空间$V_1(\mathbf{F})$和$V_2(\mathbf{F})$同构的充要条件是它们的维数相等。

## 四、矩阵

### 1、定义：矩阵

域$\mathbf{F}$中的$m\times n$个元素$a_{ij}$ $(i=1,\ldots,m,j=1,\ldots,n)$排成$m$行$n$列的矩形数表，称为域$\mathbf{F}$上的一个$m\times n$矩阵，记作：
$$
A=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}
$$
或简记为$(a_{ij})_{m\times n}$,其中$a_{ij}$表示矩阵$A$的第$i$行第$j$列的元素。

### 2、定理：线性映射的矩阵表示

任意的$\mathbf{F}^n\to\mathbf{F}^m$的线性映射$\sigma$都可以写成$\sigma(x)=Ax$的形式，其中$A$是一个$m\times n$ 的矩阵，并且符合要求的矩阵是唯一的。

### 3、定义：线性映射在基下的矩阵表示

设$B_1=\{\varepsilon_1,\varepsilon_2,\ldots,\varepsilon_n\}$是$V_1(\mathbf{F})$的基，$B_2=\{\alpha_1,\alpha_2,\ldots,\alpha_m\}$是$V_2(\mathbf{F})$的基。则线性映射$\sigma\in\mathcal{L}(V_1,V_2)$被它作用于基$B_{1}$的像：
$$
\sigma(B_1)=\{\sigma(\varepsilon_1),\sigma(\varepsilon_2),\ldots,\sigma(\varepsilon_n)\}
$$
所唯一确定，而$\sigma(B_1)$是$V_2$的子空间，于是其中元素都可以被基$B_{2}$线性表示，即：
$$
\begin{cases}\sigma(\varepsilon_1)=a_{11}\alpha_{1}+a_{21}\alpha_{2}+\cdots+a_{m1}\alpha_{m}\\\sigma(\varepsilon_2)=a_{12}\alpha_{1}+a_{22}\alpha_{2}+\cdots+a_{m2}\alpha_{m}\\\qquad \vdots\\\sigma(\varepsilon_3)=a_{1n}\alpha_{1}+a_{2n}\alpha_{2}+\cdots+a_{mn}\alpha_{m}\end{cases}
$$
将$\sigma(B_{1})=\{\sigma(\varepsilon_{1}),\sigma(\varepsilon_{2}),\ldots,\sigma(\varepsilon_{n})\}$关于基$B_{2}$的坐标排列成矩阵$\mathbf{M}(\sigma)$，即：
$$
\mathbf{M}(\sigma)=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix}
$$
称$\mathbf{M}(\sigma)$为$\sigma$在基$B_1$和$B_2$下的矩阵表示，有时也称线性映射在基下的表示矩阵。

### 4、定义：矩阵加法与数乘运算

1. 加法：设 $A=(a_ij)_{m\times n},B=(b_{ij})_{m\times n}\in\mathbf{F}^{m\times n}$ 为矩阵，则定义：
    $$
    A+B=\begin{pmatrix}a_{11}+b_{11}&a_{12}+b_{12}&\cdots&a_{1n}+b_{1n}\\a_{21}+b_{21}&a_{22}+b_{22}&\cdots&a_{2n}+b_{2n}\\\cdots\\a_{m1}+b_{m1}&a_{m2}+b_{m2}&\cdots&a_{mn}+b_{mn}\end{pmatrix}
    $$
2. 数乘：对$\lambda\in\mathbf{F}$，定义：
    $$
    \lambda A=\begin{pmatrix}\lambda a_{11}&\lambda a_{12}&\cdots&\lambda a_{1n}\\\lambda a_{21}&\lambda a_{22}&\cdots&\lambda a_{2n}\\\vdots&\vdots&\ddots&\vdots\\\lambda a_{m1}&\lambda a_{m2}&\cdots&\lambda a_{mn}\end{pmatrix}
    $$

### 5、定理：线性映射与矩阵的同构

设$V_1,V_2$分别是$n$维和$m$维线性空间，则$\mathcal{L}(V_1,V_2)\cong\mathbf{F}^{m\times n}$是同构的。

### 6、定理：线性映射对向量坐标的影响

设$\sigma\in\mathcal{L}(V_1,V_2)$关于$V_1$和$V_2$的基$B_1$和基$B_2$的矩阵为$A=(a_ij)_m\times n$，且$\alpha$与$\sigma(\alpha)$在基$B_1=(\alpha_1,\ldots,\alpha_n)$和$B_2=(\beta_1,\ldots,\beta_m)$下的坐标分别为$X$和$Y$，则$Y=AX$。

### 7、定义：矩阵乘法

设$A=(a_ij)_{p\times m},B=(b_{ij})_{m\times n}$，我们定义$A$与$B$的乘积矩阵$C=AB=(c_ij)_{p\times n}$是一个$p\times n$矩阵，其中它的第$i$行第$j$列元素为矩阵$A$的第$i$行与矩阵$B$的第$j$列对应位置元素相乘后求和的结果，即：
$$
c_{ij}=\sum\limits_{k=1}^{m}a_{ik}b_{kj}=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{im}b_{mj}\:(i=1,\ldots,p,\:j=1,\ldots,n)
$$

### 8、定理：矩阵乘法的性质

1. $( AB) C= A( BC)$（结合律）

2. $\lambda ( AB) = ( \lambda A) B= A( \lambda B) ,\lambda \in \mathbf{F}$

3. $A( B+ C) = AB+ AC$（左分配律）

4. $( B+ C) P= BP+ CP$（右分配律）

### 9、定义：矩阵的逆

设$A\in\mathbf{M}_n(\mathbf{F})$。若存在$B\in\mathbf{M}_n(\mathbf{F})$使得$AB=BA=E_n$（不刻意强调时可以省略$n$），则称矩阵$A$可逆，并把$B$称为$A$的逆矩阵，记作$B=A^-1$，在一些比较经典的教材中可逆矩阵也被称为非奇异矩阵，不可逆矩阵被称为奇异矩阵

### 10、定理：逆矩阵的性质

1. 可逆矩阵的逆矩阵唯一。
2. 主对角元都是非零数的对角矩阵一定可逆，且逆矩阵就是对角线上元素取倒数（单位矩阵即为特例，其逆矩阵是其自身）；
3. 注意没有加法性质（例如$A$可逆，则$-A$也可逆，但$A+(-A)=O$不可逆）。
4. 对于数乘有$(\lambda A)^-1=\lambda^{-1}A^{-1},( AB) ^{- 1}= B^{- 1}A^{- 1},( A_1A_2\cdots A_k) ^{- 1}= A_k^{- 1}\cdots A_2^{- 1}A_1^{-1}$
5. $( A^{k}) ^{- 1}= ( A^{- 1}) ^{k}$, $A^{k}A^{m}= A^{k+ m}$, $( A^{k}) ^{m}= A^{km}$注意这里的$k$和$m$不一定需要非负，事实上负数就是逆矩阵的幂次或幂次的逆，如$A^{-2}=(A^{-1})^2=(A^2)^{-1}$
6. 若$A$可逆，则消去律成立，即$AB=AC\Longrightarrow B=C$成立，若$A$可逆且$AB=O$ (或$BA=O)$可以推出$B=O$ (令$C=O$即可)。更进一步地，回忆在不可逆矩阵的情况下，即使$A\neq O$且$B\neq O$ ,我们也可能有$AB=O$，但当$A$（或$B$）可逆时， 根据前面的结论可知$B$ (或$A$）必然为零矩阵，因此不可能存在这样的情况。

### 11、定义：矩阵的转置

设$A=(a_{ij})_{m\times n}$，则$A$的转置矩阵是一个$n\times m$矩阵，记作$A^\mathrm{T}$，它的第$k$行正好是$A$的第$k$列$(k=1,2,\ldots,n)$，它的第$r$列正好是$A$的第$r$行$(r=1,2,\ldots,m)$

### 12、定理：矩阵转置的性质


1. $( A^{\mathrm{T} }) ^{\mathrm{T} }= A$

2. $( A+ B) ^{\mathrm{T} }= A^{\mathrm{T} }+ B^{\mathrm{T} }$

3. $( \lambda A) ^{\mathrm{T} }= \lambda A^{\mathrm{T} }$, $\lambda \in \mathbf{F}$

4. $( AB) ^{\mathrm{T} }= B^{\mathrm{T} }A^{\mathrm{T} }$, $( A_{1}A_{2}\cdots A_{n}) ^{\mathrm{T} }= A_{n}^{\mathrm{T} }\cdots A_{2}^{\mathrm{T} }A_{1}^{\mathrm{T} }$, $( A^{\mathrm{T} }) ^{m}= ( A^{m}) ^{\mathrm{T} }$

5. $( A^{\mathrm{T} }) ^{- 1}= ( A^{- 1}) ^{\mathrm{T} }$

### 13、定义：对称矩阵与反对称矩阵

没$A=(a_{ij})_{n\times n}$，如果$\forall i,j\in\{1,2,\ldots,n\}$均有$a_ij=a_{ji}$，则称$A$为对称矩阵。若均有$a_{ij}=-a_{ji}$,则称$A$为反对称矩阵。

### 14、定理：对称矩阵与反对称矩阵的性质

1. 反对称矩阵主对角元均为$0$

2. $AA^{\mathrm{T}}$和$A^{\mathrm{T}}A$均为对称矩阵

3. 设$A,B$为$n$阶对称和反对称矩阵，则$AB+BA$是反对称矩阵

4. 对称矩阵的乘积不一定对称

5. 可逆的对称(反对称)矩阵的逆矩阵也是对称（反对称）矩阵

### 15、定义：分块矩阵

一般地，对于$m\times n$矩阵$A$,如果在行的方向分成$s$块，在列的方向分成$t$块，就得到$A$的一个$s\times t$分块矩阵，记作$A= ( A_{kl}) _{s\times t}$，其中$A_{kl}(k=1,\ldots,s,l=1,\ldots,t)$称为$A$的子块。

### 16、定理：分块矩阵的性质

1. 分块矩阵的加法：设分块矩阵$A=(A_kl)_{s\times t},B=(B_{kl})_{s\times t}$.如果$A$与$B$对应的子块$A_{kl}$和$B_{kl}$都是同型矩阵，则：

   $$
   A+B=(A_{kl}+B_{kl})_{s\times t}
   $$

2. 分块矩阵的数乘：设分块矩阵$A=(A_{kl})_{s\times t},\lambda$是一个数，则：
   $$
   \lambda A=(\lambda A_{kl})_{s\times t}
   $$

3. 分块矩阵的乘法：设$A=(a_ij)_{m\times n},B=(b_{ij})_{n\times p}$,如果把$A,B$分别分块为$r\times s$和
    $s\times t$分块矩阵，且$A$的列分块法与$B$的行分块法相同 (注意这些条件始终保证可乘
    性成立），则：

$$
  AB=\begin{pmatrix}A_{11}&A_{12}&\cdots&A_{1s}\\A_{21}&A_{22}&\cdots&A_{2s}\\\vdots&\vdots&\ddots&\vdots\\A_{r1}&A_{r2}&\cdots&A_{rs}\end{pmatrix}\begin{pmatrix}B_{11}&B_{12}&\cdots&B_{1t}\\B_{21}&B_{22}&\cdots&B_{2t}\\\vdots&\vdots&\ddots&\vdots\\B_{s1}&B_{s2}&\cdots&B_{st}\end{pmatrix}=C=(C_{kl})_{r\times t}
$$

  其中$C$是$r\times t$分块矩阵，且$C_{kl}$与一般矩阵计算类似，即为$A$第$k$行块$B$的$l$列块对应元素相乘后相加，即：$C_{kl}= A_{k1}B_{1l}+ A_{k2}B_{2l}+ \cdots + A_{ks}B_{sl}$, $k= 1, \ldots , r$, $l= 1, \ldots , t$

4. 分块矩阵的转置：大、小矩阵都要转置，这是分块矩阵与普通矩阵的一大性质差异；即$s\times t$分块矩阵$A=\underset{\mathrm{T}}{\operatorname*{\operatorname*{\operatorname*{T}}}}(A_{kl})_{s\times t}$转置后$A^\mathrm{T}=(B_{lk})_{t\times s}$为$t\times s$分块矩阵，且$B_lk=A_{kl}^\mathrm{T}$。例如$\begin{pmatrix}A_{11}&A_{12}\\A_{21}&A_{22}\end{pmatrix}^{\mathrm{T}}=\begin{pmatrix}A_{11}^{\mathrm{T}}&A_{21}^{\mathrm{T}}\\A_{12}^{\mathrm{T}}&A_{22}^{\mathrm{T}}\end{pmatrix}$

## 五、相抵标准型

### 1、定义：矩阵的秩

由于$A$是$\mathbf{F}^n\to\mathbf{F}^m$的线性映射，定义秩$r(A)=\dim\operatorname{Im}A$。我们将矩阵$A$的所有行向量组成的秩称为$A$的行秩，常记为$r_\mathrm{r}$。所有列向量组成的向量组的秩称为$A$的列秩，常记为$r_c$。

### 2、定理：矩阵秩的性质

任意矩阵$A=(a_{i,j})_{m\times n}$的秩$=$行秩$=$列秩。

### 3、定理：线性映射类型与其对应表示矩阵关系

线性映射是单射当且仅当其矩阵表示为列满秩矩阵，线性映射是满射当且仅当其矩阵表示为行满秩矩阵。

### 4、定理：可逆矩阵与线性相关关系

设$A\in\mathbf{M}_{n}(\mathbf{F})$，则下列命题等价：

1. $A$ 可逆

2. $r( A) = n$

3. $A$的$n$个行（列）向量线性无关

4. 齐次线性方程组$AX=0$只有零解

### 5、定义：过渡矩阵

设$B_1=\{\alpha_1,\alpha_2,\ldots,\alpha_n\}$与$B_2=\{\beta_1,\beta_2,\ldots,\beta_n\}$是线性空间$V(\mathbf{F})$的任意两组基，$B_{2}$中每个基向量被基$B_1$表示为：

$$
\left.\left\{\begin{array}{c}\beta_1=a_{11}\alpha_1+a_{21}\alpha_2+\cdots+a_{n1}\alpha_n\\\beta_2=a_{12}\alpha_1+a_{22}\alpha_2+\cdots+a_{n2}\alpha_n\\\vdots\\\beta_n=a_{1n}\alpha_1+a_{2n}\alpha_2+\cdots+a_{nn}\alpha_n\end{array}\right.\right.
$$

将上式用矩阵表示为：

$$
(\beta_1,\beta_2,\ldots,\beta_n)=(\alpha_1,\alpha_2,\ldots,\alpha_n)\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{pmatrix}
$$

我们将这一矩阵称为即$B_1$变为基$B_2$的变换矩阵（或过渡矩阵）

### 6、定理：基的选择对向量坐标的影响

设线性空间$V$的两组基为$B_1$和$B_2$，且基$B_1$到$B_2$的变换矩阵（过渡矩阵）为$A$，如果$\xi\in V(\mathbf{F})$在$B_1$和$B_2$下的坐标分别为$X$和$Y$，则$Y=A^-1X$。

### 7、定理：换基公式

设$\sigma \in \mathcal{L} ( V_1, V_2)$， $B_1, B_1^{\prime }$是$V_1$的两组基，$B_2,B_2^{\prime}$是$V_2$的两组基。设$P$是$B_1$变为$B_{1}^{\prime}$的过渡矩阵，$Q$是$B_2$变为$B_2^{\prime}$的过渡矩阵，则$\mathbf{M}_{B_{1}^{\prime},B_{2}^{\prime}}(\sigma)=Q^{-1}\mathbf{M}_{B_{1},B_{2}}(\sigma)P$

### 8、定理：基的选择对变换矩阵的影响

设线性变换$\sigma \in \mathcal{L} ( V, V)$, $B_1= \{ \alpha _1, \ldots , \alpha _n\}$和$B_2=\{\beta_1,\ldots,\beta_n\}$是线性空间$V(\mathbf{F})$的两组基，基$B_1$变为基$B_2$的过渡矩阵为$C$。如果$\sigma$在基$B_1$下的矩阵为$A$，则$\sigma$ 关于基$B_2$所对应的矩阵为$C^-1AC$。

### 9、定理及定义：相抵标准型

设$A$是$m\times n$矩阵，则存在可逆矩阵$P$和$Q$，使得：
$$
PAQ=\begin{pmatrix}E_r&O\\O&O\end{pmatrix}=U_r
$$
其中$E_r$表示$r$阶单位矩阵，$r=r(A)$。
这一定理也就自然给出了相抵以及相抵标准型的定义：设$A$和$B$是$m\times n$矩阵，如果存在可逆矩阵$P$和$Q$，使得$PAQ=B$，则称$A$和$B$是相抵的。称$PAQ=U_r$中的$U_r$为矩阵$A$的相抵标准型，其中$E_r$表示$r$阶单位矩阵，$r=r(A)$。

### 10、定义：初等矩阵

将单位矩阵$E$做一次初等变换得到的矩阵称为初等矩阵，与三种初等行、列变换对应的三类初等矩阵为：
1. 将单位矩阵第$i$行 (或列)乘$c$,得到初等倍乘矩阵$E_i(c)$。
2. 将单位矩阵第$i$行乘$c$加到第$j$行，或将第$j$列乘$c$加到第$i$列，得到初等倍加矩阵$E_{ij}(c)$。
3. 将单位矩阵第$i,j$行 (或列)对换，得到初等对换矩阵$E_{ij}$。

$$
E_i(c)=\begin{bmatrix}1\\&\ddots\\&&c\\&&&\ddots\\&&&&1\end{bmatrix} 第i行
$$

$$
E_{ij}(c)=\begin{bmatrix}1\\&\ddots\\&&1\\&&&\ddots\\&&&&\ddots\\&&c&&&1\\&&&&&&\ddots\\&&&&&&&1\end{bmatrix}\frac{第i行}{第j行}
$$

$$
E_{ij}=\begin{bmatrix}1\\&\ddots\\&&0&&1\\&&&\ddots\\&&1&&0\\&&&&&\ddots\\&&&&&&1\end{bmatrix}\frac{第i行}{第j行}
$$

### 11、定理：可逆矩阵性质

任意可逆矩阵都可以被表示为若干个初等矩阵的乘积。

### 12、定理：两可逆矩阵初等行变换性质

设$A$为$n$阶可逆矩阵，如果对$A$和$n$阶单位矩阵$E$做相同的初等行变换，即$P_{1},P_{2},\ldots,P_{k}$后$A$变为$E$时$,E$变为$A^-1$。

### 13、定理：初等变换性质

初等变换不改变矩阵的秩（包括行变换和列变换）。

### 14、定义：相抵

我们称两个矩阵相抵即两个矩阵可以通过一系列初等变换可以互相转化。

### 15、定义：迹

$A=(a_{ij})_{n\times n}$是$n$阶方阵，$A$的主对角线上的元素之和称为$A$的迹，记为$tr( A)$，即：
$$
\operatorname{tr}(A)=\sum_{i=1}^na_{ii}
$$

## 六、特殊矩阵

### 1、定义：对角矩阵

设$A$是一个$s\times n$矩阵，把$A$写成列向量与行向量的形式，分别为：
$$
A=\begin{pmatrix}\alpha_1&\alpha_2&\cdots&\alpha_n\end{pmatrix}=\begin{pmatrix}\beta_1\\\beta_2\\\vdots\\\beta_n\end{pmatrix}
$$
则：

$$
\begin{aligned}\begin{pmatrix}\alpha_1&\alpha_2&\cdots&\alpha_n\end{pmatrix}\begin{pmatrix}d_1\\&d_2\\&&\ddots\\&&&d_n\end{pmatrix}&=\begin{pmatrix}d_1\alpha_1&d_2\alpha_2&\cdots&d_n\alpha_n\end{pmatrix}\\\begin{pmatrix}d_1\\&d_2\\&&\ddots\\&&&d_n\end{pmatrix}\begin{pmatrix}\beta_1\\\beta_2\\\vdots\\\beta_n\end{pmatrix}&=\begin{pmatrix}d_1\beta_1\\d_2\beta_2\\\vdots\\d_n\beta_n\end{pmatrix}\end{aligned}
$$

### 2、定理：对角矩阵和分块对角矩阵的性质：

1. 对角矩阵$\operatorname{diag}(d_1,d_2,\ldots,d_n)$可逆当且仅当对角线上元素均不为$0$，且此时逆矩阵为$\mathrm{diag}(d_1^{-1},d_2^{-1},\ldots,d_n^{-1})$。

2. 分块对角矩阵$\operatorname{diag}(A_1,A_2,\ldots,A_n)$可逆当且仅当每个分块$A_i$可逆，且此时逆矩阵为$\mathrm{diag}(A_1^{-1},A_2^{-1},\ldots,A_n^{-1})$。
3. 两个对角矩阵$A=\mathrm{diag}(a_1,a_2,\ldots,a_n),B=\mathrm{diag}(b_1,b_2,\ldots,b_n)$的乘积仍然是
    对角矩阵，且$AB=\mathrm{diag}(a_1b_1,a_2b_2,\ldots,a_nb_n)$。 对于乘方运算，有$A^k=\mathrm{diag}(a_1^k,a_2^k,\ldots,a_n^k)$。
4. 两个准对角矩阵$A=\mathrm{diag}(A_1,A_2,\ldots,A_n),B=\mathrm{diag}(B_1,B_2,\ldots,B_n)$中$A_i$和$B_i$是同级方阵，则乘积仍然是准对角矩阵，且$AB=\operatorname{diag}(A_1B_1,A_2B_2,\ldots,A_nB_n)$。

### 3、定理：上（下）三角矩阵

已知$A,B$都是上三角矩阵，且设$A$的主对角元素分别为$a_11,\ldots,a_{nn},B$的主对角元素分别为$b_11,\ldots,b_{nn}$，则
1. $A^{\mathrm{T}},B^{\mathrm{T}}$都是下三角矩阵。
2. $AB$仍然是上三角矩阵，且$AB$的主对角元素为$a_11b_{11},\ldots,a_{nn}b_{nn}$。
3. $A$可逆的充要条件是其主对角元均不为$0$，且$A$可逆时，$A^{-1}$也是上三角矩阵，并且$A^-1$的主对角元素分别为$a_{11}^{-1},\ldots,a_{nn}^{-1}$。

## 七、行列式

### 1、定义：行列式（公理化）

数域$\mathbf{F}$上的一个$n$阶行列式是取值于$\mathbf{F}$的$n$个$n$维向$\alpha_1,\alpha_2,\ldots,\alpha_n\in\mathbf{F}^n$的一
个函数，且$\forall\alpha_i,\beta_i\in\mathbf{F}^n$和$\forall\lambda\in\mathbf{F}$，满足下列规则：

1. （齐性）$D(\alpha_1,\ldots,\lambda\alpha_{i},\ldots,\alpha_{n})=\lambda D(\alpha_{1},\ldots,\alpha_{i},\ldots,\alpha_{n})$。

2. （加性，与$1$合称线性性）$D(\alpha_{1},\ldots,\alpha_{i}+\beta_{i},\ldots,\alpha_{n})=D(\alpha_{1},\ldots,\alpha_{i},\ldots,\alpha_{n})+D(\alpha_{1},\ldots,\beta_{i},\ldots,\alpha_{n})$。

3. （反对称性）$D(\alpha_1,\ldots,\alpha_i,\ldots,\alpha_j,\ldots,\alpha_n)=-D(\alpha_1,\ldots,\alpha_j,\ldots,\alpha_i,\ldots,\alpha_n)$。

4. （规范性）$D(e_1,e_2,\ldots,e_n)=1$。

### 2、定理：行列式的简单性质

1. 若行列式有一列为零向量，则行列式的值等于$0$。

2. 若行列式有两列元素相同，则行列式的值等于$0$。

3. 若行列式有两列元素成比例，则行列式的值等于$0$。

4. 对行列式做倍加列变换，行列式的值不变。

5. 若$\alpha_1,\alpha_2,\ldots,\alpha_n$线性相关，则$D(\alpha_1,\alpha_2,\ldots,\alpha_n)=0$。

### 3、定义：余子式与代数余子式

在$n$阶行列式$D=|a_ij|_{n\times n}$中，去掉元素$a_ij$所在的第$i$行和第$j$列的所有元素而得到的$n-1$阶行列式称为元素$a_ij$的余子式，记作$M_ij$,并把数$A_ij=(-1)^{i+j}M_{ij}$ 称为元素$a_{ij}$的代数余子式。

### 4、定义：行列式（递归式）

设 $D=|a_{ij}|_{n\times n}$，则：
$$D=\sum_{k=1}^{n}a_{kj}A_{kj}=a_{1j}A_{1j}+a_{2j}A_{2j}+\cdots+a_{nj}A_{nj}\quad j=1,2,\ldots,n$$

$$D=\sum_{k=1}^{n}a_{ik}A_{ik}=a_{i1}A_{i1}+a_{i2}A_{i2}+\cdots+a_{in}A_{in}\quad i=1,2,\ldots,n$$

### 5、定理：递归式结论

$n$阶行列式$D=|a_{ij}|_{n\times n}$的某一行（列）元素与另一行（列）相应元素的代数余子式的乘积之和等于0，即

$$
\sum_{k=1}^{n}a_{kj}A_{ki}=a_{1j}A_{1i}+a_{2j}A_{2i}+\cdots+a_{nj}A_{ni}=0\quad j\neq 
$$

$$
i\\\sum_{k=1}^{n}a_{jk}A_{ik}=a_{j1}A_{i1}+a_{j2}A_{i2}+\cdots+a_{jn}A_{in}=0\quad j\neq i
$$

### 6、定理：行列式的常用性质

设$A, B\in \mathbf{F} ^{n\times n}$, $k\in \mathbf{F}$,则：

1. 一般情况下，$|A\pm B|\neq|A|\pm|B|$

2. $| kA| = k^n| A|$ 

3. 初等矩阵行列式 （注意初等矩阵不分行列，左乘右乘区分初等行列变换）$$\begin{matrix}|E_{ij}|=-1,&|E_i(c)|=c,&|E_{ij}(k)|=1\end{matrix}$$

4. $| AB| = | A| | B|$, $| A^{k}| = | A| ^{k}$ 

5. $A$可逆$\Longleftrightarrow|A|\neq0$

6. $| A^{\mathrm{T} }| = | A|$ 

7. 上、下三角矩阵行列式均为主对角线元素的乘积
8. 若$A$可逆，则$|A^-1|=|A|^{-1}$

### 7、定义：伴随矩阵

称矩阵
$$
A^*=\begin{pmatrix}A_{11}&A_{21}&\cdots&A_{n1}\\A_{12}&A_{22}&\cdots&A_{n2}\\\vdots&\vdots&\ddots&\vdots\\A_{11}&\Lambda_{21}&\Lambda_{21}\end{pmatrix}
$$

为$A$的伴随矩阵，其中$A_{ij}$是元素$a_{ij}$的代数余子式。

### 8、定义：主子式和顺序主子式

矩阵 $A=(a_ij)_{n\times n}$ 的任意 $k$ 行$(i_1<i_2<\cdots<i_k$ 行)和任意 $k$ 列$(j_1<j_2<\cdots<j_k$
列)的交点上的$k^{2}$个元素排成的行列式

$$
\begin{vmatrix}a_{i_1j_1}&a_{i_1j_2}&\cdots&a_{i_1j_k}\\a_{i_2j_1}&a_{i_2j_2}&\cdots&a_{i_2j_k}\\\vdots&\vdots&\ddots&\vdots\\a_{i_kj_1}&a_{i_kj_2}&\cdots&a_{i_kj_k}\end{vmatrix}
$$

称为矩阵$A$的一个$k$阶子式，若子式等于$0$则称$k$阶零子式，否则称非零子式。当$A$为方阵且$i_t=j_t(t=1,2,\ldots,k)$（即选取相同行列）时，称为$A$的$k$阶主子式。若$i_t=j_{t}=t(t=1,2,\ldots,k)$，称为$A$的$k$阶顺序主子式（取前$k$行$k$列的左上角主子式）。

### 9、定义：行列式的秩

矩阵$A$的非零子式的最高阶数$r$称为$A$的行列式秩。

### 10、定理：行列式的秩与矩阵的秩

$A$的秩$r(A)=r\Longleftrightarrow A$的行列式的秩为$r$。矩阵$A$的非零子式的最高阶数$r$称为矩阵$A$的秩，记为$r(A)$。

## 八、线性方程组

### 1、线性方程组有解的充要条件

线性方程组有解的充分必要条件是其系数矩阵与增广矩阵有相同的秩。

### 2、定理：方程组有解条件下的矩阵性质

当方程组有解时（注意这个前提）以下定理成立：
1. 如果它的系数矩阵$A$的秩等于未知量的数目$n$，则方程组有唯一解。
2. 如果$A$的秩小于$n$，则方程组有无穷多个解。

### 3、克莱姆（Cramer）发展

对线性方程组

$$
\left\{
\begin{array}{l}
a_{11}x_{1} + a_{12}x_{2} + \cdots + a_{1n}x_{n} = 0 \\
a_{21}x_{1} + a_{22}x_{2} + \cdots + a_{2n}x_{n} = 0 \\
\vdots \\
a_{n1}x_{1} + a_{n2}x_{2} + \cdots + a_{nn}x_{n} = 0
\end{array}
\right.
$$

$$
\left\{
\begin{array}{l}
a_{11}x_{1} + a_{12}x_{2} + \cdots + a_{1n}x_{n} = b_{1} \\
a_{21}x_{1} + a_{22}x_{2} + \cdots + a_{2n}x_{n} = b_{2} \\
\vdots \\
a_{n1}x_{1} + a_{n2}x_{2} + \cdots + a_{nn}x_{n} = b_{n}
\end{array}
\right.
$$

令$ D = \begin{vmatrix} 
a_{11} & a_{12} & \cdots & a_{1n} \\ 
a_{21} & a_{22} & \cdots & a_{2n} \\ 
\vdots & \vdots & \ddots & \vdots \\ 
a_{n1} & a_{n2} & \cdots & a_{nn} 
\end{vmatrix} $称为系数行列式。

令 

$$
D_1 = \begin{vmatrix} 
b_1 & a_{12} & \cdots & a_{1n} \\ 
b_2 & a_{22} & \cdots & a_{2n} \\ 
\vdots & \vdots & \ddots & \vdots \\ 
b_n & a_{n2} & \cdots & a_{nn} 
\end{vmatrix}, \ldots, D_n = \begin{vmatrix} 
a_{11} & a_{12} & \cdots & b_1 \\ 
a_{21} & a_{22} & \cdots & b_2 \\ 
\vdots & \vdots & \ddots & \vdots \\ 
a_{n1} & a_{n2} & \cdots & b_n 
\end{vmatrix}
$$

1. 第一个方程组只有零解 $\Longleftrightarrow D \neq 0$，第一个方程组有非零解（无穷多解）$\Longleftrightarrow D = 0$，即 $ r(A) < n $。

2. 第二个方程组有唯一解 $\Longleftrightarrow D \neq 0$，此时 $ x_i = \frac{D_i}{D} (i = 1, 2, \ldots, n)$，当$ D = 0 $时，第二个方程组要么无解，要么有无穷多解。

### 4、定理：齐次线性方程组解的一般结论

齐次线性方程组$AX=0$的解空间为$\bf R^{n}$的子空间。矩阵$A \in {\bf M}_{m \times n}({\bf F})$，若 $r(A) = r$，则该齐次线性方程组 $AX = {\bf 0}$ 的解空间维数为 $n - r$，且其一组基就是基础解系 $X_{1}, \ldots, X_{n-r}$。

### 5、定理：齐次线性方程组同解充要条件

$n$ 元齐次线性方程组 $A_{m_{1} \times n}X = {\bf 0}$ 与 $B_{m_{2} \times n}X = {\bf 0}$ 同解的充要条件是
$$
r\left(\begin{array}{c} A \\ B \end{array}\right) = r(A) = r(B)
$$

### 6、定理：非齐次线性方程组同解的充要条件

$n$ 元非齐次线性方程组 $A_{m_{1} \times n}X = {\boldsymbol{b}}$ 与 $B_{m_{2} \times n}X = d$ 同解的充要条件是

1. $r(A) \neq r(A, {\boldsymbol{b}})$ 且 $r(B) \neq r(B,  \boldsymbol{d})$
2. $r\left(\begin{array}{cc} A &  \boldsymbol{b} \\ B &  \boldsymbol{d} \end{array}\right) = r\left(\begin{array}{c} A \\ B \end{array}\right) = r(A) = r(A,  \boldsymbol{b}) = r(B) = r(B,  \boldsymbol{d})$

## 九、多项式

### 1、定义：数域上的多项式函数

设 ${\bf F}$ 是数域，对于函数 $p\colon{\bf F}\to{\bf F}$，若存在 $a_{0},\ldots,a_{m}\in{\bf F}$ 使得对任意 $x\in{\bf F}$ 有

$$
p(x) = a_{0} + a_{1}x + \cdots + a_{m}x^{m}
$$

则称函数 $p$ 为系数在 ${\bf F}$ 中的多项式，其中 $a_{i}x^{i}$ 称为第 $i$ 次项，使得 $a_{k} \neq 0$ 成立的最大整数称为多项式的次数，记为 $\deg p = k$。

### 2、定义：一般域上的一元多项式

设 ${\bf F}$ 是域，我们称 ${\bf F}$ 上的一元多项式 $p(x)$ 是一个形如下式的表达式，即

$$
p(x) = a_{0} + a_{1}x + \cdots + a_{m}x^{m}
$$

其中 $a_{0}, \ldots, a_{m} \in {\bf F},~m \in {\bf N},~x \notin {\bf F}$ 是一个符号，我们称为不定元。称 $a_{0}, \ldots, a_{m}$ 为多项式 $p(x)$ 的系数，更特殊的，称 $a_{0}$ 为多项式的常数项，$a_{i}x^{i}$ 称为第 $i$ 次项。对于非零多项式（即 $p(x) \neq 0$），我们称使得 $a_{k} \neq 0$ 成立的最大整数称为多项式的次数，记为 $\deg p = k$。对于零多项式，其次数定义为 $-\infty$。称 $a_{k}$ 为多项式的首项系数，若 $a_{k} = 1$，即多项式首项系数为 $1$，则称这一多项式为首一多项式。

### 3、定义：多项式的加法、数乘、乘法

设 $p(x) = a_{0} + a_{1}x + \cdots + a_{m}x^{m}$，$q(x) = b_{0} + b_{1}x + \cdots + b_{n}x^{n}$，则

1. 不妨设 $m \leqslant n$，则多项式的加法定义为
   $$
   p(x) + q(x) = (a_{0} + b_{0}) + (a_{1} + b_{1})x + \cdots + (a_{m} + b_{m})x^{m} + b_{m+1}x^{m+1} + \cdots + b_{n}x^{n}
   $$

2. 多项式的数乘定义为
   $$
   k \cdot p(x) = ka_{0} + ka_{1}x + \cdots + ka_{m}x^{m}
   $$
   其中 $k \in {\bf F}$；

3. 多项式的乘法定义为
   $$
   p(x)q(x) = \sum_{k=0}^{m+n} \left( \sum_{i+j=k} a_{i}b_{j} \right) x^{k}
   $$
   $$
   = a_{0}b_{0} + \left( a_{0}b_{1} + a_{1}b_{0} \right)x + \cdots + \left( \sum_{i+j=k} a_{i}b_{j} \right)x^{k} + \cdots + a_{m}b_{n}x^{m+n}
   $$

## 十、相似标准型

### 1、定义：相似与相似标准型

若对于 $A, B \in {\bf M}_{n}({\bf F})$，存在可逆矩阵 $C \in {\bf M}_{n}({\bf F})$，使得 $C^{-1}AC = B$，则称 $A$ 相似于 $B$，记作 $A \sim B$。矩阵 $B$ 称为矩阵 $A$ 的相似标准型。

### 2、定义：特征值与特征向量

设 $\sigma$ 是线性空间 $V(\mathbf{F})$ 上的一个线性变换，如果存在数 $\lambda \in \mathbf{F}$ 和非零向量 $\xi \in V$ 使得 $\sigma(\xi) = \lambda \xi$，则称数 $\lambda$ 为 $\sigma$ 的一个特征值，并称非零向量 $\xi$ 为 $\sigma$ 属于其特征值 $\lambda$ 的特征向量。

### 3、定义：特征子空间

对于某一个 $\lambda \in {\bf F}$，我们将所有满足 $\sigma(\xi) = \lambda \xi$ 的向量构成的集合记为：
$$
E(\lambda, \sigma) = \{\xi \mid \sigma(\xi) = \lambda \xi, \,\, \xi \in V\}
$$
（在去除线性变换不引起歧义的情况下可简写为 $V_{\lambda}$），称为 $\sigma$ 关于其特征值 $\lambda$ 的特征子空间。显然，这一集合是由零向量和全体 $\lambda$ 对应的特征向量构成的。我们可以验证 $V_{\lambda}$ 的确是 $V$ 的“子空间”

### 4、定义：矩阵与特征值、特征向量

设矩阵 $A \in {\bf M}_{n}({\bf F})$，如果存在数 $\lambda \in {\bf F}$ 和非零向量 $X \in {\bf F}^{n}$ 使得 $AX = \lambda X$，则称数 $\lambda$ 为 $A$ 的一个特征值，称非零向量 $X$ 为 $A$ 属于其特征值 $\lambda$ 的特征向量。

### 5、定理：特征值性质

设 $\sigma$ 是 $V({\bf F})$ 上的线性变换，$I$ 为恒等映射，则下述条件等价：

1. $\lambda \in {\bf F}$ 是 $\sigma$ 的特征值；
2. $\sigma - \lambda I$ 不是单射；
3. $\sigma - \lambda I$ 不是满射；
4. $\sigma - \lambda I$ 不可逆。

### 6、定义：特征多项式、几何重数、代数重数

 $f(\lambda) = |\lambda E - A|$ 是在之后的讨论中有核心地位的概念，我们称其为矩阵 $A$ 的特征多项式，其 $k$ 重根称为 $k$ 重特征值（称 $k$ 为代数重数），该特征值对应的特征子空间维数称为该特征值的几何重数。

设 $\sigma$ 是 $V({\bf F})$ 上的线性变换，$A$ 是 $\sigma$ 在任意一组基下的矩阵，则 $\sigma$ 的特征多项式定义为 $|\lambda E - A|$。

### 7、定理：特征多项式行列式展开

对于 $n$ 级矩阵 $A = (a_{ij})$，记

$$
f(\lambda) = |\lambda E - A| = a_{0}\lambda^{n} + a_{1}\lambda^{n-1} + \cdots + a_{n-1}\lambda + a_{n}
$$

则 $a_{0} = 1$，$a_{1} = -\operatorname{tr}(A)$，$a_{n} = (-1)^{n}|A|$，且 $a_{k}$ 等于所有 $k$ 级主子式之和乘以 $(-1)^{k}$。

### 8、定理：相似矩阵的特征多项式

相似矩阵有相同的特征多项式（逆命题不成立），即 $A \sim B$ 有 $|\lambda E - A| = |\lambda E - B|$，从而有相同的迹、行列式、特征值，但特征向量不一定相同。

### 9、定理：特征向量基本性质

设 $V$ 是有限维的，$\sigma \in \mathcal{L}(V)$ 且 $\lambda \in \mathbf{F}$，则

1. $\sigma$ 的不同特征值对应的特征向量线性无关。
2. $\sigma$ 的不同特征值对应的特征子空间的和为直和。
3. $\sigma$ 最多有 $\dim V$ 个不同的特征值。

### 10、定理：代数重数大于等于几何重数

$n$ 维线性空间 $V({\bf F})$ 的线性变换 $\sigma$ 的每个特征值 $\lambda_{0}$ 的重数（代数重数）大于等于其特征子空间 $V_{\lambda_{0}}$ 的维数（几何重数）。

### 11、定理：对角矩阵

$n$ 维线性空间 $V$ 上的线性变换 $\sigma \in \mathcal{L}(V)$ 在基 $B = \{\alpha_{1}, \ldots, \alpha_{n}\}$ 下的表示矩阵为对角矩阵 ${\rm diag}(d_{1}, \ldots, d_{n})$，当且仅当 $V$ 能分解为 $\sigma$ 的一维不变子空间的直和，即：
$$
V = U_{1} \oplus \cdots \oplus U_{n},
$$
其中 $U_{i} = {\rm span}(\alpha_{i}), \,\, i = 1, \ldots, n$ 是 $\sigma$ 的一维不变子空间。

### 12、定义：可对角化

设 $\sigma \in \mathcal{L}(V)$，如果存在 $V$ 的一组基使得 $\sigma$ 在这组基下的矩阵是对角矩阵，则称 $\sigma$ 可对角化。

设 $A \in {\bf F}^{n \times n}$，如果存在可逆矩阵 $P$ 使得 $P^{-1}AP$ 是对角矩阵，则称 $A$ 可对角化（等价于 $A$ 相似于对角矩阵）。

### 13、定理：可对角化的性质

设 $V$ 是数域 ${\bf F}$ 上的 $n$ 维线性空间，$\sigma$ 是 $V$ 上的线性变换，$\lambda_{1}, \lambda_{2}, \ldots, \lambda_{s} \in {\bf F}$ 是 $\sigma$ 的所有互异特征值，则以下条件等价：

1. $\sigma$ 可对角化；
2. $\sigma$ 有 $n$ 个线性无关的特征向量，它们构成 $V$ 的一组基；
3. $V$ 有在 $\sigma$ 下不变的一维子空间 $U_{1}, \ldots, U_{n}$，使得 $V = U_{1} \oplus \cdots \oplus U_{n}$；
4. $V = V_{\lambda_{1}} \oplus V_{\lambda_{2}} \oplus \cdots \oplus V_{\lambda_{s}}$；
5. $n = \dim V_{\lambda_{1}} + \dim V_{\lambda_{2}} + \cdots + \dim V_{\lambda_{s}}$；
6. $\sigma$ 每个特征值的代数重数等于几何重数。

表现在矩阵上，设 $A$ 是数域 ${\bf F}$ 上的 $n$ 阶矩阵，$\lambda_{1}, \lambda_{2}, \ldots, \lambda_{s} \in {\bf F}$ 是 $A$ 的所有互异特征值，则以下条件等价：

1. $A$ 可对角化；
2. $A$ 有 $n$ 个线性无关的特征向量，它们构成 ${\bf F}^{n}$ 的一组基；
3. $n = {\rm dim}\,V_{\lambda_{1}} + {\rm dim}\,V_{\lambda_{2}} + \cdots + {\rm dim}\,V_{\lambda_{s}}$；
4. $A$ 每个特征值的代数重数等于几何重数。

### 14、定理：可对角化的条件

若 $n$ 维空间上的线性变换 $\sigma$ 有 $n$ 个不同的特征值，则 $\sigma$ 可对角化。反之，$\sigma$ 可对角化不一定有 $n$ 个特征值。

若 $n$ 阶矩阵 $A$ 有 $n$ 个不同的特征值，则 $A$ 可对角化。反之，$A$ 可对角化不一定有 $n$ 个特征值。

### 15、定理：上三角矩阵

设 $A$ 为上三角矩阵，则 $A$ 的特征值恰好就是其主对角元，且在对角线上出现的次数就等于特征值的代数重数。

## 十一、内积空间

### 1、定义：正交

两个向量 $u, v \in V$ 称为 **正交的**，如果 $\langle u, v \rangle = 0$。

### 2、定义：标准正交

如果一个向量组的每个向量范数都是 $1$ 且与其他向量正交，则称这个向量组是标准正交（规范正交）的。任何标准正交向量组都是线性无关的。

### 3、定义：标准正交基

$V$ 的标准正交基是 $V$ 中的标准正交向量组构成的基。

## 十二、二次型

### 1、定义：二次型

$n$ 个元 $x_{1}, x_{2}, \ldots, x_{n}$ 的二次齐次多项式

$$
\begin{aligned}
f(x_{1}, x_{2}, \ldots, x_{n}) =& \sum_{i=1}^{n} a_{ii} x_{i}^{2} + \sum_{1 \leq i < j \leq n} 2 a_{ij} x_{i} x_{j}\\
=& a_{11} x_{1}^{2} + a_{22} x_{2}^{2} + \cdots + a_{nn} x_{n}^{2}\\
\quad &+ 2 a_{12} x_{1} x_{2} + \cdots + 2 a_{1n} x_{1} x_{n} + 2 a_{23} x_{2} x_{3} + \cdots + 2 a_{n-1,n} x_{n-1} x_{n}
\end{aligned}
$$

称为域 $F$ 上的 $n$ 元二次型（简称二次型）。

### 2、定义：相合

我们称 $n$ 阶矩阵 $A$ 相合于 $B$（记作 $A \simeq B$），如果存在可逆矩阵 $C$ 使得 $B = C^{\rm T} A C$。

### 3、定理：矩阵相合（合同）的性质

1. 合同是等价关系；合同不同于相似，是与域有关的；合同要求 $C$ 必须可逆，因此是一种特殊的相抵。

2. $A \simeq B$ 一般不能得到 $A^{m} \simeq B^{m}$（但是 $A, B$ 为实对称矩阵时可以），但如果可逆，我们有 $A^{-1} \simeq B^{-1}$，同时如果 $A_{1} \simeq A_{2}, B_{1} \simeq B_{2}$，则有：
   $$
   \begin{pmatrix} A_{1} & O \\ O & B_{1} \end{pmatrix} \simeq \begin{pmatrix} A_{2} & O \\ O & B_{2} \end{pmatrix}
   $$

3. $A \simeq B$ 表明 $A$ 可以每次做相同的初等行列变换得到 $B$，反之亦然。

### 4、定理：相合变换类型

对称矩阵 $A$ 的下列变换都是相合变换：

1. 对换 $A$ 的第 $i$ 行与第 $j$ 行，再对换第 $i$ 列与第 $j$ 列；
2. 将非零数 $k$ 乘以 $A$ 的第 $i$ 行，再将 $k$ 乘以 $A$ 的第 $i$ 列；
3. 将 $A$ 的第 $i$ 行乘以 $k$ 加到第 $j$ 行，再将 $A$ 的第 $i$ 列乘以 $k$ 加到第 $j$ 列。

### 5、定理：相合与对角矩阵

设 $A$ 是域 ${\bf F}$ 上的 $n$ 阶对称矩阵，则必存在 ${\bf F}$ 上的 $n$ 阶可逆矩阵 $C$，使得 $C^{\rm T} A C$ 为对角矩阵。

### 6、定理：惯性定理

实对称矩阵的相合规范形唯一，或者说实对称矩阵正、负惯性指数唯一，或者实对称矩阵相合标准形中对角线上正、负、零的个数唯一，或者实对称矩阵特征值中正、负、零的个数唯一等。

### 7、定义：正定、半正定、负定、半负定、不定二次型

设 $f(X) = X^T A X$ 是 $n$ 元实二次型，$A$ 是实对称矩阵。

1. 若对任意非零 $n$ 元实列向量 $X$，都有 $f(X) > 0$，则称 $f(X)$ 是正定二次型，$A$ 是正定矩阵。
2. 若对任意非零 $n$ 元实列向量 $X$，都有 $f(X) \geq 0$，则称 $f(X)$ 是半正定二次型，$A$ 是半正定矩阵。
3. 若对任意非零 $n$ 元实列向量 $X$，都有 $f(X) < 0$，则称 $f(X)$ 是负定二次型，$A$ 是负定矩阵。
4. 若对任意非零 $n$ 元实列向量 $X$，都有 $f(X) \leq 0$，则称 $f(X)$ 是半负定二次型，$A$ 是半负定矩阵。
5. 若存在 $n$ 元实列向量 $X_1, X_2$，使得 $f(X_1) > 0$ 且 $f(X_2) < 0$，则称 $f(X)$ 是不定二次型。

### 8、定理：正定、半正定矩阵性质

$n$ 阶实对称矩阵 $A$ 是正定矩阵当且仅当其合同于单位阵 $E_{n}$，是半正定矩阵当且仅当其合同于对角阵
$$
\begin{pmatrix} E_{r} & O \\ O & O \end{pmatrix}
$$

### 9、定理：正定矩阵的充分必要条件

$n$ 阶实对称矩阵 $A$ 是正定阵的充分必要条件是 $A$ 的所有顺序主子式的行列式都大于 $0$。

### 10、定理：正定矩阵性质

若 $A$ 是正定矩阵，则：

1. $A$ 的任一 $k$ 阶主子阵都是正定阵；
2. $A$ 的所有主子式均为正，特别地，$A$ 的主对角元素全大于零。
3. $n$ 元实二次型 $f(X)$ 的特征值都是正数当且仅当 $f(X)$ 是正定二次型。

### 11、定理：实对称矩阵是正定矩阵的充分必要条件

设 $A$ 是 $n$ 阶实对称矩阵，那么 $A$ 是正定矩阵的充要条件是存在 $n$ 阶可逆矩阵 $C$ 使得 $A = C^{T} C$。
