---
title: 常微分方程求解（6）
published: 2025-06-10
category: ["数学", "高等数学"]
tags: ["微积分", "常微分方程", "线性代数"]
alias: "odesolutions6"
---
设$n$阶常数矩阵$\mathbf{A}$中的每一元素$a_{ij}\ (i,j=1,\cdots,n)$都是常数，则称
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax} + \mathbf{f}(t)
$$
为常系数线性微分方程组。

我们先介绍常系数齐次方程组
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax}
$$
的解法，再讨论常系数非齐次方程组的情形。

## 一、常系数齐次线性方程组的解法

与解常系数线性方程类似，根据方程组是齐次、线性，$\mathbf{A}$ 是常数矩阵的特点，我们可设
$$
\mathbf{x} = \mathbf{v} e^{\lambda t}
$$
来试解，其中 $v$ 是常向量，$\lambda$ 是常数，二者待定。代入得：
$$
\lambda \mathbf{v} e^{\lambda t} = \mathbf{Av} e^{\lambda t}
$$
注意到 $\mathbf{v}=\mathbf{Ev}$, $\mathbf{E}$ 是单位矩阵：
$$
\mathbf{E} = 
\begin{pmatrix}
1 & 0 & \cdots & 0\\
0 & 1 & \cdots & 0\\
\vdots & \vdots & \ddots & \vdots\\
0 & 0 & \cdots & 1\\
\end{pmatrix}
$$
移项，并约去非零因子 $e^{\lambda t}$，有
$$
(\mathbf{A} - \lambda \mathbf{E}) \mathbf{v} = 0
$$

这是一个齐次线性代数方程组，$\mathbf{v}$ 的各分量是未知数。由线性代数可知，有非零解 $\mathbf{v}$（即$\mathbf{v}$的各分量不全为零）的充要条件是上式的系数行列式等于零，即：
$$
\det(\mathbf{A} - \lambda \mathbf{E}) = 0
$$
或：
$$
D(\lambda) = 
\begin{vmatrix}
a_{11}-\lambda & a_{12} & \cdots & a_{1n}\\
a_{21} & a_{22}-\lambda & \cdots & a_{2n}\\
\vdots & \vdots & \ddots & \vdots\\
a_{n1} & a_{n2} & \cdots & a_{nn}-\lambda
\end{vmatrix}
= 0
$$

在线性代数中，称上面方程为矩阵$\mathbf{A}$的特征方程，其根为$\mathbf{A}$的特征根（或称特征值）。与此类似，我们称其和其根为常系数齐次线性微分方程组的特征方程和特征根。

如果$\lambda = \lambda_k$是的一个特征根，则将它代入可求得相应的非零解 $\mathbf{v} = \mathbf{v}_k$。在线性代数中称这种非零向量$v_k$为矩阵$\mathbf{A}$属于$\lambda_k$的特征向量，从而：
$$
\mathbf{x}(t) = \mathbf{v}_k e^{\lambda_k t}
$$
是齐次方程的一个解。

### 1、特征根为单根

设矩阵$\mathbf{A}$的特征根都是单根，即有$n$个不同的特征根$\lambda_1,\cdots,\lambda_n$。又设$\mathbf{v}_i$是属于特征根$\lambda_i$的特征向量$(i=1,\cdots,n)$，则方程组有$n$个不同的解：
$$
\mathbf{v}_1 e^{\lambda_1 t},\ \mathbf{v}_2 e^{\lambda_2 t},\ \cdots,\ \mathbf{v}_n e^{\lambda_n t}
$$
由于它们在线性无关区间$(-\infty, +\infty)$，因此它们构成的一个基本解组。于是
$$
\mathbf{v} = \sum_{i=1}^n c_i \mathbf{v}_i e^{\lambda_i t}
$$
是的通解，其中$c_i(i=1,\cdots,n)$是任意常数。

### 2、特征根有复根

