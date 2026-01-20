---
title: 一阶线性微分方程组解的一般理论
published: 2025-05-29
category: ["数学", "线性代数", "高等数学"]
tags: ["线性代数", "微积分", "常微分方程"]
alias: "generaltheoryoffirstorderlinearodesystems"
---
我们约定向量用粗体小写字母表示，如 $\mathbf{x}$，矩阵用大写字母表示，如 $A$。该部分考试不做要求。

## 一、一阶微分方程组的标准形式

含有 $n$ 个未知函数 $x_1(t), x_2(t), \ldots, x_n(t)$ 的 $n$ 个一阶微分方程构成的一阶微分方程组，如果已经解出了一阶导数 $\frac{\mathrm{d}x_1}{\mathrm{d}t}, \ldots, \frac{\mathrm{d}x_n}{\mathrm{d}t}$，则其标准形式可以写为：
$$
\begin{cases}
\frac{\mathrm{d}x_1}{\mathrm{d}t} = f_1(t, x_1, x_2, \ldots, x_n) \\
\frac{\mathrm{d}x_2}{\mathrm{d}t} = f_2(t, x_1, x_2, \ldots, x_n) \\
\vdots \\
\frac{\mathrm{d}x_n}{\mathrm{d}t} = f_n(t, x_1, x_2, \ldots, x_n)
\end{cases}
\quad (3.1)
$$
其中 $f_i (i=1, \ldots, n)$ 是定义在 $(n+1)$ 维空间 $(t, x_1, \ldots, x_n)$ 的某个区域 $D$ 内的已知函数，$t$ 是自变量。

为了书写方便，我们引入向量记号。令：
$$
\mathbf{x}(t) = \begin{pmatrix} x_1(t) \\ x_2(t) \\ \vdots \\ x_n(t) \end{pmatrix}, \quad
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \begin{pmatrix} \frac{\mathrm{d}x_1}{\mathrm{d}t} \\ \frac{\mathrm{d}x_2}{\mathrm{d}t} \\ \vdots \\ \frac{\mathrm{d}x_n}{\mathrm{d}t} \end{pmatrix}, \quad
\mathbf{F}(t, \mathbf{x}) = \begin{pmatrix} f_1(t, x_1, \ldots, x_n) \\ f_2(t, x_1, \ldots, x_n) \\ \vdots \\ f_n(t, x_1, \ldots, x_n) \end{pmatrix}
$$
则方程组可以简写为向量形式：
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{F}(t, \mathbf{x})
$$

## 二、线性一阶微分方程组的标准形式

如果微分方程组 (3.1) 中的每一个函数 $f_i(t, x_1, \ldots, x_n) (i=1, \ldots, n)$ 都是变量 $x_1, \ldots, x_n$ 的线性函数，则称这种微分方程组为线性微分方程组，简称线性方程组。线性方程组的标准形式是：
$$
\frac{\mathrm{d}x_i}{\mathrm{d}t} = \sum_{j=1}^n a_{ij}(t)x_j + f_i(t), \quad (i=1, \ldots, n)
$$
其中 $a_{ij}(t)$ 和 $f_i(t)$ 是自变量 $t$ 的已知函数，通常假定它们在某个区间 $I = (\alpha, \beta)$ 上连续。

用向量和矩阵表示，令：
$$
A(t) = \begin{pmatrix}
a_{11}(t) & a_{12}(t) & \cdots & a_{1n}(t) \\
a_{21}(t) & a_{22}(t) & \cdots & a_{2n}(t) \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1}(t) & a_{n2}(t) & \cdots & a_{nn}(t)
\end{pmatrix}, \quad
\mathbf{f}(t) = \begin{pmatrix} f_1(t) \\ f_2(t) \\ \vdots \\ f_n(t) \end{pmatrix}
$$
则上述线性方程组可以写成如下的向量形式：
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A(t)\mathbf{x} + \mathbf{f}(t)
$$
这称为 **非齐次线性微分方程组**。

## 三、齐次线性方程组

如果在线性方程组中，所有的 $f_i(t) \equiv 0$（即向量 $\mathbf{f}(t) \equiv \mathbf{0}$），则称该方程组为 **齐次线性微分方程组**。其标准形式为：
$$
\frac{\mathrm{d}x_i}{\mathrm{d}t} = \sum_{j=1}^n a_{ij}(t)x_j, \quad (i=1, \ldots, n)
$$
或用向量形式表示为：
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A(t)\mathbf{x}
$$
我们通常称这个方程为 (HL)，即 Homogeneous Linear（齐次线性）。而非齐次线性方程组则称为 (NHL)，Non-Homogeneous Linear（非齐次线性）。

## 四、常系数线性微分方程组解的一般理论
（注：以下大部分理论对变系数 $A(t)$ 线性微分方程组也成立，除非特别指明是常系数 $A$。）

考虑初值问题 (IVP):
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{F}(t, \mathbf{x}), \quad \mathbf{x}(t_0) = \mathbf{x}_0
$$
其中 $t_0$ 是某个初始时刻，$\mathbf{x}_0$ 是 $n$ 维初始状态向量。

### 1、初值问题解的存在唯一性定理 (Picard-Lindelöf 定理)

