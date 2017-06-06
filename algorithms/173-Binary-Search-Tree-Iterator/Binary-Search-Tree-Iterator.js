/* 作者: dailc
 * 时间: 2017-06-06
 * 描述: Binary-Search-Tree-Iterator
 * 
 * 来自: https://leetcode.com/problems/binary-search-tree-iterator
 */
(function(exports) {
	function TreeNode(val) {
		this.val = val;
		this.left = this.right = null;
	}
	LeetCode.TreeNode = TreeNode;

	/**
	 * @constructor
	 * @param {TreeNode} root - root of the binary search tree
	 */
	var BSTIterator = function(root) {
		var nodeList = [];
		goThrough(nodeList, root);
		
		this.nodeList = nodeList;
		this.index = -1;
		
	};
	
	function goThrough(nodeList, root) {
		if(!root) {
			return ;
		}
		
		if(root.left) {
			goThrough(nodeList, root.left);
		}
		nodeList.push(root);
		
		if(root.right) {
			goThrough(nodeList, root.right);
		}
	}
	LeetCode.BSTIterator = BSTIterator;

	/**
	 * @this BSTIterator
	 * @returns {boolean} - whether we have a next smallest number
	 */
	BSTIterator.prototype.hasNext = function() {
		return !!this.nodeList[this.index + 1];
	};

	/**
	 * @this BSTIterator
	 * @returns {number} - the next smallest number
	 */
	BSTIterator.prototype.next = function() {
		return this.nodeList[++ this.index].val;
	};

})(window.LeetCode = window.LeetCode || {});