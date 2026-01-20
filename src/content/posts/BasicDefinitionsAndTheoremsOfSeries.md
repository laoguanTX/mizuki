---
title: 级数的基础定义定理
published: 2025-02-18
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "basicdefinitionsandtheoremsofseries"
---
## 一、级数定义与其收敛发散性

### 1、定义：级数、部分数列和

给定数列 $\{a_n\}$，将其每一项依次用“+”号连接起来的表达式：

$$a_1 + a_2 + \cdots + a_n + \cdots $$

称为无穷级数。由于其通项 $a_n$ 都是常数，也称之为常数项级数，记作 $\sum_{n=1}^{+\infty} a_n$。

在级数 $\sum_{n=1}^{+\infty} a_n$ 中，前 $n$ 项的和：$S_n = a_1 + a_2 + \cdots + a_n$，称为该级数的部分和。所得的数列 $\{S_n\}$ 称为部分和数列。

级数 $\sum_{n=1}^{+\infty} a_n$ 的通项 $a_n$ 与其部分和数列 $\{S_n\}$ 之间有如下关系
$$
a_n = 
\begin{cases} 
S_1 & (n=1) \\
S_n - S_{n-1} & (n \geq 2)
\end{cases}
$$

### 2、定义：级数的收敛与发散
若级数的部分和数列 $\{S_n\}$ 收敛于 $S$ (即 $\lim_{n \to +\infty} S_n = S$)，则称级数 $\sum_{n=1}^{+\infty} a_n$ 收敛，此时称部分和数列 $\{S_n\}$ 的极限 $S$ 为级数 $\sum_{n=1}^{+\infty} a_n$ 的和。

记作
$$sum_{n=1}^{+\infty} a_n = S = \lim_{n \to +\infty} S_n$$

若级数的部分和数列 $\{S_n\}$ 发散，则称级数 $\sum_{n=1}^{+\infty} a_n$ 发散。

### 3、定理：级数收敛的必要条件
级数 $\sum_{n=1}^{+\infty} a_n$ 收敛，则：$\lim_{n \to +\infty} a_n = 0$。

### 4、定理：级数的柯西收敛准则
级数 $\sum_{n=1}^{+\infty} a_n$ 收敛的充要条件是对 $\forall \varepsilon > 0, \exists N > 0$. 当 $n > N$ 时，对 $\forall p \in N^+$ 均有
$$|S_{n+p} - S_n| = |a_{n+1} + a_{n+2} + \cdots + a_{n+p}| < \varepsilon$$

### 5、定理：收敛级数的性质
1. 若级数 $\sum_{n=1}^{\infty} a_n, \sum_{n=1}^{\infty} b_n$ 均收敛，则：对任意 $k_1, k_2 \in R \sum_{n=1}^{\infty} (k_1 a_n + k_2 b_n)$ 也收敛，且
   $$\sum_{n=1}^{\infty} (k_1 a_n + k_2 b_n) = k_1 \sum_{n=1}^{\infty} a_n + k_2 \sum_{n=1}^{\infty} b_n$$
2. 去掉、添加或改变级数的有限项，不改变级数的敛散性。
3. 收敛级数任意添加括号后所得级数仍然收敛，且其和不变。
4. 正项级数 $\sum_{n=1}^{+\infty} a_n$ 收敛的充分必要条件为部分和数列 $\{S_n\}$ 有界。即，存在正数 $M > 0$，对 $\forall n \in \mathbb{N}^+$ 都有
   $$S_n = \sum_{k=1}^{n} a_k \leq M$$

## 二、正项级数

### 1、定理：比较判别法

对正项级数 $\sum_{n=1}^{+\infty} a_n$、$\sum_{n=1}^{+\infty} b_n$，如果存在自然数 $N$，当 $n > N$ 时，有 $a_n \leq b_n$，则

1. 若级数 $\sum_{n=1}^{+\infty} b_n$ 收敛，则级数 $\sum_{n=1}^{+\infty} a_n$ 也收敛；
2. 若级数 $\sum_{n=1}^{+\infty} a_n$ 发散，则级数 $\sum_{n=1}^{+\infty} b_n$ 必发散。

### 2、定理：极限判别法
对于正项级数 $\sum_{n=1}^{+\infty} a_n, \sum_{n=1}^{+\infty} b_n$，若 $\lim_{n \to +\infty} \frac{a_n}{b_n} = l$，则

