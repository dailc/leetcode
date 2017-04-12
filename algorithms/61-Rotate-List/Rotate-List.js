/**
 * 作者: dailc
 * 时间: 2017-04-12
 * 描述: Rotate-List
 * 
 * 来自: https://leetcode.com/problems/permutation-sequence
 */
(function(exports) {
	
	
	/**
	 * @description getPermutation
	 * @param {ListNode} head
 	 * @param {number} k
 	 * @return {ListNode}
	 */
	exports.rotateRight = function(head, k) {
		if(!head) {
			return null;
		}
		var len = 1;
		var tmp = head;
		while(tmp.next) {
			len ++;
			tmp = tmp.next;
		}
		k = k%len;
		if(k <=0) {
			return head;
		}
		
		//后缀
		var suffix = null;
		var size = len - k;
		var count = 1;
		tmp = null;
		if( size > 0) {
			suffix = head;
			//遍历后缀
			tmp = head;
			while(tmp && count < size) {
				tmp = tmp.next;
				count ++;
			}
		}	
		if(tmp) {
			//如果后缀确实存在
			//找到前缀
			var prefix = tmp.next;
			//切断suffix和前缀的链接
			tmp.next = null;
			
			//重新遍历前缀，准备拼接
			tmp = prefix;
			while(tmp.next) {
				tmp = tmp.next;
			}
			tmp.next = suffix;
			
			return prefix;
		} else {
			//否则返回头部即可
			return head;
		}
		
	};
	

	

})(window.LeetCode = window.LeetCode || {});