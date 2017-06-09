/* 作者: dailc
 * 时间: 2017-06-09
 * 描述: Rotate-Array
 * 
 * 来自: https://leetcode.com/problems/rotate-array
 */
(function(exports) {

	/**
	 * @description maxProfit
	 * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
	 */
	LeetCode.rotate = function(nums, k) {
	    if(!nums) {
	        return ;
	    }
	    var len = nums.length;
	    
		k %= nums.length;
		reverse(nums, 0, len - 1);
		reverse(nums, 0, k - 1);
		reverse(nums, k, len - 1);
	};
	
	function reverse(nums, start, end) {
	    while(start < end) {
	        var tmp = nums[start];
	        nums[start] = nums[end];
	        nums[end] = tmp;
	        start ++;
	        end --;
	    }
	}

})(window.LeetCode = window.LeetCode || {});