/* 
 * 一刷时间: 2017-01-23
 * 二刷时间：2017-10-24
 * 来自: https://leetcode.com/problems/string-to-integer-atoi/
 */
(function(exports) {

    /**
     * @param {string} str
     * @return {number}
     */
    function myAtoi(str) {
        if (!str) {
            return 0;
        }
        const MAX_VALUE = 2147483647;
        const MIN_VALUE = -2147483648;
        const s = str.trim();
        const len = s.length;
        let sign = 1;
        let res = 0;

        for (let i = 0; i < len; i += 1) {
            const tmp = s.charAt(i);

            if (i === 0 &&
                (tmp === '-' || tmp === '+')) {
                sign = (tmp === '-') ? -1 : 1;
            } else if (tmp >= '0' && tmp <= '9') {
                res = res * 10 + parseInt(tmp);
            } else {
                // 非法，直接退出
                break;
            }
        }

        res = sign * res;
        res = Math.max(MIN_VALUE, res);
        res = Math.min(MAX_VALUE, res);

        return res;
    }

    exports.myAtoi = myAtoi;

})(window.LeetCode = window.LeetCode || {});