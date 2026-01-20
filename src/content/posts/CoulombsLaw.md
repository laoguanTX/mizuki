---
title: 库仑定律
published: 2025-09-23
category: ["物理", "普通物理学"]
tags: ["电学"]
alias: "coulombslaw"
---

## 一、库仑定律

真空中两静止点电荷 $q_1,q_2$ 之间的的库仑力 $F$ 大小为：
$$
F=k\frac{q_1q_2}{r^2}
$$
其中 $k$ 为库仑常数，大小为 $9.0\times 10^9\mathrm{Nm^2/C^2}$ 。常常进入真空中的介电常数 $\varepsilon_0=\frac{1}{4\pi k}$ ，将库仑定律写为以下形式：
$$
F=\frac{1}{4\pi k}\cdot\frac{q_1q_2}{r^2}
$$


观察库仑定律的形式，可以发现库仑定律形式与万有引力公式形式十分相似。然而在万有引力公式中，是首先根据 $F=ma$ 得到力的大小后，测算出 $G$ 的值，而在库仑定律中，是首先确定 $k$ 的值，根据量纲，从而确定 $1\mathrm{C}=6\times 10^{18} \mathrm{e}$。

## 二、电荷

### 1、电荷密度

1. 线电荷密度：$\lambda = \frac{\mathrm{d}q}{\mathrm{d}x}$
2. 面电荷密度：$\sigma = \frac{\mathrm{d}q}{\mathrm{d}A}$
3. 体电荷密度：$\rho = \frac{\mathrm{d}q}{\mathrm{d}v}$

### 2、计算

> **例1**：均匀带电环对点电荷$q_0$作用的库仑力是什么？
>
> ![1](https://laoguantx.top/article/物理/普通物理学/库仑定律/1.png)
>
> **解**：计算线密度：
> $$
> \lambda=\frac{q}{2\pi R}
> $$
> 然后得出库仑力$F$的微分方程：
> $$
> \mathrm{d}F=\frac{1}{4\pi\varepsilon_0}\frac{q_0\mathrm{d}q}{r^2}=\frac{1}{4\pi\varepsilon_0}\frac{q_0\lambda R\mathrm{d}\phi}{(z^2+R^2)}
> $$
> 两边积分：（根据对称性，$x,y$方向的力相互抵消）
> $$
> \begin{aligned}F_z&=\int \mathrm{d}F_z\\&=\int \mathrm{d}F\cos\theta\\&=\int\frac{1}{4\pi\varepsilon_0}\frac{q_0\lambda R\mathrm{d}\phi}{(z^2+R^2)}\frac{z}{\sqrt{z^2+R^2}}\\&=\frac{1}{4\pi\varepsilon_0}\frac{q_0\lambda Rz}{\left(z^2+R^2\right)^{3/2}}\int_0^{2\pi}\mathrm{d}\phi\\&=\frac{1}{4\pi\varepsilon_0}\frac{q_0qz}{\left(z^2+R^2\right)^{3/2}}\end{aligned}
> $$
> 特别地，当$z\to \infty$时：
>
> $$
> F_z\approx\frac{1}{4\pi\varepsilon_0}\frac{q_0q}{z^2}
> $$
> 当$z=0$时：
> $$
> F_z=0
> $$
> 

> **例2**：均匀带电圆盘对点电荷$q_0$作用的库仑力是什么？
>
> ![2](https://laoguantx.top/article/物理/普通物理学/库仑定律/2.png)
>
> 可以将均匀带电圆盘看成是无数个均匀带电的同心圆环叠加，使用微积分求解。面电荷密度为：
> $$
> \sigma = \frac{q}{\pi R^2}
> $$
> 每一段圆环的带电量：
> $$
> \mathrm{d}q=\sigma \mathrm{d}A=\sigma(2\pi\omega \mathrm{d}\omega)=2\pi\sigma\omega \mathrm{d}\omega
> $$
> 得到库仑力的微分方程：（$x,y$方向的库仑力相互抵消）
> $$
> \mathrm{d}F_z=\frac{1}{4\pi\varepsilon_0}\frac{q_0(2\pi\sigma\omega \mathrm{d}\omega)z}{\left(z^2+\omega^2\right)^{3/2}}
> $$
> 两边积分：
> $$
> \begin{aligned}F_z&=\frac{1}{4\pi\varepsilon_0}q_02\pi\sigma z\int_0^R\frac{\omega \mathrm{d}\omega}{\left(z^2+\omega^2\right)^{3/2}}\\&=\frac{1}{4\pi\varepsilon_0}\frac{2q_0q}{R^2}(1-\frac{z}{\sqrt{z^2+R^2}})\end{aligned}
> $$

### 3、电荷守恒

#### (1)正负电荷湮灭现象

$$
e^++e^-=2\gamma
$$

即一个正电子和负电子结合，会变成两个光子。

#### (2)中子的$\beta$衰变

$$
n \rightarrow p + e^- + \tilde{\nu}_e
$$

即一个中子衰变成一个质子，产生一个电子和一个反电子中微子。

#### (3)中性$\pi$介子的衰变

$$
\pi^0 \rightarrow 2\gamma
$$

中性$\pi$介子是由夸克-反夸克组成的不稳定粒子，它主要通过电磁相互作用衰变为两个光子。
