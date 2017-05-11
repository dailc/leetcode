/* 作者: dailc
 * 时间: 2017-05-11
 * 描述: Best-Time-to-Buy-and-Sell-Stock
 * 
 * 来自: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
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
		var low = prices[0];
		var len = prices.length;
		for( var i = 1; i < len; i ++ ) {
			if(prices[i] < low) {
				low = prices[i];
			} else if(prices[i] - low > profit) {
				profit = prices[i] - low;
			}
		}
		
		return profit;
	};
	
})(window.LeetCode = window.LeetCode || {});