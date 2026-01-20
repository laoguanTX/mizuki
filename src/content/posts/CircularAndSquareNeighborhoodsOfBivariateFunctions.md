---
title: 二元函数的圆邻域与方邻域
published: 2025-04-10
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "circularandsquareneighborhoodsofbivariatefunctions"
---
在二维欧几里得空间中，我们常常用**邻域**来描述一个点周围的“微小区域”。对于一个点 $(x_0, y_0) \in \mathbb{R}^2$，两种常见的邻域是**圆邻域**和**方邻域**。下面我们详细讨论它们的定义、公式推导及两者之间的关系。

---

## 一、定义与基本公式

### 1、圆邻域（开圆盘）

圆邻域使用欧几里得距离，也称为 $L^2$ 范数。对于给定半径 $r>0$，点 $(x_0, y_0)$ 的开圆邻域定义为  
$$
B\big((x_0, y_0), r\big)=\{(x,y) \in \mathbb{R}^2 : \sqrt{(x-x_0)^2+(y-y_0)^2} < r\}.
$$
用平方来表示，可以写作  
$$
B\big((x_0, y_0), r\big)=\{(x,y) \in \mathbb{R}^2 : (x-x_0)^2+(y-y_0)^2 < r^2\}.
$$
这种定义下的邻域是一个以 $(x_0, y_0)$ 为中心、半径为 $r$ 的开圆盘。

### 2、方邻域（开方形）

方邻域通常利用无穷范数（或称为切比雪夫距离）来定义。对于给定 $\delta>0$，点 $(x_0, y_0)$ 的开方邻域可定义为  
$$
S\big((x_0, y_0), \delta\big)=\{(x,y) \in \mathbb{R}^2 : |x-x_0|<\delta \text{ 且 } |y-y_0|<\delta\}.
$$
这实际上描述了一个以 $(x_0, y_0)$ 为中心、边长为 $2\delta$ 的正方形区域。

---

## 二、邻域间的包含关系及不等式证明

在二维空间中，可以定义两种常用的向量范数：欧几里得范数和无穷范数。设对于向量 $\mathbf{v} = (x,y)$ 有  
$$
\|\mathbf{v}\|_2 = \sqrt{x^2+y^2} \quad \text{和} \quad \|\mathbf{v}\|_\infty = \max\{|x|,|y|\}.
$$
它们之间满足以下不等式：
$$
\|\mathbf{v}\|_\infty \le \|\mathbf{v}\|_2 \le \sqrt{2}\,\|\mathbf{v}\|_\infty.
$$
考虑邻域中心的平移，即设 $\mathbf{v} = (x-x_0, y-y_0)$，我们有
- 如果 $\sqrt{(x-x_0)^2+(y-y_0)^2} = \|\mathbf{v}\|_2 < r$，则必有
  $$
  \|\mathbf{v}\|_\infty < r.
  $$
  换句话说，任何在圆邻域 $B\big((x_0, y_0), r\big)$ 内的点必定满足 $|x-x_0| < r$ 和 $|y-y_0| < r$，即  
  $$
  B\big((x_0, y_0), r\big) \subset S\big((x_0, y_0), r\big).
  $$
- 另一方面，如果 $\|\mathbf{v}\|_\infty<\delta$ ，即 $|x-x_0|<\delta$ 且 $|y-y_0|<\delta$，则有
  $$
  \|\mathbf{v}\|_2 < \sqrt{2}\,\delta.
  $$
  即点 $(x,y)$ 必定落在半径为 $\sqrt{2}\,\delta$ 的圆邻域内，从而
  $$
  S\big((x_0, y_0), \delta\big) \subset B\big((x_0, y_0), \sqrt{2}\,\delta\big).
  $$

因此，我们得到了如下包含关系：
$$
B\big((x_0, y_0), r\big) \subset S\big((x_0, y_0), r\big) \quad \text{且} \quad S\big((x_0, y_0), \delta\big) \subset B\big((x_0, y_0), \sqrt{2}\,\delta\big).
$$
这表明虽然两种邻域在拓扑意义上是等价（都可以作为生成拓扑的基），但在度量具体估计上存在尺度上的不同。

---

## 三、在函数极限与连续性证明中的应用

在讨论二元函数 $f(x,y)$ 在点 $(x_0, y_0)$ 处的极限或连续性时，我们常使用 $\varepsilon$–$\delta$ 定义：
$$
\lim_{(x,y) \to (x_0,y_0)} f(x,y) = L \quad \Longleftrightarrow \quad \forall \varepsilon>0,\ \exists\, \delta>0,\ \text{使得}\ 0<\sqrt{(x-x_0)^2+(y-y_0)^2} < \delta \Rightarrow |f(x,y)-L|<\varepsilon.
$$
这里用的是 **圆邻域** 的定义，因为条件自然转化为欧几里得距离小于 $\delta$.

有时，为了简化估计，我们也可能使用 **方邻域** 定义：  
$$
\forall \varepsilon>0,\ \exists\, \delta>0,\ \text{使得}\ 0<|x-x_0|<\delta \text{ 且 } 0<|y-y_0|<\delta \Rightarrow |f(x,y)-L|<\varepsilon.
$$
虽然这种证明方式与使用圆邻域在逻辑上是等价的，但在选取 $\delta$ 时需要注意前述两者之间的包含关系。比如，在证明极限存在时，如果你能证明在开方邻域内 $|f(x,y)-L|<\varepsilon$，那么由于  
$$
B\big((x_0, y_0), \delta\big) \subset S\big((x_0, y_0), \delta\big),
$$
你同样能保证在圆邻域内成立；反之亦然，在选取 $\delta$ 时可能需要引入 $\sqrt{2}$ 的因子进行调整.

---

## 四、总结

- **圆邻域 $B\big((x_0, y_0), r\big)$** 由公式
  $$
  \{(x,y) \in \mathbb{R}^2 : (x-x_0)^2+(y-y_0)^2 < r^2\}
  $$
  给出，是以欧几里得距离为基础的“圆形”区域.

- **方邻域 $S\big((x_0, y_0), \delta\big)$** 由公式
  $$
  \{(x,y) \in \mathbb{R}^2 : |x-x_0|<\delta,\; |y-y_0|<\delta\}
  $$
  给出，是以无穷范数为基础的“正方形”区域.

- 利用范数之间的不等式
  $$
  \|\mathbf{v}\|_\infty \le \|\mathbf{v}\|_2 \le \sqrt{2}\,\|\mathbf{v}\|_\infty,
  $$
  我们可以证明两种邻域存在如下包含关系：
  $$
  B\big((x_0, y_0), r\big) \subset S\big((x_0, y_0), r\big) \quad \text{和} \quad S\big((x_0, y_0), \delta\big) \subset B\big((x_0, y_0), \sqrt{2}\,\delta\big).
  $$

在实际应用中（例如在证明极限存在或讨论连续性时），选择哪一种邻域主要取决于证明的便利性及后续估计的需要。两者在拓扑意义上是等价的，但在具体估计常数时，如 $\delta$ 和 $\sqrt{2}\delta$ 的问题需要特别注意.

以上推导和公式详细展现了二元函数中圆邻域与方邻域的定义、公式推导以及二者之间的区别和联系.