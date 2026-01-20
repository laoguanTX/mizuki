---
title: 抛体运动与圆周运动
published: 2025-02-25
category: ["物理", "普通物理学"]
tags: ["运动学"]
alias: "projectilemotionandcircularmotion"
---
## 一、抛体运动

### 1. 运动分解与受力分析
**假设条件**：忽略空气阻力，仅受重力 $\vec{F} = -mg\hat{j}$，初速度 $\vec{v}_0 = v_0 \cos\theta_0 \hat{i} + v_0 \sin\theta_0 \hat{j}$。

#### 牛顿第二定律
$$
\vec{a} = \frac{\vec{F}}{m} = -g\hat{j}
$$

### 2. 速度与位移公式推导
**水平方向（$x$ 轴）**：匀速运动  
- 速度：$v_x = v_0 \cos\theta_0$  
- 位移：  
$$
x(t) = v_0 \cos\theta_0 \cdot t
$$

**竖直方向（$y$ 轴）**：匀加速运动  
- 速度：  
$$
v_y(t) = v_0 \sin\theta_0 - gt
$$
- 位移：  
$$
y(t) = y_0 + v_0 \sin\theta_0 \cdot t - \frac{1}{2}gt^2
$$

### 3. 轨迹方程推导
消去时间 $t$，由 $t = \frac{x}{v_0 \cos\theta_0}$，代入 $y(t)$：  
$$
y = y_0 + \tan\theta_0 \cdot x - \frac{g}{2(v_0 \cos\theta_0)^2} x^2
$$

### 4. 水平射程公式推导
当抛体落地时 $y = y_0$，解方程：  
$$
0 = \tan\theta_0 \cdot R - \frac{gR^2}{2(v_0 \cos\theta_0)^2}
$$
解得：  
$$
R = \frac{v_0^2}{g} \sin2\theta_0
$$

## 二、圆周运动

### 1. 匀速圆周运动

#### 位置矢量参数化
质点绕圆心做半径为 $r$ 的圆周运动，角速度 $\omega$ 恒定：  
$$
\vec{r}(t) = r\cos(\omega t) \hat{i} + r\sin(\omega t) \hat{j}
$$

#### 速度矢量
对 $\vec{r}(t)$ 求导：  
$$
\vec{v}(t) = -r\omega \sin(\omega t) \hat{i} + r\omega \cos(\omega t) \hat{j}
$$
速度大小：  
$$
v = r\omega
$$
方向沿切向单位向量 $\hat{u}_\phi = -\sin(\omega t)\hat{i} + \cos(\omega t)\hat{j}$。

#### 向心加速度
对 $\vec{v}(t)$ 求导：  
$$
\vec{a}(t) = -r\omega^2 \cos(\omega t)\hat{i} - r\omega^2 \sin(\omega t)\hat{j} = -\omega^2 \vec{r}(t)
$$
表明加速度方向指向圆心，大小为：  
$$
a_c = \frac{v^2}{r} = r\omega^2
$$

---

### 2. 变速圆周运动

#### 总加速度分解
当角速度 $\omega(t)$ 随时间变化时，加速度包含：  
1. **法向加速度（向心加速度）**：由速度方向变化引起  
$$
a_n = \frac{v^2}{r} = r\omega^2
$$
2. **切向加速度**：由速度大小变化引起  
$$
a_t = \frac{\mathrm{d}v}{\mathrm{d}t} = r \frac{\mathrm{d}\omega}{\mathrm{d}t} = r\alpha
$$

#### 加速度矢量表达式
总加速度为法向和切向分量的矢量和：  
$$
\vec{a} = a_t \hat{u}_\phi + a_n (-\hat{u}_r) = r\alpha \hat{u}_\phi - r\omega^2 \hat{u}_r
$$

#### 推导过程
1. **参数化运动**  
   设角速度 $\omega(t)$ 随时间变化，角加速度 $\alpha = \dfrac{\mathrm{d}\omega}{\mathrm{d}t}$，位置矢量为：  
   $$
   \vec{r}(t) = r\cos\theta(t)\hat{i} + r\sin\theta(t)\hat{j}
   $$
   其中 $\theta(t) = \int \omega(t) dt + \theta_0$。

2. **速度矢量**  
   对 $\vec{r}(t)$ 求导：  
   $$
   \vec{v}(t) = -r\omega \sin\theta \hat{i} + r\omega \cos\theta \hat{j} + r \frac{\mathrm{d}\omega}{\mathrm{d}t} t \left(-\sin\theta \hat{i} + \cos\theta \hat{j}\right)
   $$
   第二项因 $\alpha \neq 0$ 产生切向加速度。

3. **加速度矢量**  
   对 $\vec{v}(t)$ 求导并化简：  
   $$
   \vec{a}(t) = -r\omega^2 \cos\theta \hat{i} - r\omega^2 \sin\theta \hat{j} + r\alpha \left(-\sin\theta \hat{i} + \cos\theta \hat{j}\right)
   $$
   分解为法向和切向分量：  
   $$
   \vec{a} = -\frac{v^2}{r} \hat{u}_r + \frac{\mathrm{d}v}{\mathrm{d}t} \hat{u}_\phi
   $$

---

注： 
- 抛体运动轨迹为抛物线，水平射程由初速度和角度决定。  
- 匀速圆周运动仅有向心加速度；变速圆周运动需同时考虑切向和法向加速度。  