## Create-Maximum-Number

## 说明

给出两个长度分别为`m`和`n`的数组，范围是`0-9`，代表两个数字

给出一个`k`，其中`k <= m + n`，求能组成最大数的数组（每个数组中的元素只能出现一次）

例如

```js
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
return [9, 8, 6, 5, 3]


nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
return [6, 7, 6, 0, 4]


nums1 = [3, 9]
nums2 = [8, 9]
k = 3
return [9, 8, 9]
```

### 思路

- 辅助栈和贪心算法

- http://www.cnblogs.com/CarryPotMan/p/5384172.html