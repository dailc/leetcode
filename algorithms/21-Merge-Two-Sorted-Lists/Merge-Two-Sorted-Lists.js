/**
 * 作者: dailc
 * 时间: 2017-03-26
 * 描述: Merge-Two-Sorted-Lists
 * 
 * 来自: https://leetcode.com/problems/merge-two-sorted-lists
 */
(function(exports) {

	/**
	 * @param {ListNode} l1
 	 * @param {ListNode} l2
 	 * @return {ListNode}
	 */
	exports.mergeTwoLists = function(list1, list2) {
		if(list1 == null) {
			return list2;
		}
		if(list2 == null) {
			return list1;
		}
		var mergeHead;
		if(list1.val < list2.val) {
			mergeHead = list1;
			mergeHead.next = exports.mergeTwoLists(list1.next, list2);
		} else {
			mergeHead = list2;
			mergeHead.next = exports.mergeTwoLists(list1, list2.next);
		}
		return mergeHead;
		
	};
	
	
	

})(window.LeetCode = window.LeetCode || {});