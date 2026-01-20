---
title: 空间中切线、法平面、切平面、法线的求法
published: 2025-05-19
category: ["数学", "高等数学"]
tags: ["微积分"]
alias: "methodsforfindingthetangentlinenormalplanetangentplaneandnormallineinspace"
---
## 一、空间曲线的切线与法平面

### 1、曲线为参数方程表示

设空间曲线$C$的参数方程为：
$$
\begin{cases}
x = x(t) \\
y = y(t) \\
z = z(t)
\end{cases}
$$
其中$t$为参数。其切向量为：

$$
\vec{r}'(t) = \left( \frac{\mathrm{d}x}{\mathrm{d}t},\ \frac{\mathrm{d}y}{\mathrm{d}t},\ \frac{\mathrm{d}z}{\mathrm{d}t} \right)
$$

曲线在点$P(x_0, y_0, z_0)$处的切线方程若$t_0$对应$P$，则切线的方向向量为$\vec{r}'(t_0)$，其参数方程为：
$$
\begin{cases}
x = x_0 + \frac{\mathrm{d}x}{\mathrm{d}t}\bigg|_{t_0} \cdot s \\
y = y_0 + \frac{\mathrm{d}y}{\mathrm{d}t}\bigg|_{t_0} \cdot s \\
z = z_0 + \frac{\mathrm{d}z}{\mathrm{d}t}\bigg|_{t_0} \cdot s
\end{cases}
$$
或对称式为：
$$
\frac{x - x_0}{\frac{\mathrm{d}x}{\mathrm{d}t}\big|_{t_0}} = \frac{y - y_0}{\frac{\mathrm{d}y}{\mathrm{d}t}\big|_{t_0}} = \frac{z - z_0}{\frac{\mathrm{d}z}{\mathrm{d}t}\big|_{t_0}}
$$

曲线的法平面指过曲线某点且垂直于切线的平面，若切线方向向量为$\vec{v} = (a, b, c)$，则法平面的法向量也是$\vec{v}$，法平面方程为：
$$
a(x - x_0) + b(y - y_0) + c(z - z_0) = 0
$$
其中$(x_0, y_0, z_0)$是曲线上的点。

### 2、曲线为一般方程表示

设空间曲线$C$由
$$
\begin{cases}
F(x, y, z) = 0 \\
G(x, y, z) = 0
\end{cases}
$$
确定。

曲线上的切向量可以由梯度$\nabla F$和$\nabla G$的叉积给出：
$$
\vec{v} = \nabla F \times \nabla G = 
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial F}{\partial x} & \frac{\partial F}{\partial y} & \frac{\partial F}{\partial z} \\
\frac{\partial G}{\partial x} & \frac{\partial G}{\partial y} & \frac{\partial G}{\partial z}
\end{vmatrix}
$$
或者使用雅可比行列式：
$$
\vec{v}=\left(\frac{\partial(F,G)}{\partial(y,z)},\frac{\partial(F,G)}{\partial(z,x)},\frac{\partial(F,G)}{\partial(x,y)}\right)
$$


若$P(x_0, y_0, z_0)$为曲线上的点，则切线参数方程为：
$$
\begin{cases}
x = x_0 + v_1 t \\
y = y_0 + v_2 t \\
z = z_0 + v_3 t
\end{cases}
$$
其中$\vec{v} = (v_1, v_2, v_3)$为上述的切向量。

法平面是同时过$P(x_0, y_0, z_0)$且分别以$\nabla F$和$\nabla G$为法向量的两个平面的交集。即：
$$
\begin{cases}
F_x(x_0, y_0, z_0)(x - x_0) + F_y(x_0, y_0, z_0)(y - y_0) + F_z(x_0, y_0, z_0)(z - z_0) = 0 \\
G_x(x_0, y_0, z_0)(x - x_0) + G_y(x_0, y_0, z_0)(y - y_0) + G_z(x_0, y_0, z_0)(z - z_0) = 0
\end{cases}
$$
或理解为过点$P$，且其法向量垂直于切向量$\vec{v}$的所有平面。

## 二、空间曲面的切平面与法线

### 1、曲面为一般方程表示

设空间曲面$S$由标量函数$F(x, y, z) = 0$给出。

曲面上某点的法向量为梯度向量：
$$
\vec{n} = \left( \frac{\partial F}{\partial x},\ \frac{\partial F}{\partial y},\ \frac{\partial F}{\partial z} \right)
$$

曲面在点$P(x_0, y_0, z_0)$处的切平面的法向量为$\vec{n}_0 = \left( F_x, F_y, F_z \right)|_{P}$，其方程为：
$$
F_x(x_0, y_0, z_0)(x - x_0) + F_y(x_0, y_0, z_0)(y - y_0) + F_z(x_0, y_0, z_0)(z - z_0) = 0
$$

法线为通过$P(x_0, y_0, z_0)$且方向为$\vec{n}_0$的直线，其参数方程为：
$$
\begin{cases}
x = x_0 + F_x(x_0, y_0, z_0)\, t \\
y = y_0 + F_y(x_0, y_0, z_0)\, t \\
z = z_0 + F_z(x_0, y_0, z_0)\, t
\end{cases}
$$

### 2、曲面为参数方程表示
设空间曲面$S$由参数方程
$$
\begin{cases}
x = x(u, v) \\
y = y(u, v) \\
z = z(u, v)
\end{cases}
$$
给出。

在参数点$(u_0, v_0)$处，分别计算：
$$
\vec{r}_u = \left( \frac{\partial x}{\partial u},\ \frac{\partial y}{\partial u},\ \frac{\partial z}{\partial u} \right)
$$
$$
\vec{r}_v = \left( \frac{\partial x}{\partial v},\ \frac{\partial y}{\partial v},\ \frac{\partial z}{\partial v} \right)
$$
则法向量为
$$
\vec{n} = \vec{r}_u \times \vec{r}_v
$$
其行列式形式为：

$$
\vec{n} = \begin{vmatrix}\mathbf{i} & \mathbf{j} & \mathbf{k} \\\frac{\partial x}{\partial u} & \frac{\partial y}{\partial u} & \frac{\partial z}{\partial u} \\\frac{\partial x}{\partial v} & \frac{\partial y}{\partial v} & \frac{\partial z}{\partial v}\end{vmatrix}
$$

若$P(x_0, y_0, z_0)$为对应$(u_0, v_0)$的点，则切平面方程为
$$
n_1(x - x_0) + n_2(y - y_0) + n_3(z - z_0) = 0
$$
其中$\vec{n} = (n_1, n_2, n_3)$。

法线过点$P(x_0, y_0, z_0)$，方向为$\vec{n}$，其参数方程为
$$
\begin{cases}
x = x_0 + n_1 t \\
y = y_0 + n_2 t \\
z = z_0 + n_3 t
\end{cases}
$$