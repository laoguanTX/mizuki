---
title: 流体运动描述的两种方法
published: 2025-04-15
category: ["物理", "普通物理学"]
tags: ["流体力学"]
alias: "twomethodsofdescribingfluidmotion"
---
流体运动的描述主要有两种基本方法：

- **拉格朗日方法（Lagrangian Description）**：跟踪流体中各个微小粒子的运动，描述粒子在随时间演化过程中的位置、速度和加速度。
- **欧拉方法（Eulerian Description）**：在固定的空间控制体上描述流体的各种物理量（如速度、密度、压强等）随时间的变化。

下面分别对这两种方法进行详细推导介绍。

---

## 一、拉格朗日方法

拉格朗日方法关注流体中每个微元粒子，标记每个粒子在初始时的参照位置 $\mathbf{X}$，其随时间的运动由映射函数描述。设
$$
\mathbf{x} = \boldsymbol{\chi}(\mathbf{X}, t),
$$
其中  
- $\mathbf{X}$ 是参考坐标（初始位置），  
- $\mathbf{x}$ 是时刻 $t$ 时粒子的当前位置，  
- $\boldsymbol{\chi}(\mathbf{X}, t)$ 表示粒子的运动轨迹。

### 1. 速度和加速度

粒子的速度定义为其位置对时间的偏导数：
$$
\mathbf{v}(\mathbf{X}, t) = \frac{\partial \boldsymbol{\chi}(\mathbf{X}, t)}{\partial t}.
$$

相应地，粒子的加速度为速度的时间二阶导数：
$$
\mathbf{a}(\mathbf{X}, t) = \frac{\partial^2 \boldsymbol{\chi}(\mathbf{X}, t)}{\partial t^2}.
$$

### 2. 质量守恒

在拉格朗日描述中，每个流体粒子自身质量保持不变。设在初始状态下，流体微元体积为 $\mathrm{d}V_0$、密度为 $\rho_0(\mathbf{X})$；而在时刻 $t$ 时，该微元体积为 $\mathrm{d}V$、密度为 $\rho(\mathbf{x}, t)$。由于质量不变，有
$$
\rho_0(\mathbf{X})\, \mathrm{d}V_0 = \rho(\mathbf{x}, t)\, dV.
$$

令体积变换的雅可比行列式为
$$
J(\mathbf{X}, t) = \det\left(\frac{\partial \boldsymbol{\chi}}{\partial \mathbf{X}}\right),
$$
因而有
$$
\mathrm{d}V = J(\mathbf{X}, t)\, dV_0.
$$
最终可写出质量守恒关系为
$$
\rho(\mathbf{x}, t) = \frac{\rho_0(\mathbf{X})}{J(\mathbf{X}, t)}.
$$

### 3. 动量守恒（牛顿第二定律）

对于单个流体粒子，根据牛顿第二定律，其受力与加速度满足
$$
\rho_0(\mathbf{X})\, \frac{\partial^2 \boldsymbol{\chi}(\mathbf{X}, t)}{\partial t^2} = \mathbf{F}(\mathbf{x}, t).
$$
在理想流体中，常见的力有压强梯度力和外部重力，其中
$$
\mathbf{F}(\mathbf{x}, t) = -\nabla_{\mathbf{x}} p(\mathbf{x}, t) + \rho(\mathbf{x}, t)\, \mathbf{g},
$$
这里 $\nabla_{\mathbf{x}}$ 表示在当前空间坐标下的梯度操作，而 $\mathbf{g}$ 为重力加速度（或其他外部保守力场）。

### 4. 综合描述

通过给定初始条件和外部力场信息，可以求解映射函数 $\boldsymbol{\chi}(\mathbf{X}, t)$，进而得到流体粒子的运动轨迹及所有相关物理量。拉格朗日方法的优势在于其自然跟踪每个流体粒子，便于研究物质混合、界面演化等问题，但在数值求解时可能面临大变形带来的网格扭曲问题。

---

## 二、欧拉方法

与拉格朗日方法不同，欧拉方法选择在固定的空间点考察流体的状态，即探讨各个点处流体物理量随时间的变化情况。描述变量均写作 $(\mathbf{x}, t)$ 的函数。

### 1. 状态变量

在欧拉描述中，主要状态变量有：
- 密度场：$\rho(\mathbf{x}, t)$
- 速度场：$\mathbf{v}(\mathbf{x}, t)$
- 压强场：$p(\mathbf{x}, t)$

### 2. 物质导数

由于流体粒子不断流动，一个固定空间点处测得的物理量不一定代表某一特定粒子的变化。为此，引入**物质导数**，定义为
$$
\frac{\mathrm{D}}{\mathrm{D}t} = \frac{\partial}{\partial t} + \mathbf{v}(\mathbf{x}, t) \cdot \nabla,
$$
它反映了沿着流体运动路径上物理量的实际变化率。

### 3. 连续性方程（质量守恒）

欧拉描述下的质量守恒（连续性）方程表达为
$$
\frac{\partial \rho}{\partial t} + \nabla\cdot(\rho \, \mathbf{v}) = 0.
$$
在不可压流体（$\rho$ 常数）的条件下，上式化简为
$$
\nabla\cdot \mathbf{v} = 0.
$$

### 4. 欧拉动量方程

根据牛顿第二定律，对于单位体积的流体，动量变化率满足
$$
\rho \frac{\mathrm{D}\mathbf{v}}{\mathrm{D}t} = -\nabla p + \rho\, \mathbf{g}.
$$
其中，
$$
\frac{\mathrm{D}\mathbf{v}}{\mathrm{D}t} = \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v}\cdot\nabla)\mathbf{v}.
$$
这个方程称为**欧拉方程**，适用于描述无粘的理想流体。

### 5. 综合描述

欧拉方法的求解工作通常集中在求解上述偏微分方程组，利用初始条件和边界条件确定整个流场。该方法适合大尺度连续介质模拟，如气象预报、海洋流动等；但在某些涉及自由界面或需精细跟踪单个流体粒子的情况下，可能不如拉格朗日方法直观。

---

## 三、方法比较与转化

- **拉格朗日方法**通过跟踪每个流体微粒的运动，能直观地描述物质的路径和历史，但数值实现上容易遭遇粒子聚集或网格扭曲问题。
- **欧拉方法**则是在固定的空间控制体上观察流体状态变化，适用于大规模数值模拟并方便应用常用的离散化技术（如有限差分、有限体积等），但难以直接获得单个粒子的运动信息。

实际上，这两种方法在理论上是等价的，可通过以下关系进行转化：  
设 $\mathbf{x} = \boldsymbol{\chi}(\mathbf{X}, t)$，则在欧拉描述下，由雅可比行列式 $J(\mathbf{X}, t)$ 可以将拉格朗日的质量守恒关系转换为欧拉的连续性方程。

