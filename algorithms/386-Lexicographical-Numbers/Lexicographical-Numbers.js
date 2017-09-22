/* 作者: dailc
 * 时间: 2017-09-22
 * 描述: Lexicographical-Numbers
 * 
 * 来自: https://leetcode.com/problems/lexicographical-numbers
 */
(function(exports) {
    
    /**
     * @param {number} n
     * @return {number[]}
     */
    var lexicalOrder = function(n) {
        var res = [];
        var cur = 1;
        
        for (var i = 0; i < n; i++) {
            res[i] = cur;
            
            if (cur * 10 <= n) {
                cur *= 10;
            } else {
                if (cur >= n) {
                    cur = ~~(cur / 10);
                }
                
                cur += 1;
                
                while (cur % 10 ===0) {
                    cur = ~~(cur / 10);
                }
            }
        }
        
        return res;
    };

    exports.lexicalOrder = lexicalOrder;

})(window.LeetCode = window.LeetCode || {});