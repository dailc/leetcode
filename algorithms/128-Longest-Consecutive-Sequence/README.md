## Longest-Consecutive-Sequence

## 说明
给一个没有排序的整数数组，找出数组中的元素最长的连续序列，例如:

```
[100, 4, 200, 1, 3, 2]
```
返回`4`，即为`[1, 2, 3, 4]`

必须在时间O(N)复杂度上完成

### 思路
如果不是O(N)，倒是挺好解决的，先进行一次快速排序即可，但问题是需要O(N)复杂度，
而且整数的范围没有确定，因此也无法使用计数排序，因此排除排序的考虑。

* 1.用一个map记录每一个数字的存储情况