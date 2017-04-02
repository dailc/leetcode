/**
 * 作者: dailc
 * 时间: 2017-04-02
 * 描述: Search-Insert-Position
 * 
 * 来自: https://leetcode.com/problems/search-insert-position
 */
(function(exports) {

	/**
	 * @description searchInsert
	 * @param {number[]} nums
 	 * @param {number} target
 	 * @return {number}
	 */
	exports.searchInsert = function(nums, target) {
		if(!nums) {
			return -1;
		}
		var left = 0,
			right = nums.length - 1,
			mid = 0;
		var result = -1;
		//先找中间值
		while(left <= right) {
			mid = Math.floor((left+right)/2);
			if(nums[mid] == target) {
				return mid;
			}
			if(nums[mid] > target) {
				right = mid -1;
			} else {
				left = mid + 1;
			}
		}
		//直接二分法即可
		return left;
	};
	
	
})(window.LeetCode = window.LeetCode || {});