---
title: "只使用Numpy实现MNIST手写数字分类"
published: 2025-06-01
category: ["程设计科", "人工智能"]
tags: ["人工智能"]
alias: "mnistclassifywithnumpy"
---

## 一、实验目的

本实验旨在通过MNIST手写数字分类任务，深入理解和实践深度学习的基本概念与核心算法，具体目标如下：

### 1、理解深度学习核心概念：

（1）掌握神经网络（Neural Networks）的基本结构、前向传播和反向传播机制。
（2）理解梯度下降（Gradient Descent）优化算法及其在参数更新中的作用。
（3）掌握链式法则（Chain Rule）在计算梯度时的应用。
（4）理解图像分类任务的基本流程，包括数据加载、预处理、模型训练、评估和预测。
（5）熟悉损失函数（如交叉熵损失）的意义和计算方法。

### 2、掌握NumPy手动实现技能：

（1）能够仅使用NumPy库实现一个卷积神经网络（CNN）或Transformer模型（本实验以CNN为例）。
（2）手动实现网络中的关键层，包括卷积层（Conv2D）、池化层（MaxPool2D）、激活函数（如ReLU）、全连接层（Dense）、Dropout层以及Softmax输出层。
（3）重点在于动手推导并实现每一层的前向传播和反向传播算法。

### 3、数据处理与运算能力：

（1）使用Python库加载和处理MNIST图像数据集。
（2）掌握图像数据的基本变换和数学运算，如归一化、维度调整等。

### 4、模型训练与评估：

（1）实现随机梯度下降（SGD）或其他优化算法来训练模型。
（2）在测试数据集上评估模型的准确性，分析模型在不同数字类别上的表现。
（3）识别模型可能的改进空间。

### 5、实验总结与报告撰写：

（1）总结实验过程和结果，包括模型的最终准确率、网络结构设计。
（2）记录和分析模型超参数（如学习率、批大小）、不同激活函数的影响、训练策略的选择。
（3）讨论实验中遇到的问题及其解决方案。

> 通过本实验，深刻理解深度学习模型（特别是CNN）的内部工作原理，并具备使用基础数学运算库从头构建和训练简单深度学习模型的能力。

## 二、实验环境

1. 操作系统：Windows 10
2. Python版本：3.8+
3. 主要依赖库：
    （1）NumPy 1.21+（核心库，用于所有数值计算和模型实现）
    （2）Matplotlib 3.4+（用于结果可视化，如绘制学习曲线、显示图像）
    （3）Pillow（PIL Fork）或 OpenCV（可选，用于图像文件的加载和初步处理，MNIST数据集通常直接提供数组）
    （4）Flask 2.0+（可选，用于Web应用部署展示）

## 三、实验内容

### 1、数据集介绍

MNIST数据集包含：
1. 训练集：60,000张图像
2. 测试集：10,000张图像
3. 图像尺寸：28×28像素
4. 灰度图像：单通道
5. 类别：0-9共10个数字类别

**数据预处理步骤详解（NumPy实现思路）：**

1. 加载数据：
    MNIST数据集通常以特定格式存储（如IDX文件格式）。需要编写或使用辅助函数读取这些文件，将图像数据和标签加载为NumPy数组。

    ```python
    # 伪代码示例
    # train_images_raw, train_labels_raw = load_mnist_idx('train-images-idx3-ubyte', 'train-labels-idx1-ubyte')
    # test_images_raw, test_labels_raw = load_mnist_idx('t10k-images-idx3-ubyte', 't10k-labels-idx1-ubyte')
    ```

2. 图像数据类型转换与归一化：
    原始图像像素值通常是0-255的`uint8`类型。
    - 转换为`float32`类型以支持后续的浮点运算和梯度计算。
    - 将像素值从[0, 255]归一化到[0, 1]范围，有助于模型训练的稳定性和收敛速度。

    ```python
    # 假设 train_images_raw 是 (60000, 784) 的原始像素数据
    train_images = train_images_raw.astype(np.float32) / 255.0
    ```

3. 图像标准化（可选但推荐）：
    进一步将数据标准化，使其均值为0，标准差为1。这通常能加速收敛。
    - 计算训练集的均值和标准差：

    ```python
    # mean = np.mean(train_images) # 全局均值
    # std = np.std(train_images)   # 全局标准差
    # 实际应用中，MNIST常用预计算值，如均值0.1307，标准差0.3081 (针对[0,1]范围数据)
    mean = 0.1307
    std = 0.3081
    train_images_normalized = (train_images - mean) / std
    test_images_normalized = (test_images.astype(np.float32) / 255.0 - mean) / std
    ```

4. 维度调整（Reshape）：
    卷积神经网络通常期望输入数据具有特定的维度顺序，如(batch_size, channels, height, width)。
    - MNIST图像是28x28的灰度图，通道数为1。
    - 如果原始数据是扁平的（如784维向量），需要将其重塑为(N, 1, 28, 28)。

    ```python
    # 假设 train_images_normalized 是 (60000, 784)
    # train_images_reshaped = train_images_normalized.reshape(-1, 1, 28, 28)
    # test_images_reshaped = test_images_normalized.reshape(-1, 1, 28, 28)
    # 如果已是 (60000, 28, 28)，则增加通道维度：
    # train_images_reshaped = train_images_normalized[:, np.newaxis, :, :]
    ```

5. 标签处理（One-Hot Encoding）：
    对于分类任务和交叉熵损失函数，标签通常需要转换为独热编码（One-Hot Encoding）格式。

    ```python
    # 假设 train_labels_raw 是 (60000,) 包含0-9的整数标签
    # num_classes = 10
    # train_labels_one_hot = np.eye(num_classes)[train_labels_raw]
    # train_labels_one_hot.shape 会是 (60000, 10)
    # 注意：如果损失函数实现内部处理整数标签（如本报告后续的交叉熵损失），则此步骤可选。
    ```

6. 批量处理（Batching）：
    在训练过程中，数据通常被划分为小批量（mini-batches）进行处理，以提高计算效率和训练稳定性。

    ```python
    # batch_size = 64
    # num_samples = train_images_reshaped.shape[0]
    # for i in range(0, num_samples, batch_size):
    #     X_batch = train_images_reshaped[i:i+batch_size]
    #     y_batch = train_labels_one_hot[i:i+batch_size] # 或原始标签
    #     # ... 模型训练步骤 ...
    ```

> 注意事项：
> （1）测试集的预处理步骤（归一化、标准化、维度调整）必须与训练集完全一致，使用训练集计算得到的均值和标准差。
> （2）`numpy_model.py` 中的模型会接收预处理后的数据。

### 2、模型架构

#### （1）CNN基本架构（示例）

本实验采用的卷积神经网络（CNN）结构可以参考如下设计，具体实现细节在 `numpy_model.py` 中：

```bash
输入层:           (batch_size, 1, 28, 28)      # 灰度手写数字图片
↓
卷积层1 (Conv1):  Conv2D(input_channels=1, output_channels=32, kernel_size=3, padding=1)
↓                 输出: (batch_size, 32, 28, 28)
激活函数1 (ReLU1): ReLU
↓
池化层1 (Pool1):  MaxPool2D(kernel_size=2, stride=2)
↓                 输出: (batch_size, 32, 14, 14)
卷积层2 (Conv2):  Conv2D(input_channels=32, output_channels=64, kernel_size=3, padding=1)
↓                 输出: (batch_size, 64, 14, 14)
激活函数2 (ReLU2): ReLU
↓
池化层2 (Pool2):  MaxPool2D(kernel_size=2, stride=2)
↓                 输出: (batch_size, 64, 7, 7)
展平层 (Flatten): Flatten
↓                 输出: (batch_size, 7*7*64) = (batch_size, 3136)
全连接层1 (FC1):  Dense(input_size=3136, output_size=128)
↓
激活函数3 (ReLU3): ReLU
↓
Dropout层 (可选): Dropout(p=0.25)                # 仅训练时激活
↓
全连接层2 (FC2):  Dense(input_size=128, output_size=10) # 输出10个类别分数
↓
Softmax层:        Softmax                      # 将分数转换为概率分布（通常在计算损失或推理时应用）
```

