## Regular Expression Matching

模拟正则表达式匹配，包括 `.`和`*`功能，例如:
isMatch("",".*") → true
isMatch("",".") → false
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true


### 解答:
采用普通的递归方法了，两大部分:

* p的下一位不是`*`，则判断当前s和p的字符是否相等
* p的下一位是`*`，则进入一些判断后，再进行循环递归，这里相对比较复杂，每一次循环时都会判断一次条件