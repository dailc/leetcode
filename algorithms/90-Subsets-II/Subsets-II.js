/* 作者: dailc
 * 时间: 2017-04-24
 * 描述: Subsets-II
 * 
 * 来自: https://leetcode.com/problems/subsets-ii
 */
(function(exports) {

	/**
	 * @description subsetsWithDup
	 * @param {number[]} nums
 	 * @return {number[][]}
	 */
	exports.subsetsWithDup = function(nums) {
		if(!nums) {
			return [];
		}
		nums.sort();
		var result = [];
		//添加一个空
		result.push([]);
		var len = nums.length;
		for( var i = 1; i <= len; i ++ ) {
			help(result,nums,[],0,i);
		}
		return result;
	};
	
	function help(result,nums,list,from,number) {
		if(list.length == number) {
			result.push(list.slice(0));
			return ;
		}
		
		for( var i = from; i < nums.length; i ++ ) {
			list.push(nums[i]);
			help(result,nums,list,i+1,number);
			list.pop();
			//跳过重复
			while(nums[i]==nums[i+1]) {
				i ++;
			}
		}
	}
	
	
	

	
})(window.LeetCode = window.LeetCode || {});