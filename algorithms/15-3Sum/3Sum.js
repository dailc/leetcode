/* 
 * 一刷时间: 2017-03-23
 * 二刷时间：2017-10-31
 * 来自: https://leetcode.com/problems/3sum
 */
(function(exports) {

	
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	function threeSum(nums) {
		if (!nums || nums.length < 3) {
			return [];
		}
		
		// 先排序
		nums.sort(function(a, b) {
			return a - b;
		});
		
		let res = [];
		const len = nums.length;
		
		for (let i = 0; i < len - 2; i += 1) {
			if (i > 0 && nums[i] === nums[i - 1]) {
				// 防止重复数
				continue;
			}
			
			const twoSums = twoSum(nums, i + 1, len - 1, nums[i]);
			
			if (twoSums) {
				res = res.concat(twoSums);
			}
		}
		
		return res;
	}
	
	exports.threeSum = threeSum;


	function twoSum(nums, begin, end, target) {
		if(!nums) {
			return [];
		}

		const res = [];
		let left = begin;
		let right = end;

		while (left < right) {
			const sum = nums[left] + nums[right] + target;
			
			if (sum === 0) {
				// 可能会有多个满足条件的值
				res.push([nums[left], nums[right], target]);
				
				// 去除可能的重复数
				while (left < right && nums[left] === nums[left + 1]) {
					left++;
				}
				while (left < right && nums[right] === nums[right - 1]) {
					right--;
				}
				left++;
				right--;
			} else if (sum > 0) {
				right--;
			} else {
				left++;
			}
		}

		return res;
	}


})(window.LeetCode = window.LeetCode || {});