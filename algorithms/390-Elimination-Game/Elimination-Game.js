/* 作者: dailc
 * 时间: 2017-09-26
 * 描述: Elimination-Game
 * 
 * 来自: https://leetcode.com/problems/elimination-game
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {number}
     */
    var lastRemaining = function(n) {
        var base = 1;
        var res = 1;
        
        while (base * 2 <= n) {
            res += base;
            base *= 2;
            
            if (base * 2 > n) {
                break;
            }
            
            if (~~(n / base) % 2 === 1) {
                res += base;
            }
            
            base *= 2;
        }
        
        return res;
    };

    exports.lastRemaining = lastRemaining;

})(window.LeetCode = window.LeetCode || {});