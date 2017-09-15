## Kth-Smallest-Element-in-a-Sorted-Matrix

## 说明

给一个`n * n`的矩阵，每一行和每一列都是按升序排列

找到矩阵中第`k`小的数

注意，是排序第`k`的数，而不是第`k`个数

譬如

```js
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
```

假设

```js
1 <= k <= n^2
```

### 思路

- 从左下角开始搜索

http://www.cnblogs.com/grandyang/p/5727892.html