## Single-Number-II

## 说明
上一题目的进阶，给出一个整数数组，除了一个元素外，其它元素都会出现3次，找出那个只会出现一次的元素

限制只能在`O(N)`内完成，尽量不使用额外内存。

### 思路

* 1.二进制操作
	* 利用三个变量，分别保存二进制位上出现一次，两次和三次的分布情况
	* 最后返回变量1
	* 每次循环先计算 出现两次的 1 的分布，然后计算出现一次的 1 的分布，接着 二者进行与操作得到出现三次的 1 的分布情况
	* 然后对 threes 取反，再与 ones、twos进行与操作，这样的目的是将出现了三次的位置清零。
		
	http://blog.csdn.net/jiadebin890724/article/details/23306837
	http://www.cnblogs.com/grandyang/p/4263927.html