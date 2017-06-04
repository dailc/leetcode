/* 作者: dailc
 * 时间: 2017-06-04
 * 描述: Majority-Element
 * 
 * 来自: https://leetcode.com/problems/majority-element
 */
(function(exports) {

	/**
	 * @description majorityElement
	 * @param {number[]} nums
 	 * @return {number}
	 */
	LeetCode.majorityElement = function(nums) {
		var len = nums.length;
		var major = nums[0],
			count = 1;
		for( var i= 1; i < len; i ++ ) {
			if(count <= 0) {
				count ++;
				major = nums[i];
			} else {
				count += (nums[i] == major) ? 1 : -1;
			}
		}
		
		return major;
	};
	
	
	
	
})(window.LeetCode = window.LeetCode || {});