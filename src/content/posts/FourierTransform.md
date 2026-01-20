---
title: 傅里叶变换
published: 2025-10-18
category: ["数学", "数学物理方法"]
tags: ["复变函数", "微积分"]
alias: "fouriertransform"
---
## 一、傅里叶级数

### 1、周期函数的傅里叶展开

#### (1) 三角函数族

$$
\forall x,f(x+T)=f(x)
$$

那么称函数$f(x)$是以$T$为周期的周期函数，与该周期对应的原频率（称之为基频）为：
$$
\omega =\frac{2\pi}{T}=\frac{\pi}{l}
$$
对应的三角频率的三角函数族为（或者三角函数序列为）：
$$
1(\cos0x),\cos\omega x,\cos2\omega x,\cdots\cos k\omega x,\cdots
$$

$$
\sin\omega x,\sin\omega x,\cdots\sin k\omega x,\cdots
$$

对于该三角函数族，首先可以证明它是正交的（任意两个不相同元素的乘积在一个周期内的积分为零，相同两个元素乘积在一个周期内的积分大于零）

#### (2) 三角函数族的正交性

规定$(-l,l)$为三角函数的一个周期，那么可以推导如下公式，证明任意两个不相同元素的乘积在一个周期内的积分为零，相同两个元素乘积在一个周期内的积分大于零。
$$
\begin{aligned}\int_{-l}^l\cos k\omega x\cos n\omega x\mathrm{d}x&=\frac{1}{2}\int_{-l}^{l}\cos\left[\left(k-n\right)\omega x\right]\mathrm{d}x+\frac{1}{2}\int_{-l}^{l}\cos\left[\left(k+n\right)\omega x\right]\mathrm{d}x\\&=\frac{1}{2}\frac{\sin\left[\left(k-n\right)\omega x\right]}{\left(k-n\right)\omega}\big|_{-l}^l+\frac{1}{2}\frac{\sin\left[\left(k+n\right)\omega x\right]}{\left(k+n\right)\omega}\big|_{-l}^l=0,k\neq n\end{aligned}
$$

$$
\begin{aligned}\int_{-l}^l\sin k\omega x\sin n\omega x\mathrm{d}x&=\frac{1}{2}\int_{-l}^{l}\cos\left[\left(k-n\right)\omega x\right]\mathrm{d}x-\frac{1}{2}\int_{-l}^{l}\cos\left[\left(k+n\right)\omega x\right]\mathrm{d}x\\&=\frac{1}{2}\frac{\sin\left[\left(k-n\right)\omega x\right]}{\left(k-n\right)\omega}\big|_{-l}^l-\frac{1}{2}\frac{\sin\left[\left(k+n\right)\omega x\right]}{\left(k+n\right)\omega}\big|_{-l}^l=0,k\neq n\end{aligned}
$$

$$
\int_{-l}^l\cos k\omega x\cos k\omega\mathrm{d}x=\frac{1}{2}\int_{-l}^l\left[1+\cos2k\omega x\right]\mathrm{d}x=l+\frac{1}{4k\omega}\sin2k\omega x|_{-l}^l=l,k\neq0
$$

$$
\int_{-l}^l\sin k\omega x\sin k\omega\mathrm{d}x=\frac{1}{2}\int_{-l}^l\left[1-\cos2k\omega x\right]\mathrm{d}x=l-\frac{1}{4k\omega}\sin2k\omega x|_{-l}^l=l,k\neq0
$$

#### (3) 傅里叶级数展开计算

