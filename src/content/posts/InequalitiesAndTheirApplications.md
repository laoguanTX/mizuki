---
title: 不等式及其应用
published: 2024-09-08
category: ["数学", "大中衔接"]
tags: ["大中衔接"]
alias: "inequalitiesandtheirapplications"
---
### 一、均值不等式

对于$n$个正数$a_1,a_2,\cdots,a_n$，有：

1. $A_n= \frac {a_1+ a_2+ \cdots + a_n}n$ 称为算术平均值；

2. $G_n=\sqrt[n]{a_1a_2\cdots a_n}$称为几何平均值；

3. $H_n= \frac n{\frac 1{a_1}+ \frac 1{a_2}+ \cdots + \frac 1{a_n}}$称为调和平均值。

均值不等式即为：
$$H_{n}\leq G_{n}\leq A_{n}$$
当且仅当 $a_1=a_2=\cdots=a_n$时，等号成立。

特别地，当$n=2$时，对正数有：
$$\frac2{\frac1a+\frac1b}\leq\sqrt{ab}\leq\frac{a+b}2$$
当且仅当$a=b$时，等号成立。

---

**例1** 设正数$a,b,c$满足$a+b+c=1$,证明：
$$(1-a)(1-b)(1-c)\geq8abc$$

**证明** 不等式$(1-a)(1-b)(1-c)≥8abc\Rightarrow 1-(a+b+c)+ab+bc+ac-abc≥8abc$
$$\Leftrightarrow ab+bc+ac\geq9abc\Leftrightarrow\frac1a+\frac1b+\frac1c\geq9\Leftrightarrow\frac3{\frac1a+\frac1b+\frac1c}\leq\frac13$$
而由均值不等式有$\frac3{\frac1a+\frac1b+\frac1c}\leq\frac{a+b+c}3=\frac13$.

---

### 二、柯西不等式

对于任意 2$n$个实数 $a_1,a_2,\cdots,a_n;b_1,b_2,\cdots,b_n$,有$(a_1b_1+a_2b_2+\cdots+a_nb_n)^2\leq(a_1^2+a_2^2+\cdots+a_n^2)(b_1^2+b_2^2+\cdots+b_n^2)$，当且仅当存在常数$c$使$a_1=cb_1,a_2=cb_2,\cdots,a_n=cb_n$时，等号成立。

证明：（判别式法）因为对任意$t\in R$,有 $(a_1-tb_1)^2+(a_2-tb_2)^2+\cdots+(a_n-tb_n)^2\geq0$,即$( b_1^2+ b_2^2+ \cdots + b_n^2) t^2- 2( a_1b_1+ a_2b_2+ \cdots + a_nb_n) t+ ( a_1^2+ a_2^2+ \cdots + a_n^2) \geq 0\cdots ( * )$
所以$\Delta = 4( a_1b_1+ a_2b_2+ \cdots + a_nb_n) ^2- 4( a_1^2+ a_2^2+ \cdots + a_n^2) ( b_1^2+ b_2^2+ \cdots + b_n^2) \leq 0.$ 即 $( a_1b_1+ a_2b_2+ \cdots + a_nb_n) ^2\leq ( a_1^2+ a_2^2+ \cdots + a_n^2) ( b_1^2+ b_2^2+ \cdots + b_n^2)$
当且仅当$a_1-tb_1=0,a_2-tb_2=0,\cdots,a_n-tb_n=0$,也即存在常数$t=c$使$a_1=cb_1,a_2=cb_2,\cdots,a_n=cb_n$时，等号成立。

注：
1. 也可在$(*)$式中取$t=\frac {a_1b_1+a_2b_2+\cdots+a_nb_n}{b_1^2+b_2^2+\cdots+b_n^2}$得到柯西不等式。

2. 高中时期学习过向量法证明柯西不等式。

---

**例3** 已知正数 $a,b,c$ 满足$a+b+c=1$, 证明$a^3+b^3+c^3\geq\frac{a^2+b^2+c^2}3.$