**定理叙述**：
设向量函数 $\mathbf{F}(t, \mathbf{x})$ 在区域 $R = \{ (t, \mathbf{x}) : |t-t_0| \le a, \|\mathbf{x}-\mathbf{x}_0\| \le b \}$ ($a>0, b>0$) 上连续，并且关于 $\mathbf{x}$ 满足 Lipschitz 条件，即存在常数 $L > 0$，使得对于 $R$ 中的任意两点 $(t, \mathbf{x}_1)$ 和 $(t, \mathbf{x}_2)$，都有：
$$
\|\mathbf{F}(t, \mathbf{x}_1) - \mathbf{F}(t, \mathbf{x}_2)\| \le L \|\mathbf{x}_1 - \mathbf{x}_2\|
$$
（其中 $\|\cdot\|$ 表示向量的某种范数，例如欧几里得范数或最大范数）。
则初值问题 $\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{F}(t, \mathbf{x})$，$\mathbf{x}(t_0) = \mathbf{x}_0$ 在区间 $I_h = [t_0-h, t_0+h]$ 上存在唯一的连续可微解 $\mathbf{x}(t)$，其中 $h = \min\left(a, \frac{b}{M}\right)$，$M = \max_{(t,\mathbf{x}) \in R} \|\mathbf{F}(t, \mathbf{x})\|$ (由于 $\mathbf{F}$ 连续， $M$ 存在)。

**证明**：

1.  **等价的积分方程**：
    如果 $\mathbf{x}(t)$ 是初值问题的一个解，那么对 $\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}s} = \mathbf{F}(s, \mathbf{x}(s))$ 从 $t_0$ 到 $t$ 积分，并利用初始条件 $\mathbf{x}(t_0) = \mathbf{x}_0$，得到：
    $$
    \mathbf{x}(t) - \mathbf{x}(t_0) = \int_{t_0}^t \mathbf{F}(s, \mathbf{x}(s)) \mathrm{d}s
    $$
    $$
    \mathbf{x}(t) = \mathbf{x}_0 + \int_{t_0}^t \mathbf{F}(s, \mathbf{x}(s)) \mathrm{d}s \quad (*)
    $$
    反之，若连续函数 $\mathbf{x}(t)$ 满足此积分方程，则 $\mathbf{x}(t_0) = \mathbf{x}_0 + \int_{t_0}^{t_0} \mathbf{F}(s, \mathbf{x}(s)) \mathrm{d}s = \mathbf{x}_0$，且对其求导（由于 $\mathbf{F}$ 和 $\mathbf{x}$ 连续，积分的被积函数连续，故可求导）得 $\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = \mathbf{F}(t, \mathbf{x}(t))$。因此，解初值问题等价于解此积分方程。

2.  **Picard 迭代序列**：
    定义函数序列 $\{\mathbf{x}_k(t)\}$ 如下：
    $$
    \mathbf{x}_0(t) = \mathbf{x}_0 \quad (\text{常向量函数})
    $$
    $$
    \mathbf{x}_{k+1}(t) = \mathbf{x}_0 + \int_{t_0}^t \mathbf{F}(s, \mathbf{x}_k(s)) \mathrm{d}s, \quad k=0, 1, 2, \ldots
    $$
    我们将在区间 $I_h = [t_0-h, t_0+h]$ 上证明这个序列的收敛性，其中 $h = \min(a, b/M)$。

3.  **迭代序列中的函数有定义且在 $R$ 内**：
    对于 $t \in I_h$ (不妨设 $t \ge t_0$, $t \le t_0$ 的情况类似处理，只需将 $|t-t_0|$ 代替 $t-t_0$)：
    当 $k=0$，$\mathbf{x}_0(t) = \mathbf{x}_0$，显然 $\|\mathbf{x}_0(t) - \mathbf{x}_0\| = 0 \le b$。
    $\mathbf{x}_1(t) = \mathbf{x}_0 + \int_{t_0}^t \mathbf{F}(s, \mathbf{x}_0(s)) \mathrm{d}s$。
    则
    $$
    \|\mathbf{x}_1(t) - \mathbf{x}_0\| = \left\| \int_{t_0}^t \mathbf{F}(s, \mathbf{x}_0) \mathrm{d}s \right\| \le \int_{t_0}^t \|\mathbf{F}(s, \mathbf{x}_0)\| \mathrm{d}s \le M |t-t_0| \le Mh \le M \cdot \frac{b}{M} = b
    $$
    所以 $\mathbf{x}_1(t)$ 的图像仍在 $R$ 的 $\mathbf{x}$ 范围内。
    假设 $\mathbf{x}_k(t)$ 对 $t \in I_h$ 都有 $\|\mathbf{x}_k(t) - \mathbf{x}_0\| \le b$。那么 $\mathbf{F}(s, \mathbf{x}_k(s))$ 有定义。
    则
    $$
    \|\mathbf{x}_{k+1}(t) - \mathbf{x}_0\| = \left\| \int_{t_0}^t \mathbf{F}(s, \mathbf{x}_k(s)) \mathrm{d}s \right\| \le \int_{t_0}^t \|\mathbf{F}(s, \mathbf{x}_k(s))\| \mathrm{d}s \le M|t-t_0| \le Mh \le b
    $$
    由数学归纳法，所有 $\mathbf{x}_k(t)$ 在 $I_h$ 上有定义，且其值满足 $\|\mathbf{x}_k(t) - \mathbf{x}_0\| \le b$。

