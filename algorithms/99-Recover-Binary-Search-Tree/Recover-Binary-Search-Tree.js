/**
 * 一刷时间: 2017-04-28
 * 二刷时间：2018-01-24
 * 来自: https://leetcode.com/problems/recover-binary-search-tree
 */
(function(exports) {

    function recoverTree(root) {
        if (!root) {
            return;
        }
        const pre = [];
        const res = [];

        pre.push(null);
        helper(root, pre, res);

        if (res.length) {
            const cur = res[0].val;

            res[0].val = res[1].val
            res[1].val = cur;
        }
    }

    function helper(root, pre, res) {
        if (!root) {
            return;
        }
        helper(root.left, pre, res);

        if (pre[0] !== null && pre[0].val > root.val) {
            if (res.length === 0) {
                res.push(pre[0]);
                res.push(root);
            } else {
                res[1] = root;
            }
        }
        pre[0] = root;
        helper(root.right, pre, res);
    }

    exports.recoverTree = recoverTree;
})(window.LeetCode = window.LeetCode || {});