---
title: 动量矩定理
published: 2025-11-27
category: ["物理", "力学"]
tags: ["理论力学", "动力学"]
alias: "theoremofangularmomentum"
---
## 一、动量矩

### 1、质点的动量矩

#### (1) 对点的动量矩

<img src="https://laoguantx.top/article/物理/理论力学/动量矩定理/image-20251118133837261.png" alt="image-20251118133837261" style="zoom:50%;" />

质点$A$的动量$m\vec{v}$对点$O$的矩，定义为质点$A$对点$O$的动量矩：
$$
\vec{L}_O(m\vec{v})=\vec{r}\times m\vec{v}
$$

$$
\vec{L}_0(m\vec{v})=\begin{vmatrix}\boldsymbol{i}&\boldsymbol{j}&\boldsymbol{k}\\x&y&z\\mv_x&mv_y&mv_z\end{vmatrix}=m(yv_z-zv_y)\boldsymbol{i}+m(zv_x-xv_z)\boldsymbol{j}+m(xv_y-yv_x)\boldsymbol{k}
$$

#### (2) 对轴的动量矩

<img src="https://laoguantx.top/article/物理/理论力学/动量矩定理/image-20251118133837261.png" alt="image-20251118133837261" style="zoom:50%;" />

动量$m\vec{v}$对各坐标轴的矩的解析表达式为：
$$
L_x(mv)=y(mv_z)-z(mv_y)
$$

$$
L_y(mv)=z(mv_x)-x(mv_z)
$$

$$
L_z(mv)=x(mv_y)-y(mv_x)
$$

比较对点的动量矩的表达式，可以得到，质点对$O$点的动量矩在坐标轴上的投影等于质点对相应轴的动量矩。

### 2、质点系的动量矩

#### (1) 对点的动量矩

质点系内各质点对某点$O$的动量矩的矢量和，称为这质点系对该点$O$的动量主矩或动量矩，用$\vec{L}_O$表示，有：
$$
\vec{L}_O=\sum\vec{M}_O(m_i\vec{v}_i)=\sum\vec{r}_i\times m\vec{m}_i
$$

#### (3) 对轴的动量矩

类似的，可以得到质点系对各坐标轴的动量矩表达式：
$$
L_x=\sum M_x(m_i\vec{v}_i)
$$

$$
L_y=\sum M_y(m_i\vec{v}_i)
$$

$$
L_z=\sum M_z(m_i\vec{v}_i)
$$

### 3、常见刚体运动的动量矩

#### (1) 平动刚体对固定点$O$的动量矩

