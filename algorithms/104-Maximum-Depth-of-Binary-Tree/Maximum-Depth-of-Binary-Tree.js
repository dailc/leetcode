/* 作者: dailc
 * 时间: 2017-05-04
 * 描述: Maximum-Depth-of-Binary-Tree
 * 
 * 来自: https://leetcode.com/problems/maximum-depth-of-binary-tree
 */
(function(exports) {

	/**
	 * @description maxDepth
	 * @param {TreeNode} root
	 * @return {number}
	 */
	exports.maxDepth = function(root) {
		return maxDepthRecurse(root);
	};

	function maxDepthRecurse(root) {
		if(!root) {
			return 0;
		}
		var left = maxDepthRecurse(root.left);
		var right = maxDepthRecurse(root.right);
		return(left > right) ? (left + 1) : (right + 1);
	}
	
	exports.maxDepth2 = function(root) {
		if(!root) {
			return 0;
		}
		var level = 0;
		var stack = [];
		stack.push(root);
		//当前层的数量
		var currNum = 1;
		//下一层的数量
		var nextNum = 0;
		while(stack.length) {
			//从前面出
			var node = stack.shift();
			currNum --;
			if(node.left) {
				stack.push(node.left);
				nextNum ++;
			}
			if(node.right) {
				stack.push(node.right);
				nextNum ++;
			}
			if(currNum==0) {
				currNum = nextNum;
				nextNum = 0;
				level ++;
			}
		}
		
		return level;
	};

})(window.LeetCode = window.LeetCode || {});