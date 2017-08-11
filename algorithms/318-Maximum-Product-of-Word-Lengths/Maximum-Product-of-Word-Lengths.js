/* 作者: dailc
 * 时间: 2017-08-11
 * 描述: Maximum-Product-of-Word-Lengths
 * 
 * 来自: https://leetcode.com/problems/maximum-product-of-word-lengths
 */
(function(exports) {
    /**
     * @param {string[]} words
     * @return {number}
     */
    var maxProduct = function(words) {
        var res = 0;
        
        var mask = [],
            len = words.length,
            mp = 'abcdefghijklmnopqrstuvwxyz';
        
        for (var i = 0; i < len; i++) {
            mask[i] = 0;
        }
        
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < words[i].length; j++) {
                var ch = words[i][j];
                
                mask[i] |= 1 << mp.indexOf(ch);
            }
            
            for (var j = 0; j < i; j++) {
                if (!(mask[i] & mask[j])) {
                    res = Math.max(res, words[i].length * words[j].length);
                }
            }
        }
        
        return res;

    };
    exports.maxProduct = maxProduct;

})(window.LeetCode = window.LeetCode || {});