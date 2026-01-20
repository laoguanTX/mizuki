---
title: 一元多项式函数
published: 2024-08-18
category: ["数学", "大中衔接"]
tags: ["大中衔接"]
alias: "univariatepolynomialfunctions"
---
### 一、一元多项式函数的形式

设$a_0, a_1, \cdots , a_n\in \mathbb{P} , a_n\neq 0$，我们称下述定义取值均在数域$\mathbb{P}$中的函数
$$f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0=\sum_{i=0}^na_ix^i,\forall x\in\mathbb{P}$$
为数域$\mathbb{P}$上的一个**一元多项式函数**。

称$n$为$f(x)$的**次数**、$a_ix^i$为$f(x)$的**第$i$次项**、$a_i$为该项的**系数**$(i=0,1,2,\cdots,n)$.
称$a_nx^n$为$f(x)$的**首项**、$a_n$为$f(x)$的**首项系数**、$x$为**变元**。
称恒零值多项式函数为**零多项式函数**。零多项式函数的次数定义为$-\infty$.两个一元多项式函数相等当且仅当同次幂的项所对应的系数全部相等。当$f(x)$的系数全为实数时，我们称$f(x)$是**一元实系数多项式函数**。
当我们在$\mathbb{C}$中考虑$f(x)$的时候，我们称$f(x)$是**一元复系数多项式函数**。

在高校的一般课程的学习中，我们总认为复数域是最大的数域。

设$f(x)$为数域 $\mathbb{P}$上的一个一元多项式函数，若$z\in\mathbb{P}$ 满足$f(z)=0$，则称$z$为$f(x)$在$\mathbb{P}$中的一个**根**或者**零点**。

如果对于$z$ 还存在正整数$k$以及$\mathbb{P}$上的一元多项式函数$g(x)$使得
$$f(x)=(x-z)^kg(x),\:g(z)\neq0$$
则我们称$z$为$f(x)$的一个$k$重根或$k$**重零点**，当$k>1$时，称$z$为**重根**。当$k=1$时，称$z$为**单根**。

关于一元复系数多项式函数的根，我们有如下结论：
任意一个一元$n(n\geq1)$次复系数多项式函数在复数域中必有$m$个根（重根按重数计）。这个结论是我们在中学阶段对一元多项式函数进行因式分解的理论基础。

### 二、一元多项式函数的因式分解

1. 一元复系数多项式函数的因式分解：设$f(x)$为一个首项系数为$a$的$n(n\geq1)$次复系数多项式函数，$\alpha_1,\alpha_2,\cdots,\alpha_n$为$f(x)$的$n$个复根（重根按重数计）。则：
   $$f(x)=a(x-\alpha_1)(x-\alpha_2)\cdots(x-\alpha_n)$$

   但是现在太菜了，证不了……

2. 学习一元实系数多项式函数的因式分解，需要先了解下面重要结论：
    若 $\alpha\in\mathbb{C}$为一元实系数多项式函数$f(x)$在$\mathbb{C}$ 中的根，则$\bar{\alpha}$也是$f(x)$在$\mathbb{C}$中的根。

  证明：不妨设 $f(x)=\sum_i=0^na_ix^i$，这里$a_0,a_1,\cdots,a_n\in\mathbb{R}$, 且$a_n\neq0$.由假设有
   $$f\left(\alpha\right)=\sum_{i=0}^{n}a_{i}\alpha^{i}=0$$
  于是，依复数的运算规律，我们有：
  $$f(\overline{\alpha})=\sum_{i=0}^{n}a_{i}\overline{\alpha}^{i}=\sum_{i=0}^{n}\overline{a_{i}}\overline{\alpha^{i}}=\sum_{i=0}^{n}\overline{a_{i}\alpha^{i}}=\overline{\sum_{i=0}^{n}a_{i}\alpha^{i}}=\overline{f(\alpha)}=0$$
  证毕，即$\overline{\alpha}$亦为根。
  这说明，一元实系数多项式函数的非实数根总是成对出现的。