4.  **序列的收敛性**：
    考虑级数 $\mathbf{x}_0(t) + \sum_{k=0}^{\infty} (\mathbf{x}_{k+1}(t) - \mathbf{x}_k(t))$。如果此级数收敛，则其部分和序列 $\mathbf{x}_m(t) = \mathbf{x}_0(t) + \sum_{k=0}^{m-1} (\mathbf{x}_{k+1}(t) - \mathbf{x}_k(t))$ 收敛。
    我们来估计 $\|\mathbf{x}_{k+1}(t) - \mathbf{x}_k(t)\|$。
    对于 $t \in I_h$ (同样设 $t \ge t_0$)：
    $$
    \|\mathbf{x}_1(t) - \mathbf{x}_0(t)\| = \left\| \int_{t_0}^t \mathbf{F}(s, \mathbf{x}_0) \mathrm{d}s \right\| \le M(t-t_0)
    $$
    $$
    \|\mathbf{x}_2(t) - \mathbf{x}_1(t)\| = \left\| \int_{t_0}^t (\mathbf{F}(s, \mathbf{x}_1(s)) - \mathbf{F}(s, \mathbf{x}_0(s))) \mathrm{d}s \right\|
    $$
    $$
    \le \int_{t_0}^t \|\mathbf{F}(s, \mathbf{x}_1(s)) - \mathbf{F}(s, \mathbf{x}_0(s))\| \mathrm{d}s
    $$
    $$
    \le \int_{t_0}^t L \|\mathbf{x}_1(s) - \mathbf{x}_0(s)\| \mathrm{d}s
    $$
    $$
    \le \int_{t_0}^t L \cdot M(s-t_0) \mathrm{d}s = LM \int_{t_0}^t (s-t_0) \mathrm{d}s = LM \frac{(t-t_0)^2}{2!}
    $$
    一般地，假设 $\|\mathbf{x}_k(t) - \mathbf{x}_{k-1}(t)\| \le M L^{k-1} \frac{(t-t_0)^k}{k!}$。则
    $$
    \|\mathbf{x}_{k+1}(t) - \mathbf{x}_k(t)\| = \left\| \int_{t_0}^t (\mathbf{F}(s, \mathbf{x}_k(s)) - \mathbf{F}(s, \mathbf{x}_{k-1}(s))) \mathrm{d}s \right\|
    $$
    $$
    \le \int_{t_0}^t L \|\mathbf{x}_k(s) - \mathbf{x}_{k-1}(s)\| \mathrm{d}s
    $$
    $$
    \le \int_{t_0}^t L \cdot M L^{k-1} \frac{(s-t_0)^k}{k!} \mathrm{d}s = M L^k \int_{t_0}^t \frac{(s-t_0)^k}{k!} \mathrm{d}s = M L^k \frac{(t-t_0)^{k+1}}{(k+1)!}
    $$
    这个归纳对 $|t-t_0|$ 也成立，即：
    $$
    \|\mathbf{x}_{k+1}(t) - \mathbf{x}_k(t)\| \le M L^k \frac{|t-t_0|^{k+1}}{(k+1)!} \le M L^k \frac{h^{k+1}}{(k+1)!} = \frac{M}{L} \frac{(Lh)^{k+1}}{(k+1)!}
    $$
    考虑级数 $\sum_{k=0}^{\infty} \|\mathbf{x}_{k+1}(t) - \mathbf{x}_k(t)\|$. 其各项由 $\sum_{k=0}^{\infty} \frac{M}{L} \frac{(Lh)^{k+1}}{(k+1)!}$ 控制。这个级数是收敛的，因为 $\sum_{j=1}^{\infty} \frac{M}{L} \frac{(Lh)^j}{j!} = \frac{M}{L} (e^{Lh} - 1)$。根据 Weierstrass M-判别法，向量函数级数 $\mathbf{x}_0(t) + \sum_{k=0}^{\infty} (\mathbf{x}_{k+1}(t) - \mathbf{x}_k(t))$ 在 $I_h$ 上一致收敛。记其极限函数为 $\mathbf{x}(t) = \lim_{k \to \infty} \mathbf{x}_k(t)$。由于 $\mathbf{x}_k(t)$ 都是连续函数，且级数一致收敛，所以 $\mathbf{x}(t)$ 在 $I_h$ 上连续。同时，由于对所有 $k$ 和 $t \in I_h$，$\|\mathbf{x}_k(t) - \mathbf{x}_0\| \le b$，取极限后 $\|\mathbf{x}(t) - \mathbf{x}_0\| \le b$。
    
