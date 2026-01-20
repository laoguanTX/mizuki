---
title: 动力学综合问题
published: 2025-12-04
category: ["物理", "力学"]
tags: ["理论力学", "动力学"]
alias: "dynamicsystemsproblem"
---
## 一、初瞬时问题

初瞬时问题，即系统本来静止，突然因为某个原因导致开始运动。

> **例1**：
>
> <img src="https://laoguantx.top/article/物理/理论力学/动力学综合问题/image-20251202142344585.png" alt="image-20251202142344585" style="zoom:50%;" />
>
> 均质杆$AB$的质量为$m_1$，长度为$l$，上端$B$靠在光滑的墙壁上，下端与圆柱的中心$A$铰接。均质圆柱的质量为$m_2$ ，半径为$r$，可沿固定水平面滚动而不滑动。假设系统在$\varphi_0=30\mathrm{\degree}$位置由静止释放，试求在初瞬时圆柱质心的$A$加速度。
>
> **解**：
>
> <img src="https://laoguantx.top/article/物理/理论力学/动力学综合问题/image-20251202142709646.png" alt="image-20251202142709646" style="zoom:50%;" />
>
> 考虑从初始条件开始，到任意角度时系统的情况，代入初始条件从而求解。
>
> 应用动能定理：
> $$
> T = \frac{1}{2}m_2v_A^2 + \frac{1}{2}\left(\frac{1}{2}m_2r^2\right)\omega_2^2 + \frac{1}{2}m_1v_C^2 + \frac{1}{2}\left(\frac{1}{12}m_1l^2\right)\omega_1^2
> $$
>
> 由运动学知识可知：
>
> $$
> v_A = r\omega_2
> $$
>
> $$
> \omega_1 = \frac{v_A}{AD} = \frac{v_A}{l\cos\varphi}
> $$
>
> $$
> v_C = CD \cdot \omega_1 = \frac{v_A}{2\cos\varphi}
> $$
>
> 得系统的动能为：
> $$
> T = \frac{1}{12}\left(\frac{2m_1}{\cos^2\varphi} + 9m_2\right)v_A^2
> $$
> 因为只有重力$m_{1}g$作功，故：
>
> $$
> W=\frac{m_{1}gl}{2}(\cos\varphi_{0}-\cos\varphi)
> $$
>
> 应用动能定理的微分形式：
> $$
> \frac{\mathrm{d}T}{\mathrm{d}t}=\frac{\mathrm{d}W}{\mathrm{d}t}
> $$
>
> 同时考虑到：
> $$
> \dot{\varphi}=\omega_{1}=\frac{v_{A}}{l\cos\varphi}
> $$
>
> 得：
> $$
> \frac{1}{6}\left[a_{A}\left(\frac{2m_{1}}{\cos^{2}\varphi}+9m_{2}\right)+2v_{A}^{2}\frac{m_{1}\sin\varphi}{l\cos^{4}\varphi}\right]v_{A}=\frac{1}{2}m_{1}gv_{A}\tan\varphi
> $$
> 所以圆柱质心$A$的加速度为：
> $$
> a_A=\frac{3m_1g\tan\varphi-2m_1(\nu_A^2\sin\varphi/l\cos^4\varphi)}{2m_1/\cos^2\varphi+9m_2}
> $$
> 因为在运动初瞬时：$\varphi_0=30\degree,v_A=0$，得到：
> $$
> a_A=\frac{3\sqrt3 m_1}{8m_1+27m_2}g
> $$
> 本题也可以用平面运动微分方程求解，分别对杆和圆轮列出平面运动微分方程，并补充运动方程即可，共有七个未知量，可以列出七个方程。过程比使用动能定理繁琐。

但是，动能定理方法存在缺点，因为要使用动能定理完成题目，需要对一个运动过程列出一般形式的动能定理。

> **例2**：
>
> <img src="https://laoguantx.top/article/物理/理论力学/动力学综合问题/image-20251202144423153.png" alt="image-20251202144423153" style="zoom:50%;" />
>
> 一根匀质杆长度为$l$，绳子断开的瞬时，求解杆的转动角加速度。
>
> **解**：
>
> 竖直方向上列出动量定理的微分形式：
> $$
> F-mg=-\frac{m\alpha l}2
> $$
> 列出相对质心的动量矩定理：
> $$
> \frac1{12}ml^2\alpha=\frac{Fl}2
> $$
> 解得：
> $$
> \alpha=\frac{3g}{2l}
> $$

