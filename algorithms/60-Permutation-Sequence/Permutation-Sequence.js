/**
 * 一刷时间: 2017-04-12
 * 二刷时间：2017-12-17
 * 来自: https://leetcode.com/problems/permutation-sequence
 */
(function(exports) {

    /**
     * @param {number} n
     * @param {number} k k可能会是一个很大的数，可能大于阶乘
     * @return {string}
     */
    function getPermutation(n, k) {
        if (n < 1 || n > 9 || k < 1) {
            return '';
        }
        let factorial = 1;

        // 计算n-1的阶乘
        for (let i = 2; i < n; i++) {
            factorial *= i;
        }

        let nums = [];

        // 第一个排列
        for (let i = 0; i < n; i++) {
            nums[i] = i + 1;
        }

        // 因为从0开始算，所以k的序号-1
        k--;

        // 当前计算的是n-1阶乘
        let round = n - 1;
        let res = '';

        while (round >= 0) {
            const index = Math.floor(k / factorial);

            // 计算下一个k，阶乘位会少1，不允许k超出范围
            k %= factorial;

            res += nums[index];

            // 下个阶乘中不再包含上一个的index
            nums.splice(index, 1);

            if (round > 0) {
                // 换阶乘
                factorial = Math.floor(factorial / round);
            }
            // 阶乘位-1
            round--;
        }

        return res;
    }

    exports.getPermutation = getPermutation;

})(window.LeetCode = window.LeetCode || {});