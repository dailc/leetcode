/**
 * 作者: dailc
 * 时间: 2017-04-15
 * 描述: Add-Binary
 * 
 * 来自: https://leetcode.com/problems/add-binary
 */
(function(exports) {

	/**
	 * @description addBinary
	 * @param {string} a
 	 * @param {string} b
 	 * @return {string}
	 */
	exports.addBinary = function(a,b) {
		if(!a||!b) {
			return '';
		}
		var len1 = a.length,
			len2 = b.length;
		
		var maxStr = len1 > len2 ? a : b;
		var minLen = Math.min(len1,len2);
		var maxLen = Math.max(len1,len2);
		
		var carry = 0;
		//后续反转
		var result = [];
		for( var i = 0; i < minLen; i ++ ) {
			var tmp = (a.charAt(len1 -1 - i) - '')+(b.charAt(len2 -1 - i) - '') + carry;
			result[i] = tmp%2;
			carry = Math.floor(tmp/2);
		}
		for( var i = 0; i < maxLen-minLen; i ++ ) {
			var tmp = (maxStr.charAt(maxLen-minLen -1 - i) - '') + carry;
			result[minLen+i] = tmp%2;
			carry = Math.floor(tmp/2);
		}
		if(carry==1) {
			result.push(1);
		}
		
		return result.reverse().join('');
	};
	
})(window.LeetCode = window.LeetCode || {});