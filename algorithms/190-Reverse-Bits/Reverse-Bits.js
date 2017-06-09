/* 作者: dailc
 * 时间: 2017-06-09
 * 描述: Reverse-Bits
 * 
 * 来自: https://leetcode.com/problems/reverse-bits
 */
(function(exports) {

	/**
	 * @description reverseBits
	 * @param {number} n - a positive integer
     * @return {number} - a positive integer
	 */
	LeetCode.reverseBits = function(n) {
	   
        var res = 0;
        for( var i = 0; i < 32; i ++ ) {
            // 取出输入的最后一位加入 result，其他位依次左移
            res = (res << 1) | (n & 1);
            n = n >> 1;
        } 
        return res >>> 0;
	   
	};
	
	// 暂时还有问题
	LeetCode.reverseBits2 = function(n) {
	    // 约束为32为数
        n = (n >> 16) | (n << 16);
        n = ((n & 0xff00ff00) >> 8) | ((n & 0x00ff00ff) << 8);
        n = ((n & 0xf0f0f0f0) >> 4) | ((n & 0x0f0f0f0f) << 4);
        n = ((n & 0xcccccccc) >> 2) | ((n & 0x33333333) << 2);
        n = ((n & 0xaaaaaaaa) >> 1) | ((n & 0x55555555) << 1);
        return n >>> 0;
	};
	

})(window.LeetCode = window.LeetCode || {});