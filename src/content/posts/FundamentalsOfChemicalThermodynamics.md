---
title: 化学热力学基础
published: 2024-11-02
category: ["其他课程基础", "普通化学"]
tags: ["普通化学"]
alias: "fundamentalsofchemicalthermodynamics"
---

## 一、引言

1. 针对一个化学反应的两个实际问题：
   1. 给定的原料能否生成期望的产物?——可能性
   2. 是否可能把原料全部转变成产物?——转化率
2. 针对所有化学反应的两个理论问题：
   1. 如何判断化学反应是否能发生?——方向判据
   2. 如何预测化学反应的最大限度?——平衡原理

化学热力学就是从能量热和功（力）入手，来研究上述化学反应的方向及限度的普遍规律。本文将会利用物理的热学理论来阐明化学问题，从理论上证明各项结论。

## 二、体系（系统）与环境

1. 开放（Open）体系：既有微粒交换，又有能量交换。
2. 封闭（Closed）体系：没有微粒交换，但有能量交换。
3. 孤立（Isolated）体系：既无微粒交换，又无能量交换。

## 三、热力学第一定律

### 1、热和功

热和功是两类不同形式的能量，它们是热力学的基础。

由于体系和它所处环境的温度不同而导致在二者之间交换的能量成为热（或称热量），用符号$Q$来表示。除热以外，体系与环境之间的交换的其他形式的能量都成为功，用符号$W$表示。做功时体系的体积发生了变化，那么这类功称为体积功，否则称为非体积功，本文讨论的功主要是体积功。

本文约定：如果热交换过程中体系吸热，则$Q$值为正；如果体系放热，则$Q$值为负。体系对环境做功，$W$取正值；环境对体系做功，$W$取负值。

### 2、热力学能

热力学能，也叫内能，是体系内部所有能量的总和，用符号$U$来表示，包括分子平动能、分子间势能、分子内部的能量（转动、振动、电子和核运动）。内能是状态函数，即：

$$U=f(T,V)$$

内能的绝对数值难以实验测定和理论计算。内能的增量$\Delta U$ 可以由实验间接测定，也可能用理论推算。

体积变化改变分子间距离，影响分子间势能；而理想气体分子间没有作用势能，所以不受体积的影响。温度对分子平动能有影响，所以理想气体内能只与温度有关，即：

$$U=f(T)$$

### 3、体积功

若体系内气体压力$p$大于环境压力$p_a$，气体膨胀，体系对外界环境做功。如果面积为$S$活塞移动$\mathrm{d}l$，体系体积改变$\mathrm{d}V$，体系做功为：

$$\delta W=p_aS\mathrm{d}l=p_a\mathrm{d}V$$

气体膨胀，必须抵抗外压（环境压力）做功，如果体系的始态体积为$V_1$，终态体积为$V_2$，那么体系膨胀做的功为：

$$W=\int^{V_2}_{V_1}p_a \mathrm{d} V$$

如果膨胀过程中环境压力$p_a$不变，那么：

$$W=p_a(V_2-V_1)=p_a\Delta V$$

### 4、可逆过程

体系在确定的始态和终态之间膨胀做功，所做的功只与做功过程历经的途径有关，与过程无关，并且如果在膨胀过程中，慢慢膨胀，相当于进行无数次微小的，但是环境压力不变的膨胀，每次微小的过程体系压力与环境压力相等，这样的膨胀成为可逆膨胀过程，可逆膨胀时，系统对环境做最大功。因为体系压力和环境压力相等，那么根据理想气体状态方程，在恒温的封闭体系内，存在着：

$$W=\int_{V_1}^{V_2}p\mathrm{d}V=\int_{V_1}^{V_2}\frac{nRT}{V}\mathrm{d}V=nRT\ln \frac{V_2}{V_1}$$

在可逆状态下，体系出于无限接近平衡的状态，这就是说，如果一个体系正在经历一个可逆过程，就可以认为该体系处于平衡状态；如果体系处于平衡状态，则体系中所发生的过程必定是可逆过程。

