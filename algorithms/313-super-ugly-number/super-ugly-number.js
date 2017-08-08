/* 作者: dailc
 * 时间: 2017-08-08
 * 描述: super-ugly-number
 * 
 * 来自: https://leetcode.com/problems/super-ugly-number
 */
(function(exports) {
    /**
     * @param {number} n
     * @param {number[]} primes
     * @return {number}
     */
    var nthSuperUglyNumber = function(n, primes) {
        if (n <= 0 || !primes) {
            return 0;
        }
        var MAX_VALUE = 2147483647;
        
        var dp = [],
            idx = [],
            len = primes.length,
            maxLen = Math.max(n, len);
            
        for (var i = 0; i < maxLen; i++) {
            dp[i] = 1;
            idx[i] = 0;
        }
            
        for (var i = 1; i < n; i++) {
            dp[i] = MAX_VALUE;
            for (var j = 0; j < len; j++) {
                dp[i] = Math.min(dp[i], dp[idx[j]] * primes[j]);
            }
            
            for (var j = 0; j < len; j++) {
                if (dp[i] == dp[idx[j]] * primes[j]) {
                    idx[j] ++;
                }
            }
        }
        
        console.log(dp);
        
        return dp[n - 1];
    };
    exports.nthSuperUglyNumber = nthSuperUglyNumber;

})(window.LeetCode = window.LeetCode || {});