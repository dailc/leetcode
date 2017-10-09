/* 作者: dailc
 * 时间: 2017-10-09
 * 描述: Rotate-Function
 * 
 * 来自: https://leetcode.com/problems/rotate-function/description/
 */
(function(exports) {

    /**
     * @param {number[]} A
     * @return {number}
     */
    var maxRotateFunction = function(A) {
        var res = 0;
        var currF = 0;
        var sum = 0;
        var n = A.length;
        
        for (var i = 0; i < n; i++) {
            sum += A[i];
            currF += i * A[i];
        }
        
        res = currF;
        
        for (var i = 1; i < n; i++) {
            currF = currF + sum - n * A[n - i];
            res = Math.max(res, currF);
        }
        
        return res;
    };

    exports.maxRotateFunction = maxRotateFunction;

})(window.LeetCode = window.LeetCode || {});