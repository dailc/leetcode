/* 作者: dailc
 * 时间: 2017-06-30
 * 描述: Power-of-Two
 * 
 * 来自: https://leetcode.com/problems/power-of-two
 */
(function(exports) {
    
    
    /**
     * @param {number} n
     * @return {boolean}
     */
    LeetCode.isPowerOfTwo = function(n) {    
        return n > 0 && ((n & (n - 1)) == 0 );
    };
    
 
})(window.LeetCode = window.LeetCode || {});