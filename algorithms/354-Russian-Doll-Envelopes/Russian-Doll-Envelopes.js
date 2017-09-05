/* 作者: dailc
 * 时间: 2017-09-04
 * 描述: Russian-Doll-Envelopes
 * 
 * 来自: https://leetcode.com/problems/russian-doll-envelopes
 */
(function(exports) {
    

    var maxEnvelopes = function(envelopes) {
        // 宽度从小到大，高度从大到小
        envelopes.sort(function(en1, en2) {
            if (en1[0] === en2[0]) {
                return en2[1] - en1[1];
            }
            
            return en1[0] - en2[0];
        });
        
        // console.log(envelopes);
        
        var len = envelopes.length,
            dp = [];
            
        for (var i = 0; i < len; i++) {
            var envelope = envelopes[i];
            
            var left = 0,
                right = dp.length;
                
            while (left < right) {
                var mid = ~~((left + right) / 2);
                
                if (dp[mid] < envelope[1]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            
            if (right >= dp.length) {
                dp.push(envelope[1]);
            } else {
                dp[right] = envelope[1];
            }
        }
        
        return dp.length;
    };
    
    exports.maxEnvelopes = maxEnvelopes;

})(window.LeetCode = window.LeetCode || {});