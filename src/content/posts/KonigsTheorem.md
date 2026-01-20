---
title: 柯尼希定理 (König&#039;s Theorem)
published: 2025-05-09
category: ["物理", "普通物理学"]
tags: ["动力学"]
alias: "konigstheorem"
---
### 1、定理内容

刚体系统的总动能$K$等于质心平动能$\frac{1}{2}Mv_{cm}^2$与各质点相对质心的动能$K'$之和：
$$
K = \frac{1}{2}Mv_{cm}^2 + K'
$$

### 2、证明过程

1. **坐标系设定**：
   - 实验室系：$\vec{r}_i$
   - 质心系：$\vec{r}_i = \vec{r}_{cm} + \vec{r}_i'$

2. **速度关系**：
   $$
   \vec{v}_i = \vec{v}_{cm} + \vec{v}_i'
   $$

3. **总动能表达式**：
   $$
   \begin{align*}
   K &= \sum \frac{1}{2}m_i v_i^2 = \sum \frac{1}{2}m_i (\vec{v}_{cm} + \vec{v}_i') \cdot (\vec{v}_{cm} + \vec{v}_i') \\
     &= \frac{1}{2} \sum m_i v_{cm}^2 + \sum m_i \vec{v}_{cm} \cdot \vec{v}_i' + \frac{1}{2} \sum m_i v_i'^2
   \end{align*}
   $$

4. **简化中间项**：
   $$
   \sum m_i \vec{v}_i' = 0 \quad \text{(质心系中总动量为零)}
   $$

5. **最终结果**：
   $$
   K = \frac{1}{2}Mv_{cm}^2 + \sum \frac{1}{2}m_i v_i'^2
   $$

6. **公式变形**：

   由于 $I=\sum m_i r_i'^2,v_i'=\omega r_i'$，得：
   $$
   K=\frac{1}{2}Mv_{cm}^2 + \sum \frac{1}{2}m_i v_i'^2=\frac{1}{2}Mv_{cm}^2+\frac{1}{2}I\omega^2
   $$
   

## 二、结合平行轴定理的柯尼希定理

1. **相对质心的动能**：
   $$
   K' = \sum \frac{1}{2}m_i v_i'^2 = \frac{1}{2}\omega^2 \sum m_i r_i'^2 = \frac{1}{2}I_{cm}\omega^2
   $$

2. **平行轴定理应用**：
   若绕任意点$P$转动，转动惯量$I_P = I_{cm} + Md^2$，则：
   $$
   \begin{align*}
   K &= \frac{1}{2}Mv_{cm}^2 + \frac{1}{2}(I_P - Md^2)\omega^2 \\
     &= \frac{1}{2}M(v_{cm}^2 - d^2\omega^2) + \frac{1}{2}I_P\omega^2
   \end{align*}
   $$

3. **特殊情形**：
   - 当$P$为瞬时转动中心时（$v_{cm} = d\omega$）：
   $$
   K = \frac{1}{2}I_P\omega^2
   $$

---

## 关键点对比

| 定理形式             | 表达式                                                       | 物理意义                       |
| -------------------- | ------------------------------------------------------------ | ------------------------------ |
| 基本柯尼希定理       | $K = \frac{1}{2}Mv_{cm}^2 + K'$                              | 分离质心运动与相对运动         |
| 含转动能的柯尼希定理 | $K = \frac{1}{2}Mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$       | 显式包含转动自由度             |
| 结合平行轴定理的形式 | $K = \frac{1}{2}M(v_{cm}^2 - d^2\omega^2) + \frac{1}{2}I_P\omega^2$ | 适用于任意参考点的转动惯量计算 |

**典型应用场景**：
1. 滚动圆柱体的动能分析
2. 刚体碰撞过程中的能量计算
3. 多体系统动力学问题
