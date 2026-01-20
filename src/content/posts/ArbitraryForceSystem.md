---
title: 一般力系
published: 2025-09-28
category: ["物理", "力学"]
tags: ["理论力学", "静力学"]
alias: "arbitraryforcesystem"
---

## 一、力对点的矩和力对轴的矩

### 1、力对点的矩

#### (1) 力对点之矩的定义

力使刚体绕某一点转动的效应由力对点的矩度量。力可以对空间任意一点取矩，矩心和力所决定的平面可以有任意方位，所以空间力对任一点的矩应该表示成矢量。

![image-20250923144058705](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250923144058705.png)

规定力矩矢符号为$M_o(F)$，力矩矢是一个定位矢量，它的大小和方向都与作用点$O$的位置有关。

#### (2) 力对点之矩的矢积表达式

$$
M_O(F)=r\times F
$$

即力对点的矩矢等于矩心到该力作用点的矢径与该力的矢量积。

#### (3) 力对点之矩的解析表达式

![image-20250923144929761](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250923144929761.png)
$$
M_O\left(F\right)=\left(yF_z-zF_y\right)\boldsymbol{i}+\left(zF_x-xF_z\right)\boldsymbol{j}+\left(xF_y-yF_x\right)\boldsymbol{k}
$$

> **证明**：
>
> $$
> r=x\boldsymbol{i}+y\boldsymbol{j}+z\boldsymbol{k}
> $$
>
> $$
> F=F_x\boldsymbol{i}+F_y\boldsymbol{j}+F_z\boldsymbol{k}
> $$
>
> 把上两式代入$M_O(F)=r\times F$得：
> $$
> \begin{gathered}M_O(F)=\begin{vmatrix}\boldsymbol{i}&\boldsymbol{j}&\boldsymbol{k}\\x&y&z\\F_x&F_y&F_z\end{vmatrix}\\M_O(F)=\begin{vmatrix}y&z\\F_y&F_z\end{vmatrix}\boldsymbol{i}-\begin{vmatrix}x&z\\F_x&F_z\end{vmatrix}\boldsymbol{j}+\begin{vmatrix}x&y\\F_x&F_y\end{vmatrix}\boldsymbol{k}\\M_O(F)=\begin{pmatrix}yF_z-zF_y\end{pmatrix}\boldsymbol{i}+(zF_x-xF_z)\boldsymbol{j}+(xF_y-yF_x)\boldsymbol{k}\end{gathered}
> $$

### 2、力对轴的矩

#### (1) 力对轴之矩的定义

![image-20250923144915997](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250923144915997.png)

力对轴的矩用来量度力使所作用刚体绕轴转动的效应。

#### (2) 力对轴之矩的矢积表达式

把力$F'$的大小与其作用线到轴$z$的垂直距离的乘积$F'd$加以适当的正负号，有：
$$
M_z(F)=M_z(F^{\prime})=M_O(F^{\prime})=\pm F^{\prime}d
$$
即力$F$对任一轴的矩等于此力在该轴的垂直面上的投影对投影面和该轴交点的矩。那么，关于力对轴之矩存在下面几种特殊情况：

1. 力和轴平行，即$F'=0$，力对轴的矩等于$0$。
2. 力的作用线通过该轴，即$d=0$，力对轴的矩等于$0$。

#### (3) 力对轴之矩的解析表达式

![image-20250923145247711](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250923145247711.png)

以$(x,y,z)$表示力$F$作用点$A$的坐标，$F_x$、$F_y$、$F_z$表示力$F$在各坐标轴上的投影，力$F$对轴$z$的矩为：

$$
M_z(F)=M_z(F_x^{\prime})+M_z(F_y^{\prime})=xF_y-yF_x
$$
同样地，可以得到：
$$
M_x(F)=yF_z-zF_y,\quad M_y(F)=zF_x-xF_z,\quad M_z(F)=xF_y-yF_x
$$

