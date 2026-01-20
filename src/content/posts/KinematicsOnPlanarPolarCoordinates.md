---
title: 平面极坐标系上的运动学
published: 2025-02-20
category: ["物理", "普通物理学"]
tags: ["运动学"]
alias: "kinematicsonplanarpolarcoordinates"
---
在平面极坐标系中，质点的位置由径向坐标 $r$ 和角坐标 $θ$ 描述。

---

## 一、位置矢量

位置矢量 $\mathbf{r}$ 在极坐标系中表示为：
$$
\mathbf{r} = r \hat{r}
$$
其中，$\hat{r}$ 是径向单位矢量。

---

## 二、速度矢量
速度 $\mathbf{v}$ 是位置矢量的时间导数：
$$
\mathbf{v} = \frac{\mathrm{d}\mathbf{r}}{\mathrm{d}t} = \frac{\mathrm{d}}{\mathrm{d}t}(r \hat{r}) = \frac{\mathrm{d}r}{\mathrm{d}t} \hat{r} + r \frac{\mathrm{d}\hat{r}}{\mathrm{d}t}
$$
由于 $\hat{r}$ 随 $\theta$ 变化，其导数为：（推导过程见“五”）
$$
\frac{\mathrm{d}\hat{r}}{\mathrm{d}t} = \frac{\mathrm{d}\theta}{\mathrm{d}t} \hat{\theta} = \dot{\theta} \hat{\theta}
$$
其中，$\hat{\theta}$ 是横向单位矢量。因此，速度矢量为：
$$
\mathbf{v} = \dot{r} \hat{r} + r \dot{\theta} \hat{\theta}
$$
其中，$\dot{r} = \dfrac{\mathrm{d}r}{\mathrm{d}t}$ 是径向速度，$r \dot{\theta} = r \dfrac{\mathrm{d}\theta}{\mathrm{d}t}$ 是横向速度。

---

## 三、加速度矢量
加速度 $\mathbf{a}$ 是速度矢量的时间导数：
$$
\mathbf{a} = \frac{\mathrm{d}\mathbf{v}}{\mathrm{d}t} = \frac{\mathrm{d}}{\mathrm{d}t}(\dot{r} \hat{r} + r \dot{\theta} \hat{\theta})
$$
展开后得到：
$$
\mathbf{a} = \ddot{r} \hat{r} + \dot{r} \frac{\mathrm{d}\hat{r}}{\mathrm{d}t} + \dot{r} \dot{\theta} \hat{\theta} + r \ddot{\theta} \hat{\theta} + r \dot{\theta} \frac{\mathrm{d}\hat{\theta}}{\mathrm{d}t}
$$
单位矢量 $\hat{\theta}$ 的导数为：（推导过程见“五”）
$$
\frac{\mathrm{d}\hat{\theta}}{\mathrm{d}t} = -\dot{\theta} \hat{r}
$$
代入后，加速度矢量为：
$$
\mathbf{a} = \ddot{r} \hat{r} + \dot{r} \dot{\theta} \hat{\theta} + \dot{r} \dot{\theta} \hat{\theta} + r \ddot{\theta} \hat{\theta} - r \dot{\theta}^2 \hat{r}
$$
整理后得到：
$$
\mathbf{a} = (\ddot{r} - r \dot{\theta}^2) \hat{r} + (r \ddot{\theta} + 2 \dot{r} \dot{\theta}) \hat{\theta}
$$
其中：
- 径向加速度为 $\ddot{r} - r \dot{\theta}^2$，
- 横向加速度为 $r \ddot{\theta} + 2 \dot{r} \dot{\theta}$。

---

## 四、总结
- **速度**：
  $$
  \mathbf{v} = \dot{r} \hat{r} + r \dot{\theta} \hat{\theta}
  $$
- **加速度**：
  $$
  \mathbf{a} = (\ddot{r} - r \dot{\theta}^2) \hat{r} + (r \ddot{\theta} + 2 \dot{r} \dot{\theta}) \hat{\theta}
  $$