- 输入层：接收预处理后的MNIST图像。
- 卷积层：通过滑动卷积核提取局部特征。`numpy_model.py` 中会实现其前向和反向传播。
- ReLU激活：引入非线性，`f(x) = max(0, x)`。
- 池化层：下采样，减少数据维度，提取显著特征。
- 展平层：将多维特征图转换为一维向量，以输入全连接层。
- 全连接层：对特征进行线性组合，进行高级抽象。
- Dropout层：训练时随机丢弃神经元，防止过拟合。
- Softmax层：将输出层的原始分数（logits）转换为概率分布，每个类别的概率总和为1。

#### （2）PyTorch实现（作为对比参考）

（此部分可大幅删减或仅作简要提及，因为实验重点是NumPy实现）
PyTorch等深度学习框架通过自动求导和预置的优化层极大简化了模型搭建。例如，一个类似的CNN模型在PyTorch中可以这样定义：

```python
# import torch.nn as nn
# import torch.nn.functional as F
# class CNNPytorch(nn.Module):
#     def __init__(self):
#         super(CNNPytorch, self).__init__()
#         self.conv1 = nn.Conv2d(1, 32, 3, 1, padding=1)
#         self.conv2 = nn.Conv2d(32, 64, 3, 1, padding=1)
#         self.fc1 = nn.Linear(64 * 7 * 7, 128)
#         self.fc2 = nn.Linear(128, 10)
#         self.dropout = nn.Dropout(0.25)
#     def forward(self, x):
#         x = F.relu(self.conv1(x))
#         x = F.max_pool2d(x, 2)
#         x = F.relu(self.conv2(x))
#         x = F.max_pool2d(x, 2)
#         x = torch.flatten(x, 1)
#         x = self.dropout(x) # Dropout通常放在全连接层之间
#         x = F.relu(self.fc1(x))
#         x = self.dropout(x)
#         x = self.fc2(x)
#         return x # PyTorch的CrossEntropyLoss通常内置Softmax
```

PyTorch的优势在于其高效的后端实现和自动梯度计算，但本实验的核心在于理解这些操作的底层原理，因此我们将重点转向NumPy实现。

#### （3）NumPy实现（`numpy_model.py` 原理详解）

`numpy_model.py` 文件是本实验的核心，它完全使用NumPy库从头开始构建卷积神经网络的各个组件。每个组件（层）通常会实现 `forward` 方法（计算输出）和 `backward` 方法（计算梯度并更新参数）。以下是各主要组件的原理和NumPy实现思路：

##### （a）辅助函数 `im2col` 和 `col2im` （关键优化）

卷积运算在朴素实现中通常涉及多层嵌套循环，效率低下。为了利用NumPy高效的矩阵运算，`im2col` (image to column) 和 `col2im` (column to image) 是关键的辅助函数。

-   **`im2col` 原理**：
    将输入图像（或特征图）中每个卷积核覆盖的局部区域（patch）提取出来，并重新排列成一个大矩阵的列。如果输入是 `(N, C_in, H_in, W_in)`，卷积核大小 `(KH, KW)`，输出特征图大小 `(OH, OW)`，则 `im2col` 的输出矩阵形状通常是 `(C_in * KH * KW, N * OH * OW)` 或 `(N * OH * OW, C_in * KH * KW)`。每一列代表一个感受野区域被展平后的向量。
    这样，卷积运算中的多点乘积累加就可以转化为 `im2col` 输出矩阵与展平后的卷积核权重矩阵之间的单次矩阵乘法。

-   **`col2im` 原理**：
    `im2col` 的逆操作。将一个由列向量组成的矩阵（通常是梯度矩阵）转换回原始图像（或特征图）的空间结构。这在反向传播计算输入梯度时非常有用。它需要将梯度正确地累加回原始输入图像中对应像素的位置。

##### （b）卷积层 (Conv2D)

**原理**：
卷积层通过在输入图像上滑动一个或多个卷积核（滤波器）来提取局部特征。每个卷积核与输入图像的对应区域进行逐元素相乘再求和（点积），生成输出特征图的一个像素。

**NumPy实现思路 (`Conv2D` 类)**：

-   **初始化 `__init__`**：
    -   存储输入通道数 `input_channels`、输出通道数 `output_channels`（即卷积核数量）、卷积核尺寸 `kernel_size`、步长 `stride`、填充 `padding`。
    -   初始化权重 `self.weights`：形状为 `(output_channels, input_channels, kernel_height, kernel_width)`。通常使用小的随机数初始化（如高斯分布乘以0.01，或He/Xavier初始化）。
    -   初始化偏置 `self.bias`：形状为 `(output_channels, 1)` 或 `(output_channels,)`，通常初始化为0。
    -   存储用于反向传播的中间变量，如 `self.input_col` (im2col后的输入)。

-   **前向传播 `forward(self, x)`**：
    1.  输入 `x` 的形状为 `(N, C_in, H_in, W_in)` (N: batch_size)。
    2.  对输入 `x` 应用 `im2col` 转换，得到 `self.input_col` 矩阵。其形状例如 `(C_in * KH * KW, N * OH * OW)`。
    3.  将卷积核权重 `self.weights` 展平（reshape）为 `(output_channels, C_in * KH * KW)`，记为 `W_col`。
    4.  执行矩阵乘法：`output = W_col @ self.input_col`。结果 `output` 的形状为 `(output_channels, N * OH * OW)`。
    5.  添加偏置 `self.bias`：将偏置广播到 `output` 的每一列（或对应维度）。`output += self.bias.reshape(-1, 1)` (如果bias是(output_channels,))。
    6.  将 `output` 重塑（reshape）回标准的输出特征图形状 `(N, C_out, OH, OW)`。
    7.  缓存输入 `x` (或其shape) 和 `self.input_col` 以备反向传播使用。
    8.  返回输出特征图。

-   **反向传播 `backward(self, dout, learning_rate)`**：
    1.  输入 `dout` 是来自下一层的梯度，形状为 `(N, C_out, OH, OW)`。
    2.  将 `dout` 展平（reshape/transpose）为 `(output_channels, N * OH * OW)`，与前向传播中的 `output` 对应。
    3.  **计算偏置梯度 `db`**: `db = np.sum(dout_reshaped, axis=1)`，然后可能需要 `reshape` 成 `self.bias` 的形状。
    4.  **计算权重梯度 `dW`**:
        -   `dW_col = dout_reshaped @ self.input_col.T`。结果 `dW_col` 的形状为 `(output_channels, C_in * KH * KW)`。
        -   将 `dW_col` 重塑回 `self.weights` 的原始形状 `(output_channels, input_channels, KH, KW)`。
    5.  **计算输入梯度 `dx`**:
        -   获取展平的权重 `W_col` (形状 `(output_channels, C_in * KH * KW)`).
        -   `dx_col = W_col.T @ dout_reshaped`。结果 `dx_col` 的形状为 `(C_in * KH * KW, N * OH * OW)`。
        -   使用 `col2im` 函数将 `dx_col` 转换回输入 `x` 的空间形状 `(N, C_in, H_in, W_in)`。
    6.  **更新参数** (如果使用SGD)：
        -   `self.weights -= learning_rate * dW`
        -   `self.bias -= learning_rate * db`
    7.  返回输入梯度 `dx`。

##### （c）池化层 (MaxPool2D)

**原理**：
最大池化层对输入特征图的局部区域进行下采样，选择每个区域中的最大值作为输出。这有助于减少数据维度、计算量，并提供一定程度的平移不变性。

**NumPy实现思路 (`MaxPool2D` 类)**：
-   **初始化 `__init__`**：
    -   存储池化窗口大小 `kernel_size` (通常为2x2) 和步长 `stride` (通常为2)。
    -   Padding 通常为0。
    -   存储用于反向传播的索引 `self.max_indices`。

-   **前向传播 `forward(self, x)`**：
    1.  输入 `x` 的形状为 `(N, C, H_in, W_in)`。
    2.  使用 `im2col` 将每个池化窗口的区域展平成列。`im2col` 的参数需要根据池化窗口大小和步长设置。输出 `input_col` 形状如 `(C * N * OH * OW, KH * KW)` (假设每个通道独立处理，然后合并)。或者更常见的 `(N * C * OH * OW, KH * KW)`。
        另一种方式是直接迭代或使用reshape技巧，但`im2col`更通用。
        一个更直接的 `im2col` 形式可能是 `(KH * KW, N * C * OH * OW)`.
    3.  在 `input_col` 的每一列（代表一个池化窗口的展平数据）中找到最大值。`output_flat = np.max(input_col, axis=0)`。
    4.  记录最大值在每个窗口内的索引（相对于窗口左上角）。`self.max_indices = np.argmax(input_col, axis=0)`。这些索引对于反向传播至关重要。
    5.  将 `output_flat` 重塑为输出特征图的形状 `(N, C, OH, OW)`。
    6.  缓存输入 `x` 的形状和 `self.max_indices`。
    7.  返回池化后的输出。

