---
title: "平衡二叉树（Treap）"
published: 2024-09-29
category: ["程设计科", "算法与数据结构"]
tags: ["数据结构"]
alias: "treap"
---

二叉搜索树的插入、查找、删除等操作的效率与树高成正比，因此在创建二叉搜索树时要尽可能地通过调平衡压缩树高。平衡树有很多种，例如AVL树、Treap、伸展树（Splay）、SBT、红黑树等。

## Treap简介

### 特点与作用

Treap，即Tree+Heap，又叫做树堆，它同时满足了二叉搜索树和堆两种性质。二叉搜索树满足中序有序性，输入的序列不同，创建的二叉搜索树也不同，在最坏的情况下（比如只有左子树或者只有右子树），会退化为线性。

若一个二叉搜索树插入的节点顺序时随机的，则得到的二叉搜索树在大多情况下是平衡的，即使存在一些极端的情况但这种情况发生的概率很小，因此以随机顺序创建的二叉搜索树，其期望高度为$O(\log n)$。可以将输入的数据随机打乱，再创建二叉搜索树，但我们有时并不能事前得知所有待插入的节点，而Treap可以解决该问题。

### 基本结构

Treap是一种平衡二叉树，它给每个节点都附加了一个随机数，使其满足堆的性质，而节点的值又满足二叉搜索树的有序性，其基本操作的期望时间复杂度为$O(\log n)$相对于其他平衡二叉搜索树，Treap的特点是实现简单，而且可以基本实现随机平衡。

在Treap构建过程中，插入节点时会给每个节点都附加一个随机数作为优先级，该优先级满足堆的性质（最大堆或者最小堆均可，本文以最大堆为例，根的优先级大于左右子树的节点），数值满足二叉搜索树的性质（中序有序性，左子树大于根，右子树小于根）。

## Treap操作

### 左旋和右旋
Treap需要两种操作：左旋和右旋。

1. 右旋（$zig$）：节点$p$右旋时，会携带自己的右子树，向右旋转到$q$的右子树位置，$q$的右子树被抛弃，此时$p$右旋后左子树正好空闲，将$q$的右子树放在$p$的左子树位置，旋转后的树根为$q$。
2. 左旋（$zag$）：节点$p$左旋时，会携带自己的左子树，向左旋转到$q$的左子树位置，$q$的左子树被抛弃，此时$p$左旋后右子树正好空闲，将$q$的左子树放在$p$的右子树位置，旋转后的树根为$q$。

所以，无论是左旋还是右旋，旋转后总有一棵子树被抛弃，一个指针空闲，正好配对。

**右旋代码：**

```cpp
inline void zig(reg int &p)
{
	reg int q=tree[p].lc;
	tree[p].lc=tree[q].rc;
	tree[q].rc=p;
	tree[q].size=tree[p].size;
	Update(p);
	p=q;
	return;
}
```

**左旋代码：**

```cpp
inline void zag(reg int &p)
{
	reg int q=tree[p].rc;
	tree[p].rc=tree[q].lc;
	tree[q].lc=p;
	tree[q].size=tree[p].size;
	Update(p);
	p=q;
	return;
}
```

左旋右旋后，节点所对应的子树大小也会发生变化，需要更新每个节点更新后所对应的子树个数

**更新子树大小代码：**

```cpp
inline void Update(reg int p)
{
	tree[p].size=tree[tree[p].lc].size+tree[tree[p].rc].size+tree[p].num;
	return;
}
```

### 插入

Treap的插入操作与二叉搜索树一样，首先根据有序性找到插入的位置，然后创建节点插入该位置。其中每个点都会有一个随机值，该值为优先级，会自下向上检查这一棵树是否满足堆的性质，若不满足会进行左旋或者右旋的操作。

**新建节点代码：**

```cpp
inline int New(reg int val)
{
	tree[++cnt].val=val;
	tree[cnt].pri=rand();
	tree[cnt].num=tree[cnt].size=1;
	tree[cnt].rc=tree[cnt].lc=0;
	return cnt;
}
```

