/**
 * 作者: dailc
 * 时间: 2017-03-25
 * 描述: Remove-Nth-Node-From-End-of-List
 * 
 * 来自: https://leetcode.com/problems/remove-nth-node-from-end-of-list
 */
(function(exports) {

	/**
	 * @description removeNthFromEnd
	 * @param {ListNode} head
 	 * @param {number} n
 	 * @return {ListNode}
	 */
	exports.removeNthFromEnd = function(head, n) {
		if(!head||n<=0) {
			return head;
		}
		var assistStack = [];
		var tmp = head;
		while(tmp) {
			assistStack.push(tmp);
			tmp = tmp.next;
		}
		var before,current;
		while(n) {
			current = assistStack.pop();
			n--;
			if(!current) {
				//如果n超过了链表长度
				return head;
			}
		}
		before = assistStack.pop();
		//如果前面的节点存在
		if(before) {
			if(before.next) {
				before.next = before.next.next;
			} else {
				before.next = null;
			}
			
		} else if(current){
			//如果当前节点也存在，当前就是首节点了
			head = current.next;
		}
		//当前节点不存在就代表n超过了链表长度，返回默认的head
		
		return head;
		
	};
	
	/**
	 * @description 思路2，不用辅助栈
	 * 这个虽然没有辅助栈了，但是leetcode上时间很慢
	 * @param {ListNode} head
 	 * @param {number} n
 	 * @return {ListNode}
	 */
	exports.removeNthFromEnd2 = function(head, n) {
		if(!head||n<=0) {
			return head;
		}
		var len;
		var tmp = head;
		while(tmp) {
			len++;
			tmp = tmp.next;
		}
		//两个指针
		var pSlow = head,
			pFast = head;
		tmp = n;
		while(tmp&&pFast) {
			pFast = pFast.next;
			tmp --;
		}
		if(tmp) {
			//如果没有走完，代表长度不对
			return head;
		}
		var before;
		//同时走
		while(pFast&&pSlow) {
			pFast = pFast.next;
			before = pSlow;
			pSlow = pSlow.next;
		}
		//这时候slow整合是模板几点
		//如果前面的节点存在
		if(before) {
			if(before.next) {
				before.next = before.next.next;
			} else {
				before.next = null;
			}
			
		} else if(pSlow){
			//如果当前节点也存在，当前就是首节点了
			head = pSlow.next;
		}
		
		//当前节点不存在就代表n超过了链表长度，返回默认的head
		
		return head;
		
	};

})(window.LeetCode = window.LeetCode || {});