三角函数族是线性无关的基本函数族，可以将$f(x)$进行傅里叶级数展开：
$$
f(x)=a_0+\sum_{k=1}^\infty\left(a_k\cos\frac{k\pi x}{l}+b_k\sin\frac{k\pi x}{l}\right)=\sum_{k=0}^\infty\left(a_k\cos\frac{k\pi x}{l}+b_k\sin\frac{k\pi x}{l}\right)
$$
**方法一**：傅里叶级数展开分表达式中的系数可以使用三角函数正交性求解，具体来讲，把傅里叶级数展开表达式的两边同时乘上三角函数族中对应的项，然后在一个周期内进行积分，即可求得相应的系数。运算方法可以见文章[泰勒级数和傅里叶级数](https://www.laoguantx.top/posts/taylorseriesandfourierseries/#heading-8)：

- 零次项（平均值）：

$$
a_0=\frac1l\int_{-l}^lf(x)\mathrm{d}x
$$

- 余弦系数：
$$
a_n=\frac1l\int_{-l}^lf(x)\cos\left(\frac{n\pi x}l\right)\mathrm{d}x,n\neq0
$$
- 正弦系数：
$$
b_n=\frac1l\int_{-l}^lf(x)\sin\left(\frac{n\pi x}l\right)\mathrm{d}x,n\neq0
$$

**方法二**：使用最小二乘法来求傅里叶级数的系数。设$f(x)$在区间$[-l, l]$上有定义，我们希望用如下傅里叶级数来逼近我们希望找到一组系数$\{a_k, b_k\}$，使得级数与$f(x)$的均方误差最小，即
$$
E = \int_{-l}^{l} \left| f(x) - S_N(x) \right|^2 \mathrm{d}x
$$

其中，$S_N(x)$是前$N$项的部分和：

$$
S_N(x) = a_0 + \sum_{k=1}^{N} \left( a_k \cos \frac{k\pi x}{l} + b_k \sin \frac{k\pi x}{l} \right)
$$

目标是使$E$最小。令：

$$
E = \int_{-l}^{l} \left[ f(x) - a_0 - \sum_{k=1}^{N} \left( a_k \cos \frac{k\pi x}{l} + b_k \sin \frac{k\pi x}{l} \right) \right]^2 \mathrm{d}x
$$

令$E$关于每个$a_k$和$b_k$取极值，即对每个$a_k$和$b_k$分别求偏导并令其为零：

- 对$a_j$求导：

$$
\frac{\partial E}{\partial a_j} = -2 \int_{-l}^{l} \left[ f(x) - S_N(x) \right] \cos \frac{j\pi x}{l} \mathrm{d}x = 0
$$

- 对$b_j$求导：

$$
\frac{\partial E}{\partial b_j} = -2 \int_{-l}^{l} \left[ f(x) - S_N(x) \right] \sin \frac{j\pi x}{l} \mathrm{d}x = 0
$$

将$S_N(x)$展开代入上述方程，以$a_k$为例：

$$
\int_{-l}^{l} \left[ f(x) - a_0 - \sum_{k=1}^{N} \left( a_k \cos \frac{k\pi x}{l} + b_k \sin \frac{k\pi x}{l} \right) \right] \cos \frac{j\pi x}{l} \mathrm{d}x = 0
$$

展开：

$$
\int_{-l}^{l} f(x) \cos \frac{j\pi x}{l} \mathrm{d}x
- a_0 \int_{-l}^{l} \cos \frac{j\pi x}{l} \mathrm{d}x
- \sum_{k=1}^{N} a_k \int_{-l}^{l} \cos \frac{k\pi x}{l} \cos \frac{j\pi x}{l} \mathrm{d}x
- \sum_{k=1}^{N} b_k \int_{-l}^{l} \sin \frac{k\pi x}{l} \cos \frac{j\pi x}{l} \mathrm{d}x
= 0
$$

由于三角函数的正交性：

$$
\displaystyle \int_{-l}^{l} \cos \frac{m\pi x}{l} \cos \frac{n\pi x}{l} \mathrm{d}x = \begin{cases} 2l, & m=n=0 \\ l, & m=n\neq 0 \\ 0, & m \neq n \end{cases}
$$

$$
\displaystyle \int_{-l}^{l} \sin \frac{m\pi x}{l} \cos \frac{n\pi x}{l} \mathrm{d}x = 0
$$

$$
\displaystyle \int_{-l}^{l} \cos \frac{j\pi x}{l} \mathrm{d}x = 0 \quad (j \neq 0)
$$

于是，针对$a_j$：

- 若$j=0$：

  $$
  \int_{-l}^{l} f(x) \mathrm{d}x
  - a_0 \int_{-l}^{l} \mathrm{d}x
  = 0
  $$

  $$
  \int_{-l}^{l} f(x) \mathrm{d}x - a_0 \cdot 2l = 0
  $$

  $$
  a_0 = \frac{1}{2l} \int_{-l}^{l} f(x) \mathrm{d}x
  $$

- 若$j \ge 1$：

  $$
  \int_{-l}^{l} f(x) \cos \frac{j\pi x}{l} \mathrm{d}x
  - a_j \int_{-l}^{l} \cos^2 \frac{j\pi x}{l} \mathrm{d}x
  = 0
  $$
  $$
  \int_{-l}^{l} f(x) \cos \frac{j\pi x}{l} \mathrm{d}x - a_j l = 0
  $$
  $$
  a_j = \frac{1}{l} \int_{-l}^{l} f(x) \cos \frac{j\pi x}{l} \mathrm{d}x
  $$

对于$b_j$同理：

$$
\int_{-l}^{l} f(x) \sin \frac{j\pi x}{l} \mathrm{d}x
- b_j \int_{-l}^{l} \sin^2 \frac{j\pi x}{l} \mathrm{d}x = 0
$$

$$
\int_{-l}^{l} f(x) \sin \frac{j\pi x}{l} \mathrm{d}x - b_j l = 0
$$

$$
b_j = \frac{1}{l} \int_{-l}^{l} f(x) \sin \frac{j\pi x}{l} \mathrm{d}x
$$

最后得出最小二乘法下的傅里叶系数为：

$$
a_0 = \frac{1}{2l} \int_{-l}^{l} f(x) \mathrm{d}x
$$

$$
a_k = \frac{1}{l} \int_{-l}^{l} f(x) \cos \frac{k\pi x}{l} \mathrm{d}x,\quad k \ge 1
$$

$$
b_k = \frac{1}{l} \int_{-l}^{l} f(x) \sin \frac{k\pi x}{l} \mathrm{d}x,\quad k \ge 1
$$

这就是通过最小二乘法（即均方误差最小）推导出的傅里叶级数展开的系数公式，与方法一的结果相同。

#### (4) 傅里叶级数的收敛性

傅里叶级数的收敛性遵循狄利克雷收敛定理：如果函数$f(x)$及其导数在一个积分周期内是连续或者是分段连续（只有有限个第一类间断点：间断点左，右极限都存在，且有限）那么傅里叶级数在每一点是收敛的，而且：

- 如果$x$是连续点，那么傅里叶级数就收敛到$f(x)$
- 如果$x$是间断点，那么傅里叶级数就收敛到该点左右极限的平均值。

### 2、奇函数以及偶函数的傅里叶展开

如果周期函数$f(x)$是偶函数，由傅里叶系数的计算公式可见，正弦级数（反对称）项系数均为零，展开式称为傅里叶余弦级数

$$
f(x)=a_0+\sum_{k=1}^\infty a_k\cos\frac{k\pi x}l
$$

如果周期函数$f(x)$是奇函数，由傅里叶系数的计算公式可见，余弦级数（包括常数项，对称）项系数均为零，展开式成为傅里叶正弦级数

$$
f(x)=\sum_{k=1}^\infty b_k\sin\frac{k\pi x}l
$$

### 3、定义在有限区间上的函数的傅里叶展开

如果函数的定义域是一个有限的区间，可以采取延拓的方法，使其成为某个周期函数的一部分。然后再对延拓后的周期函数进行傅里叶级数展开。常见的延拓方式：

1. 把$[0,T]$作为函数的周期进行延拓。
2. 进行奇延拓。
3. 进行偶延拓。

### 4、复数形式的傅里叶级数

将傅里叶级数表示成复数形式：
$$
\cos k\omega x=\frac{1}{2}\left(e^{\mathrm{i}k\omega x}+e^{-\mathrm{i}k\omega x}\right)\quad\sin k\omega x=\frac{1}{2\mathrm{i}}\left(e^{\mathrm{i}k\omega x}-e^{-\mathrm{i}k\omega x}\right)
$$

$$
a_n=\frac{1}{l}\int_{-l}^lf(x)\frac{1}{2}\left(e^{\mathrm{i}k\omega x}+e^{-\mathrm{i}k\omega x}\right)\mathrm{d}x\quad b_n=\frac{1}{l}\int_{-l}^lf(x)\frac{1}{2\mathrm{i}}\left(e^{\mathrm{i}k\omega x}-e^{-\mathrm{i}k\omega x}\right)\mathrm{d}x
$$

我们可以得到：
$$
\begin{aligned}a_k\cos k\omega x+b_k\sin k\omega x=&\frac{1}{4l}\int_{-l}^lf(\xi)\left(e^{\mathrm{i}k\omega\xi}+e^{-\mathrm{i}k\omega\xi}\right)\mathrm{d}\xi\cdot\left(e^{\mathrm{i}k\omega x}+e^{-\mathrm{i}k\omega x}\right)\\&-\frac{1}{4l}\int_{-l}^lf(\xi)\left(e^{\mathrm{i}k\omega\xi}-e^{-\mathrm{i}k\omega\xi}\right)\mathrm{d}\xi\cdot\left(e^{\mathrm{i}k\omega x}-e^{-\mathrm{i}k\omega x}\right)\\=&\frac{1}{2l}\int_{-l}^lf(\xi)e^{-\mathrm{i}k\omega\xi}\mathrm{d}\xi\cdot e^{\mathrm{i}k\omega x}+\frac{1}{2l}\int_{-l}^lf(\xi)e^{\mathrm{i}k\omega\xi}\mathrm{d}\xi\cdot e^{-\mathrm{i}k\omega x}\end{aligned}
$$
将上式代入傅里叶级数中，得到：
$$
f(x)=\frac{1}{2l}\int_{-l}^lf(\xi)\mathrm{d}\xi+\sum_{k=1}^\infty\left(\frac{1}{2l}\int_{-l}^lf(\xi)e^{-\mathrm{i}k\omega\xi}\mathrm{d}\xi\cdot e^{\mathrm{i}k\omega x}+\frac{1}{2l}\int_{-l}^lf(\xi)e^{\mathrm{i}k\omega\xi}\mathrm{d}\xi\cdot e^{-\mathrm{i}k\omega x}\right)
$$
展开得：
$$
f(x)=\frac{1}{2l}\int_{-l}^lf(\xi)\mathrm{d}\xi+\sum_{k=1}^\infty\frac{1}{2l}\int_{-l}^lf(\xi)e^{-\mathrm{i}k\omega\xi}\mathrm{d}\xi\cdot e^{\mathrm{i}k\omega x}+\sum_{k=-\infty}^1\frac{1}{2l}\int_{-l}^lf(\xi)e^{-\mathrm{i}k\omega\xi}\mathrm{d}\xi\cdot e^{\mathrm{i}k\omega x}
$$
如果记：
$$
c_k=\frac{1}{2l}\int_{-l}^lf(\xi)e^{-\mathrm{i}k\omega\xi}\mathrm{d}\xi
$$
最终得到复数形式的傅里叶级数的展开表达式：
$$
f(x)=\sum^{\infty}_{k=-\infty}c_ke^{\mathrm{i}k\omega x}
$$
在复数形式的傅里叶函数序列为：
$$
e^{\mathrm{i}k\omega x},k=0,\pm1,\pm2,...,\pm n,...
$$
复数形式的傅里叶级数项也是正交的，但是是这里的正交与实变函数的正交性有一定的区别，此处是两共轭函数乘积的积分是$0$：
$$
\int_{-l}^{l}e^{\mathrm{i}k\omega x}\left(e^{\mathrm{i}n\omega x}\right)^{*}\mathrm{d}x=\int_{-l}^{l}e^{\mathrm{i}k\omega x}e^{-\mathrm{i}n\omega x}\mathrm{d}x=\int_{-l}^{l}e^{\mathrm{i}(k-n)\omega x}dx=\frac{1}{\mathrm{i}(k-n)\omega}e^{\mathrm{i}(k-n)\omega x}\big|_{-l}^{l}=0,k\neq n
$$

$$
\frac{1}{2l}\int_{-l}^le^{\mathrm{i}n\omega x}(e^{\mathrm{i}n\omega x})^*\mathrm{d}x=1
$$

那么应用与实变函数相同的方法，可以计算每一项的系数。假设复数形式的傅里叶级数展开式为：
$$
f(x)=\sum_{k=-\infty}^\infty c_ke^{\mathrm{i}k\omega x}
$$
那么其系数为：
$$
c_n=\frac{1}{2l}\int_{-l}^lf(x)e^{-\mathrm{in}\omega x}\mathrm{d}x
$$

### 5、广义傅里叶级数

除了用三角函数展开外，我们还可以用其他形式的级数进行展开。对于分段连续的周期函数，总可以用一组完备、正交的函数序列来逼近，而且这种表示方式是唯一的。
$$
f(x)=\sum_{k=-\infty}^\infty c_kX_k(x)
$$

$$
c_k=\int_{-l}^lf(x)X_k(x)\mathrm{d}x
$$

## 二、傅里叶积分与变换

傅里叶变换的意义之一在于将振幅关于时间的图像，转化为振幅关于频率的图像。。

### 1、实数形式的傅里叶变换

根据上一部分内容可知，对于$T=2l$的周期函数，如果满足狄利克雷条件，可以展开为傅里叶级数：
$$
\begin{aligned}f(x)&=a_{0}+\sum_{k=1}^{\infty}\left(a_{k}\cos\omega_{k}x+b_{k}\sin\omega_{k}x\right)\\a_{0}&=\frac{1}{2l}\int_{-l}^{l}f(x)dx\quad\\a_{k}&=\frac{1}{l}\int_{-l}^{l}f(x)\cos\omega_{k}xdx\\b_{k}&=\frac{1}{l}\int_{-l}^{l}f(x)\sin\omega_{k}xdx\end{aligned}
$$
对于非周期函数，可以将它看成是周期$2l\to\infty$函数的极限，此时：
$$
\lim_{l\to\infty}a_0=\lim_{l\to\infty}\frac{1}{2l}\int_{-l}^{l}f(x)\mathrm{d}x=0
$$
傅里叶级数中余弦部分的每一项为：
$$
\begin{aligned}a_{k}\cos\omega_{k}x&=\frac{1}{l}\int_{-l}^{l}f(\xi)\cos\omega_{k}\xi \mathrm{d}\xi\cdot\cos\omega_{k}x\\&=\frac{1}{\pi}\int_{-l}^{l}f(\xi)\cos\omega_{k}\xi \mathrm{d}\xi\cdot\cos\omega_{k}x\cdot\Delta\omega_{k}\end{aligned}
$$
其中$\Delta \omega_k=\frac{\pi}{l}$，下面定义新函数：
$$
M_l(\omega)=\frac{1}{\pi}\int_{-l}^lf(\xi)\cos\omega\xi \mathrm{d}\xi\cdot\cos\omega x
$$
于是得到：
$$
\sum_{k=1}^\infty a_k\cos\omega_kx=\sum_{k=1}^\infty M_l(\omega_k)\Delta\omega_k
$$
当$l\to\infty$时，$\Delta\omega_k\to0$，根据函数积分的定义，上式应该是$M_{_l}(\omega)$对$\omega$从0到$\circ$的积分：

$$
\lim_{l\to\infty}\sum_{l\to\infty}^{\infty}a_{k}\cos\omega_{k}x=\lim_{l\to\infty}\int_{0}^{\infty}M_{l}(\omega)\mathrm{d}\omega=\frac{1}{\pi}\int_{0}^{\infty}\biggl[\int_{-\infty}^{\infty}f(\xi)\cos\omega\xi \mathrm{d}\xi\biggr]\cos\omega x\mathrm{d}\omega
$$
同理，傅里叶级数中正弦部分和的极限为：
$$
\lim_{l\to\infty}\sum_{k=1}^{\infty}b_{k}\sin\omega_{k}x=\frac{1}{\pi}\int_{0}^{\infty}\left[\int_{-\infty}^{\infty}f(\xi)\sin\omega\xi \mathrm{d}\xi\right]\sin\omega x\mathrm{d}\omega
$$
因此，对于满足一些特定条件（见下方傅里叶积分定理）的非周期函数，如果我们引进：
$$
A(\omega)=\frac{1}{\pi}\int_{-\infty}^{\infty}f(\xi)\cos\omega\xi \mathrm{d}\xi 
$$

$$
B(\omega)=\frac{1}{\pi}\int_{-\infty}^{\infty}f(\xi)\sin\omega\xi \mathrm{d}\xi
$$

上面两式称为**傅里叶变换**，那么：
$$
\begin{aligned}&f(x)=\operatorname*{lim}_{l\to\infty}\left(\sum_{k=1}^{\infty}a_{k}\cos\omega_{k}x+b_{k}\sin\omega_{k}x\right)\\&f(x)=\int_{0}^{\infty}A(\omega)\cos\omega x\mathrm{d}\omega+\int_{0}^{\infty}B(\omega)\sin\omega x\mathrm{d}\omega\end{aligned}
$$
上面的第一个等式称为**傅里叶展开**，第二个积分称为**傅里叶积分**。再做出如下定义：
$$
C(\omega)=\sqrt{A^{2}(\omega)+B^{2}(\omega)},\tan\varphi(\omega)=\frac{B(\omega)}{A(\omega)}
$$
$C(\omega)$称为$f(x)$的**振幅（幅值）谱**，$\varphi(\omega)$称为$f(x)$的**相位谱**。那么傅里叶积分可以表示为：
$$
f(x)=\int_0^\infty C(\omega)\cos[\omega x-\varphi(\omega)]\mathrm{d}\omega
$$
特别地，如果$f(x)$为偶函数，那么可以作出傅里叶余弦变换：
$$
B(\omega)=\frac{1}{\pi}\int_{-\infty}^{\infty}f(\xi)\sin\omega\xi \mathrm{d}\xi=0
$$

$$
A(\omega)=\frac{2}{\pi}\int_{0}^{\infty}f(\xi)\cos\omega\xi \mathrm{d}\xi
$$

从而得出傅里叶余弦积分：
$$
f(x)=\int_0^\infty A(\omega)\cos\omega x\mathrm{d}\omega
$$
同理也存在傅里叶正弦变换和傅里叶正弦积分：
$$
A(\omega)=\frac{1}{\pi}\int_{-\infty}^{\infty}f(\xi)\cos\omega\xi \mathrm{d}\xi=0
$$
$$
B(\omega)=\frac{2}{\pi}\int_{0}^{\infty}f(\xi)\sin\omega\xi \mathrm{d}\xi
$$
$$
f(x)=\int_{0}^{\infty}B(\omega)\sin\omega x \mathrm{d}\omega
$$

> **傅里叶积分定理**：
>
> 如果函数$f(x)$在区间$(-\infty,\infty)$上满足条件：
>
> 1. $f(x)$在任一有限区间上满足狄利克雷条件（只有有限个第一类间断点）
>
> 2. $f(x)$在$(-\infty,\infty)$上绝对可积（即$\int_{-\infty}^{\infty}|f(x)|dx$收敛）
>
> 那么$f(x)$ 可以表示成傅里叶积分的形式，在间断点傅里叶积分的值等于函数左右极限的平均。

### 2、复数形式的傅里叶变换

复数形式傅里叶级数的展开式为：
$$
f(x)=\sum^{\infty}_{k=-\infty}c_ke^{\mathrm{i}k\omega x}
$$

$$
c_k=\frac{1}{2l}\int^l_{-l}f(x)e^{-\mathrm{i}k\omega x}\mathrm{d}x
$$

同实函数形式的傅里叶变换一样，定义一系列点：
$$
\omega_k=\frac{k\pi}l,k=0,\pm1,\pm2,\cdots\quad\omega=\frac{\pi}l
$$
引入一个新函数$F_t(\omega)$：
$$
\begin{aligned}&F_{l}(\omega){=}\frac{1}{2\pi}\int_{-l}^{l}f(x)e^{-\mathrm{i}\omega x}\mathrm{d}x\\&F_{l}(\omega_{k}){=}\frac{1}{2\pi}\int_{-l}^{l}f(x)e^{-\mathrm{i}\omega_{k}x}\mathrm{d}x=\frac{l}{\pi}c_{k}\end{aligned}
$$
如果周期$2l$有限，那么 $\omega_k$有沿正反向和负方向的一对值。对于非周期函数，可以看成$2l\to\infty$的情形
$\omega_k$之间的间距$\Delta\omega=\frac\pi l$ 将趋向于$0$。然后代回复数形式的傅里叶级数：
$$
c_k=\frac{\pi}{l}\frac{1}{2\pi}\int_{-l}^lf(x)e^{-\mathrm{i}\omega_kx}dx=F_l(\omega_k)\Delta\omega_k
$$
其中$\Delta\omega_k=\frac{\pi}{l}$，当$l\to\infty$时，使用定积分的定义，得到：
$$
F(\omega)=\lim_{l\to\infty}F_l(\omega)=\frac{1}{2\pi}\int_{-\infty}^\infty f(x)e^{-\mathrm{i}\omega x}\mathrm{d}x
$$
这个函数便是**复数形式的傅里叶变换**，$F(\omega)$的模长为傅里叶变换的幅值谱，$F(\omega)$的幅角为傅里叶变换的相位谱。

带回到原函数：
$$
f(x)=\sum_{k=-\infty}^\infty c_ke^{\mathrm{i}\omega_kx}=\sum_{k=-\infty}^\infty F_l(\omega_k)e^{\mathrm{i}\omega_kx}\Delta\omega_k
$$
当$2l\to\infty$：
$$
f(x)=\lim_{l\to\infty}\sum_{k=-\infty}^\infty F_l(\omega_k)e^{\mathrm{i}\omega_kx}\Delta\omega_k=\int_{-\infty}^\infty F(\omega)e^{\mathrm{i}\omega x}d\mathrm{d}\omega
$$
这就是复数形式的傅里叶积分。

有时候为了系数均值，也有以下形式的正和逆傅里叶变换：
$$
\begin{cases}F(\omega)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}f(x)e^{-\mathrm{i}\omega x}\mathrm{d}x\\f(x)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}F(\omega)e^{\mathrm{i}\omega x}\mathrm{d}\omega&\end{cases}
$$

