---
title: 沃利斯（Wallis）积分公式
published: 2024-12-10
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "wallis’sintegralformula"
---
以正弦函数的沃利斯公式为例：记$I_n=\int_0^{\frac \pi 2}\sin^nx\mathrm{d}x$，当$n\geq2$时，应用凑微分和分部积分得：
$$
\begin{aligned}
I_n=&\int_0^{\frac\pi2}\sin^nx\mathrm{d}x\\
=&-\Big[\sin^{n-1}x \cos x \big|^{\frac \pi 2}_0-\int_0^{\frac\pi 2}\cos x \mathrm{d}(\sin^{n-2}x)\Big]\\
=&-\Big[0-0-(n-1)\int^\frac\pi2_0(1-\sin^2x)\sin^{n-2}x\mathrm{d}x\Big]\\
=&-(n-1)\Big[-\int^\frac\pi2_0\sin^{n-2}x\mathrm{d}x+\int_0^\frac\pi2\sin^nx\mathrm{d}x\Big]\\
=&(n-1)I_{n-2}-(n-1)I_n\\
\end{aligned}
$$
化简移项得：
$$I_n=\frac{n-1}{n}I_{n-2}$$
当$n$为偶数时：
$$I_n=\frac{n-1}{n}\cdot\frac{n-3}{n-2}\cdots\frac{1}{2}\cdot\frac\pi2$$
当$n$为奇数时：
$$I_n=\frac{n-1}{n}\cdot\frac{n-3}{n-2}\cdots\frac23$$

令$x=\frac\pi2-t$即可证明余弦公式的沃利斯公式。
根据这两个公式，可以推导出$\pi$的有理极限表达式：
$$\frac\pi2=\lim_{x\to+\infty}\Big[\frac{(2n)!!}{(2n-1)!!}\Big]^2\frac{1}{2n+1}$$
