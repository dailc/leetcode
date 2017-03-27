/**
 * 作者: dailc
 * 时间: 2017-03-27
 * 描述: Remove-Duplicates-from-Sorted-Array
 * 
 * 来自: https://leetcode.com/problems/remove-duplicates-from-sorted-array
 */
(function(exports) {

	/**
	 * @description removeDuplicates
	 * @param {number[]} nums
 	 * @return {number}
	 */
	exports.removeDuplicates = function(nums) {
		if(!nums) {
			return null;
		}
		var set = new Set(nums);
		return (Array.from(set)).length
	};
	
	/**
	 * @description removeDuplicates
	 * @param {number[]} nums
 	 * @return {number}
	 */
	exports.removeDuplicates2 = function(nums) {
		if(!nums) {
			return null;
		}
		var hash = {};
		var len = nums.length;
		for(var i = 0; i < len; i ++) {
			if(!hash[nums[i]]) {
				hash[nums[i]] = true;
			} else {
				//去除
				nums.splice(i,1);
				//重新计算i和len
				len--;
				i--;				
			}
			
		}
		return nums.length;
	};
	
	/**
	 * @description removeDuplicates
	 * @param {number[]} nums
 	 * @return {number}
	 */
	exports.removeDuplicates3 = function(nums) {
		if(!nums) {
			return null;
		}
		var len = nums.length;
		for(var i = 1; i < len; i ++) {
			if(nums[i]==nums[i-1]) {
				//去除
				nums.splice(i,1);
				//重新计算i和len
				len--;
				i--;		
			}
		}
		return nums.length;
	};
	
	/**
	 * @description removeDuplicates
	 * @param {number[]} nums
 	 * @return {number}
	 */
	exports.removeDuplicates4 = function(nums) {
		if(!nums) {
			return null;
		}
		var len = nums.length;
		var index = 1;
		for(var i = 1; i < len; i ++) {
			if(nums[i]!=nums[i-1]) {
				nums[index++] = nums[i];
			}
		}
		return index;
	};
	
	

})(window.LeetCode = window.LeetCode || {});