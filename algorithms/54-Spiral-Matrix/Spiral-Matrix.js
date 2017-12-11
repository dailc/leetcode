/**
 * 一刷时间: 2017-04-10
 * 二刷时间：2017-12-11
 * 来自: https://leetcode.com/problems/Spiral-Matrix
 */
(function(exports) {

    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    function spiralOrder(matrix) {
        if (!matrix || !matrix[0]) {
            return [];
        }
        const rows = matrix.length;
        const cols = matrix[0].length;
        const res = [];
        let start = 0;

        while (cols > start * 2 && rows > start * 2) {
            matrixInCircle(matrix, res, rows, cols, start++);
        }

        return res;
    }

    function matrixInCircle(matrix, res, rows, cols, start) {
        const endX = cols - 1 - start;
        const endY = rows - 1 - start;

        // 从左到又
        if (endX >= start) {
            for (let i = start; i <= endX; i++) {
                res.push(matrix[start][i]);
            }
        }

        // 从上到下
        if (endY > start) {
            for (let i = start + 1; i <= endY; i++) {
                res.push(matrix[i][endX]);
            }
        }

        // 从右到左
        if (endX > start && endY > start) {
            for (let i = endX - 1; i >= start; i--) {
                res.push(matrix[endY][i]);
            }
        }

        // 从下到上,和第三步相比，Y要多一行
        if (endX > start && endY > start + 1) {
            for (let i = endY - 1; i >= start + 1; i--) {
                res.push(matrix[i][start]);
            }
        }
    }
    exports.spiralOrder = spiralOrder;
})(window.LeetCode = window.LeetCode || {});