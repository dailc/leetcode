/* 作者: dailc
 * 时间: 2017-08-29
 * 描述: Power-of-Four
 * 
 * 来自: https://leetcode.com/problems/power-of-four
 */
(function(exports) {


    var isPowerOfFour = function(num) {
        // 因为有精度问题，所以不要用以指数2.718为低的log函数  
        var res = Math.log10(num) / Math.log10(4);
        
        return res - ~~res === 0;
    };
    
    var isPowerOfFour2 = function(num) {
        return num > 0 && !(num & (num - 1)) && (num - 1) % 3 === 0;
    };

    exports.isPowerOfFour = isPowerOfFour;
    exports.isPowerOfFour2 = isPowerOfFour2;

})(window.LeetCode = window.LeetCode || {});