---
title: "数据科学与工程优化(Code II)"
published: 2025-07-23
category: ["程设计科", "人工智能"]
tags: ["人工智能"]
alias: "datascienceandengineeringoptimization(code1)"
---

## 一、概述

这个Python程序实现了经典的梯度下降算法和随机梯度下降算法，并在两个不同的优化问题上进行了比较实验：Rosenbrock函数和强凸二次函数。

## 二、功能模块

### 1、测试函数定义

#### Rosenbrock函数
- **函数**: `rosenbrock(w)`
- **描述**: 经典的非凸优化测试函数，也称为"香蕉函数"
- **数学表达式**: f(x,y) = (1-x)² + 100(y-x²)²
- **最优解**: (1, 1)
- **特点**: 具有狭长的弯曲谷地，是测试优化算法性能的经典函数

#### 强凸二次函数
- **函数**: `quadratic(w, a=10)`
- **描述**: 强凸二次函数，具有良好的优化性质
- **数学表达式**: f(x,y) = 0.5(ax² + y²)
- **最优解**: (0, 0)
- **参数**: a > 0，控制x方向的曲率

### 2、梯度计算

- `grad_rosenbrock(w)`: Rosenbrock函数的梯度
- `grad_quadratic(w, a=10)`: 二次函数的梯度

### 3、优化算法

#### 标准梯度下降 (Gradient Descent)
**函数**: `gradient_descent(f, grad_f, w0, max_iter=1000, tol=1e-6, alpha=1e-3, use_line_search=False, **kwargs)`

**参数说明**:
- `f`: 目标函数
- `grad_f`: 梯度函数
- `w0`: 初始点
- `max_iter`: 最大迭代次数
- `tol`: 收敛容差
- `alpha`: 学习率（固定步长）
- `use_line_search`: 是否使用自适应步长

**特点**:
- 确定性算法，每次使用精确梯度
- 支持固定步长和自适应步长两种模式

#### 随机梯度下降 (Stochastic Gradient Descent)
**函数**: `stochastic_gradient_descent(f, grad_f, w0, max_iter=1000, step=1e-3, add_noise=0.0, mult_noise=0.0, a=10)`

**参数说明**:
- `add_noise`: 加性噪声强度
- `mult_noise`: 乘性噪声强度
- 其他参数与梯度下降相同

**噪声模型**:
- 加性噪声: g += add_noise * 𝒩(0,I)
- 乘性噪声: g *= (1 + mult_noise * 𝒩(0,I))

#### 自适应步长搜索
**函数**: `simple_line_search(f, grad_f, w, d, alpha0=1.0, c=1e-4, tau=0.5)`

实现了基于Armijo准则的回溯线搜索：
- `alpha0`: 初始步长
- `c`: Armijo参数
- `tau`: 步长收缩因子

### 4、可视化功能

#### 等高线图与优化路径
**函数**: `plot_level_sets_and_path(f, hist, title, xmin=-2, xmax=2, ymin=-1, ymax=3, levels=30)`

- 绘制函数的等高线图
- 显示优化算法的迭代路径
- 标记起始点和终点

#### 损失曲线对比
**函数**: `plot_loss_curve(f, *paths, labels)`

- 绘制不同算法的收敛曲线
- 使用对数坐标显示损失值变化

## 二、实验设置

### 1、参数配置
```python
w0 = np.array([-1.5, 2.0])    # 初始点
max_iter = 5000               # 最大迭代次数
tol = 1e-8                    # 收敛容差
alpha = 1e-3                  # 固定步长
a_quad = 10                   # 二次函数参数
```

### 2、实验内容

1. **Rosenbrock函数上的梯度下降**
   - 固定步长梯度下降
   - 带线搜索的梯度下降

2. **强凸二次函数上的梯度下降**
   - 固定步长梯度下降

3. **随机梯度下降实验**
   - Rosenbrock函数 + 加性噪声
   - 二次函数 + 加性噪声
   - 二次函数 + 乘性噪声

4. **算法性能对比**
   - 收敛曲线对比
   - 迭代步数统计

## 三、使用方法

1. **直接运行**:
   ```bash
   python SGD.py
   ```

