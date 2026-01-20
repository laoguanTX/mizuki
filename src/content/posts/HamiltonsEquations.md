---
title: 哈密顿方程
published: 2025-12-25
category: ["物理", "力学"]
tags: ["理论力学", "分析力学"]
alias: "hamiltonsequations"
---
## 一、勒让德变换

> [!NOTE]
>
> 将原有的独立变量的一部分或者全部，换为相应的共轭变量，从而得到一个新函数，这种变换称为勒让德变换。

### 1、一元函数勒让德变换

函数$f(x)$是变量$x$的函数，且$u(x)=\frac{\mathrm{d}}{\mathrm{d}x}f(x)$，可以构造一个新的以$u$为自变量的函数：
$$
g=xu-f
$$
取$g$的全微分：
$$
\mathrm{d}g=x\mathrm{d}u+u\mathrm{d}x-\mathrm{d}f=x\mathrm{d}u
$$
也就是：
$$
x=\frac{\mathrm{d}g}{\mathrm{d}u}
$$
于是，$g$就是变量$u$的函数：
$$
\mathrm{d}g(u)=\frac{\mathrm{d}g}{\mathrm{d}u}\mathrm{d}u=x(u)\mathrm{d}u
$$
我们称$g=xu-f$称为函数$f$的勒让德变换，它存在的条件，就是$x$可以表示为$u$的函数，也就是说$u$存在反函数，根据反函数定理，要求：
$$
\frac{\mathrm{d}u}{\mathrm{d}x}\neq0
$$
而在真实的物理系统中，总是存在勒让德变换。

### 2、二元函数勒让德变换

#### (1) 变换一

函数$f(x,y)$是变量$x$和$y$的函数，且$u=\frac{\mathrm{d}f}{\mathrm{d}x}，v=\frac{\mathrm{d}f}{\mathrm{d}y}$，故有：
$$
\mathrm{d}f=u\mathrm{d}x+v\mathrm{d}y
$$
为了得到一个以$u,v$为自变量的新函数，可以构造：
$$
g=xu+vy-f
$$
取$g$的全微分：
$$
\mathrm{d}g=x\mathrm{d}u+u\mathrm{d}x+v\mathrm{d}y+y\mathrm{d}v-\mathrm{d}f=x\mathrm{d}u+v\mathrm{d}y
$$
根据全微分定义，得到：
$$
x=\frac{\partial g}{\partial u},y=\frac{\partial g}{\partial y}
$$
于是，$g$就是变量$u$和$y$的函数。我们称$g=xu+vy-f$称为函数$f$的勒让德变换，它存在的条件，就是$x,y$可以表示为$u,v$的函数，也就是说$u,v$存在反函数，根据反函数定理，要求：
$$
\left| \begin{matrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{matrix} \right| \neq 0
$$

#### (2) 变换二

函数$f(x,y)$是变量$x$和$y$的函数，且$u=\frac{\mathrm{d}f}{\mathrm{d}x}，v=\frac{\mathrm{d}f}{\mathrm{d}y}$，为了得到一个以$u,y$为自变量的新函数，可以构造：
$$
g=xu-f
$$
取$g$的全微分：
$$
\mathrm{d}g=x\mathrm{d}u+u\mathrm{d}x-\mathrm{d}f=x\mathrm{d}u-v\mathrm{d}y
$$
根据全微分定义，得到：
$$
x=\frac{\partial g}{\partial u},y=-\frac{\partial g}{\partial y}
$$
于是，$g$就是变量$u$和$y$的函数。我们称$g=xu-f$称为函数$f$的勒让德变换，它存在的条件，就是$x$可以表示为$u$的函数，也就是说$u$存在反函数，根据反函数定理，要求：
$$
\frac{\mathrm{d}u}{\mathrm{d}x}\neq0
$$

### 3、勒让德变换的一般方法

函数$f(x_1,x_2,\cdots,x_n;a_1,a_2,\cdots,a_m)$是变量$x_1,x_2,\cdots,x_n;a_1,a_2,\cdots,a_m$的函数，有：
$$
y_i=\frac{\partial f}{\partial x_i}\quad(i=1,2,\cdots,n)
$$
将变量$x_1,x_2,\cdots,x_n;a_1,a_2,\cdots,a_m$变换为$y_1,y_2,\cdots,y_n;a_1,a_2,\cdots,a_m$，相应的函数$f$变为$g(y_1,y_2,\cdots,y_n;a_1,a_2,\cdots,a_m)$，可以构造：
$$
g=\sum_{i=1}^n x_iy_i-f
$$
勒让德变换存在的条件为$x,y$的雅可比行列式不为$0$，在真实的物理系统中都存在勒让德变换。

勒让德变换的逆变换：
$$
f=\sum_{i=1}^n x_iy_i-g
$$
同样也适合勒让德逆变换

## 二、哈密顿方程

### 1、保守系统的哈密顿方程

设质点系由$n$个质点组成，受到$s$个完整约束，具有$k=3n-s$个自由度。理想约束情况下，保守系统的拉格朗日方程为：
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial L}{\partial \dot q_i}\right)=\frac{\partial L}{\partial q_i}
$$
引入广义动量：
$$
p_i=\frac{\partial L}{\partial \dot q_i}\quad(i=1,2,\cdots,k)\quad L=L(\dot{q}_1,\dot q_2,\cdots,\dot q_k;t)
$$
以广义动量$p_1,p_2,\cdots,p_k$和广义坐标$q_1,q_2,\cdots,q_k$作为描述系统状态变量，建立系统的运动微分方程组：
$$
H=H(p_1,p_2,\cdots,p_k;q_1,q_2,\cdots,q_k;t)=\left(\sum_{i=1}^k p_i\dot q_i-L\right)_{\dot q_i\to p_i}
$$
其中的函数$H$称为哈密顿函数。对$H$取全微分，得到：
$$
\dot q_i=\frac{\partial H}{\partial p_i}
$$

