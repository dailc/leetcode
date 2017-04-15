/**
 * 作者: dailc
 * 时间: 2017-04-15
 * 描述: Plus-One
 * 
 * 来自: https://leetcode.com/problems/minimum-path-sum
 */
(function(exports) {

	/**
	 * @description plusOne
	 * @param {number[]} digits
 	 * @return {number[]}
	 */
	exports.plusOne = function(digits) {
		if(!digits) {
			return [];
		}
		var len = digits.length;
		//进位标识
		var carry = 1;
		for( var i = len -1; carry && i >= 0; i -- ) {
			var tmp = digits[i] + carry;
			digits[i] = tmp % 10;
			carry = Math.floor(tmp / 10);
		}
		//如果最后一位还有进位
		if(carry == 1) {
			digits.unshift(1);
		}
		return digits;
	};
	
})(window.LeetCode = window.LeetCode || {});