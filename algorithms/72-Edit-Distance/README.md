# Edit-Distance

## 说明

给`word1`和`word2`，找出两个单词之间转换的最小步数(每一个操作视为一步)，只允许有以下三种操作:

- 插入一个字符

- 删除一个字符

- 替换一个字符

## 思路

- 1.动态规划

	如果我们用 i 表示当前字符串 A 的下标，j 表示当前字符串 B 的下标。 
	如果我们用d[i, j] 来表示A[1, ... , i] B[1, ... , j] 之间的最少编辑操作数。那么我们会有以下发现：
	
	* d[0, j] = j;
	* d[i, 0] = i;
	* d[i, j] = d[i-1, j - 1] if A[i] == B[j]	
	* d[i, j] = min(d[i-1, j - 1], d[i, j - 1], d[i-1, j]) + 1  if A[i] != B[j]
	
	所以，要找出最小编辑操作数，只需要从底自上判断就可以了
	http://blog.csdn.net/beiyetengqing/article/details/8105180
