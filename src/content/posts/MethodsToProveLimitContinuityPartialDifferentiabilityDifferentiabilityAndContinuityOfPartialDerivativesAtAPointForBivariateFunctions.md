---
title: 证明二元函数某点极限存在、连续、可偏导、可微以及偏导数连续的方法
published: 2025-04-11
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "methodstoprovelimitcontinuitypartialdifferentiabilitydifferentiabilityandcontinuityofpartialderivativesatapointforbivariatefunctions"
---
## 一、极限存在

证明 $f(x,y)$ 在 $(a,b)$ 处的极限存在，需要证明存在常数 $L$，满足  
$$
\lim_{(x,y)\to (a,b)} f(x,y) = L,
$$
即利用 $\epsilon$-$\delta$ 定义证明  
$$
\forall \epsilon > 0,\, \exists \delta > 0,\quad \text{使得当 } \sqrt{(x-a)^2+(y-b)^2}<\delta \text{ 时，有 } |f(x,y)-L|<\epsilon.
$$
常用方法包括夹逼定理、改用极坐标或沿各方向验证极限值一致性。

---

## 二、连续性

函数 $f(x,y)$ 在 $(a,b)$ 处连续要求  
$$
\lim_{(x,y)\to (a,b)} f(x,y) = f(a,b).
$$
因此，在证明极限存在且等于 $L$ 后，还需要验证 $f(a,b)=L$，从而保证函数在该点没有“跳跃”。

---

## 三、可偏导性（偏导数存在）

证明偏导数存在时，需要分别讨论关于 $x$ 和 $y$ 的偏导数：
$$
f_x(a,b)=\lim_{h\to0}\frac{f(a+h,b)-f(a,b)}{h},\quad
f_y(a,b)=\lim_{k\to0}\frac{f(a,b+k)-f(a,b)}{k}.
$$
即固定另一变量，考察单变量极限的存在性。如果这两个极限存在，则称 $f(x,y)$ 在 $(a,b)$ 处**可偏导**。

---

## 四、可微性

证明 $f(x,y)$ 在 $(a,b)$ 可微，即在该点存在良好的线性近似。具体来说，存在一个线性函数（通常由偏导数组成）满足
$$
f(a+h,b+k)-f(a,b)=f_x(a,b)h+f_y(a,b)k+o\bigl(\sqrt{h^2+k^2}\,\bigr).
$$
这可以归纳为证明：
$$
\lim_{(h,k)\to (0,0)}\frac{f(a+h,b+k)-f(a,b)-f_x(a,b)h-f_y(a,b)k}{\sqrt{h^2+k^2}}=0.
$$
若满足该条件，则 $f(x,y)$ 在 $(a,b)$ 可微，并隐含存在连续的线性近似。

---

## 五、偏导数连续

证明偏导数连续，则需检验在点 $(a,b)$ 附近有
$$
\lim_{(x,y)\to (a,b)} f_x(x,y)=f_x(a,b) \quad \text{及} \quad \lim_{(x,y)\to (a,b)} f_y(x,y)=f_y(a,b).
$$
这通常要求先求出 $f_x(x,y)$ 与 $f_y(x,y)$ 的解析表达式，然后验证其在 $(a,b)$ 处连续，通常利用已知函数的连续性和复合函数的连续性定理。

---

## 六、五者之间的互推关系

1. **可微性 $\Longrightarrow$ 连续性**  
   - 如果 $f(x,y)$ 在 $(a,b)$ 可微，则必有良好的线性近似，因而必定在 $(a,b)$ 连续。

2. **偏导数连续 $\Longrightarrow$ 可微性**  
   - 在一个区域内，若 $f$ 的偏导数 $f_x(x,y)$ 与 $f_y(x,y)$ 连续，根据微分学中的定理（例如全微分存在的充分条件），可推出 $f(x,y)$ 在该区域内可微，因而在 $(a,b)$ 也是可微的。

3. **连续性与极限存在**  
   - **极限存在** 是讨论函数局部行为的一个前提，但只有当这个极限值与 $f(a,b)$ 相等时，才能论证连续性。  
   - 因此，连续性要求极限存在且满足 $\lim_{(x,y)\to(a,b)}f(x,y)=f(a,b)$，但仅有极限存在并不一定意味着连续（例如，若函数在该点定义与极限值不符）。

4. **可偏导性 $\not\Longrightarrow$ 可微性**  
   - 一个函数在 $(a,b)$ 可偏导（即存在 $f_x(a,b)$ 与 $f_y(a,b)$）并不足以推出其可微性，因为残差项可能不满足 $o\bigl(\sqrt{h^2+k^2}\,\bigr)$ 的条件。  
   - 存在经典反例（如 $f(x,y)=|xy|$ 在原点），其偏导数存在但函数并非可微。

5. **连续性 $\not\Longrightarrow$ 可偏导性**  
   - 函数在 $(a,b)$ 连续并不必然保证偏导数存在。  
   - 存在某些连续函数在某点偏导数不存在或者不连续的例子，这体现了连续性和可偏导性之间的独立性。