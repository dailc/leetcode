/* 作者: dailc
 * 时间: 2017-05-23
 * 描述: Linked-List-Cycle-II
 * 
 * 来自: https://leetcode.com/problems/linked-list-cycle-ii
 */
(function(exports) {

	/**
	 * @description detectCycle
	 * @param {ListNode} head
	 * @return {ListNode}
	 */
	exports.reorderList = function(head) {
		if(!head) {
			return ;
		}
		var count = 0;
		var tmp = head;
		while(tmp) {
			count++;
			tmp = tmp.next;
		}
		tmp = head;
		var mid = Math.ceil(count / 2);
		count = 0;
		var prev = null;

		while(tmp) {
			count++;
			var next = tmp.next;
			if(count > mid) {
				if(count == mid + 1) {
					prev = null;
				}
				tmp.next = prev;
			} else if(count == mid) {
				tmp.next = null;
			}
			prev = tmp;
			tmp = next;
		}
		var tmp = head;
		while(tmp && prev) {
			var next = tmp.next;
			var nextPrev = prev.next;
			tmp.next = prev;
			prev.next = next;
			tmp = next;
			prev = nextPrev;
		}
		if(tmp) {
			tmp.next = prev;
		}
	};

})(window.LeetCode = window.LeetCode || {});