## Binary-Tree-Right-Side-View

## 说明
给出一颗二叉树，假设你站着二叉树的右侧，返回你能见到的所有节点。

从上到下排序。例如:

```
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```
返回 `[1, 3, 4]`

### 思路

* 1.层遍历
    * 每一层的最后一个节点装入数组