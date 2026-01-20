---
title: Astro-MDX语法都可以做什么
published: 2025-09-01
alias: "whyuseastro"
---

本文将通过代码和效果对照的方式，详细介绍Astro-MDX的各种语法特性。每个特性都会先展示源代码，然后展示实际渲染效果。

## 一、文档头部（Frontmatter）

Astro-MDX文档开头需要包含frontmatter信息，使用三个横线分隔：

```
---
title: 文章标题 （必要）
created: 2024-01-17 （必要）
categories: ['分类1', '分类2'] （非必要）
tags: ['标签1', '标签2'] （非必要）
draft: false （是否为草稿，非必要）
description: '文章摘要' （非必要）
---
```

## 二、基础文本格式

**源代码：**

```
普通文本直接书写
**粗体文本** 使用双星号
_斜体文本_ 使用单下划线
**_粗斜体文本_** 使用双个星号和单下划线
~~删除线文本~~ 使用双波浪线
`行内代码` 使用反引号
```

**渲染效果：**

普通文本直接书写

**粗体文本** 使用双星号

_斜体文本_ 使用单星号

**_粗斜体文本_** 使用三个星号

~~删除线文本~~ 使用双波浪线

`行内代码` 使用反引号

## 三、标题

支持特殊渲染二级、三级、四级标题

源代码：

```
## 二级标题
### 三级标题
#### 四级标题
```

## 四、列表

### 1、无序列表：

源代码：

```
- 项目一
- 项目二
  - 子项目A
  - 子项目B
```

渲染效果：

- 项目一
- 项目二
  - 子项目A
  - 子项目B

### 2、有序列表：

源代码：

```
1. 第一步
2. 第二步
   1. 子步骤1
   2. 子步骤2
```

渲染效果：

1. 第一步
2. 第二步
   1. 子步骤1
   2. 子步骤2

### 3、任务列表：

源代码：

```
- [x] 已完成任务
- [ ] 未完成任务
- [ ] 待办事项
  - [x] 子任务1
  - [ ] 子任务2
```

渲染效果：

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 待办事项
  - [x] 子任务1
  - [ ] 子任务2

### 四、引用

源代码：

```
> 这是一段普通引用文本
> 可以跨多行
>
> > 这是嵌套引用

> [!NOTE]
> 这是一个提示信息

> [!WARNING]
> 这是一个警告信息

> [!IMPORTANT]
> 这是一个重要信息

> [!TIP]
> 这是一个提示信息

> [!CAUTION]
> 这是一个注意事项
```

渲染效果：

> 这是一段普通引用文本
> 可以跨多行
>
> > 这是嵌套引用

> [!NOTE]
> 这是一个提示信息

> [!WARNING]
> 这是一个警告信息

> [!IMPORTANT]
> 这是一个重要信息

> [!TIP]
> 这是一个提示信息

> [!CAUTION]
> 这是一个注意事项

## 六、表格

源代码：

```
| 左对齐 | 居中对齐 | 右对齐 | 普通渲染 |
| :----- | :------: | -----: | :------: |
| 单元格 |  单元格  | 单元格 |  单元格  |
| 左对齐 |   居中   | 右对齐 |   普通   |
```

渲染效果：

| 左对齐 | 居中对齐 | 右对齐 | 普通渲染 |
| :----- | :------: | -----: | :------: |
| 单元格 |  单元格  | 单元格 |  单元格  |
| 左对齐 |   居中   | 右对齐 |   普通   |

## 七、代码块

代码块支持多种渲染方式。

### 1、普通代码高亮

使用三连反引号，并在上方反引号后面指定语言。

```javascript
function greeting(name) {
  return `Hello, ${name}!`
}

console.log(greeting('MDX'))
```

### 2、命令行代码特殊渲染

检测到语言类型为：`shell`,`sh`,`bash`,`powershell`,`console`,`shellsession`,`ansi`时启用终端渲染模式。

```bash
sudo apt-get install nodejs
```

### 3、代码块标题

在代码块的开头，可以使用`title`属性为代码块添加标题。

源代码：

```
```cpp title="HelloWorld.cpp"
```

渲染效果：

```cpp title="HelloWorld.cpp"
#include <iostream>
using namespace std;
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### 4、代码块某几行的背景高亮

在代码块的开头，可以使用`{}`来指定某几行的背景高亮。

源代码：

```
```cpp title="HelloWorld.cpp" {1,3-4}
```

渲染效果：

```cpp title="HelloWorld.cpp" {1,3-4}
#include <iostream>
using namespace std;
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### 5、代码块的增删

在代码块的开头，可以使用`del`和`ins`属性来指定某几行的增删。

源代码：

```
```cpp title="HelloWorld.cpp" del={1} ins={2}

