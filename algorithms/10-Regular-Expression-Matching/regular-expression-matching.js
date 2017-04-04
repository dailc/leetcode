/**
 * 作者: dailc
 * 时间: 2017-03-06
 * 描述: regular-expression-matching
 * 
 * 来自:https://leetcode.com/problems/regular-expression-matching
 */
(function(exports) {

	/**
	 * @description 
	 * 正在表达式匹配
	 * @param {String} string
	 * @param {String} pattern
	 * @return {Boolean} 
	 */
	exports.isMatch = function(str, pattern) {
		// 注意 "" 匹配 ".*" 也应该返回true
		return isMatchRecursely(str, pattern, 0, 0);
	};

	// 递归法
	function isMatchRecursely(str, pattern, sIndex, pIndex) {
		if(pIndex === pattern.length) {
			return sIndex === str.length;
		}
		//如果p是最后一位，否则p的下一位不是*
		if(pIndex === pattern.length - 1 || pattern.charAt(pIndex + 1) !== '*') {
			if(str.charAt(sIndex) === pattern.charAt(pIndex) ||
				pattern.charAt(pIndex) === '.') {
				return isMatchRecursely(str, pattern, sIndex + 1, pIndex + 1);
			} else {
				return false;
			}
		}

		//否则p的下一位是*
		//如果刚好str里面又满足条件
		while(sIndex < str.length &&
			(pattern.charAt(pIndex) === '.' ||
				str.charAt(sIndex) === pattern.charAt(pIndex))) {
					//有*号的情况，要判断除去改* 号 1,2...N个数的情况
					if(isMatchRecursely(str, pattern, sIndex, pIndex + 2)) {
						return true;
					}
					sIndex++;
		}				
		
		//跳过 当前判断字符和*
		return isMatchRecursely(str, pattern, sIndex, pIndex + 2);
	}

})(window.LeetCode = window.LeetCode || {});