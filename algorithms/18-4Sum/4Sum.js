/* 
 * 一刷时间: 2017-03-24
 * 二刷时间：2017-11-03
 * 来自: https://leetcode.com/problems/4sum
 */
(function(exports) {

    /**
     * @description fourSum
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    function fourSum(nums, target) {
        const len = nums.length;

        nums.sort(function(a, b) {
            return a - b;
        });

        const res = [];
        const duplicates = [];

        for (let i = 0; i < len - 3; i += 1) {
            for (let j = i + 1; j < len - 2; j += 1) {
                let left = j + 1;
                let right = len - 1;

                while (left < right) {
                    const sum = nums[i] + nums[j] + nums[left] + nums[right] - target;

                    if (sum === 0) {
                        const combs = [nums[i], nums[j], nums[left], nums[right]];
                        const combsStr = combs.join('');

                        if (duplicates.indexOf(combsStr) === -1) {
                            res.push(combs);
                            duplicates.push(combsStr);
                        }

                        left++;
                        right--;
                    } else if (sum > 0) {
                        right--;
                    } else if (sum < 0) {
                        left++;
                    }
                }
            }
        }

        return res;
    };
    
    LeetCode.fourSum = fourSum;
})(window.LeetCode = window.LeetCode || {});