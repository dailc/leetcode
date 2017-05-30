/* 作者: dailc
 * 时间: 2017-05-30
 * 描述: Maximum-Product-Subarray
 * 
 * 来自: https://leetcode.com/problems/maximum-product-subarray
 */
(function(exports) {

	/**
	 * @description maxProduct
	 * @param {number[]} nums
 	 * @return {number}
	 */
	LeetCode.maxProduct = function(nums) {
		if(!nums) {
			return 0;
		}
		if(nums.length == 1) {
			return nums[0];
		}
		var len = nums.length;
		var maxLocal = nums[0];
		var minLocal = nums[0];
		var global = nums[0];
		for( var i = 1; i < len; i ++ ) {
			var maxCopy = maxLocal;
			maxLocal = Math.max(Math.max(nums[i]*maxLocal, nums[i]), nums[i]*minLocal);
			minLocal = Math.min(Math.min(nums[i]*maxCopy, nums[i]), nums[i]*minLocal);
			global = Math.max(global, maxLocal);
		}
		return global;
	}
	


})(window.LeetCode = window.LeetCode || {});