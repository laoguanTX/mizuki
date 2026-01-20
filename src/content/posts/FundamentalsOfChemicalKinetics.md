---
title: 化学动力学基础
published: 2024-11-19
category: ["其他课程基础", "普通化学"]
tags: ["普通化学"]
alias: "fundamentalsofchemicalkinetics"
---

## 一、反应速率

把反应速率$r$定义为单位时间内体积中反应组分，反应物和生成物)物质的量改变值，即：

$$r=\pm\frac{1}{V}\cdot\frac{\mathrm{d}n}{\mathrm{d}t}$$

若用反应物的物质的量$n$表示反应速率，则定义中“$\pm$”号座取"$-$”号；

若用生成物的物质的量$n$表示反应速率，则定义中"$\pm$”号应取"$+$”号；

若反应是恒容的，即$V$不改变，则：

$$r=\pm\frac{1}{V}\cdot\frac{\mathrm{d}n}{\mathrm{d}t}=\pm\frac{\frac{\mathrm{d}n}{V}}{\mathrm{d}t}=\pm\frac{\mathrm{d}c}{\mathrm{d}t}$$

式中$c$为反应组分的浓度。若反应各组分的计量系数不相同，如对于反应：

$$aA=bB(a\neq b)$$

为避免矛盾，使用任何反应组分表示的速率都是一致的，采用以下定义：

$$
\begin{aligned}
r=-\frac{1}{a}\frac{1}{V}\frac{\mathrm{d}n_{A}}{\mathrm{d}t}\\r=-\frac{1}{b}\frac{1}{V}\frac{\mathrm{d}n_{B}}{\mathrm{d}t}\\r=-\frac{1}{a}\frac{\mathrm{d}c_{A}}{\mathrm{d}t}\\r=-\frac{1}{b}\frac{1}{V}\frac{\mathrm{d}c_{B}}{\mathrm{d}t}
\end{aligned}
$$

$c_A$与$c_B$有时也表示为$[A]$和$[B]$

反应速率与反应物浓度存在函数关系，化学动力学方程可以表示为：

$$f(c_{A})=-\frac{\mathrm{d}c_{A}}{\mathrm{d}t}$$

进行变量分离：

$$\frac{\mathrm{d}c_A}{f(c_A)}=-\mathrm{d}t$$

两边进行不定积分：
$$c_A=g(t)$$

上式为反应动力学方程的积分形式，反应$c_A$与$t$的关系对于含有多种反应物的反应，如

$$aA+bB\to生成物$$

反应速率与各种反应物的浓度都有关。在比较简单的情况下，反应动力学方程可表示为：

$$-\frac{1}{a}\frac{\mathrm{d}c_{A}}{\mathrm{d}t}=kc_{A}^{\alpha}c_{B}^{\beta}$$

上式中的指数之和$\alpha+\beta$为反应级数，$α$与$β$可以是整数，也可以不是，$k$为反应速率常数。 

## 二、简单的化学反应速率计算

### 1、一级反应的动力学方程

一般地，如果反应$A= P$是一级反应，则：

$$-\frac{\mathrm{d}c_{A}}{\mathrm{d}t}=kc_{A}$$

分离度量后作不定积分：

$$\int\frac{\mathrm{d}c_A}{c_A}=\int-k\mathrm{d}t$$

将上式同时以$e$为底数取指数，得：

$$c_{A}=e^{B}e^{-kt}=Ae^{-kt}$$

得：

$$\ln c_{A}=-kt+B$$

如果反应起始$(t=0)$时$A$的浓度$c_{a}=a$，代入上式得$A=a$，则：

$$c_{A}=ae^{-kt}$$

$A$浓度减少到其初始浓度一半所需要的时间称为$A$的半衰期，用$t_{\frac{1}{2}}$表示，有：

$$\frac{1}{2}a=ae^{-kt_\frac12}$$

所以：

$$t_{\frac{1}{2}}=\frac{\ln2}{k}$$

故可知一级反应的半衰期与反应物起始浓度无关。根据量纲知$k$的单位为$\mathrm{s}^{-1}$由此，若反应的龙单位为$\mathrm{s}^{-1}$可推知该反应为一级反应。

## 2、二级反应的动力学方程

### (1)对于只有一种反应物的二级反应

$$nA=P$$

其反应速率方程为：

