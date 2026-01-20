---
title: 磁学的基本现象和规律
published: 2025-10-27
category: ["物理", "普通物理学"]
tags: ["电磁学"]
alias: "basicphenomenaandfundamentallawsofmagnetism"
---
## 一、安培定律

![image-20251029101332935](https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251029101332935.png)

安培定律的核心在于描述电流之间的磁场与力的关系。具体来说，先是电流产生磁场，第一段导线上的电流$i_{1}$会在其周围空间产生磁场$\vec{B}$（见下面的毕奥-萨伐尔定律），磁场方向由右手定则确定。然后磁场对第二段导线产生作用，第二段导线上的电流$i_{2}$受到第一段导线产生的磁场$\vec{B}$的作用力。此力遵循洛伦兹力公式：

$$
\mathrm{d}\vec{F}_{12}=i_2\mathrm{d}\vec{s}_2\times\vec{B}
$$

结合第一段导线产生的磁场表达式，可以推导出安培定律的形式。力的方向通过矢量叉乘确定，第一段导线的电流方向$\mathrm{d}\vec{s} _1$和指向第二段导线的单位矢量$\hat{r}_{12}$叉乘，确定磁场方向。第二段导线的电流方向 $\mathrm{d}\vec{s}_2$再与磁场方向叉乘，确定力的方向。整合上式，得到安培定律的计算式：
$$
\mathrm{d}\vec{F}_{12}=k\frac{i_2\mathrm{d}\vec{s}_2\times(i_1\mathrm{d}\vec{s}_1\times\hat{r}_{12})}{r_{12}^2}
$$

## 二、毕奥-萨伐尔定律

### 1、定律内容

![image-20251029101547007](https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251029101547007.png)

毕奥-萨伐尔定律是电磁学中的一个基本定律，用于描述电流元（微小段载流导线）产生的磁场。这一定律奠定了磁场与电流之间的关系。毕奥-萨伐尔定律的微分形式为：

$$
\mathrm{d}\vec{B} = \frac{\mu_0}{4\pi} \frac{i\,\mathrm{d}\vec{s} \times \hat{r}}{r^2}
$$
其积分形式为：
$$
\vec{B}=\frac{\mu_0}{4\pi}\oint_L\frac{id\vec{s}\times\hat{r}}{r^2}
$$

### 3、毕奥-萨伐尔定律应用

#### (1) 带电直导线产生的磁场

<img src="https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251029102130621.png" alt="image-20251029102130621" style="zoom:50%;" />

微元磁场公式
$$
\mathrm{d}\vec{B} = \frac{\mu_0}{4\pi} \frac{i \mathrm{d}\vec{s} \times \hat{r}}{r^2}
$$

$$
\mathrm{d}B = \frac{\mu_0}{4\pi} \frac{i \mathrm{d}x \sin\theta}{r^2}
$$

在点 $P$ 处进行标量积分
$$
B = \int_{A_1}^{A_2} \mathrm{d}B = \frac{\mu_0}{4\pi} \int_{A_1}^{A_2} \frac{i \sin\theta \mathrm{d}x}{r^2}
$$

结合几何关系：
$$
r_0 = r \sin(\pi - \theta) = r \sin\theta, \quad r = \frac{r_0}{\sin\theta}
$$

坐标关系：
$$
x = -r_0 \cot\theta, \quad \mathrm{d}x = \frac{r_0 \mathrm{d}\theta}{\sin^2\theta}
$$

代入积分公式：
$$
B = \int_{\theta_1}^{\theta_2} \frac{\mu_0 i \sin\theta \cdot r_0 \mathrm{d}\theta}{4\pi r_0^2} = \frac{\mu_0 i}{4\pi r_0} \int_{\theta_1}^{\theta_2} \sin\theta \mathrm{d}\theta
$$

积分结果：
$$
B = \frac{\mu_0 i}{4\pi r_0} \left( \cos\theta_1 - \cos\theta_2 \right)
$$

若导线为无限长，将$\theta_1=0,\theta_2=\pi$，代入，可得无限长带电直导线产生的磁场：
$$
B=\frac{\mu_0i}{2\pi r_0}
$$

