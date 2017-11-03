# 4Sum

## 说明

给出一个整形数组`s`，以及一个`target`，找到四个值，使得

```js
a + c + c + d = target
```

找到所有可能的唯一组合（需去重）

示例

```js
For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

## 思路

思路是基于以前de`3sum`代码进一步拓展