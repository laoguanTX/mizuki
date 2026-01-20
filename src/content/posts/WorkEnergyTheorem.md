---
title: 动能定理
published: 2025-12-04
category: ["物理", "力学"]
tags: ["理论力学", "动力学"]
alias: "workenergytheorem"
---
## 一、力的功

### 1、前面的你都会

> [!WARNING]
>
> 菜，就多练！

### 2、作用于刚体力系的功

#### (1) 平移刚体上力的功

<img src="https://laoguantx.top/article/物理/理论力学/动能定理/image-20251127110317645.png" alt="image-20251127110317645" style="zoom:50%;" />

设一刚体在力 $F$ 作用下作平移，其质心在 $C$ 点，刚体上点 $A$ 的矢径是 $r$，速度是 $v$，则力 $F$ 的元功为：
$$
\mathrm{d}W = F \cdot \mathrm{d}r = F \cdot \mathrm{d}r_C
$$

或者

$$
\mathrm{d}W = F \cdot v\,\mathrm{d}t = F \cdot v_C\,\mathrm{d}t
$$

总功表达式为：
$$
\sum \mathrm{d}W = \sum (F \cdot \mathrm{d}r) = (\sum F) \cdot \mathrm{d}r_C
$$

或者

$$
\sum \mathrm{d}W = \sum (F \cdot v\, \mathrm{d}t) = (\sum F) \cdot v_C\, \mathrm{d}t
$$

#### (2) 定轴转动刚体上外力的功

<img src="https://laoguantx.top/article/物理/理论力学/动能定理/image-20251127110516747.png" alt="image-20251127110516747" style="zoom:50%;" />

设刚体绕定轴 $z$ 转动，角速度 $\omega = \omega k$，刚体上点 $A$ 的矢径是 $r$，速度是 $v = \omega \times r$。作用着力 $F$，当刚体有一微小转角 $\mathrm{d}\varphi$ 时，力 $F$ 的元功为：

$$
\mathrm{d}W = F \cdot \mathrm{d}r = F \cdot v\,\mathrm{d}t = F \cdot (\omega \times r)\,\mathrm{d}t
$$

混合积表达式为：
$$
F \cdot (\omega \times r) = \omega \cdot (r \times F)
$$

由静力学知，力 $F$ 对点 $O$ 的矩矢

$$
M_O(F) = r \times F
$$

而力 $F$ 对轴 $z$ 的矩

$$
M_z(F)
$$

等于 $M_O(F)$ 在轴 $z$ 上的投影，即：

$$
M_z(F) = \vec{M}_O(F) \cdot \vec{k}
$$

所以，混合积：

$$
F \cdot (\omega \times r) = \omega \cdot (r \times F) = \omega k \cdot M_O(F) = \omega M_z(F)
$$

因此有元功：
$$
\mathrm{d}W = M_z(F)\,\omega\,\mathrm{d}t = M_z(F)\,\mathrm{d}\varphi
$$
总功为：
$$
W=\int_{\varphi_1}^{\varphi_2}M_z(F)\mathrm{d}\varphi
$$
即作用于定轴转动刚体上的力的功，等于该力对转轴的矩与刚体微小转角的乘积的积分。特别是，若力矩是常量，则力在上述过程中的总功为：
$$
W=M_z(F)(\varphi_1-\varphi2)
$$

#### (3) 平面运动刚体上力的功

<img src="https://laoguantx.top/article/物理/理论力学/动能定理/image-20251127111345803.png" alt="image-20251127111345803" style="zoom:50%;" />

设一刚体在力 $F$ 作用下作平面运动，其质心在 $C$ 点，速度是 $v_C$，刚体上点 $A$ 的速度是 $v_A$，则力 $F$ 的元功表达式为：
$$
\mathrm{d}W = F \cdot v_A\,\mathrm{d}t = F \cdot (v_C + v_{AC})\,\mathrm{d}t
$$

其中 $v_{AC}$ 是 $A$ 相对于质心 $C$ 的速度。继续展开：

$$
\mathrm{d}W= F \cdot v_C\,\mathrm{d}t + F \cdot v_{AC}\,\mathrm{d}t
$$

又因为 $v_C\,\mathrm{d}t = \mathrm{d}r_C$，$v_{AC} = \omega \times r$，所以

$$
\mathrm{d}W= F \cdot \mathrm{d}r_C + F \cdot (\omega \times r)\,\mathrm{d}t
$$

$F \cdot (\omega \times r) = M_C(F)\,\omega$，其中 $M_C(F)$ 是力 $F$ 关于质心 $C$ 的矩在垂直于运动平面的分量，所以：

