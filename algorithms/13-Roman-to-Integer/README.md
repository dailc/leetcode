## Roman-to-Integer

## 说明
**转换规则**
从前向后遍历罗马数字，如果某个数比前一个数小，则加上该数。反之，减去前一个数的两倍然后加上该数

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