# First-Missing-Positive

## 说明

在一个未排序的数组中，找到第一个缺失的正数，譬如:

`[1,2,0]` 缺失的是`3`
`[3,4,-1,1]` 缺失的是`2`

必须在O(N)时间内完成，并且只能用常量空间

## 思路

- 遍历，把正数n放在第n-1个位置上，这样从第一个位置开始，如果位置上不等于位置号，那么就是第一个缺失的正数
