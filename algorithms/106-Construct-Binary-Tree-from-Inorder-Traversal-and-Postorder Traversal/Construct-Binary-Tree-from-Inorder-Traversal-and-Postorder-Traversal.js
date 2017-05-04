/* 作者: dailc
 * 时间: 2017-05-04
 * 描述: Construct-Binary-Tree-from-Inorder-Traversal-and-Postorder-Traversal.js
 * 
 * 来自: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
 */
(function(exports) {
	function TreeNode(val) {
    	this.val = val;
    	this.left = this.right = null;
  	}
	/**
	 * @description buildTree
	 *  @param {number[]} preorder
 	 * @param {number[]} inorder
 	 * @return {TreeNode}
	 */
	exports.buildTree = function(inorder,postorder) {
		if(!postorder||!inorder||postorder.length==0||postorder.length!=inorder.length) {
			return null;
		}
		return buildTreeRecurse(postorder,0,postorder.length-1, inorder,0,inorder.length-1);
	};
	
	function buildTreeRecurse(postorder, postStart,postEnd,inorder,inStart,inEnd) {
		if(postStart>postEnd||inStart>inEnd) {
			return null;
		}
		var rootVal = postorder[postEnd];
		var rootIndex = 0;
		for( var i = inStart; i <= inEnd; i ++) {
			if(inorder[i]==rootVal) {
				rootIndex = i;
				break;
			}
		}
		var len = rootIndex - inStart;
		var root = new TreeNode(rootVal);
		root.left = buildTreeRecurse(postorder, postStart,postStart+len-1,inorder,inStart,rootIndex-1);
		root.right = buildTreeRecurse(postorder, postStart+len,postEnd-1,inorder,rootIndex+1,inEnd);
		
		return root;
	}
	
})(window.LeetCode = window.LeetCode || {});