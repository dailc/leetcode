## Remove-Duplicate-Letters

## 说明

给一个只有小写字符的字符串，移除重复字符，确保所有字符都只出现一次

注意

- 要确保返回的字符串是所有结果中，词典排序最小的

例如

```js
Given "bcabc"
Return "abc"

Given "cbacdcbc"
Return "acdb"
```

### 思路

- 贪心算法，枚举字符串前缀，直到遇到首个唯一字符为止，从前缀中挑选最小的字符作为首字符

- 同时使用`stack`优化，可以将时间复杂度降低到`O(N)`

- 贪心算法，原理是先吃进，然后遇到更好的选择则选择更好的，知道满足条件

- http://bookshadow.com/weblog/2015/12/09/leetcode-remove-duplicate-letters/