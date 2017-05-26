/* 作者: dailc
 * 时间: 2017-05-26
 * 描述: Insertion-Sort-List
 * 
 * 来自: https://leetcode.com/problems/insertion-sort-list
 */
(function(exports) {
	function ListNode(val) {
		this.val = val;
		this.next = null;
	}
	LeetCode.ListNode = ListNode;
	/**
	 * @description insertionSortList
	 * @param {ListNode} head
	 * @return {ListNode}
	 */
	LeetCode.insertionSortList = function(head) {
		if(!head) {
			return head;
		}
		// 用来串联
		var newHead = {};
		var cur = head;
		var pre = newHead;
		while(cur) {
			var next = cur.next;
			// 找到合适的插入位置
			while (pre.next && pre.next.val < cur.val) {
				pre = pre.next;
			}
			cur.next = pre.next;
			pre.next = cur;
			pre = newHead;
			cur = next;
		}
		return newHead.next;
	}
	

})(window.LeetCode = window.LeetCode || {});