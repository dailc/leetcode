# Remove-Duplicates-from-Sorted-Array-II

# 说明

基于`Remove Duplicates`，不过这次的要求为重复的元素最多只能出现两次

```js
[1,1,1,2,2,3]
```

返回的结果为`5`，分别是:

```js
1,1,2,2,3
```

另外，只关心数组的前半部分，后半部分并不关心形式。

## 思路

- 遍历+计数，计数是不需要双指针的，并且也不需要splice