### 3、傅里叶变换的基本性质

#### (1) 线性性质

$$
f(x)\to F(\omega)，g(x)\to G(\omega)\Rightarrow f(x)+g(x)\to F(\omega)+G(\omega)
$$

#### (2) 导数性质

$$
f(x)\to F(\omega)\Rightarrow f’(\omega)\to(\mathrm{i}\omega)F(\omega)
$$

> **证明**：
> $$
> f(x)\to F(\omega)\Rightarrow F(\omega)=\frac1{2\pi}\int_{-\infty}^\infty f(x)e^{-\mathrm{i}\omega x}\mathrm{d}x
> $$
>
> $$
> \frac1{2\pi}\int_{-\infty}^\infty f^{\prime}(x)e^{-\mathrm{i}\omega x}\mathrm{d}x=\frac1{2\pi}\int_{-\infty}^\infty e^{-\mathrm{i}\omega x}\mathrm{d}f=\frac1{2\pi}e^{-\mathrm{i}\omega x}f\bigg|_{-\infty}^\infty-(-\mathrm{i}\omega)\int_{-\infty}^\infty fe^{-\mathrm{i}\omega x}\mathrm{d}x
> $$
>
> 根据傅里叶积分定理，有$\lim_{x\to\pm\infty} f(x)=0$，所以：
>
> $$
> \frac1{2\pi}\int_{-\infty}^\infty f^{\prime}(x)e^{-\mathrm{i}\omega x}dx=(\mathrm{i}\omega)\int_{-\infty}^\infty fe^{-\mathrm{i}\omega x}dx=(\mathrm{i}\omega)F(\omega)
> $$