对于初瞬时问题（突然解除约束力问题），优先使用动能定理的微分形式，不能用或者是很麻烦时，改用平面运动的微分方程联立求解。

## 二、中间态问题

> **例3**：
>
> <img src="https://laoguantx.top/article/物理/理论力学/动力学综合问题/image-20251202151613035.png" alt="image-20251202151613035" style="zoom:50%;" />
>
> 如图所示，滑块$A$与半径为$r$的均质轮用长为l的均质杆相铰联，滑块可在水平槽中滑动，在重力作用下，轮$O$由图示不稳定的平衡位置静止开始运动，设三构件质量均为$m$，不计摩擦，试求任意$\theta$倾角位置时：
>
> (1) 杆$OA$的角速度与角加速度。
>
> (2) 滑块$A$受到来自滑道的约束力。
>
> **解**：
>
> <img src="https://laoguantx.top/article/物理/理论力学/动力学综合问题/image-20251202151410460.png" alt="image-20251202151410460" style="zoom:50%;" />
>
> 注意系统在水平方向动量守恒，系统质心恒在$OA$杆中点$C$，水平方向动量恒为零，$C$点速度$v_C$沿铅垂方向。设$OA$杆速度瞬心为$C$：
> $$
> v=\frac{\omega l}2\sin\theta
> $$
>
> $$
> v_C=\frac{\omega l}2\cos\theta
> $$
>
> $$
> v_O^2=(\omega|C_vO|)^2=\frac{\omega^2l^2}4(3\cos^2\theta+1)
> $$
>
> 由$T-T_0=W,T_0=0$，有：
> $$
> \frac{1}{2}mv^2+[\frac{1}{2}(\frac{1}{12}ml^2)\omega^2+\frac{1}{2}mv_c^2]+\frac{1}{2}mv_0^2=mgl\left(\frac{1}{2}-\frac{\sin\theta}{2}\right)+mgl(1-\sin\theta)
> $$
> 解得：
> $$
> \omega=\frac{36g(1-\sin\theta)}{(9\cos^2\theta+7)l}
> $$
> 由动能定理的微分形式$\frac{\mathrm{d}T}{\mathrm{d}t}=\frac{\mathrm{d}W}{\mathrm{d}t}$（注意$\dot{\theta}=-\omega$），对上面的方程两边求导，得到：
> $$
> \alpha=\frac{36\cos\theta\left(9\sin^2\theta-18\sin\theta+16\right)}{(9\cos^2\theta+7)^2}\frac{g}{l}
> $$
> <img src="https://laoguantx.top/article/物理/理论力学/动力学综合问题/image-20251202152431794.png" alt="image-20251202152431794" style="zoom:50%;" />
>
> 研究整体，对整体使用质心运动定律：
> $$
> 3mg-F_N=3ma_C
> $$
> 又由$a_A=a_C+a''_{AC}+a^\tau_{AC}$，解得：
> $$
> a_C=\frac{l}2\alpha\cos\theta+\frac{l}2\omega^2\sin\theta
> $$
> 最终：
> $$
> F_N=7mg\frac{6\left(9\sin^2\theta-18\sin\theta+16\right)}{(9\cos^2\theta+7)^2}
> $$

