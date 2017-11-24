/*
 * 一刷时间: 2017-04-03
 * 二刷时间：2017-11-24
 * 来自: https://leetcode.com/problems/count-and-say
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {string}
     */
    function countAndSay(n) {
        let res = '1';
        let i = 1;

        while (i < n) {
            res = countAndSayForOneString(res);
            i++;
        }

        return res;
    }

    function countAndSayForOneString(str) {
        const len = str.length;
        let res = '';
        let count = 1;
        let lastCh = str.charAt(0);

        for (let i = 1; i < len; i++) {
            const ch = str.charAt(i);

            if (ch === lastCh) {
                count++;
                continue;
            }
            res += count + lastCh;
            lastCh = ch;
            count = 1;
        }

        res += count + lastCh;

        return res;
    }

    exports.countAndSay = countAndSay;

})(window.LeetCode = window.LeetCode || {});