-   **反向传播 `backward(self, dout)`**：
    1.  输入 `dout` 是来自下一层的梯度，形状为 `(N, C, OH, OW)`。
    2.  初始化一个与前向传播输入 `x` 相同形状的零矩阵 `dx_col_zeros` (对应 `im2col` 的输出形状，但元素为0)。
    3.  将 `dout` 展平，使其与前向传播中的 `output_flat` 对应。
    4.  利用 `self.max_indices`，将 `dout_flat` 的梯度值放置到 `dx_col_zeros` 中对应最大值的位置。
        对于 `input_col` 的每一列 `j` (对应一个池化窗口)：
        `dx_col_zeros[self.max_indices[j], j] = dout_flat[j]`
    5.  使用 `col2im` 函数将 `dx_col_zeros` 转换回输入 `x` 的空间形状 `(N, C, H_in, W_in)`，得到 `dx`。
    6.  返回输入梯度 `dx`。池化层没有可学习参数。

##### （d）激活函数 (ReLU)

**原理**：
修正线性单元（Rectified Linear Unit）是一种常用的激活函数，`f(x) = max(0, x)`。它引入非线性，同时计算简单，有助于缓解梯度消失问题。

**NumPy实现思路 (`ReLU` 类)**：
-   **初始化 `__init__`**：无特别参数。
-   **前向传播 `forward(self, x)`**：
    1.  输入 `x` 是前一层的输出。
    2.  `self.input = x` (缓存输入以备反向传播)。
    3.  `output = np.maximum(0, x)`。
    4.  返回 `output`。

-   **反向传播 `backward(self, dout)`**：
    1.  输入 `dout` 是来自下一层的梯度。
    2.  ReLU的导数是：当 `x > 0` 时为1，当 `x <= 0` 时为0。
    3.  `dx = dout * (self.input > 0)`。这里 `(self.input > 0)` 会产生一个布尔掩码，乘法时True转为1，False转为0。
    4.  返回输入梯度 `dx`。

##### （e）展平层 (Flatten)

**原理**：
将多维的输入（通常是卷积/池化层后的特征图）转换为一维向量，以便输入到全连接层。

**NumPy实现思路 (`Flatten` 类)**：
-   **初始化 `__init__`**：无特别参数。
-   **前向传播 `forward(self, x)`**：
    1.  输入 `x` 的形状例如 `(N, C, H, W)`。
    2.  `self.input_shape = x.shape` (缓存原始形状以备反向传播)。
    3.  `output = x.reshape(x.shape[0], -1)`。`-1` 表示自动计算该维度的大小，即将 `C, H, W` 三个维度展平。输出形状为 `(N, C*H*W)`。
    4.  返回 `output`。

-   **反向传播 `backward(self, dout)`**：
    1.  输入 `dout` 是来自下一层的梯度，形状为 `(N, C*H*W)`。
    2.  `dx = dout.reshape(self.input_shape)`。将梯度恢复到展平前的原始形状。
    3.  返回 `dx`。

##### （f）全连接层 (Dense / Fully Connected)

**原理**：
全连接层的每个神经元都与前一层的所有输出相连接。它执行的是输入的加权和再加上偏置，然后通常会通过一个激活函数。数学上是 `output = W @ x + b`。

**NumPy实现思路 (`Dense` 类)**：
-   **初始化 `__init__(self, input_size, output_size)`**：
    -   存储 `input_size` 和 `output_size`。
    -   初始化权重 `self.weights`：形状为 `(input_size, output_size)`。使用小的随机数初始化（如高斯分布乘以0.01，或Xavier/He初始化）。
    -   初始化偏置 `self.bias`：形状为 `(output_size,)` 或 `(1, output_size)`，通常初始化为0。

-   **前向传播 `forward(self, x)`**：
    1.  输入 `x` 的形状为 `(N, input_size)` (N: batch_size)。
    2.  `self.input = x` (缓存输入以备反向传播)。
    3.  `output = np.dot(x, self.weights) + self.bias`。
    4.  返回 `output`，形状为 `(N, output_size)`。

-   **反向传播 `backward(self, dout, learning_rate)`**：
    1.  输入 `dout` 是来自下一层的梯度，形状为 `(N, output_size)`。
    2.  **计算输入梯度 `dx`**: `dx = np.dot(dout, self.weights.T)`。形状为 `(N, input_size)`。
    3.  **计算权重梯度 `dW`**: `dW = np.dot(self.input.T, dout)`。形状为 `(input_size, output_size)`。
    4.  **计算偏置梯度 `db`**: `db = np.sum(dout, axis=0)`。形状为 `(output_size,)`。
    5.  **更新参数** (如果使用SGD)：
        -   `self.weights -= learning_rate * dW`
        -   `self.bias -= learning_rate * db`
    6.  返回输入梯度 `dx`。

##### （g）Dropout层

**原理**：
Dropout是一种正则化技术，在训练过程中以一定概率 `p` 随机地“丢弃”（即置零）一部分神经元的输出。在测试时，不进行丢弃，但通常会将所有权重乘以 `(1-p)`（或者在训练时将未丢弃的输出除以 `(1-p)`，称为inverted dropout，更常见）。这有助于防止模型过拟合。

**NumPy实现思路 (`Dropout` 类)**：
-   **初始化 `__init__(self, p=0.5)`**：
    -   存储丢弃概率 `self.p`。
    -   `self.train_mode = True` (一个标志位，用于切换训练/测试模式)。

-   **前向传播 `forward(self, x, train_mode=True)`**：
    1.  输入 `x`。
    2.  `self.train_mode = train_mode`。
    3.  如果 `not self.train_mode` (即测试模式)：直接返回 `x`。
    4.  如果 `self.train_mode` (即训练模式)：
        -   生成一个与 `x` 相同形状的掩码 `self.mask`。掩码中的元素以概率 `(1-p)` 为1，以概率 `p` 为0。
            `self.mask = (np.random.rand(*x.shape) < (1 - self.p)) / (1 - self.p)`
        -   将掩码应用于输入 `x`：`output = x * self.mask`。

-   **反向传播 `backward(self, dout)`**：
    1.  输入 `dout` 是来自下一层的梯度。
    2.  仅在训练模式下，才将 `dout` 按照掩码 `self.mask` 进行缩放：`dx = dout * self.mask`。
    3.  返回输入梯度 `dx`。

##### （h）Softmax与交叉熵损失 (SoftmaxCrossEntropyLoss)

**原理**：
Softmax函数将一组实数转换为概率分布，常用于多分类任务的输出层。交叉熵损失则衡量了预测的概率分布与真实分布之间的差异。

-   **Softmax**：
    对于输入向量 `z`，Softmax函数的输出为：`softmax(z)_i = exp(z_i) / sum(exp(z_j))`，其中 `i` 和 `j` 遍历所有类别。Softmax的输出值介于0和1之间，且总和为1。

-   **交叉熵损失**：
    对于真实标签分布 `y` 和预测分布 `p`，交叉熵损失为：`-sum(y_i * log(p_i))`。如果 `y` 是独热编码，且 `p` 是Softmax的输出，则损失只与正确类别的预测概率有关。

**NumPy实现思路 (`SoftmaxCrossEntropyLoss` 类)**：
-   **前向传播 `forward(self, logits, labels)`**：
    1.  对 `logits` 应用Softmax：`probs = softmax(logits)`。
    2.  计算交叉熵损失：`loss = -np.sum(labels * np.log(probs + 1e-12), axis=1)`。`1e-12` 是为了防止对数零点。
    3.  返回平均损失。

-   **反向传播 `backward(self, logits, labels)`**：
    1.  计算Softmax的Jacobian矩阵，记为 `S`。
    2.  计算交叉熵损失对logits的梯度：`dlogits = S - labels`。
    3.  返回 `dlogits`。

