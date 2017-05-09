## Populating-Next-Right-Pointers-in-Each-Node-II

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

和上题类似，过不二叉树可以不满，例如:

```
         1
       /  \
      2    3
     / \    \
    4   5    7
```

这棵树应该被改成:

```
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
```

### 思路
仍然是同样的思路

* 1.针对每一层级进行链接(只是条件改变下)

	http://www.cnblogs.com/felixfang/p/3647898.html
* 2.递归
	
	http://www.cnblogs.com/grandyang/p/4290148.html