## Distinct-Subsequences

## 说明
给出一个字符串s和t，返回t在s中的子串个数，例如

`s=rabbbit`，`t=rabbit`返回`3`
t在s中的子串是指s删除一些字符后剩下的和t相等(可以删除0个字符)，所以上述分别是:

```
不删除
删除第一个b
删除第2个b
删除第3个b
```

### 思路

* 1.动态规划
	* dp[0][0] = 1; // T和S都是空串.
	* dp[0][1 ... S.length - 1] = 1; // T是空串，S只有一种子序列匹配。
	* dp[1 ... T.length() - 1][0] = 0; // S是空串，T不是空串，S没有子序列匹配。
	* dp[i][j] = dp[i][j - 1] + (T[i - 1] == S[j - 1] ? dp[i - 1][j - 1] : 0).1 <= i <= T.length, 1 <= j <= S.length
	
	主要是需要画二维表分析
	http://blog.csdn.net/abcbc/article/details/8978146
