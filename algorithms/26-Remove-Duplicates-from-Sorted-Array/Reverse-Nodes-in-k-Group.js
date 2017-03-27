/**
 * 作者: dailc
 * 时间: 2017-03-27
 * 描述: Reverse-Nodes-in-k-Group
 * 
 * 来自: https://leetcode.com/problems/reverse-nodes-in-k-group
 */
(function(exports) {

	/**
	 * @description reverseKGroup
	 * 空间复杂度要求O(1)
	 * 使用k个辅助数组
	 * @param {ListNode} head
	 * @param {number} k
 	 * @return {ListNode}
	 */
	exports.reverseKGroup = function(head, k) {
		//辅助数组来存储k个值
		var stack = [];
		return help(head, k,stack);
	};
	
	function help(head, k,stack) {
		if(!head||k<1) {
			return head;
		}
		//先走k步，不符合要求则返回头节点
		var tmp = head;
		var index = 0;
		while(index < k && tmp) {
			index ++;
			tmp = tmp.next;
		}
		if(index < k) {
			//不符合要求
			return head;
		}
		stack.splice(0,stack.length);
		tmp = head;
		index = k;
		while(index&&tmp) {
			stack.push(tmp);
			tmp = tmp.next;
			index--;
		}
		
		//取得首节点
		head =  stack.pop();
		var next = head.next;
		tmp = head;
		while(stack.length) {
			tmp.next = stack.pop(); 
			tmp = tmp.next;
		}
		tmp.next = help(next,k,stack);
		return head;
	}
	
	/**
	 * @description reverseKGroup
	 * 空间复杂度要求O(1)
	 * @param {ListNode} head
	 * @param {number} k
 	 * @return {ListNode}
	 */
	exports.reverseKGroup2 = function(head, k) {
		if(!head||k<1) {
			return head;
		}
		var curr = head,
			count = 0;
		//找到第k+1个节点
		while(curr&&count < k) {
			curr = curr.next;
			count++;
		}
		if(count!=k) {
			//如果不符合要求
			return head;
		}
		//递归下一个
		curr = exports.reverseKGroup2(curr,k);
		
		//以下是本次k个中的反转
		//count--是先判断再--的
		while(count-->0) {
			var tmp = head.next;
			//首节点指向反转链表的最后一个节点
			head.next = curr;
			//curr指针继续指向反转链表的头指针
			curr = head;
			//下一个交换
			head = tmp;
		}
		//交换完毕后,curr指针仍然是指向反转链表的首节点的
		head = curr;
		
		return head;
	};
	
	
	
	

})(window.LeetCode = window.LeetCode || {});