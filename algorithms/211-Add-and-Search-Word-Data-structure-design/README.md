## Add-and-Search-Word-Data-structure-design

## 说明
设计一个数据结构，支持一下两种操作:

- `void addWord(word)`
- `bool search(word)`

其中的搜索功能可以搜素普通单词或者简单的正则表达式(只包含`a-z`或`.`，其中`.`的意义是可以被替代成任意字符-不能是空)

例如:

```
addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
```

可以假设所有的单词都是由`a-z`组成

前置条件是: `208-Implement-Trie-(Prefix-Tree)`

### 思路

* 1.基于`Trie`设计，用上回溯法来匹配正则表达式