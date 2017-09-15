## Wiggle-Subsequence

## 说明

摆动序列定义

- `[1,7,4,9,2,5]`是一个摆动序列，因为它们直接元素的两两差值是`(6,-3,5,-7,3)`，呈正负交替

- `[1,4,7,2,5]`和`[1,7,4,5,5]`不是摆动序列，因为`1-4-7`差值都是正数，`5-5`差值是`0`

找到最长的摆动子序列的长度，例如

```js
Input: [1,7,4,9,2,5]
Output: 6
The entire sequence is a wiggle sequence.

Input: [1,17,5,10,13,15,10,5,16,8]
Output: 7
There are several subsequences that achieve this length. One is [1,17,10,13,10,16,8].

Input: [1,2,3,4,5,6,7,8,9]
Output: 2
```

注意

- 需要`O(N)`的时间复杂度

### 思路

- 贪心算法