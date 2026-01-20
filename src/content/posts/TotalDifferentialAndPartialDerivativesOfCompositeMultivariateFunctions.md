---
title: 全微分与复合多元函数偏导数
published: 2025-03-27
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "totaldifferentialandpartialderivativesofcompositemultivariatefunctions"
---
## 一、全微分

对于二元函数 $z=f(x,y)$，仅研究一个自变量变化时函数的性态是不够的，经常要讨论两个自变量 $x,y$ 分别有增量 $\Delta x,\Delta y$ 时，相应函数值的改变量（即全增量）：

$$\Delta z=f(x+\Delta x,y+\Delta y)-f(x,y)$$

的变化情况。类似于一元函数的微分，下面以二元函数为例介绍多元函数的全微分。

设二元函数 $z=f(x,y)$ 在点 $P_0(x_0,y_0)$ 的某邻域内有定义，若存在常数 $A,B$ 对充分小的 $\Delta x$ 和 $\Delta y$ 均有

$$\Delta z=f(x+\Delta x,y+\Delta y)-f(x,y)=A\Delta x+B\Delta y+o(\rho)\quad (\rho\to 0)$$

其中 $\rho=\sqrt{(\Delta x)^2+(\Delta y)^2}$，则称函数 $z=f(x,y)$ 在点 $P_0(x_0,y_0)$ 处可微。称 $A\Delta x+B\Delta y$ 为函数 $f(x,y)$ 在点 $P_0$ 处的全微分，记作

$$\mathrm{d}z=A\Delta x+B\Delta y$$

由上面定义可知，全微分为全增量 $\Delta z$ 的主要部分，因其为 $\Delta x,\Delta y$ 的线性函数，通常称为线性主部。若 $z=f(x,y)$ 在点 $P$ 处可微，则 $f(x,y)$ 在点 $P$ 处可偏导。

证明：若函数 $z=f(x,y)$ 在点 $P(x,y)$ 处可微，则存在常数 $A,B$ 使得
$$\Delta z=f(x+\Delta x,y+\Delta y)-f(x,y)=A\Delta x+B\Delta y+o(\rho)$$
其中 $\rho=\sqrt{(\Delta x)^2+(\Delta y)^2}$。当 $\Delta y=0$ 时，
$$\Delta_xz=f(x+\Delta x,y)-f(x,y)=A\Delta x+o(\Delta x)$$
因此
$$f'_x(x,y)=\lim_{\Delta x\to 0}\frac{f(x+\Delta x,y)-f(x,y)}{\Delta x}=\lim_{\Delta x\to 0}\frac{A\Delta x+o(\Delta x)}{\Delta x}=A$$
同样可得
$$f'_y(x,y)=B$$

根据上面定理，若函数 $z=f(x,y)$ 在点 $P(x,y)$ 处可微，则
$$\mathrm{d}z=A\Delta x+B\Delta y=f'_x(x,y)\Delta x+f'_y(x,y)\Delta y$$
特别地，对于函数 $z=x$，有
$$\mathrm{d}z=\mathrm{d}x=\frac{\partial z}{\partial x}\Delta x+\frac{\partial z}{\partial y}\Delta y=\Delta x$$
类似地，$\mathrm{d}y=\Delta y$。

根据上面的定理及说明，若函数 $z=f(x,y)$ 在点 $P(x,y)$ 处可微，则
$$\mathrm{d}z=f'_x(x,y)\mathrm{d}x+f'_y(x,y)\mathrm{d}y$$
或
$$\mathrm{d}z=\frac{\partial z}{\partial x}\mathrm{d}x+\frac{\partial z}{\partial y}\mathrm{d}y$$
## 二、多元函数求偏导的链式法则

由于多元函数含多个自变量，其复合结构要比一元函数复杂：我们先介绍二元复合函数的偏导数计算方法，据此可以很容易推广到其他多元复合函数的情况。

设函数 $u = g(x,y)$ 和 $v = h(x,y)$ 定义在$xOy$平面的区域$D_{xy}$上，函数$z=f(u,v)$定义在$uOv$平面的区域$D_{uv}$上，且满足 $\{(u,v)|u=g(x,y),v=h(x,y),(x,y)∈D_{xy}\}⊂D_{uv}$. 则函数$z=f(u,v)=f(g(x,y),h(x,y)),(x,y)∈D_{xy}$是以$f$为外函数，$g,h$为内函数的复合函数，其中$x,y$为函数$f$的自变量，$u,v$为函数$f$中间变量。

设函数$u=g(x,y)$和$v=h(x,y)$在点$P(x,y)$处偏导数存在，函数$z=f(u,v)$在对应点$(u,v)$处有一阶连续偏导数，则$\frac{\partial z}{\partial x}$和$\frac{\partial z}{\partial y}$均存在，且

$$\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\cdot\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\cdot\frac{\partial v}{\partial x},\quad\frac{\partial z}{\partial y}=\frac{\partial z}{\partial u}\cdot\frac{\partial u}{\partial y}+\frac{\partial z}{\partial v}\cdot\frac{\partial v}{\partial y}$$

证明：当$\Delta y=0$时

$$\Delta_zu=g(x+\Delta x,y)-g(x,y),\quad\Delta_xv=h(x+\Delta_x,y)-h(x,y)$$

由于$z=f(u,v)$有一阶连续偏导数，根据全微分公式，有

$$\Delta_xz=f_u'(u,v)\Delta_xu+ f_v'(u,v)\Delta_xv+(\alpha\Delta_xu+\beta\Delta_xv)$$
当$\Delta_xu→0,\Delta_xv→0$时，$\alpha>0,\beta>0$.

当$\Delta x→0$时，$\Delta_xu→0,\Delta_xv→0$.

所以
$$\begin{aligned}\frac{\partial z}{\partial x}&=\lim_{\Delta x\to0}\frac{\Delta_xz}{\Delta x}=\lim_{\Delta x\to0}\left(f_u'\cdot\frac{\Delta_xu}{\Delta x}+f_v'\cdot\frac{\Delta_xv}{\Delta x}+\alpha\cdot\frac{\Delta_xu}{\Delta x}+\beta\cdot\frac{\Delta_xv}{\Delta x}\right)\\&=f_u'\cdot g'_x+f'_v\cdot h'_x\\&=\frac{\partial z}{\partial u}\cdot\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\cdot\frac{\partial v}{\partial x}\end{aligned}$$

即：
$$\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\cdot\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\cdot\frac{\partial v}{\partial x}$$
同理可得：
$$\frac{\partial z}{\partial y}=\frac{\partial z}{\partial u}\cdot\frac{\partial u}{\partial y}+\frac{\partial z}{\partial v}\cdot\frac{\partial v}{\partial y}$$
上述给出的复合函数偏导数的计算方法，也称为复合函数偏导数计算的链式法则。