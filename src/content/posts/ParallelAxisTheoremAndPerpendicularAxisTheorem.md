---
title: 平行轴定理与垂直轴定理
published: 2025-05-09
category: ["物理", "普通物理学"]
tags: ["动力学"]
alias: "parallelaxistheoremandperpendicularaxistheorem"
---
## 一、平行轴定理 (Parallel Axis Theorem)

### 1、定理内容
刚体关于任意轴的转动惯量$I$，等于关于通过质心的平行轴的转动惯量$I_{cm}$加上刚体质量$M$与两轴间距离$d$平方的乘积：
$$
I = I_{cm} + Md^2 
$$

### 2、证明过程

1. **坐标系设定**：
   - 设质心轴为$z'$轴，任意平行轴为$z$轴
   - 两轴间距$d$在$x$-$y$平面内，设$d$沿$x$方向

2. **转动惯量定义**：
   $$
   I_{cm} = \sum m_i (x_i'^2 + y_i'^2) 
   $$
   $$
   I = \sum m_i [(x_i' + d)^2 + y_i'^2] 
   $$

3. **展开计算**：
   $$
   \begin{align*}
   I &= \sum m_i [x_i'^2 + 2dx_i' + d^2 + y_i'^2] \\
     &= \sum m_i (x_i'^2 + y_i'^2) + 2d \sum m_i x_i' + d^2 \sum m_i
   \end{align*}
   $$

4. **简化表达式**：
   - 第一项为$I_{cm}$
   - 第二项$\sum m_i x_i' = 0$（质心坐标系性质）
   - 第三项$Md^2$

5. **最终结果**：
   $$
   I = I_{cm} + Md^2
   $$

## 二、垂直轴定理 (Perpendicular Axis Theorem)

### 1、定理内容
对薄平板刚体，绕垂直于平板$z$轴的转动惯量$I_z$等于绕平板内$x$轴和$y$轴转动惯量之和：
$$
I_z = I_x + I_y 
$$

### 2、证明过程

1. **薄板特性假设**：
   - 厚度可忽略，所有质量分布在$x-y$平面
   - $z$坐标恒为$0$

2. **转动惯量表达式**：
   $$
   \begin{align*}
   I_x &= \sum m_i y_i^2 \\
   I_y &= \sum m_i x_i^2 \\
   I_z &= \sum m_i (x_i^2 + y_i^2)
   \end{align*}
   $$

3. **直接相加验证**：
   $$
   I_x + I_y = \sum m_i y_i^2 + \sum m_i x_i^2 = \sum m_i (x_i^2 + y_i^2) = I_z
   $$

## 三、关键点总结

| 定理       | 适用条件 | 核心公式            |
| ---------- | -------- | ------------------- |
| 平行轴定理 | 任意刚体 | $I = I_{cm} + Md^2$ |
| 垂直轴定理 | 二维薄板 | $I_z = I_x + I_y$   |

**注意**：垂直轴定理仅适用于无限薄的平面刚体，三维物体不适用！