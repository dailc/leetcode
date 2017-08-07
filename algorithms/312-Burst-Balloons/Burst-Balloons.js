/* 作者: dailc
 * 时间: 2017-08-07
 * 描述: Burst-Balloons
 * 
 * 来自: https://leetcode.com/problems/burst-balloons
 */
(function(exports) {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    var maxCoins = function(nums) {
        if (!nums) {
            return 0;
        }
        
        var arr = [],
            len = nums.length;
        
        for (var i = 1; i < len + 1; i++) {
            arr[i] = nums[i - 1];
        }
        
        arr[0] = 1;
        arr[len + 1] = 1;
        
        var dp = [],
            n = len + 2;
        
        for (var i = 0; i < n; i++) {
            dp[i] = [];
            
            for (var j = 0; j < n; j++) {
                dp[i][j] = 0;
            }
        }
        
        for (var k = 2; k < n; k++) {
            for (var left = 0; left < n - k; left++) {
                var right = left + k;
                
                for (var i = left + 1; i < right; i++) {
                    dp[left][right] = Math.max(dp[left][right], arr[left] * arr[i] * arr[right] + dp[left][i] + dp[i][right]);
                }
            }
        }
        
        return dp[0][n - 1];
    };
    exports.maxCoins = maxCoins;

})(window.LeetCode = window.LeetCode || {});