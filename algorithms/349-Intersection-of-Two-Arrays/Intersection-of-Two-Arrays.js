/* 作者: dailc
 * 时间: 2017-09-03
 * 描述: Intersection-of-Two-Arrays
 * 
 * 来自: https://leetcode.com/problems/intersection-of-two-arrays
 */
(function(exports) {
    

    var intersection = function(nums1, nums2) {
        var len1 = nums1.length,
            len2 = nums2.length,
            repeatMap = {},
            res = [];
            
        for (var i = 0; i < len1; i++) {
            repeatMap[nums1[i]] = true;
        }
        
        for (var i = 0; i < len2; i++) {
            if (repeatMap[nums2[i]] && res.indexOf(nums2[i]) === -1) {
                res.push(nums2[i]);
            }
        }
        
        return res;
    };
    
    exports.intersection = intersection;

})(window.LeetCode = window.LeetCode || {});