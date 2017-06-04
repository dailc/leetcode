/* 作者: dailc
 * 时间: 2017-06-04
 * 描述: Majority-Element
 * 
 * 来自: https://leetcode.com/problems/majority-element
 */
(function(exports) {

	/**
	 * @description majorityElement
	 * @param {number[]} nums
 	 * @return {number}
	 */
	LeetCode.majorityElement = function(nums) {
		var len = nums.length;
		var major = nums[0],
			count = 1;
		for( var i= 1; i < len; i ++ ) {
			if(count <= 0) {
				count ++;
				major = nums[i];
			} else {
				count += (nums[i] == major) ? 1 : -1;
			}
		}
		
		return major;
	};
	
	LeetCode.majorityElement2 = function(nums) {
		var major = 0,
			len = nums.length;
		for( var i = 0, mask = 1; i < 32; i ++, mask <<= 1 ) {
			var bitCounts = 0;
			for( var j = 0; j < len; j ++ ) {
				if(nums[j] & mask) {
					bitCounts ++;
				}
				if(bitCounts > len / 2) {
					major |= mask;
					break;
				}
			}
		}
		
		return major;
	};
	
	
	
	
})(window.LeetCode = window.LeetCode || {});