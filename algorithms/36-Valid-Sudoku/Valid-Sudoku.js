/*
 * 一刷时间: 2017-04-02
 * 二刷时间：2017-11-22
 * 来自: https://leetcode.com/problems/valid-sudoku
 */
(function(exports) {

    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    function isValidSudoku(board) {
        if (!board || !board[0]) {
            return false;
        }
        const len = board.length;

        // 判断行与列
        for (let i = 0; i < len; i++) {
            const rows = [];
            const cols = [];

            for (let j = 0; j < len; j++) {
                const row = board[i][j];
                const col = board[j][i];

                rows.push(row);
                cols.push(col);
            }

            if (!helper(rows) || !helper(cols)) {
                return false;
            }
        }

        // 判断子九宫格,可以肯定len是3的倍数
        const subLen = len / 3;

        for (let i = 0; i < subLen; i++) {
            for (let j = 0; j < subLen; j++) {
                // 添加9个数
                // 有一个奇数
                const baseI = i * 3;
                const baseJ = j * 3;
                const sub = [];

                sub.push(board[baseI][baseJ]);
                sub.push(board[baseI][baseJ + 1]);
                sub.push(board[baseI][baseJ + 2]);
                sub.push(board[baseI + 1][baseJ]);
                sub.push(board[baseI + 1][baseJ + 1]);
                sub.push(board[baseI + 1][baseJ + 2]);
                sub.push(board[baseI + 2][baseJ]);
                sub.push(board[baseI + 2][baseJ + 1]);
                sub.push(board[baseI + 2][baseJ + 2]);

                if (!helper(sub)) {
                    return false;
                }
            }
        }

        return true;
    }

    // 判断一个 九个元素的数组是否符合数独规则
    function helper(arr) {
        const len = arr.length;
        let check = '1#2#3#4#5#6#7#8#9#';
        let res = true;

        for (let i = 0; i < len; i++) {
            const ch = arr[i];

            if (ch !== '.' && check.indexOf(ch) === -1) {
                // 不满足
                return false;
            } else if (ch !== '.') {
                // check中移除
                check = check.replace(ch, '');
            }

        }

        return res;
    }

    /**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku3(board) {
    if (!board || !board[0]) {
        return false;
    }
    const rowValid = [];
    const columnValid = [];
    const subBoardValid = [];
    
    for (let i = 0; i < 9; i++) {
        rowValid[i] = [];
        columnValid[i] = [];
        subBoardValid[i] = [];
        
        for (let j = 0; j < 9; j++) {
            rowValid[i][j] = 0;
            columnValid[i][j] = 0;
            subBoardValid[i][j] = 0;
        }
    }
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const ch = board[i][j];
            
            if (ch !== '.') {
                if (!checkValid(rowValid[i], ch - '0')
                    || !checkValid(columnValid[j], ch - '0')
                    || !checkValid(subBoardValid[Math.floor(i / 3) * 3 + Math.floor(j / 3)], ch - '0')) {
                    return false;
                }
            }
        }
    }
    
    
    return true;
}

function checkValid(vec, val) {
    if (vec[val] == 1) {
        return false;
    }
    vec[val] = 1;
    
    return true;
}

exports.isValidSudoku3 = isValidSudoku3;
exports.isValidSudoku = isValidSudoku;


})(window.LeetCode = window.LeetCode || {});