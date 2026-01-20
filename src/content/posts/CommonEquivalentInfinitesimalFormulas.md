---
title: 常见等价无穷小量公式
published: 2025-01-03
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "commonequivalentinfinitesimalformulas"
---
## 一、基本等价无穷小

1. $\sin x \sim x$
2. $\tan x \sim x$
3. $\arcsin x \sim x$
4. $\arctan x \sim x$
5. $e^x - 1 \sim x$
6. $\ln(1 + x) \sim x$
7. $1 - \cos x \sim \frac{1}{2}x^2$
8. $(1 + x)^a - 1 \sim a x$ （$a$ 为常数）
9. $a^x - 1 \sim x \ln a$ （$a > 0$ 且 $a \neq 1$）

## 二、高阶等价无穷小

1. $\sin x - x \sim -\frac{1}{6}x^3$
2. $\tan x - x \sim \frac{1}{3}x^3$
3. $\arcsin x - x \sim \frac{1}{6}x^3$
4. $\arctan x - x \sim -\frac{1}{3}x^3$
5. $e^x - 1 - x \sim \frac{1}{2}x^2$
6. $\ln(1 + x) - x \sim -\frac{1}{2}x^2$
7. $\cos x - 1 + \frac{1}{2}x^2 \sim \frac{1}{24}x^4$

## 三、组合等价无穷小

1. $\sin x \sim \tan x \sim \arcsin x \sim \arctan x \sim x$
2. $\sin x \sim x - \frac{1}{6}x^3 + o(x^3)$
3. $\tan x \sim x + \frac{1}{3}x^3 + o(x^3)$
4. $\ln(1 + x) \sim x - \frac{1}{2}x^2 + \frac{1}{3}x^3 + o(x^3)$
5. $e^x \sim 1 + x + \frac{1}{2}x^2 + \frac{1}{6}x^3 + o(x^3)$

## 四、其他等价无穷小

1. $\sqrt{1 + x} - 1 \sim \frac{1}{2}x$
2. $\sqrt[3]{1 + x} - 1 \sim \frac{1}{3}x$
3. $\sinh x \sim x$ （双曲正弦）
4. $\tanh x \sim x$ （双曲正切）
5. $\log_a(1 + x) \sim \frac{x}{\ln a}$ （$a > 0$ 且 $a \neq 1$）

## 五、一般形式的等价无穷小

对于函数 $f(x)$ 和 $g(x)$，当 $x \to 0$ 时，如果满足：
$$
\lim_{x \to 0} \frac{f(x)}{g(x)} = 1,
$$
则称 $f(x) \sim g(x)$。

## 六、注意事项

1. 等价无穷小公式仅在 $x \to 0$ 时成立。
2. 在极限计算中，等价无穷小可以替换，但需要注意高阶无穷小的精度。
3. 在泰勒展开中，等价无穷小是泰勒公式的低阶近似。