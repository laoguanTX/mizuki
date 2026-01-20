---
title: 不同情况下两列波叠加情况计算
published: 2025-06-03
category: ["物理", "普通物理学"]
tags: ["振动力学"]
alias: "calculationofwavesuperpositionindifferentcases"
---
设两列波的表达式均为：
$$
f_1(x,t) = A_1 \cos(k_1 x + \omega_1 t + \varphi_1)
$$
$$
f_2(x,t) = A_2 \cos(k_2 x + \omega_2 t + \varphi_2)
$$

常见叠加情况如下：

## 一、同频同波数同相位（完全相同的波）

$$
f(x,t) = f_1(x,t) + f_2(x,t)
= A_1 \cos(kx + \omega t + \varphi) + A_2 \cos(kx + \omega t + \varphi)
$$

直接合并：
$$
f(x,t) = (A_1 + A_2)\cos(kx + \omega t + \varphi)
$$

## 二、同频同波数，不同初相位

$$
f(x,t) = A_1 \cos(kx + \omega t + \varphi_1) + A_2 \cos(kx + \omega t + \varphi_2)
$$

利用余弦叠加公式：
$$
A_1 \cos\theta_1 + A_2 \cos\theta_2 = R \cos(\theta + \alpha)
$$

具体推导：

令
$$
\theta = kx + \omega t
$$

则
$$
f(x,t) = A_1 \cos(\theta + \varphi_1) + A_2 \cos(\theta + \varphi_2)
$$

利用复数表示（欧拉公式）：
$$
A_1 \cos(\theta + \varphi_1) + A_2 \cos(\theta + \varphi_2)
= \operatorname{Re}\left[ A_1 e^{i(\theta + \varphi_1)} + A_2 e^{i(\theta + \varphi_2)} \right]
$$

合并：
$$
= \operatorname{Re}\left[ (A_1 e^{i\varphi_1} + A_2 e^{i\varphi_2}) e^{i\theta} \right]
$$

设
$$
A_1 e^{i\varphi_1} + A_2 e^{i\varphi_2} = R e^{i\alpha}
$$

所以
$$
f(x,t) = R \cos(\theta + \alpha) = R \cos(kx + \omega t + \alpha)
$$

其中
$$
R = \sqrt{A_1^2 + A_2^2 + 2A_1A_2 \cos(\varphi_1 - \varphi_2)}
$$

$$
\tan\alpha = \frac{A_1 \sin\varphi_1 + A_2 \sin\varphi_2}{A_1 \cos\varphi_1 + A_2 \cos\varphi_2}
$$

## 三、同频同相位，不同波数（不同波长）

$$
f(x,t) = A_1 \cos(k_1 x + \omega t + \varphi) + A_2 \cos(k_2 x + \omega t + \varphi)
$$

此时不能直接合并为一个余弦，但可用和角公式写成：

利用
$$
\cos\alpha + \cos\beta = 2\cos\left(\frac{\alpha+\beta}{2}\right)\cos\left(\frac{\alpha-\beta}{2}\right)
$$

令$A_1 = A_2 = A$，$\varphi_1 = \varphi_2 = 0$，则
$$
f(x,t) = A \cos(k_1 x + \omega t) + A \cos(k_2 x + \omega t)
$$
$$
= 2A \cos\left(\frac{k_1 x + \omega t + k_2 x + \omega t}{2}\right)\cos\left(\frac{k_1 x + \omega t - (k_2 x + \omega t)}{2}\right)
$$
$$
= 2A \cos\left(\frac{(k_1 + k_2)x}{2} + \omega t\right)\cos\left(\frac{(k_1 - k_2)x}{2}\right)
$$

## 四、同波数同相位，不同频率（不同周期）

$$
f(x,t) = A_1 \cos(k x + \omega_1 t + \varphi) + A_2 \cos(k x + \omega_2 t + \varphi)
$$

类似方法：

$$
\cos\alpha + \cos\beta = 2\cos\left(\frac{\alpha+\beta}{2}\right)\cos\left(\frac{\alpha-\beta}{2}\right)
$$

设$A_1 = A_2 = A$，$\varphi_1 = \varphi_2 = 0$，则
$$
f(x,t) = A \cos(k x + \omega_1 t) + A \cos(k x + \omega_2 t)
$$
$$
= 2A \cos\left(k x + \frac{\omega_1 + \omega_2}{2} t\right) \cos\left(\frac{\omega_1 - \omega_2}{2} t\right)
$$

##  五、不同波数、不同频率（形成拍或更复杂干涉）

一般形式：
$$
f(x,t) = A_1 \cos(k_1 x + \omega_1 t + \varphi_1) + A_2 \cos(k_2 x + \omega_2 t + \varphi_2)
$$



无法简化为单一正弦函数。若$A_1 = A_2 = A$且$\varphi_1 = \varphi_2 = 0$，可用和角公式：

$$
f(x,t) = 2A \cos\left(\frac{(k_1 x + \omega_1 t) + (k_2 x + \omega_2 t)}{2}\right) \cos\left(\frac{(k_1 x + \omega_1 t) - (k_2 x + \omega_2 t)}{2}\right)
$$
$$
= 2A \cos\left(\frac{(k_1 + k_2)x + (\omega_1 + \omega_2)t}{2}\right) \cos\left(\frac{(k_1 - k_2)x + (\omega_1 - \omega_2)t}{2}\right)
$$
