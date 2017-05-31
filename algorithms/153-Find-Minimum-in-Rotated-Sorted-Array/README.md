## Find-Minimum-in-Rotated-Sorted-Array

## 说明
找出升序排列的旋转数组中的最小值，旋转数组示例:

```
4 5 6 7 0 1 2
```
相当于`0,1,2`旋转到右侧了

假设数组中没有重复的值。

### 思路
没有重复值可以减少很大部分工作量

* 1.二分法寻找
	* 设置left和right，计算mid值
	* 如果left小于right，那么最小值就是left
	* 如果mid的值，如果大于right，证明最小值肯定在右侧(不包括mid)
	* 否则代表肯定在mid的左侧(包括mid)
	* 然后更新left和right，依次类推