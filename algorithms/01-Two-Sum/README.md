# Two-Sum

## 说明

给一个整数数组`nums`，以及`target`，返回两个下标，使得对应下标的数组元素的和为`target`

假设每一个输入都有一个合法的值，每一个元素不会使用两次以上

示例

```js
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## 思路

使用map记录法

 O(N)遍历，如果存在`map[target - nums[i]]`，则代表已经找到，否则设置对应的`map[num[i]]`
