/* 作者: dailc
 * 时间: 2017-05-24
 * 描述: Binary-Tree-Preorder-Traversal
 * 
 * 来自: https://leetcode.com/problems/binary-tree-preorder-traversal
 */
(function(exports) {

	/**
	 * @description preorderTraversal
	 * @param {TreeNode} root
	 * @return {number[]}
	 */
	exports.preorderTraversal = function(root) {
		if(!root) {
			return [];
		}
		var result = [];
		var stack = [];
		var tmp = root;
		while(tmp || stack.length) {
			while(tmp) {
				result.push(tmp.val);
				stack.push(tmp);
				tmp = tmp.left;
			}
			tmp = stack.pop();

			tmp = tmp.right;
		}

		return result;

	};

	exports.preorderTraversal2 = function(root) {
		if(!root) {
			return [];
		}
		var result = [];
		var cur = root,
			pre = null;

		while(cur) {	
			if(!cur.left) {
				result.push(cur.val);
				cur = cur.right;
			} else {
				pre = cur.left;
				while(pre.right && pre.right != cur) {
					pre = pre.right;
				}
				// 要画图协助理解
				if(!pre.right) {
					pre.right = cur;
					result.push(cur.val);
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