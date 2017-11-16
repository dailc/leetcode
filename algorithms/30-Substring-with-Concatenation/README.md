# Substring-with-Concatenation

## 说明

给出一个字符串`s`以及关键字数组`words`，数组中每一个元素字符串长度相同

关键词数组可以任意组合成字符串`t`（每一个元素用一次）

找出`s`中所有`t`出现的下标

示例

``js
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).
```

## 思路
	
- 先用map记录所有wordls出现的次数，其次遍历目标`str`，每一次遍历子串，寻找map中的key，如果找到则-1，如果为0或者不存在，则进入下一个循环。
	这样一来，计算次数要大大减少，而且在本地测试基本不会出现像递归一样的超时问题，但是提交仍然未被AC(没有达到要求规定的时间要求)

- 进一步优化，减少重复字符串的扫描。(滑动窗口模式)

