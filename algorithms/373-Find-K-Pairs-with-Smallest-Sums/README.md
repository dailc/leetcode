## Find-K-Pairs-with-Smallest-Sums

## 说明

给两个整形数组`nums1`和`nums2`，以及一个整数`k`，数组都是升序排序

定义键值对`(u, v)`代表一个元素是`nums1`中的，一个元素是`nums2`中的

找到和最小的前`k`个对，`(u1, v1), ..., (ul, vk)`

例如

```js
nums1 = [1,7,11], nums2 = [2,4,6],  k = 3

返回
[1,2],[1,4],[1,6]

对应的键值对为
[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
```

```js
Given nums1 = [1,1,2], nums2 = [1,2,3],  k = 2

Return: [1,1],[1,1]

The first 2 pairs are returned from the sequence:
[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
```

```js
Given nums1 = [1,2], nums2 = [3],  k = 3 

Return: [1,3],[2,3]

All possible pairs are returned from the sequence:
[1,3],[2,3]
```

### 思路

- 可以考虑用优先级数组，防止排序

- 或者遍历nums1数组，对于nums1数组中的每一个数字，我们并不需要遍历nums2中所有的数字，实际上，对于nums1中的数字，我们只需要记录nums2中下一个可能组成数字对的坐标

http://www.cnblogs.com/grandyang/p/5653127.html