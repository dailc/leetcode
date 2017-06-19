## Shortest-Palindrome

## 说明
给出一个字符串`s`，你可以在字符串的前面添加字符，来使的它成为一个回文数。

找到最小长度的回文数字符，例如:

```
Given "aacecaaa", return "aaacecaaa".

Given "abcd", return "dcbabcd".
```

### 思路

* 1.从左起，先找到最长的回文字字符串(必须包含左侧)
    * 然后补上右侧不是回文数的字符
    * 结果`TLE`
* 2.优化
    * kmp算法
        
    http://www.cnblogs.com/grandyang/p/4523624.html
