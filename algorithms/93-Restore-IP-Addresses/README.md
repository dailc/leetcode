# Restore-IP-Addresses

## 说明

给出一个只有数字的字符串，返回所有可能的合法IP组合，例如:

给出`25525511135`,返回(不关注排序):

```js
["255.255.11.135", "255.255.111.35"]
```

## 思路

IP地址分为四个部分，每部分的数字合法范围是`0-255`

- 1.回溯法

	* 对于一串给定的字符串，我们每次可以取一个、两个、或者三个字符组成字符串。
	
	* 如果没有越界并且字符串满足0-255的要求，则保留该部分并对剩下的字符串进行DFS搜索，直到组成四个部分为止。
	
	* 如果越界或者不合要求，直接跳过即可。