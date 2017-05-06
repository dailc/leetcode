/* 作者: dailc
 * 时间: 2017-05-06
 * 描述: Balanced-Binary-Tree
 * 
 * 来自: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 */
(function(exports) {
	function TreeNode(val) {
    	this.val = val;
    	this.left = this.right = null;
  	}
	/**
	 * @description isBalanced
	 * @param {TreeNode} root
 	 * @return {boolean}
	 */
	exports.isBalanced = function(root) {
		return isBalanced();
	};
	function isBalanced(root) {
		if(!root) {
			return true;
		}
		var left = depth(root.left);
		var right = depth(root.right);
		
		return Math.abs(left - right) <= 1 && isBalanced(root.left)&&isBalanced(root.right);
	}
	
	function depth(root) {
		if(!root) {
			return 0;
		}
		return Math.max(depth(root.left),depth(root.right)) +1;
	}
	
	exports.isBalanced2 = function(root) {
		if(!root) {
			return true;
		}
		return cHeight(root)<0?false:true;
	};
	
	function cHeight(root) {
		if(!root) {
			return 0;
		}
		var left = cHeight(root.left);
		var right = cHeight(root.right);
		if(left<0||right<0||Math.abs(left-right)>1) {
			//自定义状态，表示不平衡
			return -1;
		} else {
			return Math.max(left,right) + 1;
		}
	}
})(window.LeetCode = window.LeetCode || {});