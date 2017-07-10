/* 作者: dailc
 * 时间: 2017-07-10
 * 描述: Valid-Anagram
 * 
 * 来自: https://leetcode.com/problems/valid-anagram
 */
(function(exports) {

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    var isAnagram = function(s, t) {
        if (!s && !t) {
            return true;
        }
        if (!s || !t || s.length != t.length) {
            return false;
        }
        var hash = {},
            len = s.length;
        
        for (var i = 0; i < len; i ++) {
            var tmp = s.charAt(i);
            if (!hash[tmp]) {
                hash[tmp] = 1;
            } else {
                hash[tmp] ++;
            }
        }
         
        for (var i = 0; i < len; i ++) {
            var tmp = t.charAt(i);
            if (!hash[tmp]) {
                return false;
            } else {
                hash[tmp] --;
            }
        } 
        
        for (var key in hash) {
            if (hash[key]) {
                return false;
            }
        }
        
        return true;
    };
    


    exports.isAnagram = isAnagram;

})(window.LeetCode = window.LeetCode || {});