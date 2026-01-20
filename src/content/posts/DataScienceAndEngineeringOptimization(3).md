---
title: "数据科学与工程优化（三）"
published: 2025-07-22
category: ["程设计科", "人工智能"]
tags: ["人工智能"]
alias: "datascienceandengineeringoptimization(3)"
---

## 一、最速下降法

最速下降法（Steepest Descent）用于求解无约束优化问题：

$$
\min_{x \in \mathbb{R}^n} f(x)
$$

其中 $f: \mathbb{R}^n \to \mathbb{R}$ 是 $L$-光滑函数。算法通过迭代更新：

$$
x_{k+1} = x_k + \alpha_k d_k
$$
- $\alpha_k > 0$ 是步长（step length），在机器学习领域也常称为**学习率**（learning rate）。步长/学习率决定每次迭代沿搜索方向前进的距离，步长太小收敛慢，太大可能导致发散或振荡。两者本质相同，只是术语在不同领域有所区别。
- $d_k \in \mathbb{R}^n$ 是搜索方向（search direction）

### 1、最速下降法的选择

- 搜索方向：$d_k = -\nabla f(x_k)$
- 步长：$\alpha_k = \frac{1}{L}$（常数步长）

因此，迭代公式：

$$
x_{k+1} = x_k - \frac{1}{L} \nabla f(x_k)
$$

主要关心步长的选择：太小收敛慢，太大可能振荡。

## 二、学习率推导

由光滑性质（见 Part II）：

$$
f(y) \leq f(x) + \nabla f(x)^T (y - x) + \frac{L}{2} \|y - x\|^2, \quad \forall x, y \in \mathbb{R}^n
$$

令 $y = x + \alpha d$，且 $d = -\nabla f(x)$，得：

$$
f(x + \alpha d) \leq f(x) - \alpha \|\nabla f(x)\|^2 + \frac{\alpha^2 L}{2} \|d\|^2
$$

令 $d = -\nabla f(x)$，则 $\|d\| = \|\nabla f(x)\|$：

$$
f(x + \alpha d) \leq f(x) - \alpha \|\nabla f(x)\|^2 + \frac{\alpha^2 L}{2} \|\nabla f(x)\|^2
$$

令 $\phi(\alpha) = f(x) - \alpha \|\nabla f(x)\|^2 + \frac{\alpha^2 L}{2} \|\nabla f(x)\|^2$，对 $\alpha$ 求极小值：

$$
\frac{\mathrm{d} \phi}{\mathrm{d} \alpha} = -\|\nabla f(x)\|^2 + \alpha L \|\nabla f(x)\|^2 = 0 \\
\Longrightarrow \alpha^* = \frac{1}{L}
$$

## 三、基本不等式（收敛分析的核心工具）

**引理（最速下降法的基本不等式）**：

对于任意起点 $x_0$，最速下降法迭代有：

$$
f(x_{k+1}) = f\left(x_k - \frac{1}{L} \nabla f(x_k)\right) \leq f(x_k) - \frac{1}{2L} \|\nabla f(x_k)\|^2
$$

- 推导：将 $\alpha = \frac{1}{L}$ 和 $d = -\nabla f(x_k)$ 代入上述光滑性上界。
- 注意：该结果**不依赖凸性**！

## 四、收敛理论

### 1、一般情形（无凸性假设）

**定理（一般收敛性）**：

$f(x)$ $L$-光滑且有下界 $f$，用 $\alpha_k = 1/L$，则

$$
\min_{0 \leq k \leq T-1} \|\nabla f(x_k)\| \leq \sqrt{\frac{2L(f(x_0) - f)}{T}}
$$

- 表明 $\|\nabla f(x_k)\|$ 以 $O(1/\sqrt{T})$ 的速率收敛到零（次线性）。

**证明**：

由基本不等式（见上文）：
$$
f(x_{k+1}) \leq f(x_k) - \frac{1}{2L} \|\nabla f(x_k)\|^2
$$

两边同时累加 $k=0$ 到 $T-1$，得：
$$
\sum_{k=0}^{T-1} \left[ f(x_{k+1}) - f(x_k) \right] \leq -\frac{1}{2L} \sum_{k=0}^{T-1} \|\nabla f(x_k)\|^2
$$

左边是望远镜求和，化简为：
$$
f(x_T) - f(x_0) \leq -\frac{1}{2L} \sum_{k=0}^{T-1} \|\nabla f(x_k)\|^2
$$

移项并乘以 $2L$，得：
$$
\sum_{k=0}^{T-1} \|\nabla f(x_k)\|^2 \leq 2L (f(x_0) - f(x_T))
$$