2. **自定义实验**:
   ```python
   # 创建自定义优化实验
   hist = gradient_descent(your_function, your_gradient, initial_point)
   plot_level_sets_and_path(your_function, hist, "Your Experiment")
   ```

## 四、输出结果

程序会生成以下可视化结果：
- Rosenbrock函数上的优化路径图（固定步长 vs 自适应步长）
- 二次函数上的优化路径图
- SGD在不同噪声设置下的优化路径图
- 不同算法的损失收敛曲线对比图

## 五、依赖库

- `numpy`: 数值计算
- `matplotlib`: 绘图可视化

## 六、算法特点分析

### 1、梯度下降 (GD)
- **优点**: 收敛稳定，理论保证强
- **缺点**: 可能陷入局部最优，收敛速度慢

### 2、随机梯度下降 (SGD)
- **优点**: 噪声有助于跳出局部最优，适合大规模问题
- **缺点**: 收敛路径不稳定，可能在最优解附近震荡

### 3、自适应步长
- **优点**: 自动调节步长，避免步长选择问题
- **缺点**: 每次迭代计算开销更大

## 七、注意事项

1. 不同函数需要不同的学习率设置
2. 噪声强度需要根据具体问题调节
3. Rosenbrock函数比二次函数更难优化
4. 实际应用中建议结合多种策略（动量、自适应学习率等）

