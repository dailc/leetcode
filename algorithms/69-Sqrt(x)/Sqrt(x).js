/**
 * 作者: dailc
 * 时间: 2017-04-16
 * 描述: Sqrt(x)
 * 
 * 来自: https://leetcode.com/problems/sqrtx
 */
(function(exports) {

	/**
	 * @description mySqrt
	 * @param {number} x
 	 * @return {number}
	 */
	exports.mySqrt = function(x) {
		if(x<0) {
			return -1;
		} else if(x == 0) {
			return 0;
		}
		var left = 1;
		var right = Math.floor(x/2 +1);
		while(left<=right) {
			var mid = Math.floor((left+right)/2);
			if(mid<=Math.floor(x/mid)&&Math.floor(x/(mid+1))<mid+1) {
				return mid;
			}
			if(Math.floor(x/mid)<mid) {
				right = mid -1;
			}else {
				left = mid +1;
			}
		}
		return 0;
		
		
	};
	
	exports.mySqrt2 = function(x) {
		if(x == 0) {
			return 0;
		}
		var lastY = 0;
		var y = 1;
		while(y != lastY) {
			lastY = y;
			y = Math.floor((y + x/y) /2);
		}
		return Math.floor(y);
	};
	
})(window.LeetCode = window.LeetCode || {});