### 3、力矩关系定理

力对坐标轴轴的矩的解析表达式为：
$$
M_x(F)=yF_z-zF_y,\quad M_y(F)=zF_x-xF_z,\quad M_z(F)=xF_y-yF_x
$$
力对原点的矩的解析表达式为：
$$
M_O\left(F\right)=\left(yF_z-zF_y\right)\boldsymbol{i}+\left(zF_x-xF_z\right)\boldsymbol{j}+\left(xF_y-yF_x\right)\boldsymbol{k}
$$
比较可得：
$$
\begin{align} 
[M_O(F)]_x=M_x(F) \\ [M_O(F)]_y=M_y(F)\\ [M_O(F)]_z=M_z(F)
\end{align}
$$
所以，力对坐标原点的矩在各坐标轴上的投影，等于该力对相应坐标轴的矩。反过来，若已知力对坐标轴的矩，则反过来可以求得对原点的矩的大小：
$$
\begin{aligned}M_{O}&=\sqrt{M_x^2+M_y^2+M_z^2}\\&=\sqrt{(yF_z-zF_y)^2+(zF_x-xF_z)^2+(xF_y-yF_x)^2}\end{aligned}
$$

和方向余弦：

$$
\cos(M_O,\boldsymbol{i})=\frac{yF_z-zF_y}{M_O},\quad\cos(M_O,\boldsymbol{j})=\frac{zF_x-xF_z}{M_O},\quad\cos(M_O,\boldsymbol{k})=\frac{xF_y-yF_x}{M_O}
$$

## 二、任意力系的简化和合成

### 1、力线平移定理

把力$F$作用线向某点$O$平移时，必须附加一个力偶，此附加力偶矩矢等于原力$F$对点$O$的矩矢。

![image-20250923151354183](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250923151354183.png)

上图利用加减平衡力系定理说明这个问题。其中$F=F'=F'',M=r\times F=M_O(F)$

### 2、任意力系的简化

#### (1) 空间任意力系的简化

空间任意力系向任一点简化后，得到一个空间共点力系和一个空间力偶系。并将他们合成。

![image-20250923151635714](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250923151635714.png)

共点力系$(F_1^{\prime},F_2^{\prime},\cdots,F_n^{\prime})$的合成结果为一作用在点$O$的力$F_{R}^{\prime}$。这个力$F_{R}^{\prime}$称为原空间任意力系的主矢。

$$
\begin{aligned}
F^{\prime}{}_{R}=&F^{\prime}{}_{1}+F^{\prime}{}_{2}+\cdots+F^{\prime}_{n}\\=&F_{1}+F_{2}+\cdots+F_{n}
\end{aligned}
$$
附加力偶系的合成结果是一个力偶，此力偶的矩矢用$M_{O}$代表，称为原空间任意力系对简化中心$O$的主矩。

$$
\begin{aligned}
M_O=&M_1+M_2+\cdots+M_n\\=&M_O\left(F_1\right)+M_O\left(F_2\right)+\cdots+M_O\left(F_n\right)
\end{aligned}
$$
由此得出结论：空间任意力系对简化中心$O$的主矢为：$F'_{\mathrm{R}}=\sum F_{i}$，主矩为：$M_{o}=\sum M_{o}(F_{i})$。空间任意力系向任一点简化后，一般得到一个力和一个力偶。这个力称为原力系的主矢，它等于力系中所有各力的矢量和，作用在简化中心$O$，它与简化中心的位置无关。这个力偶称为该力系简化中心的主矩，它等于力系中所有各力对该简化中心的矩之矢量和，主矩则一般与简化中心的位置有关。

#### (2) 主矢与主矩的计算

主矢$F^\prime_{R}$在直角坐标系$O_{xyz}$的投影：
$$
F'_{Rx}=\sum F_x\:,\:F'_{Ry}=\sum F_y\:,\:F'_{Rz}=\sum F_z
$$

