/* 作者: dailc
 * 时间: 2017-08-14
 * 描述: Coin-Change
 * 
 * 来自: https://leetcode.com/problems/create-maximum-number
 */
(function(exports) {
    var coinChange = function(coins, amount) {
        var dp = [],
            len = coins.length;
        
        for (var i = 0; i <= amount; i++) {
            dp[i] = amount + 1;
        }
        
        dp[0] = 0;
        
        for (var i = 1; i <= amount; i++) {
            for (var j = 0; j < len; j++) {
                if (coins[j] <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        
        console.log(dp);
        
        return dp[amount] > amount ? -1 : dp[amount];
    };
    exports.coinChange = coinChange;

})(window.LeetCode = window.LeetCode || {});