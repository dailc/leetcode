/* 作者: dailc
 * 时间: 2017-06-24
 * 描述: Maximal-Square
 * 
 * 来自: https://leetcode.com/problems/maximal-square
 */
(function(exports) {

    /**
     * @param {character[][]} matrix
     * @return {number}
     */
    LeetCode.maximalSquare = function(matrix) {
        if (!matrix || !matrix[0]) {
            return 0;
        }

        var m = matrix.length,
            n = matrix[0].length,
            max = 0,
            dp = [];
        
        // dp初始化
        for (var i = 0; i < m; i ++) {
            dp[i] = [];
        }
        
        // 第一列赋值
        for (var i = 0; i < m; i ++) {
            dp[i][0] = parseInt(matrix[i][0]);
            max = Math.max(max, dp[i][0]);
        }
        
        // 第一列赋值
        for (var i = 0; i < n; i ++) {
            dp[0][i] = parseInt(matrix[0][i]);
            max = Math.max(max, dp[0][i]);
        }
        
        // 递推
        for (var i = 1; i < m; i ++) {
            for (var j = 1; j < n; j ++) {
                if (matrix[i][j] == '1') {
                    dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
                } else {
                    dp[i][j] = 0;
                }
                max = Math.max(max, dp[i][j]);
            }            
        }
        
        return max * max;
    };

})(window.LeetCode = window.LeetCode || {});