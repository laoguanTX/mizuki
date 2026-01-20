---
title: 曲线积分
published: 2025-05-16
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "lineintegral"
---
曲线积分是多元微积分中的重要内容，主要分为两类：**第一类曲线积分**（标量场曲线积分）和**第二类曲线积分**（向量场曲线积分）。下面详细介绍这两类积分的定义、意义、计算方法和常见性质。

## 一、第一类曲线积分（对弧长的积分）

### 1、定义

设$C$是空间中的一条光滑有向曲线，$f(x, y, z)$是定义在$C$上的一个标量函数。第一类曲线积分是指对$f$沿$C$的弧长$s$积分，记作：

$$
\int_C f(x, y, z) \, \mathrm{d}s
$$

其中，$\mathrm{d}s$表示曲线$C$上的弧长微元。

### 2、几何意义

$\mathrm{d}s$表示曲线$C$上一小段的长度，$f(x, y, z) \, \mathrm{d}s$可以理解为该小段上的“函数值乘以长度”，即类似于沿曲线“加权长度”的总和。

举例：

- $f(x, y, z) = 1$时，$\int_C \mathrm{d}s$就是曲线$C$的长度。
- $f(x, y, z)$表示密度，则积分表示沿曲线$C$的总质量。

### 3、计算公式（参数化法）

设曲线$C$由参数方程给出：

$$
\begin{cases}
x = x(t) \\
y = y(t) \\
z = z(t)
\end{cases}, \quad t \in [a,b]
$$

则有：

$$
\mathrm{d}s = \sqrt{\left(\frac{\mathrm{d}x}{\mathrm{d}t}\right)^2 + \left(\frac{\mathrm{d}y}{\mathrm{d}t}\right)^2 + \left(\frac{\mathrm{d}z}{\mathrm{d}t}\right)^2} \, \mathrm{d}t
$$

所以：

$$
\int_C f(x, y, z)\, \mathrm{d}s = \int_{a}^{b} f(x(t), y(t), z(t)) \sqrt{\left(\frac{\mathrm{d}x}{\mathrm{d}t}\right)^2 + \left(\frac{\mathrm{d}y}{\mathrm{d}t}\right)^2 + \left(\frac{\mathrm{d}z}{\mathrm{d}t}\right)^2} \, \mathrm{d}t
$$

对于平面曲线$z \equiv 0$，只需去掉$\frac{\mathrm{d}z}{\mathrm{d}t}$项。

## 二、第二类曲线积分（对坐标的积分）

### 1. 定义

设$\mathbf{F} = (P(x, y, z), Q(x, y, z), R(x, y, z))$是空间中的一个向量场，$C$是一条有向光滑曲线。第二类曲线积分是指对向量场在曲线上“切向分量”的积分，记作：

$$
\int_C \mathbf{F} \cdot \mathrm{d}\mathbf{r} = \int_C P\,\mathrm{d}x + Q\,\mathrm{d}y + R\,\mathrm{d}z
$$

其中，$\mathrm{d}\mathbf{r} = (\mathrm{d}x, \mathrm{d}y, \mathrm{d}z)$为曲线上微元位移向量。

### 2. 物理与几何意义

- $\mathbf{F}$表示力场，$\mathrm{d}\mathbf{r}$是位移微元，则积分表示力沿曲线$C$所做的总功。
- 积分的实质是沿曲线$C$，$\mathbf{F}$在切线方向的分量的积分和。

### 3. 计算公式（参数化法）

设曲线$C$由参数方程：

$$
\begin{cases}
x = x(t) \\
y = y(t) \\
z = z(t)
\end{cases},\quad t \in [a, b]
$$

则

$$
\mathrm{d}x = x'(t) \mathrm{d}t,\quad \mathrm{d}y = y'(t) \mathrm{d}t, \quad \mathrm{d}z = z'(t) \mathrm{d}t
$$

因此：

