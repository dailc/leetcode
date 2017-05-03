/* 作者: dailc
 * 时间: 2017-05-03
 * 描述: Binary-Tree-Zigzag-Level-Order-Traversal
 * 
 * 来自: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 */
(function(exports) {

	/**
	 * @description zigzagLevelOrder
	 * @param {TreeNode} root
	 * @return {number[][]}
	 */
	exports.zigzagLevelOrder = function(root) {
		var result = [];
		zigzagLevelOrderRecurse(result, root, 0);

		return result;
	};

	function zigzagLevelOrderRecurse(result, root, level) {

		if(!root) {
			//没有就暂时不添加
			//result[level].push(null);
			return;
		}
		result[level] = result[level] || [];
		if(level & 0x1) {
			result[level].unshift(root.val);
		} else {
			result[level].push(root.val);
		}

		zigzagLevelOrderRecurse(result, root.left, level + 1);
		zigzagLevelOrderRecurse(result, root.right, level + 1);
	}

	exports.zigzagLevelOrder2 = function(root) {
		if(!root) {
			return [];
		}
		var result = [];
		var nodes = [];
		nodes.push({
			node: root,
			level: 0
		});
		var currLevel = -1;
		var tmp = [];
		while(nodes.length) {
			//先进先出，用 shift
			var nodeObj = nodes.shift();
			var node = nodeObj.node;
			var nodeLevel = nodeObj.level;

			if(node.left) {
				nodes.push({
					node: node.left,
					level: nodeLevel + 1
				});
			}
			if(node.right) {
				nodes.push({
					node: node.right,
					level: nodeLevel + 1
				});
			}
			if(currLevel != nodeLevel) {
				if(currLevel != -1) {
					result.push(tmp);
				}
				currLevel = nodeLevel;
				tmp = [];
				if(currLevel&0x1) {
					tmp.unshift(node.val);
				} else {
					tmp.push(node.val);
				}
				
			} else {
				if(currLevel&0x1) {
					tmp.unshift(node.val);
				} else {
					tmp.push(node.val);
				}
			}
		}
		result.push(tmp);
		return result;
	};
})(window.LeetCode = window.LeetCode || {});