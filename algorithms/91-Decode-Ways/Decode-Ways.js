/**
 * 一刷时间: 2017-04-25
 * 二刷时间：2018-01-16
 * 来自: https://leetcode.com/problems/decode-ways
 */
(function(exports) {

    /**
     * @param {string} s
     * @return {number}
     */
    function numDecodings(s) {
        if (!s || s.charAt(0) === '0') {
            return 0;
        }
        const len = s.length;
        const nums = [1, 1];

        for (let i = 2; i <= len; i++) {
            // 检查（当前字符）是不是'0'
            let ch = s.substring(i - 1, i);
            
            // 加法在后面做
            if (ch !== '0') {
                nums[i] = nums[i - 1];
            } else {
                nums[i] = 0;
            }
            // 检查（当前字符和前一个字符）组合在一起是否在1-26之间
            if (s.charAt(i - 2) !== '0') {
                ch = +s.substring(i - 2, i);
                
                // 必须（前一个字符，当前字符）表示的数字符合要求才会加上nums[i - 2]
                // 注意，index与实际字符的关系
                if (ch > 0 && ch <= 26) {
                    nums[i] += nums[i - 2];
                }
            }
        }

        return nums[len];
    }

    exports.numDecodings = numDecodings;

})(window.LeetCode = window.LeetCode || {});