/* 作者: dailc
 * 时间: 2017-07-12
 * 描述: Add-Digits
 * 
 * 来自: https://leetcode.com/problems/add-digits
 */
(function(exports) {

    /**
     * @param {number} num
     * @return {number}
     */
    var addDigits = function(num) {
        return (num - 1) % 9 + 1;
    };
    


    exports.addDigits = addDigits;

})(window.LeetCode = window.LeetCode || {});