/**
 * 一刷时间: 2017-04-27
 * 二刷时间：2018-01-22
 * 来自: https://leetcode.com/problems/interleaving-string
 */
(function(exports) {

    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    function isInterleave(s1, s2, s3) {
        if (!s1 && !s2 && !s3) {
            return true;
        }
        if (!s3) {
            return false;
        }
        if (!s1 && s2) {
            return s2 === s3;
        }
        if (s1 && !s2) {
            return s1 === s3;
        }
        const len1 = s1.length;
        const len2 = s2.length;
        const len3 = s3.length;

        if (len1 + len2 !== len3) {
            return false;
        }

        const dp = [];

        for (let i = 0; i <= len1; i++) {
            dp[i] = [];
        }

        dp[0][0] = true;

        for (let i = 1; i <= len1; i++) {
            if (s1.charAt(i - 1) == s3.charAt(i - 1) && dp[i - 1][0]) {
                dp[i][0] = true;
            }
        }

        for (let j = 1; j <= len2; j++) {
            if (s2.charAt(j - 1) == s3.charAt(j - 1) && dp[0][j - 1]) {
                dp[0][j] = true;
            }
        }

        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                if (s1.charAt(i - 1) == s3.charAt(i + j - 1) && dp[i - 1][j]) {
                    dp[i][j] = true;
                }
                if (s2.charAt(j - 1) == s3.charAt(i + j - 1) && dp[i][j - 1]) {
                    dp[i][j] = true;
                }
            }
        }

        return dp[len1][len2] || false;
    }

    exports.isInterleave = isInterleave;

})(window.LeetCode = window.LeetCode || {});