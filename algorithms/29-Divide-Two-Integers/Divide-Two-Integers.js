/*
 * 一刷时间: 2017-03-29
 * 二刷时间：2017-11-15
 * 来自: https://leetcode.com/problems/divide-two-integers
 */
(function(exports) {

    /**
     * @param {number} dividend
     * @param {number} divisor
     * @return {number}
     */
    function divide(dividend, divisor) {
        const MAX_INT = Math.pow(2, 31) - 1;
        const MIN_INT = -Math.pow(2, 31);

        if (divisor == 0) {
            return MAX_INT;
        }

        const symble = ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) ? 1 : -1;

        divisor = Math.abs(divisor);
        dividend = Math.abs(dividend);

        let res = 0;

        if (divisor == 1) {
            res = dividend;
        } else {
            let tmp = divisor;
            let mutiple = 1;

            // 先得到最大偶数  ,要防止左移时溢出
            while (dividend >= tmp && ((tmp << 1) > 0)) {
                tmp <<= 1;
                mutiple <<= 1;
            }

            // 然后得到尽可能大的整除数
            while (dividend >= divisor) {
                while (dividend >= tmp) {
                    dividend -= tmp;
                    res += mutiple;
                }
                // 计算 右移
                tmp >>= 1;
                mutiple >>= 1;
                if (!mutiple & 1 || !tmp & 1) {
                    break;
                }
            }
        }

        res = symble > 0 ? res : -res;
        if (res > MAX_INT) {
            res = MAX_INT;
        } else if (res < MIN_INT) {
            res = MIN_INT;
        }

        return res;
    };

    exports.divide = divide;

})(window.LeetCode = window.LeetCode || {});