若特征方程有复数根，设$\mathbf{A}$是实数矩阵，复特征根必共轭地成对出现。设$\lambda_1 = \alpha + i\beta$是一个特征根，$\mathbf{v}_1 = \mathbf{p} + i\mathbf{q}$是属于$\lambda_1$的一个特征向量，则$\lambda_2 = \alpha - i\beta$也是的一个特征根，且$\mathbf{v}_2 = \mathbf{v}_1^* = \mathbf{p} - i\mathbf{q}$是属于$\lambda_2$的一个特征向量。因此有两个复值解
$$
\begin{aligned}
\mathbf{x}_1(t) &= (\mathbf{p} + i\mathbf{q}) e^{(\alpha + i\beta)t} \\
&= e^{\alpha t} (\mathbf{p}\cos\beta t - \mathbf{q}\sin\beta t) + i e^{\alpha t} (\mathbf{p}\sin\beta t + \mathbf{q}\cos\beta t) \\
\mathbf{x}_2(t) &= (\mathbf{p} - i\mathbf{q}) e^{(\alpha - i\beta)t} \\
&= e^{\alpha t} (\mathbf{p}\cos\beta t - \mathbf{q}\sin\beta t) - i e^{\alpha t} (\mathbf{p}\sin\beta t + \mathbf{q}\cos\beta t)
\end{aligned}
$$
它们的实部和虚部分别
$$
e^{\alpha t} (\mathbf{p}\cos\beta t - \mathbf{q}\sin\beta t),\quad e^{\alpha t} (\mathbf{p}\sin\beta t + \mathbf{q}\cos\beta t)
$$
是两个实值解。在基本解组中，$\lambda_1$和$\lambda_2$所对应的两个复值解用这两个实值解来代替，所得解组依然是一个基本解组。

### 3、特征根有重根

如果矩阵$\mathbf{A}$的特征根有重根，则不一定能得如单根情况下的$n$个线性无关的解，但有如下引理：

设矩阵$\mathbf{A}$的特征方程有$k$重特征根$\lambda_0$，则对应于$\lambda_0$，方程组有下述形式的$k$个线性无关的解：
$$
\mathbf{x}(t) = (\mathbf{v}_0 + \frac{t}{1!}\mathbf{v}_1 + \frac{t^2}{2!}\mathbf{v}_2 + \cdots + \frac{t^{k-1}}{(k-1)!}\mathbf{v}_{k-1}) e^{\lambda_0 t}
$$
其中$v_i (i=0,1,\cdots,k-1)$是某些常向量。

其证明思路是将上式代入，整理得到一系列递推方程：
$$
\begin{aligned}
(\mathbf{A}-\lambda_0 \mathbf{E})\mathbf{v}_0 &= \mathbf{v}_1 \\
(\mathbf{A}-\lambda_0 \mathbf{E})\mathbf{v}_1 &= \mathbf{v}_2 \\
&\vdots \\
(\mathbf{A}-\lambda_0 \mathbf{E})\mathbf{v}_{k-2} &= \mathbf{v}_{k-1} \\
(\mathbf{A}-\lambda_0 \mathbf{E})\mathbf{v}_{k-1} &= \mathbf{0}
\end{aligned}
$$
由线性代数理论知，这样可求得$k$个线性无关的向量$\mathbf{v}_0,\mathbf{v}_1,\cdots,\mathbf{v}_{k-1}$，从而得$k$个线性无关的解。

### 4、通解形式总结

设方程组
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax}
$$
的系数矩阵$\mathbf{A}$有$s$个不同的特征根$\lambda_1,\cdots,\lambda_s$，其重数分别为$n_1,\cdots,n_s$，$n_1+\cdots+n_s=n$。则：

1. 对于每一个根$\lambda_i$，方程组(3.24)存在形如
   $$
   \mathbf{p}_i^{(j)}(t) e^{\lambda_i t}\quad (j=1,2,\cdots,n_i)
   $$
   的$n_i$个线性无关的解，其中$\mathbf{p}_i^{(j)}(t)$是向量函数，其分量为$t$的次数不超过$n_i-1$的多项式；
