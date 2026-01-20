---
title: "二叉堆"
published: 2024-09-29
category: ["程设计科", "算法与数据结构"]
tags: ["数据结构"]
alias: "binaryheap"
---


## 二叉堆简介

二叉堆是一种基础数据结构，对于其他数据结构来说，支持的操作有限，也就插入，查询，删除这一类。

### 二叉堆的结构

从二叉堆的结构说起，它是一棵二叉树，并且是完全二叉树，每个结点中存在一个权值。堆性质：父亲的权值不小于儿子的权值（大根堆）。同样的，我们可以定义小根堆。本文以大根堆为例。由堆性质，树根存的是最大值。对于堆的每个子树，它同样也是一个堆。

考虑使用一个序列h来表示堆，$h_i$的两个儿子分别是$h_{2i}$和$h_{2i+1}$，$1$是根节点：

![h 的堆结构](https://oi-wiki.org/ds/images/binary-heap-array.svg)

来自于：OI Wiki

具体每个节点的对应关系如上图。

---

## 二叉堆的基本操作

### 插入操作

插入操作是指向二叉堆中插入一个元素，但是要保证插入这个元素后，这颗二叉树仍然满足堆的性质。最简单的实现方法就是从最下层的叶子节点插入，如果最下面一层已经满了，就新建一层，将插入的节点与他的父亲节点比较，如果当前节点的权值大于父亲节点的权值，那么就交换父亲节点与当前节点，直到符合二叉堆的要求或者是当前插入的节点转移到根节点。

![二叉堆的插入操作](https://oi-wiki.org/ds/images/binary_heap_insert.svg)

来自于：OI Wiki

```cpp
void pushup(int x){
    if(x==1)
        return;
    if(h[x]>h[x>>1])
        swap(h[x],h[x>>1]);
    pushup(x>>1);
}
void push(int x){
    h[++cnt]=x;
    pushup(cnt);
}
```

### 删除操作

删除操作指的是删除根节点的操作，同样地，在删除根节点后，我们要保证这一个堆的完整性，并且使堆仍然保持原来的性质。如果直接删除根节点，那么整个堆会一分为二，不好处理，所以，我们考虑将插入操作倒序走一遍，首先将根节点与它权值最大的儿子交换，然后不停地像这样交换下去，最终到达叶子节点，被删除。

```cpp
void pop(int x){
    if((x<<1)>cnt){
        h[x]=inf;
        return;
    }
    if(h[x<<1]>h[x<<1|1]){
        swap(h[x],h[x<<1]);
        pop(x<<1);
    }
    else{
        swap(h[x],h[x<<1|1]);
        pop(x<<1|1);
    }
}
```

### 查询操作

查询操作只限于查询一个堆的堆顶元素。直接输出二叉堆的根即可。

---

## $\rm{STL}$库中的优先队列

在$\rm{STL}$中，有个存在<code>priority_queue</code>，翻译叫做优先队列，实际上就是二叉堆，它处于<code>queue</code>库中，下面是它的几种操作：

- 建立优先队列（大根堆）：<code>priority_queue\<int\>q</code>
- 建立优先队列（小根堆）：<code>priority_queue\<int,vector\<int\>,greater\<int\> \>q;</code>
- 插入一个数：<code>q.push(x)</code>
- 删除堆顶：<code>q.pop()</code>
- 查询堆顶：<code>q.top()</code>
- 判断堆是否为空：<code>q.empty()</code>
- 查询堆的元素个数：<code>q.size()</code>

---

## 代码

来源：洛谷：[P3378 【模板】堆](https://www.luogu.com.cn/problem/P3378)（小根堆，变换比较符号即为大根堆）

```cpp
#include<iostream>
#include<cstdio>
#include<algorithm>
#include<cstring>
#include<cstdlib>
#include<cmath>
#include<vector>
#include<queue>
#include<map>
#include<set>
#include<ctime>
using namespace std;
typedef unsigned int uint;
typedef long long LL;
typedef unsigned long long uLL;
typedef __int128 int128;
typedef unsigned __int128 uint128;
typedef long double Ld;
#define reg register;
#define space putchar(' ')
#define enter putchar('\n')
#define PI 3.14159265358979323846
#define pb(x) push_back(x)
#define mp(a,b) make_pair(a,b)
#define fi first
#define se second
#define pr(x) cerr<<#x<<"="<<(x)<<endl
#define pri(x,lo) {cerr<<#x<<"={";for (int ol=0;ol<=lo;ol++)cerr<<x[ol]<<",";cerr<<"}"<<endl;}
#define inf 1000000000
#define INF 1000000000000000000
#define N 1010
#define M 1000010
// void gettime(){
// 	cerr<<"time:"<<(double)clock()<<"ms"<<endl;
// }
namespace Fast{
	template<typename T>inline void read(T &x){
		x=0;bool f=false;char c=getchar();
		while(c<'0'||c>'9'){if(c=='-')f=true;c=getchar();}
		while(c>='0'&&c<='9')x=(x<<3)+(x<<1)+(c^48),c=getchar();
		if(f)x=~x+1;
	}
	template<typename T>inline void print(T x){
		int s[65],top=0;
		if(x<0)putchar('-'),x=~x+1;
		while(x)s[++top]=x%10,x/=10;
		if(!top)s[++top]=0;
		while(top)putchar(s[top--]+'0');
	}
	template<typename T,typename...Args>inline void read(T &x,Args&...others){
		read(x),read(others...);
	}
	template<typename T,typename...Args>inline void print(T x,Args...others){
		print(x),space,print(others...);
	}
	const double eps=1e-7;
	template<typename T>inline T Abs(T x){return x>0?x:-x;}
	template<typename T>inline T Max(T x,T y){return x>y?x:y;}
	template<typename T>inline T Min(T x,T y){return x<y?x:y;}
	template<typename T>inline T Fabs(T x){return x>eps?x:-x;}
	template<typename T>inline T Fmax(T x,T y){return x-y>eps?x:y;}
	template<typename T>inline T Fmin(T x,T y){return x-y<eps?x:y;}
	template<typename T>inline void addmod(T &x,T p){if(x>=p)x-=p;}
	template<typename T>inline void submod(T &x,T p){if(x<0)x+=p;}
}
using namespace Fast;
int h[M<<1],n,cnt;
void pushup(int x){
    if(x==1)
        return;
    if(h[x]<h[x>>1])
        swap(h[x],h[x>>1]);
    pushup(x>>1);
}
void push(int x){
    h[++cnt]=x;
    pushup(cnt);
}
void pop(int x){
    if((x<<1)>cnt){
        h[x]=inf;
        return;
    }
    if(h[x<<1]<h[x<<1|1]){
        swap(h[x],h[x<<1]);
        pop(x<<1);
    }
    else{
        swap(h[x],h[x<<1|1]);
        pop(x<<1|1);
    }
}
int main(){
	read(n);
    for(int i=1;i<=n;i++){
        h[i]=inf;
    }
    for(int i=1;i<=n;i++){
        int opt,x;
        read(opt);
        if(opt==1){
            read(x);
            push(x);
        }
        if(opt==2){
            print(h[1]);
            enter;
        }
        if(opt==3){
            pop(1);
        }
    }
	return 0;
}
```

