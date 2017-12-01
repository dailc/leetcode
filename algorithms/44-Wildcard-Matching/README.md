# Wildcard-Matching

## 说明

实现支持`?`与`*`的通配符

- `?`匹配任何当个字符

- `*`匹配意义字符序列(包括空字符),比如`*`可以匹配``或`a`或`ab`或`abcde...`

例如:

```
isMatch("aa", "a") → false
isMatch("aa", "aa") → true
isMatch("aaa", "aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
```

## 思路

这道题和`10-Regular-Expression-Matching`有点像，但是要比它难，因为这里面`*`是单独进行匹配的

- 回溯法(`p = "c*ab*c"，s = "cddabbac"`)

	- 如果p遇到`?`则双方都各自走
	
	- 如果p遇到了`*`，记录遇到`*`时p和s的位置`presp(此时是*号的下一个)`和`press`，然后继续比较下一位
	
	- 如果发现p和s不等，则回溯回去`p=presp`,`s=press+1`
	
	- 继续比较，直到末尾或者遇到下一个`*`
	
	- 如果遇到了下一个'*'，说明 "ab"部分搞定了，下面的就交给第二个'*'了
	
	- 如果p和s都到末尾了，那么就返回true
	
	- 如果到末尾了既没遇到新的'*'，又还存在不匹配的值(判断p是否已经到末尾)，press也已经到末尾了，那么就返回false了。
	
	- 参考 http://www.cnblogs.com/felixfang/p/3708999.html