#### (2) 带电圆环在轴向上产生的磁场

![image-20251029102353460](https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251029102353460.png)
$$
\mathrm{d}\vec{B} = \frac{\mu_0}{4\pi} \frac{i \mathrm{d}\vec{s} \times \hat{r}}{r^2}
$$

分量关系：
$$
\mathrm{d}B_x = \mathrm{d}B \cdot \cos\alpha
$$

微元磁场大小：
$$
\mathrm{d}B = \frac{\mu_0}{4\pi} \frac{i \mathrm{d}s \sin\theta}{r^2}
$$

几何关系：
$$
\theta = \frac{\pi}{2}, \quad \sin\theta = 1, \quad r = \frac{r_0}{\sin\alpha}
$$

磁场分量积分
$$
B_x = \int \mathrm{d}B_x = \int \mathrm{d}B \cos\alpha
$$

代入公式：
$$
B = \frac{\mu_0 i}{4\pi} \int \frac{\sin^2\alpha}{r_0^2} \cos\alpha \mathrm{d}s
$$

环路周长为 $2\pi R$，积分后得到：
$$
B = \frac{\mu_0 i}{4\pi r_0^2} \sin^2\alpha \cos\alpha \cdot 2\pi R
$$

几何关系为：
$$
\sin\alpha = \frac{r_0}{\sqrt{r_0^2 + R^2}}, \quad \cos\alpha = \frac{R}{\sqrt{r_0^2 + R^2}}
$$

最终磁场公式：
$$
B = \frac{\mu_0}{2} \frac{i R^2}{\left(R^2 + r_0^2\right)^{3/2}}
$$

#### (3) 磁偶极矩定义

![image-20251029102756929](https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251029102756929.png)

写出磁场表达式：
$$
B = \frac{\mu_0 i R^2}{2 r_0^3} = \frac{\mu_0 i \pi R^2}{2 \pi r_0^3} = \frac{\mu_0 i A}{2 \pi r_0^3}
$$

定义磁偶极矩：
$$
\mu = i A = i \pi R^2
$$

代入后磁场公式：
$$
B = \frac{\mu_0 i R^2}{2 r_0^3} = \frac{\mu_0 i \pi R^2}{2 \pi r_0^3} = \frac{\mu_0 \mu}{2 \pi r_0^3}
$$

对于 $N$ 匝的线圈：
$$
\mu = N i \pi R^2
$$

矢量形式磁偶极矩：
$$
\vec{\mu} = i \vec{A}
$$

#### (4) 氢原子磁场和波尔磁子

<img src="https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251029105711801.png" alt="image-20251029105711801" style="zoom:50%;" />

根据电流的微观定义：单位时间内流过某一横截面的电荷量。可以写出氢原子外围电子的电流，其中$\nu$为电子绕原子核的运动频率：
$$
i = e \nu= 1.60 \times 10^{-19} \times 6.63 \times 10^{15} = 1.63 \times 10^{-3} \, \text{A}
$$

$$
B = \frac{\mu_0 i}{2R} = \frac{4\pi \times 10^{-7} \times 1.63 \times 10^{-3}}{2 \times 5.29 \times 10^{-11}} = 12.6 \, \text{T}
$$

氢原子电子的磁偶极子比较特殊，单独拿出，称为波尔磁子，是量子力学的一个基本单位。
$$
\mu_B = iA = 1.63 \times 10^{-3} \times \pi \times (5.29 \times 10^{-11})^2
$$

$$
= 0.923 \times 10^{-23} \, \text{A·m}^2
$$

#### (5) 无限长带电平板条在距离平板垂直平分线$R$处的磁场强度

![image-20251029103508167](https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251029103508167.png)

将平板分割为无穷多带点直线，使用前文所推导的公式，计算得：
$$
\mathrm{d}B = \frac{\mu_0 \mathrm{d}i}{2 \pi d} = \frac{\mu_0}{2 \pi} \frac{i}{a} \mathrm{d}x
$$

