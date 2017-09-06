/* 作者: dailc
 * 时间: 2017-09-06
 * 描述: Count-Numbers-with-Unique-Digits
 * 
 * 来自: https://leetcode.com/problems/count-numbers-with-unique-digits
 */
(function(exports) {
    var count = function(k) {
        if (k < 1) {
            return 0;
        }
        if(k === 1) {
            return 10;
        }
        var res = 1;
        
        for (var i = 9; i >= (11 - k); i--) {
            res *= i;
        }
        
        return res * 9;
    };
    
    var countNumbersWithUniqueDigits = function(n) {
        if (n === 0) {
            return 1;
        }
        var res = 0;
        
        for (var i = 1; i <= n; i++) {
            res += count(i);
        }
        
        return res;
    };

    

    exports.countNumbersWithUniqueDigits = countNumbersWithUniqueDigits;

})(window.LeetCode = window.LeetCode || {});