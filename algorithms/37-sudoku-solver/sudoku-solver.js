/*
 * 一刷时间: 2017-04-03
 * 二刷时间：2017-11-23
 * 来自: https://leetcode.com/problems/sudoku-solver/
 */
(function(exports) {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    function solveSudoku(board) {
        if (!board || !board[0]) {
            return;
        }
        dfs(board, 0, 0);
    }
    
    

    function dfs(board, i, j) {
        if (j >= 9) {
            // 换行
            return dfs(board, i + 1, 0);
        }

        if (i >= 9) {
            return true;
        }

        if (board[i][j] === '.') {
            // 进入dfs
            for (let k = 1; k <= 9; k++) {
                board[i][j] = k + '';
                if (isValidate(board, i, j)) {
                    if (dfs(board, i, j + 1)) {
                        return true;
                    }
                }
            }
            // 如果搜索不和要求，上面就不会return，这是需要重置状态
            board[i][j] = '.';
        } else {
            return dfs(board, i, j + 1);
        }

        return false;
    }

    // 对应位置是否合法
    function isValidate(board, i, j) {
        const baseRow = Math.floor(i / 3) * 3;
        const baseCol = Math.floor(j / 3) * 3;

        for (let k = 0; k < 9; k++) {
            // 如果一行内不合法
            if (k !== j && board[i][k] === board[i][j]) {
                return false;
            }
            // 如果一列内不合法
            if (k !== i && board[k][j] === board[i][j]) {
                return false;
            }
            
            // 九宫格是固定的，只有9个（这点注意，并不是任意相邻的9个）
            // 如果同一个子九宫格内不合法,这里也合并到同一个循环内部了
            const row = baseRow + Math.floor(k / 3);
            const col = baseCol + k % 3;

            if ((row !== i || col !== j) && board[row][col] == board[i][j]) {
                return false;
            }
        }

        return true;
    }

    exports.solveSudoku = solveSudoku;

})(window.LeetCode = window.LeetCode || {});