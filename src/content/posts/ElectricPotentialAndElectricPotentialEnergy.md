---
title: 电势和电势能
published: 2025-10-18
category: ["物理", "普通物理学"]
tags: ["电学"]
alias: "electricpotentialandelectricpotentialenergy"
---
## 一、静电场的环路定律

![image-20251013101618137](https://laoguantx.top/article/物理/普通物理学/电势能和电势/image-20251013101618137.png)

我们根据图示逐步推导静电场的环路定理（即闭合路径上的电场沿路径积分为零）。静电场是由静止电荷分布产生的。对于静电场来说，其电场 $\vec{E}$ 与电势（$V$）满足关系：

$$
\vec{E} = -\nabla V
$$
电势$V$是标量场，描述了静电场各点的能量。设路径沿 $C$（如图中的闭合回路），则电场的环路积分可以表示为：
$$
\oint_C \vec{E} \cdot \mathrm{d}\vec{l}
$$
其中$\mathrm{d}\vec{l}$是路径上的微小位移向量。如图所示，我们考虑沿环路$C$的积分路径，有两个部分$L_1$和 $L_2$，分别从点 $a$ 到点 $b$：

- $L_1$：路径沿电场线，从 $a$ 到 $b$。
- $L_2$：路径逆电场线，从 $b$ 返回到 $a$。

电场 $\vec{E}$ 是保守场，也就是说电场的环路积分仅与路径的起点和终点有关。换言之，电场的环路积分与电势差有关：
$$
\int_a^b \vec{E} \cdot \mathrm{d}\vec{l} = V(a) - V(b)
$$
- 在路径 $L_1$ 上，从 $a$ 到 $b$：
  $$
  \int_{L_1} \vec{E} \cdot \mathrm{d}\vec{l} = V(a) - V(b)
  $$
- 在路径 $L_2$ 上，从 $b$ 返回到 $a$：
  $$
  \int_{L_2} \vec{E} \cdot \mathrm{d}\vec{l} = V(b) - V(a)
  $$

将两个路径积分相加，我们得到沿闭合路径 $C$ 的环路积分：
$$
\oint_C \vec{E} \cdot \mathrm{d}\vec{l} = \int_{L_1} \vec{E} \cdot \mathrm{d}\vec{l} + \int_{L_2} \vec{E} \cdot \mathrm{d}\vec{l}
$$
于是：
$$
\oint_C \vec{E} \cdot \mathrm{d}\vec{l} = (V(a) - V(b)) + (V(b) - V(a)) = 0
$$

从以上推导可以得到，静电场的环路积分恒为零：
$$
\oint_C \vec{E} \cdot d\vec{l} = 0.
$$

## 二、电势的应用

### 1、在电偶极子上应用电势

<img src="https://laoguantx.top/article/物理/普通物理学/电势能和电势/image-20251013110800649.png" alt="image-20251013110800649" style="zoom:50%;" />

由于电势是标量，所以计算电势和的运算非常简单。首先根据公式，写出研究点的电势大小：
$$
V(r)=\frac{1}{4\pi\varepsilon_0}\left(\frac{q}{r_1}-\frac{q}{r_2}\right)=\frac{q}{4\pi\varepsilon_0}\frac{r_2-r_1}{r_1r_2}
$$
由于$r\gg a$，则可以做出如下近似：
$$
r_1-r_2\approx 2a\cos \theta \quad r_1r_2\approx r^2
$$
化简得：
$$
V(r)=\frac{1}{4\pi\varepsilon_0}\frac{2aq\cos\theta}{r^2}=\frac{\vec{p}\cdot \hat{r}}{4\pi\varepsilon_0r^2}
$$

### 2、在电四偶极矩上应用电势

![image-20251013111412711](https://laoguantx.top/article/物理/普通物理学/电势能和电势/image-20251013111412711.png)

首先写出原始计算公式：
$$
\begin{aligned}V(r)&=\sum_iV_i(r_i)\\&=\frac{1}{4\pi\varepsilon_0}(\frac{q}{r-d}+\frac{-2q}{r}+\frac{q}{r+d})\\&=\frac{1}{4\pi\varepsilon_0}\frac{2qd^2}{r(r^2-d^2)}\\&=\frac{1}{4\pi\varepsilon_0}\frac{2qd^2}{r^3(1-d^2/r^2)}\end{aligned}
$$
因为$d\ll l,\frac{d}l\ll 1$，则可以化简为：
$$
V(r)=\frac{2qd^2}{4\pi\varepsilon_0r^3}=\frac{Q}{4\pi\varepsilon_0r^3}
$$
其中$Q=2qd^2$，成为四偶极矩。

### 3、研究均匀带电球壳的电势

![image-20251013111936196](https://laoguantx.top/article/物理/普通物理学/电势能和电势/image-20251013111936196.png)

根据高斯定理：
$$
E=\frac{q}{4\pi\varepsilon _0r^2}\quad(r\ge R)
$$

$$
E=0\quad(r\lt R)
$$

积分，得到对应位置的电势：

1. 当$r\gt R$时：
   $$
   V=\int_P^{+\infty}\vec{E}\cdot \mathrm{d}\vec{l}=\frac{q}{4\pi\varepsilon _0r}
   $$
   
2. 当$r< R$时：
   $$
   V=\int_P^{+\infty}\vec{E}\cdot \mathrm{d}\vec{l}=\int_P^{R}\vec{E}\cdot \mathrm{d}\vec{l}+\int_R^{+\infty}\vec{E}\cdot \mathrm{d}\vec{l}=0+\frac{q}{4\pi\varepsilon _0R}=\frac{q}{4\pi\varepsilon _0R}
   $$

3. 

做出对应图像：

![image-20251013112617057](https://laoguantx.top/article/物理/普通物理学/电势能和电势/image-20251013112617057.png)

### 4、研究均匀带电圆环的电势

![image-20251013113429839](https://laoguantx.top/article/物理/普通物理学/电势能和电势/image-20251013113429839.png)

使用代数积分计算即可，首先写出$\mathrm{d}q$对研究点产生的电势：
$$
\mathrm{d}V=\frac{\mathrm{d}q}{4\pi\varepsilon_0r}=\frac{\lambda \mathrm{d}s}{4\pi\varepsilon_0r}
$$
积分运算：
$$
\begin{aligned}V&=\int \mathrm{d}V\\&=\frac{1}{4\pi\varepsilon_0}\oint\frac{\lambda \mathrm{d}s}{r}\\&=\frac{\lambda}{4\pi\varepsilon_0\sqrt{z^2+R^2}}\cdot2\pi R\\&=\frac{q}{4\pi\varepsilon_0\sqrt{z^2+R^2}}\end{aligned}
$$

### 5、研究均匀带电圆盘的电势

<img src="https://laoguantx.top/article/物理/普通物理学/电势能和电势/image-20251015100814488.png" alt="image-20251015100814488" style="zoom:50%;" />

将圆环细分为无穷多个均匀带电圆环，利用应用四的方法进行积分：
$$
\mathrm{d}q=2\pi\omega\sigma\mathrm{d}\omega
$$

$$
\mathrm{d}V=\frac{2\pi\omega\sigma\mathrm{d}\omega}{4\pi\varepsilon_0\sqrt{z^2+\omega^2}}
$$

然后对$V$积分：
$$
V=\int_0^R\frac{2\pi\omega\cdot d\omega\cdot\sigma}{4\pi\varepsilon_0\sqrt{z^2+\omega^2}}=\frac{\sigma}{2\varepsilon_0}(\sqrt{z^2+R^2}-z)
$$
特别地，当$z\gg R$时，对根号里面的内容进行变形和泰勒展开，得到：
$$
\sqrt{z^{2}+R^{2}}=z\sqrt{1+(\frac{R}{z})^{2}}=z(1+\frac{1}{2}\frac{R^{2}}{z^{2}}+...)
$$

$$
\begin{aligned}V(z)&=\frac{\sigma}{2\varepsilon_{0}}(\sqrt{R^{2}+z^{2}}-z)\\&\approx\frac{\sigma}{2\varepsilon_{0}}(z+\frac{R^{2}}{2z}-z)\\&=\frac{\sigma}{2\varepsilon_{0}}\cdot\frac{R^{2}}{2z}\\&=\frac{\sigma\cdot\pi R^{2}}{4\pi\varepsilon_{0}z}\\&=\frac{q}{4\pi\varepsilon_0z}\end{aligned}
$$

也就是说，当距离圆盘足够远时，可以将圆盘看作是点电荷。

### 6、根据电势计算电场

已知空间内的电势，可以通过下面公式计算电场：
$$
\vec{E}=-\vec{\nabla}V
$$
展开为：
$$
\vec{E}=-\vec{\nabla}\mathrm{V}=-\frac{\partial V}{\partial x}\hat{x}-\frac{\partial V}{\partial y}\hat{y}-\frac{\partial V}{\partial z}\hat{z}
$$
在球坐标系中，经过变量代换得到：
$$
\vec{E}=-\vec{\nabla}\mathrm{V}=-\frac{\partial V}{\partial r}\hat{r}-\frac{1}{r}\frac{\partial V}{\partial\theta}\hat{\theta}-\frac{1}{r\sin\theta}\frac{\partial V}{\partial\phi}\hat{\phi}
$$

> **例**：
> 
> 已知电势，可以求出电场，所以可以使用这种方法求出电偶极子在任意位置的产生的电场。
>
> <img src="https://laoguantx.top/article/物理/普通物理学/电势能和电势/image-20251013110800649.png" alt="image-20251013110800649" style="zoom:50%;" />
>
> 已知电势：
> $$
> \mathrm{V}(r,\theta)=\frac{1}{4\pi\varepsilon_0}\frac{2aq\cos\theta}{r^2}
> $$
> 对$E$进行极坐标系变换：
> $$
> E_r=-\frac{\partial V}{\partial r}\quad E_\theta=-\frac{1}{r}\frac{\partial V}{\partial \theta}
> $$
> 代入得：
> $$
> \vec{E}=\frac{2aq}{4\pi\varepsilon_0r^3}\left((2\mathrm{cos}\theta)\hat{r}+(\mathrm{sin}\theta)\hat{\theta}\right)
> $$
> 注意，这里$r$是近似之后的结果，忽略了距离$a$带来的部分效应。比较[电偶极子在特殊位置下产生的电场](https://www.laoguantx.top/posts/electricfield#heading-1)，可以发现二者相同（注意将$a$近似处理，$\sqrt{x^2+a^2}\approx r$）。
>
> 同样地，上面电势的应用中所求的问题，都可以使用该方法求解出电场。

## 三、等势

> [!NOTE]
>
> 高中部分的内容不做说明。重要的一点：导体是个等势体，表面是个等势面，导体内部场强处处为$0$。

## 四、尖端放电

<img src="https://laoguantx.top/article/物理/普通物理学/电势能和电势/image-20251015104343544.png" alt="image-20251015104343544" style="zoom:50%;" />

上图是两个导体球，中间用一根导线连接，由于导体是个等势体，表面是个等势面，则两球表面的电势相等，有公式：
$$
\frac{Q_{S}}{4 \pi \varepsilon_{0} r_{S}} \approx \frac{Q_{L}}{4 \pi \varepsilon_{0} r_{L}} \Rightarrow \frac{Q_{S}}{Q_{L}} \approx \frac{r_{S}}{r_{L}}
$$
根据面电荷密度的计算公式：
$$
\frac{\sigma_S}{\sigma_L}\approx\frac{(Q_S/r_S^2)}{(Q_L/{r_L}^2)}
$$
得到：
$$
\frac{\sigma_S}{\sigma_L}=\frac{r_L}{r_S}
$$
所以（曲率）半径越小，面电荷密度越大，更容易放电。
