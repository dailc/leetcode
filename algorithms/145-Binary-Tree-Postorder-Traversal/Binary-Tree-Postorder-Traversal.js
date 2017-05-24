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

	exports.postorderTraversal2 = function(root) {
		if(!root) {
			return [];
		}
		var result = [];
		var cur = root,
			pre = null;

		while(cur) {	
			if(!cur.left) {
				cur = cur.right;
			} else {
				pre = cur.left;
				while(pre.right && pre.right != cur) {
					pre = pre.right;
				}
				// 要画图协助理解
				if(!pre.right) {
					pre.right = cur;
					cur = cur.left;
					// 如果左节点遍历完毕后，会回到最上面，通过右节点指向，回到父节点
				} else {
					// 如果这个左节点已经遍历过的(这时候右节点是指向父节点的)
					// 就需要松绑
					pre.right = null;
					cur = cur.right;
				}
			}
		}
		return result;
	};
	

})(window.LeetCode = window.LeetCode || {});