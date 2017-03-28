/**
 * 作者: dailc
 * 时间: 2017-03-28
 * 描述: Remove-Element
 * 
 * 来自: https://leetcode.com/problems/remove-element
 */
(function(exports) {

	/**
	 * @description removeElement
	 * @param {number[]} nums
 	 * @param {number} val
 	 * @return {number}
	 */
	exports.removeElement = function(nums, val) {
		if(!nums) {
			return 0;
		}
		var len = nums.length,
			count = 0;
		for(var i = 0; i < len; i ++) {
			if(nums[i]!=val) {
				nums[count++] = nums[i];
			}
		}
		return count;
	};
	
	
	
	
	

})(window.LeetCode = window.LeetCode || {});