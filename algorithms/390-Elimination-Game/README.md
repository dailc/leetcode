## Elimination-Game

## 说明

有`1`到`n`个排序的整数，从左到右

操作为：

`先左到右`： 每一次遍历到最后时，奇数位的数字

`右到左`： 消除偶数位的数字

`重复...`

重复如此操作，找到最后还剩下的数字，例如

```js
Input:
n = 9,
1 2 3 4 5 6 7 8 9
2 4 6 8
2 6
6

Output:
6
```

### 思路

http://www.cnblogs.com/grandyang/p/5860706.html