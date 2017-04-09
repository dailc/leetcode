/**
 * 作者: dailc
 * 时间: 2017-04-09
 * 描述: Maximum-Subarray
 * 
 * 来自: https://leetcode.com/problems/n-queens-ii
 */
(function(exports) {

	/**
	 * @description maxSubArray
	 * @param {number[]} nums
	 * @return {number}
	 */
	exports.maxSubArray = function(nums) {
		if(!nums) {
			return 0;
		}
		var sum = 0,
			maxSum = -Infinity;
		for(var i = 0, len = nums.length; i < len; i++) {
			if(sum <= 0) {
				sum = nums[i];
			} else {
				sum += nums[i];
			}
			if(sum > maxSum) {
				maxSum = sum;
			}
		}
		return maxSum;

	};

})(window.LeetCode = window.LeetCode || {});