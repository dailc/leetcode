/**
 * 一刷时间: 2017-04-08
 * 二刷时间：2017-12-04
 * 来自: https://leetcode.com/problems/Rotate-Image
 */
(function(exports) {

    /**
     * @param {number[][]} matrix
     * @return {void} Do not return anything, modify matrix in-place instead.
     */
    function rotate(matrix) {
        if (!matrix) {
            return;
        }

        const len = matrix.length;
        
        // 第一次行列交换
        for (let i = 0; i < len; i++) {
            for (let j = i; j < len; j++) {
                swap(matrix, i, j, j, i);
            }
        }
        
        // 第二次左右翻转
        for (let i = 0; i < len; i++) {
            const mid = Math.floor(len / 2);

            for (let j = 0; j < mid; j++) {
                swap(matrix, i, j, i, len - 1 - j);
            }
        }
    }

    function swap(matrix, i, j, m, n) {
        const tmp = matrix[i][j];

        matrix[i][j] = matrix[m][n];
        matrix[m][n] = tmp;
    }

    exports.rotate = rotate;

})(window.LeetCode = window.LeetCode || {});