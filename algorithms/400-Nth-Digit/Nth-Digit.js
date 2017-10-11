/* 作者: dailc
 * 时间: 2017-10-11
 * 描述: Nth-Digit
 * 
 * 来自: https://leetcode.com/problems/nth-digit/description/
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {number}
     */
    var findNthDigit = function(n) {
        var length = 1;
        var start = 1;
        var base = 9;
        
        while (n > length * base) {
            n -= base * (length++);
            start *= 10;
            base *= 10;
        }
        start += ~~((n - 1) / length);
        
        return +start.toString().charAt((n - 1) % length);
    };

    exports.findNthDigit = findNthDigit;

})(window.LeetCode = window.LeetCode || {});