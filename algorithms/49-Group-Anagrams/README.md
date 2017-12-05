# Group-Anagrams

## 说明

给出一个字符串数组，进行解谜，如:

```js
["eat", "tea", "tan", "ate", "nat", "bat"]
```

返回

```js
[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```
注意，每一个子数组都是首尾连贯的，并且所有输入都是小写

## 思路

- 1.使用hash表，然后每将元素排序存入对应的hash数组中

关键是：

`"ate", "eat","tea"`进行字典排序后都是同一个值