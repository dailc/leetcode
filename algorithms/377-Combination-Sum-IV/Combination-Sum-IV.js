/* 作者: dailc
 * 时间: 2017-09-14
 * 描述: Combination-Sum-IV
 * 
 * 来自: https://leetcode.com/problems/combination-sum-iv
 */
(function(exports) {
    
    let combinationSum4 = function combinationSum4(nums, target) {
        let dp = new Array(target + 1).fill(0);
        
        dp[0] = 1;
        
        for (let i = 1; i <= target; i += 1) {
            nums.map(function(x) {
                if (i >= x) {
                    dp[i] += dp[i - x];
                }
            });
        }
        
        
        return dp.pop();
    };

    

    exports.combinationSum4 = combinationSum4;

})(window.LeetCode = window.LeetCode || {});