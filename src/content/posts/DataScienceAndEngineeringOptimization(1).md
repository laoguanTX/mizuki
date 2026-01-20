---
title: "数据科学与工程优化（一）"
published: 2025-07-22
category: ["程设计科", "人工智能"]
tags: ["人工智能"]
alias: "datascienceandengineeringoptimization(1)"
---

## 一、课程概述
本课程主要讨论数据科学中的优化问题，包含以下内容：

- 优化模型的基本形式与实际例子
- 一阶迭代方法
- 数据分析中的典型问题与优化方法

## 二、为什么要用优化？

在数据科学与机器学习中，很多问题都可以归结为优化问题。例如：

- 回归问题
- 数据补全问题
- 数据结构检测
- 降维问题
- 数据分类问题

这些问题通常涉及到参数的选择，使得模型对真实数据拟合得更好或者揭示数据的某种结构。

## 三、优化模型的基本形式

### 1、无约束优化模型

$$
\min_{x \in \mathbb{R}^n} f(x)
$$

其中 $f$ 是光滑函数（本课程中指 $C^1$ （连续函数）且梯度 Lipschitz 连续）。

### 2、正则化模型

正则化模型是一种在机器学习和统计建模中常用的方法，目的是防止模型过拟合（即模型在训练数据上表现很好，但在新数据上表现很差）。它通过在损失函数中加入一个“惩罚项”来约束模型参数，使模型不会变得过于复杂。

$$
\min_{x \in \mathbb{R}^n} f(x) + \lambda \Psi(x)
$$

- $\Psi:\mathbb{R}^n \to \mathbb{R}$ 是凸函数，可以是非光滑的，用于控制解的复杂度和结构。
- $\lambda$ 是正则化参数。

### 3、有约束优化模型

$$
\min_{x \in \mathbb{R}^n} f(x) \quad \text{s.t.} \quad x \in F
$$

例如：

$$
F = \{x \in \mathbb{R}^n : g(x) \leq 0, x \geq 0\}
$$

其中 $g: \mathbb{R}^n \to \mathbb{R}^q$，所有向量不等式分量逐个解释。

### 4、稀疏目标函数（函数和形式）

数据分析中目标函数常为分项和：

$$
f(x) = \sum_{j=1}^{m} f_j(x)
$$

每个 $f_j$ 只依赖于 $x$ 的部分分量，且 $n,m \gg 1$，通常只可得梯度，无高阶信息。

## 四、一阶迭代方法

一阶方法是一类迭代算法，产生解序列：

$$
(x_k)_{k \in \mathbb{N}} \rightarrow x^*
$$

每步更新：

$$
x_{k+1} = x_k + \alpha_k d_k
$$

- $d_k$ 由 $\nabla f(x)$ 或 $\nabla f_j(x)$ 计算
- 步长 $\alpha_k > 0$ 可固定或自适应

## 五、数据分析问题的优化建模

### 1、数据集与模型

- 数据集 $D = \{(a_j, y_j): j=1,\dots,m\}$，$a_j$ 是特征，$y_j$ 是观测
- 参数模型 $\Phi(\cdot; x): V \to W$，参数 $x \in \mathbb{R}^n$

### 2、数据拟合问题

目标：找到 $x$ 使得对所有 $j$ 有 $\Phi(a_j; x) \approx y_j$，即

$$
\min_{x \in \mathbb{R}^n} f(x)
$$

其中

$$
f(x) = L_D(x) := \frac{1}{m} \sum_{j=1}^{m} \ell(a_j, y_j; x)
$$

典型损失：

$$
\ell(a_j, y_j; x) = \|\Phi(a_j; x) - y_j\|^2
$$

## 六、回归问题

### 1、无截距线性回归

$$
\min_{x \in \mathbb{R}^n} \frac{1}{2m} \sum_{j=1}^{m} (a_j^T x - y_j)^2 = \frac{1}{2m} \|A x - y\|^2
$$

其中 $A = [a_1^T; \dots; a_m^T]$。

### 2、有截距线性回归

定义

