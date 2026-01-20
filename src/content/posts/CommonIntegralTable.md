---
title: 常用积分表
published: 2025-06-12
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "commonintegraltable"
---
## 一、常见积分表

| 序号 | 积分表达式                                       | 积分结果                                                     |
| ---- | ------------------------------------------------ | ------------------------------------------------------------ |
| 1    | $\int x^n \, \mathrm{d}x$                        | $\dfrac{x^{n+1}}{n+1} + C \quad (n \neq -1)$                 |
| 2    | $\int \mathrm{d}x$                               | $x + C$                                                      |
| 3    | $\int a \, \mathrm{d}x$                          | $a x + C$                                                    |
| 4    | $\int \frac{1}{x} \, \mathrm{d}x$                | $\ln\vert x\vert  + C$                                       |
| 5    | $\int e^{x} \, \mathrm{d}x$                      | $e^{x} + C$                                                  |
| 6    | $\int a^{x} \, \mathrm{d}x$                      | $\dfrac{a^{x}}{\ln a} + C \quad (a>0, a\neq 1)$              |
| 7    | $\int \sin x \, \mathrm{d}x$                     | $-\cos x + C$                                                |
| 8    | $\int \cos x \, \mathrm{d}x$                     | $\sin x + C$                                                 |
| 9    | $\int \tan x \, \mathrm{d}x$                     | $-\ln\vert \cos x\vert  + C$                                 |
| 10   | $\int \cot x \, \mathrm{d}x$                     | $\ln\vert \sin x\vert  + C$                                  |
| 11   | $\int \sec x \, \mathrm{d}x$                     | $\ln\vert \sec x + \tan x\vert  + C$                         |
| 12   | $\int \csc x \, \mathrm{d}x$                     | $\ln\vert \csc x - \cot x\vert  + C$                         |
| 13   | $\int \sec^2 x \, \mathrm{d}x$                   | $\tan x + C$                                                 |
| 14   | $\int \csc^2 x \, \mathrm{d}x$                   | $-\cot x + C$                                                |
| 15   | $\int \sec x \tan x \, \mathrm{d}x$              | $\sec x + C$                                                 |
| 16   | $\int \csc x \cot x \, \mathrm{d}x$              | $-\csc x + C$                                                |
| 17   | $\int \frac{1}{1 + x^2} \, \mathrm{d}x$          | $\arctan x + C$                                              |
| 18   | $\int \frac{1}{\sqrt{1 - x^2}} \, \mathrm{d}x$   | $\arcsin x + C$                                              |
| 19   | $\int \frac{1}{\sqrt{x^2 - 1}} \, \mathrm{d}x$   | $\ln\vert x + \sqrt{x^2 - 1}\vert  + C$                      |
| 20   | $\int \ln x \, \mathrm{d}x$                      | $x \ln x - x + C$                                            |
| 21   | $\int x e^{x} \, \mathrm{d}x$                    | $(x-1)e^x + C$                                               |
| 22   | $\int x \sin x \, \mathrm{d}x$                   | $-\!x \cos x + \sin x + C$                                   |
| 23   | $\int x \cos x \, \mathrm{d}x$                   | $x \sin x + \cos x + C$                                      |
| 24   | $\int e^{a x} \, \mathrm{d}x$                    | $\frac{1}{a} e^{a x} + C$                                    |
| 25   | $\int \frac{1}{a^2 + x^2} \, \mathrm{d}x$        | $\frac{1}{a} \arctan\left(\frac{x}{a}\right) + C$            |
| 26   | $\int \frac{1}{\sqrt{a^2 - x^2}} \, \mathrm{d}x$ | $\arcsin\left(\frac{x}{a}\right) + C$                        |
| 27   | $\int \frac{1}{x^2 - a^2} \, \mathrm{d}x$        | $\frac{1}{2a} \ln\left\vert \frac{x-a}{x+a}\right\vert  + C$ |
| 28   | $\int \frac{1}{\vert x\vert } \, \mathrm{d}x$    | $\operatorname{sgn}(x)\ln\vert x\vert  + C$                  |
| 29   | $\int \arctan x \, \mathrm{d}x$                  | $x \arctan x - \frac{1}{2} \ln(1 + x^2) + C$                 |
| 30   | $\int \arcsin x \, \mathrm{d}x$                  | $x \arcsin x + \sqrt{1 - x^2} + C$                           |

