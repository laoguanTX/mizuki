---
title: "数据科学与工程优化(Code I)"
published: 2025-07-23
category: ["程设计科", "人工智能"]
tags: ["人工智能"]
alias: "datascienceandengineeringoptimization(code2)"
---

本项目包含三个 MATLAB 脚本/函数文件，主要用于演示和实现最速下降法（Steepest Descent Method）在不同目标函数上的优化过程。适合用于数值优化、无约束优化方法的学习与实验。

## 文件列表

1. **Steepest_descent_method.m**
2. **Rosenbrock_function.m**
3. **Scaled_quadratic_function.m**

---

## 一、Steepest_descent_method.m

**功能简介：**  
该脚本实现了最速下降法（带 Armijo 回溯线搜索），用于求解无约束优化问题。可选择优化 Rosenbrock 函数或缩放二次函数，并可视化优化过程。

**主要内容：**

- 支持两种目标函数（Rosenbrock 和缩放二次函数），可通过修改 `if 0` 语句块切换。
- 采用 Armijo 条件的回溯线搜索自动调整步长。
- 记录并输出每次迭代的函数值、梯度范数、到最优点的距离等信息。
- 迭代结束后，绘制优化轨迹、目标函数收敛曲线、梯度范数收敛曲线和到最优点距离的收敛曲线。
- 可用于分析最速下降法的收敛速度和理论收敛率。

**主要变量说明：**

- `x`：当前迭代点
- `objfun`：目标函数句柄
- `xs`、`fs`、`norm_gs`：分别记录每次迭代的点、函数值和梯度范数
- `alpha0`、`tau`、`beta`：线搜索相关参数
- `kappa`：Hessian 条件数，用于理论收敛率分析

