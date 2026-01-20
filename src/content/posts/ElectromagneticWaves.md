---
title: 电磁波
published: 2025-12-04
category: ["物理", "普通物理学"]
tags: ["电磁学"]
alias: "electromagneticwaves"
---

## 一、电磁波的产生

### 1、静止电荷

当一个电荷静止时，它只在空间周围产生静电场 $\vec{E}$。在这个情况下，电场的能量密度为：

$$
u_E = \frac{1}{2} \varepsilon_0 E^2
$$

其中，$\varepsilon_0$ 是真空介电常数，$E$ 是电场强度。此时，空间中没有变化的磁场，也没有能量或动量的传播，因此不会产生电磁波。

### 2、匀速运动的电荷

当一个电荷以恒定速度运动时，它会产生恒定的磁场 $\vec{B}$。磁场的能量密度为：

$$
u_B = \frac{B^2}{2 \mu_0}
$$

其中，$\mu_0$ 是真空磁导率，$B$ 是磁场强度。在这种情况下，电场能量密度 $u_E$ 和磁场能量密度 $u_B$ 都随时间保持不变，不发生变化，没有能量和动量在空间中传输，也不会产生电磁辐射（即没有电磁波的发射）。

### 3、加速运动的电荷

只有当电荷发生加速运动时（即速度随时间变化），如电流 $i(t)$ 随时间变化，磁场 $\vec{B}(t)$ 也随时间变化，此时才会产生电磁辐射。加速的电荷会产生随时间变化的电场和磁场，这些变化的电场和磁场可以在空间中传播，形成电磁波。这种通过加速运动产生的电磁波，本质上是电场和磁场的相互作用和变化通过空间传播能量。

### 4、LCR电路

LCR电路由电感（L）、电容（C）和电阻（R）串联组成。设电容上的电荷为 $q$，应用基尔霍夫电压定律，电感的电压为$L \frac{\mathrm{d}^2 q}{\mathrm{d} t^2}$，电阻的电压为$R \frac{\mathrm{d}q}{\mathrm{d}t}$，电容的电压为$\frac{1}{C}q$，则回路总电压为零，得到：

$$
L \frac{\mathrm{d}^2 q}{\mathrm{d} t^2} + R \frac{\mathrm{d}q}{\mathrm{d}t} + \frac{1}{C} q = 0
$$

这是一个二阶线性齐次微分方程。该方程的通解为：

$$
q(t) = q_0 e^{-\frac{R}{2L} t} \cos(\omega t + \varphi)
$$

其中，$q_0$ 是初始电荷，$\omega$ 是振荡角频率，$\varphi$ 是初相位。角频率和阻尼系数分别为：
$$
\omega = \sqrt{ \frac{1}{LC} - \frac{R^2}{4L^2} }
$$

$$
\alpha = \frac{R}{2L}
$$

其中当 $R$ 很小时，阻尼很弱，系统近似无阻尼振荡，角频率简化为：

$$
\omega \approx \sqrt{\frac{1}{LC}} = \omega_0
$$

由于电阻的存在，能量会随着时间逐渐损耗。电荷的振荡会随时间指数衰减，$q$ 随时间呈现阻尼振荡，振幅逐渐减小，最终趋于零。

## 二、电磁波的传播

当一个电偶极子（如天线中的两极）发生振荡时，它会产生电磁辐射。偶极子的振荡电流随时间变化，通常为谐振荡形式：

$$
I(t) \propto \sin(\omega t)
$$

这会导致偶极子周围的电场和磁场发生周期性变化，从而向外辐射电磁波。偶极子的辐射是线性极化的，即电场矢量的振动方向始终保持在一个固定的方向上——这个方向就是偶极子的轴向。例如，垂直偶极子的电场振动方向也是垂直的。这种极化方式在天线和无线电技术中非常常见。

偶极子的辐射强度在空间不同方向并不均匀，形成了特定的辐射方向图：

<img src="https://laoguantx.top/article/物理/普通物理学/电磁波/image-20251126104635133.png" alt="image-20251126104635133" style="zoom:50%;" />

## 三、电磁波的性质

<img src="https://laoguantx.top/article/物理/普通物理学/电磁波/image-20251126105216344.png" alt="image-20251126105216344" style="zoom:50%;" />