当我们要插入一个数时，从根节点$rt$出发，如果节点$p$为空，就直接创建新节点，将元素$val$作为根节点，并赋值一个随机数作为优先级，否则会进行下面三种判断：

1. 如果$val$的值小于当前节点$p$的值，就在它的左子树递归插入。回溯的时候根据优先级进行左旋或者右旋。
2. 如果$val$的值大于当前节点$p$的值，就在它的右子树递归插入。回溯的时候根据优先级进行左旋或者右旋。
3. 如果$val$的值等于当前节点$p$的值，就将当前节点的$num$的值加一，在这里$num$表示相同元素的数量。如果只要保留不重复的元素就什么也不做。

**插入代码：**

```cpp
inline void Insert(reg int &p,reg int val)
{
	if(!p)
	{
		p=New(val);
		return;
	}
	tree[p].size++;
	if(val==tree[p].val)
	{
		tree[p].num++;
		return;
	}
	else if(val<tree[p].val)
	{
		Insert(tree[p].lc,val);
		if(tree[p].pri<tree[tree[p].lc].pri)
			zig(p);
	}
	else 
	{
		Insert(tree[p].rc,val);
		if(tree[p].pri<tree[tree[p].rc].pri)
			zag(p);
	}
	return;
}
```

### 删除

首先找到删除的节点，将该节点向优先级大的子节点旋转，一直旋转到叶子，最后删除叶子。

具体来说，我们要删除一个元素$val$，首先从根节点开始，会出现下面的三种情况：

1. 如果$val$的值小于当前节点$p$的值，则在$p$的左子树中递归删除。
2. 如果$val$的值大于当前节点$p$的值，则在$p$的右子树中递归删除。
3. 如果$val$的值等与当前节点$p$的值，则：
   1. 若当前节点$p$只有左子树或者是右子树，就将当前节点$p$赋值为其儿子的状态，。
   2. 若当前节点$p$左儿子的优先级大于右儿子的优先级，则$p$左旋。继续在右子树中递归删除。
   3. 若当前节点$p$左儿子的优先级小于右儿子的优先级，则$p$右旋。继续在左子树中递归删除。

**代码：**

```cpp
inline void Delete(reg int &p,reg int val)
{
	if(!p)
		return;
	tree[p].size--;
	if(val==tree[p].val)
	{
		if(tree[p].num>1)
		{
			tree[p].num--;
			return;
		}
		if(!tree[p].lc||!tree[p].rc)
			p=tree[p].lc+tree[p].rc;
		else if(tree[tree[p].lc].pri>tree[tree[p].rc].pri)
		{
			zig(p);
			Delete(tree[p].rc,val);
		}
		else
		{
			zag(p);
			Delete(tree[p].lc,val);
		}
		return;
	}
	if(val<tree[p].val)
		Delete(tree[p].lc,val);
	else
		Delete(tree[p].rc,val);
	return;
}
```

### 前驱与后继

首先理解什么是前驱、后继：

- 前驱结点：节点$val$值小于该节点$val$值并且值最大的节点 

- 后继节点：节点$val$值大于该节点$val$值并且值最小的节点

在Treap中求一个节点$val$的前驱时，首先从树根开始，若当前节点的值小于$val$，则用变量$res$暂存该节点的值，在当前节点的右子树中寻找，否则在当前节点的左子树中寻找，直到当前节点为空，范围$res$，即为$val$的前驱。

在Treap中求一个节点$val$的后继时，首先从树根开始，若当前节点的值大于$val$，则用变量$res$暂存该节点的值，在当前节点的左子树中寻找，否则在当前节点的右子树中寻找，直到当前节点为空，返回$res$，即为$val$的后继。

**求前驱代码：**

```cpp
inline int GetPre(reg int val)
{
	reg int p=rt;
	reg int res=0;
	while(p)
	{
		if(tree[p].val<val)
		{
			res=tree[p].val;
			p=tree[p].rc;
		}
		else
			p=tree[p].lc;
	}
	return res;
}
```

