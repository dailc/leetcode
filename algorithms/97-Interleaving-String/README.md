# Interleaving-String

## 说明

给出三个字符串`s1`,`s2`,`s3`,判断`s3`是否有`s1`和`s2`交织而成的，例如:

`s1=aabcc`,`s2=dbbca`

当 `s3=aadbbcbcac` 返回 `true`
当`s3=aadbbbaccc` 返回 `false`

## 思路

- 1.动态规划
	* dp[i][j]表示s1取前i位，s2取前j位，是否能组成s3的前i+j位
	
	http://blog.csdn.net/u011095253/article/details/9248073
	http://www.cnblogs.com/ganganloveu/p/4137843.html