#### (3) 积分性质

$$
f(x)\to F(\omega)\Rightarrow\int^x_af(\xi)d\xi\to\frac{1}{\mathrm{i}\omega}F(\omega)
$$

> [!NOTE]
>
> 这里的积分符号$\int^x$表示的是变上限积分。

> **证明**：
> $$
> f(x)\to F(\omega)\Rightarrow F(\omega)=\frac{1}{2\pi}\int_{-\infty}^{\infty}f(x)e^{-\mathrm{i}\omega x}\mathrm{d}x
> $$
>
> $$
> \begin{aligned}g(x)&=\int^xf(\xi)\mathrm{d}\xi\Rightarrow g^{\prime}(x)=f(x)\\&\Rightarrow\operatorname{i}\omega G(\omega)=F(\omega)\\&\Rightarrow G(\omega)=\frac{1}{\mathrm{i}\omega}F(\omega)\end{aligned}
> $$

#### (4) 相似性性质

相似性性质可以理解为将信号压缩或拉伸处理：
$$
f(x)\to F(\omega)\Rightarrow f(ax)\to\frac{1}{a}F\left(\frac{\omega}{a}\right)
$$

> **证明**：
> $$
> f(x)\to F(\omega)\Rightarrow F(\omega)=\frac{1}{2\pi}\int_{-\infty}^\infty f(x)e^{-\mathrm{i}\omega x}\mathrm{d}x
> $$
>
> $$
> \begin{aligned}\frac{1}{2\pi}\int_{-\infty}^{\infty}f(ax)e^{-\mathrm{i}\omega x}\mathrm{d}x&=\frac{1}{2\pi a}\int_{-\infty}^{\infty}f(ax)e^{-\mathrm{i}\frac{\omega}{a}ax}\mathrm{d}(ax)\\&=\frac{1}{2\pi a}\int_{-\infty}^\infty f(y)e^{-\mathrm{i}\frac{\omega}{a}y}\mathrm{d}y=\frac{1}{a}\frac{1}{2\pi}\int_{-\infty}^\infty f(y)e^{-\mathrm{i}\frac{\omega}{a}y}\mathrm{d}y\end{aligned}
> $$
>
> 代回即可得到结论。

