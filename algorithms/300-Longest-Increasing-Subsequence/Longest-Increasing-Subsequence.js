/* 作者: dailc
 * 时间: 2017-07-30
 * 描述: Longest-Increasing-Subsequence
 * 
 * 来自: https://leetcode.com/problems/longest-increasing-subsequence
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var lengthOfLIS = function(nums) {
        if (!nums || nums.length == 0) {
            return 0;
        }
        
        var list = [],
            max = 0,
            len = nums.length;
            
        for (var i = 0; i < len; i++) {
            var localMax = 0;
            // 找出当前点之前的最大上升序列长度
            for (var j = 0; j < i; j++) {
                if (list[j] > localMax && nums[j] < nums[i]) {
                    localMax = list[j];
                }
            }
            // 当前点则是该局部最大上升长度加1
            list[i] = localMax + 1;
            // 用当前点的长度更新全局最大长度
            max = Math.max(max, list[i]);
        }
        
        return max;
    };

    exports.lengthOfLIS = lengthOfLIS;

})(window.LeetCode = window.LeetCode || {});