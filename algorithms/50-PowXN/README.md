# PowXN

## 说明

实现 `pow(x,n)`方法，认为n是整数

示例

```js
Input: 2.00000, 10
Output: 1024.00000

Input: 2.10000, 3
Output: 9.26100
```

## 思路

- `pow(x, n) = pow(x, n/2) * pow(x, n - n/ 2)`，需要处理溢出