```matlab
% Run steepest descent (% Solver settings  % 求解器设置
max_iterations = 800; % 设置最大迭代次数为800
tol_g = 1e-5; % termination condition ||gradient|| <= tol  % 终止条件：梯度范数小于等于容差
alpha0 = 1; % initial step length  % 初始步长为1
tau = 0.5; % backtracking parameter  % 回溯参数为0.5
beta = 0.001; % for Armijo condition  % Armijo条件参数为0.001

% Useful data to see progress of solver  % 用于观察求解器进展的有用数据
n = numel(x); % 获取变量向量x的元素个数
xs = zeros(max_iterations+1, n); % iterate  % 初始化存储所有迭代点的矩阵
fs = zeros(max_iterations+1,1); % objective value at each iteration  % 初始化存储每次迭代函数值的向量
norm_gs = zeros(max_iterations+1,1); % ||gradient|| at each iteration  % 初始化存储每次迭代梯度范数的向量

% Set initial data  % 设置初始数据
xs(1,:) = x; % 将初始点存储到迭代点矩阵的第一行
[f, g] = objfun(x); % 计算初始点的函数值和梯度
fs(1,:) = f; % 将初始函数值存储到函数值向量的第一个元素
norm_gs(1,:) = norm(g); % 将初始梯度范数存储到梯度范数向量的第一个元素% 运行最速下降法（带线搜索）
% Lindon Roberts, 2019  % 作者：Lindon Roberts，2019年

clear, close all % 清除工作空间变量，关闭所有图形窗口

% Problem and x0  % 问题设置和初始点x0
if 0 % 如果条件为0（即false，不执行此分支）
    a = 10; % 设置参数a为10
    objfun = @(x)Scaled_quadratic_function(x,a); % 创建缩放二次函数句柄
    x = [1; a]; % 设置初始点为[1; a]
    xmin = [0;0]; % true minimiser  % 设置真实最小值点为[0;0]
else % 否则执行此分支
    objfun = @(x)Rosenbrock_function(x); % 创建Rosenbrock函数句柄
    x = [1.5; 1.5]; % 设置初始点为[1.5; 1.5]
    %x = [-1.2; 1]; % 另一个可选初始点[-1.2; 1]
    %x = [0.4; 0.2]; % start close to the solution  % 接近解的起始点[0.4; 0.2]
    xmin = [1;1]; % true minimiser  % 设置真实最小值点为[1;1]
end
nhistory = 10; % use last N iterates to check asymptotic rate  % 使用最后N次迭代来检查渐近收敛率

% True info  % 真实信息
[fmin, gmin, Hmin] = objfun(xmin); % true minimum  % 计算真实最小值点处的函数值、梯度和Hessian矩阵
kappa = cond(Hmin); % 计算Hessian矩阵的条件数

% Solver settings  % 求解器设置
max_iterations = 800;
tol_g = 1e-5; % termination condition ||gradient|| <= tol
alpha0 = 1; % initial step length
tau = 0.5; % backtracking parameter
beta = 0.001; % for Armijo condition

% Useful data to see progress of solver
n = numel(x);
xs = zeros(max_iterations+1, n); % iterate
fs = zeros(max_iterations+1,1); % objective value at each iteration
norm_gs = zeros(max_iterations+1,1); % ||gradient|| at each iteration

% Set initial data
xs(1,:) = x;
[f, g] = objfun(x);
fs(1,:) = f;
norm_gs(1,:) = norm(g);

k = 1; % 初始化迭代计数器为1
fprintf('  k  |  f(xk)       |  ||grad|| \n'); % 打印表头：迭代次数、函数值、梯度范数
fprintf('--------------------------------\n'); % 打印分隔线
fprintf('  %i  |  %.4e  |  %.4e  \n', k-1, f, norm(g)); % 打印初始状态信息
while k <= max_iterations && norm(g) >= tol_g % 当迭代次数未超过最大值且梯度范数大于容差时继续迭代
    s = -g; % steepest descent direction  % 设置最速下降方向为负梯度方向
    % Backtracking Armijo linesearch  % 回溯Armijo线搜索
    alpha = alpha0; % 设置初始步长
    xtest = x + alpha*s; % 计算测试点
    while objfun(xtest) > f + beta*alpha*(g'*s) % 当不满足Armijo条件时
        alpha = tau*alpha; % 缩小步长
        xtest = x + alpha*s; % 重新计算测试点
    end
    x = xtest; % 更新当前点为测试点
    [f, g] = objfun(x); % 计算新点的函数值和梯度
    if mod(k, 10) == 0 % 如果迭代次数是10的倍数
        fprintf('  %i  |  %.4e  |  %.4e  \n', k, f, norm(g)); % 打印当前状态信息
    end
    % Save info  % 保存信息
    xs(k+1,:) = x; % 将当前点存储到迭代点矩阵
    fs(k+1,:) = f; % 将当前函数值存储到函数值向量
    norm_gs(k+1,:) = norm(g); % 将当前梯度范数存储到梯度范数向量
    k = k + 1; % 迭代计数器加1
end
fprintf('  %i  |  %.4e  |  %.4e   <- finished\n', k-1, f, norm(g)); % 打印最终状态信息并标记结束
fprintf('Finished after %g iterations\n', k-1) % 打印总迭代次数
xs = xs(1:k, :); % 截取实际使用的迭代点数据
fs = fs(1:k, :); % 截取实际使用的函数值数据
norm_gs = norm_gs(1:k, :); % 截取实际使用的梯度范数数据
xdists = zeros(k,1); % 初始化存储到最优点距离的向量
for i=1:k % 对每个迭代点
    xdists(i) = norm(xs(i,:) - xmin); % 计算当前点到最优点的距离
end

% Check asymptotic order of convergence  % 检查渐近收敛阶
if numel(fs) < nhistory % 如果函数值个数少于历史记录数
    asym_fs = fs; % 使用所有函数值
else % 否则
    asym_fs = fs(end-nhistory:end); % 使用最后nhistory个函数值
end
fit_fs = polyfit(log(asym_fs(1:end-1)), log(asym_fs(2:end)), 1); % 对对数函数值进行一次多项式拟合
fprintf('Objective values converge with order %1.2f\n', fit_fs(1)); % 打印目标函数值的收敛阶

%=====================================================
% Plot iterates, objective decrease, gradient decrease  % 绘制迭代点、目标函数下降、梯度下降
%=====================================================

subplot(2,2,1); % 创建2×2子图的第1个子图
npts = 30; % 设置网格点数为30
xplt = linspace(min(min(xs)), max(max(xs)), npts); % 在迭代点范围内创建x轴网格
yplt = xplt; % y轴网格与x轴相同
[X,Y] = meshgrid(xplt,yplt); % 创建二维网格
Z = zeros(npts,npts); % 初始化函数值网格
for i=1:npts % 对每个网格点i
    for j=1:npts % 对每个网格点j
        Z(i,j) = log(objfun([X(i,j); Y(i,j)])); % 计算网格点处的对数函数值
    end
end
contour(X,Y,Z,20) % 绘制20条等高线
hold on % 保持当前图形
axis equal % 设置坐标轴等比例
plot(xs(:,1), xs(:,2), 'r.-', 'MarkerSize', 15); % 绘制迭代轨迹，红色点线，标记大小15
xlabel('x1'); % 设置x轴标签
ylabel('x2'); % 设置y轴标签
hold off % 释放图形保持

subplot(2,2,2); % 创建2×2子图的第2个子图
semilogy(fs-fmin, 'b-', 'Linewidth', 2); % 绘制目标函数值与最小值差的半对数图，蓝色实线，线宽2
hold on % 保持当前图形
xlabel('Iteration'); % 设置x轴标签为"迭代次数"
ylabel('Objective value - fmin'); % 设置y轴标签为"目标函数值 - 最小值"
rho = ((kappa-1)/(kappa+1))^2; % 计算最速下降法的理论收敛率
fprintf('rho_{SD} convergence rate <= %g (from kappa = %g)\n', rho, kappa); % 打印理论收敛率和条件数
semilogy(1:numel(fs), (fs(1)-fmin) * rho.^(0:1:numel(fs)-1), 'r--', 'Linewidth', 2); % 绘制理论收敛曲线，红色虚线，线宽2
grid on % 显示网格
hold off % 释放图形保持

subplot(2,2,3); % 创建2×2子图的第3个子图
semilogy(norm_gs, 'b-', 'Linewidth', 2); % 绘制梯度范数的半对数图，蓝色实线，线宽2
xlabel('Iteration'); % 设置x轴标签为"迭代次数"
ylabel('Norm of gradient'); % 设置y轴标签为"梯度范数"
grid on % 显示网格

subplot(2,2,4); % 创建2×2子图的第4个子图
semilogy(xdists, 'b-', 'Linewidth', 2); % 绘制到最优点距离的半对数图，蓝色实线，线宽2
hold on % 保持当前图形
xlabel('Iteration'); % 设置x轴标签为"迭代次数"
ylabel('||x-x*||'); % 设置y轴标签为"到最优点的距离"
if exist('a') % 如果变量a存在
    xs_rate = zeros(numel(xdists),1); % 初始化理论距离收敛率向量
    xs_rate(1) = xdists(1); % 设置初始距离
    for i=2:numel(fs) % 对每个后续迭代
        xs_rate(i) = (a-1)/(a+1) * xs_rate(i-1); % 计算理论距离收敛率
    end
    semilogy(xs_rate, 'r--', 'Linewidth', 2); % 绘制理论距离收敛曲线，红色虚线，线宽2
end
grid on % 显示网格
hold off % 释放图形保持

```

