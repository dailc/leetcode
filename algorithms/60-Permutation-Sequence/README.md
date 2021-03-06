# Permutation-Sequence

## 说明

有一个序列`[1,2,3,...,n]`有`n!`个排列，排列遵循如下顺序:

例如`n=3`，顺序为:

1. "123"
2. "132"
3. "213"
4. "231"
5. "312"
6. "321"

要求，给定n和k，返回n数组的排列中的第k个排列(n将介于1和9之间)

## 思路

-.找数学规律
	* 对于n个数可以有n!种排列；那么n-1个数就有(n-1)!种排列。
	* 那么对于n位数来说，如果除去最高位不看，后面的n-1位就有 (n-1)!种排列。
	* 所以，还是对于n位数来说，每一个不同的最高位数，后面可以拼接(n-1)!种排列。
	* 所以你就可以看成是按照每组(n-1)!个这样分组。 
	* 利用 k/(n-1)! 可以取得最高位在数列中的index。这样第k个排列的最高位就能从数列中的index位取得，此时还要把这个数从数列中删除。
	* 然后，新的k就可以有k%(n-1)!获得。循环n次即可。
	* 同时，为了可以跟数组坐标对其，令k先--(为了让下标从0开始)。
	
	http://www.cnblogs.com/jiajiaxingxing/p/4545500.html
	http://blog.csdn.net/linhuanmars/article/details/22028697
	
重点是->从第一位开始确认，依次确认每一位的值应该是什么