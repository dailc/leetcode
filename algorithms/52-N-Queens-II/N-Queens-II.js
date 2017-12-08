/**
 * 一刷时间: 2017-04-09
 * 二刷时间：2017-12-08
 * 来自: https://leetcode.com/problems/n-queens-ii
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {string[][]}
     */
    function totalNQueens(n) {
        if (n < 0) {
            return [];
        }
        const res = [0];
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

        return res[0];
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
            res[0]++;

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

    exports.totalNQueens = totalNQueens;

})(window.LeetCode = window.LeetCode || {});