主矢的大小和方向余弦：

$$
\begin{aligned}
F_{\mathrm{R}}^{\prime}=&\sqrt{F_{\mathrm{R}x}^{\prime2}+F_{\mathrm{R}y}^{\prime2}+F_{\mathrm{R}z}^{\prime2}}
\\=&\sqrt{(\sum F_x)^2+\left(\sum F_y\right)^2+\left(\sum F_z\right)^2}

\end{aligned}
$$

$$
\cos(F_{R}^{\prime},\boldsymbol{i})=\frac{F_{Rx}^{\prime}}{F_{R}^{\prime}},\quad\cos(F_{R}^{\prime},\boldsymbol{j})=\frac{F_{Ry}^{\prime}}{F_{R}^{\prime}},\quad\cos(F_{R}^{\prime},\boldsymbol{k})=\frac{F_{Rz}^{\prime}}{F_{R}^{\prime}}
$$

主矩计算通常用解析法，且考虑到空间力对点的矩与力对过该点的轴的关系，把空间力对点的矩的矢量计算转换为对轴的代数计算：
$$
M_O=\sqrt{\left(\sum M_{ix}\right)^2+\left(\sum M_{iy}\right)^2+\left(\sum M_{iz}\right)^2}
$$

$$
\cos({M}_O,\boldsymbol{i})=\frac{\sum M_{ix}}{M_O},\quad\cos({M}_O,\boldsymbol{j})=\frac{\sum M_{iy}}{M_O},\quad\cos({M}_O,\boldsymbol{k})=\frac{\sum M_{iz}}{M_O}
$$

#### (3) 平面任意力系的简化

对于平面任意力系的简化，可参考空间任意力系的简化过程进行，注意到在平面中将力偶的矩定义为代数量，得到以下结论：平面任意力系向作用面内任一点$O$简化的结果，是一个力和一个力偶。这个力作用在简化中心$O$，它的力矢等于原力系中各力的矢量和，并称为原力系的主矢。这个力偶的矩等于各附加力偶矩的代数和，它称为原力系对简化中心$O$的主矩，并在数值上等于原力系中各力对简化中心$O$的力矩的代数和。

#### (4) 补充：固定端（插入端）约束[^1]

![image-20250923153231278](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250923153231278.png)

上图为固定端约束示意图。

### 3、任意力系的合成结果

#### (1) 力系合成为合力偶

$F_{R}^{\prime}{=}0$，而$M_O\neq0$，则原力系合成为一个矩矢为$M_{O}$的合力偶。该力系的主矩不随简化中心的位置而改变。

#### (2) 力系合成为合力

1. $F_{R}^{\prime}\neq {0},M_O=0$，则原力系合成为一个作用于简化中心$O$的合力$F_R$，且$F_{R}=F_R^{\prime}$。

2. $F_R^{\prime}\neq0,M_O\neq0$，且$F_{R}^{\prime}\perp M_O$。则原力系仍然合成为一个合力$F_R$。方法如下图：

   ![image-20250923154535471](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250923154535471.png)

#### (3) 力系合成为力螺旋

$F_R^{\prime}\neq0,M_O\neq0$，且$F_R^\prime \parallel M_O$ ，力系合成为一个力（作用于简化中心）和一个力偶，且这个力垂直于这个力偶的作用面。这样的一个力和一个力偶的组合称为力螺旋。下图是一个右手螺旋，即力矢$F'_R$与力偶矩矢$M_O$指向相同。

![image-20250923154847465](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250923154847465.png)

$F_R^{\prime}\neq0,M_O\neq0$,且$F_R^{\prime}$与$M_O$成任意角，力系合成为一个力螺旋。

<img src="https://laoguantx.top/article/物理/理论力学/一般力系/image-20250923155155409.png" alt="image-20250923155155409" style="zoom:50%;" />

### 4、合力矩定理

![image-20250928134746695](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250928134746695.png)

