---
title: Taichi的可视化
published: 2025-09-04
category: ["程设计科", "编程语言"]
tags: ["Taichi", "计算机图形学"]
alias: "taichi-04"
---

## 一、关于 `print` 语句

1. Taichi 内可以像 Python 一样使用 `print` 来输出信息。例如：

    ```python title="Taichi kernel 内打印矩阵.py"
    import taichi as ti

    ti.init(arch=ti.cpu)  # 或 ti.cuda

    @ti.kernel
    def foo():
        m = ti.Matrix([[2, 3, 4], [5, 6, 7]])
        print('m =', m)  # 在 kernel 内部打印矩阵

    foo()
    ```

2. 并行执行时（尤其在 GPU 上），同一 kernel 内来自不同线程的 `print` 输出顺序通常是不可预期的（可能乱序），因此不要依赖这些打印的顺序来做逻辑判断或调试顺序性问题。示例（可能输出乱序）：
    
    ```python title="Taichi并行打印顺序的随机性.py"
    import taichi as ti

    ti.init(arch=ti.cuda)

    @ti.kernel
    def foo():
        for i in range(10):
            print(i)  # 在 GPU 上输出顺序不可预期

    foo()
    ```

3. 在 GPU 架构上，Taichi 会对 kernel 内的打印进行缓冲/延迟，通常直到某些同步点（例如 `ti.sync()`）才会把输出刷新到宿主端的标准输出。因此如果你在 kernel 之后马上在 Python 层执行其他代码，可能不会立刻看到内核中的打印，除非执行了 `ti.sync()` 或其它会隐式同步的操作。示例：
    
    ```python title="Taichi kernel 打印的同步.py"
    import taichi as ti

    ti.init(arch=ti.cuda)

    @ti.kernel
    def foo():
        for i in range(10):
            print("inside foo", i)

    print("before foo")
    foo()
    ti.sync()  # 推荐在需要立刻看到 kernel 打印时使用
    print("after foo")
    ```
    
## 二、Taichi 的 GUI

1. 通过`ti.GUI`可以创建一个简单的图形用户界面，用于显示图像和处理用户输入。例如：
    
    ```python
        gui=ti.GUI("Title", res=(400, 400))
    ```

2. 通过`gui.set_image(img)`可以将图像显示在GUI窗口中。例如去画一个场：
    
    ```python
    img = ti.Vector.field(3, dtype=ti.f32, shape=(400, 400))
    gui.set_image(img)
    ```

3. 通过`gui.show()`可以显示GUI窗口，但是请将其放入循环中，否则只会闪烁一次后消失。例如可以：
    
    ```python
    while gui.running:
        gui.show()
    ```
    
4. 根据上面的代码，你可以通过控制`gui.running`来控制GUI窗口的显示与关闭。即可以设置`gui.running = False`来关闭窗口。
5. 下面的操作可以向GUI中添加元素，例如：`gui.circles()`, `gui.lines()`, `gui.rects()`, `gui.triangles()`等。
6. 下面的操作可以向GUI中添加组件，例如：`gui.button()`, `gui.slider()`, `gui.text()`等。
7. 下面的操作可以向GUI中添加交互事件，例如：`gui.get_event()`, `gui.get_key_event()`等。

ti.GUI只支持渲染2D图像，不支持3D图像。且速率较慢。如果你想实现三维的可视化，你可以选择使用GGUI。