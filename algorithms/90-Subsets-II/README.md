# Subsets-II

## 说明

给一个可能包含重复数组的数组，返回所有可能的子集。

但是要求子集中不允许重复

示例：

给出`nums = [1,2,2]`，结果如下：

```js
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```

## 思路

- 1.回溯法，在前一题目的基础上修改(先排序，再跳过重复)