另外还有一个重要结论：恒温封闭体系下，可逆功大于不可逆功。（可以通过图像观察得出）

### 5、热力学第一定律

体系经历一个变化，从始态出发到终态，体系的热力学能有增量，增量等于终态的热力学能与始态的热力学能之差。即：

$$\Delta U=U_终-U_始$$

热力学第一定律实际上就是封闭体系的能量守恒定律。根据能量守恒和转化定律，有：（注意两者符号）

$$\Delta U=Q-W$$

$$\mathrm{d}U=\delta Q-\delta W$$

提示：状态函数的微小变化使用符号$\mathrm{d}$，途径函数的微小变化使用符号$\delta$。

### 6、反应热

由于不知道分子的相互作用势能有多大，也不知道原子核内部粒子的相互作用的能量有多大，因此无法从理论上计算热力学能但是可以通过实验的方法测定体系的热力学能增量。设温度变化值$\Delta T$，热容$C$，可得反应热：

$$Q=C\cdot\Delta T $$

测量反应热时还要考虑反应过程中体系是否向环境做功。如果限定反应过程中体系的体积不变，体系进行恒容反应，则没有体积功，这样的反应热成为恒容反应热$Q_V$，如果限定反应过程中体系压力始终与环境压力相同，且恒定不变，这样的反应热成为恒压反应热$Q_p$。

所以根据热力学第一定律，恒容热等于热力学增量，即：

$$Q_V=\Delta U$$

下面推导两者关系公式：

$$\begin{aligned}Q_{p}&=\Delta U+W\\&=\Delta U+p\Delta V\\&=Q_{V}+\Delta nRT\end{aligned}$$

### 7、焓

恒压反应过程中，体系与环境的压力相等且恒定不变，根据热力学第一定律，有：

$$\begin{aligned}Q_{p}&=\Delta U+p\Delta V=(U_{2}-U_{1})+p(V_{2}-V_{1})\\&=(U_{2}-U_{1})+(pV_{2}-pV_{1})\\&=(U_{2}+p_{2}V_{2})-(U_{1}+p_{1}V_{1})\end{aligned}$$

定义一个新的热力学函数$H$，称为焓：

$$H=U+pV$$

焓也是状态函数。焓的增量只与反应体系的始态和终态有关，与反应状态无关。将焓代入上式得：

$$Q_p=H_2-H_1=\Delta H$$

这说明恒容热等于体系热力学增量，恒压热等于体系焓的增量（焓变）。

$$Q_p=\Delta H$$

$$Q_V=\Delta U$$

焓也只是温度的函数，即$H=f(T)$。

### 8、盖斯定律

由于恒压反应热等于体系焓的增量$\Delta H$，而状态函数的增量与途径无关，因此恒压条件下进行的化学反应，反应热与反应途径无关，这个规律叫做盖斯定律。

### 9、标准摩尔生成焓与化学反应标准摩尔焓变

在标准压力（$p^\ominus=100\:000\mathrm{Pa}$）下由最稳定相态单质生成$1\mathrm{mol}$物质$i$的恒压反应热的标准摩尔生成焓，用符号$\Delta_fH_m^\ominus$表示，根据数据，结合状态函数法，可以计算各种化学反应在标准压力下的恒压反应热，即反应焓变。

标准摩尔生成焓与化合物的状态有关。不同相的标准摩尔生成焓之间的差与相变过程的焓变有关，因此，表示化合物的标准摩尔生成焓时，要指明相态。

一般地，化学反应的标准摩尔焓变$\Delta_rH_m^\ominus$为：

$$\Delta_rH_m^\ominus=\sum\nu_i\Delta_fH_m^\ominus(i)$$

其中，$\Delta_fH_m^\ominus(i)$表示反应物或生成物$i$的标准摩尔生成焓，$\nu_i$表示反应中各物质的计量系数，反应物为负值，生成物为正值。

