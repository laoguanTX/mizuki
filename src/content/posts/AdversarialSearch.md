---
title: 对抗搜索
published: 2025-11-10
category: ["程设计科", "人工智能"]
tags: ["人工智能"]
alias: "adversarialsearch"
---
## 一、引言

### 1、为什么需要对抗搜索

在过去，我们讨论的搜索问题都发生在一个“静态”或“可预测”的环境中。例如，在路径规划问题中，从城市A到城市B的道路成本是固定的，环境不会主动与我们作对。然而，在许多现实世界的问题中，我们必须面对一个或多个会做出反应、并试图阻碍我们达成目标的对手。这类问题被称为对抗搜索问题，最典型的例子就是博弈，如棋类游戏。

在这些博弈环境中，我们的每一个决策不仅取决于我们自己的目标，还必 须考虑到对手的可能反应。对手的目标通常与我们的目标相反。例如，在二人零和游戏中，一方的收益就是另一方的损失。

本文将探讨在这种对抗性环境中进行决策的算法。我们将从最基础的Minimax（极小化极大）算法入手，它构成了所有对抗搜索算法的理论基石。然后，我们将介绍对其进行优化的Alpha-Beta剪枝技术，这是在实践中应用最为广泛的算法。

### 2、博弈的形式化定义

一个博弈可以被形式化地定义为以下几个组成部分：

1.  初始状态：博弈开始时的布局，记为 $S_0$。
2.  玩家：定义了轮到哪个玩家行动的函数，例如 `PLAYER(s)` 返回在状态 $s$ 下行动的玩家。我们通常考虑两个玩家，分别称为 MAX（我方，试图最大化分数）和 MIN（对手，试图最小化分数）。
3.  行动：返回在状态 $s$ 下所有合法行动的集合，记为 `ACTIONS(s)`。
4.  转移模型：定义了执行一个行动后状态的变化，记为 `RESULT(s, a)`，返回从状态 $s$ 执行行动 $a$ 后的新状态。
5.  终止测试：判断一个状态 $s$ 是否为博弈的终止状态，记为 `TERMINAL-TEST(s)`。
6.  效用函数：也称为收益函数（Payoff Function），它只对终止状态定义。`UTILITY(s)` 返回博弈在终止状态 $s$ 时的数值分数。对于MAX玩家来说，分数越高越好；对于MIN玩家，分数越低越好。

对抗搜索的目标是，给定当前状态，找到一个能导向最优结果的行动，这个“最优结果”是在假设对手也会采取最优行动的前提下得到的。

## 二、Minimax 算法

Minimax算法是解决二人零和博弈问题的基础算法。它的核心思想是：假设对手的每一步行动都是为了使你的得分最小化，而你的每一步行动都是为了使你的最终得分最大化。

### 1、核心思想

想象一下你正在下棋。你即将走出一步，你面前有几种选择。对于你的每一种选择，你的对手又会有几种回应。如此往复，直到棋局结束分出胜负。

Minimax算法正是模拟了这个向前看的思考过程。它会生成一棵博弈树，其中：
*   节点：代表博弈的状态。
*   边：代表合法的行动。
*   树根：是当前的博弈状态。
*   叶节点：是博弈的终止状态。

算法的目标是为根节点（当前状态）的所有子节点（即所有可能的下一步行动）计算一个“Minimax值”。这个值代表了从该子节点出发，双方都采取最优策略后，最终能达到的效用。然后，MAX玩家（我方）只需选择那个Minimax值最大的子节点对应的行动即可。

这个Minimax值是如何计算的呢？
*   对于一个终止状态（叶节点），其Minimax值就是该状态的效用。
*   对于一个MAX节点（轮到我方行动），其Minimax值是其所有子节点的Minimax值中的最大值。因为MAX玩家会选择对自己最有利的后续状态。
*   对于一个MIN节点（轮到对手行动），其Minimax值是其所有子节点的Minimax值中的最小值。因为MIN玩家会选择对MAX玩家最不利的后续状态。

这个过程是一个从叶节点向根节点递归计算的过程。

### 2、算法定义与伪代码

Minimax值可以被递归地定义如下：

$$
\mathrm{MinimaxValue}(s) = 
\begin{cases} 
\mathrm{UTILITY}(s) & \text{if } \mathrm{TERMINAL-TEST}(s) \\
\max_{a \in \mathrm{ACTIONS}(s)} \{ \mathrm{MinimaxValue}(\mathrm{RESULT}(s, a)) \} & \text{if } \mathrm{PLAYER}(s) = \mathrm{MAX} \\
\min_{a \in \mathrm{ACTIONS}(s)} \{ \mathrm{MinimaxValue}(\mathrm{RESULT}(s, a)) \} & \text{if } \mathrm{PLAYER}(s) = \mathrm{MIN}
\end{cases}
$$

