---
title: 梯度、散度、旋度
published: 2025-05-28
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "gradientdivergencecurl"
---
我们首先介绍矢量微分算子 $\nabla$ (Nabla 或 Del 算子)。在三维笛卡尔坐标系中，它的定义是：
$$
\nabla = \mathbf{i} \frac{\partial}{\partial x} + \mathbf{j} \frac{\partial}{\partial y} + \mathbf{k} \frac{\partial}{\partial z}
$$
其中 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 分别是 $x, y, z$ 方向的单位矢量。

下面我们将分别推导梯度、散度和旋度的计算公式及其物理意义。

## 一、梯度 (Gradient)

梯度作用于一个标量场 $f(x, y, z)$，结果是一个矢量场。

### 1、定义与推导

考虑一个标量场 $f(x, y, z)$。我们想知道这个标量场在空间中某一点附近的变化情况。根据多元函数微分学的知识，标量场 $f$ 的全微分（total differential）为：
$$
\mathrm{d}f = \frac{\partial f}{\partial x} \mathrm{d}x + \frac{\partial f}{\partial y} \mathrm{d}y + \frac{\partial f}{\partial z} \mathrm{d}z
$$
这表示当位置从 $(x, y, z)$ 移动一个微小位移 $(\mathrm{d}x, \mathrm{d}y, \mathrm{d}z)$ 时，$f$ 值的微小变化量。

我们可以将上式看作两个矢量的点积。定义一个矢量，称为 $f$ 的梯度，记作 $\nabla f$ 或 $\mathrm{grad}(f)$:
$$
\nabla f = \left( \frac{\partial f}{\partial x} \mathbf{i} + \frac{\partial f}{\partial y} \mathbf{j} + \frac{\partial f}{\partial z} \mathbf{k} \right)
$$
再定义微小位移矢量 $\mathrm{d}\mathbf{r}$:
$$
\mathrm{d}\mathbf{r} = \mathrm{d}x \mathbf{i} + \mathrm{d}y \mathbf{j} + \mathrm{d}z \mathbf{k}
$$
于是，全微分可以写成：
$$
\mathrm{d}f = (\nabla f) \cdot \mathrm{d}\mathbf{r}
$$
根据点积的定义，$\mathrm{d}f = |\nabla f| |\mathrm{d}\mathbf{r}| \cos\theta$，其中 $\theta$ 是 $\nabla f$ 和 $\mathrm{d}\mathbf{r}$ 之间的夹角。
单位位移的变化率（即方向导数）为：
$$
\frac{\mathrm{d}f}{|\mathrm{d}\mathbf{r}|} = |\nabla f| \cos\theta
$$
这个变化率在 $\cos\theta = 1$ 时取得最大值，即当 $\theta = 0$ 时。这意味着 $\mathrm{d}\mathbf{r}$ 的方向与 $\nabla f$ 的方向一致。此时，最大的变化率为 $|\nabla f|$。

所以，梯度 $\nabla f$ 的方向是标量场 $f$ 变化率最大的方向，其大小是这个最大变化率。

**计算公式 (笛卡尔坐标系):**
$$
\nabla f = \frac{\partial f}{\partial x} \mathbf{i} + \frac{\partial f}{\partial y} \mathbf{j} + \frac{\partial f}{\partial z} \mathbf{k}
$$

### 2、物理意义

1.  **方向**：梯度 $\nabla f$ 的方向指向标量场 $f$ 在该点增加最快的方向。
2.  **大小**：梯度 $|\nabla f|$ 的大小表示标量场 $f$ 在该点沿最快增加方向的单位距离变化率（即最大方向导数）。
3.  **等值面法线**：对于一个等值面（或等值线）$f(x,y,z) = C$（常数），在该面上任意一点的微小位移 $\mathrm{d}\mathbf{r}$ 都满足 $\mathrm{d}f = 0$。由于 $\mathrm{d}f = \nabla f \cdot \mathrm{d}\mathbf{r}$，所以 $\nabla f \cdot \mathrm{d}\mathbf{r} = 0$。这意味着梯度 $\nabla f$ 与等值面在该点的切平面（或切线）上的任何矢量 $\mathrm{d}\mathbf{r}$ 都正交。因此，梯度 $\nabla f$ 的方向是等值面的法线方向。

