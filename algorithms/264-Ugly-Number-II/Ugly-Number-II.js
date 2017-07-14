/* 作者: dailc
 * 时间: 2017-07-14
 * 描述: Ugly-Number-II
 * 
 * 来自: https://leetcode.com/problems/Ugly-Number-II
 */
(function(exports) {

    /**
     * @param {number} n
     * @return {number}
     */
    var nthUglyNumber = function(n) {
        if (n <= 0) {
            return 0;
        }

        var uglyNumbers = [1],
            nextGulyNum = 1,
            multiply2 = 0,
            multiply3 = 0,
            multiply5 = 0;
            
        while (nextGulyNum < n) {
            var min = Math.min.call(null, uglyNumbers[multiply2]*2, uglyNumbers[multiply3]*3, uglyNumbers[multiply5]*5);
            
            uglyNumbers[nextGulyNum] = min;
            
            // 更新2,3,5 因子往后更， <= 下一次要确保比这次的值大
            while (uglyNumbers[multiply2]*2 <= min ) {
                multiply2 ++;
            }
            while (uglyNumbers[multiply3]*3 <= min ) {
                multiply3 ++;
            }
            while (uglyNumbers[multiply5]*5 <= min ) {
                multiply5 ++;
            }
            
            nextGulyNum ++;
        }
        
        return uglyNumbers[nextGulyNum - 1];
    };

    exports.nthUglyNumber = nthUglyNumber;

})(window.LeetCode = window.LeetCode || {});