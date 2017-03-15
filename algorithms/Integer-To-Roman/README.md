## Integer-To-Roman

## 说明
将整形`[1,3999]`转为对应的罗马数字



## 解答:


### 第一种:打表法

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


