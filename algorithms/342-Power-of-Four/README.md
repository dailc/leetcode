## isPowerOfFour

## 说明

给定一个`32`位整数，判断它是否是`4`的指数

例如

```js
Given num = 16, return true. Given num = 5, return false.
```

- 不使用递归和循环

### 思路

- 数学换底公式`log4n = log10n / log104`，如果是`4`的指数，比如为整数

- 另一种，在确定其是2的次方数了之后，发现只要是4的次方数，减1之后可以被3整除