### 10、反应进度

对于反应：$0=\sum_i\nu_{i}$，定义：

$$\mathrm{d}\xi=\frac{\mathrm{d}n_i}{\nu_i}$$

$n_i$为物质$i$的物质的量，$\nu_i$为该物质在反应方程式中的化学计量数。
如果：

$$\int_0^{\xi}\mathrm{d}\xi=\int_{n_i(0)}^{n_{i}(\xi)}\frac{\mathrm{d}n_i}{\nu_i}$$

则：

$$\xi = \frac{[ n_i( \xi ) - n_i( 0) ]}{\nu _i}= \frac{\Delta n_i}{\nu _i}$$

根据定义，一反应进度与选择反应系统中何种物质来表达无关；反应进度与化学反应方程式写法有关。

## 四、热力学第二定律

### 1、熵和熵增

为了说明什么物理量可以用于过程自发性的判断，让我们重回到对功和热的讨论。我们已经知道，恒温条件下在确定的始态和终态之间进行的理想气体膨胀过程，可逆功大于不可逆功，即：

$$W_r>W_{ir}$$

此后，下标$r$表示可逆，下标$ir$表示不可逆。

恒温过程中理想气体的热力学能不变，所以$W=Q$，因此在温度$T$的恒定条件下，理想气体可逆膨胀吸收的热比不可逆的情况下吸收的热更多，即：

$$Q_r>Q_{ir}$$

两遍同时除以$T$：

$$\frac{Q_r}{T}>\frac{Q_{ir}}{T}$$

现在定义一个新的状态函数$S$，称为熵：（注意公式中的下标）

$$\Delta S=\frac{Q_r}{T}$$

或者：

$$\mathrm{d}S=\frac{\delta Q_r}{T}$$

在一个恒温变化的过程中，体系熵的增量等于过程中可逆的热与温度的商，所以，熵的增量是可逆过程的热温商。与不可逆过程的特点结合，便会有：

$$\Delta S\ge \frac QT$$

这里没有下标，表示包含了可逆与不可逆的情况。这个不等式叫做克劳修斯不等式，是热力学的基本不等式。根据这个不等式，如果知道一个过程的热温商，通过与熵增的比较，可以得出该过程是不是可逆的结论。

由于精确地测量热温商比较困难，因此难以直接用上面的方法判断过程是否自发。但是如果过程绝热（$Q=0$），即过程中体系与环境之间没有热交换，那么式子变为：

$$\Delta S\ge0$$

如果体系是绝热或者孤立体系，上述式子可以判断反应是否自发。如果体系不是绝热或者孤立的，那么可以把体系和它所处的环境合并成一个大体系，这个大的体系就是一个孤立体系：

$$\Delta S(大的孤立体系)=\Delta S(体系) + \Delta S(环境)$$

### 2、熵的本质

$S$是系统多样性（混乱度）的表征，统计力学中可导出玻尔兹曼关系式$S=k\ln\Omega$，$\Omega$为微观状态数。

### 3、熵增的计算

物理变化过程体系的熵增直接根据熵的定义进行计算：（注意是可逆热）

$$\mathrm{d}S=\frac{\delta Q_r}{T}$$

对于在两相平衡情况下发生的相变化，如正常沸点下水的蒸发，可以直接用来计算熵增。

对于$p,V,T$变化的物理过程，要用可逆过程的热来计算熵增：

$$\delta Q_r=\mathrm{d}U_r+\delta W_r$$

由于热力学能的增量与途径无关，所以$\mathrm{d}U_r$的下标是不必要的。去掉下标后，代入熵的计算式：

$$\mathrm{d}S=\frac{\mathrm{d}U+\delta W_r}{T}$$

如果过程中只有体积功，则：

$$\delta W_r=p\mathrm{d}V$$