在距离波源较远的自由空间（$\rho_{e0} = 0, \ \vec{j}_0 = 0$），电磁波具有以下性质：

### 1、横波性质

电磁波是横波，即电场 $\vec{E}$ 和磁场 $\vec{H}$ 的振动方向都垂直于波的传播方向 $\vec{k}$：

$$
\vec{E} \perp \vec{k}, \quad \vec{H} \perp \vec{k}
$$
电场、磁场和传播方向三者互相垂直，构成空间中的正交坐标系。

### 2、电场与磁场互相垂直

在电磁波中，电场 $\vec{E}$ 与磁场 $\vec{H}$ 彼此总是垂直：

$$
\vec{E} \perp \vec{H}
$$

### 3、电场与磁场同相

电磁波中的电场和磁场变化同步，即同相：

$$
E_0, \ H_0 \text{ are in phase}
$$
在空间中某一点，电场和磁场的最大值、最小值同时出现。

### 4、右手定则

三者满足右手定则：用右手，拇指指向波的传播方向 $\vec{k}$，食指指向电场方向 $\vec{E}$，中指指向磁场方向 $\vec{H}$。即：

$$
\vec{E} \times \vec{H} = \vec{k}
$$

### 5、电磁波的传播速度

电磁波在自由空间中的传播速度为：

$$
  v = \frac{1}{\sqrt{\kappa_e \varepsilon_0 \kappa_m \mu_0}}
$$

其中$\kappa_e$ 为介质的相对介电常数（自由空间为 1），$\kappa_m$ 为介质的相对磁导率（自由空间为 1），$\varepsilon_0$ 为真空介电常数，$\mu_0$ 为真空磁导率

在真空或空气中：

$$
  \kappa_e = \kappa_m = 1
$$
$$
  v = c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}} \approx 3 \times 10^8 \ \mathrm{m/s}
$$

### 6、振幅关系

磁场与电场的振幅存在以下关系：
$$
\sqrt{\kappa_e \varepsilon_0} E_0 = \sqrt{\kappa_m \mu_0} H_0
$$

## 四、麦克斯韦方程组求解

