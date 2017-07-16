## Integer-to-English-Words

## 说明

将一个非负整数转换成英文的表达形式，输入小于`2^31 - 1`，例如

```js
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```

### 思路

- 最大为`Billion`单位

    - 每`3`位一组
    
    - 外部再判断`Thousand,Million,Billion`