​	特别地，当径向速度为0时，横向加速度为0时（即做匀速圆周运动），可以得到：
$$
\mathbf{a}=r\dot\theta^2=\dfrac{\mathbf{v}^2}{r}
$$

---

## 五、补充证明

在直角坐标系中，极坐标的单位矢量 $\hat{r}$ 和 $\hat{\theta}$ 可以表示为：
$$
\hat{r} = \cos\theta \, \hat{i} + \sin\theta \, \hat{j}
$$
$$
\hat{\theta} = -\sin\theta \, \hat{i} + \cos\theta \, \hat{j}
$$
其中，$\hat{i}$ 和 $\hat{j}$ 是直角坐标系的单位矢量。

**1. 对 $\hat{r}$ 求导数**

对 $\hat{r}$ 关于时间 $t$ 求导：
$$
\frac{\mathrm{d}\hat{r}}{\mathrm{d}t} = \frac{\mathrm{d}}{\mathrm{d}t} (\cos\theta \, \hat{i} + \sin\theta \, \hat{j})
$$
利用链式法则，得到：
$$
\frac{\mathrm{d}\hat{r}}{\mathrm{d}t} = -\sin\theta \cdot \frac{\mathrm{d}\theta}{\mathrm{d}t} \, \hat{i} + \cos\theta \cdot \frac{\mathrm{d}\theta}{\mathrm{d}t} \, \hat{j}
$$
将 $\dfrac{\mathrm{d}\theta}{\mathrm{d}t} = \dot{\theta}$ 代入，得到：
$$
\frac{\mathrm{d}\hat{r}}{\mathrm{d}t} = \dot{\theta} (-\sin\theta \, \hat{i} + \cos\theta \, \hat{j})
$$
注意到 $-\sin\theta \, \hat{i} + \cos\theta \, \hat{j} = \hat{\theta}$，因此：
$$
\frac{\mathrm{d}\hat{r}}{\mathrm{d}t} = \dot{\theta} \hat{\theta}
$$

**2. 对 $\hat{\theta}$ 求导数**

对 $\hat{\theta}$ 关于时间 $t$ 求导：
$$
\frac{\mathrm{d}\hat{\theta}}{\mathrm{d}t} = \frac{\mathrm{d}}{\mathrm{d}t} (-\sin\theta \, \hat{i} + \cos\theta \, \hat{j})
$$
利用链式法则，得到：
$$
\frac{\mathrm{d}\hat{\theta}}{\mathrm{d}t} = -\cos\theta \cdot \frac{\mathrm{d}\theta}{\mathrm{d}t} \, \hat{i} - \sin\theta \cdot \frac{\mathrm{d}\theta}{\mathrm{d}t} \, \hat{j}
$$
将 $\dfrac{\mathrm{d}\theta}{\mathrm{d}t} = \dot{\theta}$ 代入，得到：
$$
\frac{\mathrm{d}\hat{\theta}}{\mathrm{d}t} = \dot{\theta} (-\cos\theta \, \hat{i} - \sin\theta \, \hat{j})
$$
注意到 $-\cos\theta \, \hat{i} - \sin\theta \, \hat{j} = -\hat{r}$，因此：
$$
\frac{\mathrm{d}\hat{\theta}}{\mathrm{d}t} = -\dot{\theta} \hat{r}
$$

综上，通过直角坐标系的视角和三角函数的表示，我们证明了：
$$
\frac{\mathrm{d}\hat{r}}{\mathrm{d}t} = \dot{\theta} \hat{\theta}
$$
$$
\frac{\mathrm{d}\hat{\theta}}{\mathrm{d}t} = -\dot{\theta} \hat{r}
$$

另一种更加直观的方法是画出在极短时间内质点在极坐标系内位置的变化图像，可以直接得到相应结论。