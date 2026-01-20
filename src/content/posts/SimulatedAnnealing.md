---
title: 模拟退火
published: 2025-09-06
category: ["程设计科", "算法与数据结构"]
tags: ["算法"]
alias: "simulatedannealing"
---

## 〇、爬山算法（Hill Climbing）

在介绍模拟退火之前，先简单介绍一下爬山算法。

爬山算法（Hill Climbing, HC）是一种简单直接的优化方法。它的核心思想是：从一个初始解出发，不断寻找更好的解。如果找不到更好的解，就停止。对于最小化问题，我们可以把目标函数记为 $f(x)$，算法的基本流程如下：

1. 在当前解的邻域中寻找一个更优解。
2. 如果找到更优解，就移动到这个解。
3. 如果找不到更优解，就停止（说明已经达到局部最优）。

公式表示如下：
$$
x_{k+1} =
\begin{cases}
\displaystyle \arg\min_{x'\in N(x_k)} f(x'), & \text{如果找到更优解}\\
x_k, & \text{否则}
\end{cases}
$$

爬山算法的一个问题是，它很容易卡在局部最优解上，无法找到全局最优解。比如：
- **局部极小值**：算法停在一个“低谷”，但不是全局最低点。
- **平台**：周围的解都一样好，算法不知道该往哪走。
- **脊**：最优方向和允许的移动方向不一致，导致算法进展缓慢。

