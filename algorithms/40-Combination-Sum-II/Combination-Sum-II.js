/**
 * 作者: dailc
 * 时间: 2017-04-04
 * 描述: Combination-Sum-II
 * 
 * 来自: https://leetcode.com/problems/combination-sum-ii
 */
(function(exports) {

	/**
	 * @description combinationSum2
	 * @param {number[]} candidates
 	 * @param {number} target
 	 * @return {number[][]}
	 */
	exports.combinationSum2 = function(candidates, target) {
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
				//这题中i是不允许重复的，所以+1了
				helper(result,curr,candidates,i+1,target-candidates[i],len);
				//需要重置
				curr.pop();
				//跳过重复的元素(如果有[1,1])，上面其实可以考虑过1,1组合的，这里只是去除重复再判断1而已
				while(i < len -1 && candidates[i]==candidates[i+1]) {
					i++;
				}
			}
		}
	}
	
	
})(window.LeetCode = window.LeetCode || {});