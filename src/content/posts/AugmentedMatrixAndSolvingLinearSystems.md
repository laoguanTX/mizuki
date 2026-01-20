---
title: 增广矩阵与解线性方程组
published: 2024-09-11
category: ["数学", "线性代数"]
tags: ["线性代数"]
alias: "augmentedmatrixandsolvinglinearsystems"
---
### 一、增广矩阵

对于一个由$m\times n$个数排成$m$个横行，$n$个竖列的矩形数表称为$m\times n$矩阵。
对于一个$m\times n$的矩阵$A$，我们可以在它的右边加上一个$m\times1$的列向量$\boldsymbol b$，得到一个$m\times(n+1)$的矩阵$(A,\boldsymbol b)$，这个矩阵被称为$A$的增广矩阵。
$$A=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}\end{pmatrix},\quad (A,\boldsymbol b)=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}&|&b_1\\a_{21}&a_{22}&\cdots&a_{2n}&|&b_2\\\vdots&\vdots&\ddots&\vdots&|&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}&|&b_m\end{pmatrix}$$

设置行向量$\boldsymbol \alpha_i=(a_{i1},a_{i2},\dots,a_{in}),i=1,2,\cdots,m$，那么矩阵$A=\begin{pmatrix}\boldsymbol \alpha_1\\\boldsymbol \alpha_2\\\vdots\\\boldsymbol \alpha_m\end{pmatrix}$

### 二、增广矩阵与线性方程组

一个线性方程组可以表示为$A\boldsymbol X=\boldsymbol b$的形式，其中$A$是系数矩阵，$\boldsymbol X$和$\boldsymbol b$都是列向量。

$$\boldsymbol X=(x_1,x_2,\cdots,x_3)^\mathrm{T}=\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix}$$

右上角的$\mathrm{T}$表示该向量为列向量。

在增广矩阵中可以进行三种操作，称为三种初等行运算：

1. 将一行乘以一个倍数加到另外一行去。
2. 将一行乘以一个非零的数。
3. 交换两行。

现在就可以在增广矩阵中即可运用高斯消元法求解方程组。

对于下面一个$n$元线性方程组：

$$\begin{cases}a_{11}x_{1}+a_{12}x_{2}+\cdots+a_{1n}x_{n}=b_{1}\\a_{21}x_{1}+a_{22}x_{2}+\cdots+a_{2n}x_{n}=b_{2}\\\qquad\vdots\\a_{m1}x_{1}+a_{m2}x_{2}+\cdots+a_{mn}x_{n}=b_{m}\end{cases}$$

当方程组中常数项$b_i=0$时，该方程称为齐次线性方程组，否则叫做非齐次线性方程组，而齐次线性方程组总是有解的（为什么？因为下面的阶梯矩阵，不存在第$r+1$行）。

将所有系数和最后的常数拿出，排成一个矩阵，称为方程组的增广矩阵

$$\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}&b_1\\a_{21}&a_{22}&\cdots&a_{2n}&b_2\\\vdots&&&&\vdots\\a_{m1}&a_{m2}&\cdots&a_{mn}&b_m\end{pmatrix}$$

然后利用高斯消元法进行消元。

对一般的线性方程组的增广矩阵作三种初等行运算，都可把$(A,\boldsymbol b)$化为如下形式的矩阵（最后一行表示恒等式）

$$(A,\boldsymbol b)\to\begin{pmatrix}c_{11}&c_{12}&\cdots&c_{1j_{2}}&c_{1j_{2}+1}&\cdots&c_{1j_{r}}&c_{1j_{r}+1}&\cdots&c_{1n}&d_{1}\\0&0&\cdots&c_{2j_{2}}&c_{2j_{2}+1}&\cdots&c_{2j_{r}}&c_{2j_{r}+1}&\cdots&c_{2n}&d_{2}\\\vdots&&&&&&&&&\vdots&\vdots\\0&0&\cdots&0&0&\cdots&c_{d_{r}}&c_{rj_{r}+1}&\cdots&c_{m}&d_{r}\\0&0&\cdots&0&0&\cdots&0&0&\cdots&0&d_{r+1}\\\vdots&&&&&&&&&\vdots&\vdots\\0&0&\cdots&0&0&\cdots&0&0&\cdots&0&0\end{pmatrix}$$

其中，$0$行全在矩阵的下方；而第$i$个非零行的第一个不为零的元素$c_ij_i$满足

$$1<j_2<\cdots<j_r\leq n$$

这种矩阵叫阶梯矩阵，每行第一个不为零的元素叫主元素我们还可通过行变换继续把主元素都变成$1$，而每一主元素所在列的其余元素都是零，这种矩阵叫行简化阶梯矩阵(严格阶梯矩阵)。由增广矩阵（假设它已是行简化阶梯矩阵）易见，方程组有解的充要条件是$d_r+1=0$，因为$d_r+1\neq0$时，其中第$r+1$行对应的方程显然无解。在有解的情况下：

1. 当$r=n$，且$c_11=c_{22}=\cdots=c_{nn}=1$时，有唯一解$x_1=d_1,x_2=d_2,\cdots x_n=d_n$。
2. 当$r< n$时,有无穷多个解,求解时把增广矩阵中每行的主元素所在列对应的未知量取作基本末知量，其余的取作自由未知量，并把自由未知量依次取任意常数$k_1,k_2,\cdots,k_{n-r}$，将它们代人对应的方程组即可解得基本未知量，从而得到方程组的全部解。

上式所示的线性方程组$A\boldsymbol X=\boldsymbol b$，实际上是一个映射，它是$m\times n$的系数矩阵$A$把$n$元列向量$X=(x_1,x_2,\cdotp\cdotp\cdotp,x_n)^{\mathrm{T}}$映射（或说变换）为$m$元列向量$\boldsymbol b=(b_1,b_2,\cdots,b_m)^\mathrm{T}$，即：

$A:\boldsymbol X\rightarrow\boldsymbol b$

求一个线性方程组$A\boldsymbol X=\boldsymbol{b}$的解，也就是给定了映射$A$和这个映射的象$\boldsymbol b$,求$\boldsymbol b$在这个映射下的完全原象或逆象（即线性方程组的解集合$S$）。

$$S=A^{-1}(\boldsymbol b)=\{\boldsymbol X\mid \boldsymbol X\in\mathbb{R}^n且A\boldsymbol{X}=\boldsymbol{b}\}$$

求$b$的原象是映射（或变换）的反问题，是反变换，用高斯消元法我们以实现这个反变换，对于给定的$A$和$\boldsymbol b$，$\boldsymbol b$ 的原象可能不存在，即$A^-1(b)=\emptyset$

如果把线性方程组的系数矩阵$A$的$n$个列向量记作：

$$\boldsymbol{\beta}_j=(a_{1j},a_{2j},\cdots,a_{mj})^\mathrm{T}=\begin{pmatrix}a_{1j}\\a_{2j}\\\vdots\\a_{mj}\end{pmatrix},\quad j=1,2,\cdots,n$$

则线性方程组等价于一个向量方程：

$$x_1\boldsymbol{\beta}_1+x_2\boldsymbol{\beta}_2+\cdots+x_n\boldsymbol{\beta}_n=b$$

这里的解$x_i$，就是方程组的解，所以方程组的解的情况取决于向量组$\boldsymbol \beta_i$在向量线性运算下的相互关系。向量方程有解，称$\boldsymbol b$可以由$\boldsymbol \beta_1,\boldsymbol \beta_2,\cdots,\boldsymbol \beta_n$线性表示。
