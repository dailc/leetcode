/* 
 * 一刷时间: 2017-03-20
 * 二刷时间：2017-10-30
 * 来自: https://leetcode.com/problems/longest-common-prefix
 */
(function(exports) {


	/**
	 * @param {string[]} strs
	 * @return {string}
	 */
	function longestCommonPrefix(strs) {
		if (!strs || strs.length === 0) {
			return '';
		}
		
		const size = strs.length;
		let prefix = strs[0];
		
		for (let i = 1; i < size; i += 1) {
			if (!strs[i] || !prefix) {
				return '';
			}
			
			// 比较
			const curStr = strs[i];
			const len = prefix.length  < curStr.length ? prefix.length :  curStr.length;
			let j = 0;
			
			for (; j < len; j += 1) {
				if (prefix.charAt(j) !== curStr.charAt(j)) {
					break;
				}
			}
			
			prefix = prefix.substr(0, j);
		}
		
		return prefix;
	}
	
	exports.longestCommonPrefix = longestCommonPrefix;

})(window.LeetCode = window.LeetCode || {});