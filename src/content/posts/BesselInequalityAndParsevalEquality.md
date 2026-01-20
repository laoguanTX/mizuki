---
title: Bessel不等式与Parseval等式
published: 2025-03-10
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "besselinequalityandparsevalequality"
---
## 一、误差公式
误差公式描述了函数 $f(x)$ 与其傅里叶级数 $k$ 阶三角级数部分和 $S_k(x)$ 之间的逼近误差能量。具体公式为：

$$
E_k = \int_{-\pi}^{\pi} \left| f(x) - S_k(x) \right|^2 \, dx = \int_{-\pi}^{\pi} |f(x)|^2 \, dx - \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right)
$$

以下是误差公式的详细推导过程：

---

### **步骤 1：定义误差函数**
设 $S_k(x)$ 为傅里叶级数的 $k$ 阶部分和：
$$
S_k(x) = \frac{a_0}{2} + \sum_{n=1}^{k} \left( a_n \cos(nx) + b_n \sin(nx) \right),
$$
定义误差函数：
$$
E_k(x) = f(x) - S_k(x).
$$

---

### **步骤 2：展开误差的平方积分**
计算误差的平方在区间 $[-\pi, \pi]$ 上的积分：
$$
E_k = \int_{-\pi}^{\pi} \left| f(x) - S_k(x) \right|^2 \, dx.
$$
展开平方项：
$$
E_k = \int_{-\pi}^{\pi} \left( f(x) - S_k(x) \right)^2 dx = \int_{-\pi}^{\pi} f(x)^2 dx - 2 \int_{-\pi}^{\pi} f(x) S_k(x) dx + \int_{-\pi}^{\pi} S_k(x)^2 dx.
$$

---

### **步骤 3：计算交叉项 $\int f(x) S_k(x) dx$**
将 $S_k(x)$ 代入交叉项：
$$
\int_{-\pi}^{\pi} f(x) S_k(x) dx = \int_{-\pi}^{\pi} f(x) \left[ \frac{a_0}{2} + \sum_{n=1}^{k} \left( a_n \cos(nx) + b_n \sin(nx) \right) \right] dx.
$$
分项积分：
$$
= \frac{a_0}{2} \int_{-\pi}^{\pi} f(x) dx + \sum_{n=1}^{k} a_n \int_{-\pi}^{\pi} f(x) \cos(nx) dx + \sum_{n=1}^{k} b_n \int_{-\pi}^{\pi} f(x) \sin(nx) dx.
$$
根据傅里叶系数的定义：
$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) dx, \quad b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) dx,
$$
代入后得到：
$$
\int_{-\pi}^{\pi} f(x) S_k(x) dx = \frac{a_0}{2} \cdot \pi a_0 + \sum_{n=1}^{k} a_n \cdot \pi a_n + \sum_{n=1}^{k} b_n \cdot \pi b_n = \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right).
$$

---

### **步骤 4：计算 $\int S_k(x)^2 dx$**
利用三角函数的正交性：
$$
\int_{-\pi}^{\pi} \cos(nx)\cos(mx) dx = 
\begin{cases} 
0 & n \neq m, \\
\pi & n = m \neq 0, \\
2\pi & n = m = 0,
\end{cases}
$$
对 $\sin(nx)$ 同理。展开 $S_k(x)^2$：
$$
S_k(x)^2 = \left( \frac{a_0}{2} \right)^2 + \sum_{n=1}^{k} a_n^2 \cos^2(nx) + \sum_{n=1}^{k} b_n^2 \sin^2(nx) + \text{交叉项}.
$$
由于正交性，交叉项的积分为零。因此：
$$
\int_{-\pi}^{\pi} S_k(x)^2 dx = \frac{a_0^2}{4} \cdot 2\pi + \sum_{n=1}^{k} a_n^2 \cdot \pi + \sum_{n=1}^{k} b_n^2 \cdot \pi = \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right).
$$

---

### **步骤 5：代入误差公式**
将步骤 3 和步骤 4 的结果代入步骤 2：
$$
E_k = \int_{-\pi}^{\pi} f(x)^2 dx - 2 \cdot \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right) + \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right).
$$
化简后：
$$
E_k = \int_{-\pi}^{\pi} f(x)^2 dx - \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right).
$$

---

### **步骤 6：物理意义与推论**
- **Bessel 不等式**：由于 $E_k \geq 0$，可得：
  $$
  \int_{-\pi}^{\pi} f(x)^2 dx \geq \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right),
  $$
  说明傅里叶系数的平方和不超过函数的能量。

- **Parseval 等式**：当 $k \to \infty$ 且傅里叶级数收敛（如 $f(x)$ 连续可微），则 $E_k \to 0$，得：
  $$
  \int_{-\pi}^{\pi} f(x)^2 dx = \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{\infty} (a_n^2 + b_n^2) \right),
  $$
  表明函数的总能量等于其所有傅里叶分量的能量之和。

---