热力学能的增量$\mathrm{d}U$等于恒容热$\delta Q_V$。而恒容热$\delta Q_V$可用恒容热容$C_V$计算。$C_V$是体积恒定条件下体系温度变化过程中吸收（或放出）的热与温升的比值。

$$C_{V}=\frac{\delta Q_{V}}{\mathrm{d}T}$$
$$\mathrm{d}U=\delta Q_{V}=C_{V}\mathrm{d}T$$

所以

$$\mathrm{d}S=\frac{C_{V}\mathrm{d}T+p\mathrm{d}V}{T}=\frac{C_{V}}{T}\mathrm{d}T+\frac{p\mathrm{d}V}{T}$$

两边积分

$$\Delta S=\int_{T_{1}}^{T_{2}}\frac{C_{V}}{T}\mathrm{d}T+\int_{V_{1}}^{V_{2}}\frac{p\mathrm{d}V}{T}$$

如果将$C_V$看成与温度无关的常数，而 $pV=nRT$，则上式可以写成

$$\Delta S=C_{V}\int_{T_{1}}^{T_{2}}\frac{1}{T}\mathrm{d}T+nR\int_{V_{1}}^{V_{2}}\frac{1}{V}\mathrm{d}V$$

$$\Delta S=C_{V}\ln\frac{T_{2}}{T}+nR\ln\frac{V_{2}}{V}$$

### 4、化学反应中体系的熵增

根据熵是状态函数，所以：

$$\Delta S=S(生成物)-S(反应物)$$

波尔曼兹定理并不是一个计算出熵数值的好方法。后来，能斯特提出热力学第三定律，纯物质完美晶体在$0\mathrm{K}$时的熵为$0$，代入玻尔兹曼定理，知$\Omega=1$。

### 5、标准摩尔熵

标准摩尔熵指在标准状态下，$1\mathrm{mol}$纯物质的规定熵。可以通过反应方程式计算。

$0\mathrm{K}\to T\mathrm{K}$过程中，若包括晶型转变、相变化、单纯$p,V,T$变化，须分段计算。类比于标准摩尔反应熵的计算方法。

## 五、自由能

### 1、自由能判据

用熵增原理判断过程自发性只能用于孤立体系或绝热过程。科学家进一步提出了一个新的状态函数———自由能，对于任何封闭体系，只要过程是恒温恒压进行的，就可以用自由能判断过程是否自发。自由能用$G$表示，定义为

$$G=H-TS$$

由于$H=U+pV$，因此，自由能也可以定义为

$$G=U+pV-TS$$

由于$H$、$T$、$S$等都是状态函数，因此自由能$G$也是状态函数。对于恒温、恒压条件下发生的变化过程，可以用自由能增量$\Delta G$判断过程是否自发。

由$dS\geqslant \frac {\delta Q}T$（克劳修斯不等式）得：(可逆时等于，自发时大于)

$T\mathrm{d}S\geq \delta Q$

因为：

$$\delta Q=\mathrm{d}U+\delta W=\mathrm{d}U+p_{a}\mathrm{d}V+\delta W_{f}$$

所以：

$$TdS\geqslant dU+p_adV+\delta W_f$$

$p_a$为环境压力，$\delta W_f$为非体积功即：

$$\mathrm{d}U+p_{a}\mathrm{d}V-T\mathrm{d}S\leqslant-\delta W_{f}$$

对自由能$G$的定义式两边微分，得

$$\mathrm{d}G=\mathrm{d}U+p\mathrm{d}V+V\mathrm{d}p-T\mathrm{d}S-S\mathrm{d}T$$

对于恒温恒压过程，$\mathrm{d}p=0$，$\mathrm{d}T=0$，所以：

$$\mathrm{d}G_{T,p}=\mathrm{d}U+p\mathrm{d}V-T\mathrm{d}S$$

式中，$\mathrm{d}G_T,p$的下标$T,p$表示这是恒温恒压过程。

注意到上面有两式右端与左端相同，所以：

