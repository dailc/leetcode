/* 
 * 一刷时间: 2016-12-12
 * 二刷时间：2017-10-20
 * 来自: https://leetcode.com/problems/longest-palindromic-substring/description/
 */
(function(exports) {
    
    function expandAroundCenter(s, left, right) {
        const len = s.length;
        
        while (left >= 0
            && right <= len - 1
            && s.charAt(left) === s.charAt(right)
            ) {
                left--;
                right++;
            }
            
        return s.substr(left + 1, right - left - 1);
    }

    /**
     * @param {string} s
     * @return {string}
     */
    function longestPalindrome(s) {
        if (!s) {
            return '';
        }
        
        const len = s.length;
        let longestStr = s.substr(0, 1);
        
        for (let i = 0; i < len - 1; i += 1) {
            // 奇数位的回文数
            const substrOdd = expandAroundCenter(s, i, i);
            // 偶数位的回文数
            const substrEven = expandAroundCenter(s, i, i + 1);
            
            longestStr = substrOdd.length > longestStr.length ? substrOdd : longestStr;
            longestStr = substrEven.length > longestStr.length ? substrEven : longestStr;
        }
        
        return longestStr;
    }

    exports.longestPalindrome = longestPalindrome;
})(window.LeetCode = window.LeetCode || {});