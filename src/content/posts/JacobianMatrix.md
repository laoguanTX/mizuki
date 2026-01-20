---
title: 雅可比矩阵
published: 2025-04-20
category: ["数学", "高等数学"]
tags: ["线性代数", "微积分"]
alias: "jacobianmatrix"
---
## 一、雅可比矩阵的定义与推导
雅可比矩阵（Jacobian Matrix）是描述向量值函数一阶偏导数的矩阵。对于一个函数 $ \mathbf{f}: \mathbb{R}^n \to \mathbb{R}^m $，其雅可比矩阵 $ J_{\mathbf{F}} $ 是一个 $ m \times n $ 的矩阵，元素为各输出分量对输入变量的偏导数：
$$
J_{\mathbf{f}}(\mathbf{x}) = 
\begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_1}{\partial x_n} \\
\vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1} & \cdots & \frac{\partial f_m}{\partial x_n}
\end{bmatrix}
$$

### 1、从单变量导数到多变量全导数

在单变量微积分中，一元函数$f(x)$在$x$处的导数定义为

$$f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}h$$

它给出了函数在该点的最佳线性近似。推广到多元向量值函数$\mathbf{f}:\mathbb{R}^n\to\mathbb{R}^m$，我们希望类似地得到一个线性映射，使得

$$\mathbf{f}(\mathbf{x}+\mathbf{h})\approx\mathbf{f}(\mathbf{x})+D\mathbf{f}(\mathbf{x})\mathbf{h}$$

这里的$D\mathbf{f}(\mathbf{x})$就是雅可比矩阵，它由所有偏导数组成，其$(i,j)$元素为

$$(D\mathbf{f}(\mathbf{x}))_{ij}\:=\:\frac{\partial f_i}{\partial x_j}(\mathbf{x})\:.$$

从这一角度看，雅可比矩阵正是全导数的矩阵表示，将微积分的"导数"概念提升为“矩阵”层面，更形式化地，如果$\mathbf{f}$在$x$处可微，则有

$$\mathbf{f}(\mathbf{x}+\mathbf{h})=\mathbf{f}(\mathbf{x})+J_\mathbf{f}(\mathbf{x})\mathbf{h}+o(\|\mathbf{h}\|)$$

其中$J_{\mathbf{f}}(\mathbf{x})$ 即上述雅可比矩阵。

### 2、示例
设 $ \mathbf{F}(x, y) = \begin{bmatrix} x^2 y \\ \sin x + e^y \end{bmatrix} $，则雅可比矩阵为：
$$
J_{\mathbf{F}} = 
\begin{bmatrix}
2xy & x^2 \\
\cos x & e^y
\end{bmatrix}
$$

### 3、雅可比行列式：
当 $ m = n $ 时，雅可比矩阵的行列式称为雅可比行列式，记作 $ \det(J_{\mathbf{F}}) $ 或 $ |J| $。它表示函数在局部区域的体积缩放因子。

---

## 二、微积分中的应用

### 1、变量替换的积分
在多重积分中，雅可比行列式用于变量替换时调整体积元。例如，极坐标变换 $ (r, \theta) \to (x, y) $：
$$
x = r \cos \theta, \quad y = r \sin \theta
$$
雅可比矩阵为：
$$
J = 
\begin{bmatrix}
\cos \theta & -r \sin \theta \\
\sin \theta & r \cos \theta
\end{bmatrix}
$$
行列式 $ \det(J) = r $，因此积分转换公式为：
$$
\iint f(x, y) dx dy = \iint f(r \cos \theta, r \sin \theta) \cdot r \, dr d\theta
$$

### 2、隐函数定理
若 $ \mathbf{F}: \mathbb{R}^{n+k} \to \mathbb{R}^k $ 满足 $ \mathbf{F}(\mathbf{a}, \mathbf{b}) = \mathbf{0} $ 且雅可比矩阵 $ \frac{\partial \mathbf{F}}{\partial \mathbf{y}} $ 在点 $ (\mathbf{a}, \mathbf{b}) $ 可逆，则存在隐函数 $ \mathbf{y} = \mathbf{g}(\mathbf{x}) $。

---

## 三、线性代数中的应用

### 1、可逆性与局部线性近似
若雅可比行列式在某点非零（即 $ \det(J_{\mathbf{F}}) \neq 0 $），则函数在该点邻域内可逆（反函数定理）。例如，函数 $ \mathbf{F}(x, y) = \begin{bmatrix} e^x \cos y \\ e^x \sin y \end{bmatrix} $ 的雅可比行列式为 $ e^{2x} $，在 $ x $ 有限时总可逆。

### 2、体积缩放因子
线性变换 $ \mathbf{y} = A\mathbf{x} $ 的体积缩放因子为 $ |\det(A)| $。对于非线性变换，雅可比行列式 $ |J| $ 提供了局部体积缩放比例。

---

## 四、概率论中的应用

### 3、随机变量变换的密度转换
设随机变量 $ (X, Y) $ 的联合密度为 $ f_{X,Y}(x, y) $，经变换 $ U = g(X, Y), V = h(X, Y) $，则新密度为：
$$
f_{U,V}(u, v) = f_{X,Y}(x(u, v), y(u, v)) \cdot |J|
$$
其中 $ J $ 是逆变换 $ x(u, v), y(u, v) $ 的雅可比行列式。

**示例**：设 $ U = X + Y $, $ V = X - Y $，则逆变换为：
$$
X = \frac{U + V}{2}, \quad Y = \frac{U - V}{2}
$$
雅可比矩阵：
$$
J = 
\begin{bmatrix}
\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\
\frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
\end{bmatrix}
=
\begin{bmatrix}
\frac{1}{2} & \frac{1}{2} \\
\frac{1}{2} & -\frac{1}{2}
\end{bmatrix}
$$
行列式 $ \det(J) = -\frac{1}{2} $，故 $ |J| = \frac{1}{2} $。因此：
$$
f_{U,V}(u, v) = f_{X,Y}\left( \frac{u+v}{2}, \frac{u-v}{2} \right) \cdot \frac{1}{2}
$$

---

## 五、其他关键点

- **梯度与雅可比矩阵**：标量函数 $ f: \mathbb{R}^n \to \mathbb{R} $ 的梯度 $ \nabla f $ 是雅可比矩阵的特例（行向量）。
- **链式法则**：复合函数 $ \mathbf{F} \circ \mathbf{G} $ 的雅可比矩阵为 $ J_{\mathbf{F}} \cdot J_{\mathbf{G}} $。
