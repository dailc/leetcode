/* 作者: dailc
 * 时间: 2017-07-25
 * 描述: Word-Pattern
 * 
 * 来自: https://leetcode.com/problems/game-of-life
 */
(function(exports) {

    /**
     * @param {string} pattern
     * @param {string} str
     * @return {boolean}
     */
    var wordPattern = function(pattern, str) {
        if (!pattern && !str) {
            return true;
        } else if (!pattern || !str) {
            return false;
        }
        
        var words = str.split(' ');
        
        if (words.length !== pattern.length) {
            return false;
        }
        
        var hash = {},
            hash2 = {},
            len = words.length;
        
        for (var i = 0; i < len; i++) {
            var ch = pattern.charAt(i),
                word = words[i];
            
            if (!hash[word] && !hash2[ch]) {
                hash[word] = ch;
                hash2[ch] = word;
            } else {
                if (hash[word] !== ch) {
                    return false;
                }
            }
        }
        
        return true;
    };

    exports.wordPattern = wordPattern;

})(window.LeetCode = window.LeetCode || {});