---
title: 根据函数特性计算定积分的方法
published: 2024-12-10
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "methodstocomputedefiniteintegralsbasedonfunctionproperties"
---
注：本文中的计算方法，不包括牛顿莱布尼茨公式和求不定积分的四种方法。
## 一、利用被积函数的奇偶性
设$f(x)$在$[-a,a]$上连续，则：若$f(x)$为偶函数：
$$\int^a_{-a}f(x)\mathrm{d}x=2\int^a_0f(x)\mathrm{d}x$$
若$f(x)$为奇函数：
$$\int^a_{-a}f(x)\mathrm{d}x=0$$
可使用换元（令$t=-x$）证明上面结论。
方法一的推论：若$f(x)$在$[-a,a]$上连续，则：
$$\int_{-a}^af(x)\mathrm{d}x=\int^a_0[f(x)+f(-x)]\mathrm{d}x$$
## 二、利用被积函数的周期性
设$f(x)$为周期函数，且函数连续，周期为$T$，对任何常数$a,a\neq0$，有：
$$\int_a^{a+T}f(x)\mathrm{d}x=\int_0^Tf(x)\mathrm{d}x$$
