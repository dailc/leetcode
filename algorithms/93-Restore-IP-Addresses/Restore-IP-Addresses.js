/* 作者: dailc
 * 时间: 2017-04-25
 * 描述: Restore-IP-Addresses
 * 
 * 来自: https://leetcode.com/problems/restore-ip-addresses
 */
(function(exports) {

	/**
	 * @description restoreIpAddresses
	 * @param {string} s
	 * @return {string[]}
	 */
	exports.restoreIpAddresses = function(s) {
		var result = [];
		if(s == null || s.length < 4 || s.length > 12) {
			return result;
		}
		dfs(result,s, '', 0);

		return result;
	};

	function dfs(result, s, tmp, count) {
		if(count == 3 && isValid(s)) {
			result.push(tmp+s);
			return;
		} else {
			for(var i = 0; i <= 3 && i < s.length - 1; i++) {
				var tmpStr = s.substring(0, i+1);
				if(isValid(tmpStr)) {
					dfs(result, s.substring(i+1, s.length), tmp + tmpStr +'.', count+1);
				}
			}
		}

	}

	function isValid(s) {
		if(s.charAt(0) == '0') {
			return s == "0";
		}
		var num = parseInt(s);

		return num > 0 && num <= 255;
	}

})(window.LeetCode = window.LeetCode || {});