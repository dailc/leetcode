/* 作者: dailc
 * 时间: 2017-05-08
 * 描述: Distinct-Subsequences
 * 
 * 来自: https://leetcode.com/problems/distinct-subsequences
 */
(function(exports) {
	
	/**
	 * @description numDistinct
	 * @param {string} s
 	 * @param {string} t
 	 * @return {number}
	 */
	exports.numDistinct = function(s, t) {
		if(!s&&!t) {
			return 1;
		} else if(!s) {
			return 0;
		} else if(!t) {
			return 1;
		}
		
		var dp = [];
		var lens = s.length;
		var lent = t.length;
		
		for( var i = 0; i <= lent; i ++ ) {
			dp[i] = [];
		}
		
		dp[0][0] = 1;
		
		for( var i = 1; i <= lent; i ++ ) {
			dp[i][0] = 0;
		}
		
		for( var j = 1; j <= lens; j ++ ) {
			dp[0][j] = 1;
		}
		
		for( var i = 1; i <= lent; i ++ ) {
			for( var j = 1; j <= lens; j ++ ) {
				dp[i][j] = dp[i][j-1];
				if(t.charAt(i-1) == s.charAt(j-1)) {
					dp[i][j] += dp[i-1][j-1];
				}
			}
		}
		return dp[lent][lens];
	};
	
	
})(window.LeetCode = window.LeetCode || {});