##### （i）整体模型 (`CNNNumPyModel` 类)

**原理**：
将各个层（卷积、池化、激活、全连接、Dropout）按顺序组合，构成完整的卷积神经网络模型。

**NumPy实现思路 (`CNNNumPyModel` 类)**：
-   **初始化 `__init__(self)`**：
    -   实例化各个层对象，如卷积层、池化层、全连接层等。
    -   按照网络结构顺序，将这些层组合在一起。

-   **前向传播 `forward(self, x, train_mode=True)`**：
    1.  按顺序调用各层的 `forward` 方法。
    2.  返回最终输出。

-   **反向传播 `backward(self, dout, learning_rate)`**：
    1.  按照相反顺序调用各层的 `backward` 方法。
    2.  更新参数（如权重、偏置）。
    3.  返回输入梯度 `dx`。

##### （j）训练与评估流程 (在 `main.py` 或类似脚本中实现)

**原理**：
实现模型的训练循环，包括前向传播、损失计算、反向传播和参数更新。同时实现评估函数，用于在测试集上评估模型性能。

**NumPy实现思路**：
-   **训练主循环 `train_numpy_model(model, train_data, train_labels, ...)`**：
    1.  遍历多个epoch：
        -   在每个epoch中，遍历所有训练样本（按batch划分）。
        -   对于每个batch：
            -   前向传播：`model.forward(X_batch)`。
            -   计算损失：使用 `SoftmaxCrossEntropyLoss`。
            -   反向传播：`model.backward(dout)`。
    2.  输出每个epoch的训练损失和准确率。

-   **评估函数 `evaluate_numpy_model(model, test_data, test_labels)`**：
    1.  在测试集上，调用 `model.forward()` （以 `train_mode=False`）。
    2.  计算准确率、混淆矩阵等指标。
    3.  返回评估结果。

## 五、问题与解决方案（结合NumPy实现详解）

### 1、梯度消失/爆炸问题

-   **现象**：
    在深层网络中，梯度在反向传播时可能逐渐变小（梯度消失）或变大（梯度爆炸），导致模型无法有效训练。

-   **解决方案**：
    1. 使用合适的权重初始化方法，如Xavier初始化或He初始化。
    2. 使用Batch Normalization层，规范化每一层的输入。
    3. 使用残差连接（ResNet中的思想），缓解梯度传播的困难。

### 2、训练速度慢

-   **现象**：
    模型训练所需时间过长，尤其是在数据量大或网络较深时。

-   **解决方案**：
    1. 使用更高效的优化器，如Adam或RMSProp。
    2. 减小模型复杂度，如减少卷积层通道数或全连接层神经元数。
    3. 使用更小的batch size，尽管这可能影响收敛稳定性。

## 六、实验总结

### 1、技术收获

1. 深度理解神经网络核心原理：
    （1）通过手动实现`numpy_model.py`中的每一层（卷积、池化、激活、全连接、Dropout）及其前向和反向传播算法，对数据如何在网络中流动、特征如何被提取、梯度如何计算和传播、参数如何更新有了具体而深刻的认识。
    （2）深刻理解了链式法则在复杂函数（神经网络）梯度计算中的核心作用。
    （3）掌握了损失函数（如交叉熵）的意义、计算方法及其梯度的推导。

2. NumPy数值计算与算法实现能力：
    （1）熟练掌握了使用NumPy进行高效的数组操作、矩阵运算，并将其应用于实现复杂的机器学习算法。
    （2）理解了`im2col`等技巧在优化卷积运算中的作用和实现方式。
    （3）提升了将数学公式转化为可执行代码的能力。

3. 模型构建与训练全流程实践：
    （1）完整经历了从数据预处理、模型架构设计、逐层实现、训练循环搭建、到模型评估和结果分析的全过程。
    （2）学会了如何管理模型的超参数（学习率、batch_size等），并观察它们对训练结果的影响。

4. 调试与问题解决能力：
    （1）在NumPy实现中，遇到了诸如维度不匹配、梯度计算错误、数值不稳定、内存管理等典型问题，并通过细致的调试和分析逐一解决，极大地锻炼了独立解决问题的能力。
    （2）学会了通过打印中间值、简化模型、梯度检查（理论上）等方法来定位和修复bug。

5. 对比理解框架的便捷性与抽象性：
    （1）通过与PyTorch等框架的对比（即使只是理论上或少量代码层面），能更清晰地认识到高级框架在自动求导、优化器、层封装等方面提供的巨大便利，同时也理解了这些便利背后所抽象掉的复杂细节。

### 2、经验教训

1. 理论基础是根本：清晰的数学推导（尤其是梯度计算）是正确实现反向传播的前提。在动手编码前，务必确保对每一层的公式理解无误。
2. 维度匹配是关键：在NumPy中，数组的维度（shape）至关重要。时刻关注每一层输入输出以及梯度的维度，是避免大量错误的有效手段。
3. 初始化和学习率非常敏感：不合适的权重初始化或学习率选择，很容易导致模型不收敛或训练效果差。需要耐心尝试和调整。
4. 数值稳定性不可忽视：Softmax中的指数运算和交叉熵中的对数运算容易出现上溢或log(0)问题，必须采取相应措施（如减最大值技巧、加epsilon）。
5. 调试是一个迭代过程：不要期望一次写对所有代码。从最简单的部分开始，逐步增加复杂度，每一步都进行验证。
6. `im2col`是双刃剑：它能将卷积转换为高效的矩阵乘法，但也带来了额外的内存开销和实现的复杂性。理解其原理和权衡是必要的。

### 3、可改进方向（基于NumPy实现）

1. 实现更高级的优化器：
    （1）当前实验主要基于朴素的随机梯度下降（SGD）。可以尝试手动实现更高级的优化算法，如带动量的SGD (Momentum)、AdaGrad、RMSProp或Adam。这需要修改参数更新的逻辑，并存储额外的状态变量（如动量、梯度平方的累积）。
2. 实现Batch Normalization层：
    （1）Batch Normalization (BN) 可以加速训练、提高稳定性、允许更高的学习率。实现BN层需要计算批内均值和标准差，进行归一化，并学习gamma和beta两个缩放和平移参数。其反向传播也较为复杂。
3. 探索不同的激活函数：
    （1）除了ReLU，可以实现并测试Leaky ReLU, ELU, Swish等其他激活函数及其对应的反向传播。
4. 实现更复杂的网络结构：
    （1）尝试构建更深的网络，或者引入残差连接（ResNet思想），这需要仔细设计数据通路和梯度回传。
5. 正则化方法：
    （1）除了Dropout，可以为`Dense`和`Conv2D`层添加L1或L2正则化项到损失函数中，并在反向传播时考虑其对参数梯度的影响。
6. 代码优化与效率提升：
    （1）进一步优化`im2col`和`col2im`的NumPy实现，例如尝试使用`np.lib.stride_tricks.as_strided`来创建视图以减少数据复制（需谨慎使用）。
    （2）如果环境允许，将NumPy替换为CuPy，以利用GPU加速，这将是性能提升最显著的方式。
7. 更完善的梯度检查工具：
    （1）编写一个通用的梯度检查函数，可以对任何实现了`forward`和`backward`接口的层进行数值梯度与解析梯度的比较，辅助调试。
8. 模型保存与加载的健壮性：
    （1）当前可能使用`pickle`保存整个模型对象。可以考虑更细致的保存策略，如仅保存权重和模型配置，以便跨版本或在不同环境中加载。

## 七、代码文件关系

本项目的核心在于使用NumPy手动实现卷积神经网络。各主要代码文件之间的关系和调用流程如下：

```bash
run_gui.py
├──start_project.py
|   ├── train_and_save_model.py
|   ├── predict_server.py
|   └── demo.html
└── main.py
    ├── numpy_model.py
    ├── pytorch_model.py
    └── data
```

**核心流程详解：**

1. `main.py`：
    （1）作为程序的入口点和总指挥。
    （2）负责：
   
