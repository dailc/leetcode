/* 
* 一刷时间: 2017-05-04
* 二刷时间：2018-05-02
* 来自: https://leetcode.com/problems/maximum-depth-of-binary-tree
*/
(function (exports) {

	/**
	 * @description maxDepth
	 * @param {TreeNode} root
	 * @return {number}
	 */
	function maxDepth2(root) {
		return maxDepthRecurse(root);
	}

	function maxDepthRecurse(root) {
		if (!root) {
			return 0;
		}

		const left = maxDepthRecurse(root.left);
		const right = maxDepthRecurse(root.right);

		return left > right ? left + 1 : right + 1;
	}

	exports.maxDepth2 = maxDepth2;

	function maxDepth(root) {
		if (!root) {
			return 0;
		}

		const nodes = [];

		nodes.push(root);

		// 当前层级
		let level = 0;
		// 当前层节点的数量
		let currNum = 1;
		// 下一层节点数量
		let nextNum = 0;

		while (nodes.length) {
			const node = nodes.shift();

			currNum--;

			if (node.left) {
				nextNum++;
				nodes.push(node.left);
			}

			if (node.right) {
				nextNum++;
				nodes.push(node.right);
			}

			if (currNum === 0) {
				currNum = nextNum;
				nextNum = 0;
				level++;
			}
		}

		return level;
	}


	exports.maxDepth = maxDepth;

})(window.LeetCode = window.LeetCode || {});