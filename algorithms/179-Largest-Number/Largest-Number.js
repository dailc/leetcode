/* 作者: dailc
 * 时间: 2017-06-07
 * 描述: Largest-Number
 * 
 * 来自: https://leetcode.com/problems/largest-number/
 */
(function(exports) {
	

	/**
	 * @description largestNumber
	 * @param {number[]} nums
 	 * @return {String}
	 */
	LeetCode.largestNumber = function(nums) {
		if(!nums) {
			return '';
		}
		nums.sort(function(a, b) {
			// ab < ba  则a小于b，而增序排列里面需要返回大于0的数
			return (b + '' + a) - (a + '' + b);
		});
		
		var res = nums.join('');
		// 除去多余的0
		while(res.length > 1) {
			if(res.charAt(0) == '0') {
				res = res.substr(1);
			} else {
				break;
			}
		}
		
		return res;
	};
	
	
	
})(window.LeetCode = window.LeetCode || {});