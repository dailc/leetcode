/* 作者: dailc
 * 时间: 2017-05-23
 * 描述: Linked-List-Cycle
 * 
 * 来自: https://leetcode.com/problems/linked-list-cycle
 */
(function(exports) {
	
	/**
	 * @description hasCycle
	 * @param {ListNode} head
 	 * @return {boolean}
	 */
	exports.hasCycle = function(head) {
		if(!head) {
			return false;
		}
		var p1 = head;
		var p2 = head.next;
		while(p1 && p2) {
			if(p1 == p2) {
				return true;
			}
			p1 = p1.next;
			p2 = p2.next;
			if(p2) {
				p2 = p2.next;
			}
		}
		return false;
	};
	
	
})(window.LeetCode = window.LeetCode || {});