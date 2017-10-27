# Container-With-Most-Water

## 说明

给`n`个非负整数`a1,a2,...,an`

每一个代表一个坐标点`(i, ai)`

坐标轴上有`n`条竖线，两端分别是`(i, ai)`和`(i, 0)`

找到两条竖线，连同`X`轴，使得面积能装最多的谁。

## 思路

实际上就是求两条线+坐标轴构成的梯形中的矩形面积（因为水超过那个矩形后就会溢出了）

暴力解答时间过长，可以舍弃，考虑一种`O(N)`方法

原理是，我们将那些肯定不是最大面积的计算剔除了，只计算了一些可能是最大面积的值。
(默认是距离最大，然后接下来计算的是可能的值最大的面积)

```js
while(left < right) {
	maxArea = getMaxArea(maxArea, arr[left], arr[right]);
	// 只会去掉一条比较小的边
	if(arr[right] > arr[left]) {
		left ++;
	} else {
		right --;
	}
}
```

