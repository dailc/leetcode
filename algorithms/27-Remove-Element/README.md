# Remove-Element

## 说明

给定一个数组和一个num，去除该数组下的所有值是这个数字的元素，并且返回去除num后的数组新长度。

注意:返回的是新数组的长度，而且前面长度的必须被正确去重

- 不允许有额外的辅助数组，只能用常量空间

- 数组元素和排序都可以被改变

示例

```js
Given nums = [3,2,2,3], val = 3,
Your function should return length = 2, with the first two elements of nums being 2.
```

## 思路

和上面的数组去重一样，依次判断每一位数组是否是val，同时有一个count在计数
