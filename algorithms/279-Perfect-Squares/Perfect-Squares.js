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

    exports.numSquares = numSquares;

})(window.LeetCode = window.LeetCode || {});