---
title: "数据科学与工程优化（二）"
published: 2025-07-22
category: ["程设计科", "人工智能"]
tags: ["人工智能"]
alias: "datascienceandengineeringoptimization(2)"
---

## 一、基本术语和模型

考虑以下优化模型：

$$
\min_{x \in \mathbb{R}^n} f(x) \quad \text{s.t.} \quad x \in F
$$

### 1、最小化点的定义

- **局部极小点**（local minimiser）：$x^* \in F$，若存在 $\varepsilon > 0$，使得对所有 $x \in F \cap B_\varepsilon(x^*)$，有
  $$
  f(x^*) \leq f(x)
  $$
- **严格局部极小点**（strict local minimiser）：$x^* \in F$，若存在 $\varepsilon > 0$，使得对所有 $x \in F \cap B_\varepsilon(x^*)$，有
  $$
  f(x^*) < f(x)
  $$
- **全局极小点**（global minimiser）：$x^* \in F$，对所有 $x \in F$，有
  $$
  f(x^*) \leq f(x)
  $$

## 二、凸函数与强凸函数

### 1、凸函数定义

$f: \mathbb{R}^n \to \mathbb{R}$ 是**凸函数**，若对任意 $\lambda \in [0, 1]$，$x, y \in \mathbb{R}^n$，有：

$$
f((1-\lambda)x + \lambda y) \leq (1-\lambda)f(x) + \lambda f(y)
$$

凸函数的图像在任意两点之间，连线上的所有点的函数值都不高于这两点之间的线性插值。换句话说，连接函数图像上任意两点的直线，始终位于函数图像之上或与之重合。直观理解：如果你在函数图像上选取任意两点 $(x, f(x))$ 和 $(y, f(y))$，然后在这两点之间画一条直线，那么对于这条线上的任意一点，其纵坐标（线性插值）都大于等于函数在该点的值。这意味着函数图像是“向上弯曲”的，没有“凹陷”。

### 2、凸函数的梯度性质

设 $D \subseteq \mathbb{R}^n$ 为凸集，$f: D \to \mathbb{R}$ 凸且在 $x \in D$ 处可微，则有一阶泰勒展开是下界：

$$
f(x) + \nabla f(x)^T (y - x) \leq f(y), \quad \forall y \in D
$$

**推导：**

由凸性定义，
$$
f(\lambda y + (1-\lambda)x) \leq \lambda f(y) + (1-\lambda)f(x)
$$
令 $\lambda \to 0$，有
$$
f(x) + \frac{f(x + \lambda(y-x)) - f(x)}{\lambda} \leq f(y)
$$
取极限，左边为方向导数，即得证。

### 3、凸优化问题定义

若 $f$ 为凸函数，$F \neq \emptyset$ 且为凸集合，且 $F \subseteq \mathrm{dom}(f)$，则

$$
\min_{x \in \mathbb{R}^n} f(x) \quad \text{s.t.} \quad x \in F
$$

是**凸优化问题**。

### 4、强凸函数定义

$f: \mathbb{R}^n \to \mathbb{R}$ 是**强凸函数**，模 $\gamma > 0$，若对任意 $\lambda \in [0, 1]$，$x, y \in \mathbb{R}^n$，有：

$$
f((1-\lambda)x + \lambda y) \leq (1-\lambda)f(x) + \lambda f(y) - \frac{1}{2}\gamma \lambda(1-\lambda)\|x-y\|^2
$$

强凸函数的几何意义在于，相比普通凸函数，强凸函数的图像不仅在任意两点之间都在连线下方，还“向上弯曲”得更厉害。具体来说，定义中的额外项 $-\frac{1}{2}\gamma \lambda(1-\lambda)\|x-y\|^2$ 表示函数图像与两点连线之间至少有一个 $\gamma$ 相关的“距离”。这意味着强凸函数的最小值是唯一的，且优化算法收敛更快。可以类比为抛物线比直线更“陡”，强凸性让函数有更强的“弯曲”特性。

## 三、光滑函数（L-smooth）

$f: \mathbb{R}^n \to \mathbb{R}$（不必凸）是**L-光滑函数**，即其梯度是 $L$-Lipschitz 连续：
$$
\|\nabla f(x) - \nabla f(y)\| \leq L\|x - y\| \quad \forall x, y \in \mathbb{R}^n
$$

L-光滑函数的梯度满足 $L$-Lipschitz 连续，意味着函数的斜率（梯度）变化不会太快。具体来说，任意两点 $x, y$ 之间，梯度的变化幅度被 $L$ 控制：

- $L$ 越小，梯度变化越平缓，函数曲线越“光滑”；
- $L$ 越大，梯度变化可能更剧烈，函数曲线可能更“陡峭”。
几何直观：
在任意两点之间，函数的切线方向不会突然跳变，而是以受限的速度变化。这保证了优化算法（如梯度下降）在搜索最优解时，每一步的梯度信息都不会“失控”，从而有助于算法收敛。

可以把 $L$ 理解为“最大允许的弯曲度”，它限制了函数的“弯曲”速度，使得函数图像在任意小区间内都不会出现极端的尖锐变化。

## 四、凸优化性质

### 1、极小点的性质

设 $f: \mathbb{R}^n \to \mathbb{R}$ 为凸函数，则：

