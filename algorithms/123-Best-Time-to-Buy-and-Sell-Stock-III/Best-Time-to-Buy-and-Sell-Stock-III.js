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
		if(!prices||prices.length == 0) {
			return 0;
		}
		var profit = 0;
		var len = prices.length;
		var global = [],
			local = [];
		for( var i = 0; i < len; i ++ ) {
			global[i] = [];
			local[i] = [];
			for( var j = 0; j <= 2; j ++ ) {
				global[i][j] = 0;
				local[i][j] = 0;
			}
		}
		
		for( var i = 1; i < len; i ++ ) {
			var diff = prices[i] - prices[i-1];
			for( var j = 1; j <= 2; j ++ ) {
				local[i][j] = Math.max((global[i-1][j-1])+Math.max(diff,0),(local[i-1][j]+diff));
				global[i][j] = Math.max(local[i][j],global[i-1][j]);
				
			}
		}
		
		return global[len - 1][2];
	};
	
})(window.LeetCode = window.LeetCode || {});