**例子**：
*   温度场 $T(x,y,z)$：$\nabla T$ 指向温度升高最快的方向，其大小表示温度变化率。热流密度通常与 $-\nabla T$ 成正比（傅里叶热传导定律）。
*   电势场 $V(x,y,z)$：$-\nabla V$ 是电场强度 $\mathbf{E}$。电场线指向电势降低最快的方向。
*   高度场 $h(x,y)$：$\nabla h$ 指向坡度最陡峭的向上方向。

## 二、散度 (Divergence)

散度作用于一个矢量场 $\mathbf{F}(x, y, z) = F_x \mathbf{i} + F_y \mathbf{j} + F_z \mathbf{k}$，结果是一个标量场。

### 1、定义与推导

散度的物理解释是矢量场在某一点的源的强度或汇的强度。一个更严格的定义是：
$$
\nabla \cdot \mathbf{F} = \lim_{\Delta V \to 0} \frac{1}{\Delta V} {\int\kern{-8pt}\int \kern{-23mu} \bigcirc}_{\!\!\!S} \mathbf{F} \cdot \mathrm{d}\mathbf{S}
$$
其中 $\Delta V$ 是一个包含某点的微小体积元， $S$ 是包围 $\Delta V$ 的闭合曲面，$\mathrm{d}\mathbf{S}$ 是指向外侧的面积元矢量。这个积分表示通过闭合曲面 $S$ 的矢量场 $\mathbf{F}$ 的总通量。散度就是单位体积的净流出通量。

我们考虑一个在点 $(x,y,z)$ 附近，边长分别为 $\Delta x, \Delta y, \Delta z$ 的微小长方体体积元 $\Delta V = \Delta x \Delta y \Delta z$。长方体的中心近似为 $(x,y,z)$。
我们计算通过这个长方体六个面的通量。

1.  **考虑沿 $x$ 方向的通量**：
    *   右侧面 (在 $x + \frac{\Delta x}{2}$ 处，面积 $\Delta y \Delta z$，法向 $\mathbf{i}$):
        通量 $\Phi_{x,right} \approx F_x(x + \frac{\Delta x}{2}, y, z) \Delta y \Delta z$
    *   左侧面 (在 $x - \frac{\Delta x}{2}$ 处，面积 $\Delta y \Delta z$，法向 $-\mathbf{i}$):
        通量 $\Phi_{x,left} \approx -F_x(x - \frac{\Delta x}{2}, y, z) \Delta y \Delta z$
    *   沿 $x$ 方向的净通量 $\Delta \Phi_x = \Phi_{x,right} + \Phi_{x,left}$:
        $$
        \Delta \Phi_x \approx \left[ F_x\left(x + \frac{\Delta x}{2}, y, z\right) - F_x\left(x - \frac{\Delta x}{2}, y, z\right) \right] \Delta y \Delta z
        $$
        对于微小的 $\Delta x$，方括号内的差值可以近似为（根据中值定理或泰勒展开）：
        $$
        F_x\left(x + \frac{\Delta x}{2}, y, z\right) - F_x\left(x - \frac{\Delta x}{2}, y, z\right) \approx \frac{\partial F_x}{\partial x} \Delta x
        $$
        所以，
        $$
        \Delta \Phi_x \approx \frac{\partial F_x}{\partial x} \Delta x \Delta y \Delta z = \frac{\partial F_x}{\partial x} \Delta V
        $$

2.  **类似地，沿 $y$ 方向的净通量**：
    *   上侧面 (在 $y + \frac{\Delta y}{2}$ 处，法向 $\mathbf{j}$): $F_y(x, y + \frac{\Delta y}{2}, z) \Delta x \Delta z$
    *   下侧面 (在 $y - \frac{\Delta y}{2}$ 处，法向 $-\mathbf{j}$): $-F_y(x, y - \frac{\Delta y}{2}, z) \Delta x \Delta z$
    *   净通量 $\Delta \Phi_y \approx \frac{\partial F_y}{\partial y} \Delta x \Delta y \Delta z = \frac{\partial F_y}{\partial y} \Delta V$

