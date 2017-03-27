/**
 * 作者: dailc
 * 时间: 2017-03-27
 * 描述: Swap-Nodes-in-Pairs
 * 
 * 来自: https://leetcode.com/problems/swap-nodes-in-pairs
 */
(function(exports) {

	/**
	 * @description swapPairs
	 * 交换单链表中相邻的节点，例如:
	 * 1->2->3->4 变为
	 * 2->1->4->3
	 * 空间复杂度必须是O(1)
	 * 不能改变链表中某个节点的值
	 * 思路是递归
	 * @param {ListNode} head
 	 * @return {ListNode}
	 */
	exports.swapPairs = function(head) {
		if(!head) {
			return null;
		}
		if(!head.next) {
			//如果只有一个节点了，直接返回
			return head;
		}
		var before = head;
		var current = before.next;
		var next = current.next;
		
		
		current.next = before;
		before.next = exports.swapPairs(next);
		return current;
	};
	
	
	
	

})(window.LeetCode = window.LeetCode || {});