3. 对于一元实系数多项式函数的因式分解：设$f(x)$为一个首项系数为$a$的$n(n\geq1)$次实系数多项式函数，恰有$r$个实根：$\alpha_1,\alpha_2,\cdots,\alpha_r$，$2s$个非实根$\beta_1,\overline{\beta}_1,\beta_2,\overline{\beta}_2,\cdots,\beta_s,\overline{\beta}_s$，其中$r+2s=n$.
    $$f(x)=a\prod\limits_{i=1}^{r}(x-\alpha_{i})\prod\limits_{i=1}^{s}\Big[(x-\beta_{i})(x-\overline{\beta}_{i})\Big]=a\prod\limits_{i=1}^{r}(x-\alpha_{i})\prod\limits_{i=1}^{s}(x^{2}+p_{i}x+q_{i})$$
    这里：
    $$p_i=-2\mathrm{Re}(\beta_i)=-(\beta_i+\overline{\beta_i}),\quad q_i=|\beta_i|^2=\beta_i\overline{\beta_i}$$
    满足：
    $$p_i^2-4q_i<0,\quad i=1,2,\cdots,s$$

4. 非零的一元复系数的多项式函数均可写成若干个复系数一次多项式函数的积。非零的一元实系数多项式函数均可分解为若干个实系数的一次多项式函数与若干个实系数无实根的二次多项式函数的乘积。

### 三、韦达（Vieta）定理

设$f(x)=x^n+a_1x^{n-1}+a_2x^{n-2}+\cdots+a_{n-1}x+a_n$为一个首项系数为$1$的复系数多项式函数，$\alpha_1,\alpha_2$,$\cdots,\alpha_n$为$f(x)$的$n$个复根（重根按重数计），则
$$\sum_{1\leq i_1<i_2<\cdots<i_k\leq n}\prod_{j=1}^k\alpha_{i_j}=\left(-1\right)^ka_k\:,\quad k=1,2,\cdots,n.$$
韦达公式刻画了多项式函数的根与系数之间的关系。

### 四、$n$次单位原根

---

> **例1** 求$x^n-1$在$\mathbb{C}$中的所有根$(n>1)$.
>
> **解** 设$z=r(\cos\theta+\:\sin\theta\mathrm{i})=r\mathrm{e}^{\mathrm{i}\theta}$是$x^n-1$在$\mathbb{C}$中的一个根，则
> $$r^n(\cos n\theta+\sin n\theta\mathrm{i})=1$$
> 故：
> $$r^n\cos n\theta=1,\quad r^n\sin n\theta=0$$
> 从而：
> $$r^n=1,\quad n\theta=2k\pi,\quad k=0,\:\pm1,\:\pm2,\cdots $$
> 即
> $$r=1,\quad\theta=\frac{2k\pi}n,\quad k=0,\:\pm1,\:\pm2,\cdots $$
>
> 因此，$z=\mathrm{e}^{\frac{2k\pi}n\mathrm{i}}(k=0,\pm1,\pm2,\cdots)$均为$x^n-1$的根。不难验证，所有这些根中仅
> $$z_1=\mathrm{e}^{\frac{2\pi}{n}\mathrm{i}},z_2=\mathrm{e}^{2\frac{2\pi}{n}\mathrm{i}},\cdots,z_{n-1}=\mathrm{e}^{(n-1)\frac{2\pi}{n}\mathrm{i}},z_n=1$$
> 为$x^n-1$的所有$n$个不同的根，所有的$z=\mathrm{e}^\frac{2k\pi}n\mathrm{i}(k=0,\pm1,\pm2,\cdots)$均与上式中的某一个$z_i$重合$(1\leq i\leq n)$.

---

紧接例1内容，令，则$x^n-1$的根有如下表达式：$z_i= \omega ^i$, $i=$l$, 2, \cdots , n$.
$\omega$有如下性质：不仅它是$x^n-1$的一个根，它的任一次幂也是。$x^n-1$的任一根均为$\omega$的某次幂，习惯上，我们称具有这样性质的根$\omega$为$x^n-1$的一个$n$次单位原根。

### 五、三次复系数多项式函数的求根（卡当公式）



初试步：$\xrightarrow{首项系数化为1}z^3+bz^2+cz+a\xrightarrow[变量替换]{x=z-\frac b3}x^3+px+q$.

---

