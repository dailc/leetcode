/* 作者: dailc
 * 时间: 2017-09-25
 * 描述: Find-the-Difference
 * 
 * 来自: https://leetcode.com/problems/find-the-difference
 */
(function(exports) {

    /**
     * @param {string} s
     * @param {string} t
     * @return {character}
     */
    var findTheDifference = function(s, t) {
        var mp = {};
        var lenT = t.length;
        var lenS = s.length;
        
        for (var i = 0; i < lenS; i++) {
            var ch = s.charAt(i);
            
            mp[ch] = mp[ch] || 0;
            mp[ch]++;
        }
        
        for (var i = 0; i < lenT; i++) {
            var ch = t.charAt(i);
            
            if (!mp[ch]) {
                return ch;
            } else {
                mp[ch]--;
            }
        }
        
        return '';
    };

    exports.findTheDifference = findTheDifference;

})(window.LeetCode = window.LeetCode || {});