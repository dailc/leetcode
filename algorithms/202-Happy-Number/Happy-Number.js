/* 作者: dailc
 * 时间: 2017-06-12
 * 描述: Happy-Number
 * 
 * 来自: https://leetcode.com/problems/happy-number
 */
(function(exports) {

    /**
     * @description isHappy
     * @param {number} n
     * @return {boolean}
     */
    LeetCode.isHappy = function(n) {
        if(n <= 0) {
            return false;
        }
        
        var hash = {};
        
        while(n) {
            if(hash[n]) {
                return false;
            } else if(n == 1) {
                return true;
            } else {
                hash[n] = true;
                n = getSquareSum(n);
            }
        }

    };
    
    function getSquareSum(n) {
        var sum = 0;
       
        while(n) {
           var tmp = n % 10;
           
           n = ~~(n / 10);
           sum += tmp * tmp;
        }
        
        return sum;
    }

    

})(window.LeetCode = window.LeetCode || {});