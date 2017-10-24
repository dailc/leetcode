/* 
 * 一刷时间: 2017-01-23
 * 二刷时间：2017-10-24
 * 来自: https://leetcode.com/problems/reverse-integer/
 */
(function(exports) {
    /**
     * @param {number} x
     * @return {number}
     */
    function reverse(x) {
        const MAX_NUM = Math.pow(2, 31) - 1;
        const MIN_NUM = -Math.pow(2, 31);
        
        let result = 0;
        
        while (x !== 0) {
            const tail = x % 10;
            const newResult = result * 10 + tail;
            
            // 判断是否溢出-一般一些最多只有32位的程序中可行，JS中可能无法走到这里
            // 所以js中暂时注释
//          if((newResult - tail) / 10 !== result) {
//              return 0;
//          }

            result = newResult;
            x = parseInt(x / 10);
        }
        
        return (result > MAX_NUM || result < MIN_NUM) ? 0 : result;
    }

    exports.reverse = reverse;
    
    // 目前来说，es5浏览器性能要高于es6
    function reverse2(x) {
        var MAX_NUM = Math.pow(2, 31) - 1;
        var MIN_NUM = -Math.pow(2, 31);
        
        var result = 0;
        
        while (x !== 0) {
            var tail = x % 10;
            var newResult = result * 10 + tail;
            
            // 判断是否溢出-一般一些最多只有32位的程序中可行，JS中可能无法走到这里
            // 所以js中暂时注释
//          if((newResult - tail) / 10 !== result) {
//              return 0;
//          }

            result = newResult;
            x = parseInt(x / 10);
        }
        
        return (result > MAX_NUM || result < MIN_NUM) ? 0 : result;
    }

})(window.LeetCode = window.LeetCode || {});