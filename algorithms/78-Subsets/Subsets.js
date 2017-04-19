/**
 * 作者: dailc
 * 时间: 2017-04-19
 * 描述: Subsets
 * 
 * 来自: https://leetcode.com/problems/subsets
 */
(function(exports) {

	/**
	 * @description subsets
	 * @param {number[]} nums
 	 * @return {number[][]}
	 */
	exports.subsets = function(nums) {
		if(!nums) {
			return [];
		}
		var result = [];
		//添加一个空
		result.push([]);
		var len = nums.length;
		for( var i = 0; i < len; i ++ ) {
			//这里要注意，必须提前把size提取出来，不能把提取过程直接嵌入到下面的for语句中
			//因为res的size会在下面语句中一直变化
			var size = result.length;
			for( var j = 0; j < size; j ++ ) {
				var list = [];
				for( var k = 0; k < result[j].length; k ++ ) {
					list.push( result[j][k]);
				}
				list.push(nums[i]);
				result.push(list);
			}
		}
		return result;
	};
	
	exports.subsets2 = function(nums) {
		if(!nums) {
			return [];
		}
		
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
		}
	}
	
	
	
})(window.LeetCode = window.LeetCode || {});