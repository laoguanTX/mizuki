---
title: 高等数学部分公式与定理
published: 2024-10-30
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "highermathematicsformulasandtheorems"
---
### 一、重要的函数极限

1. $\lim_{x\to0}\frac{\sin\:x}{x}=1$

2. $\lim_{x\to0}(1+x)^{\frac{1}{x}}=e$

3.  $\lim _{x\to 0}\frac {\ln ( 1+ x) }x= \operatorname* { lim} _{x\to 0}\frac 1x\ln ( 1+ x) = \operatorname* { lim} _{x\to 0}\ln ( 1+ x) ^{\frac 1x}= \ln \lim _{x\to 0}( 1+ x) ^{\frac 1x}= \ln e= 1$

4. $\lim_{x\to0}\frac{e^{x}-1}{x}\frac{\text{设}e^{x}-1=t}{\longrightarrow}\lim_{t\to0}\frac{t}{\ln(1+t)}=\lim_{t\to0}\frac{1}{\frac{\ln(1+t)}{t}}=1$
5. $\lim _{x\to 0}\frac {a^{x}- 1}x= \lim _{x\to 0}\frac {e^{x\ln a}- 1}{x\ln a}\cdot \ln a= \ln a$（$a> 0, a\neq 1$为常数）

6. $\operatorname*{lim}_{x\to0}\frac{(1+x)^{b}-1}{x}=\operatorname*{lim}_{x\to0}\frac{e^{b\ln(1+x)}-1}{b\ln(1+x)}\cdot\frac{\ln(1+x)}{x}\cdot b=b$（$b$为常数，$b\neq0$）

7. $\operatorname* { lim} _{x\to 0}$ $\frac {\arcsin x}x\xlongequal{\text{设}\arcsin x= t}\lim _{t\to 0}\frac t{\sin t}= \lim _{t\to 0}\frac 1{\frac{\sin t}{t}}= 1$

8. $\lim _{x\to 0}\frac {\arctan x}x\xlongequal{\text{设}\arctan x= t}\lim _{t\to 0}\frac t{\tan t}= \lim _{t\to 0}\frac t{\sin t}\cdot \cos t= 1\times 1= 1$

9. $\lim _{x\to + \infty }\frac {\ln x}{x^{k}}= 0$（$ k> 0$常数）
9. $\lim _{x\to + \infty }\frac {x^{k}}{a^{x}}= 0$（$a> 1$常数，$k$为常数）

11. 若 $\lim _{x\to x_{0}}u( x) = a> 0, \lim _{x\to x_{0}}\nu ( x) = b$（$a, b$均为常数）则：

​	$$\lim\limits_{x\to x_0}u(x)^{V(x)}=\lim\limits_{x\to x_0}e^{V(x)\ln u(x)}=e^{\lim\limits_{x\to x_0}V(x)\ln u(x)}=e^{\lim\limits_{x\to x_0}V(x)\cdot\lim\limits_{x\to x_0}\ln u(x)}=e^{b\ln a}=e^{\ln a^b}=a^b$$

​	即：$$\lim_{x\to x_0}u(x)^{v(x)}=a^b\text{。}$$
注：不仅要记住这些公式的标准形式，更要明白一般形式。即上面公式中的$x$可换成$f(x)$，只要$x\to x_0$时,$f(x)\to0$，结论依然成立。利用上述重要极限，我们可以得到下列对应的重要的等价无穷小量，在解题中经常要利用他们。

### 二、重要的数列极限

1. $\operatorname* { lim} _{n\to \infty }\frac 1{n^{k}}= 0$（$k>0$常数）

2. $\lim_{n\to \infty }q^{n}= 0$（$|q| < 1$常数）

3. $\operatorname*{lim}_{n\to\infty}\sqrt[n]{a}=1$（$a>0$常数）

4. $\operatorname*{lim} _{n\to \infty }\sqrt [ n] {n}= 1$

5. $\operatorname*{lim} _{n\to \infty }( 1+ \frac 1n) ^{n}= e$

6. $\operatorname*{lim}_{n\to\infty}\frac{\ln n}{n^{k}}=0$（$k>0$常数）

7. $\lim_{n\to\infty}\frac{n^{k}}{a^{n}}=0$（$a>1,a,k$为常数）

### 三、导数公式
$$\begin{aligned}&(\tan x)^{\prime}=\sec^{2}x&&(\arcsin\:x)^{\prime}=\frac{1}{\sqrt{1-x^{2}}}\\&(\cot x)^{\prime}=-\csc^{2}x&&(\arccos x)^{\prime}=-\frac{1}{\sqrt{1-x^{2}}}\\&(\sec x)^{\prime}=\sec x\cdot\cot x&&(\arctan x)^{\prime}=\frac{1}{1+x^{2}}\\&(a^{x})^{\prime}=a^{x}\ln a&&(\arctan x)^{\prime}=\frac{1}{1+x^{2}}\\&(\log_{a}x)^{\prime}=\frac{1}{x\ln a}&&(arc\cot x)^{\prime}=-\frac{1}{1+x^{2}}\end{aligned}$$

注：由三解函数的导数有时是“$+$”号，有时是“$-$”号，用下面的方法记，带有“正”字的三角函数或反三角函数导数前面取“$+$”号，带有“余”字的三角函数与反三角函数导数前面取“$-$”号。

### 四、反函数求导法则

设 y=f(x)为函数 $x=\varphi(y)$的反函数，若 $\varphi(y)$在点$y_0$的某邻域内连续，严格单调且$\varphi^{\prime}(y_{0})\neq0$，则$f(x)$在点$x_0(x_0=\varphi(y_0))$可导，且$f^\prime(x_0)=\frac1{\varphi^{\prime}(y_0)}$或$\frac {\rm{d}y}{\rm{d}x}|_{x=x_0}=\frac1{\frac{\rm{d}x}{\rm{d}y}|y=y_0}$

