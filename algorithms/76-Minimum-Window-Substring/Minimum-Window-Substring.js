/**
 * 一刷时间: 2017-04-18
 * 二刷时间：2018-01-02
 * 来自: https://leetcode.com/problems/minimum-window-substring
 */
(function(exports) {

    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    function minWindow(s, t) {
        if (!s || !t) {
            return '';
        }
        const hash = {};
        const len1 = s.length;
        const len2 = t.length;

        for (let i = 0; i < len2; i++) {
            hash[t.charAt(i)] = (hash[t.charAt(i)] || 0) + 1;
        }

        // 用于记录窗口内每一个字母出现的次数
        const hashDest = {};
        let found = 0;
        let start = 0;
        let minWindow = '';

        for (let i = 0; i < len1; i++) {
            const ch = s.charAt(i);

            // 每来一个字符给它的出现次数加1
            hashDest[ch] = hashDest[ch] || 0;
            hashDest[ch]++;
            // 如果加1后这个字符的数量不超过目标串中该字符的数量，则找到了一个匹配字符
            if (hashDest[ch] <= (hash[ch] || 0)) {
                found++;
            }
            // 如果找到的匹配字符数等于目标串长度，说明找到了一个符合要求的子串
            if (found == len2) {
                let tmp2 = s.charAt(start);

                // 将开头没用的都跳过，没用是指该字符出现次数超过了目标串中出现的次数，并把它们出现次数都减1
                while (start < i && hashDest[tmp2] > (hash[tmp2] || 0)) {
                    hashDest[tmp2]--;
                    start++;
                    // tmp要变化
                    tmp2 = s.charAt(start);
                }
                // 这时候start指向该子串开头的字母，判断该子串长度
                if (minWindow === '' || i - start < minWindow.length) {
                    // 重新缓存一个最小窗口
                    minWindow = s.substring(start, i + 1);
                }
                // 把开头的这个匹配字符跳过，并将匹配字符数减1
                hashDest[tmp2]--;
                found--;
                // 子串起始位置加1，我们开始看下一个子串了
                start++;
            }
        }

        return minWindow;
    }

    exports.minWindow = minWindow;

})(window.LeetCode = window.LeetCode || {});