$$r=-\frac{1}{n}\frac{\mathrm{d}c_{A}}{\mathrm{d}t}=kc_{A}^{2}$$

分离变量后作不定积分：

$$\int\frac{\mathrm{d}c_{A}}{c_{A}^{2}}=\int-nk\mathrm{d}t$$

得：

$$\frac{1}{c_{A}}=nkt+B$$

若反应起始时反应物 A 的浓度为$a$，即$t=0$时，$c_{A}=a$代入上式得：

$$B=\frac{1}{a}$$

所以：

$$\frac{1}{c_{A}}=nkt+\frac{1}{a}$$

二级反应速率常数$k$的量纲为（浓度$^{-1}·$时间$^{-1}$）

#### (2)对于有两种反应物的二级反应

对于有两种物质参与的二级反应，如：$A+B=P$

这一类二级反应的速率方程为：

$$-\frac{\mathrm{d}c_A}{\mathrm{d}t}=kc_{A}c_{B}$$

写出化学方程式：
$$
\begin{aligned}
&& A && + && B && = && P\\
t=0&& a &&&& b &&&&0\\
t=t&&a-x&&&&b-x&&&&x
\end{aligned}
$$
反应速率方程可表示为：

 $$r=-\frac{\mathrm{d}c_A}{\mathrm{d}t}=-\frac{\mathrm{d}(a-x)}{\mathrm{d}t}=k(a-x)(b-x)$$

分离变量得：

$$\frac{\mathrm{d}(a-x)}{(a-x)(b-x)}=-k\mathrm{d}t$$

两端作不定积分：

$$\int\frac{\mathrm{d}(a-x)}{(a-x)(b-x)}=\int-k\mathrm{d}t$$

所以：

$\frac{1}{a-b}\ln\frac{a-x}{b-x}=kt+B$

根据$t=0$时的条件代入上式，得：

$$\frac{1}{a-b}\ln\frac{b(a-x)}{a(b-x)}=kt$$

若$A$和$B$起始浓度相同，即$a=b$，则：

$$\int \frac {\mathrm{d}( a- x) }{( a- x) ^{2}}= \int - k\mathrm{d}t$$

积分结果为：

$$\frac{1}{a-x}=kt+B$$

根据$t=0$时的条件代入上式，得：

$$B=\frac{1}{a}$$

故：

$$\frac{1}{a-x}-\frac{1}{a}=kt$$

得到其半衰期（$A$和$B$浓度均减半）的时间为：
$$\frac{1}{\frac{1}{2}a}-\frac{1}{a}=kt_\frac{1}{2}$$

$$t_{\frac{1}{2}}=\frac{1}{ka}$$

### 3、零级反应的动力学方程

如果反应速率与反应物浓度无关，例如气体反应以固态物质为催化剂，对于零级反应$A=P$，反应速率方程为：

$$-\frac{\mathrm{d}c_{A}}{\mathrm{d}t}=kc_{A}^{0}=k$$

分离变量并积分：

$$c_{A}=-kt+B$$

若$A$的初始浓度为$a$，则$B=a$所以：

$$c_{A}=-kt+a$$

零级反应的半衰期为：

$$t_\frac{1}{2}=\frac{a}{2k}$$

## 三、复杂的化学反应速率计算

### 1、平行反应的动力学

平行反应中，反应物同时进行进行几个相互独立的反应，只不过生成物的量不同，分为主副反应：

$$A+B\xrightarrow{k_1}C\\A+B\xrightarrow{k_2}D$$

如果这两个反应对于$A$各为一级，对于$B$也各为一级，设起始时$A,B$的浓度分别为$a,b$，经过时间 $t$后，$C$和$D$的浓度分别为$x_1$和$x_2$，则：

$$
\begin{aligned}
&&A&&B&&C&&D\\
t=0&&a&&b&&0&&0\\
t=t&&a-x_1-x_2&&b-x_1-x_2&&x_1&&x_2\\
令x\equiv x_1+x_2&&a-x&&b-x&&x_1&&x_2
\end{aligned}
$$

两个反应的速率分别为：

$$
\begin{aligned}
r_{1}=-\frac{\mathrm{d}(a-x)}{\mathrm{d}t}=k_{1}(a-x)(b-x)\\r_{2}=-\frac{\mathrm{d}(a-x)}{\mathrm{d}t}=k_{2}(a-x)(b-x)
\end{aligned}
$$