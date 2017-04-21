/**
 * 作者: dailc
 * 时间: 2017-04-21
 * 描述: Remove-Duplicates-from-Sorted-List-II
 * 
 * 来自: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii
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
			current = pHead.next.next;
			while(current != null && current.val == pHead.val) {
				current = current.next;
			}
			return deleteDuplication(current);
		} else {
			current = pHead.next;
			pHead.next = deleteDuplication(current);
			return pHead;
		}
	}

})(window.LeetCode = window.LeetCode || {});