**求后继代码：**

```cpp
inline int GetNext(reg int val)
{
	reg int p=rt;
	reg int res=0;
	while(p)
	{
		if(tree[p].val>val)
		{
			res=tree[p].val;
			p=tree[p].lc;
		}
		else
			p=tree[p].rc;
	}
	return res;
}
```

### 根据$val$查找排名

从树根出发，如果当前要查找的$val$值大于当前节点$p$的值，就向右递归搜索，将答案加上当前节点$p$左儿子的子树大小与当前节点$p$的元素个数。如果当前要查找的$val$值小于当前节点$p$的值，就向左递归搜索。如果两个值相等，就返回当前节点$p$的左儿子子树大小$+1$。

**代码：**

```cpp
inline int GetRankByVal(reg int p,reg int val)
{
	if(!p)
		return 1;
	if(tree[p].val==val)
		return tree[tree[p].lc].size+1;
	if(val<tree[p].val)
		return GetRankByVal(tree[p].lc,val);
	else
		return GetRankByVal(tree[p].rc,val)+tree[tree[p].lc].size+tree[p].num;
		
}
```

### 根据排名查找$val$值

从树根出发，如果当前要查找的排名$rank$小于当前节点$p$左子树大小，就向左子树递归搜索。如果当前要查找的排名$rank$小于等于当前节点p的左子树的大小与当前节点$p$的元素数量之和，就返回当前节点的$val$值。如果当前要查找的排名$rank$大于当前节点$p$的左子树大小与当前节点$p$的元素数量之和，就向右子树递归搜索，此时搜索的$rank$值要减去当前节点$p$的左子树大小和当前节点$p$的元素数量和。

**代码：**

```cpp
inline int GetValByRank(reg int p,reg int rank)
{
	if(!p)
		return 0;
	if(tree[tree[p].lc].size>=rank)
		return GetValByRank(tree[p].lc,rank);
	if(tree[tree[p].lc].size+tree[p].num>=rank)
		return tree[p].val;
	return GetValByRank(tree[p].rc,rank-tree[tree[p].lc].size-tree[p].num);
}
```

---

## 代码

