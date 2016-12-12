/**
 * 作者: dailc
 * 时间: 2016-12-10
 * 描述:  add two number
 * 分别实现了几种方案:
 * 1.js链表方式实现
 * 
 * 来自:https://leetcode.com/problems/add-two-numbers/
 */
(function(exports) {
	/**
	 * @description Definition for singly-linked list.
	 * @param {Object} val
	 */
	function ListNode(val) {
		this.val = val;
		this.next = null;
	};
	exports.ListNode = ListNode;
	/**
	 * @description 拓展打印的方法
	 */
	ListNode.prototype.print = function() {
		var tmp = this,
			result = this.val;
		while(tmp.next) {
			tmp = tmp.next;
			if(tmp.val !== undefined) {
				result += '->' + tmp.val
			}

		}
		return result;
	};
	/**
	 * @description 拓展append
	 * @param {Number} val
	 */
	ListNode.prototype.append = function(val) {
		var tmp = new ListNode(val);
		this.next = tmp;
		return tmp;
	};
	/**
	 * @description 求两个链表的和
	 * 时间复杂度 0(N)
	 * @param {ListNode} list1
	 * @param {ListNode} list2
	 * @param {ListNode}
	 */
	exports.addTwoNumber1 = function(list1, list2) {
		var result, old = result;
		//保存进位
		var carry = 0;
		//有一种情况 比如 2->5  与2->5 相加  结果需要是  4->0->1  所以,carry不为0也要算进去
		while(list1 || list2 || carry) {
			var tmp1 = list1 ? (list1.val || 0) : 0;
			var tmp2 = list2 ? (list2.val || 0) : 0;
			var sum = tmp1 + tmp2 + carry;
			//取到进位，可以试试用 ~~ 替代 Math.floor
			//~~是取反两次，可以去掉小数部分(因为位运算要求是整数，结果会自动转为整数)
			carry = Math.floor(sum / 10);
			var tmpNode = new ListNode(sum % 10);
			if(!result) {
				result = tmpNode;
				old = result;
			} else {
				old.next = tmpNode;
				old = old.next;
			}
			list1 = list1 ? list1.next : null;
			list2 = list2 ? list2.next : null;
		}
		return result;
	};



})(window.LeetCode = window.LeetCode || {});