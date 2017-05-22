## Candy

## 说明
有`N`个孩子站成一排，每一个孩子有分配一个`权值`。

需要按照如下规则进行糖果分配:

* 每一个孩子至少有一颗糖
* `权值`高的孩子要比旁边权值低的孩子的糖果多

请问最小需要最少糖果？

### 思路

* 1.由于糖果和`权值`成比例关系，因此转换为求最大公约数
	* 利用欧几里德法求公约数
	
	http://www.cnblogs.com/hexiaochun/archive/2012/09/03/2668250.html
	
	* 结果发现审题错误，例如`[1,2,2]`我以为应该是`5`，但要求是`4`，可见并不是成比例
* 2.根据提示，用贪心算法
	* 如果一个孩子比另一个孩子的分高，我们只多给1块糖
	* 先从左往右遍历，确保每个孩子根他左边的孩子相比，如果分高，则糖要多1个，如果分比左边低，就只给一颗
	* 然后我们再从右往左遍历，确保每个孩子跟他右边的孩子相比，如果分高则糖至少多加1个（
	* 这里至少多加1个的意思是，我们要取当前孩子手里糖的数量，和其右边孩子糖的数量加1，两者的较大值）
	
	https://segmentfault.com/a/1190000003815604