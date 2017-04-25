/* 作者: dailc
 * 时间: 2017-04-25
 * 描述: Reverse-Linked-List-II
 * 
 * 来自: https://leetcode.com/problems/reverse-linked-list-ii
 */
(function(exports) {

	/**
	 * @description reverseBetween
	 *@param {ListNode} head
 	 * @param {number} m
 	 * @param {number} n
 	 * @return {ListNode}
	 */
	exports.reverseBetween = function(head,m,n) {
		if(!head) {
			return head;
		}
		if(m==n) {
			return head;
		}
		var index = 1;
		var tmp = head;
		var prev = null;
		//记录最后一个节点
		var last = null;
		//记录反转链表之前的一个节点
		var before = null;
		
		while(tmp) {
			var next = tmp.next;
			if(index>=m&&index<=n) {
				tmp.next = prev;
				if(index==m) {
					before = prev;
					tmp.next = null;
					//反转后的最后一个
					last = tmp;
				}  else if(index==n) {
					//反转后的第一个
					if(before) {
						//如果链表前面还存在节点
						before.next = tmp;
					} else {
						//否则代表链表是从头节点开始反转
						head = tmp;
					}
					//最后一个节点指向下一个节点
					last.next = next;
				}
			}
			prev = tmp;
			tmp = next;
			index ++;
		}
		
		return head;
	};
	

	
	

	
})(window.LeetCode = window.LeetCode || {});