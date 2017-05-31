/* 作者: dailc
 * 时间: 2017-05-31
 * 描述: Find-Minimum-in-Rotated-Sorted-Array
 * 
 * 来自: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
 */
(function(exports) {

	/**
	 * @description findMin
	 * @param {number[]} nums
 	 * @return {number}
	 */
	LeetCode.findMin = function(nums) {
		if(!nums) {
			return 0;
		}
		var len = nums.length;
		var left = 0,
			right = len - 1;
		while(left < right) {
			if(nums[left] < nums[right]) {
				return nums[left];
			}
			var mid = ~~((left + right + 1)/2);
			if( nums[mid] > nums[right]) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}
		
		return nums[left];
	}
	


})(window.LeetCode = window.LeetCode || {});