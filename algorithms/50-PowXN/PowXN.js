/**
 * 一刷时间: 2017-04-08
 * 二刷时间：2017-12-06
 * 来自: https://leetcode.com/problems/powx-n
 */
(function(exports) {

    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    function myPow(x, n) {
        if (x === 0) {
            return 0;
        }
        const MAX_INT = Math.pow(2, 31) - 1;
        const MIN_INT = -Math.pow(2, 31);

        let res = pow(x, n);

        if (res > MAX_INT || res < MIN_INT) {
            res = 0;
        }

        return res;
    }

    function pow(x, n) {
        if (n === 0) {
            return 1;
        }
        if (n < 0) {
            return 1 / (pow(x, -n));
        }
        const half = pow(x, n >> 1);

        if (n & 1) {
            return half * half * x;
        }
        
        return half * half;
    }

    exports.myPow = myPow;

})(window.LeetCode = window.LeetCode || {});