/* 作者: dailc
 * 时间: 2017-05-30
 * 描述: Reverse-Words-in-a-String
 * 
 * 来自: https://leetcode.com/problems/reverse-words-in-a-string
 */
(function(exports) {

	/**
	 * @description reverseWords
	 * @param {string} str
 	 * @returns {string}
	 */
	LeetCode.reverseWords = function(str) {
		if(!str) {
			return str;
		}
		var sentence = [],
			words = [],
			len = str.length;
		for( var i = 0; i < len; i ++ ) {
			var tmp = str.charAt(i);
			if(tmp == ' ') {
				if(words.length) {
					sentence.push(words.slice(0).join(''));
					words = [];
				}
			} else {
				words.push(tmp);
			}
		}
		if(words.length) {
			sentence.push(words.slice(0).join(''));
		}
		return sentence.reverse().join(' ');
	}
	
	
	
	
	// 反转字符串模拟
	function reverse(str, start, end) {
		if(!str) {
			return str;
		}
		// 不是c语言，无法直接使用指针，但是思路是同一个
		var pre = str.substring(0, start);
		var next = str.substr(end + 1);
		var curr = '';
		for( var i = end; i >= start; i -- ) {
			curr += str.charAt(i);
		}
		return pre + curr + next;
	}

})(window.LeetCode = window.LeetCode || {});