在空间任意力系（$ F_1^{\prime },F_2^{\prime }, \cdotp \cdotp \cdotp, F_n^{\prime }$）的合力为$F_R$的情况下，有$M_O( F_R) = M( F_R, F_{R}{^{\prime \prime }})= M_O$，根据主矩的定义

$$
M_O=\sum M_O(F_i)
$$

即：
$$
M_O(F_R)=\sum M_O(F_i)
$$

1. 力系如有合力，则合力对任一点的矩等于力系中各力对同一点的矩的矢量和。
2. 力系如有合力，则合力对任一轴的矩等于力系中各力对同一轴的矩的代数和。

## 三、任意力系的平衡条件和平衡方程

### 1、空间任意力系平衡的充要条件

力系中所有各力的矢量和等于零，以及这些力对任何一点的矩的矢量和也等于零。在空间中，三个方向上的合力为零，力矩也为零，即为平衡。

### 2、空间平行力系平衡的充要条件

![image-20250928142024325](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250928142024325.png)

上图所示，为一个空间平行力系，其中存在：
$$
\sum F_x\equiv0,\quad\sum F_y\equiv0,\quad\sum M_z\equiv0
$$
所以只需要满足：
$$
\sum F_z=0,\quad\sum M_x(F)=0,\quad\sum M_y(F)=0
$$
所以，空间平行力系平衡的充要条件是：力系中的各力在与其作用线平行的轴上的投影的代数和等于零，以及这些力对于任何两条与其垂直的轴的矩的代数和也分别等于零。

### 3、平面任意力系的平衡方程

平面任意力系可以看做是空间任意力系的特殊情况，其自身满足：
$$
\sum F_z=0,\quad\sum M_x(F)\equiv0,\quad\sum M_y(F)\equiv0
$$
所以只需要：
$$
\sum F_x=0,\quad\sum F_y=0,\quad\sum M_z(F)=0
$$
平面任意力系平衡方程的充要条件是：力系中的各力在其作用平面内两坐轴上的投影的代数和分别等于零，同时力系中的各力对任一点的矩的代数和也等于零。

平面任意力系平衡方程也存在其他形式：

1. 二矩式：
   $$
   \sum F_x=0,\quad\sum M_A(F)=0,\quad\sum M_B(F)=0
   $$
   要求$A,B$两点的连线不和$x$轴相垂直。如果平面上的力对$A,B$点的力矩同时为零，必须要求所有力的合力沿着$AB$连线方向，而$AB$不与$x$轴垂直，所以可以说明$F_y=0$，且$M_O=0$。

2. 三矩式：
   $$
   \sum M_A(F)=0,\quad\sum M_B(F)=0,\quad\sum M_C(F)=0
   $$
   要求$A,B,C$三者不共线。推导方式同上。

### 4、平面平行力系的平衡方程

![image-20250928143640991](https://laoguantx.top/article/物理/理论力学/一般力系/image-20250928143640991.png)

上图所示，为一个平面平行力系，其中存在：
$$
\sum F_x\equiv 0
$$
所以还需要满足：
$$
\sum F_y=0,\quad\sum M_O(F)=0
$$
平面平行力系平衡的充要条件：力系中的各力的代数和等于零，同时这些力对任一点矩的代数和也等于零。

## 四、静定与静不定问题的概念

### 1、相关概念

- 物体系平衡方程的数目：由$n$个物体组成的物体系，总共有不多于$3n$个独立的平衡方程。
- 静定问题：当系统中未知量数目等于或少于独立平衡方程数目时的问题。
- 静不定问题：当系统中未知量数目多于独立平衡方程数目时，不能求出全部未知量的问题。

[^1]:其他约束类型，见文章：[静力学公理和物体的受力分析](https://www.laoguantx.top/posts/staticsandforceanalysis?from=blur&banner=https%3A%2F%2Flaoguantx.top%2Flandscape%2Fapi.php%3F_%3D1758280123549_1)