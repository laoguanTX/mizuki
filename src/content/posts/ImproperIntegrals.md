---
title: 反常积分
published: 2024-12-24
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "improperintegrals"
---
## 一、第一类反常积分定义
设函数$f(x)$在区间$[a,+\infty)$上连续，于是对于任意$t>a$，积分$\int_a^tf(x)\mathrm{d}x$存在，它是$t$的函数，称记号

$$
\int_a^{+\infty}f(x)\mathrm{d}x\xlongequal{\text{def}}\lim_{t\to+\infty}\int_a^tf(x)\mathrm{d}x
$$

为函数$f(x)$在无穷区间$[a,+\infty)$上的反常积分（或第一类反常积分）
同样地，设函数$f(x)$在区间$(-\infty,b]$上连续，于是对于任意$t<b$，积分$\int_t^bf(x)\mathrm{d}x$存在，它是$t$的函数，称记号

$$
\int_{-\infty}^{b}f(x)\mathrm{d}x\xlongequal{\text{def}}\lim_{t\to-\infty}\int_t^bf(x)\mathrm{d}x
$$

为函数$f(x)$在无穷区间$(-\infty,b]$上的反常积分（或第一类反常积分）
若上面两式右边极限存在，则称反常积分收敛，否则称反常积分发散。
设$f(x)$在$(-\infty,+\infty)$上连续，记号

$$
\int_{-\infty}^{+\infty}f(x)\mathrm{d}x\xlongequal{\text{def}}\int_{-\infty}^af(x)\mathrm{d}x+\int_a^{+\infty}f(x)\mathrm{d}x
$$

只有等式右边两个积分都收敛，才称反常积分收敛。也可知该反常积分的收敛与否和收敛时的值，与$a$的选取无关。
## 二、第二类反常积分
设函数$f(x)$在区间$(a,b]$上连续，$\lim_{x\to a^+}f(x)=\infty$（称点$a$为瑕点）。于是，任给$\varepsilon>0$且$\varepsilon<b-a$，$\int_{a+\varepsilon}^bf(x)\mathrm{d}x$均存在，它是$\varepsilon$的函数，称记号

$$
\int_a^bf(x)\mathrm{d}x\xlongequal{\text{def}}\lim_{\varepsilon\to0^+}\int^b_{a+\varepsilon}f(x)\mathrm{d}x
$$

为无界函数$f(x)$在$[a,b]$上的反常积分（第二类反常积分）
同样地，设函数$f(x)$在区间$[a,b)$上连续，$\lim_{x\to b^-}f(x)=\infty$（称点$b$为瑕点）。于是，任给$\varepsilon>0$且$\varepsilon<b-a$，$\int^{b-\varepsilon}_af(x)\mathrm{d}x$均存在，它是$\varepsilon$的函数，称记号

$$
\int_a^bf(x)\mathrm{d}x\xlongequal{\text{def}}\lim_{\varepsilon\to0^+}\int_a^{b-\varepsilon}f(x)\mathrm{d}x
$$

为无界函数$f(x)$在$[a,b]$上的反常积分（第二类反常积分）
设$f(x)$在 $[a,c)\cup(c,b]$上连续，$\lim_{x\to c}f(x)=\infty$称点$x$为瑕点），称记号

$$
\int_a^bf(x)\mathrm{d}x\xlongequal{\text{def}}
\int_a^cf(x)\mathrm{d}x+\int_c^bf(x)\mathrm{d}x
$$

只有等式右边两个积分都收敛，才称反常积分收敛。也可知该反常积分的收敛与否和收敛时的值。
## 二、常见反常积分
### 1、第一$p$反常积分

$$
\int_a^{+\infty}\frac{\mathrm{d}x}{x^p}=
\begin{cases}
\dfrac{a^{1-p}}{p-1},p>1\\
+\infty,p<1
\end{cases}
$$

### 2、第二$p$反常积分

$$
\int_a^b\dfrac{\mathrm{d}x}{(b-x)^p}=
\begin{cases}
\dfrac{(b-a)^{1-p}}{1-p},p<1\\
+\infty,p\ge1
\end{cases}
$$

### 3、$\Gamma$函数
$\Gamma$函数的定义式：

$$
\Gamma(s)=\int_0^{+\infty}x^{s-1}e^{-x}\mathrm{d}x\quad(s>0)
$$

$\Gamma$函数的性质：

$$
\Gamma(s+1)=s\Gamma(s)\quad s>0
$$

$$
\Gamma(1)=1
$$

$$
\Gamma(n+1)=n!
$$

$$
\Gamma(s)\Gamma(1-s)=\dfrac{\pi}{\sin \pi s}
$$

$\Gamma$函数定义域的扩展：

$$
\begin{aligned}
&\Gamma(s)=\dfrac{\Gamma(s+1)}s\quad -1<s<0\\
&\Gamma(s)=\dfrac{\Gamma(s+1)}s=\dfrac{\Gamma(s+2)}{s(s+1)}\quad -2<s<-1\\
\end{aligned}
$$
