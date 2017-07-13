/* 作者: dailc
 * 时间: 2017-07-13
 * 描述: Single-Number-III
 * 
 * 来自: https://leetcode.com/problems/single-number-iii
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    var singleNumber = function(nums) {
        if (!nums) {
            return [];
        }
        
        var ans = [0, 0],
            diff = 0,
            len = nums.length;
        
        for (var i = 0; i < len; i ++) {
            diff ^= nums[i];
        }
        
        // 取得一个1位
        diff &= -diff;
        
        for (var i = 0; i < len; i ++) {
            var num = nums[i];
            
            if (num & diff) {
                ans[0] ^= num;
            } else {
                ans[1] ^= num;
            }
        }
        
        return ans;
    };
    


    exports.singleNumber = singleNumber;

})(window.LeetCode = window.LeetCode || {});