/**
 * 作者: dailc
 * 时间: 2017-04-22
 * 描述: Remove-Duplicates-from-Sorted-List
 * 
 * 来自: https://leetcode.com/problems/remove-duplicates-from-sorted-list
 */
(function(exports) {

	/**
	 * @description deleteDuplicates
	 * @param {ListNode} head
	 * @return {ListNode}
	 */
	exports.deleteDuplicates = function(head) {
		return deleteDuplication(head);
	};
	function deleteDuplication(pHead) {
		if(pHead == null) {
			return null;
		}
		if(pHead != null && pHead.next == null) {
			return pHead;
		}
		var current = null;
		if(pHead.next.val == pHead.val) {
			current = pHead.next;
			while(current.next != null && current.next.val == current.val) {
				current = current.next;
			}
			return deleteDuplication(current);
		} else {
			current = pHead.next;
			pHead.next = deleteDuplication(current);
			return pHead;
		}
	}
	
	exports.deleteDuplicates2 = function(pHead) {
		if(pHead == null) {
			return null;
		}
		var before = pHead;
		var tmp = pHead.next;
		while(tmp) {
			if(tmp.val==before.val) {
				before.next = tmp.next;
			} else {
				before = tmp;
			}	
			tmp = tmp.next;
		}
		
		return pHead;
	};

})(window.LeetCode = window.LeetCode || {});