/* 作者: dailc
 * 时间: 2017-06-04
 * 描述: Excel-Sheet-Column-Title
 * 
 * 来自: https://leetcode.com/problems/excel-sheet-column-title
 */
(function(exports) {

	/**
	 * @description convertToTitle
	 * @param {number} n
 	 * @return {string}
	 */
	LeetCode.convertToTitle = function(n) {
		if(n <= 0) {
			return '';
		}
		var result = '';
		while( n > 0) {
			n --;
			var rem = n % 26;
			result = intToStr(rem) + result;
			
			n = ~~(n / 26);
		}
		
		
		return result;
	};
	
	/**
	 * @description 数字转为26进制字符串，只允许接收1-26的数字
	 * @param {Number} num
	 */
	function intToStr(num) {
		var tables = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		return tables.charAt(num);
	}
	
	
	
})(window.LeetCode = window.LeetCode || {});