#### (5) 延迟性质

延迟性质表示的是频域幅值不变，但是相位产生变化：
$$
f(x)\to F(\omega)\Rightarrow f(x-x_0)\to e^{-\mathrm{i}\omega x_0}F(\omega)
$$

> **证明**：
> $$
> \begin{aligned}&f(x)\to F(\omega)\Rightarrow F(\omega)=\frac{1}{2\pi}\int_{-\infty}^{\infty}f(x)e^{-\mathrm{i}\omega x}\mathrm{d}x\\&\frac{1}{2\pi}\int_{-\infty}^{\infty}f(x-x_0)e^{-\mathrm{i}\omega x}\mathrm{d}x=\frac{1}{2\pi}\int_{-\infty}^{\infty}f(y)e^{-\mathrm{i}\omega(y+x_0)}\mathrm{d}y=e^{-\mathrm{i}\omega x_0}F(\omega)\end{aligned}
> $$

#### (6) 位移性质

位移性质与延迟性质不同，位移是指频率的整体位移：
$$
f(x)\to F(\omega)\Rightarrow e^{\mathrm{i}\omega_0x}f(x)\to F(\omega-\omega_0)
$$

> **证明**：
> $$
> \begin{aligned}&f(x)\to F(\omega)\Rightarrow F(\omega)=\frac{1}{2\pi}\int_{-\infty}^\infty f(x)e^{-\mathrm{i}\omega x}\mathrm{d}x\\&\frac{1}{2\pi}\int_{-\infty}^\infty e^{i\omega_0x}f(x)e^{-\mathrm{i}\omega x}\mathrm{d}x=\frac{1}{2\pi}\int_{-\infty}^\infty f(x)e^{-\mathrm{i}(\omega-\omega_0)x}\mathrm{d}x=F(\omega-\omega_0)\end{aligned}
> $$