定义主决策函数 `MINIMAX-DECISION`表示该函数在当前状态 $s$ 下，选择能够产生最大Minimax值的行动。

$$
\mathrm{MINIMAX-DECISION}(s) = \arg\max_{a \in \mathrm{ACTIONS}(s)} \{ \mathrm{MinimaxValue}(\mathrm{RESULT}(s, a)) \}
$$

递归函数的伪代码如下：

**Function** `MINIMAX-VALUE(state)`:

1.  **IF** `TERMINAL-TEST(state)` **THEN**
2.      **RETURN** `UTILITY(state)`
3.  **IF** `PLAYER(state)` is `MAX` **THEN**
4.      `v` $\leftarrow -\infty$
5.      **FOR EACH** `action` in `ACTIONS(state)` **DO**
6.          `v` $\leftarrow \max(v, \text{MINIMAX-VALUE}(\text{RESULT(state, action)}))$
7.      **RETURN** `v`
8.  **ELSE** (`PLAYER(state)` is `MIN`)
9.      `v` $\leftarrow +\infty$
10.     **FOR EACH** `action` in `ACTIONS(state)` **DO**
11.         `v` $\leftarrow \min(v, \text{MINIMAX-VALUE}(\text{RESULT(state, action)}))$
12.     **RETURN** `v`

### 3、详细示例

假设我们有一棵博弈树，搜索深度为$2$。根节点 A 是一个MAX节点。其子节点 B、C、D 是MIN节点。再下一层的叶节点是终止状态，其效用值已知（分数越高对MAX越有利）。

**博弈树结构**：
```
      A (MAX)
      / | \
     /  |  \
    B   C   D  (MIN)
   / \ / \ / \
  E  F G  H I  J
```
**叶节点的效用值**：
*   `UTILITY(E) = 3`
*   `UTILITY(F) = 12`
*   `UTILITY(G) = 8`
*   `UTILITY(H) = 2`
*   `UTILITY(I) = 4`
*   `UTILITY(J) = 6`

**Minimax值计算过程（自底向上）**：

1.  **处理MIN节点 B**：
    *   B 的子节点是 E 和 F。
    *   $\mathrm{MinimaxValue}(B) = \min(\mathrm{MinimaxValue}(E), \mathrm{MinimaxValue}(F))$
    *   因为 E 和 F 是叶节点，其Minimax值就是其效用值。
    *   $\mathrm{MinimaxValue}(B) = \min(\mathrm{UTILITY}(E), \mathrm{UTILITY}(F)) = \min(3, 12) = 3$
    *   这意味着，如果MAX选择了行动导致状态B，理性的MIN玩家会选择行动导向状态E，从而让MAX的最终得分是3。

2.  **处理MIN节点 C**：
    *   C 的子节点是 G 和 H。
    *   $\mathrm{MinimaxValue}(C) = \min(\mathrm{MinimaxValue}(G), \mathrm{MinimaxValue}(H))$
    *   $\mathrm{MinimaxValue}(C) = \min(\mathrm{UTILITY}(G), \mathrm{UTILITY}(H)) = \min(8, 2) = 2$

3.  **处理MIN节点 D**：
    *   D 的子节点是 I 和 J。
    *   $\mathrm{MinimaxValue}(D) = \min(\mathrm{MinimaxValue}(I), \mathrm{MinimaxValue}(J))$
    *   $\mathrm{MinimaxValue}(D) = \min(\mathrm{UTILITY}(I), \mathrm{UTILITY}(J)) = \min(4, 6) = 4$

4.  **处理MAX节点 A（根节点）**：
    *   现在我们已经计算出 A 的所有子节点的Minimax值。
    *   $\mathrm{MinimaxValue}(A) = \max(\mathrm{MinimaxValue}(B), \mathrm{MinimaxValue}(C), \mathrm{MinimaxValue}(D))$
    *   $\mathrm{MinimaxValue}(A) = \max(3, 2, 4) = 4$

**最终决策**：根节点 A 的Minimax值是$4$。这个值是通过选择子节点 D 得到的。因此，`MINIMAX-DECISION` 会返回导致状态 D 的那个行动。

