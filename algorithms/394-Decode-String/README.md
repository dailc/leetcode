## Decode-String

## 说明

字符串解码，编码规则如下

`k[encoded_string]`，代表字符连续出现`k`次，`k`一定是一个正数

假设输入字符串永远合法，没有额外的空格，括号完美闭合

此外，假设原始的数据不好含任何的数字，只有`k`才会是数字，不会有这样的输入`3a`，或`2[4]`

例如

```js
s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
```

### 思路

- 考虑到有嵌套，使用递归，每一次使用正则来替换