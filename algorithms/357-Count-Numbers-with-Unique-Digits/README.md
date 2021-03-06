## Count-Numbers-with-Unique-Digits

## 说明

给一个非负整数`n`，计算`0 <= x <= 10^n`范围内有多少个`各位不相同`的数字（`123`就是各位不相同，`11`是相同）

例如

```js
n = 2;

返回 91

因为排除了[11,22,33,44,55,66,77,88,99]
```

### 思路

- 可知，一位数的满足要求的数字是10个(0到9)，二位数的满足题意的是81个

- 求通项，`f(k) = 9 * 9 * 8 *... * (9 - k - 2)`，把`[1, n]`区间位数通过通项公式算出来累加起来

http://www.cnblogs.com/grandyang/p/5582633.html