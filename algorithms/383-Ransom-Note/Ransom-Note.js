/* 作者: dailc
 * 时间: 2017-09-19
 * 描述: Ransom-Note
 * 
 * 来自: https://leetcode.com/problems/ransom-note
 */
(function(exports) {

    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    var canConstruct = function(ransomNote, magazine) {
        let mp = {};
        let lenS = ransomNote.length;
        let lenM = magazine.length;
        
        for (let i = 0; i < lenM; i += 1) {
            let ch = magazine.charAt(i);
            
            mp[ch] = mp[ch] || 0;
            mp[ch] += 1;
            
            
        }
        
        for (let j = 0; j < lenS; j += 1) {
            let ch = ransomNote.charAt(j);
            
            if (mp[ch]) {
                mp[ch] -= 1;
            } else {
                // 如果不满足需求
                return false;
            }
        }
        
        return true;
    };

    exports.canConstruct = canConstruct;

})(window.LeetCode = window.LeetCode || {});