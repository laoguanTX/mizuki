---
title: "数据科学与工程优化（五）"
published: 2025-07-23
category: ["程设计科", "人工智能"]
tags: ["人工智能"]
alias: "datascienceandengineeringoptimization(5)"
---

## 一、随机梯度下降法（SGD）背景

许多机器学习与数据科学中的目标函数都具有**求和结构**：

$$
\min_{x \in \mathbb{R}^n} f(x) = \frac{1}{m} \sum_{j=1}^{m} f_j(x)
$$

例如，$f_j(x) = \|a_j^T x - y_j\|^2$，$(a_j, y_j)$ 是数据点，$m$ 很大。

**标准梯度下降法**每步需计算：

$$
\nabla f(x_k) = \frac{1}{m} \sum_{j=1}^m \nabla f_j(x_k)
$$

计算复杂度高达 $O(mn)$，昂贵且不适合大规模问题。因此我们考虑**近似计算梯度**。

## 二、随机梯度与SGD算法

### 1、小批量梯度与期望

定义：对任意索引集 $S = \{j_1, ..., j_p\}$，可定义小批量目标和梯度：

$$
f_S(x) = \frac{1}{p} \sum_{\ell=1}^p f_{j_\ell}(x), \qquad
\nabla f_S(x) = \frac{1}{p} \sum_{\ell=1}^p \nabla f_{j_\ell}(x)
$$

若 $j_\ell$ 独立均匀采样自 $\{1, ..., m\}$，则

$$
\mathbb{E}[\nabla f_S(x)] = \nabla f(x)
$$

即小批量梯度是全梯度的**无偏估计**。

### 2、SGD算法流程

1. 给定初始点 $X_0$（可随机）。
2. 对 $k=0,1,2,\ldots$ 重复：
    - 随机采样 $S_k=\{j_1, ..., j_{p_k}\}$，每个 $j_\ell$ 独立采自 $\{1,...,m\}$
    - $G_k = \nabla f_{S_k}(X_k)$
    - $X_{k+1} = X_k - \alpha_k G_k$
3. 步长 $\alpha_k$ 可固定或动态调整，$p_k$ 常常取1（单样本），也可取小批量。

由于 $\nabla f(X_k)^T (-G_k)$ 不一定 $<0$，每步不保证严格下降，因此分析**期望下降**。

## 三、条件期望与马尔可夫性质

- 记 $\mathbb{E}_k[Y]$ 为对 $(X_0, S_0,\ldots,S_k)$ 的期望。
- $X_{k+1}$ 仅依赖于 $X_k$ 和 $S_k$，是**马尔可夫过程**。
- 有 $\mathbb{E}[G_k | X_k] = \nabla f(X_k)$。

## 四、数值举例

### 1、二分类问题（MNIST 4 vs 9）

目标函数：
$$
\min_{x \in \mathbb{R}^n} \frac{1}{m} \sum_{i=1}^m (a_i^T x - y_i)^2
$$
其中 $y_i=1$（数字9），$y_i=-1$（数字4）。

SGD设置：$\alpha_k=0.001$，$|S_k|=1$。数值结果显示目标减少但后期有波动（噪声地板，noise floor）。

### 2、一般化SGD

更一般形式为：
$$
f(x) = \mathbb{E}_\xi[F(x,\xi)]
$$
每步采样 $\xi_k$，取 $G_k = \nabla_x F(X_k, \xi_k)$。同理，
$$
\mathbb{E}_{\xi_k}[\nabla_x F(X_k, \xi_k)|X_k] = \nabla f(X_k)
$$

## 五、L-光滑情形下的SGD收敛性

### 1、假设

1. 每个 $f_j$ 都是 $L$-光滑函数 $\Rightarrow f$ 也是 $L$-光滑。
2. 存在 $M>0$，使得
   $$
   \operatorname{VAR}(G_k|X_k) := \mathbb{E}[(G_k - \nabla f(X_k))^T (G_k - \nabla f(X_k)) | X_k] \leq M
   $$
   即条件方差有界。

   **证明：**

   由于 $G_k = \nabla f_{S_k}(X_k)$ 是对样本集 $S_k$ 的梯度均值，且每个 $j_\ell$ 独立均匀采样自 $\{1, ..., m\}$，我们有
   $$
   \mathbb{E}[G_k | X_k] = \nabla f(X_k)
   $$
   计算条件方差：
   $$
   \operatorname{VAR}(G_k|X_k) = \mathbb{E}[\|G_k - \nabla f(X_k)\|^2 | X_k]
   $$
   对于单样本（$|S_k|=1$），
   $$
   \operatorname{VAR}(G_k|X_k) = \frac{1}{m} \sum_{j=1}^m \|\nabla f_j(X_k) - \nabla f(X_k)\|^2
   $$
   若每个 $\|\nabla f_j(x)\|$ 在所有 $x$ 上有界，即存在 $C>0$ 使得 $\|\nabla f_j(x)\| \leq C$，则
   $$
   \operatorname{VAR}(G_k|X_k) \leq 4C^2
   $$
   因此，若每个分量梯度有界，则条件方差有界，满足假设2。

