---
title: "可持久化线段树"
published: 2024-09-29
category: ["程设计科", "算法与数据结构"]
tags: ["数据结构"]
alias: "persistentsegmentstree"
---


[card title="主席树" color="info"]主席树，又叫可持久化权值线段树，也叫函数式线段树，是可持久化线段树的子集。在本文中，我们可以认为主席树等于可持久化线段树[/card]



## 可持久化线段树简介

基本结构、特点、作用在这篇文章中已经提到过：[线段树扩展：权值线段树](http://www.laoguantx.top/线段树扩展：权值线段树/.html)

总的来说就是每次修改或插入一个值，就新建一个根节点，并且向下递归去新建其他节点。

### 优点解释

每次插入操作最多创建的节点数都为$\log n$（从根到叶子），一共执行了$n$次插入操作，可持久化线段树的节点总数为$n \log n$，而$n$棵单独的线段树的总节点数是$n^2$，很明显，可持久化线段树通过重用减少了很多节点。同时，可以查询每个历史版本，查询每个历史版本，查询插入第$3$个元素后的线段树，只需要找到第$3$棵树的树根即可。

---

## 可持久化线段树基本操作

### 数据离散化

因为权值线段树的节点范围是一个值域，因此在值域非常大的时候需要进行离散化处理。

离散化过程很简单，先将a[]中的元素复制一份到$b[]$，再将$b[]$中所有数字排序（$sort$），去重（$unique$），最后使用<code>lower_bound()</code>将原序列转换为去重后序列的下标即可。

### 建立

创建可持久化线段树的过程，相当于把$a[]$中的每个元素都离散化为下标，将该下标插入主席树中。

```cpp
for(int i=1;i<=n;i++)
{
    update(rt[i],rt[i-1],1,tot,lower_bound(b+1,b+tot+1,a[i])-b);
}
```

这里的$update$函数是插入函数，具体操作在下一板块，先了解一下每个参数所表示的意思。其中$rt[i]$表示当前版本（第$i$棵树）的树根，$rt[i-1]$为前一版本（第$i-1$棵树）的树根，$tot$为离散化后的元素个数，<code>lower_bound(b+1,b+tot+1,a[i])-b</code>是将$a[i]$离散化后的下标。

因为这里我们用了前缀和的思想，所以$tr[0]$是一棵空树，所以我们可以不去建树。

### 插入操作

#### 简单叙述

插入元素时，只需要创建更新的节点，对无须更新的节点重用上一个版本（注意：不可对历史版本进行修改）。

例如，原序列$a[]=\{12,5,15,8,12,20,12,15\}$，利用插入操作创建主席树，排序去重后，$b[]=\{5,8,12,15,20\}$，元素个数$tot=5$。原序列$a[]$的第$1$个元素为$12$，对应的$b[]$的下标为$3$；第$2$个元素为$5$，对应的下标为$1$，以此类推。最终离散化后的原序列对应的$b[]$的下标序列为$\{3,1,4,2,3,5,3,4\}$，将该序列插入主席树中。

#### 具体过程

1. 插入元素$3$。复制上一版本$rt[1]=rt[0]$，树根区间为$[1,5]$，权值加$1$，$mid=\frac{1+5}{2}=3$，这里$mid \le 3$，将其插入左子树中；复制上一个版本的节点$[1,3]$，权值加$1$，$mid= \frac{1+3}{2} = 2$，这里$mid<3$，将其加入左子树中，复制上一个版本的节点$[1,2]$，权值加$1$。此时已经加到了叶子节点，处理完毕。

   <img src="http://www.laoguantx.top/wp-content/uploads/2021/11/权值线段树1-3.png">

2. 插入元素$1$。复制上一版本$rt[2]=rt[1]$，权值加$1$，$mid= \frac{1+5}{2} = 3$，这里$1 \le mid$，将其插入左子树；复制上一版本的节点$[1,3]$，权值加$1$，$mid= \frac{1+3}{2}=1$，$1 \le mid$，将其插入左子树；复制上一版本的节点$[1,2]$，权值加$1$，$mid= \frac{1+2}{2}=1$，$1 \le mid$，将其插入左子树；复制上次版本的节点$[1,1]$，权值加$1$.此时已经加到了叶子节点，处理完毕。

   <img src="http://www.laoguantx.top/wp-content/uploads/2021/11/权值线段树1-4.png">

```cpp
void update(int &i,int j,int l,int r,int k)
{
	i=++cnt;
	tree[i]=tree[j];
	tree[i].num++;
	if(l==r)
		return;
	int mid=(l+r)>>1;
	if(k<=mid)
		update(tree[i].lc,tree[j].lc,l,mid,k);
	else
		update(tree[i].rc,tree[j].rc,mid+1,r,k);
	return;
}
```

其中$i$表示当前版本的父亲节点，$j$表示上一版本的父亲节点，$l$表示当前区间左端点，$r$表示当前区间右端点，$k$表示要插入的值。

---

## 可持久化线段树应用

### 求区间第$k$小的数

#### 原理

在可持久化线段树中，有相同值域的节点有可减性。

- 以$rt[i-1]$为根的线段树，其权值表示序列$[1,i-1]$有有多少个数落入了$[l,r]$区间。
- 以$rt[j]$为根的线段树，其权值表示序列$[1,j]$有多少个数落入了$[l,r]$区间。

两棵线段树的值域划分是相同的，即两棵线段树中的节点是一一对应的。有相同值域的节点有可减性。$rt[j]$的权值减去$rt[i]$的权值等于序列$[i,j]$有多少个数落入值域$[l,r]$区间。

查询[i,j]区间第k小元素的时候，只需要将$rt[j]$和$rt[i-1]$两棵线段树的权值相减，就可以得到一棵$[i,j]$区间对应的线段树，然后在该线段树上搜索即可。

#### 步骤

当我要查询区间$[i,j]$的第$k$小的数，从树根$rt[j]$和$rt[i-1]$开始，若<code>l==r</code>，则返回$k$；将当前两个节点的左子树权值相减得到$s$，如果$k \le s$，则在左子树中查找第$k$小，否则在右子树中查找第$k-s$小。

```cpp
int search(int i,int j,int l,int r,int k)
{
	if(l==r)
		return l;
	int s=tree[tree[j].lc].num-tree[tree[i].lc].num;
	int mid=(l+r)>>1;
	if(k<=s)
		return search(tree[i].lc,tree[j].lc,l,mid,k);
	else
		return search(tree[i].rc,tree[j].rc,mid+1,r,k-s);
}
```

#### 分析

区间查询从根节点到叶子节点最多查询$\log n$个节点，时间复杂度为$O(\log n)$，$m$次查询的总时间复杂度为$O(m \log n)$，插入$1$个数需要$O(\log n)$的时间复杂度，插入$n$个数需要$O(n \log n)$的时间复杂度，所以使用主席树求静态区间第$k$小的数总复杂度为$O((n+m)\log n)$。

而线段树套平衡树可以在$O((n+m) \log^2 n)$的时间复杂度内完成这项任务，但它的时间复杂度不如主席树。但是主席树很难用于动态修改，而线段树套平衡树可以。

---

## 代码

来源：洛谷：[P3834 【模板】可持久化线段树 2](https://www.luogu.com.cn/problem/P3834)

```cpp
#include<iostream>
#include<cstdio>
#include<algorithm>
#include<cstring>
#include<cmath>
#include<vector>
#include<queue>
#include<map>
#include<set>
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
#define M 10000001
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
	int lc,rc,num;
}tree[M];
int a[M],b[M],rt[M],n,m,cnt;
void update(int &i,int j,int l,int r,int k)
{
	i=++cnt;
	tree[i]=tree[j];
	tree[i].num++;
	if(l==r)
		return;
	int mid=(l+r)>>1;
	if(k<=mid)
		update(tree[i].lc,tree[j].lc,l,mid,k);
	else
		update(tree[i].rc,tree[j].rc,mid+1,r,k);
	return;
}
int search(int i,int j,int l,int r,int k)
{
	if(l==r)
		return l;
	int s=tree[tree[j].lc].num-tree[tree[i].lc].num;
	int mid=(l+r)>>1;
	if(k<=s)
		return search(tree[i].lc,tree[j].lc,l,mid,k);
	else
		return search(tree[i].rc,tree[j].rc,mid+1,r,k-s);
}
int main()
{
	read(n),read(m);
	for(int i=1;i<=n;i++)
	{
		read(a[i]);
		b[i]=a[i];
	}
	sort(b+1,b+1+n);
	int tot=unique(b+1,b+1+n)-b-1;
	for(int i=1;i<=n;i++)
	{
		update(rt[i],rt[i-1],1,tot,lower_bound(b+1,b+tot+1,a[i])-b);
	}
	for(int i=0;i<=n;i++)
	{
		pr(rt[i]);
	}
	for(int i=1;i<=m;i++)
	{
		int l,r,k;
		read(l),read(r),read(k);
		int ans=search(rt[l-1],rt[r],1,tot,k);
		print(b[ans]);
		putchar('\n');
	}
	return 0;
}

```

