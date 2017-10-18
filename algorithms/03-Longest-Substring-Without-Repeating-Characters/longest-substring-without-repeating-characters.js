/* 
 * 一刷时间: 2016-12-11
 * 二刷时间：2017-10-18
 * 来自: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
(function(exports) {
    /**
     * @param {string} s
     * @return {number}
     */
    function lengthOfLongestSubstring(s) {
        const len = s.length;
        let longSubstr = '';
        let maxLen = 0;
        let index = 0;
        
        while (index < len) {
            let curCh = s.charAt(index);
            let curIndex = longSubstr.indexOf(curCh);
            
            if (curIndex !== -1) {
                maxLen = Math.max(maxLen, longSubstr.length);
                longSubstr = longSubstr.substr(curIndex + 1);
            }
            longSubstr += curCh;
            index++;
        }
        
        maxLen = Math.max(maxLen, longSubstr.length);
        
        return maxLen;
    }

    exports.lengthOfLongestSubstring = lengthOfLongestSubstring;

})(window.LeetCode = window.LeetCode || {});