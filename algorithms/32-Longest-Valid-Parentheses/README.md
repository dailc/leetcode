# Longest-Valid-Parentheses

## 说明

给定只有`(`与`)`的字符串，找到最长的有效括号子字符串长度

比如`)()())`的最长子字符串是`()()`，长度是`4`

比如`(()`的最长子字符串是`()`，长度是`2`

## 思路

- 1.辅助栈方法，遇到`(`压栈，遇到`)`分析，并记录maxLen。

- 2.一直遍历，将每一次将所有相邻的`()`替换为特殊字符，例如`#`，直到不能替换，然后再遍历一遍，找到maxlen，没有辅助空间，也能被AC，但是速度较慢

- 3.动态规划法，从后向前，一点一点计算。*
	假设d[i]是从下标i开始到字符串结尾最长括号对长度，s[i]是字符串下标为i的括号。
	如果s[i-1]是左括号，如果i + d[i] + 1是右括号的话，那d[i-1] = d[i] + 1。
	如果不是则为0。
	如果s[i-1]是右括号，因为不可能有右括号开头的括号对，所以d[i-1] = 0。

