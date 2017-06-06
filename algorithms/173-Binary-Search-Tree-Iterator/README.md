## Binary-Search-Tree-Iterator

## 说明
实现一颗二叉搜索树的迭代器。从root节点开始。

`next()` api 会返回二叉树中下一个最小的值。

`next()`和`hasNext()`需要在`O(1)`时间内，`O(h)`空间内，`h`是树的高度。

### 思路

* 1.初始化构建二叉树时就需要缓存后