## Count-of-Smaller-Numbers-After-Self

## 说明

给你一个整形数组，返回一个新的计数数组`counts`，其中

- `counts[i]`是指`nums[i]`右侧有几个比它小的数，例如

```js
Given nums = [5, 2, 6, 1]

To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
```

返回`[2, 1, 1, 0]`

## 思路

- 二叉搜索树