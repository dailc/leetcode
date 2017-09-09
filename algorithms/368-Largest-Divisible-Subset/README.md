## Largest-Divisible-Subset

## 说明

给一个整数集合，里面的元素各不相同，找到里面最大的子集合，集合中每一对`(si, sj)`满足`si % sj = 0`或`sj % si = 0`

如果有多个选择，返回任意一个即可，例如

```js
nums: [1,2,3]

Result: [1,2] (of course, [1,3] will also be ok)
```

```js
nums: [1,2,4,8]

Result: [1,2,4,8]
```

### 思路

- 先排序，然后动态规划

http://blog.csdn.net/qq508618087/article/details/51767785

http://blog.csdn.net/yeqiuzs/article/details/51773890