积分形式的麦克斯韦方程组：
$$
\left\{
\begin{aligned}
    {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{E} \cdot \mathrm{d} \vec{A} &= \frac{q_0}{\varepsilon_0} \\
    {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{B} \cdot \mathrm{d} \vec{A} &= 0 \\
    \oint \vec{E} \cdot \mathrm{d}\vec{l} &= - {\int\kern{-8pt}\int} \frac{\partial \vec{B}}{\partial t} \cdot \mathrm{d}\vec{A} \\
    \oint \vec{H} \cdot \mathrm{d}\vec{l} &= i_0 + {\int\kern{-8pt}\int} \frac{\partial \vec{D}}{\partial t} \cdot \mathrm{d}\vec{A}
\end{aligned}
\right.
$$

自由空间下的麦克斯韦方程组（$\rho_{e0}=0$, $\vec{j}_0=0$）没有自由电荷，没有电流：
$$
\left\{
\begin{aligned}
    \nabla \cdot \vec{E} &= 0 \\
    \nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} = -\kappa_m \mu_0 \frac{\partial \vec{H}}{\partial t} \\
    \nabla \cdot \vec{H} &= 0 \\
    \nabla \times \vec{H} &= \frac{\partial \vec{D}}{\partial t} = \kappa_e \varepsilon_0 \frac{\partial \vec{E}}{\partial t}
\end{aligned}
\right.
$$

将第一个方程和第二个方程的电场写成分量形式，为：
$$
\begin{cases}
    \frac{\partial E_x}{\partial x} + \frac{\partial E_y}{\partial y} + \frac{\partial E_z}{\partial z} = 0 \\
    \left|
    \begin{array}{ccc}
    \vec{i} & \vec{j} & \vec{k} \\
    \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
    E_x & E_y & E_z
    \end{array}
    \right|
    = -\kappa_m \mu_0 \left( \frac{\partial H_x}{\partial t} \vec{i} + \frac{\partial H_y}{\partial t} \vec{j} + \frac{\partial H_z}{\partial t} \vec{k} \right)
\end{cases}
$$

将第一个方程和第二个方程的磁场写成分量形式，为：
$$
\begin{cases}
    \frac{\partial H_x}{\partial x} + \frac{\partial H_y}{\partial y} + \frac{\partial H_z}{\partial z} = 0 \\
    \left|
    \begin{array}{ccc}
    \vec{i} & \vec{j} & \vec{k} \\
    \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
    H_x & H_y & H_z
    \end{array}
    \right|
    = \kappa_e \varepsilon_0 \left( \frac{\partial E_x}{\partial t} \vec{i} + \frac{\partial E_y}{\partial t} \vec{j} + \frac{\partial E_z}{\partial t} \vec{k} \right)
\end{cases}
$$

平面波是指电磁波在空间传播时，在任意与传播方向垂直的平面上，其相位（$\varphi$）处处相等。即波面上所有点的相位一致。假设电磁波沿$+z$轴传播，波矢$\vec{k}$指向$z$轴。为简化推导，电场$\vec{E}$和磁场$\vec{H}$仅依赖于$z$和$t$，与$x$、$y$无关（即$\vec{E}$、$\vec{H}$在整个波面上分布均匀）。如图，蓝色箭头表示电场（$\vec{E}$），沿$x$方向。红色箭头表示磁场（$\vec{H}$），沿$y$方向，黑色箭头表示传播方向（$\vec{k}$，沿$z$轴），波面是垂直于$\vec{k}$的平面，在图中为黑色平面：

![image-20251126111116456](https://laoguantx.top/article/物理/普通物理学/电磁波/image-20251126111116456.png)

平面波条件下的麦克斯韦方程分量表达式，包括：

1. 电场的散度方程

$$
\frac{\partial E_x}{\partial x} + \frac{\partial E_y}{\partial y} + \frac{\partial E_z}{\partial z} = 0
$$

2. 电场的旋度方程（各分量）

$$
\begin{aligned}
\frac{\partial E_z}{\partial y} - \frac{\partial E_y}{\partial z} &= -\kappa_m \mu_0 \frac{\partial H_x}{\partial t}\\
\frac{\partial E_x}{\partial z} - \frac{\partial E_z}{\partial x} &= -\kappa_m \mu_0 \frac{\partial H_y}{\partial t}\\
\frac{\partial E_y}{\partial x} - \frac{\partial E_x}{\partial y} &= -\kappa_m \mu_0 \frac{\partial H_z}{\partial t}
\end{aligned}
$$

3. 磁场的散度方程

$$
\frac{\partial H_x}{\partial x} + \frac{\partial H_y}{\partial y} + \frac{\partial H_z}{\partial z} = 0
$$

4. 磁场的旋度方程（各分量）

$$
\begin{aligned}
\frac{\partial H_z}{\partial y} - \frac{\partial H_y}{\partial z} &= \kappa_e \varepsilon_0 \frac{\partial E_x}{\partial t}\\
\frac{\partial H_x}{\partial z} - \frac{\partial H_z}{\partial x} &= \kappa_e \varepsilon_0 \frac{\partial E_y}{\partial t}\\
\frac{\partial H_y}{\partial x} - \frac{\partial H_x}{\partial y} &= \kappa_e \varepsilon_0 \frac{\partial E_z}{\partial t}
\end{aligned}
$$

由于平面波假设$\vec{E}$和$\vec{H}$仅依赖于$z$和$t$，所以所有关于$x$和$y$的导数都为零：

$$
\frac{\partial}{\partial x} = 0, \qquad \frac{\partial}{\partial y} = 0
$$

上述各式可以进一步简化为只含$z$和$t$的偏导数。电场散度方程变为：

$$
\frac{\partial E_z}{\partial z} = 0
$$
磁场散度方程变为：

$$
\frac{\partial H_z}{\partial z} = 0
$$
同时，根据电场和磁场的旋度方程，还可以得到：
$$
\frac{\partial H_z}{\partial t}=0,\frac{\partial E_z}{\partial t}=0
$$
说明$E_z,H_z$在$z$方向上为常数，且不随时间变化，而通常可取$E_z=0,H_z=0$，即电场和磁场在传播方向上没有分量。即：
$$
\vec{E}\perp\vec{k},\vec{H}\perp\vec{k}
$$
电场旋度分量可以进行化简：
$$
\frac{\partial E_x}{\partial z} = -\kappa_m \mu_0 \frac{\partial H_y}{\partial t}
$$

$$
\frac{\partial E_y}{\partial z} = \kappa_m \mu_0 \frac{\partial H_x}{\partial t}
$$

磁场旋度分量化简为：
$$
\frac{\partial H_x}{\partial z} = \kappa_e \varepsilon_0 \frac{\partial E_y}{\partial t}
$$

$$
\frac{\partial H_y}{\partial z} = -\kappa_e \varepsilon_0 \frac{\partial E_x}{\partial t}
$$

这里不妨设电场$\vec{E}$与$x$轴平行，$E_x\neq 0,E_y=0$，那么可以得到：
$$
\frac{\partial H_x}{\partial t}=0
$$

$$
\frac{\partial H_x}{\partial z}=0
$$

说明在这种假设情况下，$H_x$是常数，故磁场强度在$x$轴方向上的分量零，故：
$$
\vec{E}\perp\vec{H}
$$
将方程：
$$
\frac{\partial E_x}{\partial z} = -\kappa_m \mu_0 \frac{\partial H_y}{\partial t}
$$
两边对$z$求导，得到：
$$
\frac{\partial^2E_x}{\partial z^2}=-\kappa_m\mu_0\frac{\partial}{\partial t}\cdot\frac{\partial H_y}{\partial z}=\kappa_m\mu_0\kappa_e\varepsilon_0\frac{\partial^2E_x}{\partial t^2}
$$
即：
$$
\frac{\partial^2E_x}{\partial z^2}-K_eE_0K_m\mu_0\frac{\partial^2E_x}{\partial t^2}=0
$$
同理，对于磁场：
$$
\frac{\partial^2H_y}{\partial z^2}-K_e\varepsilon_0K_m\mu_0\frac{\partial^2H_y}{\partial t^2}=0
$$
根据数学物理方法相关知识，解得波动方程的常规解：
$$
\left\{
\begin{aligned}
    E_x &= E_{x0} e^{i(\omega t - kz)} \\
    H_y &= H_{y0} e^{i(\omega t - kz)}
\end{aligned}
\right.
$$

这里，$E_{x0}$、$H_{y0}$为振幅，$\omega$为角频率（$2\pi$倍于频率$f$），$k$为波数，决定空间周期。将解带入波动方程，得到：
$$
k^2 = \kappa_e \varepsilon_0 \kappa_m \mu_0 \omega^2
$$

即

$$
k = \sqrt{\kappa_e \varepsilon_0 \kappa_m \mu_0} \ \omega
$$

波相位为 $\omega t - kz = \text{constant}$。对上式取全微分：

$$
\omega \mathrm{d}t - k \mathrm{d}z = 0 \implies \frac{\mathrm{d}z}{\mathrm{d}t} = \frac{\omega}{k}
$$

定义波速 $v$：

$$
v = \frac{\mathrm{d}z}{\mathrm{d}t} = \frac{\omega}{k} = \frac{1}{\sqrt{\kappa_e \varepsilon_0 \kappa_m \mu_0}}
$$

对于真空，波速即：

$$
v = c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}} \approx 3 \times 10^8 \; \mathrm{m/s}
$$

这就是光在真空中的速度。再次回到方程的常规解，取
$$
\left\{
\begin{aligned}
E_x &= E_{x0} e^{i(\omega t - kz)} \\
H_y &= H_{y0} e^{i(\omega t - kz)}
\end{aligned}
\right.
$$

方程右边分别对$z$和$t$求导：

$$
\frac{\partial}{\partial z} e^{i(\omega t - kz)} = -ik e^{i(\omega t - kz)}
$$

$$
\frac{\partial}{\partial t} e^{i(\omega t - kz)} = i\omega e^{i(\omega t - kz)}
$$

带入第一个方程：

$$
\frac{\partial E_x}{\partial z} = -ik E_{x0} e^{i(\omega t - kz)} \\
-\kappa_m \mu_0 \frac{\partial H_y}{\partial t} = -\kappa_m \mu_0 i \omega H_{y0} e^{i(\omega t - kz)}
$$

所以
$$
-ik E_{x0} e^{i(\omega t - kz)} = -\kappa_m \mu_0 i \omega H_{y0} e^{i(\omega t - kz)}
$$

消去公因子，移项：

$$
k E_{x0} = \kappa_m \mu_0 \omega H_{y0}
$$

联立波数与频率波速关系 $k = \omega / v$，得到：

$$
E_{x0} = \kappa_m \mu_0 v H_{y0}
$$

而波速 $v = \frac{1}{\sqrt{\kappa_e \varepsilon_0 \kappa_m \mu_0}}$，所以：

$$
E_{x0} = \kappa_m \mu_0 \cdot \frac{1}{\sqrt{\kappa_e \varepsilon_0 \kappa_m \mu_0}} H_{y0}
$$

即：

$$
E_{x0} = \frac{\kappa_m \mu_0}{\sqrt{\kappa_e \varepsilon_0 \kappa_m \mu_0}} H_{y0}
$$

化简，得到：
$$
\sqrt{\kappa_e \varepsilon_0} E_{x0} = \sqrt{\kappa_m \mu_0} H_{y0}
$$

由上面的解形式，$E_x$和$H_y$的相位相同（$e^{i(\omega t - kz)}$），即：

$$
\varphi_E = \varphi_H
$$

更一般地，可以写成：

$$
\sqrt{\kappa_e \varepsilon_0} E_0 = \sqrt{\kappa_m \mu_0} H_0
$$

如果考虑相位，则：

$$
\sqrt{\kappa_e \varepsilon_0} E_0 e^{i\varphi_E} = \sqrt{\kappa_m \mu_0} H_0 e^{i\varphi_H}
$$

在真空中，结果为：

$$
  \sqrt{\varepsilon_0} E_0 = \sqrt{\mu_0} H_0
$$
进一步，$E_0 = \mu_0 H_0 / \sqrt{\varepsilon_0 \mu_0} = c B_0$
$$
  E_0 = c B_0
$$
或反过来，
$$
  B_0 = \frac{E_0}{c}
$$

于是，我们通过了麦克斯韦方程组求得了所有的电磁波的性质。

## 五、电磁波的能量

### 1. 电磁场的能量密度及总能量

在空间 $V$ 内，电磁场的总能量 $U$ 是电场和磁场能量的总和，可以表达为：

$$
U = \iiint \left( \frac{1}{2} \varepsilon_0 E^2 + \frac{1}{2} \frac{B^2}{\mu_0} \right) \mathrm{d}v
$$

其中，$E$ 是电场强度，$B$ 是磁感应强度，$\varepsilon_0$ 是真空介电常数，$\mu_0$ 是真空磁导率，$\mathrm{d}v$是体积分微元

在更一般的情况下，介质并非真空，需用电位移矢量 $\vec{D}$ 和磁感应强度 $\vec{B}$ 及磁场强度 $\vec{H}$ 来表示能量：

$$
U = U_E + U_B = \iiint \left( \frac{1}{2} \vec{D} \cdot \vec{E} + \frac{1}{2} \vec{B} \cdot \vec{H} \right) \mathrm{d}v
$$

其中，$\vec{D}$ 是电位移矢量，$\vec{E}$ 是电场强度，$\vec{B}$ 是磁感应强度，$\vec{H}$ 是磁场强度。在各向同性线性介质中，有如下关系：
$$
\vec{D} = \kappa_e \varepsilon_0 \vec{E}
$$
$$
\vec{B} = \kappa_m \mu_0 \vec{H}
$$
其中 $\kappa_e, \kappa_m$ 是相对介电常数和磁导率。

在非稳态（即电场 $\vec{E}(t)$、磁场 $\vec{H}(t)$ 随时间变化）时，电磁场能量随时间变化电磁场的总能量为：
$$
U = \iiint \left( \frac{1}{2} \vec{D} \cdot \vec{E} + \frac{1}{2} \vec{B} \cdot \vec{H} \right) \mathrm{d}v
$$

### 2、波印廷矢量与电磁波能量转换

对时间求导，得到能量变化率：
$$
\begin{aligned}\frac{\mathrm{d}U}{\mathrm{d}t} &= \frac{\mathrm{d}}{\mathrm{d}t} \iiint \left( \frac{1}{2} \vec{D} \cdot \vec{E} + \frac{1}{2} \vec{B} \cdot \vec{H} \right) \mathrm{d}v\\&= \frac{1}{2} \iiint \frac{\partial}{\partial t} \left( \vec{D} \cdot \vec{E} + \vec{B} \cdot \vec{H} \right) \mathrm{d}v\end{aligned}
$$
对 $\vec{D} \cdot \vec{E} + \vec{B} \cdot \vec{H}$ 求时间导数，若 $\vec{D} = \kappa_e \varepsilon_0 \vec{E}$，$\vec{B} = \kappa_m \mu_0 \vec{H}$，则：

$$
\begin{aligned}\frac{\partial}{\partial t} (\vec{D} \cdot \vec{E} + \vec{B} \cdot \vec{H}) &= \kappa_e \varepsilon_0 \frac{\partial}{\partial t} (\vec{E} \cdot \vec{E}) + \kappa_m \mu_0 \frac{\partial}{\partial t} (\vec{H} \cdot \vec{H})\\&= 2 \kappa_e \varepsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t} + 2 \kappa_m \mu_0 \vec{H} \cdot \frac{\partial \vec{H}}{\partial t}\end{aligned}
$$
一般写为：
$$
= 2 \vec{E} \cdot \frac{\partial \vec{D}}{\partial t} + 2 \vec{H} \cdot \frac{\partial \vec{B}}{\partial t}
$$

麦克斯韦方程组给出：
$$
\frac{\partial \vec{D}}{\partial t} = \nabla \times \vec{H} - \vec{j}_0
$$
$$
\frac{\partial \vec{B}}{\partial t} = -\nabla \times \vec{E}
$$

带入能量变化率公式：
$$
\begin{aligned}\frac{\mathrm{d}U}{\mathrm{d}t}&= \iiint \left( \vec{E} \cdot (\nabla \times \vec{H} - \vec{j}_0) + \vec{H} \cdot (-\nabla \times \vec{E}) \right) \mathrm{d}v\\&= \iiint [\vec{E} \cdot (\nabla \times \vec{H}) - \vec{H} \cdot (\nabla \times \vec{E}) - \vec{j}_0 \cdot \vec{E}] \mathrm{d}v\end{aligned}
$$
根据矢量恒等式：
$$
\vec{E} \cdot (\nabla \times \vec{H}) - \vec{H} \cdot (\nabla \times \vec{E}) = \nabla \cdot (\vec{E} \times \vec{H})
$$

所以：
$$
\frac{\mathrm{d}U}{\mathrm{d}t} = \iiint \left[ \nabla \cdot (\vec{E} \times \vec{H}) - \vec{j}_0 \cdot \vec{E} \right] \mathrm{d}v
$$

将体积分换成闭合曲面积分（高斯定理）：
$$
\iiint \nabla \cdot (\vec{E} \times \vec{H}) \mathrm{d}v = {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} (\vec{E} \times \vec{H}) \cdot \mathrm{d}\vec{A}
$$

最终能量变化率表达为：
$$
\frac{\mathrm{d}U}{\mathrm{d}t} = {\int\kern{-8pt}\int \kern{-23mu} \bigcirc} (\vec{E} \times \vec{H}) \cdot \mathrm{d}\vec{A} - \iiint (\vec{j}_0 \cdot \vec{E}) \mathrm{d}v
$$

第一项中的$\vec{S} = \vec{E} \times \vec{H}$为波印廷矢量，$\vec{S}$ 的方向表示电磁能量流动的方向，即电磁能量在空间中传播的方向。$\vec{S}$ 的模表示单位面积单位时间通过某点的电磁能量（即能量通量密度，单位：$\mathrm{W}/\mathrm{m}^2$）。其中第二项 $\iiint (\vec{j}_0 \cdot \vec{E}) \mathrm{d}v$​ 表示电流在电场中做的功（单位时间内），即能量的“消耗”或转化。欧姆定律的一般形式：

$$
\vec{j}_0 = \sigma (\vec{E} + \vec{K})
$$

其中：$\vec{j}_0$为自由电流密度，$\sigma$为电导率，$\vec{E}$为电场强度，$\vec{K}$为非电场驱动力（如化学或源极化场，代表电源的作用）由此可得：
$$
\vec{E} = \frac{1}{\sigma} \vec{j}_0 - \vec{K}
$$

或

$$
\vec{E} = \rho \vec{j}_0 - \vec{K}
$$

其中 $\rho = 1/\sigma$ 为电阻率。

![image-20251201102239432](https://laoguantx.top/article/物理/普通物理学/电磁波/image-20251201102239432.png)

假设电流通过一个横截面积为 $\Delta A$、长度为 $\Delta l$ 的导体（如图红色部分），体积为 $\Delta A \cdot \Delta l$，则：

$$
\iiint (\vec{j}_0 \cdot \vec{E}) \mathrm{d}v = (\vec{j}_0 \cdot \vec{E}) \Delta A \cdot \Delta l
$$

带入上一节表达式：

$$
= \vec{j}_0 \cdot (\rho \vec{j}_0 - \vec{K}) \Delta A \cdot \Delta l
= \rho j_0^2 \Delta A \cdot \Delta l - \vec{j}_0 \cdot \vec{K} \Delta A \cdot \Delta l
$$

进一步整理：

$$
= \frac{\Delta l}{\Delta A} (j_0 \Delta A)^2 - (j_0 \Delta A) (\vec{K} \cdot \Delta \vec{l})
$$

其中 $(j_0 \Delta A)$ 就是总电流 $i_0$，所以：

$$
= R i_0^2 - i_0 \Delta \varepsilon
$$

$R$ 是导体的电阻，$\Delta \varepsilon$ 是电源的电动势。第一项 $R i_0^2$：单位时间内由于电阻导致的焦耳热损耗（欧姆热），第二项 $i_0 \Delta \varepsilon$：电源在单位时间内对电流所做的功（提供的能量）因此：
$$
\iiint (\vec{j}_0 \cdot \vec{E}) \mathrm{d}v = Q - P
$$

$Q$表示单位时间内的焦耳热（能量损耗），$P$表示单位时间内电源所做的功（能量输入）。

### 3、真空波阻抗

电磁波的能量传播方向由坡印廷矢量 $\vec{S}$ 给出：
$$
\vec{S} = \vec{E} \times \vec{H}
$$

对于自由空间（真空）：

$$
\vec{H} = \frac{\vec{B}}{\mu_0}
$$

因此：

$$
\vec{S} = \vec{E} \times \vec{H} = \vec{E} \times \frac{\vec{B}}{\mu_0}
$$

对于平面波（电场与磁场正交且大小恒定），电场和磁场的振幅分别为 $E$ 和 $B$，则：

$$
S = \frac{E B}{\mu_0}
$$

又因电磁波中 $E = c B$，且 $c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}$，故：

$$
S = \frac{E (E/c)}{\mu_0} = \frac{E^2}{\mu_0 c}
$$

定义真空波阻抗 $Z_0$：

$$
Z_0 = \mu_0 c = 377\,\Omega
$$

则坡印廷矢量的大小可以简化为：

$$
S = \frac{E^2}{Z_0} = \frac{E^2}{377\,\Omega}
$$

### 4、电磁波强度

强度 $I$ 是坡印廷矢量的时间与空间平均值：
$$
I = \langle S \rangle = \frac{\langle E^2 \rangle}{Z_0}
$$

对于简谐（正弦）波，电场可写为 $E = E_{\max} \sin(kz - \omega t)$，所以：

$$
\langle E^2 \rangle = E_{\max}^2 \langle \sin^2(kz - \omega t) \rangle = \frac{E_{\max}^2}{2}
$$

故

$$
I = \frac{E_{\max}^2}{2 Z_0} = \frac{1}{2} \frac{E_{\max}^2}{377\,\Omega}
$$

单位为 $\mathrm{W}/\mathrm{m}^2$。

### 5、电磁波能量密度

电场的能量密度为：
$$
u_E=\frac{1}{2}\varepsilon E^2
$$
磁场的能量密度：
$$
u_b=\frac{1}{2}\frac{B}{\mu_0}
$$
结合$B=\frac{E}{c}$，则每一时刻的能量密度：
$$
u=u_E+u_B=\varepsilon_0 E^2
$$
通常规定能量密度为上式的平均值，即：
$$
\langle u\rangle=\frac{\varepsilon_0E_{\max}^2}{2}=\varepsilon_0E_{\mathrm{rms}}^2
$$
其中$E_{\mathrm{rms}}$为$E$的均方根，大小为$\frac{E_{\max}}{\sqrt2}$。那么电磁波强度为：
$$
I=\frac{E^2_{\mathrm{rms}}}{Z_0}
$$

## 六、直流回路中的电磁波能量

虽然坡印廷矢量 $\vec{S} = \vec{E} \times \vec{H}$ 最早用于分析电磁波能量流，但它同样适用于静态（稳恒）场，比如直流电路。

![image-20251201104030158](https://laoguantx.top/article/物理/普通物理学/电磁波/image-20251201104030158.png)

通常我们认为，电流沿导线内部流动，能量“跟着电流走”，从电源流向负载（电阻）。但电磁场理论告诉我们，能量其实是通过导线外部的电磁场，以坡印廷矢量的方向流动，从电源传输到电阻。具体来看，在导线附近，$\vec{E}$ 沿导线方向，$\vec{H}$环绕导线（如右手定则），$\vec{S}$ 则指向导线内部（从空间进入导线）。沿整个回路，能量从电源附近空间流出，沿着导线外部空间，到达电阻附近，再流入电阻内部，被消耗。

![image-20251201104232863](https://laoguantx.top/article/物理/普通物理学/电磁波/image-20251201104232863.png)

## 七、电磁波的动量

电磁波传播时，除了能量流（坡印廷矢量 $\vec{S}$），还会将线性动量传递给遇到的物体。例如电磁波照射金属板时，会对其施加压力和力。

![image-20251201105217331](https://laoguantx.top/article/物理/普通物理学/电磁波/image-20251201105217331.png)

如图$\vec{j}_0 = \sigma \vec{E}$ 表示金属板表面感应电流密度，$\vec{f}_L = -e \vec{v} \times \vec{B} = -\mu_0 e \vec{v} \times \vec{H}$ 表示洛伦兹力，电磁波使电子受力，从而金属板整体受到力。设 $\Delta A$ 为金属板面积，$\Delta t$ 时间内入射和反射的坡印廷矢量分别为 $\vec{S}_{in}$ 和 $\vec{S}_{ref}$。电磁波携带的动量流为 $\vec{S}/c$。所以，金属板所受的总冲量为：
$$
\Delta \vec{F} \cdot c \Delta t = (\vec{S}_{in} - \vec{S}_{ref}) \Delta A \cdot \Delta t
$$

即：

$$
\Delta \vec{F} = \frac{1}{c} (\vec{S}_{in} - \vec{S}_{ref}) \Delta A
$$

其中，$\Delta \vec{F}$表示单位时间内表面受到的力变化（光压力）。辐射压力定义为单位面积上的平均力：

$$
P = \frac{|\Delta \vec{F}|}{\Delta A} = \frac{1}{c} (|\vec{S}_{in}| + |\vec{S}_{ref}|)
$$

如果完全吸收，则$\vec{S}_{ref} = 0$，$P = \frac{|\vec{S}_{in}|}{c}$；如果完全反射，$\vec{S}_{ref} = |\vec{S}_{in}|$，则：$P = \frac{2|\vec{S}_{in}|}{c}$。

板获得的动量变化为：

$$
\Delta \vec{G}_P = \Delta \vec{F} \cdot \Delta t = \frac{1}{c} (\vec{S}_{in} - \vec{S}_{out}) \Delta A \cdot \Delta t
$$

$\Delta \vec{G}_P$表示金属板的动量变化量（电磁波损失的动量）。电磁波失去的动量（即板获得的动量）：
$$
\Delta \vec{G} = -\Delta \vec{G}_P = -\Delta \vec{F} \cdot \Delta t = \frac{1}{c} (\vec{S}_{out} - \vec{S}_{in}) \Delta A \cdot \Delta t
$$

电磁波在 $\Delta t$ 内覆盖的空间体积：

$$
\Delta V = \Delta A \cdot c \Delta t
$$

入射波动量密度：

$$
\vec{g}_{in} = \frac{\vec{S}_{in}}{c^2}
$$
反射波动量密度：

$$
\vec{g}_{out} = \frac{\vec{S}_{out}}{c^2}
$$
动量密度的变化：

$$
\Delta \vec{g} = \frac{\Delta \vec{G}}{\Delta V} = \frac{1}{c} (\vec{S}_{out} - \vec{S}_{in}) \frac{\Delta A \cdot \Delta t}{\Delta A \cdot c \Delta t}
$$

简化得：

$$
\Delta \vec{g} = \frac{1}{c^2} (\vec{S}_{out} - \vec{S}_{in})
$$

于是得到电磁场的动量密度（任意时刻）：

$$
\vec{g} = \frac{1}{c^2} \vec{S} = \frac{1}{c^2} (\vec{E} \times \vec{H})
$$

