/**
 * 作者: dailc
 * 时间: 2017-04-06
 * 描述: Jump-Game-II
 * 
 * 来自: https://leetcode.com/problems/jump-game-ii
 */
(function(exports) {
	
	/**
	 * @description jump
	 * @param {number[]} nums
 	 * @return {number}
	 */
	exports.jump = function(nums) {
		if(!nums||nums.length==0) {
			return 0;
		}
		var len = nums.length;
		var lastReach = 0;
		var reach = 0;
		var step = 0;
		for( var i = 0; i <= reach && i <len; i ++ ) {
			if(i > lastReach) {
				step ++;
				lastReach = reach;
			}
			reach = Math.max(reach,nums[i]+i)
		}
		if(reach < len-1) {
			return 0;
		}
		return step;
	};
	
	
})(window.LeetCode = window.LeetCode || {});