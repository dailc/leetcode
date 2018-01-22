/**
 * 一刷时间: 2017-04-27
 * 二刷时间：2018-01-21
 * 来自: https://leetcode.com/problems/unique-binary-search-trees
 */
(function(exports) {

    //Definition for a binary tree node.
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

    /**
     * @param {number} n
     * @return {number}
     */
    function numTrees(n) {
        if (n < 1) {
            return [];
        }
        const num = [1];

        for (let i = 1; i <= n; i++) {

            if (i < 3) {
                num[i] = i;
            } else {
                num[i] = 0;
                for (let j = 1; j <= i; j++) {
                    num[i] += num[j - 1] * num[i - j];
                }
            }
        }

        return num[n];
    }

    exports.numTrees = numTrees;

})(window.LeetCode = window.LeetCode || {});