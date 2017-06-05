/* 作者: dailc
 * 时间: 2017-06-05
 * 描述: Excel-Sheet-Column-Number
 * 
 * 来自: https://leetcode.com/problems/excel-sheet-column-number
 */
(function(exports) {

	/**
	 * @description titleToNumber
	 * @param {string} s
 	 * @return {number}
	 */
	LeetCode.titleToNumber = function(s) {
		if(!s) {
			return 0;
		}
		var res = 0;
		// 从头遍历到尾部
		while(s) {
			var tmp = s.substr(0, 1);
			tmp = strToInt(tmp);
			
			res = 26* res + tmp;
			s = s.substr(1);
		}
		
		return res;
	};
	
	/**
	 * @description 字符串转为数字
	 * @param {String} str
	 */
	function strToInt(str) {
		var tables = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		return tables.indexOf(str) + 1;
	}
	

	
	
	
})(window.LeetCode = window.LeetCode || {});