这个结果的含义是，在当前状态 A，MAX玩家的最佳选择是执行导向状态 D 的行动。因为即使对手（MIN）做出对他最有利的选择（导向状态I，值为$4$），MAX玩家也能确保自己至少能得到$4$分。如果MAX玩家选择了导向B的行动，对手会让其只得$3$分；如果选择导向C的行动，对手会让其只得$2$分。所以，选择D是当前状态下的最优策略。

### 4、现实中的挑战与评估函数

在真实的复杂博弈（如国际象棋）中，博弈树极其庞大，我们不可能搜索到所有的终止状态。例如，国际象棋的平均分支因子 $b \approx 35$，一局棋平均步数 $m \approx 100$，完整的博弈树包含约 $35^{100}$ 个节点，这是一个天文数字。

为了解决这个问题，我们引入了有限深度搜索：
1.  设定一个最大搜索深度 $d_{max}$。
2.  将深度达到 $d_{max}$ 的节点视为“叶节点”，即使它们不是真正的终止状态。
3.  引入一个评估函数（Evaluation Function），记为 `EVAL(s)`，来估计在非终止状态 $s$ 下，局面对MAX玩家的有利程度。

评估函数 `EVAL(s)` 扮演了效用函数 `UTILITY(s)` 在截断点（cutoff）的角色。一个好的评估函数应该：
*   在终止状态时，其值等于效用函数的值。
*   计算速度快。
*   能够准确反映当前局面的优劣势。

例如，在国际象棋中，一个简单的评估函数可以是：
$$
\mathrm{EVAL}(s) = w_1 \times (\text{我方棋子价值} - \text{对方棋子价值}) + w_2 \times (\text{我方控制力} - \text{对方控制力}) + \dots
$$
其中 $w_i$ 是不同特征的权重。

修改后的Minimax算法定义为：
$$
\mathrm{Cutoff-MinimaxValue}(s, d) = 
\begin{cases} 
\mathrm{EVAL}(s) & \text{if } d = d_{max} \text{ or } \mathrm{TERMINAL-TEST}(s) \\
\max_{a \in \mathrm{ACTIONS}(s)} \{ \mathrm{Cutoff-MinimaxValue}(\mathrm{RESULT}(s, a), d+1) \} & \text{if } \mathrm{PLAYER}(s) = \mathrm{MAX} \\
\min_{a \in \mathrm{ACTIONS}(s)} \{ \mathrm{Cutoff-MinimaxValue}(\mathrm{RESULT}(s, a), d+1) \} & \text{if } \mathrm{PLAYER}(s) = \mathrm{MIN}
\end{cases}
$$

## 三、Alpha-Beta 剪枝 (Alpha-Beta Pruning)

### 1、核心思想

Minimax 算法通过穷尽搜索博弈树来找到最优的行动，但其 $O(b^m)$ 的时间复杂度在面对复杂博弈时显得力不从心。仔细观察 Minimax 的决策过程，我们会发现一个现象：在很多情况下，我们根本不需要评估博弈树的每一个节点就能做出同样的决策。

例如，假设你正在考虑一个行动 A，你推演后发现，在最好的情况下，这个行动能让你得到 $10$ 分。然后你开始考虑另一个行动 B，在推演过程中，你发现对手有一个回应，能让你最多只得到 $5$ 分。此时，你还需要继续推演行动 B 的其他可能性吗？不需要了。因为无论对手如何回应，行动 B 的收益上限已经是 $5$ 分，这已经劣于行动 A 所能保证的 $10$ 分。因此，行动 B 之后的所有分支都可以被安全地“剪掉”。

Alpha-Beta 剪枝就是将这种直观的推理系统化、形式化的算法。它在执行 Minimax 搜索的过程中，通过维护两个边界值——Alpha ($\alpha$) 和 Beta ($\beta$)，来判断一个节点下的子树是否值得继续探索。通过剪枝，Alpha-Beta 算法可以在不改变 Minimax 决策结果的前提下，显著减少需要访问的节点数量，从而大幅提升搜索效率。

### 2、Alpha 和 Beta 的含义

Alpha-Beta 剪枝的核心在于传递两个值，$\alpha$ 和 $\beta$：

*   $\alpha$ (Alpha)：MAX 玩家（我方）在当前路径上已经找到的最好选择（能确保的最低得分）。
    *   $\alpha$ 值在搜索过程中只会增加或保持不变。
    *   初始值为 $-\infty$。
    *   对于 MAX 节点，它会用其子节点返回的值来更新自己。
    *   对于 MIN 节点，它只是将父节点传来的 $\alpha$ 值继续向下传递。

