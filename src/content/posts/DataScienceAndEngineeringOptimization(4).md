---
title: "数据科学与工程优化（四）"
published: 2025-07-23
category: ["程设计科", "人工智能"]
tags: ["人工智能"]
alias: "datascienceandengineeringoptimization(4)"
---

## 一、梯度法复杂度总结

- 对于 $L$-光滑但非凸的 $f$，最速下降法（Steepest Descent）收敛速率为
  $$
  O\left(\frac{1}{\sqrt{k}}\right)
  $$
- 对于 $L$-光滑且凸的 $f$，
  $$
  O\left(\frac{1}{k}\right)
  $$
- 若 $f$ 还是 $\gamma$-强凸，则线性收敛速率
  $$
  \left(1 - \frac{\gamma}{L}\right)^k
  $$

## 二、重球法（Heavy Ball Method）

### 1、适用范围

适合凸二次型函数：
$$
\min_{x \in \mathbb{R}^n} f(x) = \frac{1}{2}x^T A x - b^T x
$$
其中 $A$ 对称，特征值落在 $[\gamma, L]$，即 $f$ 是 $L$-光滑且 $\gamma$-强凸。

### 2、迭代公式

$$
x_{k+1} = x_k - \alpha_k \nabla f(x_k) + \beta_k (x_k - x_{k-1})
$$

- 第一步是梯度下降，第二项是动量项（momentum）。

### 3、收敛性定理（无需证明）

令
$$
\alpha_k \equiv \alpha = \frac{4}{(\sqrt{L}+\sqrt{\gamma})^2}, \quad
\beta_k \equiv \beta = \frac{\sqrt{L}-\sqrt{\gamma}}{\sqrt{L}+\sqrt{\gamma}}
$$
则存在常数 $C>0$，有
$$
\|x_k - x^*\| \leq C \beta^k
$$

- 若 $\gamma \approx L$，$\alpha \approx \frac{1}{L}$，$\beta \approx 0$（退化为普通梯度下降）。
- 若 $\gamma \ll L$，$\alpha \approx \frac{4}{L}$，$\beta \approx 1$。

### 4、目标函数收敛速率

利用 $L$-光滑性，
$$
f(x_k) - f(x^*) \leq \frac{L}{2} \|x_k - x^*\|^2 \leq \frac{L C^2}{2} \beta^{2k}
$$
近似有
$$
\beta^{2k} \approx (1-2\sqrt{\gamma/L})^{2k}
$$

### 5、与最速下降法比较

- 若 $\gamma = 0.01L$，则重球法每步目标函数减少三分之一 $(1-2\sqrt{\gamma/L})^2 = 0.64$。
- 最速下降法每步仅减少 $1\%$，$(1-\gamma/L) = 0.99$。
- 重球法对病态（ill-conditioned）问题优势明显。

## 三、Nesterov加速梯度法（Nesterov Acceleration）

### 3.1 算法思想

Nesterov加速法是重球法的推广，适用于一般强凸目标。

#### 标准形式
$$
x_{k+1} = x_k - \alpha_k \nabla f\left(x_k + \beta_k(x_k - x_{k-1})\right) + \beta_k(x_k - x_{k-1})
$$
- 与重球法的区别：梯度在 $x_k + \beta_k(x_k - x_{k-1})$ 处计算。

### 2、收敛性定理（强凸情形）

若 $f$ $L$-光滑且 $\gamma$-强凸，取
$$
\alpha_k \equiv \alpha = \frac{1}{L}, \qquad
\beta_k \equiv \beta = \frac{\sqrt{L} - \sqrt{\gamma}}{\sqrt{L} + \sqrt{\gamma}}
$$
则
$$
f(x_k) - f(x^*) \leq \frac{L+\gamma}{2} \|x_0 - x^*\|^2 \cdot (1-\sqrt{\gamma/L})^k
$$

- 加速收敛，$(1-\sqrt{\gamma/L}) < (1-\gamma/L)$。
- 例如 $\gamma = 0.01L$，Nesterov每步减少 $10\%$，而最速下降法仅 $1\%$。

## 四、Nesterov加速法（L-光滑凸函数）

### 1、算法步骤

适用于 $f$ $L$-光滑凸，L不一定已知。算法采用两组变量 $x_k, y_k$，并自适应步长。

**算法流程：**
1. 设 $y_0 \neq z \in \mathbb{R}^n$，$\alpha_{-1} := \frac{\|y_0 - z\|}{\|\nabla f(y_0) - \nabla f(z)\|}$，$\lambda_0 := 1$，$x_{-1} := y_0$。
2. 对 $k = 0, 1, 2, \ldots$，重复：
    1. 用**回溯线搜索**找最小 $i$ 使
        $$
        f\left(y_k - 2^{-i} \alpha_{k-1} \nabla f(y_k)\right) \leq f(y_k) - 2^{-(i+1)} \alpha_{k-1} \|\nabla f(y_k)\|^2
        $$
       令 $\alpha_k = 2^{-i} \alpha_{k-1}$
    2. $x_k = y_k - \alpha_k \nabla f(y_k)$
    3. $\lambda_{k+1} = \frac{1}{2}\left(1 + \sqrt{4\lambda_k^2 + 1}\right)$
    4. $y_{k+1} = x_k + \frac{\lambda_k - 1}{\lambda_{k+1}}(x_k - x_{k-1})$
3. 直到 $\|x_k - x_{k-1}\|$ 足够小。

#### 关键点
- 回溯线搜索保证步长不会太小或太大。
- $\lambda_k$ 控制动量，数值上渐进变大，增加加速效果。

### 2、理论最优复杂度

- 该方法的**迭代复杂度**为 $O(\epsilon^{-1/2})$，即达到 $f(x_k) - f^* < \epsilon$ 只需 $O(1/\sqrt{\epsilon})$ 步。
- 这是理论上**最优的复杂度**。

## 五、收敛性分析（以Nesterov加速为例）

### 1、主要结论

设 $f$ 为 $L$-光滑凸函数，有极小点 $x^*$，则算法产生的序列满足
$$
f(x_k) \leq f^* + \frac{4L\|x_0 - x^*\|^2}{(k+2)^2}
$$
因此，$\epsilon$-最优所需迭代步数为
$$
k \geq N(\epsilon) = \left\lfloor 2\sqrt{L}\frac{\|x_0 - x^*\|}{\sqrt{\epsilon}} \right\rfloor - 1
$$

### 2、关键推导步骤（简要概述）

- 定义辅助变量 $p_k = (\lambda_k - 1)(x_{k-1} - x_k)$，随 $k$ 增大逐步变大。
- 通过一系列递推与凸性、不等式，建立 $p_{k+1} - x_{k+1} + x^*$ 的范数递推关系。
- 用望远镜求和技巧，最终得出 $f(x_k) - f^*$ 的上界随 $1/(k+2)^2$ 衰减。

## 六、算法直观理解

- **动量思想**：通过利用前一步的信息，使得算法能够“沿谷底滑行”，减少传统梯度法的锯齿状（zig-zag）慢收敛。
- **自适应步长**：当L未知时，算法自动调整步长，避免手动设置不当导致的收敛慢或不收敛。
- **理论最优**：加速梯度法已达到理论上最优的迭代复杂度。
