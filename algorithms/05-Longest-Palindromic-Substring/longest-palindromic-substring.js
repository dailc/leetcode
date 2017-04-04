/**
 * 作者: dailc
 * 时间: 2016-12-12
 * 描述: Longest-Palindromic-Substring
 * 
 * 分别实现了几种方案:
 * 1.
 * 
 * 来自:https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
(function(exports) {

	/**
	 * @description 
	 * 平均时间复杂度 O(N²)
	 * 采用比较便于理解的中心拓展方法
	 * @param {String} str
	 * @return {String} 
	 */
	exports.longestPalindrome = function(str) {
		var len = str.length;
		if(len === 0) {
			return '';
		}
		//给定字符串，以及位置，进行两段拓展
		var expandAroundCenter = function(left,right){
			
			//符合拓展的条件
			while (left>=0&&right<=len-1&&str[left]==str[right]) {
				left --;
				right ++;
			}
			return str.substr(left+1,right-left-1);
		};
		//默认的字符串只取一位
		var longestStr = str.substr(0,1);
		for(var i=0;i<len-1;i++) {
			//奇数位的回文数
			var strOdd = expandAroundCenter(i,i);
			//偶数位的回文数
			var strEven = expandAroundCenter(i,i+1);
			longestStr = strOdd.length>longestStr.length?strOdd:longestStr;
			longestStr = strEven.length>longestStr.length?strEven:longestStr;
		}
		
		return longestStr;
		
	};
	

})(window.LeetCode = window.LeetCode || {});