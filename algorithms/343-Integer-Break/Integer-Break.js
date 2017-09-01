/* 作者: dailc
 * 时间: 2017-08-30
 * 描述: Integer-Break
 * 
 * 来自: https://leetcode.com/problems/integer-break
 */
(function(exports) {


    var integerBreak = function(n) {
        if (n === 2) {
            return 1;
        }
        if (n === 3) {
            return 2;
        }
        
        var res = 1;
        
        while (n > 4) {
            res *= 3;
            n -= 3;
        }
        
        return res * n;
    };
    exports.integerBreak = integerBreak;

})(window.LeetCode = window.LeetCode || {});