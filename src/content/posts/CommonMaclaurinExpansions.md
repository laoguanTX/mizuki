---
title: 常见麦克劳林展开
published: 2025-01-03
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "commonmaclaurinexpansions"
---
1. **指数函数**  
   $$ e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots $$

2. **正弦函数**  
   $$ \sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots $$

3. **余弦函数**  
   $$ \cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots $$

4. **正切函数**  
   $$ \tan x = \sum_{n=1}^{\infty} \frac{B_{2n} (-4)^n (1-4^n)}{(2n)!} x^{2n-1} = x + \frac{x^3}{3} + \frac{2x^5}{15} + \frac{17x^7}{315} + \cdots \quad (|x| < \frac{\pi}{2}) $$  
   其中 $B_{2n}$ 是伯努利数。

5. **自然对数函数**  
   $$ \ln(1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad (|x| < 1) $$

6. **几何级数**  
   $$ \frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \cdots \quad (|x| < 1) $$

7. **分数函数 $ \frac{1}{1+x} $**  
   $$ \frac{1}{1+x} = \sum_{n=0}^{\infty} (-1)^n x^n = 1 - x + x^2 - x^3 + \cdots \quad (|x| < 1) $$

8. **二项式展开**  
   $$ (1+x)^k = \sum_{n=0}^{\infty} \binom{k}{n} x^n = 1 + kx + \frac{k(k-1)}{2!}x^2 + \cdots \quad (|x| < 1) $$

9. **反正切函数**  
   $$ \arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots \quad (|x| \leq 1) $$

10. **双曲正弦函数**  
   $$ \sinh x = \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!} = x + \frac{x^3}{3!} + \frac{x^5}{5!} + \cdots $$

11. **双曲余弦函数**  
    $$ \cosh x = \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!} = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \cdots $$