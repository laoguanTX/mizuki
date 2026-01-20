---
title: 在WSL2上配置Taichi运行环境
published: 2025-09-01
category: ["程设计科", "编程语言"]
tags: ["Taichi", "Python", "计算机图形学"]
alias: "taichi-01"
---

## 一、准备工作

### 1、安装WSL2

如果你还没有安装WSL2，可以参考以下步骤：

1. **启用WSL功能（要求为Windows10/11专业版以上）**

   - 按`Win + S`搜索“PowerShell”，右键以管理员身份运行。
   - 输入以下命令启用WSL和虚拟机功能：
     ```bash
     dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
     dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
     ```
2. **安装Linux发行版**
   - 在Microsoft Store搜索并安装如Ubuntu（推荐）。

### 2、安装Anaconda

WSL2环境下推荐安装Miniconda（轻量版），当然也可以安装完整的Anaconda。

1. 在WSL2终端输入以下命令下载Miniconda安装脚本：
   ```bash
   wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
   ```

2. 执行安装脚本：
   ```bash
   bash Miniconda3-latest-Linux-x86_64.sh
   ```
   - 一路回车（或按提示输入yes），安装路径可使用默认（一般为`~/miniconda3`）。
   - 安装完成后，按提示执行如下命令，激活conda：
     ```bash
     source ~/miniconda3/bin/activate
     ```

3. 可选：添加conda自动激活到你的`.bashrc`或`.zshrc`：
   ```bash
   echo "source ~/miniconda3/bin/activate" >> ~/.bashrc
   ```

## 二、创建Taichi环境

我们用conda来创建一个名为`taichi`的环境，指定Python 3.9版本。

1. 更新conda

```bash
conda update -n base -c defaults conda
```

2. 创建taichi环境（指定Python 3.9）

```bash
conda create -n taichi python=3.9
```
- `-n taichi`：指定环境名称为taichi
- `python=3.9`：指定Python版本为3.9

3. 激活taichi环境

```bash
conda activate taichi
```

## 三、在taichi环境中安装Taichi

```bash
pip install taichi
```

## 四、验证安装

首先保证自己处于`taichi`的conda环境下，使用如下命令：

```bash
ti example mpm99
```

如果能正常弹出如下GUI界面，证明Taichi安装成功。

![Taichi-mpm99](https://laoguantx.top/article/程设计科/Taichi/Taichi-mpm99.png)