#### (7) 卷积性质

卷积，也称为旋积或褶积，指通过两个函数$f$和$g$生成第三个函数的一种数学运算，其本质是一种特殊的积分变换，表征函数$f$与$g$经过翻转和平移的重叠部分函数值乘积对重叠长度的积分。一部分的内容在[概率论中的卷积公式](https://www.laoguantx.top/posts/convolutionformulainprobabilitytheory/)提到过。

卷积大概就是两种操作：

1. 翻转：系统对“当前时刻”的响应，依赖于“过去时刻的输入”（而非未来），体现了时间因果性。
2. 平移：平移$t$个单位，相当于计算“输入函数与翻转后的系统响应在第$t$个重叠时刻的加权积分”, 覆盖所有时间$t$即可得到完整的系统输出。

$$
f*g=\int_0^tf(\tau)g(t-\tau)\mathrm{d}\tau 
$$

$$
f*g=\int_{-\infty}^\infty f(\tau)g(x-\tau)d\tau
$$

上面两式为卷积计算的形式，使用$*$表示卷积运算。下面是卷积运算的几个性质：

1. 交换律
2. 结合律
3. 分配律

下面证明傅里叶变换的卷积性质：
$$
f\to F(\omega),g\to G(\omega)\Rightarrow f*g\to2\pi F(\omega)G(\omega)
$$

> **证明**：
> $$
> F(\omega)=\frac{1}{2\pi}\int_{-\infty}^\infty f(x)e^{-\mathrm{i}\omega x}\mathrm{d}x\quad G(\omega)=\frac{1}{2\pi}\int_{-\infty}^\infty g(x)e^{-\mathrm{i}\omega x}\mathrm{d}x
> $$
>
> $$
> \begin{aligned}&\int_{-\infty}^{\infty}f(x)*g(x)e^{-\mathrm{i}\omega x}\mathrm{d}x=\int_{-\infty}^{\infty}e^{-\mathrm{i}\omega x}\mathrm{d}x\int_{-\infty}^{\infty}f(\tau)g(x-\tau)\mathrm{d}\tau\\&=\int_{-\infty}^{\infty}f(\tau)d\tau\int_{-\infty}^{\infty}g(x-\tau)e^{-\mathrm{i}\omega x}\mathrm{d}x\xlongequal{y=x-\tau}\int_{-\infty}^{\infty}f(\tau)\mathrm{d}\tau\int_{-\infty}^{\infty}g(y)e^{-\mathrm{i}\omega(y+\tau)}\mathrm{d}y\\&=\int_{-\infty}^{\infty}f(\tau)\mathrm{d}\tau\int_{-\infty}^{\infty}g(y)e^{-\mathrm{i}\omega y}e^{-\mathrm{i}\omega\tau}\mathrm{d}y=\int_{-\infty}^{\infty}f(\tau)e^{-\mathrm{i}\omega\tau}\mathrm{d}\tau\int_{-\infty}^{\infty}g(y)e^{-\mathrm{i}\omega y}\mathrm{d}y\end{aligned}
> $$
>
> $$
> \frac{1}{2\pi}{\int_{-\infty}^{\infty}f(x)^*g(x)e^{-\mathrm{i}\omega x}\mathrm{d}x}=2\pi\frac{1}{2\pi}{\int_{-\infty}^{\infty}f(\tau)e^{-\mathrm{i}\omega\tau}\mathrm{d}\tau}\cdot\frac{1}{2\pi}{\int_{-\infty}^{\infty}g(y)e^{-\mathrm{i}\omega y}\mathrm{d}y}
> $$

### 4、使用傅里叶变换求微分方程

研究下面的偏微分方程：
$$
\begin{aligned}&u_{tt}(x,t)-a^2u_{xx}(x,t)=0,x\in(-\infty,\infty),t>0\\&u(x,0)=\varphi(x),u_t(x,0)=\psi(x)\end{aligned}
$$
对于$u(x,t)$关于$x$进行傅里叶变换：
$$
u(x,t)\to U(\omega,t),u_{xx}(x,t)\to(\mathrm{i}\omega)^2U(\omega,t)
$$

$$
u(x,0)\to U(\omega,0),u_t(x,0)\to U_t(\omega,0)
$$

$$
\varphi(x)\to\Phi(\omega),\psi(x)\to\Psi(\omega)
$$

变换后代回到原方程
$$
U_{tt}(\omega,t)+a^2\omega^2U(\omega,t)=0,t>0
$$

$$
U(\omega,0)=\Phi(\omega),U_t(\omega,0)=\Psi(\omega)
$$

于是，原偏微分方程变成了一个二阶常系数常微分方程，使用[待定系数法](https://www.laoguantx.top/posts/odesolutions4)求解得到通解为：
$$
U(\omega,t)=C_1e^{\mathrm{i}a\omega t}+C_2e^{-\mathrm{i}a\omega t}
$$
然后利用关系解出一个特解，并代回：
$$
\begin{aligned}&C_1+C_2=\Phi(\omega)\\&C_1\mathrm{i}a\omega-C_2\mathrm{i}a\omega=\Psi(\omega)\end{aligned}
$$

$$
U(\omega,t)=\frac{1}{2}\left(\Phi(\omega)+\frac{\Psi(\omega)}{\mathrm{i}a\omega}\right)e^{\mathrm{i}a\omega t}+\frac{1}{2}\left(\Phi(\omega)-\frac{\Psi(\omega)}{\mathrm{i}a\omega}\right)e^{-\mathrm{i}a\omega t}
$$

然后根据傅里叶变换的性质，求傅里叶逆变换：
$$
f(x)\to F(\omega)\Rightarrow f(x-x_0)\to e^{-\mathrm{i}\omega x_0}F(\omega)
$$

$$
f(x)\to F(\omega)\Rightarrow\int^xf(\xi)\mathrm{d}\xi\to\frac{1}{\mathrm{i}\omega}F(\omega)
$$

带回得到：
$$
\varphi(x+at)\to\Phi(\omega)e^{\mathrm{i}a\omega t},\varphi(x-at)\to\Phi(\omega)e^{-\mathrm{i}a\omega t}
$$

$$
\frac1{2a}\int_{-\infty}^{x+at}\psi(\xi)\mathrm{d}\xi\to\frac12\frac{\Psi(\omega)}{\mathrm{i}a\omega}e^{\mathrm{i}a\omega t},\frac1{2a}\int_{-\infty}^{x-at}\psi(\xi)d\xi \mathrm{d}x\to\frac12\frac{\Psi(\omega)}{\mathrm{i}a\omega}e^{-\mathrm{i}a\omega t}
$$

带回到方程的解中，得：
$$
u(x,t)=\frac{1}{2}[\varphi(x+at)+\varphi(x-at)]+\frac{1}{2a}\int_{x-at}^{x+at}\psi(\xi)\mathrm{d}\xi
$$

### 5、多重傅里叶积分

对于多维无界空间上的非周期函数，可以依次对每一维坐标进行相应的傅里叶变换和傅里叶积分，最终得到多维空间中的傅里叶变换对。对于三维空间，取坐标为$(x,y,z)$，非周期函数为$f(x,y,z)$ 。先对$f(x)=-\frac{1}{2}y,z)$ 关于$x$进行傅里叶变换，得到$F_1(k_1,y,z)$，然后再对$F_1(k_1,y,z)$ 关于$y$进行傅里叶变换，得到$F_2(k_1,k_2,z)$，最后对$F_2(k_1,k_2,z)$ 关于$z$进行傅里叶变换，得到$F_3( k_1, k_2, k_3)$。
$$
\begin{aligned}F_{1}\left(k_{1},y,z\right)&=\frac{1}{2\pi}\int_{-\infty}^{\infty}f(x,y,z)\mathrm{e}^{-(kx)}\mathrm{d}x\\F_{2}\left(k_{1},k_{2},z\right)&=\frac{1}{2\pi}\int_{-\infty}^{\infty}F_{1}\left(k_{1},y,z\right)\mathrm{e}^{-(kx)}\mathrm{d}y\\&=\left(\frac{1}{2\pi}\right)^{2}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}f(x,y,z)\mathrm{e}^{-(kx)}\mathrm{e}^{-(kx)}\mathrm{d}x\mathrm{d}y\\F_{3}\left(k_{1},k_{2},k_{3}\right)&=\frac{1}{2\pi}\int_{-\infty}^{\infty}F_{2}\left(k_{1},k_{2},z\right)\mathrm{e}^{-(kx)}\mathrm{d}z\\&=\left(\frac{1}{2\pi}\right)^{3}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}f(x,y,z)\mathrm{e}^{-(kx)}\mathrm{e}^{-(kx)}\mathrm{e}^{-(kx)}\mathrm{d}x\mathrm{d}y\mathrm{d}z\end{aligned}
$$

