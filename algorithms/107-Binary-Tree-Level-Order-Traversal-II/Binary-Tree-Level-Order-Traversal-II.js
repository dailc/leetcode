/* 作者: dailc
 * 时间: 2017-05-05
 * 描述: Binary-Tree-Level-Order-Traversal-II
 * 
 * 来自: https://leetcode.com/problems/binary-tree-level-order-traversal-ii
 */
(function(exports) {
	function TreeNode(val) {
    	this.val = val;
    	this.left = this.right = null;
  	}
	/**
	 * @description levelOrderBottom
	 * @param {TreeNode} root
 	 * @return {number[][]}
	 */
	exports.levelOrderBottom = function(root) {
		var result = [];
		levelOrderRecurse(result, root, 0);

		return result.reverse();
	};
	
	function levelOrderRecurse(result, root, level) {

		if(!root) {
			//没有就暂时不添加
			//result[level].push(null);
			return;
		}
		result[level] = result[level] || [];
		result[level].push(root.val);
		levelOrderRecurse(result, root.left, level + 1);
		levelOrderRecurse(result, root.right, level + 1);
	}

	exports.levelOrderBottom2 = function(root) {
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
				if(currLevel!=-1) {
					result.push(tmp);
				}
				currLevel = nodeLevel;
				tmp = [];
				tmp.push(node.val);
			} else {
				tmp.push(node.val);
			}
		}
		result.push(tmp);
		return result.reverse();
	};


	
})(window.LeetCode = window.LeetCode || {});