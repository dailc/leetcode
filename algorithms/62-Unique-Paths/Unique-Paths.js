/**
 * 一刷时间: 2017-04-13
 * 二刷时间：2017-12-19
 * 来自: https://leetcode.com/problems/unique-paths
 */
(function(exports) {

    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    function uniquePaths(m, n) {
        if (m < 1 || n < 1) {
            return 0;
        }
        const dp = [];

        for (let i = 0; i < m; i++) {
            dp[i] = new Array(n);
            // 默认每一个格子的走法是1种
            dp[i].fill(1);
        }

        // 开始动态规划，从1，1开始
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        return dp[m - 1][n - 1];
    }
    exports.uniquePaths = uniquePaths;

    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    function uniquePaths2(m, n) {
        if (m < 1 || n < 1) {
            return 0;
        }
        if (m > n) {
            // 确保m小于n
            return uniquePaths2(n, m);
        }
        const dp = [];

        for (let i = 0; i < n; i++) {
            dp[i] = 1;
        }
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                dp[j] += dp[j - 1];
            }
        }

        return dp[n - 1];
    }

    exports.uniquePaths2 = uniquePaths2;

})(window.LeetCode = window.LeetCode || {});