- 解析命令行参数（如学习率、epoch数、batch_size等）。
- 调用（可能在 `utils.py` 中的）函数加载MNIST数据集，并进行必要的预处理（如归一化、维度调整）。
- 实例化 `numpy_model.py` 中定义的 `CNNNumPyModel` 对象。
- 实现或调用训练主循环 (`train_numpy_model`)：
  - 迭代epochs和batches。
  - 在每个batch上，调用 `model.forward()` 进行前向传播。
  - 计算损失和初始梯度（通常使用 `SoftmaxCrossEntropyLoss`）。
  - 按相反顺序调用模型中各层的 `backward()` 方法，传递梯度并更新参数。
- 实现或调用评估函数 (`evaluate_numpy_model`)：
  - 在测试集上，调用 `model.forward()` （以 `train_mode=False`）。
  - 计算准确率、混淆矩阵等指标。
- （可选）使用 `pickle` 等库保存训练好的模型参数。
- （可选）使用 `matplotlib` （可能通过 `utils.py` 中的函数）可视化训练曲线和评估结果。

3. `numpy_model.py`：
    （1）核心组件库，包含了所有神经网络层的手动实现。
    （2）层定义 (Layer Classes)：如 `Conv2D`, `MaxPool2D`, `ReLU`, `Dense`, `Flatten`, `Dropout`。每个类：   
- `__init__()`：初始化层参数（如权重、偏置）和超参数（如卷积核大小、步长）。
- `forward(input_data, ...)`：实现该层的前向传播逻辑，计算并返回输出。缓存反向传播所需的中间变量。
- `backward(output_gradient, learning_rate, ...)`：实现该层的反向传播逻辑。根据输入的梯度 `output_gradient`（来自后一层），计算对本层参数的梯度（`dW`, `db`）和对本层输入的梯度（`dx`）。如果是有参数的层，则在此更新参数。返回 `dx` 给前一层。
    （3）模型定义 (`CNNNumPyModel` Class)：
- `__init__()`：实例化并组合上述定义的各个层对象，构成一个完整的网络拓扑。
- `forward(input_data, train_mode=True)`：按顺序调用各层的 `forward` 方法，实现整个模型的前向传播。
- （通常不在模型类中直接实现完整的 `backward` 逻辑，而是由 `main.py` 中的训练循环协调各层的 `backward` 调用，但模型类可能提供一个接口或辅助方法来简化此过程）。
   
    （4）损失函数 (`SoftmaxCrossEntropyLoss` Class/Functions)：实现Softmax激活和交叉熵损失的计算，以及损失对Softmax输入（logits）的梯度计算。
    （5）辅助函数：如 `im2col`, `col2im`，用于优化卷积运算。

5. `run_gui.py` 和 `predict_server.py`（可选的扩展功能）：
    （1）这些文件用于提供更友好的用户交互或模型部署，它们会依赖于 `main.py` 训练出的模型和 `numpy_model.py` 中的模型定义（用于加载模型）。

**总结**：`main.py` 驱动整个实验流程，而 `numpy_model.py` 提供了实现这一流程所需的核心神经网络构建块。这种分离使得代码结构更清晰，易于理解和维护。实验的重点在于深刻理解和正确实现 `numpy_model.py` 中的每一个细节。

## 八、参考文献

1. LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998). Gradient-based learning applied to document recognition. *Proceedings of the IEEE, 86*(11), 2278-2324. (MNIST数据集和早期CNN)
2. Nielsen, M. A. (2015). *Neural Networks and Deep Learning*. Determination Press. (在线书籍，对神经网络原理有清晰解释，包括反向传播的推导)
3. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press. (权威教科书)
4. CS231n Convolutional Neural Networks for Visual Recognition, Stanford University. (课程笔记和作业，包含大量关于CNN手动实现的细节和技巧，如im2col)
5. NumPy official documentation. (NumPy库的使用方法)
6. He, K., Zhang, X., Ren, S., & Sun, J. (2015). Delving deep into rectifiers: Surpassing human-level performance on imagenet classification. (He初始化)
7. Kingma, D. P., & Ba, J. (2014). Adam: A method for stochastic optimization. (Adam优化器)

## 九、关键部分代码

`numpy_model.py`

