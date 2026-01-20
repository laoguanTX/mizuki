---
title: 传输线方程
published: 2025-11-26
category: ["数学", "数学物理方法"]
tags: ["数学物理方程", "偏微分方程"]
alias: "transmissionlineequation"
---
## 一、传输线电报方程

![image-20251126151056480](https://laoguantx.top/article/数学/数学物理方法/传输线方程/image-20251126151056480.png)

和直流不同，当导线上传输信号频率较高且导线长度与信号波长在同一数量级时，需要考虑导线中分布的电阻、电容、电感和漏电所带来的影响。以平行双线为例推导传输线上电压电流变化规律中分布的电阻、电容、电感和漏电所带来的影响。

![image-20251126151123295](https://laoguantx.top/article/数学/数学物理方法/传输线方程/image-20251126151123295.png)

在平行双线中，情况等效为上图所示电路。两端的电流不同，主要原因是两线之间的寄生电容引起充放电，从而引起电流的变化；同时介质损耗引起的漏电流是另一个原因。两端电压也不同，主要是线上寄生的串联电感引起的充放电引起；同时导体损耗也引起部分压降。压降来自串联部分寄生参数，电流变化来自并联寄生参数。假设：传输线是均匀的。均匀传输线沿线的电介质性质、导体截面、导体间的几何距离处处相同。任意位置的寄生参数保持相同，并且系统是非时变的。

设传输线单位长度的寄生电感、电容、阻抗（导线损耗）和导纳（线间电漏）分别为：$L ,C, R, G$。取传输线的长度为$\mathrm{d}x$，经过该微段后电流从$j(x)$变成了$j(x+\mathrm{d}x)=j(x)+\mathrm{d}j$，线间电压从$v(x)$变成了$v(x+\mathrm{d}x)=v(x)+\mathrm{d}v$。根据基尔霍夫电流定律：
$$
j+\mathrm{d}j=j-(G\mathrm{d}x)v-(C\mathrm{d}x)\frac{\partial v}{\partial t}
$$
方程右边第二项为线间漏电带走的电流，第三项为电压变化引起电容充放电所产生的电流。

根据基尔霍夫电压定律：
$$
v+\mathrm{d}v=v-j(R\mathrm{d}x)-(L\mathrm{d}x)\frac{\partial j}{\partial t}
$$
方程右边第二项为电阻压降，第三项为电感由于电流变化引起的压降。

然后方程两边进行化简，得到：
$$
\mathrm{d}j=-(G\mathrm{d}x)v-(C\mathrm{d}x)\frac{\partial v}{\partial t}
$$

$$
\mathrm{d}v=-j(R\mathrm{d}x)-(L\mathrm{d}x)\frac{\partial j}{\partial t}
$$

因此，传输线的电报方程为：
$$
\frac{\partial}{\partial x}j=-Gv-C\frac{\partial}{\partial t}v
$$

$$
\frac{\partial}{\partial x}v=-Rj-L\frac{\partial}{\partial t}j
$$

## 二、理想传输线电报方程

对于理想传输线，电阻和导纳的影响很小，即$R\ll 1,G\ll1$。于是方程可以写为：
$$
\frac{\partial}{\partial x}j=-C\frac{\partial}{\partial t}v
$$

$$
\frac{\partial}{\partial x}v=-L\frac{\partial}{\partial t}j
$$

然后结合两公式，可以得到：
$$
j_{xx}=\frac{\partial}{\partial x}\left(-C\frac{\partial}{\partial t} v \right)=-C\frac{\partial}{\partial t}\left(\frac{\partial}{\partial x} v \right)=-C\frac{\partial}{\partial t}\left(-L\frac{\partial}{\partial t}j\right)=LCj_{tt}
$$

$$
v_{xx}=\frac{\partial}{\partial x}\left(-L\frac{\partial}{\partial t}j\right)=-L\frac{\partial}{\partial t}\left(-L\frac{\partial}{\partial x}j\right)=-L\frac{\partial}{\partial t}\left(-C\frac{\partial}{\partial t}v\right)=LCv_{tt}
$$

可以发现，对于理想传输线，电流和电压均满足波动方程，令$a^2=\frac{1}{LC}$：
$$
j_{tt}-a^2j_{xx}=0
$$

$$
v_{tt}-a^2v_{xx}=0
$$

当给定初始条件后，可以使用行波法来进行求解。分析初始条件时，要经常用到下面的关系：
$$
\frac{\partial}{\partial x}j=-C\frac{\partial}{\partial t}v
$$

$$
\frac{\partial}{\partial x}v=-L\frac{\partial}{\partial t}j
$$