---

## 二、详细证明

下面对上述表格中的部分积分公式进行详细推导。其余积分的推导可类似进行。

---

### 1. 幂函数积分

$$
\int x^n \, \mathrm{d}x = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)
$$

**证明：**

对$x^n$积分，设$F(x) = \frac{x^{n+1}}{n+1}$，则

$$
\frac{\mathrm{d}}{\mathrm{d}x} F(x) = \frac{\mathrm{d}}{\mathrm{d}x} \left( \frac{x^{n+1}}{n+1} \right) = x^n
$$

因此，

$$
\int x^n \, \mathrm{d}x = \frac{x^{n+1}}{n+1} + C
$$

---

### 2. $\int \mathrm{d}x = x + C$

**证明：**
$$
\frac{\mathrm{d}}{\mathrm{d}x} x = 1
$$
故积分结果为$x + C$。

---

### 3. $\int a \, \mathrm{d}x = a x + C$

**证明：**
$$
\frac{\mathrm{d}}{\mathrm{d}x} (a x) = a
$$
故积分结果为$a x + C$。


---

### 4. $\int \frac{1}{x} \mathrm{d}x$

$$
\int \frac{1}{x} \, \mathrm{d}x = \ln|x| + C
$$

**证明：**

$\frac{\mathrm{d}}{\mathrm{d}x}\ln|x| = \frac{1}{x}$，故直接得证。

---

### 5. $\int e^x \, \mathrm{d}x$

$$
\int e^{x} \, \mathrm{d}x = e^{x} + C
$$

**证明：**

$\frac{\mathrm{d}}{\mathrm{d}x} e^x = e^x$，故直接得证。

---

### 6. $\int a^x \, \mathrm{d}x$

$$
\int a^{x} \, \mathrm{d}x = \frac{a^{x}}{\ln a} + C, \quad (a > 0, a \neq 1)
$$

**证明：**

$\frac{\mathrm{d}}{\mathrm{d}x} a^x = a^x \ln a$，于是

$$
\frac{\mathrm{d}}{\mathrm{d}x} \left( \frac{a^x}{\ln a} \right) = a^x
$$

---

### 7. $\int \sin x \, \mathrm{d}x$

$$
\int \sin x \, \mathrm{d}x = -\cos x + C
$$

**证明：**

$\frac{\mathrm{d}}{\mathrm{d}x}(-\cos x) = \sin x$

---

### 8. $\int \cos x \, \mathrm{d}x$

$$
\int \cos x \, \mathrm{d}x = \sin x + C
$$

**证明：**

$\frac{\mathrm{d}}{\mathrm{d}x}(\sin x) = \cos x$

---

### 9. $\int \tan x \, \mathrm{d}x$

$$
\int \tan x \, \mathrm{d}x = -\ln|\cos x| + C
$$

**证明：**

$\tan x = \frac{\sin x}{\cos x}$

令$u = \cos x$，$\mathrm{d}u = -\sin x \mathrm{d}x \implies -\mathrm{d}u = \sin x \mathrm{d}x$

$$
\int \tan x \, \mathrm{d}x = \int \frac{\sin x}{\cos x} \mathrm{d}x
$$

令$u = \cos x$，则$\mathrm{d}u = -\sin x \mathrm{d}x$，所以

$$
\int \tan x \, \mathrm{d}x = -\int \frac{1}{u} \mathrm{d}u = -\ln|u| + C = -\ln|\cos x| + C
$$

