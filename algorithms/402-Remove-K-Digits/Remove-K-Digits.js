/* 作者: dailc
 * 时间: 2017-10-13
 * 描述: Remove-K-Digits
 * 
 * 来自: https://leetcode.com/problems/remove-k-digits/description/
 */
(function(exports) {

    /**
     * @param {string} num
     * @param {number} k
     * @return {string}
     */
    var removeKdigits = function(num, k) {
        var len = num.length;
        
        while (len) {
            len = num.length;
            
            if (len <= k) {
                return '0';
            }
            
            if (k-- === 0) {
                return num;
            }
            
            if (num.charAt(1) === '0') {
                var firstNotZeroIndex = 1;
                
                while (firstNotZeroIndex < num.length
                    && num.charAt(firstNotZeroIndex) === '0') {
                        firstNotZeroIndex++;
                }
                    
                num = num.substr(firstNotZeroIndex);
            } else {
                var startIndex = 0;
                
                while (startIndex < num.length - 1
                    && num.charAt(startIndex) <= num.charAt(startIndex + 1)) {
                        startIndex++;
                }
                    
                num = num.substring(0, startIndex) + num.substr(startIndex + 1);
            }
        }
        
        return '0';
    };

    exports.removeKdigits = removeKdigits;

})(window.LeetCode = window.LeetCode || {});