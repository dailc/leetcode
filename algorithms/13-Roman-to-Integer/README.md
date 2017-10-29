# Roman-to-Integer

## 说明

给出一个罗马数字，将它转化为整数

输入范围是：`1-3999`

## 思路

可能有两个以上的字符组成一个罗马数字

从前向后遍历罗马数字，如果某个数比前一个数小，则加上该数。反之，减去前一个数的两倍然后加上该数
（之所以要乘以2是因为这个被减去的数后面还会加上一次）

因为如果左边的大于右边的，代表一个新的数字开始了

## 代码

```
if (!str) {
    return - 1;
}
var result = toNumber(str.charAt(0));
for (var i = 1,
len = str.length; i < len; i++) {
    if (toNumber(str.charAt(i - 1)) < toNumber(str.charAt(i))) {
        result += toNumber(str.charAt(i)) - 2 * toNumber(str.charAt(i - 1));
    } else {
        result += toNumber(str.charAt(i));
    }
}
return result;
```