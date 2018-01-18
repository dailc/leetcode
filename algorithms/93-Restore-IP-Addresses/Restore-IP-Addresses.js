/**
 * 一刷时间: 2017-04-25
 * 二刷时间：2018-01-18
 * 来自: https://leetcode.com/problems/restore-ip-addresses
 */
(function(exports) {

    /**
     * @param {string} s
     * @return {string[]}
     */
    function restoreIpAddresses(s) {
        if (!s || s.length < 4 || s.length > 12) {
            return [];
        }
        const res = [];

        dfs(res, s, '', 0);

        return res;
    }

    function dfs(res, s, preIpAddress, count) {
        // count代表3位ip都满了
        if (count === 3 && isValid(s)) {
            res.push(preIpAddress + s);

            return;
        }
        const len = s.length;

        for (let i = 0; i <= 3 && i < len - 1; i++) {
            // 依次尝试1，2，3个字符
            const tmpIp = s.substring(0, i + 1);

            if (isValid(tmpIp)) {
                dfs(res, s.substring(i + 1, s.length), preIpAddress + tmpIp + '.', count + 1);
            }

        }
    }

    function isValid(s) {
        if (s.charAt(0) === '0') {
            // 考虑.0的情况
            return s === "0";
        }

        const num = +s;

        return num > 0 && num <= 255;
    }
    exports.restoreIpAddresses = restoreIpAddresses;

})(window.LeetCode = window.LeetCode || {});