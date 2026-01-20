---
title: 变质量运动物体的动量守恒定律
published: 2025-03-09
category: ["物理", "普通物理学"]
tags: ["动力学"]
alias: "conservationofmomentumforvariablemassobjects"
---
我们考虑一个水平光滑轨道上运动的小车，初始质量为 $m$，速度为 $v$。小车在运动过程中不断加入沙子推导其动量守恒定律。

---

## 一、情景设定（无外力情况）
- **初始状态**：小车质量为 $m$，速度为 $v$。
- **微小时间 $\Delta t$ 内**：小车吸入质量为 $\Delta m$ ，速度为 $u$ 的沙子，速度变为 $v + \Delta v$。
- **系统总动量守恒**：吸入沙子前系统的总动量等于吸入后的总动量。

---

## 二、动量守恒分析
1. **初始动量**：  
   小车动量：$mv$  
   沙子动量：$\Delta m \cdot u $  
   总初始动量：  
   $$
    P_{\text{初始}} = mv+u\Delta m
   $$
3. **吸入后的动量**：  
   小车质量变为 $m + \Delta m$，速度变为 $v + \Delta v$，总动量：  
   $$
    P_{\text{最终}} = (m + \Delta m)(v + \Delta v)
   $$
5. **动量守恒条件**：
   $$
   mv + u\Delta m = (m + \Delta m)(v + \Delta v)
   $$
   
---

## 三、推导过程
展开右侧并忽略高阶小量 $\Delta m \Delta v$：  
$$
\begin{aligned}
mv + u\Delta m&= mv + m \Delta v + \Delta m \cdot v + \Delta m \Delta v \\
u \Delta m &= m \Delta v + v \Delta m \\
m \Delta v &= (u-v) \Delta m  \\
m\Delta v &= v_{rel} \Delta m
\end{aligned}
$$

其中 $v_{rel}$ 表示相对速度。将等式两边除以 $\Delta t$，并取极限 $\Delta t \to 0$：  
$$
m \frac{\mathrm{d}v}{\mathrm{d}t} = -v_{rel} \frac{\mathrm{d}m}{\mathrm{d}t}
$$

整理原来的等式为微分方程：  
$$
\frac{\mathrm{d}v}{v-u} = -\frac{\mathrm{d}m}{m}
$$

若 $u$ 与 $v$ 无关，则通过积分得：  
$$
\ln (v-u) = -\ln m + C \quad \Rightarrow \quad v = \frac{k}{m}
$$

或者 $u = 0$ ，有：
$$
\ln v = -\ln m + C
$$
再或者当相对速度 $v_{rel}$ 一定时，变形后进行定积分：
$$
\int_{v_初}^{v_末}\mathrm{d}v=-(v-u) \int_{m_初}^{m_末}\frac{1}{m}\mathrm{d}m
$$

$$
\int_{v_初}^{v_末}\mathrm{d}v=-\omega \int_{m_初}^{m_末}\frac{1}{m}\mathrm{d}m
$$

最后得到**齐奥尔科夫斯基公式**，可以近似地估计火箭需要携带的推进剂的数量以及发动机参数对理想速度的影响：
$$
\Delta v=\omega \ln\frac{m_初}{m_末}
$$
其中，$\Delta v$为火箭速度增量，$\omega$ 为喷流相对于火箭的速度。

---

## 四、存在外力的情况

由于存在外力 $\sum F_{ext}$，根据动量定理：
$$
p=(m+\Delta m)(v+\Delta v)+\sum F_{ext} \Delta t
$$

运用动量守恒定律展开：
$$
Mv + u\Delta m= Mv + M \Delta v + \Delta m \cdot v + \Delta m \Delta v + \sum F_{ext} \Delta t
$$
使用相同方法化简：
$$
m\frac{\mathrm{d}v}{\mathrm{d}t}=\sum F_{ext}-v\frac{\mathrm{d}m}{\mathrm{d}t}
$$


---

## 五、结论
在无外力作用下，**变质量运动物体的动量守恒定律**为：  
$$
m(t)\frac{\mathrm{d}v}{\mathrm{d}t}=-v(t)\frac{\mathrm{d}m}{\mathrm{d}t}
$$

在有外力作用下，**变质量运动物体的动量守恒定律**为：  
$$
m\frac{\mathrm{d}v}{\mathrm{d}t}=\sum F_{ext}-v\frac{\mathrm{d}m}{\mathrm{d}t}
$$
