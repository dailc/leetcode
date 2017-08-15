## Coin-ChangeWiggle-Sort-II

## 说明

给出一个未排序的数组`nums`，重排序它，使的`nums[0] < nums[1] > nums[2] < nums[3]...`

例如

```js
Given nums = [1, 5, 1, 1, 6, 4], one possible answer is [1, 4, 1, 5, 1, 6]

Given nums = [1, 3, 2, 2, 3, 1], one possible answer is [2, 3, 1, 3, 1, 2]
```

- 假设所有的输入都有合法的答案

- 答案可能不止一个

- `O(N)`的时间复杂度，`O(1)`的空间复杂度

### 思路

- 需要用到一个寻找`k`小值的算法

- 然后再用低位指针和高位指针映射，代表当前已经走到哪一个位置了，映射公式`(2*i+1)%(len|1)`

- https://discuss.leetcode.com/topic/32929/o-n-o-1-after-median-virtual-indexing/2