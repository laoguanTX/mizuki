---
title: 雅可比矩阵在积分变量替换上的应用
published: 2025-04-20
category: ["数学", "高等数学"]
tags: ["微积分", "线性代数"]
alias: "jacobianmatrixinchangeofvariablesinintegration"
---
极坐标变换的雅可比行列式推导过程是理解多变量积分中变量替换的核心。以下是详细推导，结合几何直观与代数计算，验证其正确性。

---

## 一、极坐标变换的定义
将笛卡尔坐标 $(x, y)$ 转换为极坐标 $(r, \theta)$：
$$
x = r \cos \theta, \quad y = r \sin \theta
$$
其中：
- $ r \geq 0 $ 是到原点的距离，
- $ \theta \in [0, 2\pi) $ 是与 $x$-轴的夹角。

---

## 二、雅可比矩阵的构造
雅可比矩阵由 $x$ 和 $y$ 对 $r$ 和 $\theta$ 的一阶偏导数构成：
$$
J = 
\begin{bmatrix}
\frac{\partial x}{\partial r} & \frac{\partial x}{\partial \theta} \\
\frac{\partial y}{\partial r} & \frac{\partial y}{\partial \theta}
\end{bmatrix}
$$

计算各偏导数：
1. $\frac{\partial x}{\partial r} = \cos \theta$
2. $\frac{\partial x}{\partial \theta} = -r \sin \theta$
3. $\frac{\partial y}{\partial r} = \sin \theta$
4. $\frac{\partial y}{\partial \theta} = r \cos \theta$

因此，雅可比矩阵为：
$$
J = 
\begin{bmatrix}
\cos \theta & -r \sin \theta \\
\sin \theta & r \cos \theta
\end{bmatrix}
$$

---

## 三、行列式的计算
雅可比行列式为：
$$
\det(J) = 
\begin{vmatrix}
\cos \theta & -r \sin \theta \\
\sin \theta & r \cos \theta
\end{vmatrix}
= (\cos \theta)(r \cos \theta) - (-r \sin \theta)(\sin \theta)
$$

展开并化简：
$$
\det(J) = r \cos^2 \theta + r \sin^2 \theta = r (\cos^2 \theta + \sin^2 \theta) = r \cdot 1 = r
$$

---

## 四、几何直观验证
在极坐标中，一个微小区域的面积由 $r$ 和 $\theta$ 的微小变化 $\Delta r$ 和 $\Delta \theta$ 决定。该区域可近似为一个“扇形环”，其面积为：
$$
\Delta A \approx (\text{弧长}) \times (\text{径向宽度}) = (r \Delta \theta) \times \Delta r
$$
但更精确的几何分析表明，当 $\Delta \theta$ 很小时，扇形环的面积实为：
$$
\Delta A \approx \frac{1}{2} \left( (r + \Delta r)^2 \Delta \theta - r^2 \Delta \theta \right) = r \Delta r \Delta \theta + \frac{1}{2} (\Delta r)^2 \Delta \theta
$$
当 $\Delta r \to 0$ 且 $\Delta \theta \to 0$ 时，高阶无穷小项 $(\Delta r)^2 \Delta \theta$ 可忽略，故：
$$
dA = r \, dr \, d\theta
$$
这与雅可比行列式的结果 $|\det(J)| = r$ 完全一致，验证了其正确性。

---

## 五、代数视角的进一步验证
雅可比行列式的绝对值 $r$ 表示极坐标到笛卡尔坐标的变换对面积的局部缩放因子。考虑线性变换的类比：
- 若雅可比矩阵是常数矩阵，行列式直接代表线性变换的面积缩放。
- 对于非线性变换（如极坐标），雅可比行列式在每一点给出局部线性近似的缩放因子。

因此，在积分变换公式中：
$$
\iint_{\text{笛卡尔}} f(x, y) \, dx \, dy = \iint_{\text{极坐标}} f(r \cos \theta, r \sin \theta) \cdot \underbrace{r}_{\text{雅可比行列式}} \, dr \, d\theta
$$
雅可比行列式 $r$ 确保了面积元 $dx \, dy$ 被正确转换为 $r \, dr \, d\theta$。

---

## 六、常见疑问解答

### **问题1：为什么雅可比矩阵中需要包含 $\frac{\partial x}{\partial \theta}$ 和 $\frac{\partial y}{\partial \theta}$？**
雅可比矩阵的目的是完全描述函数 $(r, \theta) \mapsto (x, y)$ 的局部线性近似。即使 $r$ 和 $\theta$ 是独立变量，它们对 $x$ 和 $y$ 的影响必须全部纳入矩阵中，才能准确反映变换的局部行为。

### **问题2：行列式结果为负（例如 $-r$）是否有影响？**
行列式的符号表示变换的方向（如镜像反射），但在积分中关注的是面积的绝对值，因此实际使用时取 $|\det(J)| = r$。

### **问题3：为何不使用逆变换的雅可比行列式？**
变量替换公式需要从原变量到新变量的导数（即 $dx \, dy = |\det(J)| \, dr \, d\theta$），因此直接使用原变换的雅可比行列式。若使用逆变换，需额外取倒数，但此处不需要。

