# Longest-Substring-Without-Repeating-Characters

## 说明

给一个字符串，找到最长的无重复字符的子串

譬如

```js
Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## 思路

- O(N)遍历,用一个tmp字符串记录当前的值
