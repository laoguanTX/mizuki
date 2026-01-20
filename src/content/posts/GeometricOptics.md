---
title: 几何光学
published: 2025-12-08
category: ["物理", "普通物理学"]
tags: ["光学"]
alias: "geometricoptics"
---
## 一、光速

在真空中：
$$
c=\frac{1}{\sqrt{\mu_0\varepsilon_0}}
$$
在介质中：
$$
v=\frac{1}{\sqrt{\kappa_m\kappa_m\mu_0\varepsilon_0}}=\frac{e}{\sqrt{\kappa_m\kappa_e}}
$$
即：
$$
v=\frac{c}n
$$
其中$n=\sqrt{\kappa_m\kappa_e}$

## 二、光的多普勒效应

当光速远大于源与观察者之间的相对速度$v$时，可以采用经典多普勒公式进行近似：设光源发出频率为$f_0$，观察者接收到的频率为$f$。光在真空中的传播速度为$c$。$v$为源与观察者之间的相对速度（规定：$v > 0$表示靠近，$v < 0$表示远离）。对于源向观察者运动，经典公式为：

$$
f = f_0 \left(1 + \frac{v}{c}\right)
$$

对于源远离观察者运动，公式为：

$$
f = f_0 \left(1 - \frac{v}{c}\right)
$$

当$v$接近光速时，需采用相对论的多普勒效应公式。假设光源和观察者的运动方向与光传播方向一致（沿同一直线）：

对于源远离观察者运动，公式为：
$$
f = f_0 \sqrt{\frac{1 - \frac{v}{c}}{1 + \frac{v}{c}}}
$$

对于源靠近观察者运动，公式为：
$$
f = f_0 \sqrt{\frac{1 + \frac{v}{c}}{1 - \frac{v}{c}}}
$$

由于频率和波长满足 $c = f \lambda$，因此波长的变化计算如下：

对于源远离观察者的情况（红移）：

$$
\lambda = \lambda_0 \sqrt{\frac{1 + \frac{v}{c}}{1 - \frac{v}{c}}}
$$
对于源靠近观察者的情况（蓝移）：

$$
\lambda = \lambda_0 \sqrt{\frac{1 - \frac{v}{c}}{1 + \frac{v}{c}}}
$$
其中$\lambda_0$为源发射的波长，$\lambda$为观察者接收到的波长。

## 三、光的色散

质的折射率$n$通常依赖于光的频率（或波长）：

$$
n = n(\lambda) \qquad \text{或} \qquad n = n(f)
$$

不同波长的光在同一介质中，折射率不同，导致传播速度不同：

$$
v = \frac{c}{n}
$$

其中$c$为真空中的光速，$v$为介质中的光速。光在介质中传播时的相速度（波的某一固定相位，如波峰或波谷传播的速度）：

$$
v_p = \frac{\omega}{k} = \frac{c}{n(\omega)}
$$

其中$\omega$为角频率，$k$为波矢（波数）。群速度描述波包或信息的传播速度：

$$
v_g = \frac{\mathrm{d}\omega}{\mathrm{d}k}
$$

由于$n$依赖于$\omega$，群速度与相速度不同，其中$k = n(\omega)\dfrac{\omega}{c}$，对$\omega$求导：

$$
\frac{\mathrm{d}k}{\mathrm{d}\omega} = \frac{n(\omega)}{c} + \frac{\omega}{c} \frac{\mathrm{d}n}{\mathrm{d}\omega}
$$
因此：

$$
v_g = \left( \frac{\mathrm{d}k}{\mathrm{d}\omega} \right)^{-1} = \frac{c}{n(\omega) + \omega \frac{\mathrm{d}n}{\mathrm{d}\omega}}
$$

## 四、惠更斯原理

惠更斯原理是指每一个波前上的点都可以看作是新的“子波源”，每个子波源会向前发射一个新的球面波（或在二维情况下为圆形波）。经过一段时间后，所有这些子波的包络面就构成了新的波前。

<img src="https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251201112708620.png" alt="image-20251201112708620" style="zoom:50%;" />

