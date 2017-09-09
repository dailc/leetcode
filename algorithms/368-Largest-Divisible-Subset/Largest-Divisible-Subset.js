/* 作者: dailc
 * 时间: 2017-09-08
 * 描述: Largest-Divisible-Subset
 * 
 * 来自: https://leetcode.com/problems/largest-divisible-subset
 */
(function(exports) {
    var largestDivisibleSubset = function(nums) {
        if (!nums || nums.length === 0) {
            return [];
        }
        
        var res = [];
        
        nums.sort(function(a, b) {
            return a - b;
        });
        // 记录从0-i包括nums[i]的最大subset的size
        var dp = [],
            // 记录当前元素最大size的前一位数的下标
            pre = [],
            maxIdx = -1,
            max = -1,
            len = nums.length;
            
        for (var i = 0; i < len; i++) {
            dp[i] = 1;
            pre[i] = -1;
        }
        
        for (var i = 1; i < len; i++) {
            for (var j = 0; j < i; j++) {
                if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                    pre[i] = j;
                }
            }
        }
        
        // 找到最大的子集size 和它最后元素的下标
        for (var i = 0; i < len; i++) {
            if (dp[i] > max) {
                max = dp[i];
                maxIdx = i;
            }
        }
        
        // 回溯解集
        for (var i = maxIdx; i >= 0;) {
           res.unshift(nums[i]);
           i = pre[i];
        }
        
        return res;
    };
    
    

    exports.largestDivisibleSubset = largestDivisibleSubset;

})(window.LeetCode = window.LeetCode || {});