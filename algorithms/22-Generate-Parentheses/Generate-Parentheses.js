/*
 * 一刷时间: 2017-03-26
 * 二刷时间：2017-11-07
 * 来自: https://leetcode.com/problems/generate-parentheses
 */
(function(exports) {
    /**
     * @param {number} n
     * @return {string[]}
     */
    function generateParenthesis(n) {
        const res = [];

        generate(res, n, n, '');

        return res;
    };

    function generate(res, leftRmainNum, rightRemainNum, str) {
        if (leftRmainNum <= 0 && rightRemainNum <= 0) {
            res.push(str);

            return;
        }

        if (leftRmainNum > 0) {
            generate(res, leftRmainNum - 1, rightRemainNum, str + '(');
        }

        if (rightRemainNum > 0 && leftRmainNum < rightRemainNum) {
            generate(res, leftRmainNum, rightRemainNum - 1, str + ')');
        }
    }

})(window.LeetCode = window.LeetCode || {});