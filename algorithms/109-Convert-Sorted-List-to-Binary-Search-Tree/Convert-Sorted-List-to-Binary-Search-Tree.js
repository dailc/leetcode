/* 作者: dailc
 * 时间: 2017-05-06
 * 描述: Convert-Sorted-List-to-Binary-Search-Tree
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
	 * @param {ListNode} head
 	 * @return {TreeNode}
	 */
	exports.sortedListToBST = function(head) {
		if(!head) {
			return null;
		}
		var nums = [];
		while(head) {
			nums.push(head.val);
			head = head.next;
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
	
	exports.sortedListToBST2 = function(head) {
		if(head == null) {
			return null;
		}
		var curr = head;
		var len = 0;
		while(head != null) {
			len ++;
			head = head.next;
		}
		
		return buildTree(curr,0,len - 1);
	};
	
	function buildTree(curr,start,end) {
		if(start > end) {
			return null;
		}
		var mid = start + ~~((end-start)/2); 
		var left = buildTree(curr,start,mid-1);
		var root = new TreeNode(curr.val);
		root.left = left;
		curr = curr.next;
		root.right = buildTree(curr,mid+1,end);
		
		return root;
	}

	
})(window.LeetCode = window.LeetCode || {});