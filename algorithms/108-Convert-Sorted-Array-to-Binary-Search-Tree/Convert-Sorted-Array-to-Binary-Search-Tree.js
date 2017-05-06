/* 作者: dailc
 * 时间: 2017-05-05
 * 描述: Convert-Sorted-Array-to-Binary-Search-Tree
 * 
 * 来自: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
 */
(function(exports) {
	function TreeNode(val) {
    	this.val = val;
    	this.left = this.right = null;
  	}
	/**
	 * @description sortedArrayToBST
	 * @param {number[]} nums
 	 * @return {TreeNode}
	 */
	exports.sortedArrayToBST = function(nums) {
		if(!nums) {
			return null;
		}
		var len = nums.length;
		var root = build(nums,0,len-1);
		
		
		return root;
	};
	
	function build(nums,left,right) {
		if(left>right) {
			return null;
		}
		var mid = Math.floor((left+right)/2);
		var root = new TreeNode(nums[mid]);
		root.left = build(nums,left,mid-1);
		root.right = build(nums,mid+1,right);
		
		return root;
	}

	
})(window.LeetCode = window.LeetCode || {});