### 2、关键引理：期望过估计（Overestimation in expectation）

**引理：**

在上述假设下，
$$
\mathbb{E}[f(X_{k+1}) | X_k] \leq f(X_k) - \alpha_k \|\nabla f(X_k)\|^2 + \frac{L (\alpha_k)^2}{2} \mathbb{E}[\|G_k\|^2 | X_k]
$$

若进一步有条件方差界 $M$，则
$$
\mathbb{E}[f(X_{k+1}) | X_k] \leq f(X_k) + \alpha_k \left( \frac{L \alpha_k}{2} - 1 \right) \|\nabla f(X_k)\|^2 + \frac{ML (\alpha_k)^2}{2}
$$

- 当 $\alpha_k$ 足够小，右侧为严格下降。

**证明：**

由 $L$-光滑性，
$$
f(X_k - \alpha_k G_k) \leq f(X_k) - \alpha_k \nabla f(X_k)^T G_k + \frac{L}{2} (\alpha_k)^2 \|G_k\|^2
$$
对 $G_k$ 条件期望，利用 $\mathbb{E}[G_k|X_k] = \nabla f(X_k)$，由 $L$-光滑性，有
$$
f(X_k - \alpha_k G_k) \leq f(X_k) - \alpha_k \nabla f(X_k)^T G_k + \frac{L}{2} (\alpha_k)^2 \|G_k\|^2
$$

对 $S_k$ 条件期望（即对 $G_k$ 关于 $X_k$ 的条件期望）：
$$
\mathbb{E}[f(X_{k+1})|X_k] \leq f(X_k) - \alpha_k \nabla f(X_k)^T \mathbb{E}[G_k|X_k] + \frac{L}{2} (\alpha_k)^2 \mathbb{E}[\|G_k\|^2|X_k]
$$

由于 $\mathbb{E}[G_k|X_k] = \nabla f(X_k)$，代入得
$$
\mathbb{E}[f(X_{k+1})|X_k] \leq f(X_k) - \alpha_k \|\nabla f(X_k)\|^2 + \frac{L}{2} (\alpha_k)^2 \mathbb{E}[\|G_k\|^2|X_k]
$$

### 3、收敛性定理（L-光滑情况下）

**定理：**

设 $f$ 有下界 $f$，满足上述假设。SGD 用定步长 $\alpha_k \equiv \eta/L$，$\eta \in (0,1]$，则
$$
\min_{0 \leq i \leq k-1} \mathbb{E}[\|\nabla f(X_i)\|^2] \leq \eta M + \frac{2L(f(x_0) - f)}{k \eta}
$$

即噪声存在，$\|\nabla f(X_k)\|^2$ 只收敛到 $\eta M$，无法无限趋近于零（称为noise floor）。

**证明：**

由关键引理，
$$
\mathbb{E}[f(X_{k+1}) | X_k] \leq f(X_k) + \alpha_k \left( \frac{L\alpha_k}{2} - 1 \right) \|\nabla f(X_k)\|^2 + \frac{ML\alpha_k^2}{2}
$$
取 $\alpha_k \equiv \eta/L$，其中 $\eta \in (0,1]$，则
$$
\frac{L\alpha_k}{2} - 1 = \frac{\eta}{2} - 1 \leq 0
$$
因此，
$$
\mathbb{E}[f(X_{k+1}) | X_k] \leq f(X_k) - \frac{\eta}{2} \|\nabla f(X_k)\|^2 + \frac{M\eta^2}{2L}
$$
对 $X_k$ 取全期望，记 $f_k = \mathbb{E}[f(X_k)]$，有
$$
f_{k+1} \leq f_k - \frac{\eta}{2} \mathbb{E}[\|\nabla f(X_k)\|^2] + \frac{M\eta^2}{2L}
$$
移项并累加 $k=0$ 到 $k-1$，得
$$
\sum_{i=0}^{k-1} \mathbb{E}[\|\nabla f(X_i)\|^2] \leq \frac{2}{\eta}(f_0 - f_k) + \frac{M\eta}{L}k
$$
由于 $f_k \geq f$（$f$ 为下界），
$$
\sum_{i=0}^{k-1} \mathbb{E}[\|\nabla f(X_i)\|^2] \leq \frac{2}{\eta}(f(x_0) - f) + \frac{M\eta}{L}k
$$
两边同时除以 $k$，并取最小值有
$$
\min_{0 \leq i \leq k-1} \mathbb{E}[\|\nabla f(X_i)\|^2] \leq \frac{1}{k} \sum_{i=0}^{k-1} \mathbb{E}[\|\nabla f(X_i)\|^2] \leq \eta M + \frac{2L(f(x_0) - f)}{k\eta}
$$
证毕。

