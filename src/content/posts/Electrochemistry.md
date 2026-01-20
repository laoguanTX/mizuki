---
title: 电化学
published: 2024-11-05
category: ["其他课程基础", "普通化学"]
tags: ["普通化学"]
alias: "electrochemistry"
---

## 一、原电池与电解池

### 1、原电池与电解池的异同

对于原电池，反应的$\Delta G<0$；对于一些电解池内的反应，可以理解为通电强行让它发生反应，反应的$\Delta G>0$。
原电池在物理中相当于是内电路，电解池在物理中相当于是外电路，两者在化学本质上相似，所以本文以原电池为例来解释电动势。

### 2、高中内容补充

电镀（银）的总反应方程式：
$$\mathrm{Ag}(阳极)\rightarrow\mathrm{Ag}(阴极)$$

## 二、原电池

### 1、原电池的电动势

电化学的化学变化过程中有电功。根据电学知识，电功（非体积功）$W_f$等于电量$q$与电动势$E$的乘积，即：
$$W_f=qE=nFE$$
其中$F$为法拉第常数，为$96500 \mathrm\:{C\cdot mol}$。表示一摩尔电子的电量。
根据热力学原理，对于恒温恒压下有非体积功$W_f$（电功）的化学变化过程，化学反应的自由能增量$\Delta_rG_m$和$w_f$之间的关系：
$$\Delta_rG_m\le-W_f$$
若电池反应是可逆的（电流无限小），那么上式取等号，如果不可逆，那么不取等号，为了方便，下面的内容只讨论可逆的情况。即：
$$\Delta_rG_m=-W_f$$
因为$W_f=nFE$，所以有：
$$\Delta_rG_m=-nFE$$
$$\Delta_rG_m=\Delta_rG_m^\ominus+RT\ln J$$
$$\Delta_rG_m^\ominus=-nFE^\ominus$$
其中$J$为反应商，$n$为一摩尔反应中转移了多少摩尔电子。经过变形得到：（能斯特方程）
$$E=E^\ominus-\frac{RT}{nF}\ln J$$
根据化学热力学知识：
$$\left(\frac{\partial G}{\partial T}\right)_p=-S$$
$$\left(\frac{\partial \Delta _rG_m}{\partial T}\right)_p=-\Delta_rS_m$$
得到：
$$\Delta_rS_m=nF\frac{\partial E}{\partial T}$$
从而，可以得到：
$$\Delta_rH_m=\Delta_rG_m+T\Delta_rS_m=-nEF+nFT\frac{\partial E}{\partial T}$$
$$Q_r=T\Delta_rS_m=nFT\frac{\partial E}{\partial T}$$

### 2、电极电势

正极的电势减去负极的电势等于这个原电池的电动势，即：
$$E=\varphi_+-\varphi_-$$
$$E^\ominus=\varphi_+^\ominus-\varphi_-^\ominus$$
为了计算电势，规定了$\varphi^\ominus_{\mathrm{H^+/H_2}}=0$，如果氢电极为正极，锌电极为负极，有：
$$E^\ominus=\varphi_{\mathrm{H^+/H_2}}^\ominus-\varphi_{\mathrm{Zn^{2+}/Zn}}^\ominus
<0$$
由此就有：
$$\Delta G = -2E^\ominus F >0$$
表明该反应不会自发进行。
现在以氢电极为参照，如果锌电极不在标准态之下。那么会有：
$$\begin{aligned}\varphi_{\mathrm{Zn^{2+}/Zn}}&=\varphi_{\mathrm{Zn^{2+}/Zn}}－\varphi_{\mathrm{H^{+}/H_2}}^\ominus＝E\\&=E^\ominus-\frac{RT}{2F}\ln\frac{1}{\frac{c_{\mathrm{Zn^{2+}}}}{c^\ominus}}\\&=E^\ominus+\frac{RT}{2F}\ln{\frac{c_{\mathrm{Zn^{2+}}}}{c^\ominus}}\\&=\varphi_{\mathrm{Zn^{2+}/Zn}}^\ominus+\frac{RT}{2F}\ln{\frac{c_{\mathrm{Zn^{2+}}}}{c^\ominus}}\end{aligned}$$

### 3、$E$和$\varphi$的应用

生活中利用测定电池电动势的方法，设计相应的原电池，可以测定离子浓度，例如PH计测定氢离子浓度。