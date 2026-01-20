---
title: 达朗贝尔原理
published: 2025-12-08
category: ["物理", "力学"]
tags: ["理论力学", "分析力学"]
alias: "d'alembert'sprinciple"
---
## 一、达朗贝尔原理

### 1、质点达朗贝尔原理

设质量为$m$的非自由质点$D$，在主动力$F$和约束力$F_N$作用下沿曲线运动，该质点的动力学基本方程为：
$$
m\vec{a}=\vec{F}+\vec{F}_N
$$
或：
$$
\vec{F}+\vec{F}_N+(-m\vec{a})=\vec{0}
$$
引入质点的惯性力$\vec{F_1}=-m\vec{a}$的概念，于是上式可以写为：
$$
\vec{F}+\vec{F}_N+\vec{F}_I=\vec{0}
$$
上式表明，在质点运动的每一瞬时，作用于质点的主动力、约束力和质点的惯性力在形式上构成一平衡力系。这就是质点的达朗贝尔原理。

### 2、质点系达朗贝尔原理

质点的达朗贝尔原理可以直接推广到质点系，将达朗贝尔原理应用于每个质点，得到$n$个矢量平衡方程。
$$
\vec{F_i}+\vec{F}_{Ni}+\vec{F}_{Ii}=\vec{0}
$$
这表明，在质点系运动的任一瞬时，作用于每一质点上的主动力、约束力和该质点的惯性力在形式上构成一平衡力系。对于讨论的质点系，有$n$个形式如上的平衡方程，即有$n$个形式上的平衡力系，将其组合在一起，所构成的任意力系仍然是平衡力系，根据静力学中空间任意力系的平衡条件，有：
$$
\sum \vec{F_i}+\sum\vec{F}_{Ni}+\sum\vec{F}_{Ii}=\vec0
$$

$$
\sum \vec{M}_O(\vec{F}_i)+\sum \vec{M}_O(\vec{F}_{Ni})+\sum \vec{M}_O(\vec{F}_{Ii})=\vec0
$$

上式表明，在任意瞬时，作用于质点系的主动力、约束力和所有质点的惯性力在形式上构成平衡力系：力系的主矢等于零，该力系对任一点$O$的主矩也等于零。这是质点系的达朗贝尔原理的一种表述。将主动力和约束力合起来看作是外力，则上式可以写为：
$$
\sum\vec{F}^{(e)}_{i}+\sum\vec{F}_{Ii}=\vec0
$$

$$
\sum \vec{M}_O(\vec{F}_{i}^{(e)})+\sum \vec{M}_O(\vec{F}_{Ii})=\vec0
$$

上式表明，在任意瞬时，作用于质点系的所有外力和所有质点的惯性力在形式上构成平衡力系。这是质点系达朗贝尔原理的另一种表述。

## 二、惯性力系的简化

### 1、惯性力系的简化

对于任意运动的质点系，把实际受的力和虚加惯性力各自向任意点$O$简化后所得的主矢、主矩分别记作$\vec{F}_R,\vec{M}_O$和$\vec{F}_{IR},\vec{M}_{IO}$，于是，由力系平衡条件，得：
$$
\vec{F}_R+\vec{F}_{IR}=\vec0,\vec{M}_O+\vec{M}_{IO}=\vec0
$$

#### (1) 惯性力系的主矢

由质心运动定理有$\vec{F}_R=m_R\vec{a}_C$，得：
$$
\vec{F}_{IR}=-m_R\vec{a}_C
$$
即，质点系惯性力的主矢恒等于质点系总质量与质心加速度的乘积，方向相反。

#### (2) 惯性力系的主矩

对任意固定点$\vec{M}_O+\vec{M}_{IO}=\vec0$，由对任意固定点$O$的动量矩定理有：
$$
\vec{M}_O=\frac{\mathrm{d}\vec{L}_O}{\mathrm{d}t}
$$
代入得：
$$
\vec{M}_{IO}=-\frac{\mathrm{d}\vec{L}_O}{\mathrm{d}t}
$$
对固定轴来说，将上式投影到任意固定轴$Oz$上，得：
$$
\vec{M}_{Iz}=-\frac{\mathrm{d}\vec{L}_z}{\mathrm{d}t}
$$
上式表明，质点系的惯性力对于任一固定点（或固定轴）的主矩，等于质点系对于该点（或该轴）的动量矩对时间的导数，并冠以负号。

对质心点来说，利用相对于质心的动量矩定理，可以得到质点系的惯性力对质心$C$的主矩表达式：
$$
\vec{M}_{IC}=-\frac{\mathrm{d}\vec{L}_C}{\mathrm{d}t}
$$
对于质心轴来说，上式对通过质心$C$的某一平移轴$Cz'$上的投影表达式为：
$$
\vec{M}_{Cz'}=-\frac{\mathrm{d}\vec{L}_{Cz'}}{\mathrm{d}t}
$$
上式表明,质点系的惯性力对质心（或通过质心的平移轴）的主矩，等于质点系对质心（或该轴）的动量矩对时间的导数，并冠以负号。

### 2、刚体在各种常见运动情况下惯性力主矢和主矩的表达式

#### (1) 刚体做平移

刚体平移时，惯性力系一般向质心简化，主矢为：
$$
\vec{F}_{IR}=-m_R\vec{a}_C
$$
主矩：
$$
M_{IC}=-\frac{\mathrm{d}\vec{L}_C}{\mathrm{d}t}=0
$$
刚体平移时，惯性力系简化为通过刚体质心的合力。

#### (2) 刚体做定轴转动

