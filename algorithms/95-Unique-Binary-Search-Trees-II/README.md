## Unique-Binary-Search-Trees-II

## 说明
给一个数字n，返回所有可能的搜索二叉树的结果集(存储1,2,...,n)

例如，给出`n=3`，返回所有以下5中集合:

```
 1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

### 思路

* 1.找一个数作为根节点，剩余的数分别划入左子树或者右子树，动态规范
	* 每一次都在一个范围内随机选取一个结点作为根。
	* 每选取一个结点作为根，就把树切分成左右两个子树，直至该结点左右子树为空。
	* 采取自底向上的求解过程。
	* 选出根结点后应该先分别求解该根的左右子树集合，也就是根的左子树有若干种，
	     它们组成左子树集合，根的右子树有若干种，它们组成右子树集合。 
	* 然后将左右子树相互配对，每一个左子树都与所有右子树匹配，每一个右子树都与所有的左子树匹配。
	     然后将两个子树插在根结点上。 
	* 最后，把根结点放入链表中。