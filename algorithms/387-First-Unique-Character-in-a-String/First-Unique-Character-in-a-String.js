/* 作者: dailc
 * 时间: 2017-09-23
 * 描述: First-Unique-Character-in-a-String
 * 
 * 来自: https://leetcode.com/problems/first-unique-character-in-a-string
 */
(function(exports) {
    
    /**
     * @param {string} s
     * @return {number}
     */
    var firstUniqChar = function(s) {
        if (!s) {
            return -1;
        }
        
        var mp = {};
        var len = s.length;
        
        for (var i = 0; i < len; i++) {
            var ch = s.charAt(i);
            
            mp[ch] = mp[ch] || 0;
            mp[ch]++;
        }
        
        for (var i = 0; i < len; i++) {
            if (mp[ s.charAt(i)] === 1) {
                return i;
            }
        }
        
        return -1;
    };

    exports.firstUniqChar = firstUniqChar;

})(window.LeetCode = window.LeetCode || {});