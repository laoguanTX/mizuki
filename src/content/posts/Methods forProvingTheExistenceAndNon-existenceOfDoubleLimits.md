---
title: 二重极限存在性与不存在性的证明方法
published: 2025-05-20
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "methods forprovingtheexistenceandnon-existenceofdoublelimits"
---
## 一、二重极限的定义

设函数$f(x, y)$在区域$D$内，点$(x_0, y_0)$是$D$的聚点。若
$$
\lim_{(x, y) \to (x_0, y_0)} f(x, y) = A
$$
则称$A$为$f(x, y)$在点$(x_0, y_0)$处的二重极限，记作
$$
\lim_{(x, y) \to (x_0, y_0)} f(x, y) = A
$$

## 二、证明二重极限存在的方法

### 1、直接利用$\varepsilon-\delta$定义法

**定义：**  
若对任意$\varepsilon > 0$，存在$\delta > 0$，使得当$0 < \sqrt{(x - x_0)^2 + (y - y_0)^2} < \delta$时，有
$$
|f(x, y) - A| < \varepsilon
$$
则$A$为二重极限。

**步骤：**
1. 给定任意$\varepsilon > 0$。
2. 构造合适的$\delta$，使得对于所有满足$0 < \sqrt{(x - x_0)^2 + (y - y_0)^2} < \delta$的$(x, y)$，都有$|f(x, y) - A| < \varepsilon$。
3. 证明上述条件成立。

**适用情形：**  
函数形式清晰、可估算距离时，直接用定义法最严谨。

### 2、比较夹逼法（夹逼准则）

若存在$g(x, y)$和$h(x, y)$，使得$g(x, y) \leq f(x, y) \leq h(x, y)$，并且
$$
\lim_{(x, y) \to (x_0, y_0)} g(x, y) = \lim_{(x, y) \to (x_0, y_0)} h(x, y) = A
$$
则
$$
\lim_{(x, y) \to (x_0, y_0)} f(x, y) = A
$$

**步骤：**
1. 找到$g(x, y)$和$h(x, y)$满足夹逼关系。
2. 分别计算$g(x, y)$和$h(x, y)$的极限。
3. 由夹逼定理得出$f(x, y)$的极限。

**适用情形：**  
函数复杂、但可被简单函数夹住时。

### 3、转化为极坐标法

设$(x, y) \to (0, 0)$，可设$x = r\cos\theta, y = r\sin\theta$，则
$$
\lim_{(x, y) \to (0, 0)} f(x, y) = \lim_{r \to 0} f(r\cos\theta, r\sin\theta)
$$

**步骤：**
1. 用极坐标转换函数。
2. 令$r \to 0$，考察极限是否与$\theta$无关。
3. 若极限与$\theta$无关，则极限存在；否则不存在。

**适用情形：**  
极限点为原点，函数可适合极坐标表达。

### 4、先计算两个方向的累次极限

计算
$$
\lim_{x \to x_0} \left( \lim_{y \to y_0} f(x, y) \right)
$$
和
$$
\lim_{y \to y_0} \left( \lim_{x \to x_0} f(x, y) \right)
$$
如果两个累次极限都存在且相等，且函数连续，则二重极限存在且等于该值。但注意：**累次极限相等是二重极限存在的必要非充分条件。**

## 三、证明二重极限不存在的方法

### 1、沿不同路径趋近，极限值不同

选择两条不同的路径$\gamma_1, \gamma_2$，若
$$
\lim_{(x, y) \to (x_0, y_0), (x, y) \in \gamma_1} f(x, y) \neq \lim_{(x, y) \to (x_0, y_0), (x, y) \in \gamma_2} f(x, y)
$$
则二重极限不存在。

**常见路径：**
- $y = kx$ （直线）
- $y = x^2$ （抛物线）
- $x = 0$，$y = 0$ 等坐标轴

### 2、极坐标法发现极限依赖于$\theta$

用极坐标转换后，若
$$
\lim_{r \to 0} f(r \cos\theta, r \sin\theta)
$$
依赖于$\theta$，即不同$\theta$取值有不同极限，则二重极限不存在。

### 3、累次极限不相等

计算累次极限
$$
\lim_{x \to x_0} \left( \lim_{y \to y_0} f(x, y) \right)
$$
和
$$
\lim_{y \to y_0} \left( \lim_{x \to x_0} f(x, y) \right)
$$
若二者不相等，则二重极限不存在。

### 4、夹逼法反证

若能证明对任意$A$，总存在$\varepsilon_0 > 0$，使得无论$\delta$多小，总有$(x, y)$使$|f(x, y) - A| \geq \varepsilon_0$，则极限不存在。
