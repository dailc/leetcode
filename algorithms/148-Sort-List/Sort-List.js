/* 作者: dailc
 * 时间: 2017-05-26
 * 描述: Sort-List
 * 
 * 来自: https://leetcode.com/problems/sort-list
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
	LeetCode.sortList = function(head) {
		return sortListRecurse(head);
	}	
	
	function sortListRecurse(head) {
		if(!head || !head.next) {
			return head;
		}
		var fast = head;
		var slow = head;
		while(fast.next && fast.next.next) {
			fast = fast.next.next;
            slow = slow.next;
		}
		var mid = slow.next;
		slow.next = null;
		
		var list1 = sortListRecurse(head);
		var list2 = sortListRecurse(mid);
		
		var sorted = merge(list1, list2);
		
		return sorted;
	}
	
	function merge(list1, list2) {
		
		if(!list1) {
			return list2;
		}
		if(!list2) {
			return list1;
		}
		var head,
			tmp;
			// 取头部
		if(list1.val < list2.val) {
			head = list1;
			list1 = list1.next;
		} else {
			head = list2;
			list2 = list2.next;
		}
		tmp = head;
		while(list1 && list2) {
			if(list1.val < list2.val) {
				tmp.next = list1;
				list1 = list1.next;
				tmp = tmp.next;
			} else {
				tmp.next = list2;
				list2 = list2.next;
				tmp = tmp.next;
			}
		}
		if(list1) {
			tmp.next = list1;
		}
		if(list2) {
			tmp.next = list2;
		}
		
		return head;
	}
})(window.LeetCode = window.LeetCode || {});