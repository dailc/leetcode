/* 作者: dailc
 * 时间: 2017-07-14
 * 描述: Ugly-Number
 * 
 * 来自: https://leetcode.com/problems/ugly-number
 */
(function(exports) {

    /**
     * @param {number} num
     * @return {boolean}
     */
    var isUgly = function(num) {
        if (!num || num < 0) {
            return false;
        }
        while (num % 2 === 0) {
            num /= 2;
        }
        while (num % 3 === 0) {
            num /= 3;
        }
        while (num % 5 === 0) {
            num /= 5;
        }

        return (num === 1) ? true : false;
    };

    exports.isUgly = isUgly;

})(window.LeetCode = window.LeetCode || {});