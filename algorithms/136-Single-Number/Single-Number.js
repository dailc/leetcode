/* 作者: dailc
 * 时间: 2017-05-20
 * 描述: Single-Number
 * 
 * 来自: https://leetcode.com/problems/single-number
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
		var len = nums.length;
		var result = nums[0];
		for( var i = 1; i < len; i ++ ) {
			result ^= nums[i];
		}
		return result;
	};

	
})(window.LeetCode = window.LeetCode || {});