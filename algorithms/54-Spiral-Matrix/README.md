# Spiral-Matrix

## 说明

例如给一个矩阵:

```js
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
```

返回

```js
[1,2,3,6,9,8,7,4,5].
```

返回值是矩阵的顺时针遍历的值

## 思路

- 1.从外向内，一圈一圈的遍历
	* 从左到右
	* 从上到下
	* 从右到左
	* 从左到上
	
	一圈一圈，依次遍历