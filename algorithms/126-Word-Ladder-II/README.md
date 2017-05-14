## Word-Ladder

## 说明
和上一题目类似，不过这次需要将所有的序列一起返回而不是仅返回一个数组

```
1. 一次只能改变一个字符
2. 每一次变化后的字符串必须在字典列表中
```
例如:

```
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
```
返回

```
  [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
  ]
```

注意:

* 如果没有转换序列，返回`0`
* 所有的单词的长度一致
* 单词只会有小写
* 可以假设字典中没有重复单词
* beginWord和endWord都非空而且不相同

### 思路

* 1.BFS搜索每一个路径，搜索到了继续遍历
	
	或者是一个优化算法
	http://blog.csdn.net/worldwindjp/article/details/19301355