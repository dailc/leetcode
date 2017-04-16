/**
 * 作者: dailc
 * 时间: 2017-04-16
 * 描述: Climbing-Stairs
 * 
 * 来自: https://leetcode.com/problems/climbing-stairs
 */
(function(exports) {

	/**
	 * @description climbStairs
	 * @param {number} n
 	 * @return {number}
	 */
	exports.climbStairs = function(n) {
		if( n == 1) {
			return 1;
		} else if(n == 2) {
			return 2;
		} else {
			return exports.climbStairs(n-1)+exports.climbStairs(n-2);
		}
		
	};
	
	exports.climbStairs2 = function(n) {
		if( n == 1) {
			return 1;
		} else if(n == 2) {
			return 2;
		} 
		var f1 = 1;
		var f2 = 2;
		var fn = f1+f2;
		var index = 3;
		while(index < n) {
			f1 = f2;
			f2 = fn;
			fn = f1 + f2;
			index ++;
		}
		
		return fn;
	};

	
})(window.LeetCode = window.LeetCode || {});