*   $\beta$ (Beta)：MIN 玩家（对手）在当前路径上已经找到的最好选择（能施加给 MAX 的最高得分上限）。
    *   $\beta$ 值在搜索过程中只会减小或保持不变。
    *   初始值为 $+\infty$。
    *   对于 MIN 节点，它会用其子节点返回的值来更新自己。
    *   对于 MAX 节点，它只是将父节点传来的 $\beta$ 值继续向下传递。

搜索过程中的关键判断是比较 $\alpha$ 和 $\beta$ 的值。当 $\alpha \ge \beta$ 时，剪枝发生。

*   在 MIN 节点处剪枝： 如果一个 MIN 节点的子节点返回的值 $v$ 使得 $v \le \alpha$，那么这个 MIN 节点的分支可以被剪掉。因为 MIN 玩家的目标是让分数更低，它已经找到了一个可以让 MAX 得分低至 $v$ 的选择。而 MAX 玩家在更高层的某个祖先节点处已经有了一个保底分数为 $\alpha$ 的选择了。既然 $v \le \alpha$，MAX 玩家绝不会走上通往这个 MIN 节点的路径。因此，该 MIN 节点的其他子节点无需再探索。

*   在 MAX 节点处剪枝：如果一个 MAX 节点的子节点返回的值 $v$ 使得 $v \ge \beta$，那么这个 MAX 节点的分支可以被剪掉。因为 MAX 玩家的目标是让分数更高，它已经找到了一个能让自己的得分达到 $v$ 的选择。而 MIN 玩家在更高层的某个祖先节点处已经有了一个能将 MAX 得分限制在 $\beta$ 以下的选择了。既然 $v \ge \beta$，MIN 玩家绝不会让 MAX 玩家走上通往这个 MAX 节点的路径。因此，该 MAX 节点的其他子节点无需再探索。

### 3、算法伪代码

Alpha-Beta 算法通过修改 Minimax 的递归函数来实现，将 $\alpha$ 和 $\beta$ 作为参数传递。

**Function** `ALPHA-BETA-SEARCH(state)`:

1.  `v` $\leftarrow$ `MAX-VALUE(state, -∞, +∞)`
2.  **RETURN** the action in `ACTIONS(state)` with value `v`

**Function** `MAX-VALUE(state, α, β)`:
1.  **IF** `TERMINAL-TEST(state)` **THEN RETURN** `UTILITY(state)`
2.  `v` $\leftarrow -\infty$
3.  **FOR EACH** `action` in `ACTIONS(state)` **DO**
4.      `v` $\leftarrow \max(v, \text{MIN-VALUE}(\text{RESULT(state, action)}, \alpha, \beta))$
5.      **IF** $v \ge \beta$ **THEN RETURN** `v`  (*Beta 剪枝*)
6.      $\alpha \leftarrow \max(\alpha, v)$
7.  **RETURN** `v`

**Function** `MIN-VALUE(state, α, β)`:
1.  **IF** `TERMINAL-TEST(state)` **THEN RETURN** `UTILITY(state)`
2.  `v` $\leftarrow +\infty$
3.  **FOR EACH** `action` in `ACTIONS(state)` **DO**
4.      `v` $\leftarrow \min(v, \text{MAX-VALUE}(\text{RESULT(state, action)}, \alpha, \beta))$
5.      **IF** $v \le \alpha$ **THEN RETURN** `v`  (*Alpha 剪枝*)
6.      $\beta \leftarrow \min(\beta, v)$
7.  **RETURN** `v`

### 4、详细示例

我们使用博弈树，并逐步演示 Alpha-Beta 剪枝的搜索过程。搜索顺序为深度优先，从左到右。

**初始状态：**
在根节点 A 调用 `MAX-VALUE(A, -∞, +∞)`。

1.  **A $(MAX, α=-∞, β=+∞)$:**
    *   探索第一个子节点 B。调用 `MIN-VALUE(B, -∞, +∞)`。

2.  **B $(MIN, α=-∞, β=+∞)$:**
    *   探索第一个子节点 E。E 是叶节点，返回效用值 3。
    *   在 B 中，`v` 更新为 $\min(+\infty, 3) = 3$。
    *   B 更新自己的 $\beta$ 值：$\beta \leftarrow \min(+\infty, 3) = 3$。
    *   此时 B 的状态是 (α=-∞, β=3)。剪枝条件 $v \le \alpha$ (即 $3 \le -\infty$) 不满足。
    *   探索第二个子节点 F。F 是叶节点，返回效用值 12。
    *   在 B 中，`v` 更新为 $\min(3, 12) = 3$。
    *   B 更新自己的 $\beta$ 值：$\beta \leftarrow \min(3, 12) = 3$。
    *   B 的所有子节点都已探索完毕。B 向其父节点 A 返回最终的 `v` 值：**3**。

