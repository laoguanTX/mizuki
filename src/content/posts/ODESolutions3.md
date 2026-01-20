---
title: 常微分方程求解（3）
published: 2025-05-09
category: ["数学", "高等数学"]
tags: ["常微分方程"]
alias: "odesolutions3"
---


本篇文章讨论几种特殊形式的二阶微分方程，他们可以经过适当的变量替换降阶为一阶微分方程，称为可降阶的二阶微分方程，这里所用的一些处理方法，对于高阶方程也适用。下面讨论三种情况下的求解方法。

## 一、$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=f(x)$型的微分方程

对于标题指出的这类方程，只需积分两次，就能求得解。积分一次得到：
$$
\frac{\mathrm{d}y}{\mathrm{d}x}=\int f(x)\mathrm{d}x+c_1
$$
再积分一次得到：
$$
\begin{aligned}y&=\int\left[\int f(x)\mathrm{d}x+c_1\right]\mathrm{d}x+c_2\\&=\int\left[\int f(x)\mathrm{d}x\right]\mathrm{d}x+c_1x+c_2
\end{aligned}
$$
这是该方程的通解。

## 二、$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=f(x,\frac{\mathrm{d}y}{\mathrm{d}x})$型的微分方程

这类方程的特点是不明显含有未知函数 $y$，针对这一特点，我们把 $\frac{\mathrm{d}y}{\mathrm{d}x}$ 作为新的未知函数，并作如下变换：
令$\frac{\mathrm{d}y}{\mathrm{d}x}=p$，
于是$\frac{\mathrm{d}^2y}{\mathrm{d}x^2}=\frac{\mathrm{d}p}{\mathrm{d}x}$
代入原方程即得到一个关于 $p$ 与 $x$ 的一阶方程
$$
\frac{\mathrm{d}p}{\mathrm{d}x}=f(x,p)
$$
这里 $p$ 为未知函数.若能求出这个一阶方程的解 $p=\varphi(x,c_1)$，则由 $\frac{\mathrm{d}y}{\mathrm{d}x}=p=\varphi(x,c_1)$，就容易求得原方程的通解
$$
y=\int\varphi(x,c_1)\mathrm{d}x+c_2
$$
显然，对于 $y^{(n)}=f(x,y^{(n-1)})$ 型的微分方程 $(n\geqslant 2)$ ，可通过命 $y^{(n-1)}=p$ 得到 $y^{(n)}=\frac{\mathrm{d}p}{\mathrm{d}x}$，从而化为关于未知函数 $p$ 的一阶方程。如果能求出这个一阶方程的解 $p=\varphi(x,c_1)$，则由 $y^{(n-1)}=\varphi(x,c_1)$ 逐次积分，就可以得到通解：
$$
y=\underbrace{\int\cdots\int}_{n-1个}\varphi(x,c_1)dx\cdots dx+c_2x^{n-2}+c_3x^{n-3}+\cdots+c_n
$$

## 三、$\frac{\mathrm{d}^{2}y}{\mathrm{d}x^{2}}=f(y,\dfrac{\mathrm{d}y}{\mathrm{d}x})$型的微分方程

这类方程的特点是其中不明显含自变量 $x$ ，因此可把 $y$ 暂时作为这类方程的自变量。为此，作如下变换（注意与情况二不同之处）。
令$\frac{\mathrm{d}y}{\mathrm{d}x}=p$，于是：
$$
\dfrac{\mathrm{d}^{2}y}{\mathrm{d}x^{2}}=\dfrac{\mathrm{d}p}{\mathrm{d}x}=\dfrac{\mathrm{d}p}{\mathrm{d}y}\dfrac{\mathrm{d}y}{\mathrm{d}x}=p\dfrac{\mathrm{d}p}{\mathrm{d}y}
$$
把它们代入原方程得：
$$
p\dfrac{\mathrm{d}p}{\mathrm{d}y}=f(y,p)
$$
于是原方程降低一阶而成为 $p$ 关于 $y$ 的一阶微分方程。
对于不明显含自变量的高阶方程，亦可采用改办法，求出$\frac{\mathrm{d}^{3}y}{\mathrm{d}x^{3}},\frac{\mathrm{d}^{4}y}{\mathrm{d}x^{4}},\cdots$，再把 $y$ 看作自变量而把原方程降低一阶。