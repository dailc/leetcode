# 3Sum-Closest

## 说明

和`3Sum`有所区别，这道题是求的最接近target的值，而且题目假定只有一个答案

给一个整形数组`S`，以及一个`target`，找到里面最合适的三个数，使得三个数的和最接近`target`

示例

```js
S = {-1 2 1 -4},  target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

## 思路

这倒题目的解法和`3Sum`类似，只不过将`2Sum`也同步变成了`2closest`，并返回一个最接近值
