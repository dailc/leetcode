/* 作者: dailc
 * 时间: 2017-05-07
 * 描述: Minimum-Depth-of-Binary-Tree
 * 
 * 来自: https://leetcode.com/problems/minimum-depth-of-binary-tree
 */
(function(exports) {
	function TreeNode(val) {
    	this.val = val;
    	this.left = this.right = null;
  	}
	/**
	 * @description isBalanced
	 * @param {TreeNode} root
 	 * @return {boolean}
	 */
	exports.minDepth = function(root) {
		return minDepthRecurse(root);
	};
	
	function minDepthRecurse(root) {
		if(!root) {
			return 0;
		}
		if(!root.left) {
			return minDepthRecurse(root.right) + 1;
		}
		if(!root.right) {
			return minDepthRecurse(root.left) + 1;
		}
		return Math.min(minDepthRecurse(root.left),minDepthRecurse(root.right)) + 1;
	}
	
	exports.minDepth2 = function(root) {
		if(!root) {
			return 0;
		}
		var queue = [];
		var curNum = 0;
		var lastNum = 1;
		var level = 1;
		queue.push(root);
		while(queue.length) {
			var curr = queue.shift();
			if(!curr.left&&!curr.right) {
				return level;
			}
			lastNum --;
			if(curr.left) {
				queue.push(curr.left);
				curNum ++;
			}
			if(curr.right) {
				queue.push(curr.right);
				curNum ++;
			}
			if(lastNum==0) {
				lastNum = curNum;
				curNum = 0;
				level ++;
			}
		}
		
		return 0;
	};
})(window.LeetCode = window.LeetCode || {});