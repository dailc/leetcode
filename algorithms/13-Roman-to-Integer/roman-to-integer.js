/* 
 * 一刷时间: 2017-03-20
 * 二刷时间：2017-10-29
 * 来自: https://leetcode.com/problems/roman-to-integer
 */
(function(exports) {

	/**
	 * @param {string} s
	 * @return {number}
	 */
	function romanToInt(s) {
		if (!s) {
			return -1;
		}
		
		const len = s.length;
		let res = toNumber(s.charAt(0));
		
		for (let i = 1; i < len; i += 1) {
			const numPrev = toNumber(s.charAt(i - 1));
			const num = toNumber(s.charAt(i));
			
			if (numPrev < num) {
				res += num - 2 * numPrev;
			} else {
				res += num;
			}
		}
		
		return res;
	}
	
	exports.romanToInt = romanToInt;

	function toNumber(ch) {
		switch(ch) {
			case 'I':
				return 1;
			case 'V':
				return 5;
			case 'X':
				return 10;
			case 'L':
				return 50;
			case 'C':
				return 100;
			case 'D':
				return 500;
			case 'M':
				return 1000;
		}
		return 0;
	}

})(window.LeetCode = window.LeetCode || {});