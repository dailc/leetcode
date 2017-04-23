## Merge-Sorted-Array

## 说明
给出两个排好序的整形数组，`nums1`和`nums2`，将两个数组合并成一个，将`nums2`合并到`nums1`中，结果仍然排序

### 思路

* 1.双指针遍历,依次将nums2中的数插入nums1中
	* 注意，如果nums1的m为0，需要先去除
* 2.不用js的splice，而是从后往前遍历