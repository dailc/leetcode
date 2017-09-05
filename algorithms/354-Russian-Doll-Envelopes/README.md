## Russian-Doll-Envelopes

## 说明

每一个信封都有宽度和高度`(w, h)`

如果一个信封的宽度和高度大于另一个信封，它能装下另一个信封

请问最多叠几层

例如

`envelopes`为`[[5,4],[6,4],[6,7],[2,3]]`，最大能叠`3`层

```js
 ([2,3] => [5,4] => [6,7])
```

### 思路

- 先排序（先高度，再宽度）

- 然后寻找递增序列

http://blog.csdn.net/jmspan/article/details/51688907

http://www.cnblogs.com/grandyang/p/5568818.html
