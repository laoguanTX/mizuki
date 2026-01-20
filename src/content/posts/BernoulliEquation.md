---
title: 伯努利方程
published: 2025-04-15
category: ["物理", "普通物理学"]
tags: ["流体力学"]
alias: "bernoulliequation"
---
伯努利方程描述了理想流体在稳态、不可压、无粘等条件下沿流线的能量守恒关系，其数学形式为

$$
\frac{p}{\rho} + \frac{v^2}{2} + gz = \text{常数},
$$

其中  
- $p$ 为流体压强  
- $\rho$ 为流体密度  
- $v$ 为流体速度  
- $z$ 为高度（或任意参考坐标系中的位移）  
- $g$ 为重力加速度

下面给出两种推导方法。

---

## 方法一：基于欧拉方程的推导

对于无粘、不可压的理想流体，欧拉方程写为

$$
\rho\frac{\mathrm{D}\mathbf{v}}{\mathrm{D}t} = -\nabla p + \rho \mathbf{g},
$$

其中 $\frac{\mathrm{D}}{\mathrm{D}t}$ 为物质导数，$\mathbf{g}$ 为重力加速度向量。对于稳态流动（即各物理量对时间不显含显式变化），沿流线积分可进行如下处理：

1. **沿流线方向考虑变化**

   对任意沿流线的微小位移 $\mathrm{d}\mathbf{r}$，考虑点乘 $\mathrm{d}\mathbf{r}$ 后有

   $$
   \rho\,\mathbf{v} \cdot \nabla\mathbf{v}\, \mathrm{d}s = -\mathbf{v} \cdot \nabla p\, \mathrm{d}s + \rho\, \mathbf{v}\cdot\mathbf{g}\, ds,
   $$

   其中 $\mathrm{d}s$ 是沿流线的微小弧长。利用流动的无旋性或沿流线分析，可以证明  
   $$
   \mathbf{v} \cdot \nabla \mathbf{v} = \nabla\left(\frac{v^2}{2}\right).
   $$

2. **将重力势能引入**

   重力场满足 $\mathbf{g} = -\nabla\Phi$，并定义重力势能 $\Phi=gz$。代入上式得

   $$
   \rho \nabla\left(\frac{v^2}{2}\right) = -\nabla p - \rho \nabla\Phi.
   $$

3. **整理并积分**

   将上式除以 $\rho$ 并整理可得

   $$
   \nabla\left(\frac{v^2}{2}+\frac{p}{\rho}+\Phi\right)=0.
   $$

   这意味着沿流线上，上述三个量的和为常数，即

   $$
   \frac{v^2}{2}+\frac{p}{\rho}+gz = \text{常数}.
   $$

---

## 方法二：基于能量守恒的推导

考虑沿流线的一个流体微团，从能量守恒的角度出发，可以证明流体所受的功转换为动能和重力势能的变化。

1. **对流体微团的功**

   考虑一个在微小位移 $\mathrm{d}s$ 内的流体微团，其受到压力的作用做功

   $$
   \delta W_p = -\frac{\mathrm{d}p}{\rho},
   $$

   其中 $\mathrm{d}p$ 为压强的微小变化，负号表示由高压区向低压区运动所做的正功。

2. **重力势能的变化**

   由重力势能的变化，有

   $$
   \delta W_g = -g\,\mathrm{d}z,
   $$

   其中 $\mathrm{d}z$ 为垂直高度的微小变化，负号同样对应于重力做功的方向。

3. **动能的变化**

   流体的动能变化为

   $$
   \mathrm{d}\left(\frac{v^2}{2}\right).
   $$

4. **能量守恒关系**

   对于稳态流动，外力对流体微团所做的总功必然等于动能和势能的变化，总能量守恒有

   $$
   \mathrm{d}\left(\frac{v^2}{2}\right) = -\frac{\mathrm{d}p}{\rho} - g\,\mathrm{d}z.
   $$

   将上述等式整理，可得

   $$
   \mathrm{d}\left(\frac{v^2}{2}+\frac{p}{\rho}+gz\right) = 0.
   $$

   积分后便得到伯努利方程

   $$
   \frac{v^2}{2}+\frac{p}{\rho}+gz = \text{常数}.
   $$

---

以上两种方法均表明，在无粘、不可压、稳态流动中，沿流线都有

$$
\frac{p}{\rho} + \frac{v^2}{2} + gz = \text{常数}.
$$

这就是伯努利方程的通解形式。