![image-20251118134850135](https://laoguantx.top/article/物理/理论力学/动量矩定理/image-20251118134850135.png)

设刚体平移，刚体内任一点$A$的矢径是$r_i$，该点的质量为$m_i$，速度大小为$\vec{v}_i$。该质点对点$O$的动量矩为：
$$
\vec{L}_O(m_i\vec{v}_i)=\vec{r}_i\times m_i\vec{v}_i
$$
从而整个刚体对点$O$的动量矩为：
$$
\vec{L}_O=\sum \vec{M}_O(m_i\vec{v}_i)=\sum \vec{r}_i\times m_i\vec{v}_i
$$
因为刚体平移$\vec{v}_i=\vec{v}_C$，则：
$$
\vec{L}_O=\sum \vec{M}_O(m_i\vec{v}_i)=\sum (m_i\vec{r}_i\times \vec{v}_C)
$$
再一步化简，由$m\vec{r}_C=\sum m_i\vec{r}_i$得到：
$$
\vec{L}_O=m\vec{r}_C\times \vec{v}_C=\vec{r}_C\times m\vec{v}_C
$$

#### (2) 定轴转动刚体对其转轴的动量矩

<img src="https://laoguantx.top/article/物理/理论力学/动量矩定理/image-20251118135323667.png" alt="image-20251118135323667" style="zoom:50%;" />

设刚体以角速度$\omega$绕固定轴$z$转动，刚体内任意一点$A$的转动半径为$r_i$，速度为$v_i=r_i\omega$，方向同时垂直于轴$z$和转动半径$r_i$，并且指向转动前进的一方。若用$m_i$表示该质点的质量，则其动量对转轴$z$的动量矩为：
$$
M_z=(m_i\vec{v}_i)=r_im_iv_i=m_ir_i^2\omega
$$
从而整个刚体对轴$z$的动量矩为：
$$
L_z=\sum M_z(m_iv_i)=\omega\sum m_ir_i^2=\omega J_z
$$
集中$J_z$为刚体对$z$轴的转动惯量。

> [!NOTE]
>
> 转动惯量的计算参考：[各类刚体的转动惯量](https://www.laoguantx.top/posts/momentofinertiaofvariousrigidbodies/)
>
> 补充回转半径（惯性半径）概念：
> $$
> \rho_z=\sqrt\frac{J_z}{m}
> $$

#### (3) 平面运动刚体对固定点$O$的动量矩

<img src="https://laoguantx.top/article/物理/理论力学/动量矩定理/image-20251118142533774.png" alt="image-20251118142533774" style="zoom:50%;" />

这也是质点系对固定点$O$的动量矩的另一种表示，过固定点$O$建立固定坐标系$Oxyz$，以质点系的质心$C$为原点，取平移坐标系$Cx'y'z'$，质点系对固定点$O$的动量矩为：
$$
\vec{L}_O=\vec{r}_C\times m \vec{v}_C+\vec{L}_C
$$
其中$\vec{L}_C=\sum(\vec{r}_{r_i}\times m_i\vec{v}_{ri})$，指的是质点系相对于质心$C$的动量矩。

> **证明**：
>
> 过固定点$O$建立固定坐标系$Oxvz$，以质点系的质心$C$为原点，取平动坐标系 $Cx^\prime v^{\prime}z^{\prime}$,它以质心的速度 $\vec{v}_C$运动。设质点系内任一质点$A_i$在这平移坐标系中的相对速度是$\vec{v} _{ri}$，该点的绝对速度$\vec{v}_{i}=\vec{v}_{ei}+ \vec{v}_{ri}= \vec{v}_{C}+ \vec{v}_{ri}$，则质点系对固定点$O$的动量矩为：
>
> $$
> \begin{aligned}
> \vec{L}_O&=\sum(r_i\times m_i\vec{v}_i)\\&=\sum[(\vec{r}_C+\vec{r}_{ri})\times m_i(\vec{v}_C+\vec{v}_{ri})]
> \\&=\sum(\vec{r}_C\times m_i\vec{v}_C)+\sum(\vec{r}_C\times m_i\vec{v}_{\mathrm{r}i})+\sum(\vec{r}_{ri}\times m_i\vec{v}_C)+\sum(\vec{r}_{ri}\times m_i\vec{v}_{ri})
> \end{aligned}
> $$
> 上式的第一项化简为：
> $$
> \sum ( \vec{r}_C \times m_i \vec{v}_C )
> = \vec{r}_C \times \sum m_i \vec{v}_C
> = \vec{r}_C \times m \vec{v}_C
> $$
> 第二项化简为：
> $$
> \sum ( \vec{r}_C \times m_i \vec{v}_{ri} )
> = \vec{r}_C \times \sum ( m_i \vec{v}_{ri} )
> = \vec{r}_C \times \sum m_i \vec{v}_{rC}
> = 0
> $$
> 第三项化简为：
> $$
> \sum ( \vec{r}_{ri} \times m_i \vec{v}_C )
> = \sum ( m_i \vec{r}_{ri} ) \times \vec{v}_C
> = \sum m_i \vec{r}_{rC} \times \vec{v}_C
> = 0
> $$
> 综上得到结论。

## 二、动量矩定理

### 1、动量矩定理

#### (1) 对固定点的动量矩定理

因为质点系对定点$O$的动量矩为：
$$
\vec{L}_O=\sum(\vec{r}_i\times m_i\vec{v}_i)
$$
将其两端求时间的导数，得到：
$$
\begin{aligned}
\frac{\mathrm{d} \vec{L}_O}{\mathrm{d} t}
&= \sum \left( \frac{\mathrm{d} \vec{r}_i}{\mathrm{d} t} \times m_i \vec{v}_i + \vec{r}_i \times m_i \frac{\mathrm{d} \vec{v}_i}{\mathrm{d} t} \right)
\\&= \sum \left( \vec{v}_i \times m_i \vec{v}_i + \vec{r}_i \times m_i \vec{a}_i \right)
\\&= \sum \left( \vec{r}_i \times m_i \vec{a}_i \right)
\\&= \sum \left( \vec{r}_i \times \vec{F}_i \right)
\\&= \sum \vec{M}_O (\vec{F}_i)
\end{aligned}
$$
其中$\sum \vec{M}_O(\vec{F}_i)$可以分为外力对$O$点的矩和内力对$O$点的矩两项，即：
$$
\sum\vec{M}_O(\vec{F}_i)=\sum\vec{M}_O(\vec{F}_i^{(e)})+\sum\vec{M_O}(\vec{F}_i^{(i)})
$$
而内力对$O$点的矩为$0$，所以得到：
$$
\frac{\mathrm{d} \vec{L}_O}{\mathrm{d} t}=\sum \vec{M}_O(\vec{F}_i^{(e)})
$$
令$\vec{M}_O=\sum\vec{M}_O(\vec{F}_i^{(e)})$，则：
$$
\frac{\mathrm{d} \vec{L}_O}{\mathrm{d} t}=\sum \vec{M}_O
$$
质点系对某固定点的动量矩随时间的变化率，等于作用于质点系的全部外力对同一点的矩的矢量和（外力对点$O$的主矩），这就是质点系对定点的动量矩定理。

#### (2) 对定轴的动量矩定理

将上式投影到固定坐标轴系上，注意到导数的投影等于投影的导数，则得：
$$
\frac{\mathrm{d} L_x}{\mathrm{d} t}
= \sum M_x \left( \vec{F}_i^{\,(e)} \right) \equiv M_x
$$
$$
\frac{\mathrm{d} L_y}{\mathrm{d} t}
= \sum M_y \left( \vec{F}_i^{\,(e)} \right) \equiv M_y
$$
$$
\frac{\mathrm{d} L_z}{\mathrm{d} t}
= \sum M_z \left( \vec{F}_i^{\,(e)} \right) \equiv M_z
$$

质点系对某固定轴的动量矩随时间的变化率，等于作用于质点系的全部外力对同一轴的矩的代数和，这就是质点系对定轴的动量矩定理。

### 2、动量矩守恒定理

如果作用于质点系的所有外力对某固定点（或固定轴）的主矩始终等于零，则质点系对该点（或该轴）的动量矩保持不变。这就是质点系的动量矩守恒定理，它说明了质点系动量矩守恒的条件。

## 三、刚体定轴转动微分方程

![image-20251125133843188](https://laoguantx.top/article/物理/理论力学/动量矩定理/image-20251125133843188.png)

设刚体在主动力$F_1,F_2,\cdots,F_n$作用下绕定轴$z$转动，与此同时，轴承上产生了约束力$F_A,F_B$。用$M_z=\sum M_z(F^{(e)})$表示作用在刚体上的外力对转轴$z$的主矩（约束力$F_A,F_B$自动消去）。刚体对转轴$z$的动量矩：
$$
L_z=J_z\omega
$$
于是根据动量矩定理：
$$
\frac{\mathrm{d}L_z}{\mathrm{d}t}=M_z
$$
可得：
$$
J_z\frac{\mathrm{d}\omega}{\mathrm{d}t}=M_z
$$
考虑到：
$$
\alpha=\frac{\mathrm{d}\omega}{\mathrm{d}t}=\frac{\mathrm{d}^2\varphi}{\mathrm{d}t^2}
$$
所以上式可以写为：
$$
J_z\frac{\mathrm{d}^2\varphi}{\mathrm{d}t^2}=\sum M_z(F_i^{(e)})
$$
或：
$$
J_z\ddot{\varphi}=M_z
$$
这就是定轴转动的微分方程。即，定轴转动刚体对转轴的转动惯量与角加速度的乘积，等于作用于刚体的外力对转轴的主矩，这就是刚体定轴转动微分方程。

## 四、相对于质心的动量矩定理

<img src="https://laoguantx.top/article/物理/理论力学/动量矩定理/image-20251125134802192.png" alt="image-20251125134802192" style="zoom:50%;" />

过固定点$O$建立固定直角坐标系$Oxyz$，以质点系的质心$C$为原点，取平移坐标系$Cx'y'z'$，质点系对固定点$O$的动量矩为：
$$
\vec{L}_O=\vec{r}_C\times\sum m_i\vec{v}_C+\vec{L}_C
$$
其中$\vec{L}_C$即为质点系相对质心$C$的动量矩。

### 1、相对于质心的动量矩定理

由对定点的动量矩定理：
$$
\frac{\mathrm{d}\vec{L}_o}{\mathrm{d}t} = \sum \vec{M}_o(\vec{F}_i^{(e)}) = \sum (\vec{r}_i \times \vec{F}_i^{(e)})
$$
有：
$$
\frac{\mathrm{d}}{\mathrm{d}t} \left( \vec{r}_C \times \sum m_i \vec{v}_C + \vec{L}_C \right) = \sum (\vec{r}_i \times \vec{F}_i^{(e)})
$$
左边可以进行如下化简：
$$
\begin{aligned}
左边&= \frac{\mathrm{d} \vec{r}_C}{\mathrm{d} t} \times \sum m_i \vec{v}_C
  + \vec{r}_C \times \sum m_i \frac{\mathrm{d}\vec{v}_C}{\mathrm{d} t}
  + \frac{\mathrm{d} \vec{L}_C}{\mathrm{d} t} \\[1em]
&= \vec{v}_C \times m_R \vec{v}_C
  + \vec{r}_C \times m_R \vec{a}_C
  + \frac{\mathrm{d} \vec{L}_C}{\mathrm{d} t} \\[1em]
&= \vec{r}_C \times m_R \vec{a}_C
  + \frac{\mathrm{d} \vec{L}_C}{\mathrm{d} t}
\end{aligned}
$$
右边可以进行如下化简：
$$
右边= \sum \left[ (\vec{r}_C + \vec{r}_{ri}) \times \vec{F}_i^{(e)} \right]
= \sum \left( \vec{r}_C \times \vec{F}_i^{(e)} \right)
+ \sum \left( \vec{r}_{ri} \times \vec{F}_i^{(e)} \right)
$$
于是可以将方程化简为：
$$
\vec{r}_C \times m_R \vec{a}_C
+ \frac{\mathrm{d} \vec{L}_C}{\mathrm{d} t}
= \sum \left( \vec{r}_C \times \vec{F}_i^{(e)} \right)
+ \sum \left( \vec{r}_{ri} \times \vec{F}_i^{(e)} \right)
$$
由质心运动定理：
$$
m_R\vec{a}_C=\sum\vec{F}^{(e)}_i
$$
所以上式可以化简为：
$$
\frac{\mathrm{d}\vec{L}_C}{\mathrm{d}t}=\vec{M}_C
$$
这就是相对于质心的动量矩定理的一般形式。即，质点系相对于质心的动量矩对时间的导数，等于作用于质点系的外力对质心的主矩。

### 2、相对于质心轴的动量矩定理

将前面所得质点系相对于质心的动量矩定理，沿着质心轴进行投影，得到：
$$
\frac{\mathrm{d}{L}_{Cz'}}{\mathrm{d}t}={M}_{Cz'}
$$
这就是相对于质心轴的动量矩定理，即，质点系相对于质心轴的动量矩对时间的导数，等于作用于质点系的外力对该轴的主矩。

## 五、刚体的平面运动微分方程

<img src="https://laoguantx.top/article/物理/理论力学/动量矩定理/image-20251125142946846.png" alt="image-20251125142946846" style="zoom:50%;" />

设刚体在外力$F_1,F_2,\cdots,F_n$作用下作平面运动。取固定坐标系$Oxyz$，使刚体平行于坐标面$Oxy$运动，且质心$C$在这个平面内，再以质心为原点作平移坐标系$Cx'y'z'$。

由运动学知，刚体的平面运动可分解成随基点（质心）的牵连平移和相对于基点（质心）的相对转动。随质心的牵连平移规律可由质心运动定理来确定：
$$
m_R\vec{a}_C=\sum\vec F
$$
而相对于质心的相对转动规律可由相对质心的动量矩定理来确定：
$$
\frac{\mathrm{d}\vec{L}_C}{\mathrm{d}t}=\vec{M}_C
$$
将前一式投影到轴$x,y$上，后一式投影到$Cz'$上，可得：
$$
m_R a_{Cx}=\sum F_x
$$

$$
m_Ra_{Cy}=\sum F_y
$$

$$
\frac{\mathrm{d}\vec{L}_{Cz'}}{\mathrm{d}t}=\vec{M}_{Cz'}
$$

将上面三个式子进行变形，得到：
$$
m_R\ddot{x}_C=\sum F_x
$$

$$
m_R\ddot{y}_C=\sum F_y
$$

$$
J_{Cz'}\ddot{\varphi}=M_{Cz'}(\vec{F})
$$

