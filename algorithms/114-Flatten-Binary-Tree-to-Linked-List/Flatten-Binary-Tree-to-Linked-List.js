/* 作者: dailc
 * 时间: 2017-05-08
 * 描述: Flatten-Binary-Tree-to-Linked-List
 * 
 * 来自: https://leetcode.com/problems/flatten-binary-tree-to-linked-list
 */
(function(exports) {
	function TreeNode(val) {
		this.val = val;
		this.left = this.right = null;
	}
	/**
	 * @description flatten
	 * @param {TreeNode} root
	 * @return {void} Do not return anything, modify root in-place instead.
	 */
	exports.flatten = function(root) {
		if(!root) {
			return ;
		}
		var stack = preorderTraversal(root);
		var len = stack.length;
		for( var i = 0; i < len - 1; i ++ ) {
			stack[i].left = null;
			stack[i].right = stack[i+1];
		}
		stack[len-1].left = null;
		stack[len-1].right = null;
		
	};
	
	function preorderTraversal(root) {
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
		//自己
		result.push(root);
		if(root.left) {
			//遍历左边
			result = result.concat(recursive(root.left));
		}
		
		if(root.right) {
			//遍历右边
			result = result.concat(recursive(root.right));
		}
		
		return result;
	}

	exports.flatten2 = function(root) {
		return flattenRecurse(root);
	};
	
	
	function flattenRecurse(root) {
		if(!root) {
			return ;
		}
		if(root.left) {
			flattenRecurse(root.left);
		}
		if(root.right) {
			flattenRecurse(root.right);
		}
		var tmp = root.right;
		root.right = root.left;
		root.left = null;
		while(root.right) {
			root = root.right;
		}
		root.right = tmp;
	}
	
	exports.flatten3 = function(root) {
		if(!root) {
			return ;
		}
		var curr = root;
		while (cur) {
			if(cur.left) {
				var p = cur.left;
				while (p.right) {
					p = p.right;
				}
				p.right = cur.right;
				cur.right = cur.left;
				cur.left = null;
			}
			cur = cur.right;
		}
	};
	
})(window.LeetCode = window.LeetCode || {});