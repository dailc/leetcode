/* 作者: dailc
 * 时间: 2017-07-17
 * 描述: H-Index
 * 
 * 来自: https://leetcode.com/problems/h-index
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
        
        var stats = [],
            len = citations.length;
        
        for (var i = 0; i < len; i ++) {
            var index = citations[i] <= len ? citations[i] : len;
            stats[index] = (stats[index] || 0) + 1;
        }
        
        var sum = 0;
        
        for (var i = len; i >= 0; i --) {
            // 引用大于等于i次的文章数量，等于引用大于等于i+1次的文章数量，加上引用等于i次的文章数量 
            sum += stats[i] || 0;
            
            // 如果引用大于等于i次的文章数量，大于引用次数i，说明是H指数
            if (sum >= i) {
                return i;
            }
        }
        
        return 0;
    };
    

    exports.hIndex = hIndex;

})(window.LeetCode = window.LeetCode || {});