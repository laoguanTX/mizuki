---
title: 各类积分的定义及表达
published: 2025-05-12
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "definitionsandexpressionsofvariousintegrals"
---
## 一、不定积分（Indefinite Integral）

**数学定义：**

$$
\int f(x)\,\mathrm{d}x = F(x) + C,\quad \text{其中 } F'(x) = f(x)
$$

**通俗解释：**  
找到一个函数，其导数为已知函数 $f(x)$，即反导数。

## 二、定积分（Definite Integral）

**数学定义：**

$$
\int_a^b f(x)\,\mathrm{d}x = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x_i
$$

**通俗解释：**  
表示函数图像与 $x$ 轴之间在 $[a, b]$ 区间的带符号面积或某种累积总量。

## 三、二重积分（Double Integral）

**数学定义：**

$$
\iint_D f(x, y)\,\mathrm{d}x\,\mathrm{d}y = \lim_{\max(\Delta x_i, \Delta y_j) \to 0} \sum_{i, j} f(x_{ij}^*, y_{ij}^*) \Delta x_i \Delta y_j
$$

**通俗解释：**  
在一个平面区域 $D$ 上对函数 $f(x,y)$ 进行“面积加权求和”，可用于计算面积、体积、质量等。

## 四、三重积分（Triple Integral）

**数学定义：**

$$
\iiint_\Omega f(x, y, z)\,\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z = \lim_{\max(\Delta x_i, \Delta y_j, \Delta z_k) \to 0} \sum_{i,j,k} f(x_{ijk}^*, y_{ijk}^*, z_{ijk}^*) \Delta x_i \Delta y_j \Delta z_k
$$

**通俗解释：**  
在三维区域 $\Omega$ 内，对函数 $f(x, y, z)$ 进行体积积分，比如求体积、总质量、总能量等。

## 五、第一类曲线积分（Line Integral of the First Kind）

**数学定义：**

设曲线 $C$ 参数化为 $\vec{r}(t) = (x(t), y(t)),\ t \in [a,b]$，则

$$
\int_C f(x, y)\,\mathrm{d}s = \int_a^b f(x(t), y(t)) \sqrt{\left( \frac{\mathrm{d}x}{\mathrm{d}t} \right)^2 + \left( \frac{\mathrm{d}y}{\mathrm{d}t} \right)^2}\,\mathrm{d}t
$$

**通俗解释：**  
沿着曲线 $C$ 累加标量函数 $f(x,y)$ 的值，比如计算弯曲线上的质量或能量总量。

## 六、第二类曲线积分（Line Integral of the Second Kind）

**数学定义：**

设向量场 $\vec{F} = (P(x,y), Q(x,y))$，曲线 $C$ 参数化为 $\vec{r}(t) = (x(t), y(t))$，则

$$
\int_C \vec{F} \cdot \mathrm{d}\vec{r} = \int_C P\,\mathrm{d}x + Q\,\mathrm{d}y = \int_a^b \left[ P(x(t), y(t)) \frac{\mathrm{d}x}{\mathrm{d}t} + Q(x(t), y(t)) \frac{\mathrm{d}y}{\mathrm{d}t} \right] \mathrm{d}t
$$

**通俗解释：**  
计算向量场沿曲线 $C$ 所做的“功”或“推力总量”。

## 七、第一类曲面积分（Surface Integral of the First Kind）

**数学定义：**

设曲面 $S$ 可参数化为 $\vec{r}(u,v)$，则

$$
\iint_S f(x, y, z)\,\mathrm{d}S = \iint_D f(\vec{r}(u,v)) \left\| \frac{\partial \vec{r}}{\partial u} \times \frac{\partial \vec{r}}{\partial v} \right\|\,\mathrm{d}u\,\mathrm{d}v
$$

**通俗解释：**  
在曲面上“加总”一个标量场的值，如计算分布在膜面上的质量或热量等。

## 八、第二类曲面积分（Surface Integral of the Second Kind）

**数学定义：**

设 $\vec{F} = (P, Q, R)$，单位法向量为 $\vec{n}$，则

$$
\iint_S \vec{F} \cdot \mathrm{d}\vec{S} = \iint_S (P, Q, R) \cdot \vec{n}\,\mathrm{d}S = \iint_S P\,\mathrm{d}y\,\mathrm{d}z + Q\,\mathrm{d}z\,\mathrm{d}x + R\,\mathrm{d}x\,\mathrm{d}y
$$

或参数化为：

$$
\iint_D \vec{F}(\vec{r}(u,v)) \cdot \left( \frac{\partial \vec{r}}{\partial u} \times \frac{\partial \vec{r}}{\partial v} \right)\,\mathrm{d}u\,\mathrm{d}v
$$

**通俗解释：**  
表示向量场穿过曲面的通量，如流体穿过曲面、磁场穿过线圈等。