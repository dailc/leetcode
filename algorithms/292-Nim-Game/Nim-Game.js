/* 作者: dailc
 * 时间: 2017-07-26
 * 描述: Nim-Game
 * 
 * 来自: https://leetcode.com/problems/nim-game
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {boolean}
     */
    var canWinNim = function(n) {
        return n % 4 != 0;
    };
    
    // 最开始的错误想法  return dfs(n, 0, 0);
    function dfs(n, count, sum) {
        if (sum + 3 >= n) {
            if (!(count & 1)) {
                return true;
            } else {
                return false;
            }
        } else {
            count ++;
            return dfs(n, count, sum + 1)
                || dfs(n, count, sum + 2)
                || dfs(n, count, sum + 3);
        }
    }

    exports.canWinNim = canWinNim;

})(window.LeetCode = window.LeetCode || {});