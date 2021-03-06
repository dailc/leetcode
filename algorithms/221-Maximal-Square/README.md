## Maximal-Square

## 说明
给一个2d矩阵，由`0`和`1`填充，找到最大的只包含`1`的`正方形`，并且返回它的面积，例如:

```
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
```
返回`4`

### 思路

- 动态规划(`O(MN)`复杂度)
    - 判断以某一个点为正方形右下角的最大正方形时，它的上方，左方和左上方也一定是某个正方形的右下角，否则该点为右下角的正方形就是它自己
    - 该点为右下角的正方形的最大边长，最多比它的上方，左方和左上方为右下角的正方形的边长多1
    - 最好的情况是是它的上方，左方和左上方为右下角的正方形的大小都一样的，这样加上该点就可以构成一个更大的正方形
    - 但如果它的上方，左方和左上方为右下角的正方形的大小不一样，合起来就会缺了某个角落，这时候只能取那三个正方形中最小的正方形的边长加1了
    - 假设`dp[i][j]`表示以i,j为右下角的正方形的最大边长，则有
    - `dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1`
    - 如果这个点在原矩阵中本身就是0的话，那`dp[i][j]`肯定就是0了
    
    https://segmentfault.com/a/1190000003709497