刚体做定轴转动时，惯性力系向转轴上一点$O$简化，设刚体绕固定轴$Oz$转动，在任意瞬时的角速度为$\omega$，角加速度为$\alpha$，主矢为：
$$
\vec{F}_{IR}=-m_r\vec{a}_C
$$
设质心$C$的转动半径为$\vec{r}_C$，则$\vec{F}^t_{IR}$和$\vec{F}^n_{IR}$的大小可以分别表示为：
$$
\vec{F}_{IR}=\vec{F}^t_{IR}+\vec{F}^n_{IR}
$$
其中：
$$
F^t_{IR}=-m_Rr_C\alpha,F^n_{IR}=-m_Rr_C\omega^2
$$
显然，当质心$C$在转轴上时，刚体的惯性力主矢等于零。刚体定轴转动时，惯性力系向固定轴简化，得到的惯性力系主矢的大小等于刚体质量与质心加速度大小的乘积，方向与质心加速度方向相反。

<img src="https://laoguantx.top/article/物理/理论力学/达朗贝尔原理/image-20251204111621352.png" alt="image-20251204111621352" style="zoom:67%;" />

对于主矩，有：
$$
\vec{M}_{IO} = -\frac{\mathrm{d}L_0}{\mathrm{d}t} = -\frac{\mathrm{d}L_x}{\mathrm{d}t}\vec{i} - \frac{\mathrm{d}L_y}{\mathrm{d}t}\vec{j} - \frac{\mathrm{d}L_z}{\mathrm{d}t}\vec{k} = -\frac{\mathrm{d}L_x}{\mathrm{d}t}\vec{i} - \frac{\mathrm{d}L_y}{\mathrm{d}t}\vec{j} - J_z\alpha\vec{k}
$$
$$
\vec{M}_{IO} = (M_{Ix}\vec{i} + M_{Iy}\vec{j} + M_{Iz}\vec{k})
$$

$$
F_{\mathrm{I}i}^t=m_ia_i^t=m_ir_i\alpha
$$

$$
F_{\mathrm{I}i}^n=m_ia_i^n=m_ir_i\omega^2
$$

<img src="https://laoguantx.top/article/物理/理论力学/达朗贝尔原理/image-20251204112251456.png" alt="image-20251204112251456" style="zoom:67%;" />
$$
\begin{aligned}
 M_{Ix}&=\sum M_x\left(\vec{F}_{Ii}\right)\\&=\sum  M_x\left(\vec{F}_{Ii}^t\right)+\sum  M_x\left(\vec{F}_{Ii}^n\right)\\&=\sum m_ir_i\alpha\cos\theta_iz_i+\sum(-m_ir_i\omega^2\sin\theta_iz_i)
\end{aligned}
$$
如图，有$\cos \theta_1=\frac{X_i}{r_i},\sin \theta_1=\frac{y_i}{r_i}$，所以化简有：
$$
M_{Ix}=\alpha\sum m_ix_iz_i-\omega^2\sum m_iy_iz_i
$$
规定$J_{yz}=\sum m_iy_iz_i,J_{xz}=\sum m_ix_iz_i$为对于$z$轴的惯性积，则：
$$
M_{Ix}=J_{xz}\alpha-J_{yz}\omega^2
$$
同理：
$$
M_{Ix}=J_{yz}\alpha+J_{xz}\omega^2
$$
接着，对于$M_{Iz}$：
$$
\begin{aligned}M_{Iz}&=\sum M_z\left(\overline{F}_{Ii}^t\right)+\sum M_z\left(\overline{F}_{Ii}^n\right)\\&=\sum-m_ir_i\alpha r_i\\&=-\left(\sum m_ir_i^2\right)\alpha\\&=-J_z\alpha\end{aligned}
$$
如果刚体有质量对称面且该面与转动轴垂直，简化中心取次平面与转轴的交点，则：
$$
J_{xz}=\sum m_ix_iz_i=0,J_{yz}=\sum m_iy_iz_i=0
$$

$$
M_{IO}=M_{Iz}=-J_z\alpha
$$

当具有质量对称面的刚体绕垂直于这个平面的固定轴转动时，惯性力系向这个对称面与转轴交点$O$简化的结果是作用在点$O$的一个力和一个力偶。合力的矢量即为惯性力系的主矢，其大小等于刚体质量与质心加速度大小的乘积，方向与质心加速度方向相反。合力偶的力偶矩即为惯性力系的主矩，其大小等于刚体对转动轴的转动惯量与角加速度的乘积，方向与角加速度方向相反。

#### (3) 刚体做平面运动

此处的平面运动考虑为具有质量对称平面的刚体作平面运动，并且运动平面与质量对称平面互相平行。

<img src="https://laoguantx.top/article/物理/理论力学/达朗贝尔原理/image-20251204113349862.png" alt="image-20251204113349862" style="zoom:50%;" />

若取质心$C$为基点，则刚体的平面运动可以分解为随质心$C$的平移和绕质心（通过质心且垂直于运动平面的轴）的转动。故可向质心简化。

对于主矢计算，合力的矢量即为惯性力系的主矢，其大小等于刚体质量与质心加速度大小的乘积，方向与质心加速度方向相反：
$$
\vec{F}_{IR}=-m_R\vec{a} _C
$$
对于主矩计算，惯性力系对质心的主矩等于刚体对通过质心的转动轴的转动惯量与角加速度的乘积，方向与角加速度方向相反：
$$
\vec{M}_IC=-\frac{\mathrm{d}\vec{L}_C}{\mathrm{d}t}
$$

$$
M_{IC}=-J_{Cz}\alpha
$$

