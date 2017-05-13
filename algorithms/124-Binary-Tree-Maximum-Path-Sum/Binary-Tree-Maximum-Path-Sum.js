/* 作者: dailc
 * 时间: 2017-05-13
 * 描述: Binary-Tree-Maximum-Path-Sum
 * 
 * 来自: https://leetcode.com/problems/binary-tree-maximum-path-sum
 */
(function(exports) {

	function TreeNode(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
	/**
	 * @description maxPathSum
	 * @param {TreeNode} root
	 * @return {number}
	 */
	exports.maxPathSum = function(root) {
		var MIN_INT = - Math.pow(2,31);
		
		var result = [MIN_INT];
		
		help(result,root);
		
		return result[0];
	};
	
	function help(result,root) {
		if(!root) {
			return 0;
		}
		var left = help(result,root.left);
		var right = help(result,root.right);
		// 连接父节点的最大路径是一、二、四这三种情况的最大值
		var currSum = Math.max(Math.max(left + root.val, right + root.val), root.val);
		// 当前节点的最大路径是一、二、三、四这四种情况的最大值
		var currMax = Math.max(currSum, left + right + root.val);
		// 用当前最大来更新全局最大
		result[0] = Math.max(currMax, result[0]);
		
		return currSum;
	}

})(window.LeetCode = window.LeetCode || {});