## Palindrome-Pairs

## 说明

给一个唯一的单词列表，找到所有不同的下标`(i, j)`，使的`words[i] + words[j]`是回文数

例如

```js
Given words = ["bat", "tab", "cat"]
Return [[0, 1], [1, 0]]
The palindromes are ["battab", "tabbat"]
```

```js
Given words = ["abcd", "dcba", "lls", "s", "sssll"]
Return [[0, 1], [1, 0], [3, 2], [2, 4]]
The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]
```

### 思路

- 使用hashmap

https://segmentfault.com/a/1190000008917798