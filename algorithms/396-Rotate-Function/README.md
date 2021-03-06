## Rotate-Function

## 说明

给一个数组`A`,长度是`n`

定义旋转函数`F`

```js
F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1]
```

计算`F(0), F(1), ..., F(n-1)`中的最大值

其中`Bk`是通过顺时针旋转`k`位得到的数组

- `n`小于`10^5`

例如

```js
A = [4, 3, 2, 6]

F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.
```

### 思路

找规律

```js
F(i) = F(i-1) + sum - n*A[n-i]
```

http://www.cnblogs.com/grandyang/p/5869791.html