/* 作者: dailc
 * 时间: 2017-05-01
 * 描述: Same-Tree
 * 
 * 来自: https://leetcode.com/problems/same-tree
 */
(function(exports) {

	/**
	 * @description isSameTree
	 * @param {TreeNode} p
	 * @param {TreeNode} q
	 * @return {boolean}
	 */
	exports.isSameTree = function(p, q) {
		return isSameTreeRecurse(p, q);
	};

	function isSameTreeRecurse(p, q) {
		if(!p && !q) {
			return true;
		} else if(!p && q || p && !q) {
			return false;
		} else if(p.val != q.val) {
			return false;
		}
		return isSameTreeRecurse(p.left, q.left) && isSameTreeRecurse(p.right, q.right);
	}

	exports.isSameTree2 = function(p, q) {
		var stack = [];
		stack.push(p);
		stack.push(q);

		while(stack.length) {
			q = stack.pop();
			p = stack.pop();
			if(!p && !q) {
				continue;
			} else if(!p && q || p && !q) {
				return false;
			} else if(p.val != q.val) {
				return false;
			}
			stack.push(p.left);
			stack.push(q.left);
			
			stack.push(p.right);
			stack.push(q.right);
		}
		return true;
	};

})(window.LeetCode = window.LeetCode || {});