## 二、Rosenbrock_function.m

**功能简介：**  
实现了著名的 Rosenbrock 函数及其梯度和 Hessian 的计算。Rosenbrock 函数常用于测试优化算法的性能。

**函数接口：**

```matlab
[f, g, H] = Rosenbrock_function(x)
```

- `x`：输入变量（二维向量）
- `f`：函数值
- `g`：梯度
- `H`：Hessian 矩阵

**函数形式：**
$$
f(x) = 100(x_2 - x_1^2)^2 + (1 - x_1)^2
$$

```matlab
function varargout = Rosenbrock_function(x) % 定义Rosenbrock函数，输入x为变量向量，varargout为可变输出参数
    % Rosenbrock test function  % Rosenbrock测试函数
    % An interesting start point is x = [-1; 0.8]  % 一个有趣的起始点是x = [-1; 0.8]
    % Unique local/global minimum is f=0 at [1;1]  % 唯一的局部/全局最小值点是[1;1]处的f=0
    % Lindon Roberts, 2019  % 作者：Lindon Roberts，2019年
    
    % Call test functions as:  % 调用测试函数的方式：
    %   f         = rosenbrock(x);  % function value only  % 仅获取函数值
    %   [f, g]    = rosenbrock(x);  % function value and gradient  % 获取函数值和梯度
    %   [f, g, H] = rosenbrock(x);  % function value, gradient and Hessian  % 获取函数值、梯度和Hessian矩阵
    
    if nargout > 3 % 如果输出参数个数大于3
        error('Invalid number of output arguments'); % 抛出错误：输出参数个数无效
    end
    
    % Function value  % 计算函数值
    a = 10; % 设置参数a为10
    f = a*(x(2)-x(1).^2).^2 + (x(1)-1).^2; % 计算Rosenbrock函数值：a*(x2-x1^2)^2 + (x1-1)^2
    varargout{1} = f; % 将函数值存储为第一个输出参数
    
    if nargout > 1 % 如果需要输出梯度
        % Gradient  % 计算梯度
        g = [2*(x(1)-1)-4*a*x(1).*(x(2)-x(1).^2); 2*a*(-x(1).^2 + x(2))]; % 计算梯度向量，包含对x1和x2的偏导数
        varargout{2} = g; % 将梯度存储为第二个输出参数
    end
    
    if nargout > 2 % 如果需要输出Hessian矩阵
        % Hessian  % 计算Hessian矩阵
        H = [2 + 12*a*x(1).^2 - 4*a*x(2), -4*a*x(1); -4*a*x(1), 2*a]; % 计算2×2的Hessian矩阵（二阶偏导数矩阵）
        varargout{3} = H; % 将Hessian矩阵存储为第三个输出参数
    end
end
```

