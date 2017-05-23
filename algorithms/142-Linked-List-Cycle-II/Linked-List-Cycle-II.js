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
	exports.detectCycle = function(head) {
		if(!head) {
			return null;
		}
		var p1 = head;
		var p2 = head.next;
		while(p1 && p2) {
			if(p1 == p2) {
				break;
			}
			p1 = p1.next;
			p2 = p2.next;
			if(p2) {
				p2 = p2.next;
			}
		}
		if(!p2) {
			return null;
		}
		var count = 1;
		var curr = p2;
		p2 = p2.next;
		while(p2 != curr) {
			count++;
			p2 = p2.next;
		}
		p1 = head;
		while(count) {
			p1 = p1.next;
			count--;
		}
		p2 = head;
		while(p1 != p2) {
			p1 = p1.next;
			p2 = p2.next;
		}
		return p2;
	};

	exports.detectCycle2 = function(head) {
		if(!head) {
			return null;
		}
		var p1 = head;
		var p2 = head;
		while(p1 && p2) {
			p1 = p1.next;
			p2 = p2.next;
			if(p2) {
				p2 = p2.next;
			}
			if(p1 == p2) {
				break;
			}
		}
		if(!p2) {
			return null;
		}
		p1 = head;
		while(p1 != p2) {
			p1 = p1.next;
			p2 = p2.next;
		}
		
		return p2;
	};

})(window.LeetCode = window.LeetCode || {});