## Find-Minimum-in-Rotated-Sorted-Array-II

## 说明
基于上一题目，但是旋转数组中有重复值。

```
4 5 6 7 0 1 2
```
相当于`0,1,2`旋转到右侧了


### 思路

* 1.二分法寻找(只不过相对复杂点，因为有重复值)
	* 设置left和right，计算mid值
	* 如果mid的值大于right，证明最小值肯定在右侧(不包括mid)
	* 如果mid的值小于right，代表肯定在mid的左侧(包括mid)
	* 如果相等，则right--
	* 然后更新left和right，依次类推