/**
 * 一刷时间: 2017-04-10
 * 二刷时间：2017-12-12
 * 来自: https://leetcode.com/problems/jump-game/
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    function canJump(nums) {
        if (!nums || nums.length === 0) {
            return true;
        }
        const len = nums.length;
        let reach = 0;

        for (let i = 0; i <= reach && i < len; i++) {
            reach = Math.max(reach, nums[i] + i);
        }

        return reach >= len - 1;
    }
    
    exports.canJump = canJump;

})(window.LeetCode = window.LeetCode || {});