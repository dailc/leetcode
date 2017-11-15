# Divide-Two-Integers

## 说明

实现两个整数相除，不能用乘法，除法以及取余操作

规定需要在整数范围，溢出则返回`MAX_INT`。

```
var MAX_INT = Math.pow(2,31) - 1;
var MIN_INT = - Math.pow(2,31);
```

### 思路

- 考虑位运算，divisor左移，每一次计算最合适的divisor，这样每次可以减去一个最大可以减去的2的指数。考虑左移时的溢出-AC

- 进一步优化，先得到最大倍数，然后依次右移(左移位的时候要注意溢出)-AC
