## Maximum-Product-of-Word-Lengths

## 说明

给一个字符串数组`words`，找到`length(word[i]) * length(word[j])`的最大值

其中，这两个单词没有相同的字符，并假设所有的单词都只有小写。如果没有这两个单词存在，返回`0`

示例

```js
Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
Return 16
The two words can be "abcw", "xtfn".
```

```js
Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
Return 4
The two words can be "ab", "cd".
```

```js
Given ["a", "aa", "aaa", "aaaa"]
Return 0
No such pair of words.
```

### 思路

- 二进制操作，用`mask`判断是否有相同字符

    - 因为一共只有`26`个单词
    
    - 没有相同字符的条件是相与为`0`