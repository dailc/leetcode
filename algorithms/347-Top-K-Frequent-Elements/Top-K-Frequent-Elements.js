/* 作者: dailc
 * 时间: 2017-09-02
 * 描述: Top-K-Frequent-Elements
 * 
 * 来自: https://leetcode.com/problems/top-k-frequent-elements
 */
(function(exports) {
    

    var topKFrequent = function(nums, k) {
        var bucket = [],
            frequencyMap = {},
            len = nums.length;
        
        for (var i = 0; i < len; i++) {
            var numI = nums[i];
            
            frequencyMap[numI] = frequencyMap[numI] || 0;
            frequencyMap[numI]++;
        }
        
        for (var key in frequencyMap) {
            var frequency  = frequencyMap[key];
            
            if (bucket[frequency] === undefined) {
                bucket[frequency] = [];
            }
            // 转为整数
            bucket[frequency].push(+key);
        }
        
        var res = [];
        
        for (var pos = bucket.length - 1; pos >= 0 && res.length < k; pos--) {
            if (bucket[pos] !== undefined) {
                res = res.concat(bucket[pos]);
            }
        }
        
        return res;
    };
    
    exports.topKFrequent = topKFrequent;

})(window.LeetCode = window.LeetCode || {});