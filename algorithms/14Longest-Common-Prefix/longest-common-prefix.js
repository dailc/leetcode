/**
 * 作者: dailc
 * 时间: 2017-03-20
 * 描述: Longest-Common-Prefix
 * 
 * 来自:https://leetcode.com/problems/longest-common-prefix
 */
(function(exports) {

	/**
	 * @description 
	 * @param {String[]} strs
	 * @return {String} 
	 */
	exports.longestCommonPrefix = function(strs) {
		if(!strs||strs.length==0) {
			return '';
		}
		var prefix = strs[0],
			size = strs.length;
		for(var i = 1; i < size; i++) {
			if(!prefix||!strs[i]) {
				return '';
			}
			var len = prefix.length<strs[i].length?prefix.length:strs[i].length;
			
			var j;
			for(j = 0; j<len; j++) {
				if(prefix.charAt(j)!=strs[i].charAt(j)) {
					break;
				}
			}
			prefix = prefix.substr(0,j); 
		}
		return prefix; 
	};
	
	
	

})(window.LeetCode = window.LeetCode || {});