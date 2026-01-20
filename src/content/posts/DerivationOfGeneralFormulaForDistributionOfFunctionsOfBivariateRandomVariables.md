---
title: 二元随机变量函数分布通解公式推导
published: 2025-04-15
category: ["数学", "概率论与数理统计"]
tags: ["概率论"]
alias: "derivationofgeneralformulafordistributionoffunctionsofbivariaterandomvariables"
---
设 $(X,Y)$ 为二元随机变量，其联合密度函数为 $f_{X,Y}(x,y)$（对于离散变量则讨论概率函数），下列公式给出不同变换函数 $Z=g(X,Y)$ 的分布推导方法。下面推导过程都假设 $X,Y$ 不是相互独立的，如果独立的话，可以进行下述化简：
$$
F_{X,Y}(x,y)=F_X(x)+F_Y(y)
$$


---

## 一、线性变换：$Z=aX+bY$

### 方法1：**变量替换（雅可比变换法）**

选择变换
$$
\begin{cases}
z = a x + b y,\\[1mm]
w = x \quad (\text{或其它与 }z \text{无关的函数})
\end{cases}
$$
则反解得
$$
\begin{cases}
x = w,\\[1mm]
y = \dfrac{z - a w}{b}\quad (b\neq 0).
\end{cases}
$$

计算雅可比行列式：
$$
J=\left|\frac{\partial(x,y)}{\partial(z,w)}\right| = \left|\begin{matrix}
\frac{\partial x}{\partial z} & \frac{\partial x}{\partial w}\\[1mm]
\frac{\partial y}{\partial z} & \frac{\partial y}{\partial w}
\end{matrix}\right|
=\left|\begin{matrix}
0 & 1 \\[1mm]
\frac{1}{b} & -\frac{a}{b}
\end{matrix}\right| = \left|\frac{-1}{b}\right|=\frac{1}{|b|}.
$$

于是，$Z$ 的边缘密度为
$$
f_Z(z)= \int_{-\infty}^{\infty} f_{X,Y}\Bigl(w,\frac{z-a w}{b}\Bigr)\cdot \frac{1}{|b|}\,\mathrm{d}w.
$$

类似地，如果 $a\neq 0$ 也可以选择 $w=y$ 得到
$$
f_Z(z)= \int_{-\infty}^{\infty} f_{X,Y}\Bigl(\frac{z-b w}{a},w\Bigr)\cdot \frac{1}{|a|}\,\mathrm{d}w.
$$

### 方法2：**累积分布函数法**

首先给出 $Z$ 的累积分布函数（CDF）表达式
$$
F_Z(z) = P(Z \le z) = P(aX+bY \le z)
= \iint\limits_{ax+by \le z} f_{X,Y}(x,y)\, \mathrm{d}x\, \mathrm{d}y.
$$

为便于求导，我们固定 $x$ 后，将不等式转换为关于 $y$ 的不等式。  
假设 $b>0$，则不等式
$$
ax+by \le z \quad\Longrightarrow\quad y \le \frac{z-ax}{b}.
$$

因此，累积分布函数可以写为
$$
F_Z(z) = \int_{-\infty}^{\infty} \left[ \int_{-\infty}^{\frac{z-ax}{b}} f_{X,Y}(x,y)\, \mathrm{d}y \right] \mathrm{d}x.
$$

对内层积分关于 $z$ 求导，对于固定 $x$，令
$$
G(x,z) = \int_{-\infty}^{\frac{z-ax}{b}} f_{X,Y}(x,y)\,\mathrm{d}y.
$$

注意到积分上限 $\displaystyle \frac{z-ax}{b}$ 随 $z$ 变化，根据广义莱布尼兹公式，
$$
\frac{\partial G(x,z)}{\partial z}
= f_{X,Y}\left(x,\,\frac{z-ax}{b}\right) \cdot \frac{\mathrm{d}}{\mathrm{d}z}\left(\frac{z-ax}{b}\right)
= \frac{1}{b}\, f_{X,Y}\left(x,\,\frac{z-ax}{b}\right).
$$

对整体积分关于 $z$ 求导，由于
$$
F_Z(z) = \int_{-\infty}^{\infty} G(x,z)\,\mathrm{d}x,
$$
可将微分运算与积分互换（在适当的正则条件下，即 $f_{X,Y}(x,y)$ 足够光滑、积分绝对收敛），得：
$$
\frac{\mathrm{d}}{\mathrm{d}z} F_Z(z) = \int_{-\infty}^{\infty} \frac{\partial G(x,z)}{\partial z}\,\mathrm{d}x
= \frac{1}{b} \int_{-\infty}^{\infty} f_{X,Y}\left(x,\,\frac{z-ax}{b}\right)\mathrm{d}x.
$$