$$
\tilde{x} = \begin{pmatrix} x \\ \beta \end{pmatrix}, \quad \tilde{a}_j = \begin{pmatrix} a_j \\ 1 \end{pmatrix}
$$

则模型为 $\Phi(\tilde{a}; \tilde{x}) = a^T x + \beta$。

### 3、Ridge回归 (Tikhonov正则化)

$$
\min_{x \in \mathbb{R}^n} \frac{1}{2m} \|A x - y\|^2 + \lambda \|x\|^2
$$

减少对噪声的敏感性。

### 4、Lasso回归

$$
\min_{x \in \mathbb{R}^n} \frac{1}{2m} \|A x - y\|^2 + \lambda \|x\|_1
$$

倾向于稀疏解（特征选择）。

## 七、字典学习（Dictionary Learning）

数据 $Y \in \mathbb{R}^{m \times p}$，学习字典 $A \in \mathbb{R}^{m \times n}$ 和稀疏编码 $X \in \mathbb{R}^{n \times p}$，使得

$$
A X \approx Y
$$

优化模型：

$$
\min_{A, X \in F_k(m, p)} \frac{1}{2 m p} \|A X - Y\|_F^2
$$

其中 $F_k(m, p)$ 表示每列至多 $k$ 个非零分量。

## 八、矩阵补全（Matrix Completion）

定义迹内积：

$$
\langle X, Y \rangle = \mathrm{tr}(X^T Y)
$$

数据拟合模型：

$$
\min_{X \in V} \frac{1}{2m} \sum_{j=1}^m (\langle A_j, X \rangle - y_j)^2 + \lambda \|X\|_*
$$

其中 $\|X\|_*$ 是核范数（奇异值之和），有助于获得低秩解。

## 九、稀疏逆协方差估计

样本估计：

$$
S = \frac{1}{m} \sum_{j=1}^m a_j a_j^T
$$

优化模型：

$$
\min_{X \in \mathrm{SR}_{n \times n}, X \succcurlyeq 0} \langle S, X \rangle - \log \det X + \lambda \|X\|_1
$$

- $X \succcurlyeq 0$ 表示 $X$ 半正定
- $-\log \det X$ 保证可逆，$\lambda \|X\|_1$ 使得 $X$ 稀疏

对数似然形式推导如下：

$$
\begin{aligned}
L_D(X) &= \langle S, X \rangle - \log \det X + \lambda \|X\|_1 \\
&= \frac{1}{m} \sum_{j=1}^m a_j^T X a_j - \log \det X + \lambda \|X\|_1 \\
&= -\frac{2}{m} \log \left( \prod_{j=1}^m (2\pi)^{-n/2} \det(X^{-1})^{-1/2} \exp\left\{-\frac{1}{2} a_j^T X a_j \right\} \right) - n\log(2\pi) + \lambda \|X\|_1
\end{aligned}
$$

## 十、主成分分析（PCA）

### 1、鲁棒PCA

数据矩阵 $Y \in \mathbb{R}^{m \times n}$ 拟合为低秩部分 $L$ 和稀疏部分 $S$：

$$
\min_{L, S \in \mathbb{R}^{m \times n}} \|Y - (L+S)\|_F^2 + \lambda \|L\|_* + \gamma \|S\|_1
$$

核范数鼓励 $L$ 低秩，$S$ 稀疏视为异常值。

### 2、稀疏主成分分析

传统PCA：

$$
\max_{v \in \mathbb{R}^n} v^T S v \quad \text{subject to} \quad \|v\|_2 = 1
$$

稀疏化约束：

$$
\max_{v} v^T S v \quad \text{subject to} \quad \|v\|_2 = 1, \|v\|_0 \leq k
$$

NP-难，可用凸松弛：

$$
\max_{M \in \mathrm{SR}_n} \langle S, M \rangle \quad \text{subject to} \quad M \succcurlyeq 0, \langle I, M \rangle = 1, \|M\|_1 \leq \rho
$$

## 十一、数据分离（支持向量机 SVM）

数据 $(a_j, y_j)$，$y_j \in \{+1, -1\}$，寻找分离超平面 $a^T x - \beta = 0$。

原始约束：

$$
y_j(a_j^T x - \beta) \geq 1, \forall j
$$