所以，三维空间的傅里叶变换为：

$$
F\left(k_1,k_2,k_3\right)=\left(\frac{1}{2\pi}\right)^3\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}f(x,y,z)\mathrm{e}^{-\mathrm{i}(k_1x+k_2y+k_3z)}\mathrm{d}x\mathrm{d}y\mathrm{d}z
$$
相应的傅里叶积分为：

$$
f(x,y,z)=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}F(k_{1},k_{2},k_{3})\mathrm{e}^{\mathrm{i}(k_{1}x+k_{2}y+k_{3}z)}\mathrm{d}k_{1}\mathrm{d}k_{2}\mathrm{d}k_{3}
$$

如果引入位置空间的矢量$\mathbf{r}$及频率域空间的矢量$\mathbf{k}$，$\mathbf{r}=i_{1}x+i_{2}y+i_{3}z$，$ \mathbf{k}=i_{1}k_{1}+i_{2}k_{2}+i_{3}k_{3}$，可将三重傅里叶积分及变换写成较简洁的形式
$$
F(\mathbf{k})=\left(\frac{1}{2\pi}\right)^{3}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}f(\mathbf{r})\left[\mathrm{e}^{\mathrm{i}\mathbf{k}\cdot\mathbf{r}}\right]^{*}\mathrm{d}\mathbf{r}
$$
$$
f(\mathbf{r})=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}F(\mathbf{k})\mathrm{e}^{\mathrm{i}\mathbf{k}\cdot\mathbf{r}}\mathrm{d}\mathbf{k}
$$

