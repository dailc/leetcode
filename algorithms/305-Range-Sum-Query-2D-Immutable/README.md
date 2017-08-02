## Range-Sum-Query-2D-Immutable

## 说明

给一个`2D`矩阵，找到对应矩阵内的元素的和（左上角`row1, col1`和右下角`row2, col2`）

![](https://leetcode.com/static/images/courses/range_sum_query_2d.png)

这里左上角是`2, 1`，右下角是`4, 3`，和是`8`

例如

```js
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
```

- 假设矩阵不会变

- 假设`sumRegion`会被调用很多次

- `row1 <= row2`且`col1 <= col2`


### 思路

- 构建的时候动态规划

    - `dp[i][j]`代表累计区间`(0,0)`到`(i,j)`的和
    
    - `(r1, c1)到(r2, c2)的和`等价于`dp[r2][c2] - dp[r2][c1 - 1] - dp[r1 - 1][c2] + dp[r1 - 1][c1 - 1]`
