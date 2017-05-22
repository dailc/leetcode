/* 作者: dailc
 * 时间: 2017-05-22
 * 描述: Word-Break
 * 
 * 来自: https://leetcode.com/problems/word-break
 */
(function(exports) {
	
	/**
	 * @description wordBreak
	 * @param {string} s
 	 * @param {string[]} wordDict
 	 * @return {boolean}
	 */
	exports.wordBreak = function(s, wordDict) {
		if(!s) {
			return true;
		}
		if(!wordDict) {
			return false;
		}
		var dp = [];
		dp[0] = true;
		var len = s.length;
		for( var i = 0; i < len; i ++ ) {
			dp[i + 1] = dp[i + 1] || false;
			var str = s.substring(0, i + 1);
			if(wordDict.indexOf(str) != -1) {
				// 如果直接找到了
				dp[i + 1] = true;
				continue;
			}
			// 对每一个dp[i] 逐个进行切片判断
			for( var j = 0; j <= i; j ++ ) {
				var tmp = str.substr(j);
				if(dp[j] && (wordDict.indexOf(tmp) != -1)) {
					dp[i + 1] = true;
					break;
				}
			}
		}
		return dp[len];
	};

	
})(window.LeetCode = window.LeetCode || {});