## Super-Pow

## 说明

计算`a^b % 1337`，其中`a`是一个正整数，`b`是一个以数组形式给出的极大整数

例如

```js
a = 2
b = [3]

Result: 8
```

```js
a = 2
b = [1,0]

Result: 1024
```

### 思路

- 快速幂解题

- 借助一个数学公式`(a*b)%c=(a%c)*(b%c)`

- 当`b`是偶数时，还可以转化为`a^(b/2)然后再平方`

http://blog.csdn.net/mebiuw/article/details/51853673

http://www.cnblogs.com/grandyang/p/5651982.html