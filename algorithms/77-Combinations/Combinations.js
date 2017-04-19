/**
 * 作者: dailc
 * 时间: 2017-04-19
 * 描述: Combinations
 * 
 * 来自: https://leetcode.com/problems/combinations
 */
(function(exports) {

	/**
	 * @description combine
	 * @param {number} n
 	 * @param {number} k
 	 * @return {number[][]}
	 */
	exports.combine = function(n,k) {
		var result = [];
		help(result,[],1,n,k);
		
		return result;
	};
	
	
	function help(result,list,from,n,k) {
		if(list.length == k) {
			result.push(list.slice(0));
			return ;
		}
		for( var i = from; i <= n; i ++ ) {
			list.push(i);
			help(result,list,i+1,n,k);
			list.pop();
		}
	}
	
	
})(window.LeetCode = window.LeetCode || {});