/**
 * 一刷时间: 2017-04-27
 * 二刷时间：2018-01-23
 * 来自: https://leetcode.com/problems/validate-binary-search-tree
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
     * @return {boolean}
     */
    function isValidBST(root) {
        if (!root) {
            return true;
        }
        const bstInOrderArr = inOrderTraversal(root);
        const len = bstInOrderArr.length;

        for (let i = 1; i < len; i++) {
            if (bstInOrderArr[i] <= bstInOrderArr[i - 1]) {
                return false;
            }
        }

        return true;
    }

    function inOrderTraversal(root) {
        if (!root) {
            return [];
        }

        const res = [];
        const stack = [];
        let curr = root;

        while (curr || stack.length) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            res.push(curr.val);
            curr = curr.right;
        }

        return res;
    }

    exports.isValidBST = isValidBST;

})(window.LeetCode = window.LeetCode || {});