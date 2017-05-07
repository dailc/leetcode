/* 作者: dailc
 * 时间: 2017-05-07
 * 描述: Path-Sum-II
 * 
 * 来自: https://leetcode.com/problems/path-sum-ii
 */
(function(exports) {
	function TreeNode(val) {
		this.val = val;
		this.left = this.right = null;
	}
	/**
	 * @description hasPathSum
	 * @param {TreeNode} root
	 * @param {number} sum
	 * @return {boolean}
	 */
	exports.hasPathSum = function(root, sum) {
		if(!root) {
			return [];
		}
		var result = [];
		findPathRecursely(result,root, sum, [], 0);
		
		return result;
	};

	function findPathRecursely(result,root, expectedSum, path, currentSum) {
		currentSum += root.val;
		path.push(root.val);
		//如果是叶子节点，并且路径上节点的和等于输入的值，打印路径
		var isLeaf = !root.left && !root.right;
		if(isLeaf && currentSum === expectedSum) {
//			console.log("A Path is found");
//			var out = '';
//			for(var i = 0, len = path.length; i < len; i++) {
//				out += '->' + path[i];
//			}
//			console.log(out);
			result.push(path.slice(0));
			
		}

		//如果不是叶子节点，递归遍历
		if(root.left) {
			findPathRecursely(result,root.left, expectedSum, path, currentSum);
			//返回父节点前，在路径上删除当前节点
			path.pop();
		}

		if(root.right) {
			findPathRecursely(result,root.right, expectedSum, path, currentSum);
			//返回父节点前，在路径上删除当前节点
			path.pop();
		}

	}

})(window.LeetCode = window.LeetCode || {});