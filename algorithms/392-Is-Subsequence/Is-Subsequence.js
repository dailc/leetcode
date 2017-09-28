/* 作者: dailc
 * 时间: 2017-09-27
 * 描述: Is-Subsequence
 * 
 * 来自: https://leetcode.com/problems/is-subsequence
 */
(function(exports) {

    /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
    var isSubsequence = function(s, t) {
        if (t.length < s.length) {
            return false;
        }
        
        var prev = 0;
        var len = s.length;
        
        for (var i = 0; i < len; i++) {
            var ch = s.charAt(i);
            
            prev = t.indexOf(ch, prev);
            
            if (prev === -1) {
                return false;
            }
            
            prev++;
        }
        
        return true;
    };

    exports.isSubsequence = isSubsequence;

})(window.LeetCode = window.LeetCode || {});