---

### 10. $\int \cot x \, \mathrm{d}x = \ln|\sin x| + C$

**证明：**

$\cot x = \frac{\cos x}{\sin x}$，令$u = \sin x$，$\mathrm{d}u = \cos x \mathrm{d}x$，则
$$
\int \cot x \, \mathrm{d}x = \int \frac{\cos x}{\sin x} \mathrm{d}x = \int \frac{1}{u} \mathrm{d}u = \ln|u| + C = \ln|\sin x| + C
$$

---

### 11. $\int \sec x \, \mathrm{d}x = \ln|\sec x + \tan x| + C$

**证明：**

考虑分子分母同乘$\sec x + \tan x$：
$$
\int \sec x \mathrm{d}x = \int \frac{\sec x (\sec x + \tan x)}{\sec x + \tan x} \mathrm{d}x = \int \frac{\sec^2 x + \sec x \tan x}{\sec x + \tan x} \mathrm{d}x
$$
令$u = \sec x + \tan x$，则
$$
\frac{\mathrm{d}u}{\mathrm{d}x} = \sec x \tan x + \sec^2 x = \sec^2 x + \sec x \tan x
$$
所以
$$
\int \sec x \mathrm{d}x = \int \frac{1}{u} \mathrm{d}u = \ln|u| + C = \ln|\sec x + \tan x| + C
$$

---

### 12. $\int \csc x \, \mathrm{d}x = \ln|\csc x - \cot x| + C$

**证明：**

分子分母同乘$\csc x - \cot x$：
$$
\int \csc x \mathrm{d}x = \int \frac{\csc x (\csc x - \cot x)}{\csc x - \cot x} \mathrm{d}x = \int \frac{\csc^2 x - \csc x \cot x}{\csc x - \cot x} \mathrm{d}x
$$
令$u = \csc x - \cot x$，则
$$
\frac{\mathrm{d}u}{\mathrm{d}x} = -\csc x \cot x + \csc^2 x = \csc^2 x - \csc x \cot x
$$
所以
$$
\int \csc x \mathrm{d}x = \int \frac{1}{u} \mathrm{d}u = \ln|u| + C = \ln|\csc x - \cot x| + C
$$

---

### 13. $\int \sec^2 x \, \mathrm{d}x = \tan x + C$

**证明：**
$$
\frac{\mathrm{d}}{\mathrm{d}x} \tan x = \sec^2 x
$$

---

### 14. $\int \csc^2 x \, \mathrm{d}x = -\cot x + C$

**证明：**
$$
\frac{\mathrm{d}}{\mathrm{d}x} (-\cot x) = \csc^2 x
$$

---

### 15. $\int \sec x \tan x \, \mathrm{d}x = \sec x + C$

**证明：**
$$
\frac{\mathrm{d}}{\mathrm{d}x} \sec x = \sec x \tan x
$$

---

### 16. $\int \csc x \cot x \, \mathrm{d}x = -\csc x + C$

**证明：**
$$
\frac{\mathrm{d}}{\mathrm{d}x} (-\csc x) = \csc x \cot x
$$

---

### 17. $\int \frac{1}{1+x^2}\mathrm{d}x$

$$
\int \frac{1}{1 + x^2} \, \mathrm{d}x = \arctan x + C
$$

**证明：**

$\frac{\mathrm{d}}{\mathrm{d}x} \arctan x = \frac{1}{1 + x^2}$

---

### 18. $\int \frac{1}{\sqrt{1-x^2}}\mathrm{d}x$

$$
\int \frac{1}{\sqrt{1 - x^2}} \, \mathrm{d}x = \arcsin x + C
$$

**证明：**

$\frac{\mathrm{d}}{\mathrm{d}x} \arcsin x = \frac{1}{\sqrt{1 - x^2}}$

---

### 19. $\int \frac{1}{\sqrt{x^2 - 1}} \, \mathrm{d}x = \ln|x + \sqrt{x^2 - 1}| + C$