```python
import numpy as np
import matplotlib.pyplot as plt

# 1. 测试函数和梯度的定义
def rosenbrock(w):
    """ Rosenbrock function """
    x, y = w
    return (1 - x)**2 + 100 * (y - x**2)**2

def grad_rosenbrock(w):
    """ Gradient of Rosenbrock function """
    x, y = w
    dfdx = -2 * (1 - x) - 400 * x * (y - x**2)
    dfdy = 200 * (y - x**2)
    return np.array([dfdx, dfdy])

def quadratic(w, a=10):
    """ Strongly convex quadratic function. Minimum at [0,0]. Parameter a>0. """
    x, y = w
    return 0.5 * (a * x**2 + y**2)

def grad_quadratic(w, a=10):
    x, y = w
    return np.array([a * x, y])

# 2. Adaptive line search (Armijo rule as a simple example)
def simple_line_search(f, grad_f, w, d, alpha0=1.0, c=1e-4, tau=0.5):
    """ Simple backtracking Armijo line search """
    alpha = alpha0
    f0 = f(w)
    grad0 = grad_f(w)
    while f(w + alpha * d) > f0 + c * alpha * np.dot(grad0, d):
        alpha *= tau
        if alpha < 1e-10:
            break
    return alpha

# 3. Gradient Descent (可选自适应步长，step_func为自适应步长搜索)
def gradient_descent(f, grad_f, w0, max_iter=1000, tol=1e-6, alpha=1e-3, use_line_search=False, **kwargs):
    w = np.array(w0, dtype=float)
    hist = [w.copy()]
    for i in range(max_iter):
        g = grad_f(w)
        if np.linalg.norm(g) < tol:
            break
        if use_line_search:
            # Adaptive line search direction is always -gradient
            step = simple_line_search(f, grad_f, w, -g)
        else:
            step = alpha
        w -= step * g
        hist.append(w.copy())
    return np.array(hist)

# 4. Stochastic Gradient Descent
def stochastic_gradient_descent(f, grad_f, w0, max_iter=1000, step=1e-3,
                                add_noise=0.0, mult_noise=0.0, a=10):
    w = np.array(w0, dtype=float)
    hist = [w.copy()]
    for i in range(max_iter):
        g = grad_f(w) if grad_f != grad_quadratic else grad_f(w, a)
        # Add noise to gradient
        g += add_noise * np.random.randn(*g.shape)
        g *= (1.0 + mult_noise * np.random.randn(*g.shape))
        w -= step * g
        hist.append(w.copy())
    return np.array(hist)

# 5. 绘图辅助函数
def plot_level_sets_and_path(f, hist, title, xmin=-2, xmax=2, ymin=-1, ymax=3, levels=30):
    x = np.linspace(xmin, xmax, 400)
    y = np.linspace(ymin, ymax, 400)
    X, Y = np.meshgrid(x, y)
    Z = np.array([[f([i, j]) for i, j in zip(row_x, row_y)]
                  for row_x, row_y in zip(X, Y)])
    plt.figure(figsize=(7, 5))
    plt.contour(X, Y, Z, levels=levels, cmap='viridis')
    plt.plot(hist[:, 0], hist[:, 1], 'r.-', label='Path')
    plt.scatter(hist[0,0], hist[0,1], marker='o', color='blue', label='Start')
    plt.scatter(hist[-1,0], hist[-1,1], marker='x', color='black', label='End')
    plt.title(title)
    plt.xlabel('x')
    plt.ylabel('y')
    plt.legend()
    plt.show()

# ===================== #
# ====== 实验区 ====== #
# ===================== #

if __name__ == '__main__':
    # 参数设置
    w0 = np.array([-1.5, 2.0])    # 初始点
    max_iter = 5000               # 最大迭代
    tol = 1e-8                    # 收敛容忍
    alpha = 1e-3                  # 固定步长
    a_quad = 10                   # 二次函数参数a

    # ---- Rosenbrock: 梯度下降与自适应步长
    hist_gd_rosen = gradient_descent(rosenbrock, grad_rosenbrock, w0, max_iter, tol, alpha, use_line_search=False)
    hist_gd_rosen_ls = gradient_descent(rosenbrock, grad_rosenbrock, w0, max_iter, tol, alpha, use_line_search=True)
    plot_level_sets_and_path(rosenbrock, hist_gd_rosen, 'Gradient Descent on Rosenbrock')
    plot_level_sets_and_path(rosenbrock, hist_gd_rosen_ls, 'Gradient Descent (+Line Search) on Rosenbrock')

    # ---- Convex Quadratic: 梯度下降与自适应步长
    hist_gd_quad = gradient_descent(lambda w: quadratic(w, a=a_quad),
                                    lambda w: grad_quadratic(w, a=a_quad),
                                    w0, max_iter, tol, alpha, use_line_search=False)
    plot_level_sets_and_path(lambda w: quadratic(w, a=a_quad), hist_gd_quad, 'Gradient Descent on Convex Quadratic')

    # ---- SGD: Rosenbrock, 随机扰动
    hist_sgd_rosen = stochastic_gradient_descent(rosenbrock, grad_rosenbrock, w0, max_iter=2000, step=1e-4,
                                                 add_noise=0.1, mult_noise=0.0)
    plot_level_sets_and_path(rosenbrock, hist_sgd_rosen, 'SGD (Additive noise) on Rosenbrock')

    # ---- SGD: Convex Quadratic，加性和乘性噪声实验
    hist_sgd_add = stochastic_gradient_descent(quadratic, grad_quadratic, w0, max_iter=2000, step=5e-3,
                                               add_noise=1.0, mult_noise=0.0, a=a_quad)
    hist_sgd_mult = stochastic_gradient_descent(quadratic, grad_quadratic, w0, max_iter=2000, step=5e-3,
                                                add_noise=0.0, mult_noise=0.5, a=a_quad)
    plot_level_sets_and_path(lambda w: quadratic(w, a=a_quad), hist_sgd_add, 'SGD (Add noise) Quadratic')
    plot_level_sets_and_path(lambda w: quadratic(w, a=a_quad), hist_sgd_mult, 'SGD (Mult noise) Quadratic')

    # 对比不同实验
    # 收敛曲线对比
    def plot_loss_curve(f, *paths, labels):
        plt.figure()
        for path, label in zip(paths, labels):
            loss = [f(w) for w in path]
            plt.plot(loss, label=label)
        plt.yscale('log')
        plt.xlabel('iteration')
        plt.ylabel('f(w)')
        plt.legend()
        plt.title("Loss curve")
        plt.show()

    plot_loss_curve(lambda w: quadratic(w, a=a_quad),
                    hist_gd_quad, hist_sgd_add, hist_sgd_mult,
                    labels=["GD", "SGD (add noise)", "SGD (mult noise)"])

    print("Rosenbrock GD steps:", hist_gd_rosen.shape[0])
    print("Quadratic GD steps:", hist_gd_quad.shape[0])
    print("SGD (add noise) final point:", hist_sgd_add[-1])
```