$$
\int_C P\,\mathrm{d}x + Q\,\mathrm{d}y + R\,\mathrm{d}z = \int_{a}^{b} \Big[ P(x(t), y(t), z(t)) x'(t) + Q(x(t), y(t), z(t)) y'(t) + R(x(t), y(t), z(t)) z'(t) \Big] \mathrm{d}t
$$

或者：

$$
\int_C \mathbf{F} \cdot \mathrm{d}\mathbf{r} = \int_{a}^{b} \mathbf{F}(x(t), y(t), z(t)) \cdot \mathbf{r}'(t) \, \mathrm{d}t
$$

其中$\mathbf{r}'(t) = (x'(t), y'(t), z'(t))$。

## 三、两类曲线积分的联系与区别

|           第一类曲线积分           |                        第二类曲线积分                        |
| :--------------------------------: | :----------------------------------------------------------: |
|         对标量场沿曲线积分         |                 对向量场沿曲线的切向分量积分                 |
|   形式：$\int_C f\,\mathrm{d}s$    | 形式：$\int_C \mathbf{F} \cdot \mathrm{d}\mathbf{r}$ 或 $\int_C P\,\mathrm{d}x + Q\,\mathrm{d}y + R\,\mathrm{d}z$ |
|      $\mathrm{d}s$是弧长微元       |      $\mathrm{d}x, \mathrm{d}y, \mathrm{d}z$是坐标增量       |
| 结果与曲线方向无关（若$f \geq 0$） |                      结果与曲线方向有关                      |
|      几何意义：类似“加权长度”      |                    几何意义：力沿曲线做功                    |

## 四、常见性质

### 1、第一类曲线积分的性质

- 对于分段光滑曲线，可以分段计算再相加。
- 与曲线方向无关。

### 2、第二类曲线积分的性质

- 与曲线方向有关，若反向，积分取负。
- 若向量场为保守场（即存在势函数$\varphi$，$\mathbf{F} = \nabla \varphi$），则积分只与起点终点有关，与路径无关。

---

## 五、举例说明

### 例1：计算第一类曲线积分

计算曲线$C$为单位圆$x^2 + y^2 = 1$上，$f(x, y) = x^2$沿$C$的第一类曲线积分。

参数化：$x = \cos t, y = \sin t, \quad t \in [0, 2\pi]$

$$
\mathrm{d}s = \sqrt{(-\sin t)^2 + (\cos t)^2} \mathrm{d}t = \sqrt{\sin^2 t + \cos^2 t} \mathrm{d}t = \mathrm{d}t
$$

所以：

$$
\int_C x^2 \mathrm{d}s = \int_{0}^{2\pi} (\cos t)^2 \mathrm{d}t = \int_{0}^{2\pi} \frac{1+\cos 2t}{2} \mathrm{d}t = \pi
$$

### 例2：计算第二类曲线积分

计算向量场$\mathbf{F} = (y, x)$沿顺时针单位圆$C$的第二类曲线积分：

$$
\int_C y\,\mathrm{d}x + x\,\mathrm{d}y
$$

参数化同上：

$$
x = \cos t,\, y = \sin t,\, t \in [0, 2\pi]
$$

$$
\mathrm{d}x = -\sin t\,\mathrm{d}t,\quad \mathrm{d}y = \cos t\,\mathrm{d}t
$$

代入：

$$
y\,\mathrm{d}x + x\,\mathrm{d}y = \sin t \cdot (-\sin t) \mathrm{d}t + \cos t \cdot \cos t\,\mathrm{d}t = -\sin^2 t\,\mathrm{d}t + \cos^2 t\,\mathrm{d}t = (\cos^2 t - \sin^2 t) \mathrm{d}t = \cos 2t\,\mathrm{d}t
$$

所以：

$$
\int_C y\,\mathrm{d}x + x\,\mathrm{d}y = \int_{0}^{2\pi} \cos 2t\,\mathrm{d}t = 0
$$

