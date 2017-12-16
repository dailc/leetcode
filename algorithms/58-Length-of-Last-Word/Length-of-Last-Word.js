/**
 * 一刷时间: 2017-04-11
 * 二刷时间：2017-12-15
 * 来自: https://leetcode.com/problems/length-of-last-word
 */
(function(exports) {

    /**
     * @param {string} s
     * @return {number}
     */
    function lengthOfLastWord(s) {
        if (!s) {
            return 0;
        }
        const len = s.length;
        let count = 0;
        let isStart = false;

        for (let i = len - 1; i >= 0; i--) {
            const ch = s.charAt(i);

            if (!isStart && ch !== ' ') {
                isStart = true;
                count++;
            } else if (isStart && ch === ' ') {
                return count;
            } else if (isStart) {
                count++;
            }
        }

        return count;
    }

    exports.lengthOfLastWord = lengthOfLastWord;

})(window.LeetCode = window.LeetCode || {});