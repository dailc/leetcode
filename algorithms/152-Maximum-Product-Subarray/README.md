## Maximum-Product-Subarray

## 说明
找到一个数组中的有最大乘积的连续子数组(最少包含一个元素)，例如:

```
[2,3,-2,4]
```
符合条件的子数组为`[2,3]`，乘积为`6`

### 思路

* 1.动态规划
	* 同时维护一个局部最优和局部最小
	
	http://blog.csdn.net/linhuanmars/article/details/39537283