**证明** 利用柯西不等式有:
$$(a^2+b^2+c^2)^2=(a^{\frac32}a^{\frac12}+b^{\frac32}b^{\frac12}+c^{\frac32}c^{\frac12})^2\leq(a^3+b^3+c^3)(a+b+c)=a^3+b^3+c^3$$
又因为$a^2+b^2+c^2=\frac{a^2+b^2}2+\frac{b^2+c^2}2+\frac{a^2+c^2}2\geq ab+bc+ac$
在此不等式两边同乘以$2$，再加上$a^2+b^2+c^2$ 得:
$$3\left(a^{2}+b^{2}+c^{2}\right)\geq a^{2}+b^{2}+c^{2}+2ab+2bc+2ac=\left(a+b+c\right)^{2}=1$$
所以：
$$( a^2+ b^2+ c^2) ^2\leq ( a^3+ b^3+ c^3) \cdot 1\leq ( a^3+ b^3+ c^3) \cdot 3( a^2+ b^2+ c^2)$$
即有：
$$a^3+b^3+c^3\geq\frac{a^2+b^2+c^2}3$$

---

**例4** 设$P$为A$ABC$内的一点，$x,y,z$为$P$点到三边$a,b,c$的距离，$R$是$\Delta ABC$ 外接圆的半径。证明$\sqrt x+\sqrt y+\sqrt z\leq\frac1{\sqrt{2R}}\sqrt{a^2+b^2+c^2}$.

**证明** 由柯西不等式有：
$$\sqrt{x}+\sqrt{y}+\sqrt{z}=\sqrt{ax}\cdot\sqrt{\frac1a}+\sqrt{by}\cdot\sqrt{\frac1b}+\sqrt{cz}\cdot\sqrt{\frac1c}\leq\sqrt{ax+by+cz}\cdot\sqrt{\frac1a+\frac1b+\frac1c}$$
记$S$为$\Lambda ABC$的面积，根据正弦定理有:
$$ax+by+cz=2S=2\cdot\frac{1}{2}ab\sin C=2\cdot\frac12ab\cdot \frac{c}{2R}=2\cdot\frac{abc}{4R}=\frac{abc}{2R}$$
所以：
$$\sqrt{x}+\sqrt{y}+\sqrt{z}\leq\sqrt{\frac{abc}{2R}}\cdot\sqrt{\frac{ab+bc+ca}{abc}}\leq\frac{1}{\sqrt{2R}}\sqrt{ab+bc+ca}\leq\frac{1}{\sqrt{2R}}\sqrt{a^{2}+b^{2}+c^{2}}$$
由柯西不等式知：$ab+bc+ca\leq a^2+b^2+c^2$

---

### 三、伯努利不等式

设$n\geq2$，实数$x_1,x_2,\cdots,x_n$都大于，且符号相同，则$(1+x_1)(1+x_2)\cdots(1+x_m)>1+x_1+x_2+\cdots+x_n$

特别地：

1. $\forall x> - 1, x\neq 0$有$( 1+ x) ^n> 1+ nx$

2. 设$b>a>0$，对任一正整数$n$，有$a^{n+1}> b^n\left [ ( n+ 1) a- nb\right ]$； $b^{n+ 1}> a^n\left [ ( n+ 1) b- na\right ]$

以上伯努利不等式可以推广指数为实数的形式。

---

> **例1** 设 $x_n=\left(1+\frac1n\right)\cdot\left(1+\frac2n\right)\cdot\left(1+\frac3n\right)\cdots\left(1+\frac nn\right)$，证明：
> $$\lim_{n\to\infty} x_n=+\infty$$
>
> **证明** 由贝努利不等式有：
> $$x_{n}=\left(1+\frac{1}{n}\right)\cdot\left(1+\frac{2}{n}\right)\cdot\left(1+\frac{3}{n}\right)\cdots\left(1+\frac{n}{n}\right)>1+\left(\frac{1}{n}+\frac{2}{n}+\cdots+\frac{n}{n}\right)=1+\frac{n+1}{2}$$
> 所以：
> $$\lim_{n\to+\infty} x_{n}=+\infty$$

---

> **例2** 证明$\left\{\left(1+\frac1n\right)^n\right\}$为单调递增数列，$\left\{\left(1+\frac1n\right)^{n+1}\right\}$为单调递减数列。
>
> **证明** 令$b=1+\frac1n>a=1+\frac1{n+1}>0$，因为$(n+1)a-nb=(n+1)+1-n-1=1$，所以由$a^{n+1}>b^n\left[(n+1)a-nb\right]$得：
> $$\left(1+\frac1{n+1}\right)^{n+1}>\left(1+\frac1n\right)^n$$
> 即$\left\{\left(1+\frac1n\right)^n\right\}$为单调递增数列。
> 又因为$(n+1)b-na=1+\frac1n+\frac1{n+1}>1+\frac{n+2}{\left(n+1\right)^2}+\frac1{n+1}=\left(1+\frac1{n+1}\right)^2$，所以由$b^n+1>a^n\left[(n+1)b-na\right]$得：$$\left(1+\frac1n\right)^{n+1}>\left(1+\frac1{n+1}\right)^n\left(1+\frac1{n+1}\right)^2=\left(1+\frac1{n+1}\right)^{n+2}$$
> 即$\left\{\left(1+\frac1n\right)^{n+1}\right\}$为单调递减数列。

