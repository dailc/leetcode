## Populating-Next-Right-Pointers-in-Each-Node

## 说明
二叉树结构定义如下:

```
    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
```

填充树节点的next指针指向(指向右侧同级的一个节点)，如果这个节点，指向null，不允许用辅助空间

可以假设是一颗完美的二叉树(所有的父节点都有两个子节点，所有的叶子节点都在同一层级)，例如:

```
         1
       /  \
      2    3
     / \  / \
    4  5  6  7
```

这棵树应该被改成:

```
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL
```

### 思路

* 1.针对每一层级进行链接

	http://www.cnblogs.com/felixfang/p/3647898.html
	
* 2.同样层级遍历，不过是用递归
