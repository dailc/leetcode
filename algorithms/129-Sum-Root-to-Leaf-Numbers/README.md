## Sum-Root-to-Leaf-Numbers

## 说明
给一颗二叉树，其中的值都只有数字`0-9`，从根节点到叶子节点的路径代表一个数字。
例如，路径`1->2->3`代表一个数字`123`，找到所有路径代表的数字之和

```
    1
   / \
  2   3
```

例如，上述二叉树中有两个路径`1->2`代表`12`，`1->3`代表`13`，因此和为`12+13=25`


### 思路
归根结底，是二叉树的路径寻找问题，需要遍历所有路径

* 1.DFS递归搜索，遍历所有的路径，并累加数字