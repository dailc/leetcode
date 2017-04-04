/**
 * 作者: dailc
 * 时间: 2016-12-12
 * 描述: longest-substring-without-repeating-characters
 * 分别实现了几种方案:
 * 1.
 * 
 * 来自:https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
(function(exports) {

	/**
	 * @description 获取字符串的最长 子substring的长度,不包含重复字符串
	 * 时间复杂度 0(N)
	 * @param {String} str 目标字符串
	 * @return {Number} 最长子substring的长度
	 */
	exports.lengthOfLongestSubstring = function(str) {
		var len = str.length;
		var index = 0;
		var maxLen = 0;
		var tmp = '';
		while(index < len) {
			var comp = str.charAt(index);
			if(tmp.indexOf(comp) == -1) {
				tmp += comp;
			} else {
				//假如重复字符串时  abc a  那么接下来应该是bca
				tmp = tmp.substring(tmp.indexOf(comp)+1)+comp;
			}
			var tmpLen = tmp.length;
			//js中,由于只要返回一个最大长度,所以可以直接记录一个长度即可
			if(tmpLen > maxLen) {
				maxLen = tmpLen;
			}
			index++;
		}
		return maxLen;
	};

})(window.LeetCode = window.LeetCode || {});