由题目可知，在沿着平板条长度方向的磁场为$0$，只需要计算垂直于平板条长度方向的磁场
$$
\mathrm{d}B_x = \mathrm{d}B \cdot \cos \theta
$$

$$
d = \frac{R}{\cos \theta}
$$

化简积分得：
$$
B_x = \int \mathrm{d}B_x= \int \frac{\mu_0 i \cos^2 \theta \mathrm{d}x}{2 \pi R a}= \frac{\mu_0 i}{2 \pi a R} \int \cos^2 \theta \mathrm{d}x
$$

计算微元：
$$
x = R \tan \theta \quad \mathrm{d}x = R \frac{\mathrm{d}\theta}{\cos^2 \theta}
$$

积分得出结果
$$
B_x = \frac{\mu_0 i}{2 \pi a R} \int \cos^2 \theta \mathrm{d}x= \frac{\mu_0 i}{2 \pi a} \int_{-\alpha}^{\alpha} \mathrm{d}\theta = \frac{\mu_0 i}{\pi a} \alpha = \frac{\mu_0 i}{\pi a} \tan^{-1} \frac{a}{2R}
$$

在特殊情况下，若点远离条带：
$$
\alpha \approx \tan \alpha = \frac{a}{2R}, \quad B = \frac{\mu_0 i}{2 \pi R}
$$

可以将条带近似看做为直导线。

若点非常接近条带：
$$
R \to 0, \quad \alpha = \frac{\pi}{2}, \quad B = \frac{\mu_0 i}{2a}
$$
可以将条带近似看作为无限大通电平板。于是得到了水平方向上无限长通电平板产生的磁场。

#### (6) 螺旋管在管内轴向上产生的磁场

![image-20251029105930082](https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251029105930082.png)

螺线管看作是非常多的细导线环的叠加，按照图示，微分形式的磁场表达式：
$$
\mathrm{d}B = \frac{\mu_0}{2} \frac{R^2 i n \mathrm{d}l}{\left[R^2 + (x-l)^2\right]^{3/2}}
$$

其中$n$为单位长度线圈的匝数，总磁场可以积分得到：
$$
B = \frac{\mu_0}{2} \int_{-L/2}^{L/2} \frac{R^2 n \mathrm{d}l}{\left[R^2 + (x-l)^2\right]^{3/2}}
$$

其中：
$$
r = \sqrt{R^2 + (x-l)^2} = \frac{R}{\sin \beta}
$$

$$
\frac{x-l}{R} = \cot \beta \implies \mathrm{d}l = \frac{R}{\sin^2 \beta} \mathrm{d}\beta
$$

进行积分化简：
$$
\begin{aligned}
B &= \frac{\mu_0}{2} \int_{\beta_1}^{\beta_2} \frac{R^2 n i}{\sin^2 \beta} \cdot \frac{R}{\left(\frac{R^2}{\sin^2 \beta}\right)^{3/2}} \mathrm{d}\beta
\\&= \frac{\mu_0}{2} \cdot n i \int_{\beta_1}^{\beta_2} \sin \beta \mathrm{d}\beta
\\&= \frac{1}{2} \mu_0 n i (\cos \beta_1 - \cos \beta_2)
\end{aligned}
$$

根据几何得出特殊角度关系：

$$
\cos \beta_1 = \frac{x+L/2}{\sqrt{R^2 + (x+L/2)^2}}
$$

$$
\cos \beta_2 = \frac{x-L/2}{\sqrt{R^2 + (x-L/2)^2}}
$$

那么对于无穷长的螺线管，可以将$\beta_1=0,\beta_2=\pi$代入，得到：
$$
B=\mu_0ni
$$
在无限长螺线管的一端，可以将$\beta_1=0,\beta_2=\frac{\pi}2$，得到：
$$
B=\frac12\mu_0ni
$$
但是在现实生活中，螺线管并不一定是单层缠绕的，可能会在同一横截面缠绕一层很厚的线圈，例如：

![image-20251029111725065](https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251029111725065.png)