---

### 四、排序不等式

设有两组有序数组：$a_1\leq a_2\leq \cdots \leq a_n;$ $b_1\leq b_2\leq \cdots \leq b_n$，则：
$$a_{1}b_{1}+a_{2}b_{2}+\cdots+a_{n}b_{n}\geq a_{1}b_{i_{1}}+a_{2}b_{i_{2}}+\cdots+a_{n}b_{i_{n}}\geq a_{1}b_{n}+a_{2}b_{n-1}+\cdots+a_{n}b_{1}$$
其中$i_1,i_2,\cdots,i_n$为 l$,2,\cdots,n$的任一排列。当且仅当$a_1=a_2=\cdots=a_n$或$b_1=b_2=\cdots=b_n$时等号成立.以上不等式称为排序不等式。

---

> **例3** 设$a_1,a_2,\cdots,a_n$ 为互不相等的正整数，证明 $\frac{a_1}{1^2}+\frac{a_2}{2^2}+\cdots+\frac{a_n}{n^2}\geq1+\frac12+\frac13+\cdots+\frac1n$
>
> **证明** 将$a_1,a_2,\cdots,a_n$从小到大排序，设为$a_{i_1}\leq a_{i_2} \leq \cdots \leq a_{i_n}$ 其中 $i_1,i_2,\cdots,i_n$为 1,2,⋯,n 的一个排列，因为$a_1,a_2,\cdots,a_n$互不相等，所以有：
> $$a_{i_k}\:\geq\:k\:(\:k\:=\:1,\:2,\:3,\cdots,n\:)$$
> 因此对两组数$a_1,a_2,\cdots,a_n$和$\frac1{1^2},\frac1{2^2},\cdots,\frac1{n^2}$，由排序不等式有：
> $$\frac{a_1}{1^2}+\frac{a_2}{2^2}+\cdots+\frac{a_n}{n^2}\geq\frac{a_{i_1}}{1^2}+\frac{a_{i_2}}{2^2}+\cdots+\frac{a_{i_n}}{n^2}\geq\frac1{1^2}+\frac2{2^2}+\cdots+\frac n{n^2}=1+\frac12+\cdots+\frac1n$$

---

> **例4** 用排序不等式证明均值不等式$\sqrt[n]a_1a_2\cdots a_n\leq\frac{a_1+a_2+\cdots+a_n}n$
>
> **证明** 记$G=\sqrt[n]{a_1a_2\cdots a_n}$，令：
> $$x_1=\frac{a_1}{G},x_2=\frac{a_1a_2}{G^2},\cdots,x_n=\frac{a_1a_2\cdots a_n}{G^n}\quad;\quad y_1=\frac{1}{x_1},y_2=\frac{1}{x_2},\cdots,y_n=\frac{1}{x_n}$$
> 因为$x_i,y_i\left(i=1,2,3,\cdots,n\right)$互为倒数，所以$x_1y_1+x_2y_2+\cdots+x_ny_n$必为两组数$x_1,x_2,\cdots,x_n$和$y_1,y_2,\cdots,y_n$的逆序和，所以有：
> $$n=x_1y_1+x_2y_2+\cdots+x_ny_n\leq x_1y_n+x_2y_1+x_3y_2+\cdots+x_ny_{n-1}=\frac{a_1}{G}+\frac{a_2}{G}+\cdots+\frac{a_n}{G}$$
> 即$\sqrt[n]{a_1a_2\cdots a_n}\leq\frac{a_1+a_2+\cdots+a_n}{a_n}$
> 当且仅当$x_1=x_2=\cdots=x_n$，也就是$a_1=a_2=\cdots=a_n$时，等号成立。

---

### 五、凹凸函数与琴生不等式

#### 1、凹凸函数

此处对凹凸函数的定义为：设函数$f(x)$在$ (a,b)$上连续，

1. 若$\forall x_1,x_2\in(a,b)$，有$f\left(\frac{x_1+x_2}2\right) \leq \frac{f\left(x_{1}\right)+f\left(x_{2}\right)}{2}$，则称$f(x)$为$\left(a,b\right)$上的凸函数（开口向下）；
2. 若$\forall x_1,x_2\in(a,b)$，有$f\left(\frac{x_1+ x_2}2\right) \geq \frac {f( x_1) + f( x_2) }2$，则称$f(x)$为$(a,b)$上的凹函数（开口向上）。

