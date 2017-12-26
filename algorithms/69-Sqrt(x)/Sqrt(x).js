/**
 * 一刷时间: 2017-04-16
 * 二刷时间：2017-12-26
 * 来自: https://leetcode.com/problems/sqrtx
 */
(function(exports) {

    /**
     * @param {number} x
     * @return {number}
     */
    function mySqrt(x) {
        if (x < 0) {
            return -1;
        }

        if (x === 0) {
            return 0;
        }
        let left = 1;
        let right = Math.floor(x / 2 + 1);

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (mid <= Math.floor(x / mid) && Math.floor(x / (mid + 1)) < mid + 1) {
                return mid;
            }

            if (Math.floor(x / mid) < mid) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return 0;
    }

    exports.mySqrt = mySqrt;

    /**
     * @param {number} x
     * @return {number}
     */
    function mySqrt2(x) {
        if (x == 0) {
            return 0;
        }

        let lastY = 0;
        let y = 1;

        while (Math.abs(y - lastY) > 0.00001) {
            lastY = y;
            y = (lastY + x / lastY) / 2;
        }

        return Math.floor(y);
    }

    exports.mySqrt2 = mySqrt2;

})(window.LeetCode = window.LeetCode || {});