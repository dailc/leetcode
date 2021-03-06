# Set-Matrix-Zeroes

## 说明

`m*n`的矩阵，如果一个元素是0，将相应的整行和整列的元素都替换为`0`。

注意: 用`m*n`额外空间的方法不可取。有一种简单的用`m+n`额外空间的仍然不是好的解决方案。能不能用一个常数空间？

## 思路

* 1.遍历整个数组，记录需要被设置为0的行与列号。然后遍历完后再次遍历进行赋值。
	* 这就是那个`m+n`空间的
	* 但是题目并不允许
* 2.优化，用数组本身的一行一列来判断当前行和列有没有0
	* 先扫描第一行第一列，如果有0，则将各自的flag设置为true
	* 然后扫描除去第一行第一列的整个数组，如果有0，则将对应的第一行和第一列的数字赋0
	* 再次遍历除去第一行第一列的整个数组，如果对应的第一行和第一列的数字有一个为0，则将当前值赋0
	* 最后根据第一行第一列的flag来更新第一行第一列