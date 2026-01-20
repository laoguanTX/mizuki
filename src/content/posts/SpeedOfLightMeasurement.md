---
title: 光调制法测量光速
published: 2025-09-16
category: ["物理", "实验"]
tags: ["大学物理实验"]
alias: "speedoflightmeasurement"
---

## 一、实验原理概述

本实验采用**调制法**测量光速。利用周期性调制的光信号，通过接收端与参考信号的时间延迟或相位差，结合信号传播路径的已知长度，精确计算光速 $c$。

一个强度依赖时间变化的周期性光信号满足：
$$
I = I_0 + \Delta I_0 \cos(2\pi \nu t)
$$
其中：
- $I_0$：平均光强
- $\Delta I_0$：光强调制度
- $\nu$：光信号调制频率
- $t$：时间

将光信号转换为电学电压信号，记为：
$$
U = A \cos(2\pi \nu t)
$$
其中 $A$ 代表电压信号幅值。

## 二、光速的测量与计算过程

假设接收器距离光源 $\Delta s$，光速为 $c$，则信号传播时间延迟为：
$$
\Delta t = \frac{\Delta s}{c}
$$

参考电信号信号（与光的发射端除光信号对应）：
$$
U_1 = U_1 \cos(2\pi \nu t)
$$

接收信号（经过距离 $L$ 后的测量结果）：
$$
U_2 = U_2 \cos\left[2\pi \nu (t - \Delta t)\right]
$$

化简后，得到：
$$
U_2 = U_2 \cos\left(2\pi \nu t - 2\pi \nu \Delta t\right)
$$

两信号之间的相位差为：
$$
\Delta \varphi = 2\pi \nu \Delta t = 2\pi \nu \frac{L}{c}
$$

由此可解得光速 $c$：
$$
c = \frac{2\pi \nu \Delta s}{\Delta \varphi}
$$

当调制信号频率非常高时，即使很短的路径变化 $\Delta s$ 也能引起明显的相位变化，便于观测。例如，实验中调制信号频率 $\nu$ 取 $100\,\mathrm{MHz}$，假定光速 $c=3 \times 10^8\,\mathrm{m/s}$，则
$$
\lambda = \frac{c}{\nu} = \frac{3 \times 10^8}{1 \times 10^8} = 3\,\mathrm{m}
$$
即 $\Delta s = 3\,\mathrm{m}$ 时，相位将变化 $2\pi$，与一个周期的相位变化一致。

由于普通示波器无法直接分辨接收信号与参考信号的微小相位差，实验采用差频法。将接收信号与一个频率略低的信号（例如 $99.545\,\mathrm{MHz}$）混频，经过解调、滤波，输出信号即为两输入信号的差频分量。

调制信号混频后的输出信号：
$$
U = A' \cos\left[2\pi \nu t - \Delta\varphi \right] \cdot \cos\left(2\pi \nu' t\right)
$$
利用三角恒等式
$$
\cos A \cos B = \frac{1}{2} \left[\cos(A+B) + \cos(A-B)\right]
$$
展开：
$$
U = \frac{A'}{2} \left\{ \cos\left[2\pi(\nu + \nu')t - \Delta\varphi\right] + \cos\left[2\pi(\nu - \nu')t - \Delta\varphi\right] \right\}
$$
高频信号成分可被低频滤波器滤去，只保留低频分量（差频信号）：
$$
U = A'' \cos\left[2\pi (\nu - \nu') t - \Delta\varphi \right]
$$
$\Delta\varphi$ 不随着混频而变化，但对应于接收信号在路径中多走一段 $\Delta s$ 产生的时间延迟 $\Delta t'$ 可以从示波器上读得。差频信号一个周期 $T'$，$T'$ 对应于调制信号的周期 $T$，有
$$
\Delta\varphi = 2\pi \cdot \frac{\Delta t'}{T'}
$$
而调制信号的周期 $T$ 与差频周期 $T'$ 的比值为 $\frac{T}{T'} = \frac{\nu'}{\nu-\nu'}$，因此光信号的实际传输时间 $\Delta t$ 为：
$$
\Delta t = \frac{\Delta t'}{T'} \cdot T = \frac{\Delta t'}{T'} \cdot \frac{1}{\nu}
$$
由于 $\Delta s = c \Delta t$，代入上式，得
$$
c = \frac{\Delta s}{\Delta t} = \frac{\Delta s}{\Delta t'} \cdot \frac{T'}{T}
$$
记 $T = \frac{1}{\nu}$，$T' = \frac{1}{\nu - \nu'}$，则
$$
c = \frac{\Delta s}{\Delta t'} \cdot \frac{\frac{1}{\nu - \nu'}}{\frac{1}{\nu}} = \frac{\Delta s}{\Delta t'} \cdot \frac{\nu}{\nu - \nu'}
$$