上述线圈的总匝数为$N$，长度$L=2l$，厚度为$R_2-R_2$，下面在螺线管的中心位置研究问题。将这种多层螺线管看成很多个单层螺线管叠加，其中$n$表示的是单位面积的线圈匝数，有：
$$
ni = \frac{Ni}{L(R_2-R_1)}
$$

角度关系为：
$$
\cos \beta_2 = -\cos \beta_1=-\frac{l}{\sqrt{l^2 + r^2}}
$$

代入到单层螺线管的表达式中：
$$
\mathrm{d}B = \frac{1}{2} \mu_0 \frac{Ni}{2l(R_2 - R_1)} \cdot \frac{2l}{\sqrt{l^2 + r^2}} \mathrm{d}r
$$

总磁场：
$$
B = \mu_0 j l \int_{R_1}^{R_2} \frac{\mathrm{d}r}{\sqrt{l^2 + r^2}}
$$

通过积分结果：
$$
B = \mu_0 j l \ln \frac{R_2 + \sqrt{R_2^2 + l^2}}{R_1 + \sqrt{R_1^2 + l^2}}
$$

## 三、磁场高斯定理

### 1、磁通量

磁通量定义为穿过某一给定表面的总磁场，单位为韦伯，其数学表达式为：

$$
\Phi_B = \int \vec{B} \cdot \mathrm{d}\vec{A} = \int B \cos \theta \, \mathrm{d}A
$$

其中$\vec{B}$磁场矢量，$ \mathrm{d}\vec{A} $为微小面积矢量，其方向垂直于表面，$ \theta $为磁场矢量$\vec{B}$与面积矢量$ \mathrm{d}\vec{A} $的夹角。


### 2、磁场

磁场与磁通量密度的关系为：

$$
\vec{B} = \lim_{\Delta A \to 0} \frac{\Delta \Phi_B}{\Delta A}
$$

### 3、磁场高斯定律

毕奥-萨伐尔定律描述了电流元对某点磁场的贡献：
$$
\vec{B} = \frac{\mu_0}{4\pi} \int_L \frac{i \mathrm{d}\vec{s} \times \hat{r}}{r^2}
$$

对于微小区域，磁场的贡献为：
$$
\mathrm{d}\vec{B} = \frac{\mu_0}{4\pi} \frac{i \mathrm{d}\vec{s} \times \hat{r}}{r^2}
$$

![image-20251103102227954](https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251103102227954.png)

![image-20251103102703745](https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251103102703745.png)

考虑一个闭合表面上的任意两个小区域 $\mathrm{d}A_1$和 $\mathrm{d}A_2 $，其磁通量分别为：

对于区域 $\mathrm{d}A_1$：
$$
\mathrm{d}\Phi_{B1} = \vec{B} \cdot \mathrm{d}\vec{A}_1 = \frac{\mu_0 i \sin\theta}{4\pi r^2} \mathrm{d}A_1 \cos\theta
$$

由于角度关系：
$$
\mathrm{d}A_1^* = |\mathrm{d}A_1 \cos\theta| = \mathrm{d}A_1 \cos\theta, \quad \theta_1 > \frac{\pi}{2}, \quad \cos\theta_1 < 0
$$

因此：
$$
\mathrm{d}\Phi_{B1} = -\frac{\mu_0 i \sin\theta}{4\pi r^2} \mathrm{d}A_1^*
$$

对于区域$\mathrm{d}A_2$：
$$
\mathrm{d}\Phi_{B2} = \vec{B} \cdot \mathrm{d}\vec{A}_2 = \frac{\mu_0 i \sin\theta}{4\pi r^2} \mathrm{d}A_2 \cos\theta
$$

由于角度关系：
$$
\mathrm{d}A_2^* = |\mathrm{d}A_2 \cos\theta| = \mathrm{d}A_2 \cos\theta, \quad \theta_2 < \frac{\pi}{2}, \quad \cos\theta_2 > 0
$$

因此：
$$
\mathrm{d}\Phi_{B2} = \frac{\mu_0 i \sin\theta}{4\pi r^2} \mathrm{d}A_2^*
$$

对于闭合曲面，区域$\mathrm{d}A_1$和$\mathrm{d}A_2$面积满足：
$$
\mathrm{d}A_1^* = \mathrm{d}A_2^*
$$

