/* 
 * 一刷时间: 2017-03-20
 * 二刷时间：2017-10-30
 * 来自: https://leetcode.com/problems/longest-common-prefix
 */
(function(exports) {

	/**
	 * @description 
	 * @param {String[]} strs
	 * @return {String} 
	 */
	exports.longestCommonPrefix2 = function(strs) {
		if(!strs || strs.length == 0) {
			return '';
		}
		var prefix = strs[0],
			size = strs.length;
		for(var i = 1; i < size; i++) {
			if(!prefix || !strs[i]) {
				return '';
			}
			var len = prefix.length < strs[i].length ? prefix.length : strs[i].length;

			var j;
			for(j = 0; j < len; j++) {
				if(prefix.charAt(j) != strs[i].charAt(j)) {
					break;
				}
			}
			prefix = prefix.substr(0, j);
		}
		return prefix;
	};

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