## 六、强凸情形下的SGD收敛性

### 1、假设

1. $f_j$ $L$-光滑，$f$ $L$-光滑。
2. $f$ 是 $\gamma$-强凸函数，即
   $$
   2\gamma (f(x) - f(x^*)) \leq \|\nabla f(x)\|^2
   $$
   极小点 $x^*$ 唯一。
3. 步长 $\alpha_k \equiv \eta/L, \; \eta \in (0,1]$
4. 有界方差：$\operatorname{VAR}(G_k|X_k)\leq M$

### 2、收敛性定理

**定理（SGD 强凸情形）：**

SGD 以 Q-线性速率收敛到残差：
设条件数 $\kappa = L/\gamma$，则
$$
\mathbb{E}[f(X_k)] - f(x^*) \leq \frac{\eta M}{2\gamma} + \left(1 - \frac{\eta}{\kappa}\right)^k \left[f(x_0) - f(x^*) - \frac{\eta M}{2\gamma}\right]
$$

- $k \to \infty$ 时，极限误差为 $\frac{\eta M}{2\gamma}$，依赖噪声和步长。


**证明：**

由基础引理（L-光滑且 $\gamma$-强凸）：
$$
\mathbb{E}[f(X_{k+1})] - f(x^*) \leq (1 - \gamma \alpha_k)\left(\mathbb{E}[f(X_k)] - f(x^*)\right) + \frac{ML (\alpha_k)^2}{2}
$$

取 $\alpha_k = \eta/L$，代入得
$$
\mathbb{E}[f(X_{k+1})] - f(x^*) \leq \left(1 - \frac{\gamma \eta}{L}\right)\left(\mathbb{E}[f(X_k)] - f(x^*)\right) + \frac{M\eta^2}{2L}
$$

记 $\kappa = L/\gamma$，则 $1 - \frac{\gamma \eta}{L} = 1 - \frac{\eta}{\kappa}$，上式变为
$$
\mathbb{E}[f(X_{k+1})] - f(x^*) \leq \left(1 - \frac{\eta}{\kappa}\right)\left(\mathbb{E}[f(X_k)] - f(x^*)\right) + \frac{M\eta^2}{2L}
$$

递归展开（不等式迭代 $k$ 次）：
$$
\mathbb{E}[f(X_k)] - f(x^*) \leq \left(1 - \frac{\eta}{\kappa}\right)^k \left(f(x_0) - f(x^*)\right) + \frac{M\eta^2}{2L} \sum_{i=0}^{k-1} \left(1 - \frac{\eta}{\kappa}\right)^i
$$

等比数列求和，$\sum_{i=0}^{k-1} r^i = \frac{1 - r^k}{1 - r}$，其中 $r = 1 - \frac{\eta}{\kappa}$，所以
$$
\sum_{i=0}^{k-1} \left(1 - \frac{\eta}{\kappa}\right)^i = \frac{1 - \left(1 - \frac{\eta}{\kappa}\right)^k}{\frac{\eta}{\kappa}}
$$

代入得
$$
\mathbb{E}[f(X_k)] - f(x^*) \leq \left(1 - \frac{\eta}{\kappa}\right)^k \left(f(x_0) - f(x^*)\right) + \frac{M\eta^2}{2L} \cdot \frac{1 - \left(1 - \frac{\eta}{\kappa}\right)^k}{\frac{\eta}{\kappa}}
$$

化简右侧第二项：
$$
\frac{M\eta^2}{2L} \cdot \frac{\kappa}{\eta} \left[1 - \left(1 - \frac{\eta}{\kappa}\right)^k\right] = \frac{M\eta}{2\gamma} \left[1 - \left(1 - \frac{\eta}{\kappa}\right)^k\right]
$$

最终得
$$
\mathbb{E}[f(X_k)] - f(x^*) \leq \frac{M\eta}{2\gamma} + \left(1 - \frac{\eta}{\kappa}\right)^k \left[f(x_0) - f(x^*) - \frac{M\eta}{2\gamma}\right]
$$

证毕。