1. $x^* \in \mathbb{R}^n$ 是局部极小点 $\Leftrightarrow$ 是全局极小点
2. 极小点集合
   $$
   \arg\min_{x \in \mathbb{R}^n} f(x) := \{x^* : f(x^*) = \min_{x \in \mathbb{R}^n} f(x)\}
   $$
   是凸集
3. 若 $f$ 可微，则在极小点 $x^*$ 有
   $$
   \nabla f(x^*) = 0
   $$

### 2、光滑与强凸的进一步性质

1. 若 $f$ $\gamma$-强凸且可微，则有
   $$
   \frac{\gamma}{2} \|y-x\|^2 \leq f(y) - f(x) - \nabla f(x)^T (y - x) \quad \forall y \in \mathbb{R}^n
   $$
2. 若 $f$ $L$-光滑，则有
   $$
   f(y) - f(x) - \nabla f(x)^T (y - x) \leq \frac{L}{2} \|y-x\|^2 \quad \forall y \in \mathbb{R}^n
   $$

**推导：**

设 $f$ 在 $\mathbb{R}^n$ 上可微。

1. **强凸下的下界：**

  $f$ 是 $\gamma$-强凸函数，定义为：
  $$
  f(y) \geq f(x) + \nabla f(x)^T (y-x) + \frac{\gamma}{2}\|y-x\|^2, \quad \forall x, y \in \mathbb{R}^n
  $$
  即
  $$
  f(y) - f(x) - \nabla f(x)^T (y-x) \geq \frac{\gamma}{2}\|y-x\|^2
  $$

  由强凸定义，对任意 $\lambda \in [0,1]$，
  $$
  f((1-\lambda)x + \lambda y) \leq (1-\lambda)f(x) + \lambda f(y) - \frac{1}{2}\gamma\lambda(1-\lambda)\|x-y\|^2
  $$
  令 $\lambda \to 0$，用泰勒展开近似 $f(x+\lambda(y-x))$，有
  $$
  f(x+\lambda(y-x)) \approx f(x) + \lambda \nabla f(x)^T (y-x)
  $$
  带入强凸定义，忽略高阶项，得
  $$
  f(x) + \lambda \nabla f(x)^T (y-x) \leq (1-\lambda)f(x) + \lambda f(y) - \frac{1}{2}\gamma\lambda(1-\lambda)\|x-y\|^2
  $$
  化简并令 $\lambda \to 0$，得
  $$
  f(y) \geq f(x) + \nabla f(x)^T (y-x) + \frac{\gamma}{2}\|y-x\|^2
  $$

2. **光滑下的上界：**

  $f$ 是 $L$-光滑函数，梯度 $L$-Lipschitz，定义为：
  $$
  \|\nabla f(x) - \nabla f(y)\| \leq L\|x-y\|
  $$

  由梯度Lipschitz性质，积分路径上的梯度变化：
  $$
  f(y) = f(x) + \int_0^1 \nabla f(x + t(y-x))^T (y-x) dt
  $$
  用均值不等式和Lipschitz条件，有
  $$
  f(y) \leq f(x) + \nabla f(x)^T (y-x) + \frac{L}{2}\|y-x\|^2
  $$
  即
  $$
  f(y) - f(x) - \nabla f(x)^T (y-x) \leq \frac{L}{2}\|y-x\|^2
  $$

**结论：**  
- 强凸给出下界，保证函数“弯曲”至少为 $\gamma$；
- 光滑给出上界，限制函数“弯曲”至多为 $L$。


### 3、参数关系

若 $f$ 既 $\gamma$-强凸又 $L$-光滑，则 $\gamma \leq L$。

**证明：**

由上述性质，对任意 $y,x$，
$$
\frac{\gamma}{2} \|y-x\|^2 \leq \frac{L}{2} \|y-x\|^2
$$
故 $\gamma \leq L$。

### 4、强凸函数的极小点唯一性

若 $f$ 强凸，则全局极小点唯一。

## 五、收敛速度与收敛率

### 1、收敛方式的判据

迭代算法收敛通常可通过以下量：

- $\|\nabla f(x_k)\| \to 0$ 当 $k \to \infty$
- $\operatorname{dist}(0, \partial f(x_k)) \to 0$
- $\|x_k - x^*\| \to 0$ 或 $f(x_k) \to f(x^*)$

### 2、收敛率定义

设 $\{\varphi_k\}_{k \in \mathbb{N}} \subset \mathbb{R}_+$，$\lim_{k \to \infty} \varphi_k = 0$，则

- **线性收敛**（linear）：存在 $\sigma \in (0, 1)$，使得
  $$
  \frac{\varphi_{k+1}}{\varphi_k} \leq 1 - \sigma, \forall k
  $$
- **Q-超线性收敛**（Q-superlinear）：
  $$
  \lim_{k \to \infty} \frac{\varphi_{k+1}}{\varphi_k} = 0
  $$
- **Q-二次收敛**（Q-quadratic）：存在 $C > 0$ 使得
  $$
  \frac{\varphi_{k+1}}{\varphi_k^2} \leq C, \forall k
  $$

### 3、次线性收敛（sublinear）

若 $\varphi_k \to 0$ 的速度比线性慢，则为次线性收敛。

以下序列均次线性收敛：
- $\left(\frac{c}{\sqrt{k}}\right)$
- $\left(\frac{c}{k}\right)$
- $\left(\frac{c}{\ln(k+1)}\right)$