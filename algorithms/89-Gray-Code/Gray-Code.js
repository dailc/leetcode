/* 作者: dailc
 * 时间: 2017-04-24
 * 描述: Gray-Code
 * 
 * 来自: https://leetcode.com/problems/gray-code
 */
(function(exports) {

	/**
	 * @description grayCode
	 * @param {number} n
 	 * @return {number[]}
	 */
	exports.grayCode = function(n) {
		if(n<0) {
			return [];
		}
		var result = [];
		var num = 1<<n;
		var i = 0;
		while(i<num) {
			//^是异或操作
			result.push((i>>1)^(i++));
		}
		
		return result;
	};
	
	exports.grayCode2 = function(n) {
		return grayCodeR(n);
	};
	
	function grayCodeR(n) {
		var result = [];
		if(n==0) {
			result.push(0);
			return result;
		}
		var tmp = grayCodeR(n-1);
		var len = tmp.length;
		var addNumber = 1 << (n-1);
		result = result.concat(tmp);
		for( var i = len -1; i >= 0; i -- ) {
			//补上n-1里所有的
			result.push(addNumber+tmp[i]);
		}
		return result;
	}
	
	
	
	

	
})(window.LeetCode = window.LeetCode || {});