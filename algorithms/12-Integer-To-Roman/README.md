# Integer-To-Roman

## 说明

将整数转化为罗马数字

- 假设输入范围时`[1,3999]`

## 思路

罗马数字范围

```js
["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
分别对应
[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
```

所以，根据查表即可进行转换，先大再小

```
var str = '';
//其中每两个阶段的之间有一个减法的表示，比如900=CM， C写在M前面表示M-C。
var symbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
for (var i = 0; num != 0; ++i) {
    while (num >= value[i]) {
        num -= value[i];
        str += symbol[i];
    }
}
return str;
```
因为罗马数字一个规律就是:`做减法`，从大数减到小数


