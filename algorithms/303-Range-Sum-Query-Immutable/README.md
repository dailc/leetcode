## Range-Sum-Query-Immutable

## 说明

给出一个整形数组，找到下标`i`和`j`（`i <= j`，包含`i`和`j  `）之间元素的和

例如

```js
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```

注意

- 假设数组不变

- `sumRange`会被调用很多次

### 思路

- 构建数组时，动态规划，将所有的结果都计算出

    - `dp[i]`代表`0``i`下标直接元素的和
    
    - `dp[i] - dp[i - 1]`代表`[i, j]`的和
