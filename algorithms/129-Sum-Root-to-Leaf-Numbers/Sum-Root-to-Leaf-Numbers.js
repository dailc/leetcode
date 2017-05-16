/* 作者: dailc
 * 时间: 2017-05-16
 * 描述: Sum-Root-to-Leaf-Numbers
 * 
 * 来自: https://leetcode.com/problems/sum-root-to-leaf-numbers
 */
(function(exports) {

	/**
	 * @description sumNumbers
	 * @param {TreeNode} root
 	 * @return {number}
	 */
	exports.sumNumbers = function(root) {
		if(!root) {
			return 0;
		}
		var sum = 0;
		function sumNumbersRecurse(curr,root) {
			curr = curr*10 + root.val;
			if(!root.left && !root.right) {
				// 如果已经没有了
				sum += curr;
			}
			if(root.left) {
				sumNumbersRecurse(curr,root.left);
			}
			if(root.right) {
				sumNumbersRecurse(curr,root.right);
			}
		}
		
		sumNumbersRecurse(0,root);
		
		return sum;
	};
	
	


})(window.LeetCode = window.LeetCode || {});