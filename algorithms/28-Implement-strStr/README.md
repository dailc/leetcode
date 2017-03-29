## Implement-strStr

## 说明
`strStr(haystack, needle)`，找到needle在hysyack中出现的索引，如果不存在，返回-1

### 思路

* 1.第一想法就是循环遍历(结果`Time Limit Exceeded`)
* 2.在第一想法上进行优化，省去了一些不必要的计算，但仍然没有AC，证明O(NM)的算法无法通过
* 3.KMP算法，复杂度O(M+N)，AC了，但是这个算法确实挺难懂的
