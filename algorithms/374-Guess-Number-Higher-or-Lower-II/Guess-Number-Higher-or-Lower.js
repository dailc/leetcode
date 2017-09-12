/* 作者: dailc
 * 时间: 2017-09-12
 * 描述: Guess-Number-Higher-or-Lower
 * 
 * 来自: https://leetcode.com/problems/guess-number-higher-or-lower
 */
(function(exports) {
    
    var getMoneyAmount = function(n) {
        var MAX_VALUE = 2147483647;
        var dp = [];
        
        for (var i = 0; i <= n; i++) {
            dp[i] = [];
            
            for (var j = 0; j <= n; j++) {
                dp[i][j] = 0;
            }
        }
        
        for (var i = 2; i <= n; i++) {
            for (var j = i - 1; j > 0; j--) {
                var globalMIn = MAX_VALUE;
                
                for (var k = j + 1; k < i; k++) {
                    var localMax = k + Math.max(dp[j][k - 1], dp[k + 1][i]);
                    
                    globalMIn = Math.min(globalMIn, localMax);
                }
                
                dp[j][i] = j + 1 === i ? j : globalMIn;
            }
        }
        
        return dp[1][n];
    };

    

    exports.getMoneyAmount = getMoneyAmount;

})(window.LeetCode = window.LeetCode || {});