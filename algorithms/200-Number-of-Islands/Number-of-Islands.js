/* 作者: dailc
 * 时间: 2017-06-11
 * 描述: Number-of-Islands
 * 
 * 来自: https://leetcode.com/problems/number-of-islands/
 */
(function(exports) {

    /**
     * @description numIslands
     * @param {character[][]} grid
     * @return {number}
     */
    LeetCode.numIslands = function(grid) {
        if(!grid || !grid[0]) {
            return 0;
        }
        var len = grid.length,
            len2 = grid[0].length,
            existed = [],
            res = [0];

        for(var i = 0; i < len; i++) {
            existed[i] = [];
        }
        // 确保所有的都可以遍历到，特别是一些孤岛
        for( var i = 0; i < len; i ++ ) {
            for( var j = 0; j < len2; j ++ ) {
                dfs(res, existed, grid, i, j, false);
            }
        }

        return res[0];
    };

    function dfs(res, existed, grid, i, j, isConnect) {
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
            return;
        }
        if(existed[i][j]) {
            return;
        } else if(grid[i][j] == '0') {
            // 排除海洋
            existed[i][j] = true;
            return ;
        } else {
            // 陆地上的dfs
            existed[i][j] = true;
            if(!isConnect) {
                // 没有连接才+1
                res[0] ++;
                isConnect = true;
            }      
            // 四个方位的深搜
            dfs(res, existed, grid, i - 1, j, isConnect);
            dfs(res, existed, grid, i + 1, j, isConnect);
            dfs(res, existed, grid, i, j - 1, isConnect);
            dfs(res, existed, grid, i, j + 1, isConnect);
        }  
    }

})(window.LeetCode = window.LeetCode || {});