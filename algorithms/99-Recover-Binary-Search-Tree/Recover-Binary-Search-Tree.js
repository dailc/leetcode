/* 作者: dailc
 * 时间: 2017-04-28
 * 描述: Recover-Binary-Search-Tree
 * 
 * 来自: https://leetcode.com/problems/recover-binary-search-tree
 */
(function(exports) {

	/**
	 * @description recoverTree
	 * @param {TreeNode} root
	 * @return {void} Do not return anything, modify root in-place instead.
	 */
	exports.recoverTree = function(root) {
		if(root == null) {
			return;
		}
		var pre = [];
		pre.push(null);
		var res = [];
		helper(root, pre, res);
		if(res.length > 0) {
			var tmp = res[0].val;
			res[0].val = res[1].val
			res[1].val = tmp;
		}
	};

	function helper(root, pre, res) {
		if(root == null) {
			return;
		}
		helper(root.left, pre, res);
		if(pre[0] != null && pre[0].val > root.val) {
			if(res.length == 0) {
				res.push(pre[0]);
				res.push(root);
			} else {
				res[1] = root;
			}
		}
		pre[0] = root;
		helper(root.right, pre, res);
	}
	var pre, p, q;
	exports.recoverTree2 = function(root) {
		if(root == null) {
			return;
		}
		pre = null,
		p = null,
		q = null;
		dfs(root);
		var tmp = p.val;
		p.val = q.val;
		q.val = tmp;
	};

	function dfs(root) {
		if(root == null) {
			return;
		}
		dfs(root.left);
		if(pre != null && pre.val > root.val) {
			if(p == null) {
				p = pre;
				q = root;
			} else {
				q = root;
			}
		}
		pre = root;
		dfs(root.right);
	}
})(window.LeetCode = window.LeetCode || {});