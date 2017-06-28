/* 作者: dailc
 * 时间: 2017-06-28
 * 描述: Summary-Ranges
 * 
 * 来自: https://leetcode.com/problems/basic-calculator-ii
 */
(function(exports) {

    /**
     * @param {number[]} nums
     * @return {string[]}
     */
    LeetCode.summaryRanges = function(nums) {
        if (!nums) {
            return [];
        }
        var len = nums.length,
            res = [],
            pre,
            summary;

        for (var i = 0; i < len; i++) {
            var tmp = nums[i];

            if (pre == null || tmp - pre > 1) {
                if (summary != null) {
                    // 添加上一个
                    if (pre == summary) {
                        res.push(summary + '');
                    } else {
                        res.push(summary + '->' + pre);
                    }                    
                }
                // 新的组合
                summary = tmp;
            } else if (i == len - 1) {
                res.push(summary + '->' + tmp);
                summary = null;
            }

            pre = tmp;
        }

        if (summary != null) {
            // 添加最后剩余的独立的数
            res.push(summary + '');
        }

        return res;
    };

})(window.LeetCode = window.LeetCode || {});