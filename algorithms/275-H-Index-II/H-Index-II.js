/* 作者: dailc
 * 时间: 2017-07-18
 * 描述: H-Index-II
 * 
 * 来自: https://leetcode.com/problems/h-index-ii
 */
(function(exports) {

    /**
     * @param {number[]} citations
     * @return {number}
     */
    var hIndex = function(citations) {
        if (!citations) {
            return 0;
        }
        
        var len = citations.length,
            h = 0;
        
        for (var i = 0; i < len; i ++) {
            // 得到当前的H指数
            var currH = Math.min(citations[i], len - i);
            
            if (currH > h) {
                h = currH;
            }
        }
        
        return h;
    };
    

    exports.hIndex = hIndex;

})(window.LeetCode = window.LeetCode || {});