/**
 * 作者: dailc
 * 时间: 2017-04-08
 * 描述: PowXN
 * 
 * 来自: https://leetcode.com/problems/powx-n
 */
(function(exports) {

	/**
	 * @description myPow
	 * @param {number} x
 	 * @param {number} n
 	 * @return {number}
	 */
	exports.myPow = function(x,n) {
		if(n == 0) {
			return 1;
		}
		var isNegative = n < 0?true:false;
		n = Math.abs(n);
		var result = x;
		var i = 1;
		for( ; (i <<1)< n ; i <<= 1) {
			result *= result;
		}
		for( ; i < n; i ++) {
			result *= x;
		}
		if(isNegative) {
			result = 1/result;
		}
		return result;
	};
	
	exports.myPow2 = function(x,n) {
		var MAX_INT = Math.pow(2,31) - 1;
		var MIN_INT = - Math.pow(2,31);
		var result = myPow2(x,n);
		if(result > MAX_INT|| result < MIN_INT) {
			result = 0;
		}
		return result;
	};
	
	function myPow2(x,n) {
		
		if( n==0) {
			return 1;
		}
		if( n < 0) {
			return 1/myPow2(x,-n);
		} else {
			var half = myPow2(x,n>>1);
			if( !(n & 1)) {
				return half*half;
			} else {
				 return half*half*x;  
			}
		}
	}
	
	
	

})(window.LeetCode = window.LeetCode || {});