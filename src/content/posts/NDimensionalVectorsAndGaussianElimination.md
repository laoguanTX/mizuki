---
title: n元向量与高斯消元法
published: 2024-09-11
category: ["数学", "线性代数"]
tags: ["线性代数"]
alias: "ndimensionalvectorsandgaussianelimination"
---
### 一、$n$元向量

在研究问题过程中，有些研究对象可以用多个数组组成的有序数组来描述，例如在$n$元一次方程$a_1x_1+a_2x_2+\cdots+a_nx_n=b$中，可以用其系数和常数$b$排成有序$(n+1)$元数组$(a_1,a_2,\cdots,a_n,b)$来表示；在按照升幂排列成的一元$n$次多项式$P(x)=a_0+a_1x+a_2x^2+a_2x^3+\cdots+a_nx^n$中，可以用其系数组成的$(n+1)$元有序数组$(a_1,a_2,\cdots,a_n)$来表示。

由$n$个数$a_1,a_2,\cdots,a_n$组成的有序数组称为$n$元向量，记作$(a_1,a_2,\cdots,a_n)$，其中$a_i$称为$n$元向量的第$i$个分量。如果$a_i(i=1,2,\cdots,n)$ 是实（复）数，叫做实（复）向量。如果$n$个分量全为零，叫做零向量。全体$n$元实向量组成的集合记作$R^n$.$n$元向量可以看成是空间几何向量（三元向量）的推广，因此可把几何向量在坐标表示式下相等及加法和数乘运算推广到$n$元向量。以后常用$\boldsymbol{\alpha} , \boldsymbol{\beta }, \boldsymbol{\gamma}$等表示$n$元向量，用$\boldsymbol{0}$表示零向量。

设$\boldsymbol{\alpha}=\left(a_{1},a_{2},\cdots,a_{n}\right),\boldsymbol{\beta}=\left(b_{1},b_{2},\cdots,b_{n}\right)$，$\lambda$是一个数，我们定义：

1. $\boldsymbol{\alpha}=\boldsymbol{\beta}$当且仅当$a_i=b_i$，$i=1,2,\cdots,n$
2. $\boldsymbol{\alpha}+\boldsymbol{\beta}=\left(a_{1}+b_{1},a_{2}+b_{2},\cdots,a_{n}+b_{n}\right)$
3. $\lambda\boldsymbol{\alpha}=\left(\lambda a_{1},\lambda a_{2},\cdots,\lambda a_{n}\right)$
   其中$\boldsymbol{\alpha}+\boldsymbol{\beta},\lambda\boldsymbol{\alpha}$分别称为$\boldsymbol{\alpha}$与$\boldsymbol{\beta}$之和及数$\lambda$与$\boldsymbol{\alpha}$之乘积

显然，$n$元向量的加法与数量乘法也满足几何向量相应的运算规则。向量的加法与数量乘法统称为向量的线性运算。

### 三、高斯消元法

用高斯消元法求解$n$元一次方程的联立方程组（以后常称$n$元线性方程组），是用规范化的加减消元法将方程组化为容易求解的同解方程组，从而求得原方程组的解。

---

**例1** 求解三元一次方程组
$$\begin{align}\begin{cases}x_{1}+2x_{2}-5x_{3}=2 &\\2x_{1}-3x_{2}+4x_{3}=11 \\-4x_{1}-7x_{2}+17x_{3}=-7\end{cases}\end{align}$$

**解**   这里用高斯消元法，其消元步骤如下：
先将方程①分别乘$(-2)$和$4$加到方程②③上去，消去方程②③中的$x_1$，得：
$$\begin{align}-7x_2+14x_3&=7 \tag1 \\x_2-3x_3&=1 \tag2\end{align}$$

然后 ,将方程$(1)$乘$\frac17$加到方程$(2)$上去，消去方程$(2)$中的$x_2$，得：

$$\begin{align}-x_3=2\tag3\end{align}$$

于是，由$(3)$得$x_{3}=-2$，将其代入$(1)$得$x_{2}=-5$，再将它们代入原方程中得$x_{1}=2$.所以原方程组的解为$x_{1}=2,x_{2}=-5,x_{3}=-2$.

---
