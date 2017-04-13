/**
 * 作者: dailc
 * 时间: 2017-04-13
 * 描述: Unique-Paths
 * 
 * 来自: https://leetcode.com/problems/unique-paths
 */
(function(exports) {
	
	
	/**
	 * @description uniquePaths
	 * @param {number} m
 	 * @param {number} n
 	 * @return {number}
	 */
	exports.uniquePaths = function(m, n) {
		if(m<1||n<1) {
			return 0;
		}
		var step = [];
		for( var i = 0; i < m; i ++ ) {
			step[i] = [];
			for( var j = 0; j < n; j ++ ) {
				step[i][j] = 1;
			}
		}
		for( var i = 1; i < m; i ++ ) {
			for( var j = 1; j < n; j ++ ) {
				step[i][j] = step[i-1][j]+step[i][j-1];
			}
		}
		return step[m-1][n-1];
	};
	
	exports.uniquePaths2 = function(m, n) {
		if(m<1||n<1) {
			return 0;
		}
		if(m > n) {
			m = m + n;
			n = m - n;
			m = m - n;
		}
		var step = [];
		for( var j = 0; j < n; j ++ ) {
			step[j] = 1;
		}
		for( var i = 1; i < m; i ++ ) {
			for( var j = 1; j < n; j ++ ) {
				step[j] += step[j-1];
			}
		}
		return step[n-1];
	};

	

})(window.LeetCode = window.LeetCode || {});