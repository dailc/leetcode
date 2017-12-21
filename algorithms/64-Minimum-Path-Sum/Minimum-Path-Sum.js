/**
 * 一刷时间: 2017-04-14
 * 二刷时间：2017-12-21
 * 来自: https://leetcode.com/problems/minimum-path-sum
 */
(function(exports) {

    /**
     * @param {number[][]} grid
     * @return {number}
     */
    function minPathSum(grid) {
        if (!grid || !grid[0]) {
            return 0;
        }

        const rows = grid.length;
        const cols = grid[0].length;
        const dp = [];

        for (let i = 0; i < rows; i++) {
            dp[i] = [];
        }

        dp[0][0] = grid[0][0];

        // 第一行
        for (let j = 1; j < cols; j++) {
            dp[0][j] = dp[0][j - 1] + grid[0][j];
        }

        // 第一列
        for (let i = 1; i < rows; i++) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }

        // 递推
        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
        }

        return dp[rows - 1][cols - 1];
    }
    exports.minPathSum = minPathSum;

})(window.LeetCode = window.LeetCode || {});