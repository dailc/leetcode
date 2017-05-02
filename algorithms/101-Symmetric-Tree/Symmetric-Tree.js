/* 作者: dailc
 * 时间: 2017-05-02
 * 描述: Symmetric-Tree
 * 
 * 来自: https://leetcode.com/problems/symmetric-tree
 */
(function(exports) {

	/**
	 * @description isSymmetric
	 * @param {TreeNode} root
 	 * @return {boolean}
	 */
	exports.isSymmetric = function(root) {
		if(!root) {
			return true;
		}
		return isSymmetricRecur(root.left,root.right);
	};
	
	function isSymmetricRecur(left,right) {
		if(!left&&!right) {
			return true;
		}
		if((left&&!right)||(!left&&right)||(left.val!=right.val)) {
			return false;
		}
		
		return isSymmetricRecur(left.left,right.right)&&isSymmetricRecur(left.right,right.left);
	}
	
	
	exports.isSymmetric2 = function(root) {
		if(!root||(!root.left&&!root.right)) {
			return true;
		}
		return help(root);
	};
	
	function help(root) {
		var stack1 = [];
		var stack2 = [];
		stack1.push(root.left);
		stack2.push(root.right);

		while(stack1.length&&stack2.length) {
			var p = stack1.pop();
			var q = stack2.pop();
			if(!p && !q) {
				continue;
			} else if(!p && q || p && !q) {
				return false;
			} else if(p.val != q.val) {
				return false;
			}
			stack1.push(p.left);
			stack2.push(q.right);
			
			stack2.push(p.right);
			stack1.push(q.left);
		}
		return true;
	}
})(window.LeetCode = window.LeetCode || {});