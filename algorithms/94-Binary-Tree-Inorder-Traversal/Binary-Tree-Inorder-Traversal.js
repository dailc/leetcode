/* 作者: dailc
 * 时间: 2017-04-26
 * 描述: Binary-Tree-Inorder-Traversal
 * 
 * 来自: https://leetcode.com/problems/binary-tree-inorder-traversal
 */
(function(exports) {

	/**
	 * @description inorderTraversal
	 * @param {TreeNode} root
 	 * @return {number[]}
	 */
	exports.inorderTraversal = function(root) {
		if(!root) {
			return [];
		}
		var result = recursive(root);
		
		return result;
	};
	
	function recursive(root) {
		var result = [];
		if(!root) {
			return result;
		}
		if(root.left) {
			//遍历左边
			result = result.concat(recursive(root.left));
		}
		//自己
		result.push(root.val);
		if(root.right) {
			//遍历右边
			result = result.concat(recursive(root.right));
		}
		
		return result;
	}
	
	
	exports.inorderTraversal2 = function(root) {
		if(!root) {
			return [];
		}
		var result = [];
		var stack = [];
		var tmp = root;
		while(tmp||stack.length) {
			while(tmp) {
				stack.push(tmp);
				tmp = tmp.left;
			}
			tmp = stack.pop();
			result.push(tmp.val);
			tmp = tmp.right;
		}
		
		return result;
	};
	
	exports.inorderTraversal3 = function(root) {
		if(!root) {
			return [];
		}
		var result = [];
		var cur = root,
			pre = null;
			
		while (cur) {
			if(!cur.left) {
				result.push(cur.val);
				cur = cur.right; 
			} else {
				pre = cur.left;
				while(pre.right && pre.right!=cur) {
					pre = pre.right;
				}
				if(!pre.right) {
					pre.right = cur;
					cur = cur.left;
				} else {
					pre.right = null;
					result.push(cur.val);
					cur = cur.right;
				}
			}
		}
		return result;
	};
})(window.LeetCode = window.LeetCode || {});