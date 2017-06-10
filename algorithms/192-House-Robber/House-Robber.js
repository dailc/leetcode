/* 作者: dailc
 * 时间: 2017-06-10
 * 描述: House-Robber
 * 
 * 来自: https://leetcode.com/problems/house-robber
 */
(function(exports) {

	/**
	 * @description rob
	 * @param {number[]} nums
     * @return {number}
	 */
	LeetCode.rob = function(nums) {
	   if(!nums || !nums.length) {
	       return 0;
	   }
	   // 不用数组，直接用变量
	   var moneyUnRober = 0;
	   var moneyRober = nums[0];
	   
	   for( var i = 1, len = nums.length; i < len; i ++ ) {
	       var tmp = moneyUnRober;
	       moneyUnRober = Math.max(moneyUnRober, moneyRober);
	       moneyRober = tmp + nums[i];
	   }
	   return Math.max(moneyUnRober, moneyRober);
	};
	
	

})(window.LeetCode = window.LeetCode || {});