/* 作者: dailc
 * 时间: 2017-05-20
 * 描述: Single-Number-II
 * 
 * 来自: https://leetcode.com/problems/single-number-ii
 */
(function(exports) {

	/**
	 * @description singleNumber
	 * @param {number[]} nums
 	 * @return {number}
	 */
	exports.singleNumber = function(nums) {
		if(!nums) {
			return 0;
		}
		var one = 0,
			two = 0,
			three = 0;
		var len = nums.length;
		for( var i = 0; i < len; i ++ ) {
			two |= one & nums[i];
			one ^= nums[i];
			
			three = one & two;
			one &= ~three;
			two &= ~three;
		}
		return one;
	};

	exports.singleNumber2 = function(nums) {
		if(!nums) {
			return 0;
		}
		var a = 0,
			b = 0;
		
		var len = nums.length;
		for( var i = 0; i < len; i ++ ) {
			b = (b ^ nums[i]) & ~a;
            a = (a ^ nums[i]) & ~b;
		}
		
		return b;
	};
})(window.LeetCode = window.LeetCode || {});