> **例2** 求$f(x)=x^3+px+q$在$\mathbb{C}$中的所有根。
>
> **解** 对于$y,z\in\mathbb{C}$,若$y+z$ 为$f(x)$的一个根，则：
> $$f(y+z)=y^3+z^3+(3yz+p)(y+z)+q=0$$
> 于是，若满足约束：
> $$3yz+p=0,\quad y^3+z^3=-q$$
> 的$y,z$可求，那么$f(x)$的根$y+z$可求。由上式，我们有：
> $$y^3z^3=-\frac{1}{27}\:p^3\:,\:y^3+z^3=-q$$
> 又$y^3$和$z^3$满足上式的充分必要条件为它们是一元二次多项式函数$t^2+qt-\frac1{27}p^3$的两个根。
> 它们分别为：
> $$-\frac q2+\sqrt{\frac{q^2}4+\frac{p^3}{27}},\quad-\frac q2-\sqrt{\frac{q^2}4+\frac{p^3}{27}}$$
> 由于$y,z$ 在表达根的时候是对称的，我们不妨设
> $$y^3=-\frac q2+\sqrt{\frac{q^2}4+\frac{p^3}{27}},\quad z^3=-\frac q2-\sqrt{\frac{q^2}4+\frac{p^3}{27}}.$$
> 考虑到$y,z$必须满足约束方程中的$3yz+ p= 0$，由上式得如下三组$y,z$的值：
> $$\begin{aligned}&y=\sqrt[3]{-\frac{q}{2}+\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},z=\sqrt[3]{-\frac{q}{2}-\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},\\&y=\omega\sqrt[3]{-\frac{q}{2}+\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},z=\omega^{2}\sqrt[3]{\frac{q}{2}-\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},\qquad\omega=-\frac{1}{2}+\frac{\sqrt{3}}{2}\mathrm{i}\\&y=\omega^{2}\sqrt[3]{-\frac{q}{2}+\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},z=\omega\sqrt[3]{-\frac{q}{2}-\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},\end{aligned}$$

---

据此，我们得到了$f(x)$的三个根：
$$\begin{aligned}&y=\sqrt[3]{-\frac{q}{2}+\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},z=\sqrt[3]{-\frac{q}{2}-\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},\\&y=\omega\sqrt[3]{-\frac{q}{2}+\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},z=\omega^{2}\sqrt[3]{\frac{q}{2}-\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},\qquad\omega=-\frac{1}{2}+\frac{\sqrt{3}}{2}\mathrm{i}\\&y=\omega^{2}\sqrt[3]{-\frac{q}{2}+\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},z=\omega\sqrt[3]{-\frac{q}{2}-\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}},\end{aligned}$$
通常，我们称上述求根公式为**卡当（Cardan）公式**。

### 六、四次复系数多项式函数的求根（费拉里方法）

初试步：$\xrightarrow{首项系数化为1}x^4+ax^3+bx^2+cx+d$

---

> **例3** 求$f(x)=x^4+ax^3+bx^2+cx+d$在$\mathbb{C}$中的所有根。
>
> **解**  考虑多项式函数所形成的方程：
> $$x^4+ax^3+bx^2+cx+d=0$$
> 引入参数$\iota$ ,配方化上述方程为等价的：
> $$\left(x^2+\frac{ax}2+\frac t2\right)^2=\left(\frac{a^2}4-b+t\right)x^2+\left(\frac{at}2-c\right)x+\left(\frac{t^2}4-d\right)$$
> 上式的等号右端是关于x 的一个二次多项式函数.为了保证其为完全平方形式，令它的判别式为零，即：
> $$\left(\frac{at}2-c\right)^2-4\left(\frac{a^2}4-b+t\right)\left(\frac{t^2}4-d\right)=0$$
> 由此得保证等号右侧为完全平方的$\iota$是三次方程
> $$t^3-bt^2+(ac-4d)t-a^2d+4bd-c^2=0$$
> 三个根中的任意一个. 任取其中一个，不妨仍记作1，则
> $$\left(x^2+\frac{ax}{2}+\frac{t}{2}\right)^2=\left(x\sqrt{\frac{a^2}{4}-b+t}+\sqrt{\frac{t^2}{4}-d}\right)^2$$
> 把上式中等式右端的项移到等式左边，即可推得到两个二次方程：
> $$x^{2}+\left(\frac{a}{2}-\sqrt{\frac{a^{2}}{4}-b+t}\right)x+\frac{t}{2}-\sqrt{\frac{t^{2}}{4}-d}=0,\\x^{2}+\left(\frac{a}{2}+\sqrt{\frac{a^{2}}{4}-b+t}\right)x+\frac{t}{2}+\sqrt{\frac{t^{2}}{4}-d}=0$$
> 然后可以用求根公式得出四个解。

---

由此可知，一个四次方程求解等于一个三次方程求解和二次方程求解。这个方法叫做**费拉里（Ferrari）方法**。

### 七、总结

上述过程及结合初中所学显示，$4$次及以下次数复多项式函数的根，均可经过其系数通过有限次的加减乘除及开方运算表示出来。自然地，我们要问$5$次及以上次数复多项式函数的根是否也可经其系数通过有限次的加减乘除及开方运算表示出来呢？

伽罗华(Galois E.)于1829年前后首次利用群的理论证明：一般情形下，这是不可能的！