## 二、Bessel 不等式和 Parseval 等式的推导

Bessel 不等式和 Parseval 等式是傅里叶分析中的重要结果，它们描述了函数与其傅里叶级数之间的关系。以下是详细的推导过程。

---

### 1. 准备工作
设 $f(x)$ 是一个周期为 $2\pi$ 的函数，且 $f(x)$ 在区间 $[-\pi, \pi]$ 上平方可积，即：
$$
\int_{-\pi}^{\pi} |f(x)|^2 \, dx < \infty
$$
其傅里叶级数为：
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos(nx) + b_n \sin(nx) \right)
$$
其中，傅里叶系数为：
$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) \, dx, \quad n \geq 0
$$
$$
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) \, dx, \quad n \geq 1
$$

---

### 2. Bessel 不等式的推导
Bessel 不等式描述了傅里叶系数的平方和与函数能量之间的关系。

#### 步骤 1：定义部分和
考虑傅里叶级数的部分和：
$$
S_k(x) = \frac{a_0}{2} + \sum_{n=1}^{k} \left( a_n \cos(nx) + b_n \sin(nx) \right)
$$

#### 步骤 2：计算误差的平方
定义误差函数：
$$
E_k(x) = f(x) - S_k(x)
$$
计算误差的平方积分：
$$
\int_{-\pi}^{\pi} |E_k(x)|^2 \, dx = \int_{-\pi}^{\pi} \left| f(x) - S_k(x) \right|^2 \, dx
$$

#### 步骤 3：展开误差的平方
将误差的平方展开：
$$
\int_{-\pi}^{\pi} |f(x) - S_k(x)|^2 \, dx = \int_{-\pi}^{\pi} |f(x)|^2 \, dx - 2 \int_{-\pi}^{\pi} f(x) S_k(x) \, dx + \int_{-\pi}^{\pi} |S_k(x)|^2 \, dx
$$

#### 步骤 4：计算交叉项
利用傅里叶系数的定义，计算交叉项：
$$
\int_{-\pi}^{\pi} f(x) S_k(x) \, dx = \int_{-\pi}^{\pi} f(x) \left( \frac{a_0}{2} + \sum_{n=1}^{k} \left( a_n \cos(nx) + b_n \sin(nx) \right) \right) dx
$$
由于正交性，只有对应的傅里叶系数项非零，因此：
$$
\int_{-\pi}^{\pi} f(x) S_k(x) \, dx = \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right)
$$

#### 步骤 5：计算 $ S_k(x) $ 的平方积分
利用正交性，计算 $S_k(x)$ 的平方积分：
$$
\int_{-\pi}^{\pi} |S_k(x)|^2 \, dx = \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right)
$$

#### 步骤 6：代入误差公式
将上述结果代入误差公式：
$$
\int_{-\pi}^{\pi} |f(x) - S_k(x)|^2 \, dx = \int_{-\pi}^{\pi} |f(x)|^2 \, dx - \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right)
$$

#### 步骤 7：Bessel 不等式
由于误差的平方积分非负，因此：
$$
\int_{-\pi}^{\pi} |f(x)|^2 \, dx \geq \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right)
$$
令 $k \to \infty$，得到 Bessel 不等式：
$$
\int_{-\pi}^{\pi} |f(x)|^2 \, dx \geq \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{\infty} (a_n^2 + b_n^2) \right)
$$

---

### 3. Parseval 等式的推导
Parseval 等式是 Bessel 不等式的特殊情况，当傅里叶级数收敛到 $ f(x) $ 时成立。

#### 条件
如果傅里叶级数一致收敛到 $f(x)$，即：
$$
\lim_{k \to \infty} \int_{-\pi}^{\pi} |f(x) - S_k(x)|^2 \, dx = 0
$$

#### 代入误差公式
根据误差公式：
$$
\int_{-\pi}^{\pi} |f(x) - S_k(x)|^2 \, dx = \int_{-\pi}^{\pi} |f(x)|^2 \, dx - \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{k} (a_n^2 + b_n^2) \right)
$$
当 $k \to \infty$ 时，左边趋于 $0$，因此：
$$
\int_{-\pi}^{\pi} |f(x)|^2 \, dx = \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{\infty} (a_n^2 + b_n^2) \right)
$$
这就是 Parseval 等式。

---

### 4. 总结
- **Bessel 不等式**：
  $$
  \int_{-\pi}^{\pi} |f(x)|^2 \, dx \geq \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{\infty} (a_n^2 + b_n^2) \right)
  $$
- **Parseval 等式**（当傅里叶级数收敛时）：
  $$
  \int_{-\pi}^{\pi} |f(x)|^2 \, dx = \pi \left( \frac{a_0^2}{2} + \sum_{n=1}^{\infty} (a_n^2 + b_n^2) \right)
  $$

这两个结果在傅里叶分析中具有重要意义，分别描述了傅里叶系数的能量关系和函数的能量守恒。