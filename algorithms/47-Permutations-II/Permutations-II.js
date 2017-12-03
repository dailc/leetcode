/*
 * 一刷时间: 2017-04-07
 * 二刷时间：2017-12-03
 * 来自: https://leetcode.com/problems/permutations-ii
 */
(function(exports) {

	/**
	 * @description jump
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	exports.permuteUnique = function(nums) {
		if (!nums || nums.length === 0) {
            return 0;
        }

        const result = [];

        const len = nums.length;
        let i;
        let j;

        nums.sort(function(a, b) {
            return a - b;
        });

        result.push(nums.slice(0));

        while (true) {
            for (i = len - 2; i >= 0; i--) {
                if (nums[i] < nums[i + 1]) {
                    break;
                }
            }

            if (i <= -1) {
                return result;
            }

            for (j = len - 1; j > i; j--) {
                if (nums[j] > nums[i]) {
                    break;
                }
            }

            swap(nums, i, j);

            const mid = Math.floor((i + 1 + len) / 2);

            for (let k = i + 1; k < mid; k++) {
                swap(nums, k, len - (k - i));
            }

            result.push(nums.slice(0));
        }

        return result;
	};

	function swap(nums, i, j) {
		const tmp = nums[i];

        nums[i] = nums[j];
        nums[j] = tmp;
	}

})(window.LeetCode = window.LeetCode || {});