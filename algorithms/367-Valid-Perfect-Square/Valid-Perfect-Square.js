/* 作者: dailc
 * 时间: 2017-09-07
 * 描述: Valid-Perfect-Square
 * 
 * 来自: https://leetcode.com/problems/valid-perfect-square
 */
(function(exports) {
    var isPerfectSquare = function(num) {
        if (num === 1 || num === 0) {
            return true;
        }
        
        var low = 0,
            high = num / 2;
            
        while (low < high) {
            var mid = (low + high) >> 1,
                power = mid * mid;
            
            if (power === num) {
                return true;
            } else if (power < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return low * low === num;
    };
    
    

    exports.isPerfectSquare = isPerfectSquare;

})(window.LeetCode = window.LeetCode || {});