于是磁通量满足：
$$
\mathrm{d}\Phi_{B1} + \mathrm{d}\Phi_{B2} = 0
$$

积分得到磁场的高斯定理：
$$
{\int\kern{-8pt}\int \kern{-23mu} \bigcirc} \vec{B} \cdot \mathrm{d}\vec{A} = 0
$$

磁场的高斯定律指出，穿过一个闭合表面的净磁通量始终为零，这意味着磁场线总是形成闭合回路，或者从无限远处延伸至无限远，没有起点或终点，因为自然界中不存在磁单极子。等价的微分形式为：

$$
\nabla \cdot \vec{B} = 0
$$

## 四、磁场安培环路定律

### 1、定律内容

安培环路定律描述了环路上的磁场与环路所包围的电流的关系，其数学表达式为：

$$
\oint \vec{B} \cdot \mathrm{d}\vec{l} = \mu_0 \sum i_\text{enclosed}
$$

其中，$\vec{B}$表示磁场矢量，$ \mathrm{d}\vec{l} $为环路上的微小路径元，$ \mu_0 $为真空磁导率，$ i_\text{enclosed} $为环路所包围的总电流。电流的正负符号由右手定则决定，如果电流方向与右手定则一致，用正号，如果电流方向与右手定则不一致，用负号。

### 2、磁场安培环路定律应用

#### (1) 无限长直导线的磁场

<img src="https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251103103600604.png" alt="image-20251103103600604" style="zoom:50%;" />

选择一个半径为$ r $的圆环作为积分路径，其中心位于导线轴上，且圆环位于垂直于导线的平面内。根据安培环路定理：
$$
\oint \vec{B} \cdot \mathrm{d}\vec{l} = \mu_0 \sum i_\text{enclosed}
$$
其中$B$与$\mathrm{d}l$的方向相同，得到：
$$
2\pi r \cdot B=\mu_0 i
$$
移项得到：
$$
B=\frac{\mu_0i}{2\pi r}
$$

#### (2) 长导线内部的磁场

对于一根半径为$R$的长导线，导线内部具有均匀分布的电流$ i $。

<img src="https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251103103811838.png" alt="image-20251103103811838" style="zoom:50%;" />

由于电流分布具有轴对称性，选择一个半径为 $ r $ 的圆环作为积分路径，其中心位于导线轴上，且圆环位于垂直于导线的平面内。根据安培环路定律：
$$
\oint\vec{B} \cdot \mathrm{d}\vec{l} = \mu_0 i_\text{enclosed}
$$

对于选择的圆环路径，由于磁场 $\vec{B}$ 和路径方向 $ \mathrm{d}\vec{l} $ 平行，点积简化为标量乘积：
$$
\oint\vec{B} \cdot \mathrm{d}\vec{l} = B \int \mathrm{d}l
$$
环路的路径长度为圆周长 $ 2\pi r $，所以积分结果为：
$$
\int \mathrm{d}l = 2\pi r
$$
因此，安培环路定律可写为：
$$
B \cdot 2\pi r = \mu_0 i_\text{enclosed}
$$

导线内的电流均匀分布，电流密度为：
$$
j = \frac{i}{\pi R^2}
$$

在半径为 $ r $ 的圆环内部，所包围的电流为：
$$
i_\text{enclosed} = j \cdot \text{截面积} = \frac{i}{\pi R^2} \cdot \pi r^2 = i \frac{r^2}{R^2}
$$

将 $ i_\text{enclosed} $ 代入安培环路定律：
$$
B \cdot 2\pi r = \mu_0 \cdot i \frac{r^2}{R^2}
$$

解得磁场大小：
$$
B=\frac{\mu_0ir}{2\pi R^2}
$$

#### (3) 无穷大通电平板产生的磁场

一个无限大的电流面由一定密度的平行电流线组成，每单位长度包含 $n$ 条电流线，每条电流线的电流为 $ i $。

<img src="https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251103104255664.png" alt="image-20251103104255664" style="zoom:50%;" />

