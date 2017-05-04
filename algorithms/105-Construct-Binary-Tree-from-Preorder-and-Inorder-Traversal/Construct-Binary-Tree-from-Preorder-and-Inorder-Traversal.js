/* 作者: dailc
 * 时间: 2017-05-04
 * 描述: 105-Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal
 * 
 * 来自: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
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
	exports.buildTree = function(preorder, inorder) {
		if(!preorder||!inorder||preorder.length==0||preorder.length!=inorder.length) {
			return null;
		}
		return buildTreeRecurse(preorder, inorder);
	};
	
	function buildTreeRecurse(preorder, inorder) {
		if(!preorder||!inorder||inorder.length==0||preorder.length==0) {
			return null;
		}
		//去除干扰
		while(preorder.length&&inorder.indexOf(preorder[0])==-1) {
			preorder = preorder.slice(1);
		}
		var root = new TreeNode(preorder[0]);
		var indexRoot = inorder.indexOf(preorder[0]);
		//递归遍历时，要去除root本身
		//如果存在左树
		if(indexRoot!=0) {
			preorder = preorder.slice(1);
			root.left = buildTreeRecurse(preorder,inorder.slice(0,indexRoot));
		}
		
		//如果存在右树
		if(indexRoot!=inorder.length-1) {
			preorder = preorder.slice(1);
			//前序的第二位
			root.right = buildTreeRecurse(preorder,inorder.slice(indexRoot+1));
		}
		return root;
	}
	
	exports.buildTree2 = function(preorder, inorder) {
		if(!preorder||!inorder||preorder.length==0||preorder.length!=inorder.length) {
			return null;
		}
		return buildTreeRecurse2(preorder,0,preorder.length-1, inorder,0,inorder.length-1);
	};
	
	function buildTreeRecurse2(preorder, preStart,preEnd,inorder,inStart,inEnd) {
		if(preStart>preEnd||inStart>inEnd) {
			return null;
		}
		var rootVal = preorder[preStart];
		var rootIndex = 0;
		for( var i = inStart; i <= inEnd; i ++) {
			if(inorder[i]==rootVal) {
				rootIndex = i;
				break;
			}
		}
		var len = rootIndex - inStart;
		var root = new TreeNode(rootVal);
		root.left = buildTreeRecurse2(preorder, preStart+1,preStart+len,inorder,inStart,rootIndex-1);
		root.right = buildTreeRecurse2(preorder, preStart+len+1,preEnd,inorder,rootIndex+1,inEnd);
		
		return root;
	}
	
})(window.LeetCode = window.LeetCode || {});