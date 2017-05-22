## Word-Break

## 说明
有一个非空字符串`s`，和一个字符词典`dict`(词典中包含着非空字符)
判断字符串`s`由空格分割后，是否由词典`dict`中的一般或多个元素组成
假设字符词典中没有重复元素。例如:

```
s = "leetcode"
```
dict是

```
dict = ["leet", "code"]
```
返回`true`，因为`leetcode`可以被分割成为`leet code`

### 思路

* 1.动态规划
	* `s='abcdeefg',dict=['ab','cde','ee','cd','fg']`
	* dp[i]表示s[0]-s[i-1]是否已经匹配了字典中的值
	
	http://www.cnblogs.com/felixpan/p/4783860.html
	http://blog.csdn.net/linhuanmars/article/details/22358863/