由于 $f(x_T) \geq f$（$f$为下界），进一步有：
$$
\sum_{k=0}^{T-1} \|\nabla f(x_k)\|^2 \leq 2L (f(x_0) - f)
$$

因此，至少有一个 $k$ 使得 $\|\nabla f(x_k)\|^2$ 不大于平均值：
$$
\min_{0 \leq k \leq T-1} \|\nabla f(x_k)\|^2 \leq \frac{1}{T} \sum_{k=0}^{T-1} \|\nabla f(x_k)\|^2 \leq \frac{2L(f(x_0) - f)}{T}
$$

两边开方，得：
$$
\min_{0 \leq k \leq T-1} \|\nabla f(x_k)\| \leq \sqrt{ \frac{2L(f(x_0) - f)}{T} }
$$

证毕。

### 2、凸函数情形

**定理（凸且L-光滑）**：

$f$ $L$-光滑且凸，极小点 $x^*$，则

$$
f(x_T) - f(x^*) \leq \frac{L}{2T} \|x_0 - x^*\|^2
$$

- 次线性收敛，$O(1/T)$。

**证明**：

$L$-光滑性，任意 $x, y$ 有
$$
f(y) \leq f(x) + \nabla f(x)^T (y - x) + \frac{L}{2} \|y - x\|^2
$$
令 $y = x_k - \frac{1}{L} \nabla f(x_k)$，得
$$
f(x_{k+1}) \leq f(x_k) - \frac{1}{L} \|\nabla f(x_k)\|^2 + \frac{L}{2} \left(\frac{1}{L}\right)^2 \|\nabla f(x_k)\|^2 = f(x_k) - \frac{1}{2L} \|\nabla f(x_k)\|^2
$$

由凸性，任意 $x$，极小点 $x^*$ 有
$$
f(x) - f(x^*) \leq \nabla f(x)^T (x - x^*)
$$

由上一步递推
$$
f(x_{k+1}) - f(x^*) \leq f(x_k) - f(x^*) - \frac{1}{2L} \|\nabla f(x_k)\|^2
$$
由凸性
$$
f(x_k) - f(x^*) \leq \nabla f(x_k)^T (x_k - x^*)
$$

由L-光滑和凸性，有
$$
\|\nabla f(x_k)\|^2 \geq 2L (f(x_k) - f(x_{k+1}))
$$
或用
$$
f(x_k) - f(x^*) \leq \frac{1}{2\mu} \|\nabla f(x_k)\|^2
$$
（但此处仅用凸性，不用强凸）

将基本不等式递推 $T$ 步，得
$$
f(x_T) - f(x^*) \leq f(x_0) - f(x^*) - \frac{1}{2L} \sum_{k=0}^{T-1} \|\nabla f(x_k)\|^2
$$
由凸性和梯度下降方向，结合Jensen不等式，最终可推出
$$
f(x_T) - f(x^*) \leq \frac{L}{2T} \|x_0 - x^*\|^2
$$

### 3、强凸函数情形

**定理（强凸且L-光滑）**：

$f$ $L$-光滑且 $\gamma$-强凸，则极小点唯一 $x^*$，且

$$
f(x_{k+1}) - f(x^*) \leq \left(1 - \frac{\gamma}{L}\right)(f(x_k) - f(x^*))
$$

- 线性收敛，收敛速率为 $1 - \frac{\gamma}{L}$。

**证明**：

**证明方法**：

$f$ 是 $\gamma$-强凸，定义为对任意 $x, y \in \mathbb{R}^n$，
$$
f(y) \geq f(x) + \nabla f(x)^T (y - x) + \frac{\gamma}{2} \|y - x\|^2
$$

令 $y = x^*$ 为极小点，$\nabla f(x^*) = 0$，则
$$
f(x^*) \geq f(x) + \nabla f(x)^T (x^* - x) + \frac{\gamma}{2} \|x^* - x\|^2
$$
移项得
$$
f(x) - f(x^*) \leq \nabla f(x)^T (x - x^*) - \frac{\gamma}{2} \|x - x^*\|^2
$$

另一方面，强凸函数满足
$$
f(x) - f(x^*) \geq \frac{\gamma}{2} \|x - x^*\|^2
$$

此外，强凸与光滑性结合可推出梯度下界：
$$
\|\nabla f(x)\|^2 \geq 2\gamma (f(x) - f(x^*))
$$

这是通过 Cauchy-Schwarz 和强凸性质推导的，具体如下：

由强凸性，
$$
f(x) - f(x^*) \leq \nabla f(x)^T (x - x^*) - \frac{\gamma}{2} \|x - x^*\|^2
$$
而极小点 $x^*$ 满足 $\nabla f(x^*) = 0$，由一阶最优性条件，
$$
\nabla f(x)^T (x - x^*) \geq f(x) - f(x^*)
$$