来源：洛谷：[P3369 【模板】普通平衡树](https://www.luogu.com.cn/problem/P3369)、**洛谷：[P6136 【模板】普通平衡树（数据加强版）](https://www.luogu.com.cn/problem/P6136)**

```cpp
#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<algorithm>
#include<cstring>
#include<cmath>
#include<vector>
#include<queue>
#include<map>
#include<set>
#include<ctime>
using namespace std;
#define LL long long
#define uLL unsigned long long
#define reg register
#define PI acos(-1.0)
#define pb(x) push_back(x)
#define mp(a,b) make_pair(a,b)
#define fi first
#define se second
#define pr(x) cerr<<#x<<"="<<(x)<<endl
#define pri(x,lo) {cerr<<#x<<"={";for (int ol=0;ol<=lo;ol++)cerr<<x[ol]<<",";cerr<<"}"<<endl;}
#define inf 100000000
#define N 1000
#define M 4000001
template<class T>inline void read(T &x)
{
    x=0;register char c=getchar();register bool f=0;
    while(!isdigit(c))f^=c=='-',c=getchar();
    while(isdigit(c))x=(x<<3)+(x<<1)+(c^48),c=getchar();
    if(f)x=-x;
}
template<class T>inline void print(T x)
{
    if(x<0)putchar('-'),x=-x;
    if(x>9)print(x/10);
    putchar('0'+x%10);
}
struct Node
{
	int lc,rc,val,pri,num,size;
}tree[M];
int cnt,rt,n,m,Last,ans;
inline int New(reg int val)
{
	tree[++cnt].val=val;
	tree[cnt].pri=rand();
	tree[cnt].num=tree[cnt].size=1;
	tree[cnt].rc=tree[cnt].lc=0;
	return cnt;
}
inline void Update(reg int p)
{
	tree[p].size=tree[tree[p].lc].size+tree[tree[p].rc].size+tree[p].num;
	return;
}
inline void zig(reg int &p)
{
	reg int q=tree[p].lc;
	tree[p].lc=tree[q].rc;
	tree[q].rc=p;
	tree[q].size=tree[p].size;
	Update(p);
	p=q;
	return;
}
inline void zag(reg int &p)
{
	reg int q=tree[p].rc;
	tree[p].rc=tree[q].lc;
	tree[q].lc=p;
	tree[q].size=tree[p].size;
	Update(p);
	p=q;
	return;
}
inline void Insert(reg int &p,reg int val)
{
	if(!p)
	{
		p=New(val);
		return;
	}
	tree[p].size++;
	if(val==tree[p].val)
	{
		tree[p].num++;
		return;
	}
	else if(val<tree[p].val)
	{
		Insert(tree[p].lc,val);
		if(tree[p].pri<tree[tree[p].lc].pri)
			zig(p);
	}
	else 
	{
		Insert(tree[p].rc,val);
		if(tree[p].pri<tree[tree[p].rc].pri)
			zag(p);
	}
	return;
}
inline void Delete(reg int &p,reg int val)
{
	if(!p)
		return;
	tree[p].size--;
	if(val==tree[p].val)
	{
		if(tree[p].num>1)
		{
			tree[p].num--;
			return;
		}
		if(!tree[p].lc||!tree[p].rc)
			p=tree[p].lc+tree[p].rc;
		else if(tree[tree[p].lc].pri>tree[tree[p].rc].pri)
		{
			zig(p);
			Delete(tree[p].rc,val);
		}
		else
		{
			zag(p);
			Delete(tree[p].lc,val);
		}
		return;
	}
	if(val<tree[p].val)
		Delete(tree[p].lc,val);
	else
		Delete(tree[p].rc,val);
	return;
}
inline int GetPre(reg int val)
{
	reg int p=rt;
	reg int res=0;
	while(p)
	{
		if(tree[p].val<val)
		{
			res=tree[p].val;
			p=tree[p].rc;
		}
		else
			p=tree[p].lc;
	}
	return res;
}
inline int GetNext(reg int val)
{
	reg int p=rt;
	reg int res=0;
	while(p)
	{
		if(tree[p].val>val)
		{
			res=tree[p].val;
			p=tree[p].lc;
		}
		else
			p=tree[p].rc;
	}
	return res;
}
inline int GetRankByVal(reg int p,reg int val)
{
	if(!p)
		return 1;
	if(tree[p].val==val)
		return tree[tree[p].lc].size+1;
	if(val<tree[p].val)
		return GetRankByVal(tree[p].lc,val);
	else
		return GetRankByVal(tree[p].rc,val)+tree[tree[p].lc].size+tree[p].num;
		
}
inline int GetValByRank(reg int p,reg int rank)
{
	if(!p)
		return 0;
	if(tree[tree[p].lc].size>=rank)
		return GetValByRank(tree[p].lc,rank);
	if(tree[tree[p].lc].size+tree[p].num>=rank)
		return tree[p].val;
	return GetValByRank(tree[p].rc,rank-tree[tree[p].lc].size-tree[p].num);
}
int main()
{
	srand(time(NULL));
	read(n),read(m);
	for(int i=1;i<=n;i++)
	{
		reg int a;
		read(a);
		Insert(rt,a);
	}
	for(reg int i=1;i<=m;i++)
	{
		reg int opt,x;
		read(opt),read(x);
		x^=Last;
		if(opt==1)	Insert(rt,x);
		else if(opt==2)	Delete(rt,x);
		else if(opt==3)	{Last=GetRankByVal(rt,x);ans^=Last;}
		else if(opt==4)	{Last=GetValByRank(rt,x);ans^=Last;}
		else if(opt==5)	{Last=GetPre(x);ans^=Last;}
		else if(opt==6)	{Last=GetNext(x);ans^=Last;}
	}
	printf("%d",ans);
	return 0;
}
```



