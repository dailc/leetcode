# Regular Expression Matching

## 说明

实现一个简单的正则表达式匹配，需要支持`.`和`*`

- `.`代表任意一个单个字符

- `*`代表出现`0`次或更多

- 需要匹配整个字符串

示例

```js
isMatch(s, p)

isMatch("",".*") → true
isMatch("",".") → false
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
```

## 思路

采用普通的递归方法了，两大部分:

- `p`的下一位不是`*`，则判断当前`s`和`p`的字符是否相等

- `p`的下一位是`*`，则进入一些判断后，再进行循环递归，这里相对比较复杂，每一次循环时都会判断一次条件