```python
# 尝试导入CuPy作为GPU加速的NumPy替代品
try:
    import cupy as cp  # 导入cupy库（如果有），用于GPU加速
    import numpy as np  # 导入numpy库作为备用
    GPU_AVAILABLE = True  # 标记GPU可用
    print("CuPy已成功加载，将使用GPU加速")  # 打印提示信息
    
    # 创建一个辅助函数，用于将数据发送到GPU或CPU
    def to_device(x):
        return cp.asarray(x)  # 转为cupy数组
    
    # 创建一个辅助函数，用于将数据从GPU获取到CPU
    def to_cpu(x):
        return cp.asnumpy(x) if isinstance(x, cp.ndarray) else x  # 如果是cupy数组则转为numpy，否则原样返回
    
    # 使用CuPy作为主要计算库
    xp = cp  # 统一用xp代表cupy

except ImportError:
    GPU_AVAILABLE = False  # 标记GPU不可用
    print("未检测到CuPy，将使用CPU进行计算")  # 打印提示信息
    
    # 在没有GPU时，这些函数什么都不做
    def to_device(x):
        return x  # 直接返回原数据
    
    def to_cpu(x):
        return x  # 直接返回原数据
    
    # 使用NumPy作为主要计算库
    import numpy as np  # 导入numpy库
    xp = np  # 统一用xp代表numpy


from tqdm import tqdm  # 导入tqdm库，用于显示进度条

# 添加im2col和col2im工具函数，用于卷积优化
def im2col(x, kernel_height, kernel_width, stride=1, pad=0):
    """
    将输入数据转换为适合矩阵乘法的列矩阵
    x: (batch_size, channels, height, width)
    """
    batch_size, channels, height, width = x.shape  # 获取输入张量的维度
    out_height = (height + 2 * pad - kernel_height) // stride + 1  # 计算输出高度
    out_width = (width + 2 * pad - kernel_width) // stride + 1  # 计算输出宽度
    
    # 添加padding
    if pad > 0:
        x_padded = xp.zeros((batch_size, channels, height + 2 * pad, width + 2 * pad))  # 创建填充后的零张量
        x_padded[:, :, pad:pad+height, pad:pad+width] = x  # 将原始数据填充到张量中心
    else:
        x_padded = x  # 如果无需填充，直接使用原始数据
    
    # 初始化结果矩阵
    col = xp.zeros((batch_size, channels, kernel_height, kernel_width, out_height, out_width))  # 创建列矩阵
    
    # 填充列矩阵
    for y in range(kernel_height):  # 遍历卷积核高度
        y_max = y + stride * out_height  # 计算当前行的最大索引
        for x in range(kernel_width):  # 遍历卷积核宽度
            x_max = x + stride * out_width  # 计算当前列的最大索引
            col[:, :, y, x, :, :] = x_padded[:, :, y:y_max:stride, x:x_max:stride]  # 从填充数据中提取数据到列矩阵
    
    # 重塑为适合矩阵乘法的形状
    col = col.transpose(0, 4, 5, 1, 2, 3).reshape(batch_size * out_height * out_width, -1)  # 转置并重塑列矩阵
    return col  # 返回列矩阵

def col2im(col, input_shape, kernel_height, kernel_width, stride=1, pad=0):
    """
    将列矩阵转换回原始输入格式，用于反向传播
    col: (batch_size * out_height * out_width, channels * kernel_height * kernel_width)
    """
    batch_size, channels, height, width = input_shape  # 获取原始输入形状
    out_height = (height + 2 * pad - kernel_height) // stride + 1  # 计算输出高度
    out_width = (width + 2 * pad - kernel_width) // stride + 1  # 计算输出宽度
    
    col = col.reshape(batch_size, out_height, out_width, channels, kernel_height, kernel_width)  # 重塑列矩阵
    col = col.transpose(0, 3, 4, 5, 1, 2)  # 转置列矩阵
    
    img = xp.zeros((batch_size, channels, height + 2 * pad, width + 2 * pad))  # 创建输出图像
    for y in range(kernel_height):  # 遍历卷积核高度
        y_max = y + stride * out_height  # 计算当前行的最大索引
        for x in range(kernel_width):  # 遍历卷积核宽度
            x_max = x + stride * out_width  # 计算当前列的最大索引
            img[:, :, y:y_max:stride, x:x_max:stride] += col[:, :, y, x, :, :]  # 将列矩阵的值累加回图像
    
    # 去除padding
    if pad > 0:
        img = img[:, :, pad:pad + height, pad:pad + width]  # 裁剪掉填充部分
    
    return img  # 返回转换后的图像

class Conv2D:
    def __init__(self, input_channels, output_channels, kernel_size=3, stride=1, padding=1):
        self.input_channels = input_channels  # 输入通道数
        self.output_channels = output_channels  # 输出通道数
        self.kernel_size = kernel_size  # 卷积核大小
        self.stride = stride  # 步长
        self.padding = padding  # 填充
        
        # 初始化权重和偏置
        self.weights = xp.random.randn(output_channels, input_channels, kernel_size, kernel_size) * 0.01  # 卷积核权重
        self.bias = xp.zeros(output_channels)  # 偏置
        
        # 保存用于反向传播的变量
        self.input = None  # 前向传播时的输入
        self.col = None  # 用于存储im2col的结果
        self.col_shape = None  # 存储列形状信息
        
    def forward(self, x):
        x = to_device(x)  # 转到设备（CPU或GPU）
        self.input = x  # 保存输入
        batch_size, in_channels, height, width = x.shape  # 获取输入形状
        
        # 计算输出尺寸
        out_height = (height + 2 * self.padding - self.kernel_size) // self.stride + 1  # 输出高
        out_width = (width + 2 * self.padding - self.kernel_size) // self.stride + 1  # 输出宽
        
        # 使用im2col将输入数据转换为矩阵形式
        col = im2col(x, self.kernel_size, self.kernel_size, self.stride, self.padding)  # 转换为列矩阵
        self.col = col  # 保存im2col结果
        self.col_shape = col.shape  # 保存形状
        
        # 将卷积核权重重塑为适合矩阵乘法的形状
        # (output_channels, input_channels * kernel_size * kernel_size)
        W_col = self.weights.reshape(self.output_channels, -1)  # 重塑权重矩阵
        
        # 执行矩阵乘法计算卷积
        # (batch_size * out_height * out_width, input_channels * kernel_size * kernel_size) @ 
        # (input_channels * kernel_size * kernel_size, output_channels) = 
        # (batch_size * out_height * out_width, output_channels)
        out = xp.matmul(col, W_col.T) + self.bias  # 矩阵乘法实现卷积操作
        
        # 重塑输出
        out = out.reshape(batch_size, out_height, out_width, self.output_channels)  # 重新调整输出形状
        # 转置为标准的(batch_size, output_channels, out_height, out_width)格式
        out = out.transpose(0, 3, 1, 2)  # 转置为标准格式
        
        return out  # 返回卷积结果
        
    def backward(self, dout, learning_rate):
        dout = to_device(dout)  # 转到设备
        batch_size, out_channels, out_height, out_width = dout.shape  # 获取输出梯度形状
        
        # 重塑dout为(batch_size * out_height * out_width, output_channels)形式
        dout_reshaped = dout.transpose(0, 2, 3, 1).reshape(-1, self.output_channels)  # 重塑输出梯度
        
        # 计算偏置梯度
        dbias = xp.sum(dout_reshaped, axis=0)  # 计算偏置梯度
        
        # 计算权重梯度：使用矩阵乘法
        # (output_channels, batch_size * out_height * out_width) @ 
        # (batch_size * out_height * out_width, input_channels * kernel_size * kernel_size) = 
        # (output_channels, input_channels * kernel_size * kernel_size)
        dW = xp.matmul(dout_reshaped.T, self.col)  # 计算权重梯度
        # 重塑为原始权重形状
        dW = dW.reshape(self.weights.shape)  # 重塑权重梯度
        
        # 计算输入梯度
        W_col = self.weights.reshape(self.output_channels, -1)  # 重塑权重
        # (batch_size * out_height * out_width, output_channels) @ 
        # (output_channels, input_channels * kernel_size * kernel_size) = 
        # (batch_size * out_height * out_width, input_channels * kernel_size * kernel_size)
        dcol = xp.matmul(dout_reshaped, W_col)  # 计算列梯度
        
        # 将列梯度转回原始输入形状
        dx = col2im(dcol, self.input.shape, self.kernel_size, self.kernel_size, self.stride, self.padding)  # 重构输入梯度
        
        # 更新参数
        self.weights -= learning_rate * dW  # 更新权重
        self.bias -= learning_rate * dbias  # 更新偏置
        
        return to_cpu(dx)  # 返回输入梯度

class MaxPool2D:
    def __init__(self, kernel_size=2, stride=2):
        self.kernel_size = kernel_size  # 池化窗口大小
        self.stride = stride  # 步长
        self.input = None  # 保存输入
        self.max_indices = None  # 保存最大值索引
        self.x_shape = None  # 保存输入形状

    def forward(self, x):
        x = to_device(x)  # 转到设备
        self.input = x  # 保存输入
        self.x_shape = x.shape  # 保存输入形状
        batch_size, channels, height, width = x.shape  # 获取输入形状
        
        # 计算输出尺寸
        out_height = (height - self.kernel_size) // self.stride + 1  # 输出高
        out_width = (width - self.kernel_size) // self.stride + 1  # 输出宽
        
        # 使用im2col将输入重塑为矩阵形式
        col = im2col(x, self.kernel_size, self.kernel_size, self.stride, 0)  # 使用im2col重塑输入
        # 将列数据重塑以便于找到最大值
        col = col.reshape(-1, self.kernel_size * self.kernel_size)  # 重塑列数据
        
        # 找到每个区域的最大值索引
        self.max_indices = xp.argmax(col, axis=1)  # 找到最大值索引
        
        # 获取最大值
        max_vals = xp.max(col, axis=1)  # 获取最大值
        
        # 重塑输出
        output = max_vals.reshape(batch_size, out_height, out_width, channels)  # 重塑输出
        output = output.transpose(0, 3, 1, 2)  # 转置为标准格式
        
        return output  # 返回池化结果

    def backward(self, dout):
        dout = to_device(dout)  # 转到设备
        batch_size, channels, out_height, out_width = dout.shape  # 获取输出梯度形状
        
        # 重塑dout
        dout_flat = dout.transpose(0, 2, 3, 1).reshape(-1)  # 重塑输出梯度
        
        # 创建与col相同形状的零矩阵
        dcol = xp.zeros((dout_flat.size, self.kernel_size * self.kernel_size))  # 创建列梯度矩阵
        
        # 将梯度放在max_indices指定的位置
        dcol[xp.arange(dout_flat.size), self.max_indices] = dout_flat  # 将梯度放入对应位置
        
        # 将列梯度转回原始输入形状
        dx = col2im(dcol, self.input.shape, self.kernel_size, self.kernel_size, self.stride, 0)  # 重构输入梯度
        
        return to_cpu(dx)  # 返回输入梯度

class ReLU:
    def __init__(self):
        self.input = None  # 保存输入

    def forward(self, x):
        x = to_device(x)  # 转到设备
        self.input = x  # 保存输入
        return xp.maximum(0, x)  # 应用ReLU激活函数

    def backward(self, dout):
        dout = to_device(dout)  # 转到设备
        return to_cpu(dout * (self.input > 0))  # 梯度为输入大于0的位置

class Flatten:
    def __init__(self):
        self.input_shape = None  # 保存输入形状

    def forward(self, x):
        x = to_device(x)  # 转到设备
        self.input_shape = x.shape  # 保存输入形状
        return x.reshape(x.shape[0], -1)  # 展平输入

    def backward(self, dout):
        dout = to_device(dout)  # 转到设备
        return to_cpu(dout.reshape(self.input_shape))  # 恢复输入形状

class Dense:
    def __init__(self, input_size, output_size):
        self.weights = xp.random.randn(input_size, output_size) * 0.01  # 初始化权重
        self.bias = xp.zeros(output_size)  # 初始化偏置
        self.input = None  # 保存输入

    def forward(self, x):
        x = to_device(x)  # 转到设备
        self.input = x  # 保存输入
        return xp.dot(x, self.weights) + self.bias  # 计算输出

    def backward(self, dout, learning_rate):
        dout = to_device(dout)  # 转到设备
        dinput = xp.dot(dout, self.weights.T)  # 计算输入梯度
        dweights = xp.dot(self.input.T, dout)  # 计算权重梯度
        dbias = xp.sum(dout, axis=0)  # 计算偏置梯度
        
        # 更新参数
        self.weights -= learning_rate * dweights  # 更新权重
        self.bias -= learning_rate * dbias  # 更新偏置
        
        return to_cpu(dinput)  # 返回输入梯度

class Dropout:
    def __init__(self, p=0.5):
        self.p = p  # Dropout概率
        self.mask = None  # 保存Dropout掩码

    def forward(self, x, train=True):
        x = to_device(x)  # 转到设备
        if not train:  # 如果不是训练模式
            return x  # 直接返回输入
        
        self.mask = xp.random.binomial(1, 1-self.p, size=x.shape) / (1-self.p)  # 生成Dropout掩码
        return x * self.mask  # 应用Dropout

    def backward(self, dout):
        dout = to_device(dout)  # 转到设备
        return to_cpu(dout * self.mask)  # 传递梯度

class Softmax:
    def __init__(self):
        pass  # Softmax没有参数

    def forward(self, x):
        x = to_device(x)  # 转到设备
        exp_x = xp.exp(x - xp.max(x, axis=1, keepdims=True))  # 计算指数
        return exp_x / xp.sum(exp_x, axis=1, keepdims=True)  # 归一化

def cross_entropy_loss(y_pred, y_true):
    y_pred = to_device(y_pred)  # 转到设备
    y_true = to_device(y_true)  # 转到设备
    m = y_pred.shape[0]  # 样本数量
    p = softmax(y_pred)  # 计算Softmax
    log_likelihood = -xp.log(p[xp.arange(m), y_true])  # 计算对数似然
    loss = xp.sum(log_likelihood) / m  # 计算平均损失
    return to_cpu(loss)  # 返回损失

def softmax(x):
    x = to_device(x)  # 转到设备
    exp_x = xp.exp(x - xp.max(x, axis=1, keepdims=True))  # 计算指数
    return exp_x / xp.sum(exp_x, axis=1, keepdims=True)  # 归一化

def softmax_backward(dout, y_pred, y_true):
    dout = to_device(dout)  # 转到设备
    y_pred = to_device(y_pred)  # 转到设备
    y_true = to_device(y_true)  # 转到设备
    batch_size = y_pred.shape[0]  # 样本数量
    dscores = softmax(y_pred)  # 计算Softmax
    dscores[xp.arange(batch_size), y_true] -= 1  # 减去真实标签
    dscores = dscores / batch_size  # 平均化
    return to_cpu(dscores)  # 返回梯度

class CNNNumPyModel:
    def __init__(self):
        # 普通版大模型
        self.conv1 = Conv2D(input_channels=1, output_channels=32, kernel_size=3, padding=1)  # 第一个卷积层
        self.relu1 = ReLU()  # 第一个ReLU激活层
        self.pool1 = MaxPool2D(kernel_size=2, stride=2)  # 第一个最大池化层
        self.conv2 = Conv2D(input_channels=32, output_channels=64, kernel_size=3, padding=1)  # 第二个卷积层
        self.relu2 = ReLU()  # 第二个ReLU激活层
        self.pool2 = MaxPool2D(kernel_size=2, stride=2)  # 第二个最大池化层
        self.flatten = Flatten()  # 展平层
        self.fc1 = Dense(7 * 7 * 64, 128)  # 第一个全连接层
        self.relu3 = ReLU()  # 第三个ReLU激活层
        self.dropout1 = Dropout(0.25)  # Dropout层
        self.fc2 = Dense(128, 10)  # 第二个全连接层
        self.softmax = Softmax()  # Softmax层

    def forward(self, x, train=True):
        x = self.conv1.forward(x)  # 第一层卷积
        x = self.relu1.forward(x)  # 第一层ReLU
        x = self.pool1.forward(x)  # 第一层池化
        
        x = self.conv2.forward(x)  # 第二层卷积
        x = self.relu2.forward(x)  # 第二层ReLU
        x = self.pool2.forward(x)  # 第二层池化
        
        x = self.flatten.forward(x)  # 展平
        x = self.fc1.forward(x)  # 第一层全连接
        x = self.relu3.forward(x)  # 第三层ReLU
        x = self.dropout1.forward(x, train)  # Dropout
        x = self.fc2.forward(x)  # 第二层全连接
        
        return x  # 返回输出

    def backward(self, x, y, learning_rate):
        x = to_device(x)  # 转到设备
        y = to_device(y)  # 转到设备
        # Forward pass
        scores = self.forward(x, train=True)  # 前向传播
        # 计算损失
        loss = cross_entropy_loss(scores, y)  # 计算损失
        # Backward pass
        # print("backward: fc2")
        dscores = softmax_backward(scores, scores, y)  # Softmax反向传播
        dout = self.fc2.backward(dscores, learning_rate)  # 第二层全连接反向传播
        # print("backward: dropout1")
        dout = self.dropout1.backward(dout)  # Dropout反向传播
        # print("backward: relu3")
        dout = self.relu3.backward(dout)  # 第三层ReLU反向传播
        # print("backward: fc1")
        dout = self.fc1.backward(dout, learning_rate)  # 第一层全连接反向传播
        # print("backward: flatten")
        dout = self.flatten.backward(dout)  # 展平反向传播
        # print("backward: pool2")
        dout = self.pool2.backward(dout)  # 第二层池化反向传播
        # print("backward: relu2")
        dout = self.relu2.backward(dout)  # 第二层ReLU反向传播
        # print("backward: conv2")
        dout = self.conv2.backward(dout, learning_rate)  # 第二层卷积反向传播
        # print("backward: pool1")
        dout = self.pool1.backward(dout)  # 第一层池化反向传播
        # print("backward: relu1")
        dout = self.relu1.backward(dout)  # 第一层ReLU反向传播
        # print("backward: conv1")
        dout = self.conv1.backward(dout, learning_rate)  # 第一层卷积反向传播
        # print("backward: done")
        return loss  # 返回损失

    def predict(self, x):
        x = to_device(x)  # 转到设备
        scores = self.forward(x, train=False)  # 前向传播
        return to_cpu(xp.argmax(scores, axis=1))  # 返回预测结果

class CNNNumPyModelLight:
    def __init__(self):
        # 轻量版小模型
        self.conv1 = Conv2D(input_channels=1, output_channels=8, kernel_size=3, padding=1)  # 第一个卷积层，输出通道数减少
        self.relu1 = ReLU()  # 第一个ReLU激活层
        self.pool1 = MaxPool2D(kernel_size=2, stride=2)  # 第一个最大池化层
        self.conv2 = Conv2D(input_channels=8, output_channels=16, kernel_size=3, padding=1)  # 第二个卷积层，输出通道数减少
        self.relu2 = ReLU()  # 第二个ReLU激活层
        self.pool2 = MaxPool2D(kernel_size=2, stride=2)  # 第二个最大池化层
        self.flatten = Flatten()  # 展平层
        self.fc1 = Dense(7 * 7 * 16, 32)  # 第一个全连接层，神经元数减少
        self.relu3 = ReLU()  # 第三个ReLU激活层
        self.dropout1 = Dropout(0.25)  # Dropout层
        self.fc2 = Dense(32, 10)  # 第二个全连接层
        self.softmax = Softmax()  # Softmax层
    # forward/backward/predict同CNNNumPyModel，可直接继承或复制
    def forward(self, x, train=True):
        x = self.conv1.forward(x)  # 第一层卷积
        x = self.relu1.forward(x)  # 第一层ReLU
        x = self.pool1.forward(x)  # 第一层池化
        x = self.conv2.forward(x)  # 第二层卷积
        x = self.relu2.forward(x)  # 第二层ReLU
        x = self.pool2.forward(x)  # 第二层池化
        x = self.flatten.forward(x)  # 展平
        x = self.fc1.forward(x)  # 第一层全连接
        x = self.relu3.forward(x)  # 第三层ReLU
        x = self.dropout1.forward(x, train)  # Dropout
        x = self.fc2.forward(x)  # 第二层全连接
        return x  # 返回输出
    def backward(self, x, y, learning_rate):
        x = to_device(x)  # 转到设备
        y = to_device(y)  # 转到设备
        scores = self.forward(x, train=True)  # 前向传播
        loss = cross_entropy_loss(scores, y)  # 计算损失
        # print("backward: fc2")
        dscores = softmax_backward(scores, scores, y)  # Softmax反向传播
        dout = self.fc2.backward(dscores, learning_rate)  # 第二层全连接反向传播
        # print("backward: dropout1")
        dout = self.dropout1.backward(dout)  # Dropout反向传播
        # print("backward: relu3")
        dout = self.relu3.backward(dout)  # 第三层ReLU反向传播
        # print("backward: fc1")
        dout = self.fc1.backward(dout, learning_rate)  # 第一层全连接反向传播
        # print("backward: flatten")
        dout = self.flatten.backward(dout)  # 展平反向传播
        # print("backward: pool2")
        dout = self.pool2.backward(dout)  # 第二层池化反向传播
        # print("backward: relu2")
        dout = self.relu2.backward(dout)  # 第二层ReLU反向传播
        # print("backward: conv2")
        dout = self.conv2.backward(dout, learning_rate)  # 第二层卷积反向传播
        # print("backward: pool1")
        dout = self.pool1.backward(dout)  # 第一层池化反向传播
        # print("backward: relu1")
        dout = self.relu1.backward(dout)  # 第一层ReLU反向传播
        # print("backward: conv1")
        dout = self.conv1.backward(dout, learning_rate)  # 第一层卷积反向传播
        # print("backward: done")
        return loss  # 返回损失
    def predict(self, x):
        x = to_device(x)  # 转到设备
        scores = self.forward(x, train=False)  # 前向传播
        return to_cpu(xp.argmax(scores, axis=1))  # 返回预测结果

def train_numpy_model(train_data, train_labels, test_data, test_labels, args):
    train_data = to_device(train_data)  # 转到设备
    train_labels = to_device(train_labels)  # 转到设备
    test_data = to_device(test_data)  # 转到设备
    test_labels = to_device(test_labels)  # 转到设备
    # 根据args.light_mode选择模型
    if hasattr(args, 'light_mode') and args.light_mode:
        model = CNNNumPyModelLight()  # 创建轻量模型
    else:
        model = CNNNumPyModel()  # 创建标准模型
    
    # 训练历史记录
    history = {
        'train_loss': [],  # 训练损失
        'train_acc': [],  # 训练准确率
        'val_loss': [],  # 验证损失
        'val_acc': []  # 验证准确率
    }
    
    batch_size = args.batch_size  # 批次大小
    n_samples = len(train_data)  # 样本数量
    n_batches = (n_samples + batch_size - 1) // batch_size  # 向上取整计算批次数量
    
    for epoch in range(args.epochs):  # 遍历每个epoch
        # 打乱数据
        indices = xp.random.permutation(n_samples)  # 随机排列索引
        shuffled_data = train_data[indices]  # 打乱数据
        shuffled_labels = train_labels[indices]  # 打乱标签
        
        total_loss = 0  # 总损失
        correct = 0  # 正确预测数量
        
        pbar = tqdm(range(n_batches), desc=f"Epoch {epoch+1}/{args.epochs}")  # 创建进度条
        for i in pbar:  # 遍历每个批次
            start_idx = i * batch_size  # 批次起始索引
            end_idx = min((i + 1) * batch_size, n_samples)  # 批次结束索引
            
            X_batch = shuffled_data[start_idx:end_idx]  # 当前批次数据
            y_batch = shuffled_labels[start_idx:end_idx]  # 当前批次标签
            
            # 调试：打印每个 batch 的 shape
            if i == 0:
                print(f"Batch X shape: {X_batch.shape}, y shape: {y_batch.shape}")  # 打印批次形状
            
            # 训练一个批次
            # print("Before backward")
            loss = model.backward(X_batch, y_batch, args.lr)  # 反向传播
            # print("After backward")
            total_loss += loss  # 累加损失
            
            # 计算准确率
            predictions = model.predict(X_batch)  # 预测
            # 确保 predictions 和 y_batch 类型一致
            predictions = to_device(predictions)  # 转到设备
            y_batch = to_device(y_batch)  # 转到设备
            correct += xp.sum(predictions == y_batch)  # 计算正确预测数量
            
            # 更新进度条
            pbar.set_postfix({'loss': total_loss/(i+1), 'acc': 100.*correct/(end_idx)})  # 更新进度条信息
        
        # 计算平均训练损失和准确率
        train_loss = total_loss / n_batches  # 平均损失
        train_acc = 100. * correct / n_samples  # 平均准确率
        # 评估模型
        val_loss, val_acc = evaluate_numpy_model(model, test_data, test_labels, args)  # 验证
        
        # 记录历史
        history['train_loss'].append(train_loss)  # 记录训练损失
        history['train_acc'].append(train_acc)  # 记录训练准确率
        history['val_loss'].append(val_loss)  # 记录验证损失
        history['val_acc'].append(val_acc)  # 记录验证准确率
        
        print(f"Epoch {epoch+1}/{args.epochs} - "
              f"Train Loss: {train_loss:.4f}, Train Acc: {train_acc:.2f}%, "
              f"Val Loss: {val_loss:.4f}, Val Acc: {val_acc:.2f}%")  # 打印epoch信息
        
    return model, history  # 返回模型和历史记录

def evaluate_numpy_model(model, test_data, test_labels, args=None):
    test_data = to_device(test_data)  # 转到设备
    test_labels = to_device(test_labels)  # 转到设备
    # 使用args中的batch_size参数，如果提供了的话，否则使用默认值100
    batch_size = args.batch_size if args and hasattr(args, 'batch_size') else 100  # 批次大小
    
    # 如果提供了max_samples参数并且不为None，限制测试样本数量
    if args and hasattr(args, 'max_samples') and args.max_samples is not None:
        max_samples = min(args.max_samples, len(test_data))  # 限制样本数量
        test_data = test_data[:max_samples]  # 限制数据
        test_labels = test_labels[:max_samples]  # 限制标签
        print(f"使用限制后的测试样本数: {len(test_data)}")  # 打印样本数量
        
    n_samples = len(test_data)  # 样本数量
    n_batches = (n_samples + batch_size - 1) // batch_size  # 批次数量
    
    total_loss = 0  # 总损失
    correct = 0  # 正确预测数量
    all_preds = []  # 保存所有预测
    all_labels = []  # 保存所有标签
    
    for i in range(n_batches):  # 遍历每个批次
        start_idx = i * batch_size  # 批次起始索引
        end_idx = min((i + 1) * batch_size, n_samples)  # 批次结束索引
        
        X_batch = test_data[start_idx:end_idx]  # 当前批次数据
        y_batch = test_labels[start_idx:end_idx]  # 当前批次标签
        
        # 前向传播
        scores = model.forward(X_batch, train=False)  # 前向传播
        
        # 计算损失
        loss = cross_entropy_loss(scores, y_batch)  # 计算损失
        total_loss += loss  # 累加损失
        
        # 计算准确率
        predictions = xp.argmax(scores, axis=1)  # 预测
        correct += xp.sum(predictions == y_batch)  # 计算正确预测数量
        all_preds.append(to_cpu(predictions))  # 保存预测
        all_labels.append(to_cpu(y_batch))  # 保存标签
    
    # 计算平均损失和准确率
    test_loss = total_loss / n_batches  # 平均损失
    test_acc = 100. * correct / n_samples  # 平均准确率

    # 统计每类准确率和混淆矩阵
    all_preds = np.concatenate(all_preds)  # 合并所有预测
    all_labels = np.concatenate(all_labels)  # 合并所有标签
    num_classes = 10  # 类别数量
    confusion_matrix = np.zeros((num_classes, num_classes), dtype=int)  # 初始化混淆矩阵
    for t, p in zip(all_labels, all_preds):  # 遍历所有标签和预测
        confusion_matrix[t, p] += 1  # 更新混淆矩阵
    per_class_acc = confusion_matrix.diagonal() / confusion_matrix.sum(axis=1)  # 计算每类准确率
    print("\n混淆矩阵：")  # 打印混淆矩阵
    print(confusion_matrix)  # 打印混淆矩阵
    print("\n每类准确率：")  # 打印每类准确率
    for i, acc in enumerate(per_class_acc):  # 遍历每类
        print(f"类别 {i} 的准确率: {acc*100:.2f}%")  # 打印每类准确率
    
    return test_loss, test_acc  # 返回损失和准确率
```