5.  **极限函数是解**：
    我们有 $\mathbf{x}_{k+1}(t) = \mathbf{x}_0 + \int_{t_0}^t \mathbf{F}(s, \mathbf{x}_k(s)) \mathrm{d}s$。当 $k \to \infty$ 时，$\mathbf{x}_{k+1}(t) \to \mathbf{x}(t)$。
    我们需要证明
    $$
    \lim_{k \to \infty} \int_{t_0}^t \mathbf{F}(s, \mathbf{x}_k(s)) \mathrm{d}s = \int_{t_0}^t \mathbf{F}(s, \mathbf{x}(s)) \mathrm{d}s
    $$
    考虑差值：
    $$
    \left\| \int_{t_0}^t \mathbf{F}(s, \mathbf{x}_k(s)) \mathrm{d}s - \int_{t_0}^t \mathbf{F}(s, \mathbf{x}(s)) \mathrm{d}s \right\| \le \int_{t_0}^t \|\mathbf{F}(s, \mathbf{x}_k(s)) - \mathbf{F}(s, \mathbf{x}(s))\| \mathrm{d}s
    $$
    $$
    \le \int_{t_0}^t L \|\mathbf{x}_k(s) - \mathbf{x}(s)\| \mathrm{d}s
    $$
    由于 $\mathbf{x}_k(s)$ 在 $I_h$ 上一致收敛到 $\mathbf{x}(s)$，对任意 $\epsilon > 0$，存在 $N$，当 $k > N$ 时，$\|\mathbf{x}_k(s) - \mathbf{x}(s)\| < \epsilon / (Lh)$ 对所有 $s \in I_h$ 成立。
    所以上式
    $$
    \le \int_{t_0}^t L \frac{\epsilon}{Lh} \mathrm{d}s = \frac{\epsilon}{h} |t-t_0| \le \epsilon
    $$
    因此 
    $$
    \lim_{k \to \infty} \int_{t_0}^t \mathbf{F}(s, \mathbf{x}_k(s)) \mathrm{d}s = \int_{t_0}^t \mathbf{F}(s, \mathbf{x}(s)) \mathrm{d}s
    $$
    取极限得到：
    $$
    \mathbf{x}(t) = \mathbf{x}_0 + \int_{t_0}^t \mathbf{F}(s, \mathbf{x}(s)) \mathrm{d}s
    $$
    这表明 $\mathbf{x}(t)$ 是积分方程的解，从而也是初值问题的解。
    
6.  **解的唯一性**：
    假设存在两个解 $\mathbf{x}(t)$ 和 $\mathbf{y}(t)$ 满足初值问题，且都在某个区间 $J \subseteq I_h$ 上有定义。
    则它们都满足积分方程：
    $$
    \mathbf{x}(t) = \mathbf{x}_0 + \int_{t_0}^t \mathbf{F}(s, \mathbf{x}(s)) \mathrm{d}s
    $$
    $$
    \mathbf{y}(t) = \mathbf{x}_0 + \int_{t_0}^t \mathbf{F}(s, \mathbf{y}(s)) \mathrm{d}s
    $$
    令 $\mathbf{z}(t) = \mathbf{x}(t) - \mathbf{y}(t)$。则 $\mathbf{z}(t_0) = \mathbf{0}$。
    $$
    \|\mathbf{z}(t)\| = \|\mathbf{x}(t) - \mathbf{y}(t)\| = \left\| \int_{t_0}^t (\mathbf{F}(s, \mathbf{x}(s)) - \mathbf{F}(s, \mathbf{y}(s))) \mathrm{d}s \right\|
    $$
    $$
    \le \int_{t_0}^t \|\mathbf{F}(s, \mathbf{x}(s)) - \mathbf{F}(s, \mathbf{y}(s))\| \mathrm{d}s
    $$
    $$
    \le \int_{t_0}^t L \|\mathbf{x}(s) - \mathbf{y}(s)\| \mathrm{d}s = L \int_{t_0}^t \|\mathbf{z}(s)\| \mathrm{d}s \quad (\text{设 } t \ge t_0)
    $$
    令 $\phi(t) = \int_{t_0}^t \|\mathbf{z}(s)\| \mathrm{d}s$。则 $\phi(t_0)=0$ 且 $\phi(t) \ge 0$。
    我们有 $\|\mathbf{z}(t)\| \le L \phi(t)$。
    所以 $\phi'(t) = \|\mathbf{z}(t)\| \le L \phi(t)$。
    即 $\phi'(t) - L\phi(t) \le 0$。
    乘以 $e^{-L(t-t_0)}$ (这是一个积分因子):
    $$
    e^{-L(t-t_0)}\phi'(t) - L e^{-L(t-t_0)}\phi(t) \le 0
    $$
    $$
    \frac{\mathrm{d}}{\mathrm{d}t} (e^{-L(t-t_0)}\phi(t)) \le 0
    $$
    对 $s$ 从 $t_0$ 到 $t$ 积分：
    $$
    \int_{t_0}^t \frac{\mathrm{d}}{\mathrm{d}s} (e^{-L(s-t_0)}\phi(s)) \mathrm{d}s \le \int_{t_0}^t 0 \mathrm{d}s = 0
    $$
    $$
    e^{-L(t-t_0)}\phi(t) - e^0 \phi(t_0) \le 0
    $$
    由于 $\phi(t_0)=0$，得到 $e^{-L(t-t_0)}\phi(t) \le 0$。
    因为 $e^{-L(t-t_0)} > 0$ 且 $\phi(t) \ge 0$，这只可能当 $\phi(t) = 0$ 对所有 $t \ge t_0$ (在 $J$ 内) 成立。
    如果 $\phi(t) = \int_{t_0}^t \|\mathbf{z}(s)\| \mathrm{d}s = 0$ 且 $\|\mathbf{z}(s)\| \ge 0$ 且连续，则必须有 $\|\mathbf{z}(s)\| = 0$ 对所有 $s$。
    即 $\|\mathbf{x}(s) - \mathbf{y}(s)\| = 0$，所以 $\mathbf{x}(s) = \mathbf{y}(s)$。
    对于 $t < t_0$ 的情况，可以类似地考虑 $\int_t^{t_0} \|\mathbf{z}(s)\| \mathrm{d}s$ 或使用 Gronwall 不等式的其他形式。
    因此解是唯一的。

    (注：这里使用了 Gronwall 不等式的一个简单形式的推导。)

### 4.2 推论 (针对线性系统)

