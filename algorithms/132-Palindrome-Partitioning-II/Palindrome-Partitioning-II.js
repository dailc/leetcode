/* 作者: dailc
 * 时间: 2017-05-17
 * 描述: Palindrome-Partitioning-II
 * 
 * 来自: https://leetcode.com/problems/palindrome-partitioning-ii
 */
(function(exports) {

	/**
	 * @description partition
	 * @param {string} s
 	 * @return {number}
	 */
	exports.minCut = function(s) {
		if(!s) {
			return 0;
		}
		
		var len = s.length;
		var dp = [];
		
		for( var i = len; i >= 0; i -- ) {
			dp[i] = len - i;
		}
		var matrix = [];
		for( var i = 0; i < len; i ++ ) {
			matrix[i] = [];
			for( var j = 0; j < len; j ++ ) {
				matrix[i][j] = false;
			}
		}
		
		for( var i = len - 1; i >= 0; i -- ) {
			for( var j = i; j < len; j ++ ) {
				if(s.charAt(i) == s.charAt(j)
					&& (j - i < 2 || matrix[i+1][j-1])
				) {
					matrix[i][j] = true;
					dp[i] = Math.min(dp[i], dp[j+1]+1);
				}
			}
		}
		
		return dp[0]-1; 
	};

})(window.LeetCode = window.LeetCode || {});