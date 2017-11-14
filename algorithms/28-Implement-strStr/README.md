# Implement-strStr

## 说明

实现一个`strStr(haystack, needle)`

找到needle在hysyack中出现的索引，如果不存在，返回-1

示例

```js
Input: haystack = "hello", needle = "ll"
Output: 2
```

```js
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

## 思路

- 粗暴的遍历

- KMP算法，复杂度O(M+N)
