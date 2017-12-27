/**
 * 一刷时间: 2017-04-16
 * 二刷时间：2017-12-27
 * 来自: https://leetcode.com/problems/climbing-stairs
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {number}
     */
    function climbStairs(n) {
        if (n === 1) {
            return 1;
        }
        if (n === 2) {
            return 2;
        }
        let f1 = 1;
        let f2 = 2;
        let fn = f1 + f2;

        while (n-- > 3) {
            f1 = f2;
            f2 = fn;
            fn = f1 + f2;
        }

        return fn;
    }

    exports.climbStairs = climbStairs;

})(window.LeetCode = window.LeetCode || {});