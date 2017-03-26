/**
 * 作者: dailc
 * 时间: 2017-03-26
 * 描述: Merge-k-Sorted-Lists
 * 
 * 来自: https://leetcode.com/problems/merge-k-sorted-lists
 */
(function(exports) {

	/**
	 * @description 合并k个已排序的单向链表，并分析整个算法的复杂度。
	 * @param {ListNode[]} lists
 	 * @return {ListNode}
	 */
	exports.mergeKLists = function(lists) {
		if(!lists || !lists.length) {
			return null;
		}
		var len = lists.length;
		if(len == 1) {
			return lists[0];
		}
		var mid = Math.floor((len - 1)/2);
		//slice start end
		var list1 = exports.mergeKLists(lists.slice(0,mid + 1));  
		var list2 = exports.mergeKLists(lists.slice(mid + 1,len)); 
		
		return mergeTwoLists(list1,list2);
	};
	
	/**
	 * @description 合并k个已排序的单向链表，并分析整个算法的复杂度。
	 * 是、不用递归用循环
	 * @param {ListNode[]} lists
 	 * @return {ListNode}
	 */
	exports.mergeKLists2 = function(lists) {
		if(!lists || !lists.length) {
			return null;
		}
		var len = lists.length;
		if(len == 1) {
			return lists[0];
		}
		while(len > 1) {
			var k = Math.floor((len+1 )/2);
			var mid = Math.floor((len)/2);
			for(var i = 0; i < mid; i ++) {
				 lists[i] = mergeTwoLists(lists[i], lists[i + k]);    
			}
			len = k;
		}
		
		
		return lists[0];
	};
	
	/**
	 * @param {ListNode} l1
 	 * @param {ListNode} l2
 	 * @return {ListNode}
	 */
	function mergeTwoLists(list1, list2) {
		if(list1 == null) {
			return list2;
		}
		if(list2 == null) {
			return list1;
		}
		var mergeHead;
		if(list1.val < list2.val) {
			mergeHead = list1;
			mergeHead.next = mergeTwoLists(list1.next, list2);
		} else {
			mergeHead = list2;
			mergeHead.next = mergeTwoLists(list1, list2.next);
		}
		return mergeHead;
		
	};
	
	

})(window.LeetCode = window.LeetCode || {});