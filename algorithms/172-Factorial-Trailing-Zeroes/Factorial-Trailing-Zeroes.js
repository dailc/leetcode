/* 作者: dailc
 * 时间: 2017-06-05
 * 描述: Factorial-Trailing-Zeroes
 * 
 * 来自: https://leetcode.com/problems/excel-sheet-column-number
 */
(function(exports) {

	/**
	 * @description trailingZeroes
	 * @param {number} n
 	 * @return {number}
	 */
	LeetCode.trailingZeroes = function(n) {
		return trailingZeroesRecurse(n);
	};
	
	
	function trailingZeroesRecurse(n) {
		return n == 0 ? 0 : (~~(n/5) + trailingZeroesRecurse(~~(n/5)));
	}
	
	
	LeetCode.trailingZeroes2 = function(n) {
		var res = 0;
		
		for( var i = 5; ~~(n / i) > 0; i *= 5 ) {
			res += ~~(n / i);
		}
		
		return res;
	};
	
	
	
})(window.LeetCode = window.LeetCode || {});