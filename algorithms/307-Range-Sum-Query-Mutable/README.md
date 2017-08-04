## Range-Sum-Query-Mutable

## 说明

给出一个整形数组，找到下标`i`和`j`（`i <= j`，包含`i`和`j  `）之间元素的和

例如

```js
Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
```

注意

- 假设数组可以通过`update`更新

- `sumRange`和`update`的调用次数均匀分布

### 思路

- 构建数组时，动态规划，将所有的结果都计算出

    - `dp[i]`代表`0``i`下标直接元素的和
    
    - `dp[j] - dp[i - 1]`代表`[i, j]`的和
    
    - `update`时，`dp`中的元素依次加上`diff`