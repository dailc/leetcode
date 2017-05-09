/* 作者: dailc
 * 时间: 2017-05-09
 * 描述: Populating-Next-Right-Pointers-in-Each-Node-II
 * 
 * 来自: https://leetcode.com/problems/populating-next-right-pointers-in-each-node-Ⅱ
 */
(function(exports) {

	function findStartNodeNextLev(node) {
		if(!node) {
			return null;
		}
		if(node.left) {
			return node.left;
		}
		return findNextNodeNextLev(node, node.left);
	}

	function findNextNodeNextLev(cur, curNextLev) {
		if((!curNextLev||!cur.left||cur.left.val == curNextLev.val) && cur.right) {
			return cur.right;
		} else {
			while(cur.next) {
				cur = cur.next;
				if(cur.left && (!curNextLev||cur.left.val != curNextLev.val)) {
					return cur.left;
				}
				if(cur.right && (!curNextLev||cur.right.val != curNextLev.val)) {
					return cur.right;
				}
			}
		}

		return null;
	}
	/**
	 * @description connect
	 * @param {TreeLinkNode} root
	 * @return {void} Do not return anything, modify tree in-place instead.
	 */
	exports.connect = function(root) {
		if(!root) {
			return;
		}
		while(root) {
			var start = findStartNodeNextLev(root);
			var curNode = start;
			var nextNode = findNextNodeNextLev(root, start);
			//console.log("start:"+(start?start.val:null)+',next:'+(nextNode?nextNode.val:null));
			while(nextNode) {
				curNode.next = nextNode;
				curNode = nextNode;
				nextNode = findNextNodeNextLev(root, curNode);
				//console.log("node:"+(nextNode?nextNode.val:null));
			}
			root = start;
		}
	};
	exports.connect2 = function(root) {
		connectRecurse(root);
	};
	function connectRecurse(root) {
		if(!root) {
			return;
		}
		var p = root.next;
		while (p) {
			if(p.left) {
				p = p.left;
				break;
			}
			if(p.right) {
				p = p.right;
				break;
			}
			p = p.next;
		}
		if(root.right) {
			root.right.next = p;
		}
		if(root.left) {
			root.left.next = root.right?root.right:p;
		}
		//先右再左
		connectRecurse(root.right);
		connectRecurse(root.left);
		
	}

})(window.LeetCode = window.LeetCode || {});