/* 
 * 一刷时间: 2017-02-28
 * 二刷时间：2017-10-25
 * 来自: https://leetcode.com/problems/palindrome-number
 */
(function(exports) {
    /**
     * @param {number} x
     * @return {boolean}
     */
    function isPalindrome(x) {
        let number = x;
        
        if (number < 0) {
            return false;
        }
        
        // 当前位数
        let digit = 1;
        
        while (number / digit >= 10) {
            digit *= 10;
        }
        
        while (number !== 0) {
            const divider = parseInt(number / digit);
            const remainder = number % 10;
            
            if (divider !== remainder) {
                return false;
            }
            
            // 去头去尾
            // 如 12321 变为  232
            number = parseInt((number % digit) / 10);
            
            digit /= 100;
        }
        
        return true;
    }
    exports.isPalindrome = isPalindrome;

})(window.LeetCode = window.LeetCode || {});