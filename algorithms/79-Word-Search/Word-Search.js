/**
 * 一刷时间: 2017-04-20
 * 二刷时间：2018-01-05
 * 来自: https://leetcode.com/problems/subsets
 */
(function(exports) {

    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    function exist(board, word) {
        if (!board || !board[0]) {
            return false;
        }

        const rows = board.length;
        const cols = board[0].length;
        // 访问标志，防止重复访问
        const exists = [];

        for (let i = 0; i < rows; i++) {
            exists[i] = new Array(cols);

            exists[i].fill(false);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (dfs(exists, board, word, rows, cols, 0, i, j)) {
                    return true;
                }
            }
        }

        return false;
    }

    function dfs(exists, board, word, rows, cols, index, i, j) {
        if (index === word.length) {
            return true;
        }
        if (i >= rows || i < 0 || j >= cols || j < 0 || exists[i][j] || board[i][j] !== word.charAt(index)) {
            return false;
        }

        exists[i][j] = true;

        var res = dfs(exists, board, word, rows, cols, index + 1, i + 1, j) ||
            dfs(exists, board, word, rows, cols, index + 1, i - 1, j) ||
            dfs(exists, board, word, rows, cols, index + 1, i, j + 1) ||
            dfs(exists, board, word, rows, cols, index + 1, i, j - 1);

        exists[i][j] = false;

        return res;
    }

    exports.exist = exist;

})(window.LeetCode = window.LeetCode || {});