/* 作者: dailc
 * 时间: 2017-05-15
 * 描述: Longest-Consecutive-Sequence
 * 
 * 来自: https://leetcode.com/problems/longest-consecutive-sequence
 */
(function(exports) {

	/**
	 * @description longestConsecutive
	 * @param {number[]} nums
	 * @return {number}
	 */
	exports.longestConsecutive = function(nums) {
		if(!nums) {
			return 0;
		}
		var max = 0;
		var hash = {};
		var len = nums.length;
		
		for( var i = 0; i < len; i ++ ) {
			var tmp = nums[i];
			if(!hash[tmp]) {
				// 链接左右
				var left = hash[tmp - 1]?hash[tmp - 1]:0;
				var right = hash[tmp + 1]?hash[tmp + 1]:0;
				// 计算总长度
				var sum = left + right + 1;
				hash[tmp] = sum;
				
				// 记录最大值
				max = Math.max(max,sum);
				
				// 更新左右的边界(这样分别从边界处连接仍可得到最大值)
				// 譬如4,1,3,2 最后一个更新的2长度是4，这时候需要更新边界4和1也为4，否则下一个5时就会计算失误
				hash[tmp - left] = sum;
				hash[tmp + right] = sum;
			} else {
				continue;
			}
		}
		
		return max;
	};


})(window.LeetCode = window.LeetCode || {});