/* 作者: dailc
 * 时间: 2017-04-27
 * 描述: Interleaving-String
 * 
 * 来自: https://leetcode.com/problems/interleaving-string
 */
(function(exports) {

 
	/**
	 * @description isInterleave
	 * @param {string} s1
 	 * @param {string} s2
 	 * @param {string} s3
 	 * @return {boolean}
	 */
	exports.isInterleave = function(s1,s2,s3) {
		if(!s3&&!s1&&!s2) {
			return true;
		} else if(!s3) {
			return false;
		} else {
			if(!s1&&s2) {
				return s2 == s3;
			} else if(!s2&&s1) {
				return s1 == s3;
			}
		}
		var len1 = s1.length,
			len2 = s2.length,
			len3 = s3.length;
		if(len1+len2!=len3) {
			return false;
		}
		var dp = [];
		for( var i = 0; i <= len1; i ++ ) {
			dp[i] = [];
		}
		
		dp[0][0] = true;
		
		for( var i = 1; i <= len1; i ++ ) {
			if(s1.charAt(i-1)==s3.charAt(i-1)&&dp[i-1][0]) {
				dp[i][0] = true;
			}
		}
		
		for( var j = 1; j <= len2; j ++ ) {
			if(s2.charAt(j-1)==s3.charAt(j-1)&&dp[0][j-1]) {
				dp[0][j] = true;
			}
		}
		
		for( var i = 1; i <= len1; i ++ ) {
			for( var j = 1; j <= len2; j ++ ) {
				if (s1.charAt(i - 1) == s3.charAt(i + j - 1) && dp[i - 1][j]) {  
                    dp[i][j] = true;  
                }  
                if (s2.charAt(j - 1) == s3.charAt(i + j - 1) && dp[i][j - 1]) {  
                    dp[i][j] = true;  
                }  
			}
		}
		return dp[len1][len2]||false;  
	};
	
	
	
	
})(window.LeetCode = window.LeetCode || {});