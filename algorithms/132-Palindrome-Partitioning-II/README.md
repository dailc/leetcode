## Palindrome-Partitioning-II

## 说明
给出一个字符串`s`，将这个字符串分割，使的每一个子字符串都是回文串。返回所有可能的分区组合中最小的切割数。

例如`s=aab`，返回`1`

```
["aa","b"]
```

因为上述这个组合只需要一次即可切割完毕

### 思路

* 1.回溯法
	* 需要基于判断字符串是否回文串的算法
	* 然后得到所有的结果后再取一个最小值
	* 结果是超时
* 2.动态规划
	* D[i,n] = 区间[i,n]之间最小的cut数，n为字符串长度
	* D[i,n] = min(D[i, j] + D[j+1,n])  i<=j <n
	* 就可以转换为
	* D[i] = 区间[i,n]之间最小的cut数，n为字符串长度， 则,
	* D[i] = min(1+D[j+1] )    i<=j <n
	
	http://www.cnblogs.com/ganganloveu/p/3982561.html
	http://blog.csdn.net/doc_sgl/article/details/13418125