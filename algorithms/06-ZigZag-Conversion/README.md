# ZigZag Conversion

## 说明

字符串`PAYPALISHIRING`，的之字形写法如下（给定三行）

```js
P   A   H   N
A P L S I I G
Y   I   R
```

上面按照列数从小往大读就是`PAHNAPLSIIGYIR`

写一个方法，给出一个字符串以及行数，返回对应行数的之字形写法

可参考
http://blog.csdn.net/ljiabin/article/details/40477429


## 思路

- 主要找出奇数列和偶数列的规律

譬如

原始字符串： `0123456789`

rows=3时: `048 13579 26`

rows=4时: `06 157 248 39`

简单的可以用字符串数组`str[rows]`来存储每一行，最后拼接

或者找规律，所有行的重复周期`2 * nRows - 2`

对于首行和末行之间的行，还会额外重复一次，
重复的这一次距离本周期起始字符的距离是 `2 * nRows - 2 - 2 * i`