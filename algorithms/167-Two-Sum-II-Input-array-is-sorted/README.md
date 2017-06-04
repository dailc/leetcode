## Two-Sum-II-Input-array-is-sorted

## 说明
给一个已经排序的数组，找出数组中相加起来等于`target`的两个数字。

返回两个数字的index(从1开始)，而且index1大于index2，例如:

```
numbers={2, 7, 11, 15}, target=9
```
返回`[1,2]`

可以假设每一个输入只会有一个唯一的解，并且同一个元素不会用到两次

### 思路

* 1.双指针
	* 分别从头和尾向中间靠拢查找
	* 如果left和right相加等于target，返回left和right(注意，从1开始需要+1)
	* 如果小于，left ++
	* 如果大于，right --