$dG_{T,p}\leqslant-\delta W_{f}(可逆时等于，自发时小于)$

上式表明，在恒温恒压过程中，如果体系自由能增量小于过程中的非体积功，则过程是自发的；如果自由能增量等于非体积功，则过程是可逆的（体系处于平衡）。进一步讨论，如果过程中非体积功为零，即$\delta W_{\mathrm{f}}=0$，则：

$$\mathrm{d}G_{T, p}\leqslant 0 (可逆时等于，自发时小于)$$

如果过程中状态变化较大，则对上式两边积分，得：

$$\Delta G_{T,p}\leqslant0 (可逆时等于，自发时小于 )$$

这表明，在恒温恒压且没有非体积功的过程中，如果自由能增量小于零，则过程是自发的；如果自由能增量等于零，则过程是可逆的（体系处于平衡）。上面便是著名的自由能判据的三种形式，可用于判断恒温恒压下进行的过程是否自发。用自由能增量判断过程是否自发时，只需要计算体系的自由能增量，不需要计算环境的自由能增量。恒温恒压过程是很常见的，实验室中反应常在恒温恒压下进行，所以自由能判据的应用很广。

自由能判据可以用文字表述为：没有非体积功的恒温恒压过程总是朝着自由能减少的方向自发进行。与“熵增”原理相对应，也可以称自由能判据为“自由能减”原理。

自由能是状态函数，两个相反进行的过程，它们的自由能增量数值相反。如果某过程$\mathrm{d}G_{T,p}>0$，则与该过程反方向进行的过程$\mathrm{d}G_T,p<0$。如果这是恒温恒压下没有非体积功的讨程，则某过程不能自发进行，而其反方向是自发过程。

### 2、物理过程自由能增量的计算

根据自由能$G$的定义，可以得到自由能增量的计算公式。因为：

$$G=U+pV-TS$$

所以：

$$\mathrm{d}G=\mathrm{d}U+p\mathrm{d}V+V\mathrm{d}p-T\mathrm{d}S-S\mathrm{d}T$$

式中，$\mathrm{d}U$为状态函数的增量，与途径无关。按照可逆的途径计算$\mathrm{d}U$：

$$\mathrm{d}U=\delta Q_{r}-\delta W_{r}=T\mathrm{d}S-p\mathrm{d}V-\delta W_{f}$$

如果$\delta W_{f}=0$，则：

$\mathrm{d}U=T\mathrm{d}S-p\mathrm{d}V$

代入得：

$$\mathrm{d}G=\left(T\mathrm{d}S-p\mathrm{d}V\right)+p\mathrm{d}V+V\mathrm{d}p-T\mathrm{d}S-S\mathrm{d}T$$

所以：

$$\mathrm{d}G=V\mathrm{d}p-S\mathrm{d}T$$
如果过程中状态变化较大，始态与终态的状态相差较大，可以对每一个微小过程的$\mathrm{d}G$进行加和，得到整个过程度的$\Delta G$。具体的做法是对式子两边从始态到终态进行积分，得：

$$\Delta G=\int_{p_{1}}^{p_{2}}V\mathrm{d}p-\int_{T_{1}}^{T_{2}}S\mathrm{d}T$$

根据上式可以计算物理过程中体系自由能的增量。积分计算时，需要先把被积函数$V$表达成$p$的函数，$S$表达成$T$的函数。需要特别指出的是，推导式子时用了可逆热和可逆功，所以，用上式计算物理过程体系自由能增量时，要按照可逆的途径计算两个积分。如果按照不可逆的涂径积分，则得到的结果可能会是错误的。

### 3、化学反应自由能增量的计算

如果化学反应在恒温下进行，根据自由能的定义可知

$$\mathrm{d}G=\mathrm{d}H-\mathrm{d}(TS)=\mathrm{d}H-T\mathrm{d}S-S\mathrm{d}T\\\mathrm{d}G=\mathrm{d}H-T\mathrm{d}S$$

