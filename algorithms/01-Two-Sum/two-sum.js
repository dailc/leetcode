/* 
 * 一刷时间: 2016-12-10
 * 二刷时间：2017-10-16
 * 来自: https://leetcode.com/problems/two-sum/description/
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    function twoSum(nums, target) {
        if (!nums) {
            return [];
        }
        
        const mp = {};
        const len = nums.length;
        
        for (let i = 0; i < len; i += 1) {
            const cur = nums[i];
            
            if (mp[target - cur] !== undefined) {
                return [mp[target - cur], i];
            }
            
            mp[cur] = i;
        }
        
        return [];
    }

    exports.twoSum = twoSum;

})(window.LeetCode = window.LeetCode || {});