2. 这些解线性无关，构成基本解组；
3. 方程组的通解为
   $$
   \mathbf{x}(t) = \sum_{i=1}^s \sum_{j=1}^{n_i} c_{ij} \mathbf{p}_i^{(j)}(t) e^{\lambda_i t}
   $$
   其中$c_{ij}$是任意常数。

## 二、常系数非齐次线性方程组的解法

对于右端特殊的常系数非齐次线性方程组，也可采用与线性方程类似的待定系数法求解。但一般性我们介绍变动任意常数法（变参数法）。

考虑一般非齐次线性方程组
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax}+ \mathbf{f}(t)
$$
设$\mathbf{A}$及$f(t)$在区间$(a,b)$内连续，且已知对应的齐次线性方程组
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax}
$$
的一个基本解矩阵为$\mathbf{X}(t)$，则其通解为
$$
\mathbf{x}(t) = \mathbf{X}(t) \mathbf{c}
$$
其中$\mathbf{c}$是$n$维任意常向量。设
$$
\mathbf{x} = \mathbf{X}(t) \mathbf{c}(t)
$$
是非齐次线性方程组的解，则
$$
\begin{align*}
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} &= \frac{\mathrm{d}\mathbf{X}}{\mathrm{d}t} \mathbf{c}(t) + \mathbf{X}(t) \frac{\mathrm{d}\mathbf{c}}{\mathrm{d}t} \\
&= \mathbf{A} \mathbf{X}(t) \mathbf{c}(t) + \mathbf{X}(t) \frac{\mathrm{d}\mathbf{c}}{\mathrm{d}t}
\end{align*}
$$
代入原方程得
$$
\mathbf{X}(t) \frac{\mathrm{d}\mathbf{c}}{\mathrm{d}t} = \mathbf{f}(t)
$$
由于$\mathbf{X}(t)$为基本解矩阵，其行列式不为零，故可求逆$\mathbf{X}^{-1}(t)$，于是
$$
\frac{\mathrm{d}\mathbf{c}}{\mathrm{d}t} = \mathbf{X}^{-1}(t) \mathbf{f}(t)
$$
积分得
$$
\mathbf{c}(t) = \int_{t_0}^{t} \mathbf{X}^{-1}(\tau) \mathbf{f}(\tau) \,\mathrm{d}\tau
$$
因此非齐次项的一个特解为
$$
\mathbf{x}^*(t) = \mathbf{X}(t) \int_{t_0}^{t} \mathbf{X}^{-1}(\tau) \mathbf{f}(\tau) \,\mathrm{d}\tau
$$
从而通解为
$$
\mathbf{x}(t) = \mathbf{X}(t) \mathbf{c} + \mathbf{X}(t) \int_{t_0}^{t} \mathbf{X}^{-1}(\tau) \mathbf{f}(\tau) \,\mathrm{d}\tau
$$
其中$\mathbf{c}$为$n$维任意常向量。

若给定初值条件$\mathbf{x}(t_0) = \mathbf{x}_0$，则可得$\mathbf{c} = \mathbf{X}^{-1}(t_0)\mathbf{x}_0$，于是初值问题
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{Ax} + \mathbf{f}(t),\qquad \mathbf{x}(t_0)=\mathbf{x}_0
$$
的解为
$$
\mathbf{x}(t) = \mathbf{X}(t) \mathbf{X}^{-1}(t_0) \mathbf{x}_0 + \mathbf{X}(t) \int_{t_0}^{t} \mathbf{X}^{-1}(\tau) \mathbf{f}(\tau)\,\mathrm{d}\tau
$$

### 三、消元法

对于未知函数个数不多（例如$n=2$）的常系数齐次或非齐次方程组，我们也可以采取反其道而行之的办法，将其化为高阶线性方程来求解。