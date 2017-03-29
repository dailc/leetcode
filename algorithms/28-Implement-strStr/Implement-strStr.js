/**
 * 作者: dailc
 * 时间: 2017-03-28
 * 描述: Implement-strStr
 * 
 * 来自: https://leetcode.com/problems/implement-strstr
 */
(function(exports) {

	/**
	 * @description strStr
	 * @param {string} haystack
 	 * @param {string} needle
 	 * @return {number}
	 */
	exports.strStr = function(haystack, needle) {
		if(haystack == null || needle == null) {
			return -1;
		}
		if(needle == '') {
			return 0;
		}
		
		var len = haystack.length,
			len2 = needle.length;
		for(var i = 0; i < len; i ++) {
			var tmp = '';
			for(var j = i; j < i+len2; j ++) {
				tmp += haystack.charAt(j);
			}
			if(tmp == needle) {
				return i;
			}
		}
		return -1;
	};
	
	/**
	 * @description strStr
	 * @param {string} haystack
 	 * @param {string} needle
 	 * @return {number}
	 */
	exports.strStr2 = function(haystack, needle) {
		if(haystack == null || needle == null) {
			return -1;
		}
		if(!needle) {
			return 0;
		}
		
		var len = haystack.length,
			len2 = needle.length;
		for(var i = 0; i < len; i ++) {
			var j = 0;
			for(; j < len2; j ++) {
				if(haystack.charAt(i+j)!=needle.charAt(j)) {
					break;
				}
			}
			if(j == len2) {
				return i;
			}
		}
		return -1;
	};
	
	/**
	 * @description strStr
	 * @param {string} haystack
 	 * @param {string} needle
 	 * @return {number}
	 */
	exports.strStr3 = function(haystack, needle) {
		if(haystack == null || needle == null) {
			return -1;
		}
		if(!needle) {
			return 0;
		}
		
		var len = haystack.length,
			len2 = needle.length;
		var lps = kmpprocess(needle);
		for(var i = 0, j = 0; i < len; ) {
			if(haystack.charAt(i)==needle.charAt(j)) {
				i++;
				j++;
			}
			if(j == len2) {
				return i - j;
			}
			if( i < len && haystack.charAt(i)!=needle.charAt(j)) {
				if(j) {
					j = lps[j - 1];
				} else {
					i ++;
				}
			}
		}
		return -1;
	};
	
	function kmpprocess(needle) {
		var len = needle.length;
		var lps = [];
		lps[0] = 0;
		for(var i = 1,count = 0; i < len; ) {
			if(needle.charAt(i)==needle.charAt(count)) {
				lps[i++] = ++count;
			} else if(count) {
				count = lps[count-1];
			} else {
				lps[i++] = 0;
			}
		}
		return lps;
	}
	
	
	
	

})(window.LeetCode = window.LeetCode || {});