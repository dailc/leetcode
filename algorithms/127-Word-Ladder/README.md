## Word-Ladder

## 说明
给出两个字符串`beginWord`和`endWord`，和一个词典列表`word list`，
找出`beginWord`转到`endWord`所需的最小变化次数，规则:

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

最短的变化路线是:

```
"hit" -> "hot" -> "dot" -> "dog" -> "cog"
```
所以返回的长度是`5`

注意:

* 如果没有转换序列，返回`0`
* 所有的单词的长度一致
* 单词只会有小写
* 可以假设字典中没有重复单词
* beginWord和endWord都非空而且不相同

### 思路

* 1.BFS(层序遍历)-第一个找到的匹配词就是最短路径(但是`TLE`)
	* 和当前单词相邻的单词是：对当前单词改变一个字母且在字典中存在的单词
	* 找到一个单词的相邻单词，加入bfs队列后，要从字典中删除，因为不删除的话会造成类似于hog->hot->hog的死循环。
	* 而删除对求最短路径没有影响，因为我们第一次找到该单词肯定是最短路径，即使后面其他单词也可能转化得到它，路径肯定不会比当前的路径短
	* （如果要输出所有最短路径，则不能立即从字典中删除，具体见下一题）
	* bfs队列中用NULL来标识层与层的间隔，每次碰到层的结尾，遍历深度+1

	http://www.cnblogs.com/TenosDoIt/p/3443512.html

* 2.优化过后的BFC

	https://codereview.stackexchange.com/questions/161608/word-ladder-javascript-implementation