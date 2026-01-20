---
title: 数域
published: 2024-08-02
category: ["数学", "大中衔接"]
tags: ["大中衔接"]
alias: "numberfield"
---
### 一、数域的概念

设$\mathbb{P}$ 是一个至少含有两个不同数的数集，若数集 $\mathbb{P}$关于数的四则运算都封闭，则我们称数集$\mathbb{P}$是一个数域。


比如：整数集 $\mathbb{Z}$ 不是数域，非负整数所成的集合不是数域，有限集${1,2,3,4,5}$不是数域。

有理数集$\mathbb{Q}$、实数集$\mathbb{R}$和复数集$\mathbb{C}$是数域（有理数域、实数域和复数域）$\mathbb{Q}\subset\mathbb{R}\subset\mathbb{C}$.

### 二、数域的简单性质

1. 存在异于有理数集$\mathbb{Q}$、实数集$\mathbb{R}$和复数集$\mathbb{C}$的数域，例如：

​	$$Q(\sqrt2):=\{a+b\sqrt2|a,b\in \mathbb{Q}\}$$

[card title="数学符号$:=$" color="info"]上式中$:=$表示其右边的表达式等于左边的表达式，并且可以用左边的表达式来简记右边的表达式。[/card]

---

**例1** 证明$Q(\sqrt2):=\{a+b\sqrt2|a,b\in \mathbb{Q}\}$是一个数域。

**证明** 对于任意$x,y\in\mathbb{Q}(\sqrt2)$，存在$a,b,c,d\in\mathbb{Q}$使得$x=a+b\sqrt{2},y=c+d\sqrt{2}$.
于是，$a\pm c,b\pm d,ac+2bd,ad+bc\in\mathbb{Q}$.因此：
$$x\pm y=(a+b\sqrt{2})\pm(c+d\sqrt{2})=(a\pm c)+(b\pm d)\sqrt{2}\in\mathbb{Q}(\sqrt{2}),\\xy=(a+b\sqrt{2})(c+d\sqrt{2})=(ac+2bd)+(ad+bc)\sqrt{2}\in\mathbb{Q}(\sqrt{2}).$$
又若$y\neq0$,即$c+d\sqrt2\neq0$，则$c-d\sqrt2\neq0$，$c^2-2d^2\neq0,\frac{ac-2bd}{c^2-2d^2}$，$\frac{bc-ad}{c^2-2d^2}\in\mathbb{Q}$
从而：
$$x\div y=\frac{a+b\sqrt{2}}{c+d\sqrt{2}}=\frac{(a+b\sqrt{2})(c-d\sqrt{2})}{(c+d\sqrt{2})(c-d\sqrt{2})}=\frac{ac-2bd}{c^2-2d^2}+\frac{bc-ad}{c^2-2d^2}\sqrt{2}\in\mathbb{Q}(\sqrt{2}).$$
上述推演说明$\mathbb{Q}(\sqrt{2})$关于数的四则运算封闭，因而它是一个数域。

---

2. 任何一个数域一定包含无限多个数。

---

**例2** 证明性质「二、2.」

**证明** 对于任意选取的数域，由于它至少含有两个互异的数，因此，它至少含有一个非零数不妨记为$a$.因数域关于数的加法运算封闭，对于任意的整数$n,na$均在该数域中且各不相同。从而，所取的数域含有无穷多个数。

---

3. 有理数域包含与任意一个数域中，即有理数一定是任意一个数域的子集。

---

**例3** 证明性质「二、3.」

**证明** 对于任意选取的数域$\mathbb{P}$，由于它至少含有两个互异的数，因此，它至少含有一个非零数，不妨记为$a$. 依数域关于除法、减法的封闭性，我们有：

$$1=\frac aa\in\mathbb{P},0=1-1\in\mathbb{P}$$

依数域关于数的四则运算的封闭性，可推知所有整数，进而所有有理数均在$\mathbb{P}$中，或有理数域是$\mathbb{P}$的子集。由数域$\mathbb{P}$的任意性，结论恒真。

---

4. 记数域的全体所形成的集合为$\cal{P}$，则：

   $$\mathbb{Q}=\bigcap_{\mathbb{P}\in \cal{P}}\mathbb{P}$$

---

**例4** 证明性质证明性质「二、4.」

**证明** 对于任意一个数域$\mathbb{P}\in\mathcal{P}$,都有$\mathbb{Q}\subset\mathbb{P}$，故$\mathbb{Q}\subset\bigcap_{p\in P}\mathbb{P}$。
又$\mathbb{Q}\in\mathcal{P}$，故$\bigcap_{\mathbb{P}\in P}\mathbb{P}\subset\mathbb{Q}$.
上述关于两个集合相互包含的式子推知结论成立。正是因为有理数域有上述性质，我们通常称有理数域是“最小”的数域。

---

性质「二、4.」可以看成为性质「二、3.」的一种等价形式。