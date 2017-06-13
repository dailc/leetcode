/* 作者: dailc
 * 时间: 2017-06-13
 * 描述: Count-Primes
 * 
 * 来自: https://leetcode.com/problems/remove-linked-list-elements
 */
(function(exports) {
    /**
     * @description countPrimes
     * @param {number} n
     * @return {number}
     */
    LeetCode.countPrimes = function(n) {
        // 素数的倍数都不是素数，从2开始算起，这里存的是非素数的
        var nums = [];
        var count = 0,
            limit = Math.sqrt(n);
        
        for(var i = 2; i <= limit; i ++) {
            // 没有记录代表是素数
            if(!nums[i]) {
                for(var j = i * i; j < n; j += i) {
                    nums[j] = true;
                }
            }
        }
        
        for(var i = 2; i < n; i ++) {
            if(!nums[i]) {
                count ++;
            }
        }
        
        
        return count;
    };
    
    
   
    

})(window.LeetCode = window.LeetCode || {});