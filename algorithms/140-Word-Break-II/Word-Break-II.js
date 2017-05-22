/* 作者: dailc
 * 时间: 2017-05-22
 * 描述: Word-Break-II
 * 
 * 来自: https://leetcode.com/problems/word-break-ii
 */
(function(exports) {
	
	/**
	 * @description wordBreak
	 * @param {string} s
 	 * @param {string[]} wordDict
 	 * @return {boolean}
	 */
	exports.wordBreak = function(s, wordDict) {
		if(!s||!wordDict) {
			return [];
		}
		var result = [];
		var path = [];
		var len = s.length;
		
		// i 表示从i索引开始的字串可以word break.
		var dp = getDp(s, wordDict);
		dfs(s, wordDict, path, result, dp, 0);
		
		return result;
	};
	
	function getDp(s, wordDict) {
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
		return dp;
	}
	
	function dfs(s, wordDict, path, result, canBreak, index) {
		var len = s.length;
		if(index == len) {
			// 到了末尾
			result.push(path.join(' '));
			return ;
		} else {
			if(!canBreak[index]) {
				return ;
			}
			for( var i = index; i < len; i ++ ) {
				// 注意这些索引的取值。左字符串的长度从0到len
				var left = s.substring(index, i + 1);
				
				if(wordDict.indexOf(left) == -1) {
					// 如果左字符串不在字典中，不需要继续递归
					continue;
				}
				path.push(left);
				dfs(s, wordDict, path, result, canBreak, i + 1);
				path.pop();
			}
		}
	}

	
})(window.LeetCode = window.LeetCode || {});