# Climbing-Stairs

## 说明

爬楼梯，有`n`个楼梯要爬，每次可以爬`1`层或`2`层，问爬到顶层有多少种方式。

示例：

```js
Input: 2
Output:  2
Explanation:  There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps
```

```js
Input: 3
Output:  3
Explanation:  There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

## 思路

- 循环(其实就是动态规划，后一步利用前一步的成果)，在1的基础上优化，避免没必要的计算