/* 作者: dailc
 * 时间: 2017-06-19
 * 描述: House-Robber-II
 * 
 * 来自: https://leetcode.com/problems/word-search-ii
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {number}
     */
    LeetCode.rob = function(nums) {
        if (!nums) {
            return 0;
        }
        if (nums.length == 1) {
            return nums[0];
        }

        return Math.max(rob_houses(nums.slice(1)), rob_houses(nums.slice(0, nums.length - 1)));
    };

    function rob_houses(nums) {
        if (!nums || !nums.length) {
            return 0;
        }
        // 不用数组，直接用变量
        var moneyUnRober = 0;
        var moneyRober = nums[0];

        for (var i = 1, len = nums.length; i < len; i++) {
            var tmp = moneyUnRober;
            moneyUnRober = Math.max(moneyUnRober, moneyRober);
            moneyRober = tmp + nums[i];
        }
        return Math.max(moneyUnRober, moneyRober);
    }

})(window.LeetCode = window.LeetCode || {});