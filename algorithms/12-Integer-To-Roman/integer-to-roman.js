/* 
 * 一刷时间: 2017-03-15
 * 二刷时间：2017-10-28
 * 来自: https://leetcode.com/problems/integer-to-roman
 */
(function(exports) {

    /**
     * @param {number} num
     * @return {string}
     */
    function intToRoman(num) {
        if (num < 1 || num > 3999) {
            return '';
        }
        
        const ROMAN_NUM = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        const INT_NUM = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        
        let res = '';
        
        for (let i = 0; num !== 0; i += 1) {
            while (num >= INT_NUM[i]) {
                num -= INT_NUM[i];
                res += ROMAN_NUM[i];
            }
        }
        
        return res;
    }

    exports.intToRoman = intToRoman;

})(window.LeetCode = window.LeetCode || {});