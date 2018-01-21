/**
 * 一刷时间: 2017-04-26
 * 二刷时间：2018-01-19
 * 来自: https://leetcode.com/problems/unique-binary-search-trees-ii
 */
(function(exports) {

    //Definition for a binary tree node.
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

    /**
     * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
    /**
     * @param {number} n
     * @return {TreeNode[]}
     */
    function generateTrees(n) {
        if (n < 1) {
            return [];
        }

        return helper(1, n);
    }

    function helper(start, end) {
        const res = [];

        if (start > end) {
            res.push(null);

            return res;
        }
        if (start === end) {
            res.push(new TreeNode(start));

            return res;
        }
        for (let k = start; k <= end; k++) {
            const leftChindren = helper(start, k - 1);
            const rightChindren = helper(k + 1, end);
            const lenLeft = leftChindren.length;
            const lenRight = rightChindren.length;

            for (let i = 0; i < lenLeft; i++) {
                for (let j = 0; j < lenRight; j++) {
                    const root = new TreeNode(k);

                    root.left = leftChindren[i];
                    root.right = rightChindren[j];
                    res.push(root);
                }
            }
        }

        return res;
    }

    exports.generateTrees = generateTrees;

})(window.LeetCode = window.LeetCode || {});