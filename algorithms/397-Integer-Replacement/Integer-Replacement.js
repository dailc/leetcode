/* 作者: dailc
 * 时间: 2017-10-10
 * 描述: Integer-Replacement
 * 
 * 来自: https://leetcode.com/problems/integer-replacement/description/
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {number}
     */
    var integerReplacement = function(n) {
        var count = 0;
        var tmp = n;
        
        while (tmp > 1) {
            count++;
            if (tmp & 1) {
                if ((tmp & 2) && (tmp !== 3)) {
                    tmp++;
                } else {
                    tmp--;
                }
            } else {
                // 需要无符号右移
                tmp >>>= 1;
                console.log(tmp);
            }
        }
        
        return count;
    };

    exports.integerReplacement = integerReplacement;

})(window.LeetCode = window.LeetCode || {});