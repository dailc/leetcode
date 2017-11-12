# Remove-Duplicates-from-Sorted-Array

## 说明

给出一个已排序数组，去重，并返回新数组的长度

- 不能使用额外空间

- 只能in-place替换

示例

```js
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
```

## 思路

由于不能使用额外空间，所以最简洁的hashmap方法不行

因为已排序，所以直接相邻比较，如果有重复，就直接指向下一个
