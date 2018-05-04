/*
* 一刷时间: 2017-05-04
* 二刷时间：2018-05-04
* 来自: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
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
	function buildTree(inorder, postorder) {
		if (!postorder || !inorder || !postorder.length || postorder.length !== inorder.length) {
			return null;
		}
		return buildTreeRecurse(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
	}

	function buildTreeRecurse(inorder, inStart, inEnd, postorder, postStart, postEnd) {
		if (postStart > postEnd || inStart > inEnd) {
			return null;
		}
		const rootVal = postorder[postEnd];
		let rootIndexInOrder = inStart;

		// 找到中序遍历中根节点
		for (let i = inStart; i <= inEnd; i++) {
			if (inorder[i] === rootVal) {
				rootIndexInOrder = i;
				break;
			}
		}

		const len = rootIndexInOrder - inStart;
		const root = new TreeNode(rootVal);

		root.left = buildTreeRecurse(inorder, inStart, rootIndexInOrder - 1, postorder, postStart, postStart + len - 1);
		root.right = buildTreeRecurse(inorder, rootIndexInOrder + 1, inEnd, postorder, postStart + len, postEnd - 1);

		return root;
	}

	exports.buildTree = buildTree;

})(window.LeetCode = window.LeetCode || {});