1. 当 $0 < l < +\infty$ 时，级数 $\sum_{n=1}^{+\infty} a_n, \sum_{n=1}^{+\infty} b_n$ 有相同的敛散性；
2. 当 $l = 0$ 时，若 $\sum_{n=1}^{+\infty} b_n$ 收敛，则 $\sum_{n=1}^{+\infty} a_n$ 收敛；
3. 当 $l = +\infty$ 时，若 $\sum_{n=1}^{+\infty} a_n$ 收敛，则 $\sum_{n=1}^{+\infty} b_n$ 收敛。

### 3、定理：达朗贝尔比值判别法
1. 非极限形式：

  设 $\sum_{n=1}^{\infty} a_n$ 是一个正项级数，如果存在一个正整数 $N$ 和一个常数 $q$，使得对于所有 $n \geq N$，有
$$
  \frac{a_{n+1}}{a_n} \leq q < 1,
$$
  则级数 $\sum_{n=1}^{\infty} a_n$ 收敛。

  如果对于所有 $n \geq N$，有
$$
  \frac{a_{n+1}}{a_n} \geq 1,
$$
  则级数 $\sum_{n=1}^{\infty} a_n$ 发散。

2. 极限形式：

  设 $\sum_{n=1}^{+\infty} a_n$ 是正项级数，且 $\lim_{n \to +\infty} \frac{a_{n+1}}{a_n} = l (0 \leq l \leq +\infty)$。则

  1. 当 $0 \leq l < 1$ 时，级数 $\sum_{n=1}^{+\infty} a_n$ 收敛；
  2. 当 $l > 1$ 或 $l = +\infty$ 时，级数 $\sum_{n=1}^{+\infty} a_n$ 发散。

### 4、定理：柯西根值判别法
1. 非极限形式：

  设 $\sum_{n=1}^{\infty} a_n$ 是一个正项级数，如果存在一个正整数 $N$ 和一个常数 $q$，使得对于所有 $n \geq N$，有
$$
  \sqrt[n]{a_n} \leq q < 1,
$$
  则级数 $\sum_{n=1}^{\infty} a_n$ 收敛。

  如果对于所有 $n \geq N$，有
$$
  \sqrt[n]{a_n} \geq 1,
$$
  则级数 $\sum_{n=1}^{\infty} a_n$ 发散。
2. 极限形式：

  设 $\sum_{n=1}^{\infty} a_n$ 是正项级数，且：
  $$\lim_{n \to \infty} \sqrt[n]{a_n} = \rho. (0 \leq \rho \leq +\infty)$$
  则：

  1. 当 $\rho < 1$ 时，级数 $\sum_{n=1}^{+\infty} a_n$ 收敛；
  2. 当 $\rho > 1$ 或 $\rho = +\infty$ 时，级数 $\sum_{n=1}^{+\infty} a_n$ 发散。

### 5、定理：柯西积分判别法
设函数 $f(x)$ 在 $[1,+\infty)$ 上连续，恒正且单调递减，则级数 $\sum_{n=1}^{+\infty} f(n)$ 与广义积分 $\int_1^{+\infty} f(x)dx$ 有相同的敛散性。

### 6、推论：比较判别法扩展

设$\sum_{n=1}^{+\infty}a_n$和$\sum_{n=1}^{+\infty}b_n$是正项级数，存在：
$$
\lim_{n\to+\infty}\frac{a_{n+1}}{a_n}<\lim_{n\to+\infty}\frac{b_{n+1}}{b_n}
$$
那么：

1. 如果$\sum_{n=1}^{+\infty}b_n$收敛，有$\sum_{n=1}^{+\infty}a_n$收敛。
2. 如果$\sum_{n=1}^{+\infty}a_n$发散，有$\sum_{n=1}^{+\infty}b_n$发散。

### 7、定理：拉贝判别法

对于正项级数 $\sum a_n$，如果存在极限
$$
L = \lim_{n \to \infty} n \left( \frac{a_n}{a_{n+1}} - 1 \right),
$$
则：
1. 如果 $L > 1$，级数收敛；
2. 如果 $L < 1$，级数发散；
3. 如果 $L = 1$，判别法失效。

### 8、定理：高斯判别法

对于正项级数 $\sum a_n$，如果存在常数 $\alpha$ 和 $C$ 使得
$$
\frac{a_n}{a_{n+1}} = 1 + \frac{\alpha}{n} + \frac{C}{n^2} + o\left(\frac{1}{n^2}\right),
$$
则：
1. 如果 $\alpha > 1$，级数收敛；

2. 如果 $\alpha \leq 1$，级数发散。

## 三、交错级数

### 1、定义：交错级数