假设有一个初始波前$S$，每一个点$P$都成为子波源。经过时间$t$后，各子波源发射的波面半径为$v t$（$v$为波速）。所有以$P$为中心，半径为$vt$的球面（或圆弧）的包络面就是新的波前$S'$。对于波前$S$上的每一点$P$，在时间$t$后，其子波的波面为：
$$
|\vec{r} - \vec{r}_P| = v t
$$

新波前$S'$是所有这些球面波的外包络面。

<img src="https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251201113022599.png" alt="image-20251201113022599" style="zoom:50%;" />

上图中上半部分是介质1（折射率$n_1$，速度$v_1$），下半部分是介质2（折射率$n_2$，速度$v_2$）。红色箭头表示入射波前，蓝色虚线是反射波前，绿色箭头是折射波前。$A_1, A_2, ..., A_n$是入射波前在界面上的各点，$B_1, B_2, ..., B_n$是波前在界面上的投影点，$C_1, C_2, ..., C_n$是反射波前上的对应点，$D_1, D_2, ..., D_n$是折射波前上的对应点。根据惠更斯原理，每个$A_n$点都是子波源，经过时间$t_n$，各自发射波：在介质1中传播距离：$A_n B_n = v_1 t_n$在介质2中传播距离：$A_1 D_1 = v_2 t_1$。关注反射波前，$\angle A_n A_1 B_n = \angle C_1 B_n A_1$，由几何关系，$A_1 C_1 = A_n B_n = v_1 t_n$，三角形$\triangle A_1 C_1 B_n \cong \triangle B_n A_n A_1$（全等），因此反射角等于入射角：
$$
i_1' = i_1
$$
即，反射角等于入射角，这就是反射定律。

关注折射波前：$\angle D_1 B_n A_1 = i_2$，入射角$\sin i_1 = \frac{A_n B_n}{A_1 D_1}$，折射角$\sin i_2 = \frac{A_1 D_1}{A_n B_n}$（或其倒数），结合传播距离：
$$
\frac{\sin i_1}{\sin i_2} = \frac{A_n B_n}{A_1 D_1} = \frac{v_1 t}{v_2 t} = \frac{v_1}{v_2}
$$
介质的折射率$n$与光速$c$和介质中的光速$v$关系：

$$
n = \frac{c}{v}
$$

所以：

$$
\frac{\sin i_1}{\sin i_2} = \frac{v_1}{v_2} = \frac{n_2}{n_1}
$$

这就是斯涅尔定律（折射定律）。

## 五、费马原理

假设光从点 $Q$ 传播到点 $P$，在真空中的速度为 $c$，路径长度为 $\overline{QP}$，则传播时间为：

$$
t_{QP} = \frac{\overline{QP}}{c}
$$

![image-20251201113303310](https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251201113303310.png)

如图所示，光从 $Q$ 经过不同介质，分别有：介质1，折射率 $n_1$，路径长度 $\Delta l_1$；介质2，折射率 $n_2$，路径长度 $\Delta l_2$；介质3，折射率 $n_3$，路径长度 $\Delta l_3$。每段的光速为 $v_i = c / n_i$，传播时间为 $\Delta t_i = \Delta l_i / v_i$。所以总传播时间为：
$$
t_{QP} = \frac{\Delta l_1}{v_1} + \frac{\Delta l_2}{v_2} + \frac{\Delta l_3}{v_3} = \sum_{i} \frac{\Delta l_i}{v_i}
$$

代入 $v_i = \frac{c}{n_i}$ 得：

$$
t_{QP} = \sum_{i} \frac{\Delta l_i}{c / n_i} = \sum_{i} \frac{n_i \Delta l_i}{c}
$$

光程是描述光在不同介质中传播路径的一种物理量，它与光的传播时间和速度有关。光程定义为光在各段介质中传播相当于在真空中传播的等效距离：

$$
\text{光程} = \sum_{i} n_i \Delta l_i
$$

或在路径 $QMNP$ 上：

$$
(QMNP) = c \cdot t_{QP} = \sum_{i} n_i \Delta l_i
$$