3.  **沿 $z$ 方向的净通量**：
    *   前侧面 (在 $z + \frac{\Delta z}{2}$ 处，法向 $\mathbf{k}$): $F_z(x, y, z + \frac{\Delta z}{2}) \Delta x \Delta y$
    *   后侧面 (在 $z - \frac{\Delta z}{2}$ 处，法向 $-\mathbf{k}$): $-F_z(x, y, z - \frac{\Delta z}{2}) \Delta x \Delta y$
    *   净通量 $\Delta \Phi_z \approx \frac{\partial F_z}{\partial z} \Delta x \Delta y \Delta z = \frac{\partial F_z}{\partial z} \Delta V$

总的净通量
$$
{\int\kern{-8pt}\int \kern{-23mu} \bigcirc}_{\!\!\!S} \mathbf{F} \cdot \mathrm{d}\mathbf{S} = \Delta \Phi_x + \Delta \Phi_y + \Delta \Phi_z
$$
$$
{\int\kern{-8pt}\int \kern{-23mu} \bigcirc}_{\!\!\!S} \mathbf{F} \cdot \mathrm{d}\mathbf{S} \approx \left( \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z} \right) \Delta V
$$
根据散度的定义：
$$
\nabla \cdot \mathbf{F} = \lim_{\Delta V \to 0} \frac{1}{\Delta V} {\int\kern{-8pt}\int \kern{-23mu} \bigcirc}_{\!\!\!S} \mathbf{F} \cdot \mathrm{d}\mathbf{S} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}
$$
这也可以看作是 $\nabla$ 算子与矢量场 $\mathbf{F}$ 的点积：
$$
\nabla \cdot \mathbf{F} = \left( \mathbf{i} \frac{\partial}{\partial x} + \mathbf{j} \frac{\partial}{\partial y} + \mathbf{k} \frac{\partial}{\partial z} \right) \cdot (F_x \mathbf{i} + F_y \mathbf{j} + F_z \mathbf{k}) = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}
$$

**计算公式 (笛卡尔坐标系):**
$$
\nabla \cdot \mathbf{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}
$$

### 2、物理意义

1.  **源与汇**：散度描述了矢量场在某一点的“流出”或“汇入”的强度。
    *   $\nabla \cdot \mathbf{F} > 0$：该点是矢量场的“源”(source)，表示有净流出。例如，流体在此处膨胀或有物质产生。
    *   $\nabla \cdot \mathbf{F} < 0$：该点是矢量场的“汇”(sink)，表示有净流入。例如，流体在此处压缩或有物质消失。
    *   $\nabla \cdot \mathbf{F} = 0$：该点无源无汇，或者流入量等于流出量。这样的场称为无源场或螺线管场（solenoidal field）。例如，不可压缩流体的速度场（没有源或汇的情况下），磁场（$\nabla \cdot \mathbf{B} = 0$，磁单极子不存在）。

2.  **高斯散度定理**：散度与高斯散度定理密切相关，该定理指出：
    $$
    \iiint_V (\nabla \cdot \mathbf{F}) \mathrm{d}V = {\int\kern{-8pt}\int \kern{-23mu} \bigcirc}_{\!\!\!S} \mathbf{F} \cdot \mathrm{d}\mathbf{S}
    $$
    这表示体积 $V$ 内所有源（或汇）的总强度等于通过包围该体积的闭合曲面 $S$ 的净通量。

**例子**：
*   流体速度场 $\mathbf{v}$：$\nabla \cdot \mathbf{v}$ 表示流体在某点的膨胀率或压缩率。对于不可压缩流体，$\nabla \cdot \mathbf{v} = 0$。
*   电场 $\mathbf{E}$：$\nabla \cdot \mathbf{E} = \rho/\epsilon_0$ (高斯定律的微分形式)，其中 $\rho$ 是电荷密度，$\epsilon_0$ 是真空介电常数。电荷是电场的源。
*   磁场 $\mathbf{B}$：$\nabla \cdot \mathbf{B} = 0$ (高斯磁定律)，表明不存在磁单极子。

## 三、旋度 (Curl)

旋度作用于一个矢量场 $\mathbf{F}(x, y, z) = F_x \mathbf{i} + F_y \mathbf{j} + F_z \mathbf{k}$，结果是另一个矢量场。

### 1、定义与推导

