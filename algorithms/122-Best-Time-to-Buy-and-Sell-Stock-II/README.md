## Best-Time-to-Buy-and-Sell-Stock-II

## 说明
给出一个一维数组，里面的每一个元素分别代表每天股票的价格。

和上题目类似，假设可以做很多次交易(一次交易就是买一次，卖一次)，但是每次买入之前必须先卖出，设计一个算法，找到最大的利润，例如:


### 思路

* 1. 贪心算法(只找波峰和波谷)，注意，程序内部没有必要将每一个买入和卖出点输出，只需要输出最大利益(要不然会想的很复杂的)
	* 从前向后遍历
	* 只要当天的价格高于前一天的价格，就计算收益