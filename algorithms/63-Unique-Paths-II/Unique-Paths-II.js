/**
 * 一刷时间: 2017-04-13
 * 二刷时间：2017-12-20
 * 来自: https://leetcode.com/problems/unique-paths-ii
 */
(function(exports) {

    /**
     * @param {number[][]} obstacleGrid
     * @return {number}
     */
    function uniquePathsWithObstacles(obstacleGrid) {
        if (!obstacleGrid || !obstacleGrid[0]) {
            return 0;
        }
        // 特殊示例
        const rows = obstacleGrid.length;
        const cols = obstacleGrid[0].length;

        if (obstacleGrid[0][0] === 1 ||
            obstacleGrid[rows - 1][cols - 1] === 1) {
            return 0;
        }

        // 初始化
        const step = [];

        for (let i = 0; i < rows; i++) {
            step[i] = [];
        }

        // 最上边的行和最左边的列
        for (let i = 0; i < rows; i++) {
            const item = obstacleGrid[i][0];

            if (item === 1) {
                step[i][0] = 0;
            } else {
                if (i < 1) {
                    step[i][0] = 1;
                } else {
                    step[i][0] = step[i - 1][0];
                }
            }
        }

        for (let i = 0; i < cols; i++) {
            const item = obstacleGrid[0][i];

            if (item === 1) {
                step[0][i] = 0;
            } else {
                if (i < 1) {
                    step[0][i] = 1;
                } else {
                    step[0][i] = step[0][i - 1];
                }
            }
        }

        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                const item = obstacleGrid[i][j];

                if (item === 1) {
                    step[i][j] = 0;
                } else {
                    step[i][j] = step[i - 1][j] + step[i][j - 1];
                }
            }
        }

        return step[rows - 1][cols - 1];
    }

    exports.uniquePathsWithObstacles = uniquePathsWithObstacles;

    /**
     * @param {number[][]} obstacleGrid
     * @return {number}
     */
    function uniquePathsWithObstacles2(obstacleGrid) {
        if (!obstacleGrid || !obstacleGrid[0]) {
            return 0;
        }
        // 特殊示例
        const rows = obstacleGrid.length;
        const cols = obstacleGrid[0].length;

        if (obstacleGrid[0][0] === 1 ||
            obstacleGrid[rows - 1][cols - 1] === 1) {
            return 0;
        }

        // 初始化
        const step = [1];

        for (let i = 1; i < cols; i++) {
            if (obstacleGrid[0][i] == 1) {
                step[i] = 0;
            } else {
                step[i] = step[i - 1];
            }
        }

        for (let i = 1; i < rows; i++) {
            if (obstacleGrid[i][0] == 1) {
                // 障碍物
                step[0] = 0;
            }
            for (let j = 1; j < cols; j++) {
                if (obstacleGrid[i][j] === 1) {
                    // 障碍物
                    step[j] = 0;
                } else {
                    step[j] += step[j - 1];
                }
            }
        }

        return step[cols - 1];
    }

    exports.uniquePathsWithObstacles2 = uniquePathsWithObstacles2;

})(window.LeetCode = window.LeetCode || {});