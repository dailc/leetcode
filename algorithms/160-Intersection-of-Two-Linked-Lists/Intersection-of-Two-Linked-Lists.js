/* 作者: dailc
 * 时间: 2017-06-01
 * 描述: Intersection-of-Two-Linked-Lists
 * 
 * 来自: https://leetcode.com/problems/min-stack/
 */
(function(exports) {
	function ListNode(val) {
		this.val = val;
		this.next = null;
	}
	LeetCode.ListNode = ListNode;
	/**
	 * @description getIntersectionNode
	 * @param {ListNode} headA
	 * @param {ListNode} headB
	 * @return {ListNode}
	 */
	LeetCode.getIntersectionNode = function(headA, headB) {
		if(!headA || !headB) {
			return null;
		}
		var lenA = 0,
			lenB = 0;
		var tmp = headA;
		while(tmp) {
			lenA ++;
			tmp = tmp.next;
		}
		tmp = headB;
		while(tmp) {
			lenB ++;
			tmp = tmp.next;
		}
		if(lenA > lenB) {
			// 确保lenB是最长的
			tmp = lenB;
			lenB = lenA;
			lenA = tmp;
			tmp = headB;
			headB = headA;
			headA = tmp;
		}
		// lenB先走
		tmp = lenB - lenA;
		while(tmp) {
			headB = headB.next;
			tmp --;
		}
		// 同时走
		while(headA && headB) {
			if(headA.val == headB.val) {
				return headA;
			}
			headA = headA.next;
			headB = headB.next;
		}
		
		return null;
	};
	
	LeetCode.getIntersectionNode2 = function(headA, headB) {
		if(!headA || !headB) {
			return null;
		}
		var tmpA = headA;
		var tmpB = headB;
		
		// if a & b have different len, then we will stop the loop after second iteration
		while(tmpA != tmpB) {
			// for the end of first iteration
			// we just reset the pointer to the head of another linkedlist
			tmpA = (tmpA == null)? headB: tmpA.next;
			tmpB = (tmpB == null)? headA: tmpB.next;
		}
		
		return tmpA;
	};

})(window.LeetCode = window.LeetCode || {});