若 $a_n > 0$ ($n = 1, 2, \cdots$)，则称 $\sum_{n=1}^{+\infty} (-1)^{n-1} a_n$ 为交错级数（或交叉级数）。具体为
$$
\sum_{n=1}^{+\infty} (-1)^{n-1} a_n = a_1 - a_2 + a_3 - a_4 + \cdots + (-1)^{n-1} a_n + \cdots.
$$

### 2、定理：莱布尼茨判别法

若交错级数 $\sum_{n=1}^{+\infty} (-1)^{n-1} a_n$ ($a_n > 0$) 满足

1. 数列 $\{a_n\}$ 单调递减，即 $a_{n+1} \leq a_n$ ($n = 1, 2, \cdots$)
2. $\lim_{n \to +\infty} a_n = 0$

则交错级数 $\sum_{n=1}^{+\infty} (-1)^{n-1} a_n$ 收敛，且其和 $S \leq a_1$

## 四、条件收敛与绝对收敛

### 1、定义：绝对收敛与条件收敛

若级数 $\sum_{n=1}^{+\infty} |a_n|$ 收敛，则称级数 $\sum_{n=1}^{+\infty} a_n$ 绝对收敛；若级数 $\sum_{n=1}^{+\infty} a_n$ 收敛，而 $\sum_{n=1}^{+\infty} |a_n|$ 发散，则称级数 $\sum_{n=1}^{+\infty} a_n$ 条件收敛。

### 2、定理：条件收敛的性质

如果级数 $\sum_{n=1}^{+\infty} a_n$ 绝对收敛，则级数 $\sum_{n=1}^{+\infty} a_n$ 必收敛。

## 五、幂级数

### 1、定义：幂级数

由幂函数数列 $\{a_n(x - x_0)^n\}$（$a_n, x_0$ 为实常数）构成的项级数

$$
a_0 + a_1(x - x_0) + a_2(x - x_0)^2 + \cdots + a_n(x - x_0)^n + \cdots,
$$

称作以 $x_0$ 为中心的幂级数。

### 2、定义：收敛点、发散点、收敛域、发散域

如果级数 $\sum_{n=1}^{+\infty} a_n$ 在某一点 $x$ 处收敛，则称 $x$ 为该级数的收敛点；如果级数 $\sum_{n=1}^{+\infty} a_n$ 在某一点 $x$ 处发散，则称 $x$ 为该级数的发散点。

级数 $\sum_{n=1}^{+\infty} a_n(x - x_0)^n$ 的所有收敛点构成的集合称为该级数的收敛域；级数 $\sum_{n=1}^{+\infty} a_n(x - x_0)^n$ 的所有发散点构成的集合称为该级数的发散域。

### 3、定理：阿贝尔定理

若幂级数 $\sum_{n=0}^{+\infty} a_n x^n$ 在 $x_0 \neq 0$ 处收敛，则对满足不等式 $|x| < |x_0|$ 的所有 $x$ 都收敛且绝对收敛。

若幂级数 $\sum_{n=0}^{+\infty} a_n x^n$ 在 $x_0 \neq 0$ 处发散，则对满足不等式 $|x| > |x_0|$ 的所有 $x$ 都发散。

### 4、推论：收敛半径与收敛区间

如果幂级数 $\sum_{n=0}^{+\infty} a_n x^n$ 不在整个实数轴上收敛，也不是仅在 $x = 0$ 处收敛，则存在正数 $r$ 使得

1. 当 $|x| < r$ 时，幂级数 $\sum_{n=0}^{+\infty} a_n x^n$ 绝对收敛；

2. 当 $|x| > r$ 时，幂级数 $\sum_{n=0}^{+\infty} a_n x^n$ 发散。

3. 当 $x = -r$ 或 $x = r$ 时，幂级数可能收敛也可能发散。

上面推论中的正数 $r$ 称为幂级数 $\sum_{n=0}^{+\infty} a_n x^n$ 的收敛半径。开区间 $(-r, r)$ 称为幂级数 $\sum_{n=0}^{+\infty} a_n x^n$ 的收敛区间。再由幂级数 $\sum_{n=0}^{+\infty} a_n x^n$ 在 $x = \pm r$ 处的收敛情况可确定其收敛域：$(-r, r)$，$[-r, r)$，$(-r, r]$，$[-r, r]$。

如果幂级数仅在 $x = 0$ 处收敛，其收敛半径 $r = 0$；如果幂级数在整个实数轴上都收敛，则其收敛半径 $r = +\infty$，收敛域为 $(-\infty, +\infty)$。