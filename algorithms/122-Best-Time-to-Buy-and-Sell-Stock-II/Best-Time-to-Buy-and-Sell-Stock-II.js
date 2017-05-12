/* 作者: dailc
 * 时间: 2017-05-12
 * 描述: Best-Time-to-Buy-and-Sell-Stock-II
 * 
 * 来自: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 */
(function(exports) {

	
	/**
	 * @description maxProfit
	 * @param {number[]} prices
 	 * @return {number}
	 */
	exports.maxProfit = function(prices) {
		if(!prices) {
			return 0;
		}
		var profit = 0;
		var len = prices.length;
		
		for( var i = 0; i < len - 1; i ++ ) {
			if(prices[i+1] - prices[i] > 0) {
				profit = profit + prices[i+1] - prices[i];
			}
		}
		
		return profit;
	};
	
})(window.LeetCode = window.LeetCode || {});