/*
 * 一刷时间: 2017-04-06
 * 二刷时间：2017-12-01
 * 来自: https://leetcode.com/problems/jump-game-ii
 */
(function(exports) {

    /**
     * 贪心算法
     * @param {number[]} nums
     * @return {number}
     */
    function jump(nums) {
        if (!nums) {
            return 0;
        }

        const len = nums.length;
        let step = 0;
        let lastReach = 0;
        let reach = 0;

        for (let i = 0; i <= reach && i < len; i++) {
            if (i > lastReach) {
                // 超出了步数，需更新
                step++;
                lastReach = reach;
            }

            reach = Math.max(reach, nums[i] + i);
        }

        if (reach < len - 1) {
            // 无法到达，错误异常
            return 0;
        }

        return step;
    }
    
    exports.jump = jump;

})(window.LeetCode = window.LeetCode || {});