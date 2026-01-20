---
title: 定积分的应用
published: 2024-12-17
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "applicationsofdefiniteintegrals"
---
## 一、求平面图形的面积
求曲线$y=f_1(x),y=f_2(x)$（均连续），$x=a,x=b,(a<b)$围成的平面图形面积，为：
$$
S=\int_a^b|f_2(x)-f_1(x)|\mathrm{d}x
$$
## 二、求夹在两平面间的立体的体积
设$\Omega$为一空间立体，它夹在垂直于$Ox$轴的两平面$x=a,x=b$之间$(a<b)$，我们称$\Omega$为位于$[a,b]$上的空间立体。在区间$[a,b]$上任取一点$x$处，做垂直于$Ox$轴的平面，它截得立体$\Omega$的截面面积显然是$x$的函数，设$x$为连续函数，记为$A(x)$，$x\in[a,b]$，称为空间立体$\Omega$的界面面积函数。那么该立体的体积为：
$$
V=\int_a^bA(x)\mathrm{d}x
$$
如果要求连续曲线$y=f(x)$，$Ox$轴及直线$x=a,x=b$所围成的曲边梯形绕$Ox$轴旋转而成的旋转体体积$V_x$，那么就把旋转体看成夹在两平行平面$x=a,x=b$之间，那么在$[a,b]$上的任意一点$x$处做#平行两底面的平面与立体相截，截面面积为：
$$
A(x)=\pi |f(x)|^2=\pi f^2(x)
$$
代入上面体积公式，得：
$$
V_x=\pi\int_a^bf^2(x)\mathrm{d}x
$$
如果要求连续曲线$y=f(x)$，直线$x=a,x=b,(0\leq a<b)$所围成的曲边梯形绕$Oy$轴旋转而成的旋转体体积$V_y$，那么就在$[a,b]$上的任意一点$x$处，取出以$Ox$长度为半径的圆柱面与立体相截，截面面积为：
$$
S(x)=2\pi x|f(x)|
$$
将该柱体分为无数个很薄的空心柱体，厚度为$\mathrm{d}x$，由于厚度很薄，那么认为内外圆柱面面积相等，为$f(x)$，得到该部分的体积：
$$
\begin{aligned}
\Delta V_y \approx &\pi(x+\mathrm{d}x)^2|f(x)|-\pi x^2|f(x)\\
=&2\pi x|f(x)|\mathrm{d}x+\pi|f(x)|\mathrm{d}x\cdot\mathrm{d}x\\
\approx&2\pi x|f(x)|\mathrm{d}x 
\end{aligned}
$$
## 3、计算平面曲线弧长
设$A,B$是平面曲线弧$\Gamma$上的两个端点，在$\Gamma$上依次取点$A=M_1,M_2,M_3,\cdots,M_n=B$，做折线$M_0M_1M_2\cdots M_n$，以$s_n$记此折线的长，则：$s_n=\sum_{i=1}^n\overline{M_{i-1}M_i}$，记$\lambda=\max_{1\le i\le n}\overline{M_{i-1}M_i}$，若$\lim_{\lambda \to 0}s_n$存在，且此极限与曲线弧长上点$M_i$的取法无关，则该曲线$\Gamma$是可求长的。
若$\Gamma$参数方程为
$$
\begin{cases}
x=\varphi(t),\\
y=\psi(t),\\
\end{cases}\qquad \alpha\le t\le\beta
$$
则弧长$s$为：
$$
s=\int_\alpha^\beta\sqrt{\varphi'^2(t)+\psi'^2(t)}\mathrm{d}t
$$
若$\Gamma$曲线方程为
$$
y=f(x),\qquad a\le x\le b
$$
则弧长$s$为：
$$
s=\int_a^b\sqrt{1+f'^2(x)}\mathrm{d}x
$$
若$\Gamma$曲线方程为
$$
\begin{cases}
x=\psi(y),\\
y=y,\\
\end{cases}
$$
则弧长$s$为：
$$
s=\int_c^d\sqrt{1+\psi'^2(y)}\mathrm{d}y
$$
若$\Gamma$极坐标方程为
$$
r=r(\theta)
$$
则弧长$s$为：
$$
s=\int_\alpha^\beta\sqrt{r^2(\theta)+r'^2(\theta)}\mathrm{d}\theta
$$
同时还有弧长的微分公式：
$$
\mathrm{d}s=\sqrt{(\mathrm{d}x)^2+(\mathrm{d}y)^2}
$$
## 四、求旋转体的侧面面积
由连续曲线$y=f(x)$，$x$轴及直线$x=a,x=b$所围平面图形绕$x$轴旋转所形成的旋转体的侧面面积$S_x$，可以看做是无数小区间的侧面积$\Delta S_x$，而$\Delta S_x$可以看成是上底半径为$|f(x)|$，下底半径为$|f(x+\Delta x)|$，母线为曲线弧长$\Delta s$的圆台的侧面积，因此 得到$\Delta S_x$的计算公式：
$$
\Delta S_x\approx 2\pi|f(x)|\sqrt{1+f'(x)}\Delta x
$$
那么计算积分为：
$$
S_x=2\pi\int_a^b|f(x)|\sqrt{1+f'^2(x)}\mathrm{d}x
$$
