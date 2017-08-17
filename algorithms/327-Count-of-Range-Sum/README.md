## Count-of-Range-Sum

## 说明

给出一个整形数组`nums`，以及下限`lower`和上限`upper`，求出有多少的不同区间，使的每个区间的和在给定的上限和下限中

例如

```js
Given nums = [-2, 5, -1], lower = -2, upper = 2,
Return 3.
The three ranges are : [0, 0], [2, 2], [0, 2] and their respective sums are: -2, -1, 2.
```

注意

- 时间复杂度必须小于`O(N^2)`

### 思路

- 先求出全局的前`n`个元素的和

- 未来需要把它完成