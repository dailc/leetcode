/* 作者: dailc
 * 时间: 2017-09-09
 * 描述: Sum-of-Two-Integers
 * 
 * 来自: https://leetcode.com/problems/sum-of-two-integers
 */
(function(exports) {
    
    var getSum = function(a, b) {
        var sum = a,
            icarry  = b;
        
        while (icarry) {
            var tmp = sum;
            
            sum = tmp ^ icarry;
            icarry = (tmp & icarry) << 1;
        }
        
        return sum;
    };
    
    

    exports.getSum = getSum;

})(window.LeetCode = window.LeetCode || {});