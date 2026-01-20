---
title: 摩擦平衡问题
published: 2025-10-16
category: ["物理", "力学"]
tags: ["理论力学", "静力学"]
alias: "frictionequilibriumproblem"
---
## 一、滑动摩擦

### 1、库仑干摩擦理论

下图所示为在理论力学中，物块受摩擦的受力情况：

![image-20251016102125226](https://laoguantx.top/article/物理/理论力学/摩擦平衡问题/image-20251016102125226.png)

其中$F_{\max}$成为极限摩擦力（最大静摩擦力）。在实际情况下，物块底部的每一部分都受到摩擦力的作用，将支持力与摩擦力化简为一个力和一个力矩，再将力矩转化为力，将转化出的这个力向两个方向分解，即可得到上图结果，所以$F_N$与$F_{\max}$可以作用于一个点，并且不在物块的正上方，以保证力矩平衡。

### 2、摩擦角和自锁

#### (1) 总反力和摩擦角

<img src="https://laoguantx.top/article/物理/理论力学/摩擦平衡问题/image-20251016103537313.png" alt="image-20251016103537313" style="zoom:50%;" />

定义总反力为上图所示的$F_R$：
$$
F_R=F_N+F\quad\tan \varphi=\frac{F}{F_N}
$$
定义摩擦角为总反力最大的时候的$\varphi$角：
$$
F_{R\mathrm{m}}=F_N+F_{\max}\quad \tan\varphi_\mathrm{f}=\frac{F_{\max}}{F_N}
$$
又已知：
$$
\tan\varphi_\mathrm{f}=\frac{F_\mathrm{max}}{F_\mathrm{N}}=\frac{f_\mathrm{s}F_\mathrm{N}}{F_\mathrm{N}}=f_\mathrm{s}
$$
由此得到重要结论，摩擦角的正切值等于静摩擦因数。当物体平衡时，$0\le\varphi\le\varphi_{\mathrm{f}}$，当物体静止在支撑面时，支撑面的总反力的偏角不大于摩擦角。

#### (2) 两个重要结论

1. 如果作用于物体的主动力合力的作用线在摩擦角内，则不论这个力多大，物体总能平衡。这种现象被称为**自锁**。

   <img src="https://laoguantx.top/article/物理/理论力学/摩擦平衡问题/image-20251016104243007.png" alt="image-20251016104243007" style="zoom:50%;" />

2. 如果作用于物体的主动力合力的作用线在摩擦角外，则不论这个力多小，物体都不能保持平衡。

   ![image-20251016104437757](https://laoguantx.top/article/物理/理论力学/摩擦平衡问题/image-20251016104437757.png)

## 二、滚动摩阻

### 1、滚动摩阻的定义

当一物体沿着另一物体的表面滚动或具有滚动的趋势时，除可能受到滑动摩擦力外，还受到一个阻力偶的作用。这个阻力偶称为滚动摩阻。

### 2、滚动摩阻的性质与产生原因

![image-20251016110817996](https://laoguantx.top/article/物理/理论力学/摩擦平衡问题/image-20251016110817996-0584100.png)

由平衡条件得：
$$
G=-F_N,F_{f}=-F_{P}
$$
$G,F_N$组成阻止滚动的力偶，即滚阻力偶$M_r$。

### 3、滚动摩阻定律

实验表明，滚动摩阻力偶矩具有极限值$M_\mathrm{r,max}$，力偶矩一旦超过$M_\mathrm{r,max}$，滚子就不能保持平衡。滚阻力偶矩的极限值(最大值)可表示为：

$$
M_{\mathrm{r,max}}=F_{\mathrm{N}}\delta 
$$

$\delta$称为滚阻系数，具有长度量纲。它与滚子以及支承面的材料、硬度等物理因素有关。