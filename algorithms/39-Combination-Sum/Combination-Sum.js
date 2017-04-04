/**
 * 作者: dailc
 * 时间: 2017-04-04
 * 描述: Combination-Sum
 * 
 * 来自: https://leetcode.com/problems/combination-sum
 */
(function(exports) {

	/**
	 * @description combinationSum
	 * @param {number[]} candidates
 	 * @param {number} target
 	 * @return {number[][]}
	 */
	exports.combinationSum = function(candidates, target) {
		if(!candidates||target<0) {
			return [];
		}
		candidates.sort(function(a,b){
			return a-b;
		});
		var result = [];
		helper(result,[],candidates,0,target,candidates.length);
		return result;
	};
	
	function helper(result,curr,candidates,index,target,len) {
		if(target == 0) {
			//满足条件了,需要添加一个新的数组，而不是引用
			result.push(curr.slice(0));
		} else {
			for( var i = index; i < len && candidates[i] <= target; i ++ ) {
				//DFS遍历
				curr.push(candidates[i]);
				helper(result,curr,candidates,i,target-candidates[i],len);
				//需要重置
				curr.pop();
			}
		}
	}
	
	


	
})(window.LeetCode = window.LeetCode || {});