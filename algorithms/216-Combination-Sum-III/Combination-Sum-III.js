/* 作者: dailc
 * 时间: 2017-06-20
 * 描述: Combination-Sum-III
 * 
 * 来自: https://leetcode.com/problems/word-search-ii
 */
(function(exports) {

    /**
     * @param {number} k
     * @param {number} n
     * @return {number[][]}
     */
    LeetCode.combinationSum3 = function(k, n) {
        if (!k || !n || k <= 0 || n <= 0) {
            return [];
        }
        var res = [];

        dfs(res, [], n, k, 0, 1);

        return res;
    };

    function dfs(res, arr, n, k, sum, level) {
        if (sum == n && k == 0) {
            res.push(arr.slice(0));
        } else if (sum > n || k <= 0) {
            return;
        } else {
            for (var i = level; i <= 9; i++) {
                arr.push(i);
                dfs(res, arr, n, k - 1, sum + i, i + 1);
                arr.pop();
            }
        }
    }

})(window.LeetCode = window.LeetCode || {});