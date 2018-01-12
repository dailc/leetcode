# Scramble-String

## 说明

一个字符串有很多种二叉树交换形式，判断两个字符串是否符合二叉树交换。

给出一个字符串`s1`，递归将它分成两部分非空的子字符串，以二叉树的形式表现

以下是`s1 = "great"`可能的二叉树表示：

```js
    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
```

`Scramble`操作-需要选择一个非叶子节点，然后交换它的两个子节点

例如，选择节点`gr`，然后交换它的两个孩子节点，然后就成了一个交换后的字符串`rgeat`

```js
    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
```

那么`"rgeat"`就是`"great"`的`scrambled`字符串

同样，继续交换节点`"eat"` 和`"at"`，就有了一个`scrambled`字符串`"rgtae"`

```js
    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
```

那么，`"rgtae"`也是`"great"`的`scrambled`字符串

给两个字符串`s1`和`s2`，判断`s2`是不是`s1`的`scrambled`字符串

## 思路

一眼望去没有思路，于是参考网上答案:

- 动态规划

	* 使用三维数组辅助，1维为字符串的长度，第二维为s1的起始索引，第三维为s2的起始索引
	
	* `result[k][i][j]` 表示`s1[i...i+k]`是否可以由`s2[j...j+k]`变化得来。
	
    * `result[len][i][j]`表示的是以i和j分别为s1和s2起点的长度为len的字符串是不是互为scramble。