$$
\mathrm{d}W= F \cdot \mathrm{d}r_C + M_C(F)\,\mathrm{d}\varphi
$$

总功表达式即为：
$$
\sum \mathrm{d}W = \sum \left[ F \cdot \mathrm{d}r_C + M_C(F)\,\mathrm{d}\varphi \right]
$$

即，作用于平面运动刚体上的力的功，等于该力在刚体随质心平动中的功与力对质心的矩在刚体转动中的功之和。力系可向刚体上任一点简化，都有类似结论成立。

#### (4) 质点系和刚体内力的功

<img src="https://laoguantx.top/article/物理/理论力学/动能定理/image-20251127111458572.png" alt="image-20251127111458572" style="zoom:50%;" />

设质点系内有两质点 $A_1$ 和 $A_2$，相互间作用着内力 $\vec{F}_1$ 和 $\vec{F}_2$，且 $\vec{F}_2 = -\vec{F}_1$。两质点的元位移分别是 $\mathrm{d}\vec{r}_1$ 和 $\mathrm{d}\vec{r}_2$，故得内力 $\vec{F}_1$ 和 $\vec{F}_2$ 的元功之和：
$$
\sum \mathrm{d} W = \vec{F}_1 \cdot \mathrm{d}\vec{r}_1 + \vec{F}_2 \cdot \mathrm{d}\vec{r}_2
$$

由于 $\vec{F}_2 = -\vec{F}_1$，代入得：

$$
= \vec{F}_1 \cdot \mathrm{d}(\vec{r}_1 - \vec{r}_2)
$$

引入矢量 $\overrightarrow{A_2A_1}$，设其单位矢量为 $\vec{e}$，有：
$$
\overrightarrow{A_2A_1} = \vec{r}_1 - \vec{r}_2
$$

$$
\vec{F}_1 = -F_1 \vec{e}
$$

所以
$$
\vec{F}_1 \cdot \mathrm{d}(\vec{r}_1 - \vec{r}_2) = \vec{F}_1 \cdot \mathrm{d}(\overrightarrow{A_2A_1})
$$

设：
$$
\vec{F}_1 = -F_1\vec{e}
$$

由之前结论进一步推导：
$$
\begin{aligned}
\vec{F}_1 \cdot \mathrm{d}(\overrightarrow{A_2A_1}) 
&= -F_1 \vec{e} \cdot \mathrm{d}(\overrightarrow{A_2A_1} \cdot \vec{e}) \\
&= -F_1 \vec{e} \cdot \left[ \mathrm{d}(\overrightarrow{A_2A_1}) \cdot \vec{e} + \overrightarrow{A_2A_1} \cdot \mathrm{d} \vec{e} \right] \\
&= -F_1 \mathrm{d}(\overrightarrow{A_2A_1})(\vec{e} \cdot \vec{e}) - F_1 (\overrightarrow{A_2A_1} \cdot \vec{e}) \mathrm{d} \vec{e} \\
&= -F_1 \mathrm{d}(\overrightarrow{A_2A_1}) - F_1 (\overrightarrow{A_2A_1} \cdot \vec{e}) \mathrm{d} \vec{e}
\end{aligned}
$$

其中，$\vec{e}$为单位矢量，有：
$$
\vec{e} \cdot \mathrm{d}\vec{e} = \frac{1}{2} \mathrm{d}(\vec{e} \cdot \vec{e}) = \frac{1}{2} \mathrm{d}(1) = 0
$$

故上式中，第二项为零：
$$
-F_1 (\overrightarrow{A_2A_1} \cdot \vec{e}) \mathrm{d} \vec{e} = 0
$$

所以：
$$
\vec{F}_1 \cdot \mathrm{d}(\overrightarrow{A_2A_1}) = -F_1 \mathrm{d}(\overrightarrow{A_2A_1})
$$

因此，元功之和为：
$$
\sum \mathrm{d} W = -F_1 \mathrm{d}(A_1A_2)
$$
这里 $\mathrm{d}(A_1A_2)$ 代表两质点间距离 $A_2A_1$ 的变化量，在一般质点系中，两质点间距离是可变的，因此，可变质点系内力所作功的总和不一定等于零。但是，刚体内任意两点间的距离始终保持不变，所以刚体内力所作功的总和恒等于零。

#### (5) 约束力的功之和等于零的情形

1. 光滑的固定支承面和活动支座 的约束力总是和它作用点的元位移 $\mathrm{d}r$ 垂直，所以这些约束力的功恒等于零。
2. 由于柔绳仅在拉紧时才受力，而任何一段拉直的绳子就承受拉力来说，都和刚杆一样, 其内力的元功之和等于零。
3. 光滑活动铰链内力元功之和等于零。
4. 圆轮沿支承面纯滚动时，摩擦力（约束力）的功为零。

