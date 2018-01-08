# Remove-Duplicates-from-Sorted-List

## 说明

这道题目和上一题十分相似，唯一的区别就是 那个重复的元素需要保留，例如:

```js
1->1->2
```
返回

```js
1->2
```

## 思路

- 1.沿用上一题的递归思路，只不过判断条件改变下，重复元素需要保留一个出来
	* 也就是判断条件变为`current = pHead.next;  ` `current.next != null && current.next.val == current.val`
	* 以前删除重复是是这个条件`current = pHead.next.next; ``current != null && current.val == pHead.val`
- 2.其实也可以直接循环
	* 如果当前节点和以前节点一样，以前节点的next指向当前节点的next