旋度描述了矢量场在某一点的“旋转”或“环流”的程度和方向。旋度矢量的方向是旋转轴的方向（遵循右手法则），其大小表示旋转的强度。
旋度 $\nabla \times \mathbf{F}$ 的任意方向 $\mathbf{\hat{n}}$ 上的分量定义为：
$$
(\nabla \times \mathbf{F}) \cdot \mathbf{\hat{n}} = \lim_{\Delta A \to 0} \frac{1}{\Delta A} \oint_C \mathbf{F} \cdot \mathrm{d}\mathbf{r}
$$
其中 $C$ 是一个以 $\mathbf{\hat{n}}$ 为法线方向的微小闭合回路，$\Delta A$ 是该回路所围成的面积。积分 $\oint_C \mathbf{F} \cdot \mathrm{d}\mathbf{r}$ 称为矢量场 $\mathbf{F}$ 沿闭合路径 $C$ 的环量。

我们推导旋度的 $z$ 分量 $(\nabla \times \mathbf{F})_z$。考虑在 $xy$ 平面内，以点 $(x,y,z)$ 为中心的一个微小矩形回路，其顶点为 $(x - \frac{\Delta x}{2}, y - \frac{\Delta y}{2})$, $(x + \frac{\Delta x}{2}, y - \frac{\Delta y}{2})$, $(x + \frac{\Delta x}{2}, y + \frac{\Delta y}{2})$, $(x - \frac{\Delta x}{2}, y + \frac{\Delta y}{2})$。面积 $\Delta A = \Delta x \Delta y$，法向为 $\mathbf{k}$。我们沿逆时针方向计算环量。

1.  **路径 1 (底边)**: 从 $(x - \frac{\Delta x}{2}, y - \frac{\Delta y}{2})$ 到 $(x + \frac{\Delta x}{2}, y - \frac{\Delta y}{2})$。$\mathrm{d}\mathbf{r} = \mathrm{d}x \mathbf{i}$。
    $\int_1 \mathbf{F} \cdot \mathrm{d}\mathbf{r} \approx F_x(x, y - \frac{\Delta y}{2}, z) \Delta x$
2.  **路径 2 (右边)**: 从 $(x + \frac{\Delta x}{2}, y - \frac{\Delta y}{2})$ 到 $(x + \frac{\Delta x}{2}, y + \frac{\Delta y}{2})$。$\mathrm{d}\mathbf{r} = \mathrm{d}y \mathbf{j}$。
    $\int_2 \mathbf{F} \cdot \mathrm{d}\mathbf{r} \approx F_y(x + \frac{\Delta x}{2}, y, z) \Delta y$
3.  **路径 3 (顶边)**: 从 $(x + \frac{\Delta x}{2}, y + \frac{\Delta y}{2})$ 到 $(x - \frac{\Delta x}{2}, y + \frac{\Delta y}{2})$。$\mathrm{d}\mathbf{r} = -\mathrm{d}x \mathbf{i}$。
    $\int_3 \mathbf{F} \cdot \mathrm{d}\mathbf{r} \approx -F_x(x, y + \frac{\Delta y}{2}, z) \Delta x$
4.  **路径 4 (左边)**: 从 $(x - \frac{\Delta x}{2}, y + \frac{\Delta y}{2})$ 到 $(x - \frac{\Delta x}{2}, y - \frac{\Delta y}{2})$。$\mathrm{d}\mathbf{r} = -\mathrm{d}y \mathbf{j}$。
    $\int_4 \mathbf{F} \cdot \mathrm{d}\mathbf{r} \approx -F_y(x - \frac{\Delta x}{2}, y, z) \Delta y$

总环量 $\oint_C \mathbf{F} \cdot \mathrm{d}\mathbf{r} = \int_1 + \int_2 + \int_3 + \int_4$:
$$
\oint_C \mathbf{F} \cdot \mathrm{d}\mathbf{r} \approx \left[ F_x\left(x, y - \frac{\Delta y}{2}, z\right) - F_x\left(x, y + \frac{\Delta y}{2}, z\right) \right] \Delta x + \left[ F_y\left(x + \frac{\Delta x}{2}, y, z\right) - F_y\left(x - \frac{\Delta x}{2}, y, z\right) \right] \Delta y
$$
对于微小的 $\Delta x, \Delta y$:
*   $F_x(x, y - \frac{\Delta y}{2}, z) - F_x(x, y + \frac{\Delta y}{2}, z) \approx -\frac{\partial F_x}{\partial y} \Delta y$
*   $F_y(x + \frac{\Delta x}{2}, y, z) - F_y(x - \frac{\Delta x}{2}, y, z) \approx \frac{\partial F_y}{\partial x} \Delta x$

