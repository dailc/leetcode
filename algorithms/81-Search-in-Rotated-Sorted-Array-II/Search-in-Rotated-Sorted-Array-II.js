/**
 * 作者: dailc
 * 时间: 2017-04-21
 * 描述: Search-in-Rotated-Sorted-Array-II
 * 
 * 来自: https://leetcode.com/problems/search-in-rotated-sorted-array-ii
 */
(function(exports) {

		/**
		 * @description search
		 * @param {number[]} nums
 		 * @param {number} target
 		 * @return {boolean}
		 */
		exports.search = function(nums,target) {
			if(!nums) {
				return false;
			}
			return helper(nums,0,nums.length-1,target)!=-1;
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