## Nth-Digit

## 说明

找到下面无穷正数数列中的第`n`位数字

```js
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...
```

例如

```js
Input:
3

Output:
3
```

```js
Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0,
which is part of the number 10.
```

注意

- `n`是一个正数，在`32`位有符号正数的范围`n < 2^31`

- 如果一个数有多位，那么他可以算多位，譬如`10`本身有两位

### 思路

- `9`个个位数，`900`个十位数，`900`个百位数