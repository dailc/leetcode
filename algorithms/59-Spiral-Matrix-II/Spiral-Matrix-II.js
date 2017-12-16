/**
 * 一刷时间: 2017-04-12
 * 二刷时间：2017-12-16
 * 来自: https://leetcode.com/problems/spiral-matrix-ii
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {number[][]}
     */
    function generateMatrix(n) {
        if (!n) {
            return [];
        }
        const res = [];

        for (let i = 0; i < n; i++) {
            res[i] = new Array(n);
            res[i].fill(0);
        }

        const count = [1];
        const rows = n;
        const cols = n;
        let start = 0;

        while (start * 2 < rows && start * 2 < cols) {
            matrixInCircle(res, rows, cols, start++, count);
        }

        return res;
    }

    function matrixInCircle(res, rows, cols, start, count) {
        const endX = cols - 1 - start;
        const endY = rows - 1 - start;

        // 从左到右
        for (let i = start; i <= endX; i++) {
            res[start][i] = count[0]++;
        }

        // 从上到下
        if (endY > start) {
            for (let i = start + 1; i <= endY; i++) {
                res[i][endX] = count[0]++;
            }
        }

        // 从右到左
        if (endY > start && endX > start) {
            for (let i = endX - 1; i >= start; i--) {
                res[endY][i] = count[0]++;
            }
        }

        // 从下到上，由于最上和最下已经都赋值了的，所以必须还多一个才行
        if (endY > start + 1 && endX > start) {
            for (let i = endY - 1; i >= start + 1; i--) {
                res[i][start] = count[0]++;
            }
        }
    }

    exports.generateMatrix = generateMatrix;

})(window.LeetCode = window.LeetCode || {});