对于任意曲线路径，从 $Q$ 到 $P$，光程可用积分表示：

$$
(QP) = \int_{Q}^{P} n\,\mathrm{d}l
$$

其中，$n$为路径上的折射率分布，$\mathrm{d}l$为沿路径的微元长度。满足：
$$
\delta(QP)=\delta[\int^P_Q n\mathrm{d}l]=0
$$
也就是说，光线从一个固定点传播到另一个固定点时，其路径遵循这样的原则：与邻近路径相比，所需时间要么最短，要么最长，要么保持不变（即处于稳态）。用这个原理可以推导出光的入射和反射定律：

对于反射：

![image-20251203101017226](https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251203101017226.png)

$$
L = \sqrt{a^2 + x^2} + \sqrt{b^2 + (d-x)^2}
$$

$$
\frac{\mathrm{d}L}{\mathrm{d}x} = \frac{1}{2} \cdot \frac{2x}{\sqrt{a^2 + x^2}} - \frac{1}{2} \cdot \frac{2(d-x)}{\sqrt{b^2 + (d-x)^2}} = 0
$$

$$
\frac{x}{\sqrt{a^2 + x^2}} = \frac{(d-x)}{\sqrt{b^2 + (d-x)^2}}
$$

$$
\sin \theta_1 = \sin \theta_1' \qquad \theta_1 = \theta_1'
$$

对于折射：

![image-20251203101330433](https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251203101330433.png)

$$
L = n_1 \sqrt{a^2 + x^2} + n_2 \sqrt{b^2 + (d - x)^2}
$$
$$
\frac{\mathrm{d}L}{\mathrm{d}x} = \frac{1}{2} \cdot \frac{n_1 2x}{\sqrt{a^2 + x^2}} - \frac{1}{2} \cdot \frac{n_2 2(d-x)}{\sqrt{b^2 + (d-x)^2}} = 0
$$
$$
n_1 \frac{x}{\sqrt{a^2 + x^2}} = n_2 \frac{(d-x)}{\sqrt{b^2 + (d-x)^2}},\quad n_1 \sin \theta_1 = n_2 \sin \theta_2
$$

## 六、球面镜成像

### 1、球面折射成像

<img src="https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251203101910024.png" alt="image-20251203101910024"  />

图中展示了一个球面折射问题：一个物体位于球面一侧，经过球面折射后在另一侧成像。已知：物体到球心的距离为 $o+r$，成像到球心的距离为 $i-r$，球面半径为 $r$，入射介质折射率为 $n$，出射介质折射率为 $n'$，各角度与距离如图所示。

如图，$M$ 为球面上的某点，$C$ 为球心，$Q$ 为物体点，$Q'$ 为像点。首先，三角形中有如下几何关系：

