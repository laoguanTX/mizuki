---
title: 点的合成运动
published: 2025-10-28
category: ["物理", "力学"]
tags: ["理论力学", "运动学"]
alias: "compositionofapointsmotion"
---
## 一、合成运动基本概念

### 1、两种参考系

- 静参考系（定系）：相对地面不动的参考系。
- 动参考系（动系）：相对静系运动着的参考系。

### 2、三种运动

#### (1) 三种运动定义

- 绝对运动：动点对于定参考系的运动。

  绝对运动轨迹：动点相对定系的运动轨迹。

- 相对运动：动点对于动参考系的运动。

  相对运动轨迹：动点相对动系的运动轨迹。

- 牵连运动：动参考系对于定参考系的运动。

#### (2) 绝对、相对、牵连运动间的关系

<img src="https://laoguantx.top/article/物理/理论力学/点的合成运动/image-20251023115850823.png" alt="image-20251023115850823" style="zoom:50%;" />

设绝对运动符号$x,y$，相对运动符号$x',y'$，牵连运动符号$x_0,y_0,\varphi$。根据坐标变换：
$$
x=x_{o^{\prime}}+x^{\prime}\cos\varphi-y^{\prime}\sin\varphi 
$$

$$
y=y_{o^{\prime}}+x^{\prime}\sin\varphi+y^{\prime}\cos\varphi
$$

但是，复杂的关系难以建立，仅知道某瞬时速度和加速度的情况难以建立上述关系。

#### (3) 复合运动

由于牵连运动的存在，使物体的绝对运动和相对运动发生了差别。如果没有牵连运动，物体的相对运动等同于它的绝对运动。如果没有相对运动，物体的牵连运动就是它的绝对运动。由此可见，物体的绝对运动可以看成是牵连运动和相对运动的合成结果。所以绝对运动也称为复合运动或合成运动。

#### (4) 重要结论

- 物体对于不同的参考系，运动各不相同。
- 绝对运动与相对运动都是指点的运动；牵连运动则是刚体的运动。

### 3、三种速度和三种加速度

动点在绝对运动中：

- 绝对速度$v_a$：动点相对定系的速度。
- 绝对加速度$a_a$：动点对于定系的加速度。

动点在相对运动中：

- 相对速度$v_r$：动点相对动系的速度。
- 相对加速度$a_r$：动点对于动系的加速度。

牵连运动中的速度与加速度：

- 动参考系的运动是刚体的运动而不是一个点的运动，所以除非动参考系做平移，否则其上各点的运动都不完全相同。因为动参考系与动点直接相关的是动参考系上与动点相重合的那一点，我们将此点定义为牵连点。动参考系上与动点相重合的那一点（牵连点）的速度和加速度称为动点的牵连速度和牵连加速度。

### 4、动点与动系的选择

#### (1) 原则

1. 动点对动系要有相对运动。
2. 动点的相对轨迹要容易确定。

#### (2) 具体选择方法

1. 选择持续接触点为动点。
2. 动系固连在牵连点所在的物体上，这样相对运动轨迹就很容易确定。
3. 对没有持续接触点的问题，一般不选择接触点为动点。根据选择原则具体问题具体分析。

## 二、点的速度合成定理

### 1、定理推导

<img src="https://laoguantx.top/article/物理/理论力学/点的合成运动/image-20251028140131426.png" alt="image-20251028140131426" style="zoom:200%;" />

上图中$O$为静系，$O'$为动系，于是可以使用如下方程描述相对运动：
$$
\begin{aligned}
\vec{r}' &= \vec{r}'(t) \\
x' &= x'(t) \\
y' &= y'(t) \\
z' &= z'(t) \\
\vec{r}' &= x' \vec{i}' + y' \vec{j}' + z' \vec{k}'
\end{aligned}
$$