即：

$$\Delta_{r}G_{m}=\Delta_{r}H_{m}-T\Delta_{r}S_{m}$$

下标$r$表示化学反应；$m$表示摩尔反应。如果反应的焓变和熵增求得，则恒温下反应的自由能增量容易计算。但是，并非必须先求得反应的焓变和熵增，才能计算自由能增量。化学反应的自由能增量通常直接从标准摩尔生成自由能计算得到。
在标准压力下，由最稳定相态的单质生成$1 \mathrm{mol}$物质$i$的恒压反应的自由能增量称为物质$i$的标准摩尔生成自由能，用符号 $\Delta_\mathrm{f}G_\mathrm{m}^\ominus(i)$表示。这一定义与标准摩尔生成焓的定义相似。
最稳定相态的单质的 $\Delta_{\mathrm{f}}G_{\mathrm{m}}^{\ominus}\left(i\right)$显然等于零；但其他相态的单质，$\Delta_{\mathrm{f}}G_{\mathrm{m}}^\ominus\left(i\right)$并不等于零。

注意，使用自由能判据时，要在标准压力下，下面讨论非标准压力下的自由能增量计算。

### 4、非标准压力下自由能增量计算

假设反应方程式方程式：$\alpha_A\mathrm{A}+\alpha_B\mathrm{B}=\alpha_C\mathrm{C}+\alpha_D\mathrm{D}$，需要现将组分转化到标准状态，并利用状态函数法来计算：

$$\begin{aligned}&\Delta_rG_m=\Delta_rG_m^{\ominus}+(\Delta G_A+\Delta G_B+\Delta G_C+\Delta G_D)\\&\Delta G_{A}=\int_{p_{A}}^{p^{\ominus}}V\mathrm{d}p=\int_{p_{A}}^{p^{\ominus}}\frac{2RT}{p}\mathrm{d}p=RT\ln\left(\frac{p^{\ominus}}{p_{A}}\right)^{2}\\&\Delta G_{B}=RT\ln\frac{p^{\ominus}}{p_{B}}\\&\Delta G_{M}=RT\ln\frac{p_{M}}{p^{\ominus}}\\&\Delta_{r}G_{m}=\Delta_{r}G_{m}^{\ominus}+RT\ln\frac{\frac{p_{M}}{p^{\ominus}}}{\left(\frac{p_{A}}{p^{\ominus}}\right)^{2}\frac{p_{B}}{p^{\ominus}}}\end{aligned}$$

### 5、浓度对反应自由能增量的影响

实际进行的反应，反应物和化合物往往处于混合的状态，所以计算反应的$\Delta_rG_m$时需要考虑混合的因素。根据状态函数法，可以得到各组分混合对反应过程体系$\Delta_rG_m$的影响：

$$\Delta_rG_m(混合物)=\Delta_rG_m(纯净物)-[\Delta_rG_m(混合过程)+\Delta_rG_m(分离过程)]$$

在通常的混合过程和分离过程中，体系的自由能增量不等于零。混合过程自由能增量的数值与混合物的浓度（或者分压）有关，分离过程也是，对于混合气体中混合气体之间的化学反应有：（方程式：$\alpha_A\mathrm{A}+\alpha_B\mathrm{B}=\alpha_C\mathrm{C}+\alpha_D\mathrm{D}$）

$$\Delta_rG_m(混合物)=\Delta_rG_m^{\ominus}+RT\ln\frac{(\frac{p_C}{p^\ominus})^{\alpha_C}\cdot(\frac{p_D}{p^\ominus})^{\alpha_D}}{(\frac{p_A}{p^\ominus})^{\alpha_A}\cdot(\frac{p_B}{p^\ominus})^{\alpha_B}}$$

也可以用浓度$c$代替压力$p$，其中$c^\ominus=1 \mathrm{mol/L}$