**证明：**

令$x = \cosh t$，$\mathrm{d}x = \sinh t \mathrm{d}t$，$\sqrt{x^2 - 1} = \sinh t$。
$$
\int \frac{1}{\sqrt{x^2 - 1}} \mathrm{d}x = \int \frac{1}{\sinh t} \sinh t \mathrm{d}t = \int 1 \mathrm{d}t = t + C
$$
又$x = \cosh t \implies t = \operatorname{arcosh} x = \ln|x + \sqrt{x^2 - 1}|$
$$
\int \frac{1}{\sqrt{x^2 - 1}} \mathrm{d}x = \ln|x + \sqrt{x^2 - 1}| + C
$$

---

### 20. $\int \ln x \, \mathrm{d}x$

**分部积分法**，令$u = \ln x$，$\mathrm{d}v = \mathrm{d}x$，则$\mathrm{d}u = \frac{1}{x} \mathrm{d}x$，$v = x$

$$
\int \ln x \, \mathrm{d}x = x \ln x - \int x \cdot \frac{1}{x} \mathrm{d}x = x \ln x - \int 1 \, \mathrm{d}x = x \ln x - x + C
$$

---

### 21. $\int x e^x \, \mathrm{d}x = (x-1) e^x + C$

**证明：**

分部积分，$u = x$, $\mathrm{d}v = e^x \mathrm{d}x$, $\mathrm{d}u = \mathrm{d}x$, $v = e^x$
$$
\int x e^x \mathrm{d}x = x e^x - \int e^x \mathrm{d}x = x e^x - e^x + C = (x-1) e^x + C
$$

---

### 22. $\int x \sin x \, \mathrm{d}x$

**分部积分法**，令$u = x$，$\mathrm{d}v = \sin x \, \mathrm{d}x$，则$\mathrm{d}u = \mathrm{d}x$，$v = -\cos x$

$$
\int x \sin x \, \mathrm{d}x = -x \cos x + \int \cos x \, \mathrm{d}x = -x \cos x + \sin x + C
$$

---

### 23. $\int x \cos x \, \mathrm{d}x$

**分部积分法**，令$u = x$，$\mathrm{d}v = \cos x \, \mathrm{d}x$，则$\mathrm{d}u = \mathrm{d}x$，$v = \sin x$

$$
\int x \cos x \, \mathrm{d}x = x \sin x - \int \sin x \, \mathrm{d}x = x \sin x + \cos x + C
$$

---

### 24. $\int e^{a x} \, \mathrm{d}x = \frac{1}{a} e^{a x} + C$

**证明：**

$\frac{\mathrm{d}}{\mathrm{d}x} e^{a x} = a e^{a x}$，所以
$$
\int e^{a x} \mathrm{d}x = \frac{1}{a} e^{a x} + C
$$

---

### 25. $\int \frac{1}{a^2 + x^2} \, \mathrm{d}x$

令$x = a \tan \theta$，则$\mathrm{d}x = a \sec^2 \theta \mathrm{d}\theta$，$a^2 + x^2 = a^2 + a^2 \tan^2 \theta = a^2 \sec^2 \theta$

$$
\int \frac{1}{a^2 + x^2} \mathrm{d}x = \int \frac{1}{a^2 \sec^2 \theta} a \sec^2 \theta \mathrm{d}\theta = \int \frac{1}{a} \mathrm{d}\theta = \frac{1}{a} \theta + C
$$

又$x = a \tan \theta \implies \theta = \arctan\left(\frac{x}{a}\right)$

$$
\int \frac{1}{a^2 + x^2} \mathrm{d}x = \frac{1}{a} \arctan\left(\frac{x}{a}\right) + C
$$

---

### 26. $\int \frac{1}{\sqrt{a^2 - x^2}} \mathrm{d}x$

