## Combination-Sum-IV

## 说明

给一个整数数组，所有元素都是正数，并且没有重复，并给一个`target`

找到所有的组合元素的数量，使的它们的和为`target`

例如

```js
nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
```

进一步

- 如果数组中有负数？

- 如果允许负数需要加上什么限制？

### 思路

- dp

dp[i]表示目标数为i的解的个数

然后我们从1遍历到target，对于每一个数i，遍历nums数组，如果i>=x, dp[i] += dp[i - x]

http://www.cnblogs.com/grandyang/p/5705750.html