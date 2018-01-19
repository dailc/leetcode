/**
 * 一刷时间: 2017-04-26
 * 二刷时间：2018-01-19
 * 来自: https://leetcode.com/problems/binary-tree-inorder-traversal
 */
(function(exports) {

    /**
     * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    function inorderTraversal(root) {
        if (!root) {
            return [];
        }
        let res = [];

        res = res.concat(inorderTraversal(root.left));

        res.push(root.val);

        res = res.concat(inorderTraversal(root.right));

        return res;
    }

    exports.inorderTraversal = inorderTraversal;

    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    function inorderTraversal2(root) {
        if (!root) {
            return [];
        }
        const res = [];
        const stack = [];
        let curr = root;

        while (curr || stack.length) {
            while (curr) {
                // 装载从左边树的所有节点
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            // 先将左侧节点都装载完毕
            res.push(curr.val);
            // 左侧节点也有可能有右边的子节点
            curr = curr.right;
        }

        return res;
    }

    exports.inorderTraversal2 = inorderTraversal2;

    exports.inorderTraversal3 = inorderTraversal3;

    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    function inorderTraversal3(root) {
        if (!root) {
            return [];
        }
        const res = [];
        let cur = root;
        let pre = null;

        while (cur) {
            if (!cur.left) {
                res.push(cur.val);
                cur = cur.right;
            } else {
                pre = cur.left;
                while (pre.right && pre.right !== cur) {
                    pre = pre.right;
                }
                if (!pre.right) {
                    pre.right = cur;
                    cur = cur.left;
                } else {
                    pre.right = null;
                    res.push(cur.val);
                    cur = cur.right;
                }
            }
        }

        return res;
    }

})(window.LeetCode = window.LeetCode || {});