> **例4**：
>
> <img src="https://laoguantx.top/article/物理/理论力学/动力学综合问题/image-20251202153037773.png" alt="image-20251202153037773" style="zoom:50%;" />
>
> 如图所示，斜面倾角为$\alpha$，在水平力$F=2mg$作用下，沿水平面向右移动，并带动半径为$R$的均质轮$O$在斜面上纯滚动，铅直杆$AO$与轮心$O$较接，不计摩擦，设三构件质量均为$m$，系统初始静止，试求斜面加速度及较$O$处反力。
>
> **解**：
>
> <img src="https://laoguantx.top/article/物理/理论力学/动力学综合问题/image-20251202153133273.png" alt="image-20251202153133273" style="zoom:50%;" />
>
> 设系统从静止状态开始，斜面向右移动$s$距离时速度为$v$，可以写出如下计算方程：
> $$
> v_0=v\tan \theta ,\omega=\frac{v}{R\cos\theta}
> $$
> 由$T-T_0=W$，且$T_0=0$，得到：
> $$
> \frac{1}{2}mv^2+mv_0^2+\frac14mR^2\omega^2=2mgs-2mgs\tan\theta
> $$
> 将变量$v_0,\omega$代入上式，两边对时间$t$求导，得：
> $$
> a=\frac{4\cos\theta\left(\cos\theta-\sin\theta\right)}{2\sin^2\theta+3}g
> $$
>
> $$
> a_0=a\tan \theta
> $$
>
> <img src="https://laoguantx.top/article/物理/理论力学/动力学综合问题/image-20251202153521282.png" alt="image-20251202153521282" style="zoom:50%;" />
>
> 然后分别研究轮与斜面系统、杆$AO$，受力如上图，对于轮与斜面的系统，由质心运动定理：
> $$
> F-F_{Ox}=ma
> $$
>
> $$
> F_{Ox}=F-\frac{4\cos\theta\left(\cos\theta-\sin\theta\right)}{2\sin^2\theta+3}mg
> $$
>
> 对于杆$AO$，由质心运动定理：
> $$
> F_{Oy}-mg=ma_0
> $$
>
> $$
> F_{Oy}=\frac{2\sin2\theta-2\sin^2\theta+3}{2\sin^2\theta+3}mg
> $$

对于中间态问题，宜先用动能定理求出速度和加速度，再用动量（矩）方法求解约束力。

## 三、末瞬时问题

> **例5**：
>
> <img src="https://laoguantx.top/article/物理/理论力学/动力学综合问题/image-20251202153900507.png" alt="image-20251202153900507" style="zoom:50%;" />
>
> 系统在铅直平面内由两根相同的匀质细直杆构成，$A$，$B$为铰链，$D$为小滚轮，且$AD$水平。每根杆的质量为$m$，长度为$l$，当仰角$\alpha_{1}=60\degree$时，系统由静止释放。试求当仰角减到$\alpha_{2}=30\degree$时，杆$AB$的角速度及角加速度，摩擦和小滚轮的质量都不计。
>
> **解**：
>
> <img src="https://laoguantx.top/article/物理/理论力学/动力学综合问题/image-20251202154113931.png" alt="image-20251202154113931" style="zoom:50%;" />
>
> 取整个系统作为研究对象，其中杆$AB$做定轴转动，$BD$做平面运动。考虑系统由静止到$\alpha_2=30\degree$这个过程。系统开始时保持静止，初动能$T_1=0$。末动能等于：
> $$
> T_2=\frac{1}{2}J_A\omega_{AB}^2+(\frac{1}{2}mv_E^2+\frac{1}{2}J_E\omega_{BD}^2)
> $$
> 由图，杆$BD$的速度瞬心在$P$点，分析$B$点的速度为：
> $$
> AB\cdot\omega_{AB}=PB\cdot \omega_{BD}
> $$
> 由于$PB=BD=AB$，地：
> $$
> \omega_{AB}=\omega_{BD}
> $$
> 杆$BD$质心$E$的速度：
> $$
> v_E=PE\omega_{BD}=PE\omega_{AB}=PB\sin\left(2\alpha_2\right)\omega_{AB}=l\sin60°\omega_{AB}
> $$
> 而：
> $$
> J_A=\frac13ml^2,J_E=\frac1{12}ml^2
> $$
> 将上面结果代入，得到：
> $$
> T_2=\frac7{12}ml^2\omega_{AB}^2
> $$
> 在运动过程中，只有杆的重力做功，于是作用在系统中的力在运动过程中的总功为：
> $$
> \begin{aligned}\sum W&=2mg(\frac{l}{2}\sin\alpha_1-\frac{l}{2}\sin\alpha_2)\\&=mgl(\sin60°-\sin30°)\\&=\frac{1}{2}mgl(\sqrt{3}-1)\end{aligned}
> $$
> 由$T_2-T_1=\sum W$得：
> $$
> \frac{7}{12}ml^2\omega_{_{AB}}^2-0=\frac{1}{2}mgl(\sqrt{3}-1)
> $$
> 从而得到角速度：
> $$
> \omega_{_{AB}}=\sqrt{\frac{6(\sqrt{3}-1)g}{7l}}
> $$
> 如果想要求角加速度，绝对不可以直接将上式特殊情况下的等式直接求导，应当利用任意角度的动能定理方程两边求导获得角加速度。