$$\Delta_rG_m(混合物)=\Delta_rG_m^{\ominus}+RT\ln\frac{(\frac{c_C}{c^\ominus})^{\alpha_C}\cdot(\frac{c_D}{c^\ominus})^{\alpha_D}}{(\frac{c_A}{c^\ominus})^{\alpha_A}\cdot(\frac{c_B}{c^\ominus})^{\alpha_B}}$$

## 六、化学平衡

### 1、平衡常数

经验表明，化学反应到达平衡后，各生成物浓度的化学计量数次幂的乘积除以各反应物浓度的化学计量数次幂所得的比值是一个常数。下面将使用理论推导：

对于反应$2\mathrm{A}+\mathrm{B}=\mathrm{M}$当反应达到平衡状态时：

$$\Delta_{r}G_{m}=0$$

则：

$$RT\ln\frac{\frac{p_{\mathrm{M}}}{p^\ominus}}{(\frac{p_{\mathrm{A}}}{p^{\ominus}})^{2}\cdot\frac{p_{\mathrm{B}}}{p^\ominus}}=-\Delta_{\mathrm{r}}G_{\mathrm{m}}^{\circ}$$

所以：

$$\ln\frac{\frac{p_{\mathrm{M}}}{p^\ominus}}{(\frac{p_{\mathrm{A}}}{p^{\ominus}})^{2}\cdot\frac{p_{\mathrm{B}}}{p^\ominus}}=-\frac{\Delta_{\mathrm{r}}G_{\mathrm{m}}^{\ominus}}{RT}$$

即：

$$\frac{\frac{p_{\mathrm{M}}}{p^\ominus}}{(\frac{p_{\mathrm{A}}}{p^{\ominus}})^{2}\cdot\frac{p_{\mathrm{B}}}{p^\ominus}}=\exp\left(-\frac{\Delta_{\mathrm{r}}G_{\mathrm{m}}^\ominus}{RT}\right)$$

对于指定的反应，$\Delta_\mathrm{r}G_\mathrm{m}^\ominus$只与温度有关；所以在确定的温度下，$\exp\left(-\frac{\Delta_\mathrm{r}G_\mathrm{m}^\ominus}{RT}\right)$是一个常数，用符号$K$表示，称为化学反应平衡常数，即：

$$\exp\left(-\frac{\Delta_\mathrm{r}G_\mathrm{m}^\ominus}{RT}\right)=K$$

且：

$$\left[\frac{\frac{p_{\mathrm{M}}}{p^\ominus}}{(\frac{p_{\mathrm{A}}}{p^{\ominus}})^{2}\cdot\frac{p_{\mathrm{B}}}{p^\ominus}}\right]_e=K$$

式中，下标$e$表示平衡，强调平衡状态下左端的数值才等于常数$K$。在不会产生误解时，这个下标可以省略。当反应体系达到平衡状态时，各生成物分压的化学计量数次幂的乘积除以各反应物分压的化学计量数次幂的乘积所得的比值是个常数，与经验结论相符。

### 2、自发反应进行的方向

自由能判据告诉我们，对于恒温恒压自发的化学反应，如果反应中没有非体积功，则体系的自由能增量小于零：

$$\Delta G_{T,p}<0$$

例如，对于以下没有非体积功的恒温恒压化学反应$2A+B=M$如果反应从左向右自发进行，则：

$$\Delta_{\mathrm{r}}G_{\mathrm{m}}=\Delta_{\mathrm{r}}G_{\mathrm{m}}^{\circ}+RT\frac{\frac{p_{\mathrm{M}}}{p^\ominus}}{(\frac{p_{\mathrm{A}}}{p^{\ominus}})^{2}\cdot\frac{p_{\mathrm{B}}}{p^\ominus}}<0$$

因为：

$$\Delta_{\mathrm{r}}G_{\mathrm{m}}^{\ominus}=-RT\mathrm{ln}K$$

所以

