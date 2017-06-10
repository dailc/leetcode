/* 作者: dailc
 * 时间: 2017-06-10
 * 描述: Reverse-Bits
 * 
 * 来自: https://leetcode.com/problems/number-of-1-bits
 */
(function(exports) {

	/**
	 * @description hammingWeight
	 * @param {number} n - a positive integer
     * @return {number}
	 */
	LeetCode.hammingWeight = function(n) {
	   if(n <= 0) {
	       return 0;
	   }
	   var res = 0;
	   
	   for( var i = 0; i < 32; i ++ ) {
	       res += n & 0x1;
	       n >>= 1;
	   }
	   return res;
	};
	
	LeetCode.hammingWeight2 = function(n) {
	    var res = 0;
	    while(n) {
	        n = n & (n - 1);
	        res ++;
	    }
	    return res;
	};
	
	

})(window.LeetCode = window.LeetCode || {});