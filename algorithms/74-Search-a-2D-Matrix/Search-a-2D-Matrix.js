/**
 * 一刷时间: 2017-04-18
 * 二刷时间：2017-12-31
 * 来自: https://leetcode.com/problems/search-a-2d-matrix
 */
(function(exports) {

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    function searchMatrix(matrix, target) {
        if (!matrix || !matrix[0]) {
            return false;
        }
        if (matrix[0][0] === target) {
            return true;
        }

        const rows = matrix.length;
        const cols = matrix[0].length;
        let left = 0;
        let right = rows * cols - 1;

        while (left <= right) {
            // 需要+1，确保可以达到right
            const midIndex = Math.floor((left + right + 1) / 2);
            const mid = matrix[~~(midIndex / cols)][midIndex % cols];

            if (mid === target) {
                return true;
            } else if (mid > target) {
                right = midIndex - 1;
            } else {
                left = midIndex + 1;
            }

        }

        return false;
    }

    exports.searchMatrix = searchMatrix;

})(window.LeetCode = window.LeetCode || {});