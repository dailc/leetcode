/* 作者: dailc
 * 时间: 2017-05-24
 * 描述: Binary-Tree-Postorder-Traversal
 * 
 * 来自: https://leetcode.com/problems/binary-tree-postorder-traversal
 */
(function(exports) {

	/**
	 * @description preorderTraversal
	 * @param {TreeNode} root
	 * @return {number[]}
	 */
	exports.postorderTraversal = function(root) {
		if(!root) {
			return [];
		}
		var result = [];
		var stack = [];
		stack.push(root);
		
		while(stack.length) {
			var tmp = stack.pop();
			result.push(tmp.val);
			// 入栈顺序和出栈顺序是反的
			// 入栈时是左-右，出栈是是右-左
			if(tmp.left) {
				stack.push(tmp.left);
			}
			if(tmp.right) {
				stack.push(tmp.right);
			}
		}
		result.reverse();

		return result;

	};
	

})(window.LeetCode = window.LeetCode || {});