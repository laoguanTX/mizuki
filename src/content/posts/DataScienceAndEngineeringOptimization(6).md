---
title: "数据科学与工程优化（六）"
published: 2025-07-23
category: ["程设计科", "人工智能"]
tags: ["人工智能"]
alias: "datascienceandengineeringoptimization(6)"
---

## 一、噪声地板（Noise Floor）问题背景

在实际SGD（随机梯度下降）中，由于每次只用部分样本（甚至单样本）估计梯度，**噪声地板**（noise floor）不可避免：即SGD只能收敛到一个残差带（目标函数的最优值附近的宽区间），而非真正精确的最优点。这在大规模数据和非精确（有噪声）目标情况下尤其明显。

## 二、降低噪声地板的三大方法

### 方法一：动态步长（Dynamic Stepsize）

**基本思想：**

- 若每步步长 $\alpha_k$ 随迭代$k$递减，且满足
  $$
  \sum_{i=0}^{\infty} \alpha_i = \infty,\quad \sum_{i=0}^{\infty} \alpha_i^2 < \infty
  $$
  则SGD可以保证
  $$
  \lim_{k\to\infty} \inf_{i\geq k} \mathbb{E}\left[ \|\nabla f(X_i)\| \right] = 0
  $$
  即**理论上可以收敛到最优点**，消除噪声地板。

**代价：**

- 步长减小后，收敛速率降为**亚线性**（如 $O(1/k)$），丧失了大步长下的线性收敛。
- 实践中往往需调参，且初期收敛快，后期收敛慢。

**强凸情形下的具体步长：**

- 设 $f$ $\gamma$-强凸，$L$-光滑，条件数 $\kappa = L/\gamma$，取
  $$
  \alpha_k = \frac{2}{2L + \gamma k}
  $$
  则
  $$
  \mathbb{E}[f(X_k)] - f(x^*) \leq \frac{\nu}{2\kappa + k}
  $$
  其中 $\nu = 2\kappa \cdot \max \left( \frac{M}{\gamma}, f(x_0)-f(x^*) \right )$。


### 方法二：Mini-batching（小批量）

**基本思想：**

- 取多个样本组成mini-batch $S_k$，求平均梯度：
  $$
  G_k = \frac{1}{p} \sum_{\ell=1}^p \nabla f_{j_\ell}(X_k)
  $$
- 由于采样独立，梯度方差为
  $$
  \mathrm{VAR}(G_k | X_k) = \frac{1}{p} \mathrm{VAR}(\nabla f_{j_1}(X_k) | X_k)
  $$
  即**方差与批量大小 $p$ 成反比**。

**收敛性分析：**

- 强凸情形下，SGD的收敛界调整为
  $$
  \mathbb{E}[f(X_k)] - f(x^*) \leq \frac{\eta M}{2\gamma p} + \left(1 - \frac{\eta}{\kappa}\right)^k \left[ f(x_0)-f(x^*)-\frac{\eta M}{2\gamma p} \right]
  $$
- **噪声地板随batch size $p$ 增大而降低**，但每步计算代价也随之增大。

### 方法三：随机方差减小（Stochastic Variance Reduction, SVR）

**基本思想：**

- 构造一个**方差更小的无偏估计量**，如
  $$
  G = Z - Y + \mathbb{E}[Y]
  $$
  其中 $Z$、$Y$ 是有关梯度的无偏估计量，且相关性高时$\mathrm{VAR}(G)$小于$\mathrm{VAR}(Z)$。
- 典型代表是**SVRG**算法。

**SVRG算法核心：**

- 固定一个参考点 $x_k$，计算其全梯度 $\nabla f(x_k)$。
- 每步更新
  $$
  G_{k,j} = \nabla f_{S_{k,j}}(\tilde{X}_{k,j}) - \nabla f_{S_{k,j}}(x_k) + \nabla f(x_k)
  $$
  其中 $S_{k,j}$ 单样本或小批量，$\tilde{X}_{k,j}$ 是当前内层迭代点。

- **优点**：
  
  - $G_{k,j}$ 仍是 $\nabla f(\tilde{X}_{k,j})$ 的无偏估计，但方差显著降低。
  - SVRG只需周期性计算全梯度，内层迭代仍用小批量，效率与精度兼得。

**SVRG收敛理论：**

- 设 $f_j$ $L$-光滑，$f$ $\gamma$-强凸，步长 $\alpha < \frac{1}{4L}$，内层迭代数 $p$ 充分大，则
  $$
  \mathbb{E}[f(X_k)] - f(x^*) \leq \rho^k (f(x_0)-f(x^*))
  $$
  其中
  $$
  \rho = \frac{1}{\gamma\alpha(1-2L\alpha)p} + \frac{2L}{1-2L\alpha} < 1
  $$
  即**Q-线性收敛**，且无噪声地板。

**SVRG的技术要点：**

- 关键引理（光滑性）：
  $$
  \mathbb{E}_S \left[ \|\nabla f_S(x) - \nabla f_S(x^*)\|^2 \right] \leq 2L [f(x) - f(x^*)]
  $$
- 结合强凸性，可推导主收敛定理。

**实践中SVRG与SGD比较：**

- SVRG的训练loss收敛快且更平滑（无震荡），SGD只有学习率不断递减时才能慢慢逼近最优。
- 小步长SGD收敛慢，大步长SGD有高噪声地板。
- SVRG能用较大步长却依然稳定收敛。

## 四、其它方法与讨论

- 其它相关技术如SAG（Stochastic Average Gradient）、SAGA等，也通过历史梯度记忆降低方差，恢复线性收敛。
- 利用momentum加速（如Heavy Ball, Nesterov）也可一定程度减少方差。
- 新一代大规模优化方法（如Adam, RMSProp等）在工程中也有显著降噪效果，但理论收敛性与上述方法有差别。
