/* 
* 一刷时间: 2017-05-03
* 二刷时间：2018-04-25
* 来自: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
*/
(function (exports) {

	/**
	 * @param {TreeNode} root
	 * @return {number[][]}
	 */
	function zigzagLevelOrder2(root) {
		if (!root) {
			return [];
		}
		const res = [];

		zigzagLevelOrderRecurse(res, root, 0);

		return res;
	}

	function zigzagLevelOrderRecurse(res, root, level) {
		if (!root) {
			return;
		}
		res[level] = res[level] || [];

		if (level & 1) {
			res[level].unshift(root.val);
		} else {
			res[level].push(root.val);
		}

		zigzagLevelOrderRecurse(res, root.left, level + 1);
		zigzagLevelOrderRecurse(res, root.right, level + 1);
	}

	exports.zigzagLevelOrder2 = zigzagLevelOrder2;

	/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
	/**
	 * @param {TreeNode} root
	 * @return {number[][]}
	 */
	function zigzagLevelOrder(root) {
		if (!root) {
			return [];
		}
		const res = [];
		const nodes = [];

		nodes.push({
			node: root,
			level: 0
		});

		let currLevel = -1;
		let tmp = [];

		while (nodes.length) {
			const nodeObj = nodes.shift();
			const node = nodeObj.node;
			const level = nodeObj.level;

			if (node.left) {
				nodes.push({
					node: node.left,
					level: level + 1
				})
			}

			if (node.right) {
				nodes.push({
					node: node.right,
					level: level + 1
				})
			}

			if (level !== currLevel) {
				if (currLevel !== -1) {
					res.push(tmp);
				}
				currLevel = level;
				tmp = [];
				if (level & 1) {
					tmp.unshift(node.val);
				} else {
					tmp.push(node.val);
				}
			} else {
				if (level & 1) {
					tmp.unshift(node.val);
				} else {
					tmp.push(node.val);
				}
			}
		}

		res.push(tmp);

		return res;
	}

	exports.zigzagLevelOrder = zigzagLevelOrder;

})(window.LeetCode = window.LeetCode || {});