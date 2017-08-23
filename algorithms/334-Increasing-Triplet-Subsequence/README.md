## Increasing-Triplet-Subsequence

## 说明

给一个未排序的数组，返回判断是否有一个超过`3`长度的递增子序列存在数组中

- 如果存在` arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1`，则返回`true`，否则`false`

例如

```js
Given [1, 2, 3, 4, 5],
return true.

Given [5, 4, 3, 2, 1],
return false.
```

### 思路

- 遍历数组，维护一个最小值和倒数第二小值

- 遍历数组时，如果当前数字小于等于最小值，如果小于等于倒数第二小数，更新倒数第二小值

- 如果当前数字比最小值和倒数第二小值都大，返回`true`