```

渲染效果：

```cpp title="HelloWorld.cpp" del={1} ins={2}
#include <iostream>
using namespace std;
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

为了 Markdown 原内容有更强的可读性，可以使用`diff`语法，你可以在 + 或 - 标记之后添加空格，并将未更改的行与已更改的行对齐。这个额外的空格将被自动检测并从渲染的代码块中删除，也可以在标签后添加语言类型。

源代码：

```
```diff lang="cpp" title="HelloWorld.cpp"
-    return 1;
+    return 0;
```

渲染效果：

```diff lang="cpp" title="HelloWorld.cpp"
#include <iostream>
using namespace std;
int main() {
    std::cout << "Hello, World!" << std::endl;
-    return 1;
+    return 0;
}
```

### 6、代码块标签

在代码块的开头，可以使用`{}`来指定标签。格式为`{"<标签名>:行号范围}`，同样地也可以使用`del`和`ins`属性。但是要在标签标记的代码上方留出空白一行用于显示标签。

源代码：

```
```cpp title="HelloWorld.cpp" {"1. 这是一个标签":2-3} del={"2. 这也是一个标签":4-7} ins={"3. 这是一个新标签":8-9}
```

渲染效果：

```cpp title="HelloWorld.cpp" {"1. 这是一个标签":2-3} del={"2. 这也是一个标签":4-7} ins={"3. 这是一个新标签":8-9}
#include <iostream>

using namespace std;

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;

}
```

### 7、代码块关键词高亮

在代码块的开头，可以使用`"<关键词>"`来指定关键词高亮。

源代码：

```
```cpp "std"
```

渲染效果：

```cpp title="HelloWorld.cpp" "std"
#include <iostream>
using namespace std;
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### 8、折叠代码块

在代码块的开头，可以使用`collap`属性来启用折叠功能。

源代码：

```
```cpp title="HelloWorld.cpp" collapse={1-2}
```

渲染效果：

```cpp title="HelloWorld.cpp" collapse={1-2}
#include <iostream>
using namespace std;
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

## 八、数学公式

源代码：

```
行内公式：$E = mc^2$

独立公式块：
$$
\begin{aligned}
\frac{\partial f}{\partial x} &= 2x + y \\
\frac{\partial f}{\partial y} &= x + 2y
\end{aligned}
$$

矩阵：
$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$
```

渲染效果：

行内公式：$E = mc^2$

独立公式块：
$$
\begin{aligned}
\frac{\partial f}{\partial x} &= 2x + y \\
\frac{\partial f}{\partial y} &= x + 2y
\end{aligned}
$$

矩阵：
$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

## 九、链接和图片

源代码：

```
[外部链接](https://www.laoaguntx.top)
[内部链接](/post/whyuseastro)
![图片描述](https://laoguantx.top/landscape/api.php)
```

渲染效果：

[外部链接](https://www.laoaguntx.top)

[内部链接](/posts/whyuseastro)

![图片描述](https://laoguantx.top/landscape/api.php)

## 十、使用组件

例如猜数字游戏：

源代码：
```
import GuessNumberGame from '...';
<GuessNumberGame client:load />
```

渲染效果：


import GuessNumberGame from '../../themes/Soak-laoguanTX/src/components/Mdx/GuessGame';

<GuessNumberGame client:load />

## 十一、脚注

源代码：

```
这是一个带有脚注的句子[^1]。
[^1]: 这是脚注的具体内容。
```

渲染效果：
这是一个带有脚注的句子[^1]。

[^1]: 这是脚注的具体内容。

## 十二、分割线

源代码：

使用三个或更多的星号（\*\*\*）、减号（---）或下划线（\_\_\_）：

```
***
---
___
```

渲染效果：

***

## 十三、HTML原生标签

源代码：

```
<details>
<summary>点击展开更多信息</summary>

这里是展开后显示的详细内容。
可以包含**Markdown**格式。

</details>

<kbd>Ctrl</kbd> + <kbd>C</kbd>
```

渲染效果：

<details>
<summary>点击展开更多信息</summary>

这里是展开后显示的详细内容。
可以包含**Markdown**格式。

</details>

<kbd>Ctrl</kbd> + <kbd>C</kbd>

## 十四、转义字符

源代码：

```
\* 星号
\` 反引号
\{ 花括号
\} 花括号
\[ 方括号
\] 方括号
\( 圆括号
\) 圆括号
\# 井号
\+ 加号
\- 减号
\. 点号
\! 感叹号
```

渲染效果：

\* 星号

\` 反引号

\{ 花括号

\} 花括号

\[ 方括号

\] 方括号

\( 圆括号

\) 圆括号

\# 井号

\+ 加号

\- 减号

\. 点号

\! 感叹号

