## Insert-Interval

## 说明
和上一题类似，一样区间的合并，不过区别在于，这次是:
给定一个已经排好序并且没有重合的区间序列，然后插入一个新的区间，重新进行合并，例如:

```
[1,3],[6,9]
```
插入`[4,9]`
返回

```
[1,5],[6,9].
```

### 思路

* 1.不考虑重复计算，和上题一样，先插入，再排序，然后再合并(AC了)
* 2.由于已经是排序好的，所以可以直接插入到具体位置(用二分查找)，然后再合并
* 3.不再给予上次merge的代码，而是重新遍历
	* 如果新区间的end < 当前区间的start，不用找下去了，把新区间插入到当前区间的前面，然后返回。
	* 如果当前区间的end小于新区间的start，继续遍历找下一个区间。
	* 如果当前区间和新区间发生重合，则start取两者最小的start，end取两者最大的end，生成一个新的区间，继续遍历。