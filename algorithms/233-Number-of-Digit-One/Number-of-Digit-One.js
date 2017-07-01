/* 作者: dailc
 * 时间: 2017-06-31
 * 描述: Number-of-Digit-One
 * 
 * 来自: https://leetcode.com/problems/number-of-digit-one
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {number}
     */
    var countDigitOne = function(n) {
        var count = 0;
        
        for (var m = 1; m <= n; m *= 10) {
            var divisor = ~~(n / m);
            var remainder = n % m;
           
            count += ~~((divisor + 8) / 10) * m;
            
            if (divisor % 10 == 1) {
                count += remainder + 1;
            }
        }
        
        return count;
    };

    LeetCode.countDigitOne = countDigitOne;

})(window.LeetCode = window.LeetCode || {});