## Word-Break-II

## 说明
有一个非空字符串`s`，和一个字符词典`dict`(词典中包含着非空字符)
判断字符串`s`由空格分割后，是否由词典`dict`中的一般或多个元素组成
如果符合条件，作为结果返回出来。
假设字符词典中没有重复元素。例如:

```
s = "catsanddog"
```
dict是

```
dict = ["cat", "cats", "and", "sand", "dog"]
```
返回的一个结果是:

```
["cats and dog", "cat sand dog"]
```

### 思路

* 1.回溯法
	* 结合动态规划
	* 结果超时
	
	http://www.cnblogs.com/yuzhangcmu/p/4037299.html