对相对运动的方程求导，得到相对速度：
$$
\vec{v}_r = \frac{\mathrm{d}x'}{\mathrm{d}t} \vec{i}' + \frac{\mathrm{d}y'}{\mathrm{d}t} \vec{j}' + \frac{\mathrm{d}z'}{\mathrm{d}t} \vec{k}'
$$

> [!NOTE]
>
> 在动系中做运算时，$\vec{i}', \vec{j}', \vec{k}'$都是常矢量。

同样地，写出牵连点的矢径：
$$
\vec{r}_1 = \vec{r}_{o'} + x' \vec{i}' + y' \vec{j}' + z' \vec{k}'
$$
求导，可以得到牵连速度：
$$
\vec{v}_e = \frac{\mathrm{d}\vec{r}_1}{\mathrm{d}t} \bigg|_{x',y',z'=C} = \frac{\mathrm{d}\vec{r}_{o'}}{\mathrm{d}t} + x' \frac{\mathrm{d}\vec{i}'}{\mathrm{d}t} + y' \frac{\mathrm{d}\vec{j}'}{\mathrm{d}t} + z' \frac{\mathrm{d}\vec{k}'}{\mathrm{d}t}
$$

> [!NOTE]
>
> 在静系中做牵连运动的计算时，认为动点在动系中的$x', y', z'$为常量，研究动系坐标轴的运动。

绝对运动可以表示为：
$$
\begin{aligned}
\vec{r} &= \vec{r}_{o'} + \vec{r}' \\
\vec{r} &= \vec{r}_{o'} + x' \vec{i}' + y' \vec{j}' + z' \vec{k}'
\end{aligned}
$$
求导，可以得到绝对速度：
$$
\vec{v}_a = \frac{\mathrm{d}\vec{r}}{\mathrm{d}t} = \frac{\mathrm{d}\vec{r}_{o'}}{\mathrm{d}t} + \frac{\mathrm{d}x'}{\mathrm{d}t} \vec{i}' + \frac{\mathrm{d}y'}{\mathrm{d}t} \vec{j}' + \frac{\mathrm{d}z'}{\mathrm{d}t} \vec{k}' + x' \frac{\mathrm{d}\vec{i}'}{\mathrm{d}t} + y' \frac{\mathrm{d}\vec{j}'}{\mathrm{d}t} + z' \frac{\mathrm{d}\vec{k}'}{\mathrm{d}t}
$$

> [!NOTE]
>
> 在静系中做运算时，$x', y', z', \vec{i}', \vec{j}', \vec{k}'$都不是常矢量。

综合上面的公式，可以发现：
$$
\vec{v}_a = \vec{v}_e + \vec{v}_r
$$
这就是点的运动的合成定理。

### 2、定理说明

1. 牵连运动是指刚体（动系）的运动；而牵连速度是指刚体上一点（与动点相重合的点）的速度。
2. 速度合成定理为平面矢量方程，由此可以写出两个投影式，所以可以求解两个未知量。每个速度都有大小和方向两个要素（共6个），所以只有已知4个要素时才能画出平行四边形。
3. 作速度平行四边形时，要使绝对速度作为对角线。
4. 速度合成定理对任意形式的牵连运动都适用。

## 三、点的加速度合成定理

### 1、定理推导

> [!IMPORTANT]
>
> 自己拿着上面的速度公式导去，懒得写了，麻烦的要死。

绝对加速度：

$$
\vec{a}_a = \frac{\mathrm{d}\vec{v}_a}{\mathrm{d}t} = \frac{\mathrm{d}^2\vec{r}_{o'}}{\mathrm{d}t^2} + x' \frac{\mathrm{d}^2\vec{i}'}{\mathrm{d}t^2} + y' \frac{\mathrm{d}^2\vec{j}'}{\mathrm{d}t^2} + z' \frac{\mathrm{d}^2\vec{k}'}{\mathrm{d}t^2} + \frac{\mathrm{d}^2x'}{\mathrm{d}t^2} \vec{i}' + \frac{\mathrm{d}^2y'}{\mathrm{d}t^2} \vec{j}' + \frac{\mathrm{d}^2z'}{\mathrm{d}t^2} \vec{k}' + 2 \frac{\mathrm{d}x'}{\mathrm{d}t} \frac{\mathrm{d}\vec{i}'}{\mathrm{d}t} + 2 \frac{\mathrm{d}y'}{\mathrm{d}t} \frac{\mathrm{d}\vec{j}'}{\mathrm{d}t} + 2 \frac{\mathrm{d}z'}{\mathrm{d}t} \frac{\mathrm{d}\vec{k}'}{\mathrm{d}t}
$$

相对加速度：

$$
\vec{a}_r = \frac{\mathrm{d}\vec{v}_r}{\mathrm{d}t} \bigg|_{\vec{i}', \vec{j}', \vec{k}' = \text{常矢量}} = \frac{\mathrm{d}^2x'}{\mathrm{d}t^2} \vec{i}' + \frac{\mathrm{d}^2y'}{\mathrm{d}t^2} \vec{j}' + \frac{\mathrm{d}^2z'}{\mathrm{d}t^2} \vec{k}'
$$

牵连加速度：

$$
\vec{a}_e = \frac{\mathrm{d}\vec{v}_e}{\mathrm{d}t} \bigg|_{x', y', z' = \text{常量}} = \frac{\mathrm{d}^2\vec{r}_{o'}}{\mathrm{d}t^2} + x' \frac{\mathrm{d}^2\vec{i}'}{\mathrm{d}t^2} + y' \frac{\mathrm{d}^2\vec{j}'}{\mathrm{d}t^2} + z' \frac{\mathrm{d}^2\vec{k}'}{\mathrm{d}t^2}
$$

