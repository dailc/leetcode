/*
* 一刷时间: 2017-05-04
* 二刷时间：2018-05-03
* 来自: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
*/
(function (exports) {
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
	/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
	function buildTree(preorder, inorder) {
		if (!preorder || !inorder || !preorder.length || preorder.length !== inorder.length) {
			return null;
		}

		return buildTreeRecurse(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
	}

	function buildTreeRecurse(preorder, preStart, preEnd, inorder, inStart, inEnd) {
		if (preStart > preEnd || inStart > inEnd) {
			return null;
		}
		// 找到根结点（前序遍历第一个）
		const rootVal = preorder[preStart];
		let rootIndexInOrder = inStart;

		// 找到中序遍历中根节点
		for (let i = inStart; i <= inEnd; i++) {
			if (inorder[i] === rootVal) {
				rootIndexInOrder = i;
				break;
			}
		}

		// 算出左树应该保留的长度
		const len = rootIndexInOrder - inStart;
		const root = new TreeNode(rootVal);

		root.left = buildTreeRecurse(preorder, preStart + 1, preStart + len, inorder, inStart, rootIndexInOrder - 1);
		root.right = buildTreeRecurse(preorder, preStart + len + 1, preEnd, inorder, rootIndexInOrder + 1, inEnd);

		return root;
	}

	exports.buildTree = buildTree;

})(window.LeetCode = window.LeetCode || {});