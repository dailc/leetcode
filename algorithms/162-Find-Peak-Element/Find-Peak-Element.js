/* 作者: dailc
 * 时间: 2017-06-02
 * 描述: Find-Peak-Element
 * 
 * 来自: https://leetcode.com/problems/find-peak-element
 */
(function(exports) {
	
	/**
	 * @description findPeakElement
	 * @param {number[]} nums
 	 * @return {number}
	 */
	LeetCode.findPeakElement = function(nums) {
		if(!nums) {
			return -1;
		}
		var len = nums.length;
		var left = 0,
			right = len - 1;
		var MIN_VALUE = -2147483648;
		nums[-1] = MIN_VALUE;
		nums[len] = MIN_VALUE;
		while(left < right) {
			var mid = ~~((left + right) / 2);
			if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
				return mid;
			} else if(nums[mid] < nums[mid - 1]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}
		return left;
	};
	

})(window.LeetCode = window.LeetCode || {});