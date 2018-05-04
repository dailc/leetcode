# Construct-Binary-Tree-from-Inorder-Traversal-and-Postorder Traversal

## 说明

从中序遍历和后序遍历中恢复对应的二叉树(假设没有重复的值)

示例：

```js
inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
```

返回：

```js
    3
   / \
  9  20
    /  \
   15   7
```

## 思路

* 1.类似于上一题目，递归，现在后序中找到首个节点，然后中序从该节点对半，一个是左树，一个是右树

只不过现在找首节点变为从后面找