令$x = a \sin \theta$，$\mathrm{d}x = a \cos \theta \mathrm{d}\theta$，$\sqrt{a^2 - x^2} = a \cos \theta$

$$
\int \frac{1}{\sqrt{a^2 - x^2}} \mathrm{d}x = \int \frac{1}{a \cos \theta} a \cos \theta \mathrm{d}\theta = \int 1 \mathrm{d}\theta = \theta + C
$$

又$x = a \sin \theta \implies \theta = \arcsin \left(\frac{x}{a}\right)$

$$
\int \frac{1}{\sqrt{a^2 - x^2}} \mathrm{d}x = \arcsin \left(\frac{x}{a}\right) + C
$$

---

### 27. $\int \frac{1}{x^2 - a^2} \mathrm{d}x$

可拆分为部分分式：
$$
\frac{1}{x^2 - a^2} = \frac{1}{2a}\left( \frac{1}{x-a} - \frac{1}{x+a} \right)
$$
所以
$$
\int \frac{1}{x^2 - a^2} \mathrm{d}x = \frac{1}{2a} \int \left( \frac{1}{x-a} - \frac{1}{x+a} \right) \mathrm{d}x = \frac{1}{2a} \ln \left| \frac{x-a}{x+a} \right| + C
$$

---

### 28. $\int \frac{1}{|x|} \mathrm{d}x = \operatorname{sgn}(x) \ln|x| + C$

**证明：**

$\frac{1}{|x|} = \frac{1}{x}$ (当$x>0$), $= -\frac{1}{x}$ (当$x<0$)
所以
$$
\int \frac{1}{|x|} \mathrm{d}x = 
\begin{cases} 
\ln x + C, & x>0 \\
-\ln(-x) + C, & x < 0
\end{cases}
$$
合并表示为$\operatorname{sgn}(x)\ln|x| + C$

---

### 29. $\int \arctan x \, \mathrm{d}x = x \arctan x - \frac{1}{2} \ln(1+x^2) + C$

**证明：**
分部积分，$u = \arctan x$, $\mathrm{d}v = \mathrm{d}x$, $\mathrm{d}u = \frac{1}{1+x^2} \mathrm{d}x$, $v = x$
$$
\int \arctan x \mathrm{d}x = x \arctan x - \int \frac{x}{1+x^2} \mathrm{d}x
$$
令$w = 1 + x^2$, $\mathrm{d}w = 2x \mathrm{d}x$
$$
\int \frac{x}{1+x^2} \mathrm{d}x = \frac{1}{2} \int \frac{1}{w} \mathrm{d}w = \frac{1}{2} \ln|w| + C = \frac{1}{2} \ln(1+x^2)
$$
所以
$$
\int \arctan x \mathrm{d}x = x \arctan x - \frac{1}{2} \ln(1+x^2) + C
$$

---

### 30. $\int \arcsin x \, \mathrm{d}x = x \arcsin x + \sqrt{1-x^2} + C$

**证明：**

分部积分，$u = \arcsin x$, $\mathrm{d}v = \mathrm{d}x$, $\mathrm{d}u = \frac{1}{\sqrt{1-x^2}} \mathrm{d}x$, $v = x$
$$
\int \arcsin x \mathrm{d}x = x \arcsin x - \int x \cdot \frac{1}{\sqrt{1-x^2}} \mathrm{d}x
$$
对于$\int x (1-x^2)^{-1/2} \mathrm{d}x$，令$w = 1-x^2$, $\mathrm{d}w = -2x \mathrm{d}x \implies -\frac{1}{2} \mathrm{d}w = x \mathrm{d}x$
$$
\int x (1-x^2)^{-1/2} \mathrm{d}x = -\frac{1}{2} \int w^{-1/2} \mathrm{d}w = -\frac{1}{2} \cdot 2 w^{1/2} = - \sqrt{1-x^2}
$$
所以
$$
\int \arcsin x \mathrm{d}x = x \arcsin x + \sqrt{1-x^2} + C
$$