观察上面方程，得到：
$$
\vec{a}_a=\vec{a}_r+\vec{a}_e+2 \frac{\mathrm{d}x'}{\mathrm{d}t} \frac{\mathrm{d}\vec{i}'}{\mathrm{d}t} + 2 \frac{\mathrm{d}y'}{\mathrm{d}t} \frac{\mathrm{d}\vec{j}'}{\mathrm{d}t} + 2 \frac{\mathrm{d}z'}{\mathrm{d}t} \frac{\mathrm{d}\vec{k}'}{\mathrm{d}t}
$$
如果牵连运动是平移运动，那么$\vec{i}',\vec{j}',\vec{k}'$对时间的导数为零，则可以得到在该种情况下的加速度的合成定理：
$$
\vec{a}_a=\vec{v}_c+\vec{v}_r
$$
如果牵连运动是定轴转动，根据[这篇文章](https://www.laoguantx.top/posts/basicmotionofrigidbodies)末尾的附加证明，可以得到：

$$
\frac{\mathrm{d}\vec{i}'}{\mathrm{d}t} = \vec{\omega} \times \vec{i}'
$$

$$
\frac{\mathrm{d}\vec{j}'}{\mathrm{d}t} = \vec{\omega} \times \vec{j}'
$$

$$
\frac{\mathrm{d}\vec{k}'}{\mathrm{d}t} = \vec{\omega} \times \vec{k}'
$$

故原式可以写为：
$$
\vec a_a=\vec a_r+\vec a_e+2\vec \omega\times \vec v_r
$$
或者：
$$
\vec{a}_a=\vec a_r+\vec a_e+\vec a_c\quad\text{其中 }\vec a_c=2\vec \omega\times \vec v_r
$$

### 2、定理说明

$$
\vec{a}_a=\vec a_r+\vec a_e+\vec a_c
$$

1. 这个公式可以推广于任意平面运动，任意空间运动的情形。

2. 在自然轴下，需要分别向切向和径向进行分解：
   $$
   \vec a_a^\tau+\vec a_a^n=\vec a_e^\tau+\vec a_e^n+\vec a_r^\tau+\vec a_r^n+\vec a_\mathrm{c}
   $$
