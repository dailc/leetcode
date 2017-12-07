/**
 * 一刷时间: 2017-04-09
 * 二刷时间：2017-12-07
 * 来自: https://leetcode.com/problems/n-queens
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {string[][]}
     */
    function solveNQueens(n) {
        if (n < 0) {
            return [];
        }
        const res = [];
        // fill出错
        // const positions = new Array(n).fill(new Array(n).fill('.'));

        const positions = [];

        for (let i = 0; i < n; i++) {
            positions[i] = [];
            for (let j = 0; j < n; j++) {
                positions[i].push('.');
            }
        }

        // 回溯法
        dfs(res, positions, n, 0);

        return res;
    }

    function dfs(res, positions, len, row) {
        if (row === len) {
            // 回溯完毕，添加解
            const tmp = [];

            for (let i = 0; i < len; i++) {
                tmp.push(positions[i].join(''));
            }

            res.push(tmp);
            return;
        }

        for (let col = 0; col < len; col++) {
            if (isValid(positions, row, col)) {
                positions[row][col] = 'Q';
                dfs(res, positions, len, row + 1);
                positions[row][col] = '.';
            }
        }
    }

    function isValid(positions, row, col) {
        const len = positions.length;

        for (let i = 0; i < row; i++) {
            if (positions[i][col] === 'Q') {
                return false;
            }
        }
        // 右对角线(只需要判断对角线上半部分，因为后面的行还没有开始放置)
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (positions[i][j] === 'Q') {
                return false;
            }
        }

        // 左对角线(只需要判断对角线上半部分，因为后面的行还没有开始放置)
        for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
            if (positions[i][j] === 'Q') {
                return false;
            }
        }

        return true;
    }
    exports.solveNQueens = solveNQueens;

    function solveNQueens2(n) {

    }

    /**
     * @param {number} n
     * @return {string[][]}
     */
    function solveNQueens2(n) {
        if (n < 0) {
            return [];
        }
        const res = [];
        // fill出错
        // const positions = new Array(n).fill(-1);

        const positions = [];

        for (let i = 0; i < n; i++) {
            positions[i] = [-1];
        }

        // 回溯法
        dfs2(res, positions, n, 0);

        return res;
    }

    function dfs2(res, positions, len, row) {
        if (row === len) {
            // 回溯完毕，添加解
            const tmp = [];

            for (let i = 0; i < len; i++) {
                tmp[i] = [];

                for (let j = 0; j < len; j++) {
                    tmp[i].push('.');
                }
            }

            for (let i = 0; i < len; i++) {
                tmp[i][positions[i]] = 'Q';
            }

            for (let i = 0; i < len; i++) {
                tmp[i] = tmp[i].join('');
            }

            res.push(tmp);

            return;
        }

        for (let col = 0; col < len; col++) {
            if (isValid2(positions, row, col)) {
                positions[row] = col;
                dfs2(res, positions, len, row + 1);
                positions[row] = -1;
            }
        }
    }

    // 判断在row行col列位置放一个皇后，是否是合法的状态
    // 已经保证了每行一个皇后，只需要判断列是否合法以及对角线是否合法。
    function isValid2(positions, row, col) {
        // 只需要判断row前面的行，因为后面的行还没有放置
        for (var i = 0; i < row; i++) {
            if (positions[i] == col || Math.abs(row - i) == Math.abs(col - positions[i])) {
                return false;
            }
        }
        return true;
    }

    exports.solveNQueens2 = solveNQueens2;

    /**
     * @param {number} n
     * @return {string[][]}
     */
    function solveNQueens3(n) {
        if (n < 0) {
            return [];
        }
        const res = [];
        // fill出错
        // const positions = new Array(n).fill(-1);

        const positions = [];

        for (let i = 0; i < n; i++) {
            positions[i] = [];
            for (let j = 0; j < n; j++) {
                positions[i].push('.');
            }
        }

        //低n位全部置1
        var upperlim = (1 << n) - 1;
        // 回溯法
        dfs3(res, positions, upperlim, 0, 0, 0, 0);

        return res;
    }

    function dfs3(res, positions, upperlim, index, row, ld, rd) {
        let pos, p;

        if (row !== upperlim) {
            // pos中二进制为1的位，表示可以在当前行的对应列放皇后
            pos = upperlim & (~(row | ld | rd));
            // 和upperlim与运算，主要是ld在上一层是通过左移位得到的，它的高位可能有无效的1存在，这样会清除ld高位无效的1
            while (pos) {
                p = pos & (~pos + 1); // 获取pos最右边的1,例如pos = 010110，则p = 000010
                pos = pos - p; // pos最右边的1清0
                // 在当前行，p中1对应的列放置皇后
                setQueen(positions, index, p, 'Q');
                // 设置下一行
                dfs3(res, positions, upperlim, index + 1, row | p, (ld | p) << 1, (rd | p) >> 1);
                setQueen(positions, index, p, '.');
            }
        } else {
            //找到一个解
            //以及回溯完毕  每一次添加一个解
            var tmp = [];
            for (var i = 0; i < positions.length; i++) {
                tmp.push(positions[i].join(''));
            }
            res.push(tmp);
            return;
        }
    }

    function setQueen(positions, row, p, val) {
        let col = 0;

        while (!(p & 1)) {
            p = p >> 1;
            col++;
        }
        positions[row][col] = val;
    }

    exports.solveNQueens3 = solveNQueens3;

})(window.LeetCode = window.LeetCode || {});