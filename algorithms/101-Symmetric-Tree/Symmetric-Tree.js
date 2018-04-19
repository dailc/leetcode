/* 
 * 一刷时间: 2017-05-02
 * 二刷时间：2018-04-19
 * 来自: https://leetcode.com/problems/symmetric-tree
 */
(function (exports) {

	/**
	 * @description isSymmetric
	 * @param {TreeNode} root
 	 * @return {boolean}
	 */
	exports.isSymmetric = function (root) {
		if (!root) {
			return true;
		}
		return isSymmetricRecur(root.left, root.right);
	};

	function isSymmetricRecur(left, right) {
		if (!left && !right) {
			return true;
		}
		if ((left && !right) || (!left && right) || (left.val != right.val)) {
			return false;
		}

		return isSymmetricRecur(left.left, right.right) && isSymmetricRecur(left.right, right.left);
	}


	/**
 * 思路：
 * 1. 递归的话可以轻松解决，但是考虑到会存在大量冗余的判断，效率并不高
 * 2. 采用stack辅助，依次将树两侧的节点都对称添加进入，然后判断，如果不匹配则返回false
 * @param {TreeNode} root
 * @return {boolean}
 */
	function isSymmetric(root) {
		if (!root || (!root.left && !root.right)) {
			return true;
		}

		const stack1 = [];
		const stack2 = [];

		stack1.push(root.left);
		stack2.push(root.right);

		while (stack1.length && stack2.length) {
			const p = stack1.pop();
			const q = stack2.pop();

			if (!p && !q) {
				continue;
			}

			if (!p || !q) {
				return false;
			}

			if (p.val !== q.val) {
				return false;
			}

			stack1.push(p.left);
			stack2.push(q.right);

			stack1.push(p.right);
			stack2.push(q.left);
		}

		return true;
	}

	exports.isSymmetric = isSymmetric;
})(window.LeetCode = window.LeetCode || {});