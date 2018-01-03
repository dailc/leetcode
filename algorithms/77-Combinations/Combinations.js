/**
 * 一刷时间: 2017-04-19
 * 二刷时间：2018-01-03
 * 来自: https://leetcode.com/problems/combinations
 */
(function(exports) {

    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    function combine(n, k) {
        if (!n || !k) {
            return [];
        }
        const res = [];

        dfs(res, [], 1, n, k);

        return res;
    }

    function dfs(res, list, from, n, k) {
        if (list.length === k) {
            res.push(list.slice(0));

            return;
        }
        for (let i = from; i <= n; i++) {
            list.push(i);
            dfs(res, list, i + 1, n, k)
            list.pop();
        }
    }

})(window.LeetCode = window.LeetCode || {});