选择一个正方形环路，边长为 $ w $，环路垂直于电流面，环路的两条垂直边磁场方向与路径方向垂直，因此磁场与路径的点积为零，环路的两条平行边磁场方向与路径方向平行，因此磁场贡献为标量。根据安培环路定律：
$$
\oint\vec{B} \cdot \mathrm{d}\vec{l} = \mu_0 i_\text{enclosed}
$$

沿环路积分得到：
$$
\oint \vec{B} \cdot \mathrm{d}\vec{l} = B w + 0 + B w + 0 = 2Bw
$$

因此：
$$
2Bw = \mu_0 i_\text{enclosed}
$$

电流面中每单位长度包含 $n$ 条电流线，每条电流线的电流为 $ i $，所以总电流包围为：
$$
i_\text{enclosed} = nwi
$$

将 $ i_\text{enclosed} $ 代入安培环路定律：
$$
2Bw = \mu_0 nwi
$$

解得磁场大小：
$$
B = \frac{1}{2} \mu_0 n i
$$

#### (4) 无限长螺线管的磁场

无限长螺线管由均匀分布的线圈组成，单位长度的线圈数为$n$，电流$ i $沿线圈流动。

<img src="https://laoguantx.top/article/物理/普通物理学/磁学的基本现象和基本规律/image-20251103105839651.png" alt="image-20251103105839651" style="zoom:50%;" />

在无限长螺线管内部，选择一个正方形路径（边长为 $ w $），其环路的一部分位于螺线管内部，另一部分位于螺线管外部。根据安培环路定律：
$$
\oint \vec{B} \cdot \mathrm{d}\vec{l} = \mu_0 i_\text{enclosed}
$$

螺线管内部，磁场 $\vec{B}$ 平行于路径方向，且大小恒定：
$$
\int \vec{B} \cdot \mathrm{d}\vec{l} = B w
$$
螺线管外部，磁场为零（因为螺线管为无限长磁场从无限远处延伸至另一个无限远）：
$$
\int \vec{B} \cdot \mathrm{d}\vec{l} = 0
$$
环路其他段与磁场方向垂直，因此贡献为零。总积分结果：
$$
\int \vec{B} \cdot \mathrm{d}\vec{l} = B w
$$

螺线管内部包围的电流为：
$$
i_\text{enclosed} = n w i
$$
将 $ i_\text{enclosed} $ 代入安培环路定律：
$$
B w = \mu_0 n w i
$$

解得螺线管内部的磁场大小：
$$
B = \mu_0 n i
$$

#### (5) 螺绕环产生的磁场

螺环由 $N$ 匝线圈组成，每匝电流为 $ i $，线圈绕成环形，半径为$R$。

由于螺环的对称性和闭合电流分布，螺环外部的磁场方向相反，导致磁场抵消。因此螺环外部的磁场为零：
$$
B_{\text{outside}} = 0
$$

为了计算螺环内部磁场，选择一个半径为 $ r $ 的圆形路径，圆心位于螺环的中心，圆形路径完全位于螺环内。根据安培环路定律：
$$
\oint \vec{B} \cdot \mathrm{d}\vec{l} = \mu_0 i_\text{enclosed}
$$

沿圆形路径积分，磁场 $\vec{B}$ 和路径方向平行，点积简化为标量乘积：
$$
\oint \vec{B} \cdot \mathrm{d}\vec{l} = B \int \mathrm{d}l
$$
路径的长度为圆周长 $ 2\pi r $，所以积分结果为：
$$
\int \mathrm{d}l = 2\pi r
$$
因此：
$$
B \cdot 2\pi r = \mu_0 i_\text{enclosed}
$$

螺环内的总电流为：
$$
i_\text{enclosed} = N i
$$
将 $ i_\text{enclosed} $ 代入安培环路定律：
$$
B \cdot 2\pi r = \mu_0 N i
$$

解得螺环内部磁场大小：
$$
B = \frac{\mu_0 N i}{2\pi r}
$$

可以进一步写为：
$$
B = \mu_0 n i
$$
其中 $ n = \frac{N}{2\pi r} $ 是单位长度的线圈密度。