优化目标：

$$
\min_{x, \beta} \|x\|_2^2
$$

如果不可行，则使用软间隔：

$$
\min_{(x, \beta)} \frac{1}{m} \sum_{j=1}^m \max(1 - y_j(a_j^T x - \beta), 0) + \frac{\lambda}{2} \|x\|_2^2
$$

等价于：

$$
\min_{x \in \mathbb{R}^n, \beta \in \mathbb{R}, s \in \mathbb{R}^m} \frac{1}{m} \sum_{j=1}^m s_j + \frac{\lambda}{2}\|x\|_2^2 \\
\text{s.t.} \quad s_j \geq 1 - y_j(a_j^T x - \beta), \quad s_j \geq 0, \forall j
$$

引入非线性变换 $\zeta: \mathbb{R}^n \to \tilde{V}$，约束：

$$
y_j (\langle \zeta(a_j), x \rangle - \beta) \geq 1
$$

优化目标：

$$
\min_{x \in \tilde{V}, \beta \in \mathbb{R}} \frac{1}{m} \sum_{j=1}^m \max(1 - y_j(\langle \zeta(a_j), x \rangle - \beta), 0) + \frac{\lambda}{2} \langle x, x \rangle
$$

可等价为对偶问题：

$$
\min_{\alpha \in \mathbb{R}^m} \frac{1}{2} \alpha^T Q \alpha - \sum_{j=1}^m \alpha_j \\
\text{s.t.} \quad 0 \leq \alpha_j \leq \frac{1}{\lambda}, \forall j, \quad y^T \alpha = 0
$$

其中

$$
Q = (q_{k, l}) \in \mathrm{SR}_{m \times m}, \ q_{k, l} = y_k y_l \langle \zeta(a_k), \zeta(a_l) \rangle
$$

仅需核函数 $K(a_k, a_l) = \langle \zeta(a_k), \zeta(a_l) \rangle$，如高斯核：

$$
K(a_j, a_l) = \exp \left( -\frac{\|a_j - a_l\|^2}{2\sigma^2} \right)
$$

## 十二、多分类问题与逻辑回归

数据 $(a_j, y_j)$，$y_j \in \{e_1, \dots, e_M\}$，$e_i$ 是 $R^M$ 的标准基。

参数 $X = \{x^{[i]}: i = 1, \dots, M\}$，多项式回归概率模型：

$$
p_i(a; X) = \frac{\exp(a^T x^{[i]})}{\sum_{k=1}^M \exp(a^T x^{[k]})}, \quad i = 1, \dots, M
$$

最大化对数似然：

$$
\max_X \frac{1}{m} \sum_{j=1}^m \left[ y_j^T \begin{pmatrix}
x^{[1]} \\
\vdots \\
x^{[M]}
\end{pmatrix} a_j - \log \left( \sum_{k=1}^M \exp(x^{[k]T} a_j) \right) \right]
$$

如果 $y_j = e_i$，则 $y_j^T (x^{[1]}, \dots, x^{[M]})^T = x^{[i]}$。

## 十三、深度学习中的多分类逻辑回归

神经网络参数 $w = ((W_1, g_1), ..., (W_D, g_D))$，输入 $a$，$D$ 层：

$$
a^0 = a \\
a^{\ell} = \sigma(W_{\ell} a^{\ell-1} + g_{\ell}), \quad (\ell = 1, ..., D-1) \\
a^D = W_D a^{D-1} + g_D
$$

激活函数举例：

- $\sigma(t) = \frac{1}{1 + \exp(-t)}$（Sigmoid）
- $\sigma(t) = \max(t, 0)$（ReLU）
- $\sigma(t) = \tanh(t)$

最终优化目标：

$$
\max_{X, w} \frac{1}{m} \sum_{j=1}^m \left[ y_j^T \begin{pmatrix}
x^{[1]} \\
\vdots \\
x^{[M]}
\end{pmatrix} a^D_j(w) - \log \left( \sum_{k=1}^M \exp(x^{[k]T} a^D_j(w)) \right) \right]
$$

目标函数为分项和，但由于网络非线性，整体为非凸优化。
