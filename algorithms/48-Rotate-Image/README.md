# Rotate-Image

## 说明

给一个`n*n`的2D矩阵(代表图片的像素)，需要将这张图片旋转90度(顺时针方向)，直接替换原有数组，尽量别用辅助空间

## 思路

先画图，得到矩阵90度旋转公式为`i=j, j=Math.abs((i-(n-1)))`即(i变为原来的j，j变为反转过来)

- 不用辅助矩阵，在原矩阵基础上进行替换
	* 第一次进行行与列替换`swap(matrix[i][j], matrix[j][i])`
	* 第二次进行`(swap(matrix[i][j], matrix[i][matrix.length-1-j])`
	* 譬如 
	
		```
		1  2  3             
		4  5  6
		7  8  9
		```
		行列转置后
		```
		1  4  7
		2  5  8
		3  6  9
		```
		然后横向反转
		```
		7  4  1
		8  5  2
		9  6  3
		```
