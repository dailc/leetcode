/* 作者: dailc
 * 时间: 2017-06-08
 * 描述: Best-Time-to-Buy-and-Sell-Stock-IV
 * 
 * 来自: https://leetcode.com/problems/repeated-dna-sequences
 */
(function(exports) {

	/**
	 * @description maxProfit
	 * @param {number} k
 	 * @param {number[]} prices
 	 * @return {number}
	 */
	LeetCode.maxProfit = function(k, prices) {
		if(k <= 0 || !prices || prices.length == 0) {
			return 0;
		}
		if(k >= prices.length) {
			return solveMaxProfit(prices);
		}
		var profit = 0;
		var len = prices.length;
		var global = [],
			local = [];
		for( var i = 0; i < len; i ++ ) {
			global[i] = [];
			local[i] = [];
			for( var j = 0; j <= k; j ++ ) {
				global[i][j] = 0;
				local[i][j] = 0;
			}
		}
		
		for( var i = 1; i < len; i ++ ) {
			var diff = prices[i] - prices[i-1];
			for( var j = 1; j <= k; j ++ ) {
				local[i][j] = Math.max((global[i-1][j-1])+Math.max(diff,0),(local[i-1][j]+diff));
				global[i][j] = Math.max(local[i][j],global[i-1][j]);
				
			}
		}
		
		return global[len - 1][k];
	};
	
	function solveMaxProfit(prices) {
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
	}
})(window.LeetCode = window.LeetCode || {});