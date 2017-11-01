/* 
 * 一刷时间: 2017-03-23
 * 二刷时间：2017-11-01
 * 来自: https://leetcode.com/problems/3sum-closest
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    function threeSumClosest(nums, target) {
        if (!nums || nums.length < 3) {
            return null;
        }
        nums.sort(function(a, b) {
            return a - b;
        });
        const diff = [];
        const len = nums.length;
        
        for (let i = 0; i < len - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                // 防止重复数
                continue;
            }
            
            const twoSumCloset = twoSum2Closest(nums, i + 1, len - 1, nums[i], target);
            
            diff.push(twoSumCloset);
        }
        
        if (diff.length) {
            let min = 0;
            
            for (let i = 0; i < diff.length; i++) {
                if (Math.abs(diff[i]) < Math.abs(diff[min])) {
                    min = i;
                }
            }
            
            return diff[min] + target;
        }
        
        return null;
    }

    exports.threeSumClosest = threeSumClosest;
    
    function twoSum2Closest(nums, begin, end, target, closest) {
        const len = nums.length;
        let left = begin;
        let right = end;
        let minSum = Math.pow(2, 32) - 1;

        while (left < right) {
            const sum = nums[left] + nums[right] + target - closest;

            if (Math.abs(sum) <= Math.abs(minSum)) {
                minSum = sum;
            }

            if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }

        return minSum;
    }

})(window.LeetCode = window.LeetCode || {});