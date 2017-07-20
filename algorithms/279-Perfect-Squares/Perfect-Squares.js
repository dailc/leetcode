/* 作者: dailc
 * 时间: 2017-07-20
 * 描述: Perfect-Squares
 * 
 * 来自: https://leetcode.com/problems/perfect-squares
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {number}
     */
    var numSquares = function(n) {
        while (n % 4 === 0) {
            n /= 4;
        }
        
        if (n % 8 == 7) {
            return 4;
        }
        
        for (var a = 0; a * a <= n; a++) {
            var b = ~~Math.sqrt(n - a * a);
            
            if (a * a + b * b == n) {
                return !!a + !!b;
            }
        }
        
        return 3;
    };
    
    var numSquares2 = function(n) {
        var MAX_VALUE = 2147483647;
        
        var dp = [];
        // 将所有非平方数结果置最大，保证之后比较的时候不被选中
        for (var i = 0; i <= n; i ++) {
            dp[i] = MAX_VALUE;
        }
        // 将所有平方数的结果置1
        for (var i = 0; i * i <= n; i ++) {
            dp[i * i] = 1;
        }
        // 从小到大找任意数a
        for (var a = 0; a <= n; a++) {
            // 从小到大找平方数bｘb
            for (var b = 0; a + b * b <= n; b ++) {
                 // 因为a+b*b可能本身就是平方数，所以我们要取两个中较小的
                 dp[a + b * b] = Math.min(dp[a] + 1, dp[a + b * b]);
            }
        }
        
        return dp[n];
    };

    exports.numSquares = numSquares;
    exports.numSquares2 = numSquares2;

})(window.LeetCode = window.LeetCode || {});