---
title: 各种群的定义
published: 2024-09-11
category: ["数学", "线性代数"]
tags: ["线性代数"]
alias: "definitionsofvariousgroups"
---
### 一、定义

代数系统$\langle G: \circ \rangle$称为群，如果：

0. 运算封闭性。

1. 运算$\circ$满足结合律，即$\forall a,b,c\in G,a\circ(b\circ c)=(a\circ b)\circ c$

2. $G$关于运算$\circ$存在单位元，即$\exists e\in G$，使 $\forall a\in G$，有 $a\circ e=e\circ a=a$

3. $G$中每个元素关于$\circ$都可逆，即$\forall a\in G,\exists b\in G$使得$a\circ b=$ $b\circ a=e$（单位元），并称$a$为可逆元，$b$为$a$的逆元，记作$b=a^{-1}$.

$\left\langle G:\circ\right\rangle$是一个群，也说$G$关于$\circ$构成群。如果运算还满足交换律，即$\forall a,b\in G$，有$a\circ b=b\circ a$，则称$\langle G: \circ \rangle$为交换群，也称Abel群。

当$\langle G:\circ\rangle$适合条件1时称之为半群。所以说，半群是一个带有结合律的二元运算的非空集合。

当$\langle G:\circ\rangle$适合条件1和2时，称之为含幺半群。

如果群$G$的子集$H$关于$G$的运算也构成群，则称$H$为$G$的子群，记作$H\leq G$。

---

**例1** 判断下面是否为半群。

1. $R[x]=\{a_0+a_1x+\ldots+a_nx^n+\ldots|a_i\in R\}$
2. $R[x]_{n}=\{a_0+a_1x+\ldots+a_{n}x^{n}|n\ge0,a_{i}\in R\}$
3. $S=\{a_0+a_1x+a_2x^2+\ldots+a_{n}x^{n}|a_{i}\in R,a_{n}\ne0\}$
4. 向量叉乘

**解** 

1. 是

2. 不是，此中乘法不构成半群，运算不封闭。

3. 多项式加法不封闭，例如两者$a_n$互为相反数。

4. 不是。

   $$\begin{aligned}&i\times j=k=-j\times i\\&(i\times i)\times j=0\\&i\times(i\times j)=i\times k=-j\end{aligned}$$

---