$$-RT\mathrm{ln}K+RT\frac{\frac{p_{\mathrm{M}}}{p^\ominus}}{(\frac{p_{\mathrm{A}}}{p^{\ominus}})^{2}\cdot\frac{p_{\mathrm{B}}}{p^\ominus}}<0$$

即：

$$\frac{\frac{p_{\mathrm{M}}}{p^\ominus}}{(\frac{p_{\mathrm{A}}}{p^{\ominus}})^{2}\cdot\frac{p_{\mathrm{B}}}{p^\ominus}}<K$$

若按下式定义反应商$J$：

$$\frac{\frac{p_{\mathrm{M}}}{p^\ominus}}{(\frac{p_{\mathrm{A}}}{p^{\ominus}})^{2}\cdot\frac{p_{\mathrm{B}}}{p^\ominus}}=J$$

如果反应从左向右自发进行，则：$J<K$，注意，上式左边没有下标$e$，意味着包含体系平衡与未平衡两种情况，如果体系平衡，则可在式左边添加下标$e$，即

$$\left[\frac{\frac{p_{\mathrm{M}}}{p^\ominus}}{(\frac{p_{\mathrm{A}}}{p^{\ominus}})^{2}\cdot\frac{p_{\mathrm{B}}}{p^\ominus}}\right]_{\mathrm{e}}=J$$

这就意味着反应达到平衡时：

$$J=K$$

如果：

$$J>K$$

则：

$$\Delta G_{T,p}>0$$

这时反应也没有平衡，但化学反应朝反方向(从右向左)自发进行。恒温恒压下且没有非体积功时，判断化学反应是否平衡，或者判断反应朝什么方向自发进行，都可以通过$J$和$K$的比较推知。

### 3、温度对反应平衡常数的影响

由平衡状态时：

$$\Delta_{\mathrm{r}}G_{\mathrm{m}}^{\ominus}=-RT\mathrm{ln}K$$

可计算出反应平衡常数。

$$\exp\left(-\frac{\Delta_{\mathrm{r}}G_{\mathrm{m}}^{\ominus}}{RT}\right)=K$$

因为反应的$\Delta_\mathrm{r}G_\mathrm{m}^\ominus$与温度有关所以平衡常数$K(T)$与温度有关。根据反应组分在$298.15\mathrm{K}$时的标准摩尔生成自由能，可以计算$298.15\mathrm{K}$的反应平衡常数。如果能够计算出其他温度下的$\Delta_rG_\mathrm{m}^\ominus$，就能够求得其他温度下的平衡常数。
平衡常数$K(T)$是温度$T$的函数，但每次都要先计算某温度的$\Delta\mathrm{r}G_{\mathrm{m}}^{\ominus}$，才能计算该温度下的$K$，显得过于麻烦。事实上，可以证明$K$与温度$T$的函数关系如下：（范特霍夫方程的微分形式）

$$\frac{\mathrm{dln}K}{\mathrm{d}T}=\frac{\Delta_{\mathrm{r}}H_{\mathrm{m}}^{\ominus}}{RT^{2}}$$

式中，$\Delta_\tau H_\mathrm{m}^\ominus$为反应的标准摩尔焓变。若将 $\Delta_\mathrm{r}H_\mathrm{m}^\ominus$看成与温度无关的常数，则：

$$\int_{K_{1}}^{K_{2}}\mathrm{dln}K=\int_{T_{1}}^{T_{2}}\frac{\Delta_{r}H_{m}^{\ominus}}{RT^{2}}\mathrm{d}T$$


所以得到：（范特霍夫方程）

$$\ln\frac{K_{2}}{K_{1}}=-\frac{\Delta_{r}H_{m}^{\ominus}}{R}\left(\frac{1}{T_{2}}-\frac{1}{T_{1}}\right)$$

根据该式，可以计算不同温度下的反应平衡常数，也可以计算反应的标准摩尔焓变。而且该式子与克拉珀龙-克劳修斯方程结构十分相近。
