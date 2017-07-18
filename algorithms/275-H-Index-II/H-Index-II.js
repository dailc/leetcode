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
    
    var hIndex2 = function(citations) {
        if (!citations || !citations.length) {
            return 0;
        }
        
        var len = citations.length,
            h = 0;
            
        var min = 0,
            max = len - 1;
        
        while (min <= max) {
            var mid = ~~((min + max) / 2);
            
            // 如果该点是有效的H指数，则最大H指数一定在右边
            if (citations[mid] < len - mid) {
                min = mid + 1;
            } else {
                // 否则最大H指数在左边
                max = mid - 1;
            }
        }
        
        // n - min是min点的H指数
        return len - min;
    };
    

    exports.hIndex = hIndex;
    exports.hIndex2 = hIndex2;

})(window.LeetCode = window.LeetCode || {});