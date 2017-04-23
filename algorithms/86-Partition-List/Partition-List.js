/**
 * 作者: dailc
 * 时间: 2017-04-23
 * 描述: Partition-List
 * 
 * 来自: https://leetcode.com/problems/maximal-rectangle
 */
(function(exports) {

	/**
	 * @description partition
	 * @param {ListNode} head
 	 * @param {number} x
 	 * @return {ListNode}
	 */
	exports.partition = function(head, x) {
		if(!head) {
			return head;
		}
		var lessHead = {},
			greaterHead = {};
		
		var node = head,
			less = lessHead,
			greater = greaterHead;
		
		while(node!=null) {
			var next = node.next;
			if(node.val < x) {
				less.next = node;
				less = less.next;
				less.next = null;
			} else {
				greater.next = node;
				greater = greater.next;
				greater.next = null;
			}
			node = next;
		}
		less.next = greaterHead.next;
		
		return lessHead.next;
	};
	

	
})(window.LeetCode = window.LeetCode || {});