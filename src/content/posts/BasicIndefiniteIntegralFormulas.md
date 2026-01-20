---
title: 基本不定积分公式
published: 2025-01-03
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "basicindefiniteintegralformulas"
---


## 一、不定积分的基本性质

1. $$\int kf(x)dx = k \int f(x)dx$$

2. $$\int [f(x) \pm g(x)]dx = \int f(x)dx \pm \int g(x)dx$$

## 二、基本积分公式

### 1) 常数类

1. $$\int 1dx = x + C \quad (\text{或} \quad \int dx = x + C)$$

2. $$\int kdx = kx + C$$

### 2) 幂函数类

1. $$\int x^{\mu}dx = \frac{x^{\mu+1}}{\mu+1} + C \quad (\mu \neq -1)$$

2. $$\int \frac{1}{x}dx = \ln|x| + C$$

### 3) 指数函数类

1. $$\int e^xdx = e^x + C$$

2. $$\int a^xdx = \frac{a^x}{\ln a} + C$$

### 4) 三角函数类

1. $$\int \cos xdx = \sin x + C$$

2. $$\int \sin xdx = -\cos x + C$$

3. $$\int \tan xdx = -\ln|\cos x| + C$$

4. $$\int \cot xdx = \ln|\sin x| + C$$

5. $$\int \sec xdx = \int \frac{1}{\cos x}dx = \ln|\sec x + \tan x| + C = \ln\left(\left|\tan\left(\frac{x}{2}+\frac{\pi}{4}\right)\right|\right)+C$$

6. $$\int \csc xdx = \int \frac{1}{\sin x}dx = \ln|\csc x - \cot x| + C=\ln\left(\left|\tan\left(\frac{x}{2}\right)\right|\right)+C$$

7. $$\int \sec^2 xdx = \int \frac{1}{\cos^2 x}dx = \tan x + C$$

8. $$\int \csc^2 xdx = \int \frac{1}{\sin^2 x}dx = -\cot x + C$$

9. $$\int \sec x\tan xdx = \sec x + C$$

10. $$\int \csc x\cot xdx = -\csc x + C$$

### 5) “x^{2}”类

1. $$\int \frac{1}{\sqrt{1-x^2}}dx = \arcsin x + C$$

2. $$\int \frac{1}{1+x^2}dx = \arctan x + C$$

3. $$\int \frac{1}{\sqrt{a^2-x^2}}dx = \arcsin \frac{x}{a} + C \quad (a>0)$$

4. $$\int \frac{1}{a^2+x^2}dx = \frac{1}{a}\arctan \frac{x}{a} + C$$

5. $$\int \frac{1}{\sqrt{x^2-a^2}}dx = \ln |x+\sqrt{x^2-a^2}| + C$$

6. $$\int \frac{1}{\sqrt{x^2+a^2}}dx = \ln |x+\sqrt{x^2+a^2}| + C$$

7. $$\int \frac{1}{x^2-a^2}dx = \frac{1}{2a}\ln \left| \frac{x-a}{x+a} \right| + C = \frac{1}{2a}(\ln |x-a| - \ln |x+a|) + C$$

8. $$\int \sqrt{a^2-x^2}dx = \frac{a^2}{2}\arcsin \frac{x}{a} + \frac{x}{2}\sqrt{a^2-x^2} + C$$