3.  **A $(MAX, α=-∞, β=+∞) -> (α=3, β=+∞)$:**
    *   A 收到来自 B 的返回值 3。
    *   A 更新自己的 `v` 值：`v` $\leftarrow \max(-\infty, 3) = 3$。
    *   A 更新自己的 $\alpha$ 值：$\alpha \leftarrow \max(-\infty, 3) = 3$。
    *   此时 A 的状态是 (α=3, β=+∞)。剪枝条件 $v \ge \beta$ (即 $3 \ge +\infty$) 不满足。
    *   探索第二个子节点 C。调用 `MIN-VALUE(C, 3, +∞)`。**注意，A 的 $\alpha$ 值被传递下去了**

4.  **C $(MIN, α=3, β=+∞)$:**
    *   探索第一个子节点 G。G 是叶节点，返回效用值 8。
    *   在 C 中，`v` 更新为 $\min(+\infty, 8) = 8$。
    *   C 更新自己的 $\beta$ 值：$\beta \leftarrow \min(+\infty, 8) = 8$。
    *   此时 C 的状态是 (α=3, β=8)。剪枝条件 $v \le \alpha$ (即 $8 \le 3$) 不满足。
    *   探索第二个子节点 H。H 是叶节点，返回效用值 2。
    *   在 C 中，`v` 更新为 $\min(8, 2) = 2$。
    *   **剪枝判断：** 检查 $v \le \alpha$ 是否成立。即 $2 \le 3$。**条件成立**
    *   **发生 Alpha 剪枝！** MIN 节点 C 立即停止探索其剩余的子节点（虽然这里没有了），并向其父节点 A 返回当前的 `v` 值：**2**。
    *   **剪枝的逻辑：** 在 C 节点，MIN 玩家已经找到了一个方法（走 H）能把 MAX 的得分压到 2。而 MAX 玩家在 A 节点已经有一个保底选择（走 B），能确保得到 3 分。因此，MAX 玩家永远不会选择走 C 这条路，因为这最多只能得到 2 分。所以，C 后续还有什么棋步已经无关紧要了。

5.  **A $(MAX, α=3, β=+∞)$:**
    *   A 收到来自 C 的返回值 $2$。
    *   A 更新自己的 `v` 值：`v` $\leftarrow \max(3, 2) = 3$。
    *   A 更新自己的 $\alpha$ 值：$\alpha \leftarrow \max(3, 3) = 3$。
    *   此时 A 的状态仍是 (α=3, β=+∞)。
    *   探索第三个子节点 D。调用 `MIN-VALUE(D, 3, +∞)`。

6.  **D$ (MIN, α=3, β=+∞)$:**
    *   探索第一个子节点 I。I 是叶节点，返回效用值 4。
    *   在 D 中，`v` 更新为 $\min(+\infty, 4) = 4$。
    *   D 更新自己的 $\beta$ 值：$\beta \leftarrow \min(+\infty, 4) = 4$。
    *   此时 D 的状态是 (α=3, β=4)。剪枝条件 $v \le \alpha$ (即 $4 \le 3$) 不满足。
    *   探索第二个子节点 J。J 是叶节点，返回效用值 6。
    *   在 D 中，`v` 更新为 $\min(4, 6) = 4$。
    *   D 更新自己的 $\beta$ 值：$\beta \leftarrow \min(4, 6) = 4$。
    *   D 的所有子节点都已探索完毕。D 向其父节点 A 返回最终的 `v` 值：**4**。

7.  **A$ (MAX, α=3, β=+∞) -> (α=4, β=+∞)$:**
    *   A 收到来自 D 的返回值 4。
    *   A 更新自己的 `v` 值：`v` $\leftarrow \max(3, 4) = 4$。
    *   A 更新自己的 $\alpha$ 值：$\alpha \leftarrow \max(3, 4) = 4$。
    *   A 的所有子节点都已探索完毕。A 返回最终的 `v` 值：**4**。

**最终决策**：Alpha-Beta 搜索返回的根节点值是 4，与 Minimax 算法的结果完全一致。但是，在这个例子中，我们通过剪枝避免了对某些节点的评估（虽然这个小例子中剪枝效果不明显，但在更深的树中效果显著）。
