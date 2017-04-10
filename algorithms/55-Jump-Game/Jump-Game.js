/**
 * 作者: dailc
 * 时间: 2017-04-10
 * 描述: Jump-Game
 * 
 * 来自: https://leetcode.com/problems/jump-game/
 */
(function(exports) {

	/**
	 * @description canJump
	 * @param {number[]} nums
 	 * @return {boolean}
	 */
	exports.canJump = function(nums) {
		if(!nums||nums.length==0) {
			return false;
		}
		var len = nums.length;
		var reach = 0;
		for( var i = 0; i <= reach && i <len; i ++ ) {
			reach = Math.max(reach,nums[i]+i)
		}
		return reach>=len-1;
		
	};

})(window.LeetCode = window.LeetCode || {});