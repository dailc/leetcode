/* 作者: dailc
 * 时间: 2017-08-02
 * 描述: Range-Sum-Query-2D-Immutable
 * 
 * 来自: https://leetcode.com/problems/range-sum-query-2d-immutable
 */
(function(exports) {

    /**
     * 使用辅助行和列
     * @param {number[][]} matrix
     */
    var NumMatrix = function(matrix) {
        if (!matrix || !matrix[0]) {
            return ;
        }
        
        var dp = [],
            rows = matrix.length,
            cols = matrix[0].length;
        
        for (var i = 0; i <= rows; i++) {
            dp[i] = [];
            for (var j = 0; j <= cols; j++) {
                dp[i][j] = 0;
            }
        }
        
        for (var i = 1; i <= rows; i++) {
            for (var j = 1; j <= cols; j++) {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j] - dp[i - 1][j - 1] + matrix[i - 1][j - 1];
            }
        }
        
        this.dp = dp;
    };

    /** 
     * @param {number} row1 
     * @param {number} col1 
     * @param {number} row2 
     * @param {number} col2
     * @return {number}
     */
    NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
        var dp = this.dp;
        
        return dp && (dp[row2 + 1][col2 + 1] - dp[row1][col2 + 1] - dp[row2 + 1][col1] + dp[row1][col1]);
    };
    exports.NumMatrix = NumMatrix;

})(window.LeetCode = window.LeetCode || {});