这里：$\mathbf{k}\cdot\mathbf{r}=k_{1}x+k_{2}y+k_{3}z$，$\mathrm{d}\mathbf{r}=\mathrm{d}x\mathrm{d}y\mathrm{d}z$，$\mathrm{d}\mathbf{k}=\mathrm{d}k_{1}\mathrm{d}k_{2}dk_{3}$

## 三、$\delta$函数

### 1、$\delta$函数的定义

$\delta$函数用于数学上描述点物理量，如点质量、集中力、点电荷、脉冲信号等，也可以用来求解微分方程。

下面考虑一根线段，若质量$m$均匀分布在长为$l$的线段$[-\frac l2,\frac l2]$上，其线段的线密度$\rho_l(x)$可以表示为：
$$
\rho_l(x)=\begin{cases}0&(\mid x\mid>\frac l2),\\\dfrac ml&(\mid x\mid\leqslant \frac l2),&&\end{cases}\rho_l(x)=\frac{m}{l}\mathrm{rect}\left(\frac{x}{l}\right)
$$
其中$\mathrm{rect}(x)$为矩形函数，通常可以定义为：
$$
\mathrm{rect}(x) = \begin{cases}
1 & (|x| \leq \frac{1}{2}) \\
0 & (|x| > \frac{1}{2})
\end{cases}
$$
当上述线段长度$l\to0$，我们将得到位于坐标原点质量为$m$的一个质点，而线密度函数就成为质点的线密度函数，将它记为$\rho(x)$，则：
$$
\lim_{l\to0}\int_{-\infty}^\infty\rho_l(x)\mathrm{d}x=\int_{-\infty}^\infty\rho(x)\mathrm{d}x=m
$$

如果根据前面线密度定义直接取极限，则有

$$
\rho_l(x)=\begin{cases}0&(\mid x\mid>l\mid2)\\m\mid l&(\mid x\mid\leqslant l\mid2)\end{cases}\qquad\rho_l(x)=\frac ml\operatorname{rect}\Big(\frac xl\Big)
$$

$$
\rho(x)=\lim_{l\to0}\rho_l(x)=\lim_{l\to0}\frac ml\text{rect}\Big(\frac xl\Big)=\begin{cases}0&(x\neq0)\\\infty&(x=0)\end{cases}
$$

由此可以看出质点线密度分布函数的直观图像，它在$x=0$处为无穷大，而在$x\neq0$处则处处为零。其在整个范围内的积分为$m$。对于质点、点电荷、瞬时力这类集中于空间某一点，或者脉冲等集中于某个时间点的物理量，引入$\delta$函数以描述其一种极限的分布规律：

$$
\delta(x)=\begin{cases}0&(x\neq0)\\\infty&(x=0)\end{cases}\int_a^b\delta(x)\mathrm{d}x=\begin{cases}0&\forall a,\forall a,ab>0\\1&(a<0<b).\end{cases}\quad\int_{-\infty}^\infty\delta(x)\mathrm{d}x=1
$$
有了$\delta$函数，位于$x_{0}$而质量为$m$的质点的线密度分布可以写为$m\delta(x-x_{0})$；位于$x_{0}$而电量为$q$的点电荷的线密度为$q\delta(x-x_{0})$；作用于时刻$t_{0}$冲量为$K$的瞬时力可以表述为$K\delta(t-t_{0})$。

$\delta$函数是一种广义函数，可以将广义函数看成是某些普通函数数列的极限，而这极限应该在积分意义下进行理解，函数的特点是满足：
$$
\delta(x)=\begin{cases}0&(x\neq0)\\\infty&(x=0)&&\end{cases}\int_a^b\delta(x)\mathrm{d}x=\begin{cases}0&ab>0\\1&(a<0<b)&&\end{cases}
$$

### 2、$\delta$函数的一些性质

#### (1) $\delta$函数是阶跃函数的导数

对于单位阶跃函数：
$$
H(x)=\begin{cases}0,x<0\\\frac{1}{2},x=0\\1,x>0&&\end{cases}
$$
其导数满足除零以外的点都为$0$，且在$x=0$处为无穷大，满足$\delta$函数的定义，故：
$$
\delta(x)=\frac{\mathrm{d}H(x)}{\mathrm{d}x}
$$

#### (2) 挑选性

对于任何一个定义在$(-\infty,\infty)$上的连续函数$f(\tau)$，存在：

$$
f(t_0)=\int_{-\infty}^\infty f(\tau)\delta(\tau-t_0)\mathrm{d}\tau 
$$

这称为$\delta$函数的挑选性，因为它将函数$f(\tau)$在点$\tau=t_0$的值$f(t_0)$挑选出来。

#### (3) $\delta$函数的傅里叶变换

$$
\frac{1}{2\pi}\int_{-\infty}^\infty\delta(x)e^{-\mathrm{i}\omega x}\mathrm{d}x=\frac{1}{2\pi}
$$

$$
\delta(x)\to\frac{1}{2\pi}
$$

$$
\delta(x-x_0)\to\frac{1}{2\pi}e^{-\mathrm{i}\omega x_0}
$$
