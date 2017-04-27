/* 作者: dailc
 * 时间: 2017-04-27
 * 描述: Validate-Binary-Search-Tree
 * 
 * 来自: https://leetcode.com/problems/validate-binary-search-tree
 */
(function(exports) {

 
	/**
	 * @description isValidBST
	 * @param {TreeNode} root
 	 * @return {boolean}
	 */
	exports.isValidBST = function(root) {
		return isValidBSTRecurse(root);
	};
	
	function isValidBSTRecurse(root) {
		if(!root) {
			return true;
		}
		if(root.left) {
			//获取左侧最大节点
			var tmp = root.left;
			while(tmp.right) {
				tmp = tmp.right;
			}
			if(tmp.val>=root.val) {
				return false;
			}
		}
		if(root.right) {
			//获取右侧最小节点
			var tmp = root.right;
			while(tmp.left) {
				tmp = tmp.left;
			}
			if(tmp.val<=root.val) {
				return false;
			}
		}
		return isValidBSTRecurse(root.left)&&isValidBSTRecurse(root.right);
	}
	
	exports.isValidBST2 = function(root) {
		if(!root) {
			return true;
		}
		if(!root.left&&!root.right) {
			return true;
		}
		var result = inOrderTraversal(root);
		for( var i = 1, len = result.length; i < len; i ++ ) {
			if(result[i]<=result[i-1]) {
				return false;
			}
		}
		return true;
	};
	
	function inOrderTraversal(root) {
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
		
	}
	
	
	
	
})(window.LeetCode = window.LeetCode || {});