$$
\begin{cases}
\begin{aligned}
    &\frac{p}{\sin\phi} = \frac{o+r}{\sin\theta} = \frac{r}{\sin u}
    &\frac{p'}{\sin\phi} = \frac{i-r}{\sin\theta'} = \frac{r}{\sin u'}
\end{aligned}
\end{cases}
$$

其中：$p$ 和 $p'$ 分别是 $QM$ 和 $Q'M$ 的长度，$\theta$、$\theta'$ 是入射和折射角，$u$、$u'$ 是物体光线与球心法线的夹角，根据折射定律：
$$
n\sin\theta = n'\sin\theta'
$$

且有：

$$
\theta - u = \theta' + u' = \phi
$$

三角关系代入，得：
$$
\left\{
\begin{aligned}
    &\frac{p}{o+r} = \frac{\sin\phi}{\sin\theta} \\
    &\frac{p'}{i-r} = \frac{\sin\phi}{\sin\theta'}
\end{aligned}
\right.
\implies
\frac{p}{n(o+r)} = \frac{p'}{n'(i-r)}
$$

利用余弦定理：
$$
\left\{
\begin{aligned}
    &p^2 = (o + r)^2 + r^2 - 2r(o+r)\cos\phi \\
    &p'^2 = (i - r)^2 + r^2 + 2r(i - r)\cos\phi
\end{aligned}
\right.
$$

利用 $\cos\phi = 1 - 2\sin^2\frac{\phi}{2}$，化简得：

$$
\left\{
\begin{aligned}
    &p^2 = o^2 + 4r(o+r)\sin^2\frac{\phi}{2} \\
    &p'^2 = i^2 - 4r(i-r)\sin^2\frac{\phi}{2}
\end{aligned}
\right.
$$

联立，将 $p^2$ 与 $p'^2$ 代入比值关系，有：
$$
\frac{o^2}{n^2(o+r)^2} - \frac{i^2}{n'^2(i-r)^2}
= -4r\sin^2\frac{\phi}{2} \left[ \frac{1}{n^2(o+r)^2} + \frac{1}{n'^2(i-r)^2} \right]
$$

这说明，实际情况下，物点 $Q$ 并不能严格成像到 $Q'$，因为右边存在与 $\phi$（偏离轴线的角度）相关的项，只有特殊情况下这个公式的右边为零，才能严格成像。

公式右边为零时：

$$
-4r\sin^2\frac{\phi}{2} \left[ \frac{1}{n^2(o+r)^2} + \frac{1}{n'^2(i-r)^2} \right] = 0
$$

即：$\sin^2\frac{\phi}{2} = 0$，只有当 $\phi = 0$ 时成立，即只有光线完全通过光轴时才成立（这不是一般物理成像，而是几何中心成像）。或者括号内为零：

$$
\frac{1}{n^2(o+r)^2} + \frac{1}{n'^2(i-r)^2} = 0
$$
这两个条件只在特定的 $o$ 与 $i$ 值下成立，对一个球面来说，只能找到一组 $Q$ 和 $Q'$，即只对应一组物点和像点，不是一般意义上的成像（称为“齐明点”）。

实际成像分析时，通常只考虑靠近光轴的光线（即 $\phi \approx 0$），此时：$\sin^2\frac{\phi}{2} \approx 0$，$h^2 \ll o^2, i^2, r^2$，其中 $h$ 是入射高度，在这种情况下，右边可以忽略原公式在近轴条件下变为：
$$
\frac{o^2}{n^2(o+r)^2} = \frac{i^2}{n'^2(i-r)^2}
$$

进一步化简：

$$
\frac{n(o+r)}{o} = \frac{n'(i-r)}{i}
$$

再整理得：

$$
\frac{n'}{i} + \frac{n}{o} = \frac{n' - n}{r}
$$

这是球面折射的傍轴成像公式。根据上面的公式，我们可以得到第一焦点（第一主焦点）当像距 $i \to \infty$，物点在焦点 $o = f$：

$$
o = f = \frac{n}{n' - n} r
$$

那么第二焦点（第二主焦点）为：当物距 $o \to \infty$，像点在焦点 $i = f'$：
$$
i = f' = \frac{n'}{n' - n} r
$$

同样可以推导出焦距转换公式：
$$
\frac{f}{f'} = \frac{n}{n'}
$$

以及近轴成像公式（焦点形式）：
$$
\frac{f}{o} + \frac{f'}{i} = 1
$$

这是球面折射（单面透镜）在近轴近似下的经典成像公式，也是实际光学设计中的基本公式。

> [!NOTE]
>
> 根据上面图示，做出符号约定：
>
> | 位置关系                | 符号           | 说明                |
> |-----------------------|--------------|-------------------|
> | Q 在 A 左（实物）      | $o > 0$      | 物距为正           |
> | Q 在 A 右（虚物）      | $o < 0$      | 物距为负           |
> | Q' 在 A 左（虚像）     | $i < 0$      | 像距为负           |
> | Q' 在 A 右（实像）     | $i > 0$      | 像距为正           |
> | C 在 A 左（凹面）      | $r < 0$      | 曲率半径为负        |
> | C 在 A 右（凸面）      | $r > 0$      | 曲率半径为正        |
>
> 下面两图为例：
>
> ![image-20251203103433615](https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251203103433615.png)
>
> ![image-20251203103440392](https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251203103440392.png)

### 2、球面反射成像

<img src="https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251203103544608.png" alt="image-20251203103544608" style="zoom:67%;" />

$Q$ 在 A 左侧（实物）应当满足 $o > 0$；$Q'$ 在 A 左侧（虚像）应当满足 $i > 0$ 。曲率半径 $r$，若球心 C 在 A 左侧（凹面），$r < 0$；若在右侧（凸面），$r > 0$。图中，$Q'$ 在 A 的左侧，$i$ 为负，球心 C 在左，$r < 0$。根据折射公式：

$$
n \sin \theta = n' \sin \theta'
$$

如果 $\theta > 0$（入射角为正），但 $\theta'$ 是反向角，几何上 $\theta' < 0$，所以 $n' \sin \theta'$ 实际为负值。由此在特殊情况下有 $n = -n'$ 的情形（仅在极端简化/对称分析时出现）。根据基本傍轴成像公式：

$$
\frac{n'}{i} + \frac{n}{o} = \frac{n' - n}{-r}
$$

带入折射率关系，得到：

$$
\frac{-n}{i} + \frac{n}{o} = \frac{- 2n}{-r}
$$

化简得：

$$
\frac{1}{o} - \frac{1}{i} = -\frac{2}{r}
$$

这是在凹面情况下的成像公式。

### 3、傍轴物点成像和横向放大率

![image-20251203110005196](https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251203110005196.png)

根据上图，在光学系统中，傍轴光线指的是距离光轴很近，且与光轴夹角很小的光线，其数学表达为：
$$
y^2, \; y'^2 \ll o^2, \; i^2, \; r^2
$$
其中 $y$ 是物点高度，$y'$ 是像点高度，$o$ 是物距，$i$ 是像距，$r$ 是曲面半径。若 $P$ 或 $P'$ 在光轴上方，$y$ 或 $y' > 0$，若 $P$ 或 $P'$ 在光轴下方，$y$ 或 $y' < 0$

横向放大率定义为像点与物点高度之比：
$$
m = \frac{\text{Lateral Size of Image}}{\text{Lateral Size of Object}} = \frac{y'}{y}
$$

对于折射（或透镜）：折射前：$y \approx o \cdot \theta$，折射后：$-y' \approx i \cdot \theta'$，故折射定律可以近似写作：

$$
n \theta \approx n' \theta'
$$

所以：
$$
m = \frac{y'}{y} = -\frac{n i}{n' o}
$$
对于反射，介质折射率不变，$n = n'$，所以公式简化为：
$$
m = -\frac{i}{o}
$$

所以可以作出如下总结：

- $|m|>1$：像比物大
- $|m|<1$：像比物小
- $m<0$：像为倒像（上下颠倒）
- $m>0$：像为正像（方向不变）

### 4、复合光学系统的成像（多透镜/多球面系统）

复合光学系统通常包含多个折射面（如多透镜、多球面），每个面都可能有不同的介质折射率。  如图：

![image-20251203123018033](https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251203123018033.png)

- 物点$P$通过三组曲面，最终在$P'''$处成像。
- 各面折射率分别为：$n,\; n',\; n'',\; n'''$
- 各面前后物距、像距依次为：$o_1, i_1, o_2, i_2, o_3, i_3$
- 各曲面半径：$r_1, r_2, r_3$

对于每一个折射面（球面），应用折射公式：

- 第1面

$$
\frac{n'}{i_1} + \frac{n}{o_1} = \frac{n'-n}{r_1}
$$

- 第2面

$$
\frac{n''}{i_2} + \frac{n'}{o_2} = \frac{n''-n'}{r_2}
$$

- 第3面

$$
\frac{n'''}{i_3} + \frac{n''}{o_3} = \frac{n'''-n''}{r_3}
$$

对于每一面，也可写作透镜公式：
$$
\frac{f_1'}{i_1} + \frac{f_1}{o_1} = 1 \\
\frac{f_2'}{i_2} + \frac{f_2}{o_2} = 1 \\
\frac{f_3'}{i_3} + \frac{f_3}{o_3} = 1
$$

每一面对应的横向放大率为：
$$
m_1 = -\frac{n i_1}{n' o_1} \\
m_2 = -\frac{n' i_2}{n'' o_2} \\
m_3 = -\frac{n'' i_3}{n''' o_3}
$$

物点高度$h$与视轴夹角$u$的关系：
$$
u \approx \frac{h}{QA_1} = \frac{h}{o_1}
$$
经过第一折射面后的角度$u'$：
$$
-u' = \frac{h}{A_1 Q'} = \frac{h}{i_1}
$$
所以：
$$
\frac{u}{u'} = -\frac{i_1}{o_1}
$$

如果将所有面连乘，总放大率为：
$$
m = \frac{y'''}{y} = m_1 m_2 m_3 = \left(-\frac{n i_1}{n' o_1}\right) \left(-\frac{n' i_2}{n'' o_2}\right)\left(-\frac{n'' i_3}{n''' o_3}\right)
$$
这里给出拉格朗日-亥姆霍兹不变量：
$$
y n u = y' n' u' = y'' n'' u'' = \cdots
$$
其中，$y, y', y''$ 分别为每一面上的物/像高度，$n, n', n''$ 为每一面对应的折射率，$u, u', u''$ 为每一面上光线与光轴夹角。这是在傍轴近似下，光学系统内的一个重要不变量，描述了光束在系统内的传递规律。

## 七、薄透镜成像

### 1、焦距计算

![image-20251203125517440](https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251203125517440.png)

薄透镜是指厚度$d$远小于焦距$f$的透镜，可以将两球面的顶点$A_1, A_2$近似为同一点（光心），从而简化成像计算。在上图中，$n$为透镜前介质折射率（通常取空气$n \approx 1$），$n_L$为透镜材料折射率$n'$为透镜后介质折射率（通常也是空气），$r_1$、$r_2$为两球面半径，$o_1$、$i_1$为第一球面前的物距与像距，$o_2$、$i_2$为第二球面前的物距与像距，$o, i$为薄透镜近似下的物距、像距（从光心$O$测量）。

对于球面$\Sigma_1$：
$$
\frac{n_L}{i_1} + \frac{n}{o_1} = \frac{n_L - n}{r_1}
$$

对于球面$\Sigma_2$：
$$
\frac{n'}{i_2} + \frac{n_L}{o_2} = \frac{n' - n_L}{r_2}
$$

每一面可定义主焦距（以前后介质为基准）：
$$
f_1 = \frac{n}{n_L - n} r_1 \\
f_1' = \frac{n_L}{n_L - n} r_1 \\
f_2 = \frac{n_L}{n' - n_L} r_2 \\
f_2' = \frac{n'}{n' - n_L} r_2
$$

由图中：
$$
o \approx o_1, \quad i \approx i_2, \quad -o_2 \approx i_1
$$
其中$d$为厚度，当$d \to 0$时，$A_1, A_2$合并为光心$O$，即薄透镜近似。将两球面成像公式联立并消去中间像，得到合成公式，对第一面：
$$
\frac{f_1'}{i_1} + \frac{f_1}{o_1} = 1
$$
对第二面：
$$
\frac{f_2'}{i_2} + \frac{f_2}{o_2} = 1
$$
消去中间变量，得到：
$$
\frac{f_1' f_2'}{i} + \frac{f_1 f_2}{o} = f_1' + f_2
$$
当$d \to 0$，$f_1' \approx f_2' \approx f'$，$f_1 \approx f_2 \approx f$，合并简化为：
$$
\frac{f'}{i} + \frac{f}{o} = 1
$$
其中，$f$为物方焦距，$f'$为像方焦距，$o$为物距（从光心算起）$i$为像距（从光心算起）。

### 2、磨镜者公式

下面推导磨镜者公式，其描述了透镜的焦距与其材料折射率以及两面曲率半径的关系。根据上面推导的公式：
$$
\frac{f_1' f_2'}{i} + \frac{f_1 f_2}{o} = f_1' + f_2
$$

$$
\frac{f'}{i} + \frac{f}{o} = 1
$$

得到像方焦距 $f'$ 为：
$$
f' = \frac{f_1' f_2'}{f_1' + f_2}
$$

将 $f_1', f_2'$ 代入得：
$$
f' = \frac{
    \dfrac{n_L}{n_L - n} r_1 \cdot \dfrac{n'}{n' - n_L} r_2
}{
    \dfrac{n_L}{n_L - n} r_1 + \dfrac{n'}{n' - n_L} r_2
}
$$

化简分子分母，得到：
$$
f' = \frac{n' r_1 r_2}{ n_L r_2 (n_L - n) + n' r_1 (n' - n_L) }
$$
进一步整理，常用形式为：
$$
f' = \frac{n'}{ \dfrac{n_L - n}{n_L} \cdot \dfrac{1}{r_1} + \dfrac{n' - n_L}{n_L} \cdot \dfrac{1}{r_2} }
$$

类似地，物方焦距 $f$：
$$
f = \frac{f_1 f_2}{f_1 + f_2'}
$$
代入并化简：

$$
f = \frac{n n_L r_1 r_2}{ n_L r_2 (n_L - n) + n r_1 (n' - n_L) }
$$

由于焦距间关系通常有
$$
\frac{f'}{f} = \frac{n'}{n}
$$

在空气中的薄透镜（$n = n' = 1$）便满足
$$
f = f' = \frac{1}{(n_L - 1)\left( \frac{1}{r_1} - \frac{1}{r_2} \right)}
$$

根据上面的推导，我们规定，如果$f>0,f'>0$，则为凸透镜，如果$f<0,f'<0$，则为凹透镜。

### 3、牛顿成像公式

![image-20251203130848890](https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251203130848890.png)

对于上图我们规定：$F,F'$为焦点，若 $Q$ 在 $F$ 的左侧，则 $x > 0$，若 $Q$ 在 $F$ 的右侧，则 $x < 0$，若 $Q'$ 在 $F'$ 的左侧，则 $x' < 0$，若 $Q'$ 在 $F'$ 的右侧，则 $x' > 0$。对于对称的凸透镜，若$n=n',f=f'$，有：
$$
o = f + x \\
i = f' + x'
$$

带入公式：
$$
\frac{1}{f + x} + \frac{1}{f' + x'} = \frac{1}{f}
$$

经过整理，得到牛顿公式：

$$
x x' = f^2 \qquad \text{(若 } f = f' \text{)} \\
x x' = f f'
$$

### 4、横向放大倍数

横向放大率 $m$ 描述物像的尺寸比例：
$$
m = \frac{\text{像高}}{\text{物高}}
$$

![image-20251203125517440](https://laoguantx.top/article/物理/普通物理学/几何光学/image-20251203125517440.png)

对于第一折射面 $\Sigma_1$，物距 $O_1 = o$，放大率 $m_1$，有：
$$
m_1 = -\frac{n i_1}{n_L o_1}
$$
对于第二折射面 $\Sigma_2$，物距 $-o_2 = i_1$，放大率 $m_2$，有：
$$
m_2 = -\frac{n_L i_2}{n' o_2}
$$
总横向放大率为两面的乘积：
$$
m = m_1 m_2
$$

代入上式：
$$
m = \left(-\frac{n i_1}{n_L o_1}\right) \left(-\frac{n_L i_2}{n' o_2}\right)
  = \frac{n i_1 n_L i_2}{n_L o_1 n' o_2}
  = \frac{n i_1 i_2}{n' o_1 o_2}
$$

利用 $o_1 = o$, $i_2 = i$, $-o_2 = i_1$，整理得：
$$
m = \frac{n i_1 i}{n' o (-i_1)} = -\frac{n i}{n' o}=-\frac{fi}{f'o}
$$

对于空气中薄透镜（$n=n'=1$）：
$$
m = -\frac{i}{o}
$$

利用牛顿公式 $x x' = f f'$，可以进一步得到：

$$
m = -\frac{f}{x} = -\frac{x'}{f'}
$$

定义屈光度是焦距的倒数（以米为单位），可以用来去解决生活中的相关问题：
$$
P = \frac{1}{f(m)}
$$