推论：设$y=f(x)$为函数$x=\varphi(y)$的反函数，若 $\varphi(y)$严格单调且 $\varphi^{\prime}(y)\neq0$,则$f^{\prime}(x)$存在且

$$f'\big(x\big)=\frac{1}{\varphi'\big(y\big)}\text{或}\frac{\rm{d}y}{\rm{d}x}=\frac{1}{\frac{\rm{d}x}{\rm{d}y}}$$

### 五、部分基本初等函数的高阶导数公式

1. $( \sin$ $x) ^{( n) }= \sin (x+ n\cdot \frac \pi 2)$

2. $( \cos x) ^{( n) }= \cos ( x+ n\cdot \frac \pi 2)$

3. $( a^{x}) ^{( n) }= a^{x}( \ln a) ^{( n) }$（$a> 0, a\neq 1$常数）

4. $( e^{x}) ^{( n) }= e^{x}$

5. $(x^{\alpha})^{(n)}=\alpha(\alpha-1)\cdots(\alpha-n+1)x^{\alpha-n}$（$\alpha$为常数），$( x^n) ^{( n)} = n!$，$( x^n) ^{( m) }= 0( m> n)$

6. $(\ln x)^{(n)}=[(\ln x)^{\prime}]^{(n-1)}=(x^{-1})^{(n-1)}=(-1)\cdots[-1-(n-1)+1]x^{-1-(n-1)}=(-1)^{n-1}(n-1)!x^{-n}$

7. $\left ( \sin \:kx\right ) ^{( n) }= k^{n}\sin ($ $kx+ n\frac \lambda 2)$

8. $\left [ \ln ( 1+ x) \right ] ^{( n) }= ( - 1) ^{( n- 1) }( n- 1) ! ( 1+ x) ^{- n}$

9. $[(1+x)^\alpha]^{(n)}=\alpha(\alpha-1)\cdots(\alpha-n+1)(1+x)^{\alpha-n}$

### 六、中值定理

1. **费马（Femat）定理**（取到极值的必要条件）

  设 f(x)在点 x$_0$处取到极值，且$f^\prime(x_{_0})$存在，则$f^\prime(x_{_0})=0$。
  
  反之不真，例如$f( x) = x^{3}$，$f^{\prime }( x) = 3x^{2}$，$f^{\prime }( 0) = 0$，但$f(0)$不是极值。
  
  费马定理常用于证明$f(x)=0$有一个根，找一个$F(x)$，使$F^\prime(x)=f(x)$，证明，$F(x)$在某点$x_0$处取到极值$F^\prime(x_{_0})$存在，由费马定理知$F^\prime(x)=0$，即$f(x_{_0})=0$。

2. **罗尔（Rolle）定理**

  设$f(x)$在闭区间$[a,b]$上满足下列三个条件：
  
  1. $f(x)$在闭区间$[a,b]$上连续。
  2. $f(x)$在开区间$(a,b)$内可导。
  3. $f(a)=f(b)$
  
  则至少存在一点$\xi\in(a,b)$,使$f^\prime(\xi)=0$。
  
  推论：在罗尔定理中，若$f(a)=f(b)=0$，则在$(a,b)$内必有一点$\xi$，使$f^\prime(\xi)=0$，即方程$f(x)=0$的两个不同实根之间，必存在方程$f(x)=0$的一个根。
  
  罗尔定理的应用：
  
  1. 证明$f(x)=0$有一个根，找到一个$F(x)$，使$F^\prime(x)=f(x)$，验证 $F (x)$在某闭区间${[a,b]}$上满足罗尔定理条件，则至少存在一点$\xi\in(a,b)$，使$F^\prime(\xi)=0$，即$f(\xi)=0$。
  
  2. 证明适合某种条件$\xi$ 的存在性：把待证含有$\xi$ 的等式，通过分析转化为$F^\prime(\xi)=0$形式，对$F(x)$应用罗尔定理即可。

3. **拉格朗日(Lanrange)定理**

  若$f(x)$在闭区间$[a,b]$上满足下列二个条件：
  
  1. $f(x)$在闭区间$[a,b]$上连续。
  2. $f(x)$在开区间$(a,b)$内可导，则至少存在一点$\xi\in(a,b)$，使$\frac{f(b)-f(b)}{b-a}=f(\xi)$。
  
  拉格朗日定理的结论常写成下列形式：$f(b)-f(a)=f^{\prime}(\xi)(b-a),a<\xi<b$。上式中当$a>b$时公式仍然成立，即不论$a,b$之间关系如何，$\xi$总介于$a,b$之间，由$0<\frac{\xi-a}{b-a}=\theta<1$，得$\xi=a+\theta(b-a),0<\theta<1$，所以有：
  
  $$f(b)-f(a)=f'[a+\theta(b-a)](b-a),0<\theta<1$$
  
  拉格朗日定理是连结函数值与导函数值之间的一座桥梁，特别适合给出导数条件，要证明函数值关系的有关结论，就需要用到拉格朗日定理，拉格朗日定理主要应用是证明不等式。

4. **柯西(Cauchy)定理** 

  设$f(x),g(x)$在闭区间$[a,b]$上满足下列条件：
  
  1. $f(x),g(x)$在$[a,b]$上连续。
  2. $f(x),g(x)$在$(a,b)$内可导。
  3. $g'(x)\neq 0, x\in ( a, b)$。
  
  则至少存在一点$\xi\in(a,b)$，使$\frac {f(b)-f(a)}{g(b)-g(a)}=\frac{f^{\prime}(\xi)}{g^{\prime}(\xi)}$。