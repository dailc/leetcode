/* 作者: dailc
 * 时间: 2017-08-27
 * 描述: Counting-Bits
 * 
 * 来自: https://leetcode.com/problems/counting-bits
 */
(function(exports) {
    
    var countBits = function(num) {
        var res = [0];
        
        for (var i = 1; i <= num; i++) {
            if (i & 1) {
                res.push(res[~~(i / 2)] + 1);
            } else {
                res.push(res[~~(i / 2)]);
            }
        }
        
        return res;
    };

    exports.countBits = countBits;

})(window.LeetCode = window.LeetCode || {});