/* 作者: dailc
 * 时间: 2017-04-27
 * 描述: Unique-Binary-Search-Trees
 * 
 * 来自: https://leetcode.com/problems/unique-binary-search-trees-ii
 */
(function(exports) {

  //Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
      this.left = this.right = null;
  }
 
	/**
	 * @description generateTrees
	 * @param {number} n
 	 * @return {TreeNode[]}
	 */
	exports.numTrees = function(n) {
		if(n<1) {
			return [];
		}
		var num = [1];
		for( var i = 1; i <= n; i ++ ) {
			num.push(0);
			if(i<3) {
				num[i] = i;
			} else {
				for( var j = 1; j <= i; j ++ ) {
					num[i] += num[j-1]*num[i-j];  
				}
			}
		}
		
		return num[n]; 
	};
	
	
	
	
})(window.LeetCode = window.LeetCode || {});