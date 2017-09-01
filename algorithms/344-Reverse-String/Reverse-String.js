/* 作者: dailc
 * 时间: 2017-08-31
 * 描述: Reverse-String
 * 
 * 来自: https://leetcode.com/problems/reverse-string
 */
(function(exports) {


    var reverseString = function(s) {
        var chs = [],
            len = s.length;
        
        for (var i = 0; i < len; i++) {
            chs[i] = s.charAt(len - 1 - i);
        }
        
        return chs.join('');
    };
    exports.reverseString = reverseString;

})(window.LeetCode = window.LeetCode || {});