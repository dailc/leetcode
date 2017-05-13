/* 作者: dailc
 * 时间: 2017-05-13
 * 描述: Valid-Palindrome
 * 
 * 来自: https://leetcode.com/problems/binary-tree-maximum-path-sum
 */
(function(exports) {


	/**
	 * @description isPalindrome
	 * @param {string} s
 	 * @return {boolean}
	 */
	exports.isPalindrome = function(s) {
		if(!s) {
			return true;
		}
		var len = s.length;
		var left = 0,
			right = len - 1;
		while(left < right) {
			var leftC = s.charAt(left).toLowerCase();
			var rightC = s.charAt(right).toLowerCase();
			if(!isAlphaNum(leftC)) {
				left ++;
			} else if(!isAlphaNum(rightC)) {
				right --;
			} else if(leftC != rightC) {
				return false;
			} else {
				left ++;
				right --;
			}			
		}
		
		return true;
	};
	
	function isAlphaNum(ch) {
		if(ch >= 'a' && ch <= 'z') {
			return true;
		}
		if(ch >= 'A' && ch <= 'Z') {
			return true;
		}
		if(ch >= '0' && ch <= '9') {
			return true;
		}
		return false;
	}
	
})(window.LeetCode = window.LeetCode || {});