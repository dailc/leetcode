/**
 * 作者: dailc
 * 时间: 2017-04-18
 * 描述: Sort-Colors
 * 
 * 来自: https://leetcode.com/problems/sort-colors
 */
(function(exports) {

	/**
	 * @description sortColors
	 * @param {number[]} nums
 	 * @return {void} Do not return anything, modify nums in-place instead.
	 */
	exports.sortColors = function(nums) {
		if(!nums) {
			return ;
		}
		var start = 0,
			len = nums.length,
			end = len - 1;
			
		var index = 0;
		while(index < len) {
			if(nums[index]==0) {
				if(index>start) {
					swap(nums,start++,index)
				} else {
					index ++;
				}
				
			} else if(nums[index]==2) {
				if(index<end) {
					swap(nums,end--,index)
				} else {
					//已经替换完所有元素了
					return ;
				}
			} else {
				index ++;
			}
		}
		
	};
	
	function swap(nums,i,j) {
		var tmp = nums[i];
		nums[i] = nums[j];
		nums[j] = tmp;
	}
	
	
	
	
})(window.LeetCode = window.LeetCode || {});