因此， $Z$ 的概率密度函数（PDF）为：
$$
f_Z(z)=\frac{\mathrm{d}}{\mathrm{d}z}F_Z(z) = \frac{1}{b}\int_{-\infty}^{\infty} f_{X,Y}\left(x,\,\frac{z-ax}{b}\right)\mathrm{d}x.
$$

---

## 二、极值变换：$Z=\max\{X,Y\}$ 与 $Z=\min\{X,Y\}$

### 1、$Z=\max\{X,Y\}$

#### 方法1：**累积分布函数法**

显然有
$$
F_Z(z)= P(\max\{X,Y\}\le z) = P(X\le z,\, Y\le z)= \int_{-\infty}^{z}\int_{-\infty}^{z} f_{X,Y}(x,y)\,\mathrm{d}x\,\mathrm{d}y.
$$
对 $z$ 求导（注意积分上限依赖于 $z$）可得
$$
f_Z(z)= \frac{\mathrm{d}}{\mathrm{d}z}F_Z(z)= \int_{-\infty}^{z} f_{X,Y}(z,y)\,\mathrm{d}y + \int_{-\infty}^{z} f_{X,Y}(x,z)\,\mathrm{d}x.
$$

#### 方法2：**极值概率的分部求导**

另一思路是在考虑两个变量中“哪个先达到 $z$”的问题，即对 $X=z$ 或 $Y=z$ 边界的贡献讨论：
$$
f_Z(z)= P(X=z,\, Y\le z)+ P(Y=z,\, X\le z),
$$
在连续变量的意义下，上式通过积分变为前面给出的表达式。

---

### 2、$Z=\min\{X,Y\}$

#### 方法1：**CDF法**

注意到
$$
F_Z(z)= P(\min\{X,Y\}\le z)=1-P(\min\{X,Y\}>z)= 1- P(X>z,\, Y>z).
$$
因此，
$$
F_Z(z)= 1-\int_z^{\infty}\int_z^{\infty} f_{X,Y}(x,y)\,\mathrm{d}x\,\mathrm{d}y.
$$

对 $z$ 求导利用莱布尼兹公式，
$$
f_Z(z)= \int_{z}^{\infty} f_{X,Y}(z,y)\,\mathrm{d}y + \int_{z}^{\infty} f_{X,Y}(x,z)\,\mathrm{d}x.
$$

---

## 3. 乘积变换：$Z=X\,Y$

由于乘积变换非线性，常采用变换法讨论连续与离散情况。

### (a) $X, Y$ 均连续情况

选择变换
$$
\begin{cases}
u = x,\\[1mm]
v = x y,
\end{cases}
$$
则反变换为
$$
\begin{cases}
x = u,\\[1mm]
y = \dfrac{v}{u}\quad (u\neq 0).
\end{cases}
$$

计算雅可比行列式：
$$
J=\left|\frac{\partial(x,y)}{\partial(u,v)}\right| = \left|\begin{matrix}
\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v}\\[1mm]
\frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
\end{matrix}\right| 
=\left|\begin{matrix}
1 & 0 \\[1mm]
-\frac{v}{u^2} & \frac{1}{u}
\end{matrix}\right| = \frac{1}{|u|}.
$$

于是，新联合密度为
$$
f_{U,V}(u,v)= f_{X,Y}\Bigl(u,\frac{v}{u}\Bigr)\cdot \frac{1}{|u|},
$$
进而 $Z=v$ 的边缘密度为
$$
f_Z(z)= \int_{-\infty}^{\infty} \frac{1}{|x|}\, f_{X,Y}\Bigl(x,\frac{z}{x}\Bigr)\,\mathrm{d}x.
$$

### (b) $X$ 离散，$Y$ 连续情况

设 $X$ 的取值为 $\{x_i\}$，概率为 $P(X=x_i)$，而 $Y$ 的密度为 $f_Y(y)$。

对于固定 $x_i$，有
$$
P(Z \le z \mid X=x_i)= P\Bigl(x_i Y \le z\Bigr)= F_Y\left(\frac{z}{x_i}\right),
$$
其中需要根据信号 $x_i$ 的正负适当调整不等式方向。

总体上，
$$
F_Z(z)= \sum_{x_i} P(X=x_i) \, F_Y\left(\frac{z}{x_i}\right).
$$

对 $z$ 求导则得到 $Z$ 的混合型密度：
$$
f_Z(z)= \sum_{x_i} P(X=x_i)\cdot \frac{1}{|x_i|}\, f_Y\left(\frac{z}{x_i}\right).
$$