## 三、Scaled_quadratic_function.m

**功能简介：**  
实现了一个带缩放参数的二次型函数及其梯度和 Hessian 的计算。可用于分析不同条件数下最速下降法的表现。

**函数接口：**

```matlab
[f, g, H] = Scaled_quadratic_function(x, a)
```

- `x`：输入变量（二维向量）
- `a`：缩放参数（决定二次型的条件数）
- `f`：函数值
- `g`：梯度
- `H`：Hessian 矩阵

**函数形式：**
$$
f(x) = \frac{1}{2}(x_1^2 + a x_2^2)
$$

```matlab
function varargout = Scaled_quadratic_function(x,a) % 定义缩放二次函数，输入x为变量向量，a为缩放参数
    % Scaled quadratic, parametrised by a > 0  % 缩放二次函数，由参数a > 0控制
    % Large a -> poorly scaled  % 较大的a值会导致函数缩放不良
    % An interesting start point is x = [1; a]  % 一个有趣的起始点是x = [1; a]
    % Unique local/global minimum is f=0 at [0;0]  % 唯一的局部/全局最小值点是[0;0]处的f=0
    % Lindon Roberts, 2019  % 作者：Lindon Roberts，2019年
    
    % Call test functions as:  % 调用测试函数的方式：
    %   a = 10;  % 设置参数a为10
    %   objective = @(x)scaled_quadratic(x,a);  % 创建目标函数句柄
    %   f         = objective(x);  % function value only  % 仅获取函数值
    %   [f, g]    = objective(x);  % function value and gradient  % 获取函数值和梯度
    %   [f, g, H] = objective(x);  % function value, gradient and Hessian  % 获取函数值、梯度和Hessian矩阵
    
    if a <= 0 % 如果参数a小于等于0
        error('Parameter a must be strictly positive'); % 抛出错误：参数a必须严格为正数
    end
    
    if nargout > 3 % 如果输出参数个数大于3
        error('Invalid number of output arguments'); % 抛出错误：输出参数个数无效
    end
    
    % Function value  % 计算函数值
    f = (a*x(1).^2 + x(2).^2) / 2; % 计算缩放二次函数值：(a*x1^2 + x2^2) / 2
    varargout{1} = f; % 将函数值存储为第一个输出参数
    
    if nargout > 1 % 如果需要输出梯度
        % Gradient  % 计算梯度
        g = [a*x(1); x(2)]; % 计算梯度向量：[a*x1; x2]
        varargout{2} = g; % 将梯度存储为第二个输出参数
    end
    
    if nargout > 2 % 如果需要输出Hessian矩阵
        % Hessian  % 计算Hessian矩阵
        H = [a, 0; 0, 1]; % 计算2×2的Hessian矩阵：对角矩阵[a, 0; 0, 1]
        varargout{3} = H; % 将Hessian矩阵存储为第三个输出参数
    end
end
```

