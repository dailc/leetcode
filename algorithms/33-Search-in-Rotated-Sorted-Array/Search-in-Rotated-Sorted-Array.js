/**
 * 作者: dailc
 * 时间: 2017-04-01
 * 描述: Search-in-Rotated-Sorted-Array
 * 
 * 来自: https://leetcode.com/problems/search-in-rotated-sorted-array
 */
(function(exports) {

	/**
	 * @description search
	 * 二分法-假设没有重复的做法
	 * @param {number[]} nums
 	 * @param {number} target
 	 * @return {number}
	 */
	exports.search = function(nums, target) {
		if(!nums) {
			return -1;
		}
		var left = 0,
			right = nums.length - 1,
			mid = 0;
		
		while(left <= right) {
			mid = Math.floor((left+right)/2);
			if(nums[mid] == target) {
				return mid;
			}
			if(nums[left]<=nums[mid]) {
				//如果左半部分是有序的
				if(nums[left] <= target && target < nums[mid]){
					right = mid -1;
				} else {
					left = mid +1;
				}
			} else {
				//如果右半部分是有序的
				if(nums[mid]<target&&target <=nums[right]) {
					left = mid +1;
				} else {
					right = mid -1;
				}
			}
			
		}
		
		return -1;
	};
	
	/**
	 * @description search
	 * 递归 考虑  1,3,1,1,1 等情况
	 * @param {number[]} nums
 	 * @param {number} target
 	 * @return {number}
	 */
	exports.search2 = function(nums, target) {
		if(!nums) {
			return -1;
		}
		return helper(nums,0,nums.length-1,target);
	};
	function helper(nums,left,right,target) {
		var mid = Math.floor((left+right)/2);
		if(left > right) {
			return -1;
		}
		if(nums[mid]==target) {
			return mid;
		}
		var leftIndex = -1,
			rightIndex = -1;
		
		if(nums[left] <= nums[mid]) {
			//左边有序
			if(nums[left] <= target && target < nums[mid]) {
				leftIndex = helper(nums,left,mid - 1,target);
			} else {
				leftIndex = helper(nums,mid +1,right,target);
			}
		}
		//如果右边也是有序的
		if(nums[mid] <= nums[right]) {
			//看目标是否在右边序列
			if(nums[mid] < target && target <= nums[right]) {
				rightIndex = helper(nums,mid +1,right,target);
			} else {
				rightIndex = helper(nums,left,mid - 1,target);
			}
		}
		
		return (leftIndex!=-1?leftIndex:rightIndex);
	}
	
})(window.LeetCode = window.LeetCode || {});