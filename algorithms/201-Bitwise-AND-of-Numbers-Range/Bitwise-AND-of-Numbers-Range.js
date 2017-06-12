/* 作者: dailc
 * 时间: 2017-06-12
 * 描述: Bitwise-AND-of-Numbers-Range
 * 
 * 来自: https://leetcode.com/problems/bitwise-and-of-numbers-range
 */
(function(exports) {

    /**
     * @description rangeBitwiseAnd
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    LeetCode.rangeBitwiseAnd = function(m, n) {
        if( m == 0) {
            return 0;
        }
        var moveFactor = 1;
        
        while(m != n) {
            m >>= 1;
            n >>= 1;
            moveFactor <<= 1;
        }
        
        return m * moveFactor;
    };

    

})(window.LeetCode = window.LeetCode || {});