所以，
$$
\oint_C \mathbf{F} \cdot \mathrm{d}\mathbf{r} \approx \left( -\frac{\partial F_x}{\partial y} \Delta y \right) \Delta x + \left( \frac{\partial F_y}{\partial x} \Delta x \right) \Delta y = \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \Delta x \Delta y
$$
根据旋度分量的定义，$(\nabla \times \mathbf{F})_z = (\nabla \times \mathbf{F}) \cdot \mathbf{k}$:
$$
(\nabla \times \mathbf{F})_z = \lim_{\Delta A \to 0} \frac{1}{\Delta A} \oint_C \mathbf{F} \cdot \mathrm{d}\mathbf{r} = \frac{\left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \Delta x \Delta y}{\Delta x \Delta y} = \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y}
$$
通过对坐标进行轮换对称 $(x \to y \to z \to x)$，可以得到旋度的其他分量：
$$
(\nabla \times \mathbf{F})_x = \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z}
$$
$$
(\nabla \times \mathbf{F})_y = \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x}
$$
将这三个分量组合起来，得到旋度矢量：
$$
\nabla \times \mathbf{F} = \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \mathbf{i} + \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \mathbf{j} + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \mathbf{k}
$$
这可以形式上写成 $\nabla$ 算子与矢量场 $\mathbf{F}$ 的叉积，通常用行列式表示：
$$
\nabla \times \mathbf{F} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
F_x & F_y & F_z
\end{vmatrix}
$$

**计算公式 (笛卡尔坐标系):**
$$
\nabla \times \mathbf{F} = \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \mathbf{i} + \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \mathbf{j} + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \mathbf{k}
$$

### 2、物理意义

1.  **旋转性**：旋度描述了矢量场在某一点的涡旋强度和旋转轴方向。
    *   如果 $\nabla \times \mathbf{F} \neq \mathbf{0}$，则该场是有旋场 (rotational field)。想象在场中放置一个微小的桨叶轮，如果它开始旋转，则该点旋度非零。旋度矢量的方向是桨叶轮的旋转轴方向（由右手法则确定），其大小与旋转角速度成正比。
    *   如果 $\nabla \times \mathbf{F} = \mathbf{0}$，则该场是无旋场 (irrotational field) 或保守场。这意味着场线不会形成闭合的小环路，或者说场中没有涡旋。对于无旋场，一定存在一个标量势 $\phi$ 使得 $\mathbf{F} = \nabla \phi$（如果场是单连通的）。

2.  **斯托克斯定理**：旋度与斯托克斯定理密切相关，该定理指出：
    $$
    \iint_S (\nabla \times \mathbf{F}) \cdot \mathrm{d}\mathbf{S} = \oint_C \mathbf{F} \cdot \mathrm{d}\mathbf{r}
    $$
    这表示通过一个开放曲面 $S$ 的旋度通量等于矢量场 $\mathbf{F}$ 沿该曲面边界闭合路径 $C$ 的环量。

**例子**：
*   流体速度场 $\mathbf{v}$：$\nabla \times \mathbf{v}$ 是流体的涡量 (vorticity) 的两倍，描述了流体微团的旋转。如果 $\nabla \times \mathbf{v} = \mathbf{0}$，流动是无旋流动。
*   磁场 $\mathbf{B}$：$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}$ (安培-麦克斯韦定律的微分形式)，其中 $\mathbf{J}$ 是电流密度。电流和变化的电场是磁场的涡旋源。
*   静电场 $\mathbf{E}_{static}$：$\nabla \times \mathbf{E}_{static} = \mathbf{0}$，表明静电场是无旋场，因此可以表示为电势的梯度 $\mathbf{E}_{static} = -\nabla V$。

总结：
*   **梯度** $\nabla f$：标量场 $\to$ 矢量场。表示标量场变化最快的方向和速率。
*   **散度** $\nabla \cdot \mathbf{F}$：矢量场 $\to$ 标量场。表示矢量场的源强度或流发程度。
*   **旋度** $\nabla \times \mathbf{F}$：矢量场 $\to$ 矢量场。表示矢量场的旋转或环流程度。

这些算子是电磁学、流体力学、热力学等许多物理学分支中描述场的基本工具。