/* 作者: dailc
 * 时间: 2017-09-11
 * 描述: Find-K-Pairs-with-Smallest-Sums
 * 
 * 来自: https://leetcode.com/problems/super-pow
 */
(function(exports) {
    
    var kSmallestPairs = function(nums1, nums2, k) {
        var MAX_VALUE = 2147483647;
        
        var len1 = nums1.length,
            len2 = nums2.length,
            size = Math.min(len1 * len2, k),
            res = [],
            index = [];
        
        for (var i = 0; i < size; i++) {
            index[i] = 0;
        }
        
        for (var i = 0; i < size; i++) {
            var tmp = 0,
                sum = MAX_VALUE;
            
            for (var j = 0; j < len1; j++) {
                if (index[j] < len2 && sum >= nums1[j] + nums2[index[j]]) {
                    tmp = j;
                    sum = nums1[j] + nums2[index[j]];
                }
            }
            
            res.push([nums1[tmp], nums2[index[tmp]]]);
            // nums1中对应的位置不变，nums2中往后加一个即  (1,2) (3,4)由(1,3)变为(1,4)
            index[tmp]++;
        }
        
        return res;
    };

    

    exports.kSmallestPairs = kSmallestPairs;

})(window.LeetCode = window.LeetCode || {});