![](https://laoguantx.top/article/程设计科/algorithm/SA/1.jpg)

多嘴一句：对于连续优化问题，还可以使用[梯度下降法（最速下降法）](/posts/datascienceandengineeringoptimization3/)：

爬山算法的局限性在于它无法跳出局部最优解，而模拟退火通过引入“温度”参数，可以在一定概率下接受较差的解，从而跳出局部最优。

## 一、模拟退火

### 1、模拟退火的背景

模拟退火（Simulated Annealing, SA）来源于物理学中的退火过程。在高温下，原子可以自由移动，容易跨越能量障碍；随着温度降低，系统逐渐稳定到低能量状态。模拟退火将这一过程应用到优化问题中：
- 把目标函数看作“能量”$E$。
- 把解空间看作“状态”。
- 用“温度”$T$控制接受较差解的概率。

在物理学中，系统的平衡状态服从 Boltzmann 分布：
$$
P(\text{状态 } s) = \frac{ \exp\!\left(-\dfrac{E(s)}{kT}\right) }{ Z(T) }
$$
模拟退火的核心思想是通过逐步降低温度，让系统从随机状态逐渐收敛到最优解。

![](https://laoguantx.top/article/程设计科/algorithm/SA/2.gif)

### 2、接受准则

模拟退火的关键是如何决定是否接受一个新解。我们希望构造一个马尔可夫链，使其平稳分布满足：
$$
\pi(s)=\frac{e^{-E(s)/T}}{Z(T)}
$$

接受准则可以写成：
$$
A(i\to j)=\min\left(1,\exp\!\left(-\frac{\Delta E}{T}\right)\right)
$$
这意味着：
- 如果新解更优（$\Delta E \leq 0$），一定接受。
- 如果新解更差，以一定概率接受，概率为 $\exp(-\Delta E / T)$，其中：
  - $\Delta E$ 是新解的能量与当前解的能量之差。
  - $T$ 是当前温度，控制接受概率的大小。

当温度 $T$ 较高时，$\exp(-\Delta E / T)$ 接近于 $1$，较差解更容易被接受；而当温度 $T$ 较低时，$\exp(-\Delta E / T)$ 接近于 $0$，较差解更难被接受。

### 3、冷却策略

模拟退火的冷却策略决定了温度如何下降。常见的冷却方法包括：

1. **几何降温**：$T_{k+1}=\alpha T_k,\alpha<1$
2. **指数降温**：$T_k=T_0 e^{-k/\tau}$
3. **自适应降温**：根据接受率动态调整温度。

理论上，温度下降得足够慢可以保证找到全局最优解，但实际应用中需要在计算开销和精度之间权衡。

### 4、模拟退火的流程

伪代码：
1. 初始化：随机生成初始解 $x$，设定初始温度 $T$。
2. 计算当前解的能量 $E(x)$，记录当前最优解。
3. 当温度 $T$ 大于最小值时：
   1. 重复若干次：
      1. 生成一个新解 $x'$。
      2. 计算能量差 $\Delta E = E(x') - E(x)$。
      3. 根据接受准则决定是否接受新解。
      4. 更新当前最优解。
   2. 降低温度。
4. 输出最优解。

### 5、参数选择

- **初始温度**：让初期接受较差解的概率较高（如 60%-90%）。
- **终止温度**：当温度低到无法跳出局部最优时停止。
- **内循环次数**：与问题规模成比例。
- **降温速率**：通常在 0.85 到 0.95 之间。

## 二、模拟退火例题

### 1、题目描述

[洛谷 P1337 [JSOI2004] 平衡点 / 吊打XXX](https://www.luogu.com.cn/problem/P1337)

如图，有 $n$ 个重物，每个重物系在一条足够长的绳子上。

每条绳子自上而下穿过桌面上的洞，然后系在一起。图中 $x$ 处就是公共的绳结。假设绳子是完全弹性的（即不会造成能量损失），桌子足够高（重物不会垂到地上），且忽略所有的摩擦，求绳结 $x$ 最终平衡于何处。

**注意**：桌面上的洞都比绳结 $x$ 小得多，所以即使某个重物特别重，绳结 $x$ 也不可能穿过桌面上的洞掉下来，最多是卡在某个洞口处。

![](https://cdn.luogu.com.cn/upload/image_hosting/u20jvui9.png)

**输入格式**

文件的第一行为一个正整数 $n$（$1\le n\le 1000$），表示重物和洞的数目。

接下来的 $n$ 行，每行是 $3$ 个整数 $x_i, y_i, w_i$，分别表示第 $i$ 个洞的坐标以及第 $i$ 个重物的重量。（$-10000\le x_i,y_i\le10000, 0<w_i\le1000$）

**输出格式**

你的程序必须输出两个浮点数（保留小数点后三位），分别表示处于最终平衡状态时绳结 $x$ 的横坐标和纵坐标。两个数以一个空格隔开。

### 2、题目分析

关于这道题，一切自然变化进行的方向都是使能量降低，因为能量较低的状态比较稳定。因为物重一定，桌子下面绳子越短，重物越低，势能越小，反过来，桌面上的绳子越长，重物越高，势能越大。

设第 $i$ 个洞的位置为 $(x_i,y_i)$，重物重量为 $w_i>0$，绳结的位置为 $X=(x,y)$。根据势能的计算公式：

$$
E_{p,i} = - m_i g h_i
$$

以桌面作为零势能面，桌面以上为正方向，其中 $E_{p,i}$ 表示第 $i$ 个重物的势能，$m_i$ 是重物的质量，$g$ 是重力加速度，$h_i$ 是重物的高度。而重物的高度可以表示为 $L_i-l_i$ ，（$L_i$ 是绳子的原始长度，$l_i$ 是桌面上的绳子长度）

最后，势能的总和即为：

$$
\begin{aligned}
E_p =& \sum_{i=1}^n E_{p,i}\\ =& \sum_{i=1}^n - m_i g h_i \\ =& -g \sum_{i=1}^n m_i (L_i-l_i) \\ =& -g \sum_{i=1}^n m_i (L_i - \sqrt{(x-x_i)^2+(y-y_i)^2}) \\ =&  + g \sum_{i=1}^n m_i \sqrt{(x-x_i)^2+(y-y_i)^2}
\end{aligned}
$$

推导结果的前一项 $-g \sum_{i=1}^n m_i L_i$ 为定值，所以只需要后一项的值最小。因此要求的平衡点就是使下方函数 $F(x,y)$ 取到全局最小值的点。

$$
F(x,y)=\sum_{i=1}^n m_i\cdot \sqrt{(x-x_i)^2+(y-y_i)^2}
$$

然后就可以使用模拟退火算法来求解这个函数的全局最小值，具体实现方法查看后面的内容。

### 3、代码拆解

#### （1）数据读入以及初始选点

```cpp
scanf("%d", &n);
for (int a = 1; a <= n; a++) {
    scanf("%d%d%d", &object[a].x, &object[a].y, &object[a].w);
    ansx += object[a].x;
    ansy += object[a].y;
}
ansx /= n;
ansy /= n;
answ = energy(ansx, ansy);
```

首先读入数据，并将所有洞的坐标取平均作为初始点，当然初始点位可以是任意位置。

#### （2）能量计算函数

```cpp
double energy(double x, double y) {
    double r = 0, dx, dy;
    for (int a = 1; a <= n; a++) {
        dx = x - object[a].x;
        dy = y - object[a].y;
        r += sqrt(dx * dx + dy * dy) * object[a].w;
    }
    return r;
}
```

这个函数计算当前点 $(x,y)$ 的能量值，即所有重物的势能之和。

#### （3）模拟退火主循环

```cpp
void sa() {
    double t = 3000;
    while (t > 1e-15) {
        double nx = ansx + (rand() * 2 - RAND_MAX) * t;
        double ny = ansy + (rand() * 2 - RAND_MAX) * t;
        double nw = energy(nx, ny);
        double de = nw - answ;
        if (de < 0) {
            ansx = nx;
            ansy = ny;
            answ = nw;
        } else if (exp(-de / t) * RAND_MAX > rand()) {
            ansx = nx;
            ansy = ny;
        }
        t *= down;
    }
}
```

这是模拟退火的核心部分，首先初始设置一个比较高的温度 $t$，然后在温度大于一个很小的值时不断循环。在每次循环中，生成一个新的候选点 $(nx, ny)$，计算其能量值 $nw$，并根据能量差 $de$ 决定是否接受这个新点。如果新点能量更低，则一定接受；如果能量更高，则以一定概率接受（概率的设置回见上文，此处 `exp(-de / t) * RAND_MAX > rand()` 就是概率的代码表示方法）。最后逐步降低温度。

当然，模拟退火算法是一个看脸的算法，为了提高结果的稳定性，可以多次运行模拟退火算法，取最优结果。

### 4、完整代码

```cpp title="模拟退火.cpp"
#include <bits/stdc++.h>

using namespace std;
int n;
double down = 0.996;
struct node {
    int x;
    int y;
    int w;
}
object[2005];
double ansx, ansy, answ;
double energy(double x, double y) {
    double r = 0, dx, dy;
    for (int a = 1; a <= n; a++) {
        dx = x - object[a].x;
        dy = y - object[a].y;
        r += sqrt(dx * dx + dy * dy) * object[a].w;
    }
    return r;
}
void sa() {
    double t = 3000;
    while (t > 1e-15) {
        double nx = ansx + (rand() * 2 - RAND_MAX) * t;
        double ny = ansy + (rand() * 2 - RAND_MAX) * t;
        double nw = energy(nx, ny);
        double de = nw - answ;
        if (de < 0) {
            ansx = nx;
            ansy = ny;
            answ = nw;
        } else if (exp(-de / t) * RAND_MAX > rand()) {
            ansx = nx;
            ansy = ny;
        }
        t *= down;
    }
}
int main() {
    scanf("%d", &n);
    for (int a = 1; a <= n; a++) {
        scanf("%d%d%d", &object[a].x, &object[a].y, &object[a].w);
        ansx += object[a].x;
        ansy += object[a].y;
    }
    ansx /= n;
    ansy /= n;
    answ = energy(ansx, ansy);
    for (int i = 1; i <= 5; i++)
        sa();
    printf("%.3lf %.3lf\n", ansx, ansy);
    return 0;
}
```
