/* 作者: dailc
 * 时间: 2017-05-09
 * 描述: Populating-Next-Right-Pointers-in-Each-Node
 * 
 * 来自: https://leetcode.com/problems/populating-next-right-pointers-in-each-node
 */
(function(exports) {
	
	/**
	 * @description connect
	 * @param {TreeLinkNode} root
 	 * @return {void} Do not return anything, modify tree in-place instead.
	 */
	exports.connect = function(root) {
		if(!root) {
			return ;
		}
		var currLev;
		while(root.left) {
			currLev = root;
			while(currLev) {
				currLev.left.next = currLev.right;
				if(currLev.next) {
					currLev.right.next = currLev.next.left;
				}
				currLev = currLev.next;
			}
			root = root.left;
		}
	};
	
	exports.connect2 = function(root) {
		connectRecurse(root);
	};
	
	function connectRecurse(root) {
		if(!root) {
			return;
		}
		if(root.left&&root.right) {
			root.left.next = root.right;
		}
		
		if(!root.next) {
			root.next = null;
		} else if(root.right) {
			root.right.next = root.next.left;
		}
		
		if(root.left) {
			connectRecurse(root.left);
		}
		if(root.right) {
			connectRecurse(root.right);
		}
	}
	
})(window.LeetCode = window.LeetCode || {});