## 二、动能

### 1、前面的你都会

> [!WARNING]
>
> 菜，就多练！

### 2、平面运动刚体的动能

<img src="https://laoguantx.top/article/物理/理论力学/动能定理/image-20251127112813249.png" alt="image-20251127112813249" style="zoom:50%;" />

刚体做平面运动时，其上任一点的速度为 $v$，平面运动刚体的角速度是 $\omega$，速度瞬心在 $P$ 点，刚体对瞬轴的转动惯量是 $J_P$。对平行于瞬轴的质心轴的转动惯量是 $J_C$，则该刚体的动能为

$$
\begin{aligned}
T &= \sum \frac{1}{2} m v^2 \\
  &= \sum \frac{1}{2} m \left( r_P \omega \right)^2 \\
  &= \frac{1}{2} \omega^2 \sum m r_P^2 \\
  &= \frac{1}{2} \omega^2 J_P
\end{aligned}
$$

设刚体的质心 $C$ 到速度瞬心 $P$ 的距离是 $r_C$，刚体的质量是 $M$。根据转动惯量的平行轴定理：

$$
J_P = J_C + M r_C^2
$$

有：

$$
T = \frac{1}{2} (J_C + M r_C^2) \omega^2
$$
因为质心 $C$ 的速度大小：
$$
v_C = r_C \omega
$$

由上式得：
$$
T = \frac{1}{2} M v_C^2 + \frac{1}{2} J_C \omega^2
$$

即，平面运动刚体的动能，等于它以质心速度作平移时的动能与相对于质心轴转动时的动能之和。$C$为刚体质心时该公式才成立。

### 3、柯尼希定理

见文章[柯尼希定理 (König's Theorem) ](https://www.laoguantx.top/posts/konigstheorem/)。

## 三、动能定理

### 1、质点动能定理

<img src="https://laoguantx.top/article/物理/理论力学/动能定理/image-20251127113804401.png" alt="image-20251127113804401" style="zoom:50%;" />

设质量为 $m$ 的质点 $A$，在力 $F$ 作用下沿曲线由 $A_1$ 运动到 $A_2$，它的速度由 $v_1$ 变为 $v_2$。由牛顿第二定律：

$$
ma = m \frac{\mathrm{d}v}{\mathrm{d}t} = F
$$

即：
$$
m\,\mathrm{d}v = F\,\mathrm{d}t
$$

两边点乘速度 $v$，得：
$$
mv \cdot \mathrm{d}v = F \cdot v\,\mathrm{d}t
$$
上式右端就是作用力的元功，左端可改写成：
$$
mv \cdot \mathrm{d}v = m\,\mathrm{d}(v \cdot v)/2 = \mathrm{d}\left( m v^2 / 2 \right)
$$

从而得：
$$
\mathrm{d}\left(\frac{1}{2} m v^2\right) = \mathrm{d} W
$$

即，质点动能的微分等于作用于质点上的力的元功，这就是质点动能定理的微分形式。

将上式沿路径 $A_1A_2$ 积分，得
$$
\frac{1}{2} m v_2^2 - \frac{1}{2} m v_1^2 = W
$$

式中 $W$ 表示力 $F$ 在路径 $A_1A_2$ 中的功。可见，质点动能在某一路程中的改变量，等于作用于质点的各力在该路程中所作的功。这就是质点动能定理的积分形式。

### 2、质点系动能定理

对于质点系中的每个质点，都有质点动能定理的微分形式，相加得：
$$
\sum \mathrm{d}\left(\frac{1}{2} m v^2\right) =\sum \mathrm{d} W
$$
由于：
$$
\sum\mathrm{d}(\frac{mv^2}{2})=\mathrm{d}\sum(\frac{mv^2}{2})=\mathrm{d}T
$$
所以：
$$
\mathrm{d}T=\sum \mathrm{d} W
$$
即，质点系动能的微分等于作用于质点系各力的元功的代数和，这就是质点系动能定理的微分形式。

由微分形式，将上式积分，得到：
$$
T_2-T_1=\sum W
$$
式中$T_1,T_2$，分别代表某一运动过程中开始和终了时质点系的动能。上式表明质点系的动能在某一路程中的改变量，等于作用于质点系的各力在该路程中的功的代数和。这就是质点系动能定理的积分形式。

> [!NOTE]
>
> 动能定理的微分形式与动量矩（动量）定理通常不独立，动能定理的微分形式与动量矩（动量）定理往往是相同的，用于求解加速度或角加速度，动能定理的积分形式可以直接用于求解速度或角速度。