对于线性微分方程组
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A(t)\mathbf{x} + \mathbf{f}(t)
$$
如果 $A(t)$ 和 $\mathbf{f}(t)$ 在区间 $I = (\alpha, \beta)$ 上连续，那么 $\mathbf{F}(t, \mathbf{x}) = A(t)\mathbf{x} + \mathbf{f}(t)$ 在 $I \times \mathbb{R}^n$ 上连续。
并且，对于任意 $(t, \mathbf{x}_1)$ 和 $(t, \mathbf{x}_2)$ 属于 $I \times \mathbb{R}^n$：
$$
\|\mathbf{F}(t, \mathbf{x}_1) - \mathbf{F}(t, \mathbf{x}_2)\| = \|(A(t)\mathbf{x}_1 + \mathbf{f}(t)) - (A(t)\mathbf{x}_2 + \mathbf{f}(t))\|
$$
$$
= \|A(t)(\mathbf{x}_1 - \mathbf{x}_2)\| \le \|A(t)\| \|\mathbf{x}_1 - \mathbf{x}_2\|
$$
如果在区间 $I$ 的任何闭子区间 $J = [c, d] \subset I$ 上，$A(t)$ 是连续的，那么矩阵范数 $\|A(t)\|$ 在 $J$ 上有界，设为 $L_J = \max_{t \in J} \|A(t)\|$。
此时，Lipschitz 条件在 $J \times \mathbb{R}^n$ 上成立，Lipschitz 常数为 $L_J$。
这意味着对于线性系统，如果系数矩阵 $A(t)$ 和非齐次项 $\mathbf{f}(t)$ 在区间 $I$ 上连续，那么对任意 $t_0 \in I$ 和任意初始值 $\mathbf{x}_0 \in \mathbb{R}^n$，初值问题的解在整个区间 $I$ 上存在且唯一。
(这里 $b$ 可以取任意大，所以 $h = \min(a, b/M)$ 中的 $b/M$ 项不再是限制因素，只要 $a$ 能覆盖整个区间 $I$ 即可。)

### 4.3 向量函数的朗斯基行列式 (Wronskian)

考虑齐次线性方程组 $\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A(t)\mathbf{x}$。
设有 $n$ 个解 $\mathbf{x}^{(1)}(t), \mathbf{x}^{(2)}(t), \ldots, \mathbf{x}^{(n)}(t)$。这些解都是 $n$ 维列向量。
我们可以将它们并列构成一个 $n \times n$ 的矩阵，称为解矩阵 $\mathbf{X}(t)$:
$$
\mathbf{X}(t) = [\mathbf{x}^{(1)}(t) \quad \mathbf{x}^{(2)}(t) \quad \cdots \quad \mathbf{x}^{(n)}(t)] =
\begin{pmatrix}
x_{1}^{(1)}(t) & x_{1}^{(2)}(t) & \cdots & x_{1}^{(n)}(t) \\
x_{2}^{(1)}(t) & x_{2}^{(2)}(t) & \cdots & x_{2}^{(n)}(t) \\
\vdots & \vdots & \ddots & \vdots \\
x_{n}^{(1)}(t) & x_{n}^{(2)}(t) & \cdots & x_{n}^{(n)}(t)
\end{pmatrix}
$$
其中 $x_i^{(j)}(t)$ 表示第 $j$ 个解向量的第 $i$ 个分量。

**定义**：这 $n$ 个解 $\mathbf{x}^{(1)}(t), \ldots, \mathbf{x}^{(n)}(t)$ 的朗斯基行列式 (Wronskian) 定义为：
$$
W(t) = W(\mathbf{x}^{(1)}, \ldots, \mathbf{x}^{(n)})(t) = \det(\mathbf{X}(t))
$$

**Abel 公式 (Liouville 公式)**：
朗斯基行列式 $W(t)$ 满足一阶线性微分方程：
$$
\frac{\mathrm{d}W}{\mathrm{d}t} = \mathrm{tr}(A(t)) W(t)
$$
其中 $\mathrm{tr}(A(t)) = \sum_{i=1}^n a_{ii}(t)$ 是矩阵 $A(t)$ 的迹。
解这个方程得到：
$$
W(t) = W(t_0) \exp\left(\int_{t_0}^t \mathrm{tr}(A(s)) \mathrm{d}s\right)
$$
**证明 Abel 公式**:
设 $\mathbf{X}(t) = [\mathbf{x}^{(1)}(t) \quad \dots \quad \mathbf{x}^{(n)}(t)]$。
根据行列式导数的性质（对列向量函数求导）：
$$
\frac{\mathrm{d}W}{\mathrm{d}t} = \frac{\mathrm{d}}{\mathrm{d}t} \det[\mathbf{x}^{(1)}(t) \quad \dots \quad \mathbf{x}^{(n)}(t)] = \sum_{k=1}^n \det[\mathbf{x}^{(1)}(t) \quad \dots \quad \frac{\mathrm{d}\mathbf{x}^{(k)}(t)}{\mathrm{d}t} \quad \dots \quad \mathbf{x}^{(n)}(t)]
$$
由于每个 $\mathbf{x}^{(k)}(t)$ 都是方程 $\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A(t)\mathbf{x}$ 的解，所以 $\frac{\mathrm{d}\mathbf{x}^{(k)}}{\mathrm{d}t} = A(t)\mathbf{x}^{(k)}(t)$。
代入上式：
$$
\frac{\mathrm{d}W}{\mathrm{d}t} = \sum_{k=1}^n \det[\mathbf{x}^{(1)}(t) \quad \dots \quad A(t)\mathbf{x}^{(k)}(t) \quad \dots \quad \mathbf{x}^{(n)}(t)]
$$
我们使用一个关于行列式和矩阵迹的恒等式：对于任意 $n \times n$ 矩阵 $M = [\mathbf{m}_1 \quad \dots \quad \mathbf{m}_n]$ 和任意 $n \times n$ 矩阵 $A$，有
$$
\sum_{k=1}^n \det[\mathbf{m}_1 \quad \dots \quad A\mathbf{m}_k \quad \dots \quad \mathbf{m}_n] = \mathrm{tr}(A) \det(M)
$$
(此恒等式的证明：若 $M=I$ (单位矩阵)，则 $\det(M)=1$。左边变为 $\sum_{k=1}^n \det[\mathbf{e}_1 \quad \dots \quad A\mathbf{e}_k \quad \dots \quad \mathbf{e}_n]$。 $A\mathbf{e}_k$ 是 $A$ 的第 $k$ 列。所以 $\det[\mathbf{e}_1 \quad \dots \quad A\mathbf{e}_k \quad \dots \quad \mathbf{e}_n]$ 等于 $A$ 的第 $k$ 个对角元素 $a_{kk}$。因此左边等于 $\sum_{k=1}^n a_{kk} = \mathrm{tr}(A)$。对于一般的可逆矩阵 $M$，可以通过 $M$ 变换到 $I$ 来证明。如果 $M$ 不可逆，则 $\det(M)=0$，且列向量线性相关，通常左边也为0。)

