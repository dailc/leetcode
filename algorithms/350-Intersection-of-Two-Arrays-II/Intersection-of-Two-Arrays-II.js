/* 作者: dailc
 * 时间: 2017-09-03
 * 描述: Intersection-of-Two-Arrays
 * 
 * 来自: https://leetcode.com/problems/intersection-of-two-arrays
 */
(function(exports) {
    

    var intersect = function(nums1, nums2) {
        var len1 = nums1.length,
            len2 = nums2.length,
            repeatMap = {},
            res = [];
            
        for (var i = 0; i < len1; i++) {
            repeatMap[nums1[i]] = repeatMap[nums1[i]] || 0;
            repeatMap[nums1[i]]++;
        }
        
        for (var i = 0; i < len2; i++) {
            if (repeatMap[nums2[i]]) {
                repeatMap[nums2[i]]--;
                res.push(nums2[i]);
            }
        }
        
        return res;
    };
    
    exports.intersect = intersect;

})(window.LeetCode = window.LeetCode || {});