结合以上两式，利用 Cauchy-Schwarz 不等式，
$$
\|\nabla f(x)\| \|x - x^*\| \geq \nabla f(x)^T (x - x^*) \geq f(x) - f(x^*)
$$

由强凸性下界 $\|x - x^*\|^2 \leq \frac{2}{\gamma}(f(x) - f(x^*))$，代入得
$$
\|\nabla f(x)\|^2 \geq 2\gamma (f(x) - f(x^*))
$$

该不等式在收敛分析中用于将函数值下降与梯度范数联系起来，是强凸问题线性收敛的关键。
$f$ 是 $\gamma$-强凸，任意 $x$，极小点 $x^*$ 有
$$
f(x) - f(x^*) \geq \frac{\gamma}{2} \|x - x^*\|^2
$$
且
$$
\|\nabla f(x)\|^2 \geq 2\gamma (f(x) - f(x^*))
$$

$f$ 是 $L$-光滑，任意 $x$，有
$$
f\left(x - \frac{1}{L} \nabla f(x)\right) \leq f(x) - \frac{1}{2L} \|\nabla f(x)\|^2
$$

对 $x_k$ 迭代：
$$
f(x_{k+1}) \leq f(x_k) - \frac{1}{2L} \|\nabla f(x_k)\|^2
$$
用强凸性质下界 $\|\nabla f(x_k)\|^2$：
$$
f(x_{k+1}) \leq f(x_k) - \frac{\gamma}{L}(f(x_k) - f(x^*))
$$
即
$$
f(x_{k+1}) - f(x^*) \leq \left(1 - \frac{\gamma}{L}\right)(f(x_k) - f(x^*))
$$

## 五、长步长最速下降法（Long-Step SD）

实际应用中，步长 $\alpha_k$ 和方向 $d_k$ 可更灵活选择：

- $f(x)$ 仍要求 $L$-光滑，有下界。
- $d_k$ 可为近似 $-\nabla f(x_k)$，只要与梯度夹角不太大。
- 步长 $\alpha_k$ 不宜太小或太大，需满足若干技术条件。

**条件举例**（Assumptions on SDM with line search）：

存在常数 $0 < \eta \leq 1$，$0 < c_1 < c_2 < 1$，对所有 $k$：

1. 充分下降方向：
   $$
   \nabla f(x_k)^T d_k \leq -\eta \|\nabla f(x_k)\| \|d_k\|
   $$
2. 步长不太长：
   $$
   f(x_k + \alpha_k d_k) \leq f(x_k) + c_1 \alpha_k \nabla f(x_k)^T d_k
   $$
3. 步长不太短：
   $$
   \nabla f(x_k + \alpha_k d_k)^T d_k \geq c_2 \nabla f(x_k)^T d_k
   $$

这些条件实际可通过简单的**线搜索**方法满足。

若满足以上条件，则（收敛性定理）

$$
\min_{0 \leq k \leq T-1} \|\nabla f(x_k)\| \leq \sqrt{
\frac{L}{\eta^2 c_1 (1 - c_2)} \cdot \frac{f(x_0) - f}{T}
}
$$

与常步长法相比，右侧仅差常数。

## 六、梯度下降法的局限性

- **依赖尺度**（scale-dependent）：若问题变量或目标函数缩放差异大，梯度方向效果差。
- **收敛慢**：尤其是变量尺度差异大时，梯度下降会在解空间“锯齿状”前进，进展很慢。

### 举例：二次型函数

$$
f(x) = \frac{1}{2}(a x_1^2 + x_2^2) = \frac{1}{2}x^T
\begin{pmatrix}
a & 0 \\
0 & 1
\end{pmatrix}
x
$$

- $a \gg 1$ 时，问题**病态**，收敛极慢。
- 若对变量做线性变换 $y = \begin{pmatrix} a^{1/2} & 0 \\ 0 & 1 \end{pmatrix} x$，则变成标准二次型，收敛快。

## 七、局部收敛速率（理论与实际）

对于 $f \in C^2$，$x^*$ 局部极小点，$\nabla^2 f(x^*)$ 正定，最大/最小特征值分别为 $\lambda_{\max}, \lambda_{\min}$，条件数 $K = \lambda_{\max}/\lambda_{\min}$。

最速下降法收敛因子：

$$
\rho_{SD} = \left( \frac{K - 1}{K + 1} \right)^2
$$

条件数大时，$\rho_{SD}$ 靠近 1，收敛极慢。例如：

- Rosenbrock函数，$K = 258.1$，$\rho_{SD} \approx 0.984$
- $K = 800$，迭代 1000 次，目标函数下降有限

理论上收敛线性，但实际非常慢，尤其是病态问题。