应用此恒等式于我们的情况，令 $M = \mathbf{X}(t)$，则：
$$
\frac{\mathrm{d}W}{\mathrm{d}t} = \mathrm{tr}(A(t)) \det(\mathbf{X}(t)) = \mathrm{tr}(A(t)) W(t)
$$
这就证明了 Abel 公式。

**Abel 公式的推论**:
1.  如果 $W(t_0) \neq 0$ 对于某个 $t_0 \in I$，那么 $W(t) \neq 0$ 对于所有 $t \in I$ (因为指数函数 $\exp(\cdot)$ 的值恒为正)。
2.  如果 $W(t_0) = 0$ 对于某个 $t_0 \in I$，那么 $W(t) = 0$ 对于所有 $t \in I$。
因此，朗斯基行列式或者在区间 $I$ 上恒不为零，或者在区间 $I$ 上恒为零。

**朗斯基行列式与线性无关性**:
齐次线性方程组 
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A(t)\mathbf{x}
$$
的 $n$ 个解 $\mathbf{x}^{(1)}(t), \ldots, \mathbf{x}^{(n)}(t)$ 在区间 $I$ 上线性无关的充分必要条件是它们的朗斯基行列式 $W(t) \neq 0$ 对于 $I$ 中的任意一点 $t$ (因此对于 $I$ 中的所有点 $t$) 成立。

*证明*:
($\Rightarrow$) 充分性：假设解组 $\{\mathbf{x}^{(1)}(t), \ldots, \mathbf{x}^{(n)}(t)\}$ 在区间 $I$ 上线性相关。那么存在不全为零的常数 $c_1, \ldots, c_n$，使得对所有 $t \in I$，有 
$$
\sum_{j=1}^n c_j \mathbf{x}^{(j)}(t) = \mathbf{0}
$$
这意味着矩阵 $\mathbf{X}(t) = [\mathbf{x}^{(1)}(t) \quad \dots \quad \mathbf{x}^{(n)}(t)]$ 的列向量对所有 $t \in I$ 都是线性相关的。因此，它们的行列式 $W(t) = \det(\mathbf{X}(t)) = 0$ 对所有 $t \in I$ 成立。

($\Leftarrow$) 必要性：假设 $W(t_0) = 0$ 对于区间 $I$ 中的某一点 $t_0$ 成立。根据 Abel 公式的推论，这意味着 $W(t) = 0$ 对所有 $t \in I$ 成立。
在 $t=t_0$ 时，$W(t_0) = \det(\mathbf{X}(t_0)) = 0$。这表明矩阵 $\mathbf{X}(t_0)$ 的列向量 $\mathbf{x}^{(1)}(t_0), \ldots, \mathbf{x}^{(n)}(t_0)$ 是线性相关的。因此，存在不全为零的常数 $c_1, \ldots, c_n$，使得
$$
\sum_{j=1}^n c_j \mathbf{x}^{(j)}(t_0) = \mathbf{0}
$$
现在考虑向量函数 $\mathbf{y}(t) = \sum_{j=1}^n c_j \mathbf{x}^{(j)}(t)$。由于每个 $\mathbf{x}^{(j)}(t)$ 都是齐次线性方程组的解，且方程是线性的，所以 $\mathbf{y}(t)$ 也是该方程组的一个解。
并且，$\mathbf{y}(t_0) = \sum_{j=1}^n c_j \mathbf{x}^{(j)}(t_0) = \mathbf{0}$。
我们现在有一个初值问题：
$$
\frac{\mathrm{d}\mathbf{y}}{\mathrm{d}t} = A(t)\mathbf{y}, \quad \mathbf{y}(t_0) = \mathbf{0}
$$
显然，$\mathbf{z}(t) \equiv \mathbf{0}$ (零向量函数) 是这个初值问题的一个解。
根据线性系统解的唯一性定理（4.2节的推论），我们必有 $\mathbf{y}(t) \equiv \mathbf{0}$ 对所有 $t \in I$ 成立。
也就是说，$\sum_{j=1}^n c_j \mathbf{x}^{(j)}(t) = \mathbf{0}$ 对所有 $t \in I$ 成立，并且常数 $c_1, \ldots, c_n$ 不全为零。
这表明解组 $\{\mathbf{x}^{(1)}(t), \ldots, \mathbf{x}^{(n)}(t)\}$ 在区间 $I$ 上是线性相关的。
综上所述，解组线性无关当且仅当 $W(t) \neq 0$。