$$
\frac{\partial H}{\partial q_i}=-\frac{\partial L}{\partial q_i}
$$

利用拉格朗日方程：
$$
\dot p_i=\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial L}{\partial \dot q_i}\right)=\frac{\partial L}{\partial q_i}=-\frac{\partial H}{\partial q_i}
$$
综合即为哈密顿方程，是关于系统状态变量$q_1,q_2,\cdot,q_k$和$p_1,p_2,\cdots,p_k$的$2k$个一阶微分方程组：
$$
\dot q_i=\frac{\partial H}{\partial p_i}
$$

$$
\dot p_i=-\frac{\partial H}{\partial q_i}
$$

哈密顿方程的数量是系统自由度的2倍。

### 2、非保守系统的哈密顿方程

对于非保守系统，主动力可以分为有势力和非有势力两类，系统的拉格朗日方程为：
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial L}{\partial \dot q_i}\right)-\frac{\partial L}{\partial q_i}=\tilde{Q}
$$
那么广义动量关于时间的全导数为：
$$
\dot p_i=\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial L}{\partial \dot q_i}\right)=\frac{\partial L}{\partial q_i}+\tilde{Q}=-\frac{\partial H}{\partial q_i}+\tilde{Q}
$$
于是非保守系统的哈密顿方程为：
$$
\dot q_i=\frac{\partial H}{\partial p_i}
$$

$$
\dot p_i=-\frac{\partial H}{\partial q_i}+\tilde{Q}
$$

### 3、哈密顿函数

广义速度表示的动能为：
$$
\begin{aligned}
T &= \frac{1}{2} \sum_{i=1}^{k} \sum_{j=1}^{k} a_{ij} \dot{q}_i \dot{q}_j + \sum_{i=1}^{k} b_i \dot{q}_i + c \\
&= T_2 + T_1 + T_0
\end{aligned}
$$
哈密顿函数$H$是通过广义动量和广义坐标表示的广义能量：
$$
\begin{aligned}
H &= \left( \sum_{i=1}^{k} p_i \dot{q}_i - L \right)_{\dot{q}_i \to p_i} = \left( \sum_{i=1}^{k} \frac{\partial L}{\partial \dot{q}_i} \dot{q}_i - L \right)_{\dot{q}_i \to p_i} \\
&= \left( \sum_{i=1}^{k} \left( \sum_{j=1}^{k} a_{ij} \dot{q}_j + b_i \right) \dot{q}_i - L \right)_{\dot{q}_i \to p_i} = \left[ 2T_2 + T_1 - (T_2 + T_1 + T_0 - V) \right]_{\dot{q}_i \to p_i} \\
&= (T_2 + V - T_0)_{\dot{q}_i \to p_i}
\end{aligned}
$$
那么对于定常约束系统，满足$T_1=T_0=0,T=T_2$，有：
$$
H=(T+V)_{\dot q_i\to p_i}
$$
即通过广义动量和广义坐标表示的机械能。

 
