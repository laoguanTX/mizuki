---
title: 常见激活函数表达式及其特性
published: 2025-06-19
category: ["程设计科", "人工智能"]
tags: ["人工智能"]
alias: "commonactivationfunctionexpressionsandtheircharacteristics"
---


## 1、Sigmoid 函数

**表达式：**

$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$

**导数：**

$$
\sigma'(x) = \sigma(x)[1 - \sigma(x)]
$$

**特性：**

- 输出区间：$(0, 1)$
- 非线性，可微
- 在$x \to +\infty$时趋近于1，$x \to -\infty$时趋近于0
- **优点**：将值压缩到$(0,1)$之间，适合做概率输出
- **缺点**：容易出现梯度消失问题，导致深层网络训练困难

## 2、Softmax 函数

**表达式：**

对于输入向量$\mathbf{x} = (x_1, x_2, \ldots, x_n)$，第$i$个输出：

$$
\text{Softmax}(x_i) = \frac{e^{x_i}}{\sum_{j=1}^{n} e^{x_j}}
$$

**特性：**

- 输出区间：$(0, 1)$，且所有输出元素和为1
- 多分类任务中常用作输出层激活函数
- **优点**：可以将输出解释为概率分布
- **缺点**：对输入的极端值敏感，容易导致梯度消失

---

## 3、ReLU (Rectified Linear Unit) 函数

**表达式：**

$$
\mathrm{ReLU}(x) = \max(0, x)
$$

**导数：**

$$
\mathrm{ReLU}'(x) = 
\begin{cases}
1, & x > 0 \\
0, & x \leq 0
\end{cases}
$$

**特性：**

- 输出区间：$[0, +\infty)$
- 非线性，分段线性结构
- **优点**：计算简单，高效；收敛速度快；缓解梯度消失问题
- **缺点**：$x \leq 0$时梯度为0，神经元易“死亡”（dead neuron）

## 4、ELU (Exponential Linear Unit) 函数

**表达式：**

$$
\mathrm{ELU}(x) = 
\begin{cases}
x, & x \geq 0 \\
\alpha (e^x - 1), & x < 0
\end{cases}
$$

其中$\alpha$为超参数，通常取$\alpha=1$。

**导数：**

$$
\mathrm{ELU}'(x) = 
\begin{cases}
1, & x \geq 0 \\
\mathrm{ELU}(x) + \alpha, & x < 0
\end{cases}
$$

**特性：**

- 输出区间：$(-\alpha, +\infty)$
- 非线性，对负数有缓和作用
- **优点**：缓解ReLU的“死亡神经元”问题，负值时有非零梯度
- **缺点**：计算较ReLU稍复杂

## 5、Tanh (双曲正切) 函数

**表达式：**

$$
\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

**导数：**

$$
\frac{\mathrm{d}}{\mathrm{d}x}\tanh(x) = 1 - \tanh^2(x)
$$

**特性：**

- 输出区间：$(-1, 1)$
- 非线性，可微
- $x \to +\infty$时趋近于1，$x \to -\infty$时趋近于-1
- **优点**：输出均值为0，收敛速度快于Sigmoid
- **缺点**：依然存在梯度消失问题