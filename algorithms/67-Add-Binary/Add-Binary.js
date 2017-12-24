/**
 * 一刷时间: 2017-04-15
 * 二刷时间：2017-12-24
 * 来自: https://leetcode.com/problems/add-binary
 */
(function(exports) {

    /**
     * @param {string} a
     * @param {string} b
     * @return {string}
     **/
    function addBinary(a, b) {

        const len1 = a.length;
        const len2 = b.length;
        const maxStr = len1 > len2 ? a : b;
        const minLen = Math.min(len1, len2);
        const maxLen = Math.max(len1, len2);
        const res = [];
        let carry = 0;

        for (let i = 0; i < minLen; i++) {
            const sum = +a.charAt(len1 - 1 - i) + +b.charAt(len2 - 1 - i) + carry;

            res[i] = sum % 2;
            carry = ~~(sum / 2);
        }

        for (let i = minLen; i < maxLen; i++) {
            const sum = +maxStr.charAt(maxLen - 1 - i) + carry;

            res[minLen + i] = sum % 2;
            carry = ~~(sum / 2);
        }

        if (carry === 1) {
            res.push(1);
        }

        return res.reverse().join('');
    }
    exports.addBinary = addBinary;

})(window.LeetCode = window.LeetCode || {});