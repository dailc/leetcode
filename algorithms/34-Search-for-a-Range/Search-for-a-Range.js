/**
 * 作者: dailc
 * 时间: 2017-04-01
 * 描述: Search-for-a-Range
 * 
 * 来自: https://leetcode.com/problems/search-for-a-range
 */
(function(exports) {

	/**
	 * @description searchRange
	 * 二分法-假设没有重复的做法
	 * @param {number[]} nums
 	 * @param {number} target
 	 * @return {number}
	 */
	exports.searchRange = function(nums, target) {
		if(!nums) {
			return -1;
		}
		var left = 0,
			right = nums.length - 1,
			mid = 0;
		var res = [-1,-1];
		//先找中间值
		while(left <= right) {
			mid = Math.floor((left+right)/2);
			if(nums[mid] == target) {
				res[0] = mid;
				res[1] = mid;
				break;
			}
			if(nums[mid] > target) {
				right = mid -1;
			} else {
				left = mid + 1;
			}
		}
		
		if(nums[mid] != target) {
			return res;
		}
		var left = mid;
		while(left > 0 && nums[left] == target) {
			left --;
		}
		if( nums[left] != target) {
			left ++;
		}
		var right = mid;
		while(right < nums.length && nums[right] == target) {
			right ++;
		}
		if( nums[right] != target) {
			right --;
		}
		
		return [left,right];
	};
	
	
})(window.LeetCode = window.LeetCode || {});