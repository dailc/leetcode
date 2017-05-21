/* 作者: dailc
 * 时间: 2017-05-21
 * 描述: Copy-List-with-Random-Pointer
 * 
 * 来自: https://leetcode.com/problems/copy-list-with-random-pointer
 */
(function(exports) {
	function RandomListNode(label) {
    	this.label = label;
    	this.next = this.random = null;
 	}
	/**
	 * @description singleNumber
	 * @param {number[]} nums
 	 * @return {number}
	 */
	exports.copyRandomList = function(head) {
		if(!head) {
			return null;
		}
		var hash = {};
		var newHead = {};
		var tmp = head;
		var tmpNew = newHead;
		while(tmp) {
			var node = null;
			if(hash[tmp.label]) {
				node = hash[tmp.label];
			} else {
				node = new RandomListNode(tmp.label);
				hash[tmp.label] = node;
			}
			var random = tmp.random;
			if(random) {
				var randomNode = null;
				if(hash[random.label]) {
					randomNode = hash[random.label];
				} else {
					randomNode = new RandomListNode(random.label);
					hash[random.label] = randomNode;
				}
				node.random = randomNode;
			}
			tmpNew.next = node;
			tmpNew = tmpNew.next;
			tmp = tmp.next;
		}
		return newHead.next;
	};

	
})(window.LeetCode = window.LeetCode || {});