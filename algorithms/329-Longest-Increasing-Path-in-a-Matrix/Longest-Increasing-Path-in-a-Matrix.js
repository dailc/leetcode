/* 作者: dailc
 * 时间: 2017-08-19
 * 描述: Longest-Increasing-Path-in-a-Matrix
 * 
 * 来自: https://leetcode.com/problems/longest-increasing-path-in-a-matrix
 */
(function(exports) {
    
    var dfs = function(matrix, dp, i, j) {
        if (dp[i][j]) {
            return dp[i][j];
        }
        
        var dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];
        
        var mx = 1,
            rows = matrix.length,
            cols = matrix[0].length;
            
        for (var k = 0; k < dirs.length; k++) {
            var x = i + dirs[k][0],
                y = j + dirs[k][1];
                
            if (x < 0 || x >= rows || y < 0 || y >= cols
                || matrix[x][y] <= matrix[i][j]) {
                    continue;
            }
                
            var len = 1 + dfs(matrix, dp, x, y);
            
            mx = Math.max(mx, len);
        }
        
        dp[i][j] = mx;
        
        return mx;
    };

    var longestIncreasingPath = function(matrix) {
        if (!matrix ||!matrix[0]) {
            return 0;
        }
        var res = 1,
            rows = matrix.length,
            cols = matrix[0].length,
            dp = [];
            
        for (var i = 0; i < rows; i++) {
            dp[i] = [];
            for (var j = 0; j < cols; j++) {
                dp[i][j] = 0;
            }
        }
        
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                res = Math.max(res, dfs(matrix, dp, i, j));
            }
        }
        
        return res;
    };
    exports.longestIncreasingPath = longestIncreasingPath;

})(window.LeetCode = window.LeetCode || {});