### 4.4 齐次线性微分方程组的通解结构定理

**定理叙述**:
如果齐次线性方程组 $\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A(t)\mathbf{x}$ 的 $n$ 个解 $\mathbf{x}^{(1)}(t), \ldots, \mathbf{x}^{(n)}(t)$ 在区间 $I$ 上是线性无关的 (即它们的朗斯基行列式 $W(t) \neq 0$ on $I$), 那么该齐次线性方程组的通解可以表示为这些解的线性组合：
$$
\mathbf{x}_h(t) = c_1 \mathbf{x}^{(1)}(t) + c_2 \mathbf{x}^{(2)}(t) + \ldots + c_n \mathbf{x}^{(n)}(t)
$$
其中 $c_1, \ldots, c_n$ 是任意常数。
这样一个线性无关的解组 $\{\mathbf{x}^{(1)}(t), \ldots, \mathbf{x}^{(n)}(t)\}$ 称为方程组的一个 **基本解组** (fundamental set of solutions)。
由基本解组构成的矩阵 $\mathbf{X}(t) = [\mathbf{x}^{(1)}(t) \quad \dots \quad \mathbf{x}^{(n)}(t)]$ 称为一个 **基本矩阵** (fundamental matrix)。

**证明**:
1.  **线性组合是解**:
    令 $\mathbf{y}(t) = \sum_{j=1}^n c_j \mathbf{x}^{(j)}(t)$。
    则
    $$
    \frac{\mathrm{d}\mathbf{y}}{\mathrm{d}t} = \sum_{j=1}^n c_j \frac{\mathrm{d}\mathbf{x}^{(j)}}{\mathrm{d}t} = \sum_{j=1}^n c_j (A(t)\mathbf{x}^{(j)}(t)) = A(t) \left(\sum_{j=1}^n c_j \mathbf{x}^{(j)}(t)\right) = A(t)\mathbf{y}(t)
    $$
    所以，解的任意线性组合也是方程的解。

2.  **任何解都可以表示为这种形式**:
    设 $\mathbf{z}(t)$ 是方程 $\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A(t)\mathbf{x}$ 的任意一个解。
    在区间 $I$ 中取定一点 $t_0$。我们的目标是找到常数 $c_1, \ldots, c_n$ 使得
    $$
    c_1 \mathbf{x}^{(1)}(t_0) + c_2 \mathbf{x}^{(2)}(t_0) + \ldots + c_n \mathbf{x}^{(n)}(t_0) = \mathbf{z}(t_0)
    $$
    这个方程可以写成矩阵形式: $\mathbf{X}(t_0) \mathbf{c} = \mathbf{z}(t_0)$, 其中 $\mathbf{c} = (c_1, \ldots, c_n)^T$。
    由于解组 $\{\mathbf{x}^{(1)}(t), \ldots, \mathbf{x}^{(n)}(t)\}$ 是线性无关的，它们的朗斯基行列式 $W(t_0) = \det(\mathbf{X}(t_0)) \neq 0$。
    这意味着矩阵 $\mathbf{X}(t_0)$ 是可逆的。因此，存在唯一的常数向量 $\mathbf{c}$ 满足上述代数方程组：
    $$
    \mathbf{c} = (\mathbf{X}(t_0))^{-1} \mathbf{z}(t_0)
    $$
    现在，用这些求得的常数 $c_j$ 构造函数 $\mathbf{y}(t) = \sum_{j=1}^n c_j \mathbf{x}^{(j)}(t)$。
    根据证明的第一部分，$\mathbf{y}(t)$ 是原齐次线性方程组的一个解。
    并且，在 $t=t_0$ 时，$\mathbf{y}(t_0) = \sum_{j=1}^n c_j \mathbf{x}^{(j)}(t_0) = \mathbf{z}(t_0)$。
    因此，$\mathbf{y}(t)$ 和 $\mathbf{z}(t)$ 是同一个初值问题 $\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A(t)\mathbf{x}$, $\mathbf{x}(t_0) = \mathbf{z}(t_0)$ 的解。
    根据解的存在唯一性定理（4.2节的推论），我们必须有 $\mathbf{y}(t) = \mathbf{z}(t)$ 对所有 $t \in I$ 成立。
    所以，齐次线性方程组的任意解 $\mathbf{z}(t)$ 都可以表示为基本解组的线性组合 $\sum_{j=1}^n c_j \mathbf{x}^{(j)}(t)$ 的形式。

### 4.5 非齐次线性微分方程组的通解结构

考虑非齐次线性方程组 (NHL):
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A(t)\mathbf{x} + \mathbf{f}(t)
$$
以及对应的齐次线性方程组 (HL):
$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = A(t)\mathbf{x}
$$

**定理叙述**:
非齐次线性方程组 (NHL) 的通解 $\mathbf{x}(t)$ 可以表示为：
$$
\mathbf{x}(t) = \mathbf{x}_h(t) + \mathbf{x}_p(t)
$$
其中 $\mathbf{x}_h(t)$ 是对应的齐次方程组 (HL) 的通解，$\mathbf{x}_p(t)$ 是非齐次方程组 (NHL) 的任意一个特解。

