/**
 * 一刷时间: 2017-04-24
 * 二刷时间：2018-01-14
 * 来自: https://leetcode.com/problems/gray-code
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {number[]}
     */
    function grayCode(n) {
        if (n === 0) {
            return [0];
        }
        const res = [];
        // 左移了n位，也就是此时大于grayCode中的最大值
        const num = 1 << n;
        let i = 0;

        while (i < num) {
            // ^是异或操作
            res.push((i >> 1) ^ (i++));
        }

        return res;
    }

    exports.grayCode = grayCode;

    /**
     * @param {number} n
     * @return {number[]}
     */
    function grayCode2(n) {
        if (n === 0) {
            return [0];
        }
        const lastGrayCode = grayCode(n - 1);
        const len = lastGrayCode.length;
        const addNumber = 1 << (n - 1);
        // 前n-1个grayCode的所有组合-当前至高位为0的所有情况
        const res = [].concat(lastGrayCode);

        // 补齐当前至高位为1的所有情况
        for (let i = len - 1; i >= 0; i--) {
            res.push(addNumber + lastGrayCode[i]);
        }

        return res;
    }

    exports.grayCode2 = grayCode2;

})(window.LeetCode = window.LeetCode || {});