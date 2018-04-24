
/* 
* 一刷时间: 2017-05-03
* 二刷时间：2018-04-24
* 来自: https://leetcode.com/problems/binary-tree-level-order-traversal
*/
(function (exports) {

	function levelOrder2(root) {
		if (!root) {
			return [];
		}
		const res = [];

		levelOrderRecurse(res, root, 0);

		return res;
	}

	function levelOrderRecurse(res, root, level) {
		if (!root) {
			return;
		}
		res[level] = res[level] || [];
		res[level].push(root.val);

		levelOrderRecurse(res, root.left, level + 1);
		levelOrderRecurse(res, root.right, level + 1);
	}

	exports.levelOrder = levelOrder2;

	/**
	 * @param {TreeNode} root
	 * @return {number[][]}
	 */
	function levelOrder(root) {
		if (!root) {
			return [];
		}
		const nodes = [];
		const res = [];

		nodes.push({
			node: root,
			level: 0
		});

		let tmp = [];
		let currLevel = -1;

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

			if (level !== currLevel) {
				if (currLevel !== -1) {
					// 层级不同了，将上一个level的数据添加
					res.push(tmp);
				}
				currLevel = level;
				tmp = [];
				tmp.push(node.val);
			} else {
				// 同一个层级的，继续添加数据
				tmp.push(node.val);
			}
		}

		res.push(tmp);

		return res;
	}


	exports.levelOrder = levelOrder;

})(window.LeetCode = window.LeetCode || {});