**证明**:
1.  **证明 $\mathbf{x}_h(t) + \mathbf{x}_p(t)$ 是 (NHL) 的解**:
    设 $\mathbf{x}_h(t)$ 是 (HL) 的通解，即 $\frac{\mathrm{d}\mathbf{x}_h}{\mathrm{d}t} = A(t)\mathbf{x}_h(t)$。
    设 $\mathbf{x}_p(t)$ 是 (NHL) 的一个特解，即 $\frac{\mathrm{d}\mathbf{x}_p}{\mathrm{d}t} = A(t)\mathbf{x}_p(t) + \mathbf{f}(t)$。
    令 $\mathbf{y}(t) = \mathbf{x}_h(t) + \mathbf{x}_p(t)$。
    则
    $$
    \frac{\mathrm{d}\mathbf{y}}{\mathrm{d}t} = \frac{\mathrm{d}\mathbf{x}_h}{\mathrm{d}t} + \frac{\mathrm{d}\mathbf{x}_p}{\mathrm{d}t}
    $$
    $$
    = A(t)\mathbf{x}_h(t) + (A(t)\mathbf{x}_p(t) + \mathbf{f}(t))
    $$
    $$
    = A(t)(\mathbf{x}_h(t) + \mathbf{x}_p(t)) + \mathbf{f}(t)
    $$
    $$
    = A(t)\mathbf{y}(t) + \mathbf{f}(t)
    $$
    所以 $\mathbf{y}(t)$ 是 (NHL) 的解。由于 $\mathbf{x}_h(t)$ 包含 $n$ 个任意常数（来自齐次通解），$\mathbf{y}(t)$ 是 (NHL) 的通解。

2.  **证明 (NHL) 的任意解都可以写成这种形式**:
    设 $\mathbf{z}(t)$ 是 (NHL) 的任意一个解，$\mathbf{x}_p(t)$ 是 (NHL) 的某一个（已知的）特解。
    即 $\frac{\mathrm{d}\mathbf{z}}{\mathrm{d}t} = A(t)\mathbf{z}(t) + \mathbf{f}(t)$ 和 $\frac{\mathrm{d}\mathbf{x}_p}{\mathrm{d}t} = A(t)\mathbf{x}_p(t) + \mathbf{f}(t)$。
    考虑函数 $\mathbf{w}(t) = \mathbf{z}(t) - \mathbf{x}_p(t)$。
    $$
    \frac{\mathrm{d}\mathbf{w}}{\mathrm{d}t} = \frac{\mathrm{d}\mathbf{z}}{\mathrm{d}t} - \frac{\mathrm{d}\mathbf{x}_p}{\mathrm{d}t}
    $$
    $$
    = (A(t)\mathbf{z}(t) + \mathbf{f}(t)) - (A(t)\mathbf{x}_p(t) + \mathbf{f}(t))
    $$
    $$
    = A(t)\mathbf{z}(t) - A(t)\mathbf{x}_p(t)
    $$
    $$
    = A(t)(\mathbf{z}(t) - \mathbf{x}_p(t))
    $$
    $$
    = A(t)\mathbf{w}(t)
    $$
    这表明 $\mathbf{w}(t)$ 是对应的齐次方程组 (HL) 的一个解。
    因此，$\mathbf{w}(t)$ 必可表示为 (HL) 的通解形式。也就是说，$\mathbf{w}(t)$ 是 $\mathbf{x}_h(t)$（(HL) 的通解）中的一个特定解。
    所以 $\mathbf{z}(t) - \mathbf{x}_p(t) = \mathbf{x}_h(t)$ (这里 $\mathbf{x}_h(t)$ 代表一个特定的齐次解)。
    从而 $\mathbf{z}(t) = \mathbf{x}_h(t) + \mathbf{x}_p(t)$ (这里 $\mathbf{x}_h(t)$ 可以被理解为齐次通解，因为 $\mathbf{z}(t)$ 是任意的非齐次解)。
    这就证明了 (NHL) 的任意解都可以表示为齐次通解与一个非齐次特解之和。

**关于常系数**:
上述理论（存在唯一性，朗斯基行列式，通解结构）对变系数 $A(t)$ 均成立。当 $A(t) \equiv A$（常数矩阵）时，称为常系数线性微分方程组：
1.  $A(t)$ 和 $\mathbf{f}(t)$ 的连续性条件简化为 $\mathbf{f}(t)$ 的连续性（因为常数矩阵 $A$ 总是连续的）。
2.  Abel 公式中的 $\mathrm{tr}(A(t))$ 变为常数 $\mathrm{tr}(A)$，所以 $W(t) = W(t_0) e^{\mathrm{tr}(A)(t-t_0)}$。
3.  寻找基本解组 $\mathbf{x}^{(j)}(t)$ 的方法有特定的技巧，例如利用特征值和特征向量（当 $A$ 可对角化时）或广义特征向量。例如，若 $\lambda$ 是常数矩阵 $A$ 的特征值，$\mathbf{v}$ 是对应的特征向量，则 $\mathbf{x}(t) = e^{\lambda t}\mathbf{v}$ 是齐次方程组的一个解。

这些是关于一阶微分方程组和线性一阶微分方程组（特别是常系数情况）解的一般理论的核心内容。
