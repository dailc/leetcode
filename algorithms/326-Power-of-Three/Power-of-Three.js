/* 作者: dailc
 * 时间: 2017-08-16
 * 描述: Power-of-Three
 * 
 * 来自: https://leetcode.com/problems/power-of-three
 */
(function(exports) {
    
    var isPowerOfThree = function(n) {
       return n > 0 ? !(1162261467 % n) : false;
    };
    exports.isPowerOfThree = isPowerOfThree;
    
    var isPowerOfThree2 = function(n) {
       // 因为有精度问题，所以不要用以指数2.718为低的log函数  
       var res = Math.log10(n) / Math.log10(3);
       
       return (res - ~~res === 0);
    };
    exports.isPowerOfThree2 = isPowerOfThree2;

})(window.LeetCode = window.LeetCode || {});