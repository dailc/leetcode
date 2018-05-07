/*
* 一刷时间: 2017-05-05
* 二刷时间：2018-05-07
* 来自: https://leetcode.com/problems/binary-tree-level-order-traversal-ii
*/
(function (exports) {
	function TreeNode(val) {
		this.val = val;
		this.left = this.right = null;
	}
	/**
	 * @description levelOrderBottom
	 * @param {TreeNode} root
 	 * @return {number[][]}
	 */
	function levelOrderBottom2(root) {
		if (!root) {
			return [];
		}

		const res = [];

		levelOrderBottomRecurse(res, root, 0);

		return res.reverse();
	}

	function levelOrderBottomRecurse(res, root, level) {
		if (!root) {
			return;
		}
		res[level] = res[level] || [];

		res[level].push(root.val);

		levelOrderBottomRecurse(res, root.left, level + 1);
		levelOrderBottomRecurse(res, root.right, level + 1);
	}

	exports.levelOrderBottom2 = levelOrderBottom2;

	function levelOrderBottom(root) {
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
				});
			}

			if (node.right) {
				nodes.push({
					node: node.right,
					level: level + 1
				});
			}

			if (currLevel !== level) {
				if (currLevel !== -1) {
					res.push(tmp);
				}
				tmp = [];
				currLevel = level;
				tmp.push(node.val);
			} else {
				tmp.push(node.val);
			}
		}

		res.push(tmp);

		return res.reverse();
	}

	exports.levelOrderBottom = levelOrderBottom;

})(window.LeetCode = window.LeetCode || {});