#### 2、琴生不等式

1. 若函数$f(x)$ 在$(a,b)$上为凸函数，则$\forall x_1,x_2,\cdots,x_n\in(a,b)$，有：
   $$f\left(\frac{x_1+x_2+\cdots+x_n}n\right)\leq\frac{f(x_1)+f(x_2)+\cdots+f(x_n)}n$$
   当且仅当$x_1=x_2=\cdots=x_n$时等号成立。

2. 若函数$f(x)$在$(a,b)$上为凹函数，则$\forall x_1,x_2,\cdots,x_n\in(a,b)$，有
   $$f\left(\frac{x_{1}+x_{2}+\cdots+x_{n}}{n}\right)\geq\frac{f(x_{1})+f(x_{2})+\cdots+f(x_{n})}{n}$$
   当且仅当$x_1=x_2=\cdots=x_n$时等号成立。

---

> **例5** 在锐角三角形$\Delta ABC$中有$\sin A+\sin B+\sin C\leq\frac{3\sqrt{3}}2$
>
> **证明** 因为对任意的$x_1,x_2\in\left(0,\frac\pi2\right)$有：
> $$\frac{\sin x_1+\sin x_2}2=\sin\frac{x_1+x_2}2\cos\frac{x_1-x_2}2\leq\sin\frac{x_1+x_2}2$$
> 所以$\sin x$为凹函数，于是由琴生不等式有：
> $$\frac{\sin A+\sin B+\sin C}3\leq\sin\frac{A+B+C}3$$
> 即$\sin A+\sin B+\sin C\leq3\sin\frac\pi3=\frac{3\sqrt{3}}2$

---

**例6** 利用琴生不等式证明均值不等式：$\sqrt[n]{a_1a_2\cdots a_n}\leq\frac{a_1+a_2+\cdots+a_n}n$

> **证明** 取函数$f( x) = \ln x$, $x> 0$，则对于任意的正数$a_1,a_2$，由：
> $$\left(\sqrt{a_1}-\sqrt{a_2}\right)^2\geq0\Rightarrow a_1+a_2\geq2\sqrt{a_1a_2}$$
> 可得：
> $$f\left(\frac{a_1+a_2}{2}\right)=\ln\left(\frac{a_1+a_2}{2}\right)\geq\ln\frac{2\sqrt{a_1a_2}}{2}=\frac{1}{2}\left(\ln a_1+\ln a_2\right)=\frac{f(a_1)+f(a_2)}{2}$$
> 因此$f(x)=\ln x$为凹函数。于是对任意的正数$a_1,a_2,\cdots,a_n$，有：
> $$\ln\left(\frac{a_1+a_2+\cdots+a_n}n\right)\geq\frac{\ln a_1+\ln a_2+\cdots+\ln a_n}n=\ln\sqrt[n]{a_1a_2\cdots a_n}$$
> 即$\frac {a_1+ a_2+ \cdots + a_n}n\geq \sqrt [ n] {a_1a_2\cdots a_n}$，从而得证。

---

#### 3、琴生不等式的加权形式

1. 若函数$f(x)$在$(a,b)$上为凸函数，正数$\lambda_1,\lambda_2,\cdots,\lambda_n$满足$\lambda_1+\lambda_2+\cdots+\lambda_n=1$则$\forall x_1,x_2,\cdots,x_n\in(a,b)$，有：
   $$f(\lambda_1x_1+\lambda_2x_2+\cdots+\lambda_nx_n)\leq\lambda_1f(x_1)+\lambda_2f(x_2)+\cdots+\lambda_nf(x_n)$$
   当且仅当$x_1=x_2=\cdots=x_n$时，等号成立。

2. 若函数$f(x)$在$(a,b)$上为凹函数，正数$\lambda_1,\lambda_2,\cdots,\lambda_n$满足$\lambda_1+\lambda_2+\cdots+\lambda_n=1$，则$\forall x_1,x_2,\cdots,x_n\in(a,b)$，有：
   $$f(\lambda_{1}x_{1}+\lambda_{2}x_{2}+\cdots+\lambda_{n}x_{n})\geq\lambda_{1}f(x_{1})+\lambda_{2}f(x_{2})+\cdots+\lambda_{n}f(x_{n})$$
   当且仅当$x_1=x_2=\cdots=x_n$时，等号成立。