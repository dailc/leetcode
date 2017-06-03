/* 作者: dailc
 * 时间: 2017-06-03
 * 描述: Maximum-Gap
 * 
 * 来自: https://leetcode.com/problems/maximum-gap
 */
(function(exports) {

	/**
	 * @description findPeakElement
	 * @param {number[]} nums
	 * @return {number}
	 */
	LeetCode.maximumGap = function(nums) {
		if(!nums || nums.length < 2) {
			return 0;
		}
		var len = nums.length;
		// 找最大值和最小值
		var max = nums[0],
			min = nums[0];
		for(var i = 1; i < len; i++) {
			min = Math.min(min, nums[i]);
			max = Math.max(max, nums[i]);
		}
		// 求出每一个桶的数值范围
		var space = (max - min + 1) / len;
		// 生成len个桶
		var buckets = [];
		
		for( var i = 0; i < len; i ++ ) {
			// 找到相应的桶序列
			var index = Math.floor((nums[i] - min) / space);
			var x = nums[i];
			if(!buckets[index]) {
				buckets[index] = [];
				// 如果桶是空的，这之后最大值和最小值统一为一个数
				buckets[index].push(x);
				buckets[index].push(x);
			} else {
				// 替换最大值和最小值
				if( x < buckets[index][0]) {
					buckets[index][0] = x;
				}
				if( x > buckets[index][0]) {
					buckets[index][1] = x;
				}
			}
		}
		
		// 计算gap
		var gap = 0,
			prev = 0;
		for( var i = 1; i < len; i ++ ) {
			if(!buckets[i]) {
				continue;
			}
			gap = Math.max(gap, buckets[i][0] - buckets[prev][1]);
			prev = i;
		}
		
		return gap;
	};

	
})(window.LeetCode = window.LeetCode || {});