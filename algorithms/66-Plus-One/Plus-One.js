/**
 * 一刷时间: 2017-04-15
 * 二刷时间：2017-12-23
 * 来自: https://leetcode.com/problems/Plus-One
 */
(function(exports) {

    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    function plusOne(digits) {
        if (!digits || digits.length === 0) {
            return [];
        }

        const len = digits.length;
        let carry = 1;

        for (let i = len - 1; carry && i >= 0; i--) {
            const sum = digits[i] + carry;

            digits[i] = sum % 10;
            carry = ~~(sum / 10);
        }

        // 如果存在最高位
        if (carry) {
            digits.unshift(carry);
        }

        return digits;
    }
    exports.plusOne = plusOne;

})(window.LeetCode = window.LeetCode || {});