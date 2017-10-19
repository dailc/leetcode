/* 
 * 一刷时间: 2016-12-12
 * 二刷时间：2017-10-19
 * 来自: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
(function(exports) {
    
    function findMedianSortedArrays(nums1, nums2, callback) {
        const len1 = nums1.length;
        const len2 = nums2.length;
        const total = len1 + len2;
        
        if (total & 1) {
            // 奇数长度
            return findKth(nums1, nums2, ~~(total / 2) + 1, callback);
        } else {
            return (findKth(nums1, nums2, ~~(total / 2), callback) + findKth(nums1, nums2, ~~((total / 2) + 1), callback)) / 2;
        }
    }
    
    // k从1算起
    function findKth(nums1, nums2, k, callback) {
        const len1 = nums1.length;
        const len2 = nums2.length;
        
        callback && callback(nums1, nums2, k);
        
        if (len1 > len2) {
            return findKth(nums2, nums1, k);
        }
        
        if (!len1) {
            return nums2[k - 1];
        }
        
        if (k === 1) {
            return Math.min(nums1[0], nums2[0]);
        }
        
        const part1 = Math.min(~~(k / 2), len1);
        const part2 = k - part1;
        
        if (nums1[part1 - 1] < nums2[part2 - 1]) {
            return findKth(nums1.slice(part1), nums2, k - part1);
        } else if (nums1[part1 - 1] > nums2[part2 - 1]) {
            return findKth(nums1, nums2.slice(part2), k - part2);
        }
        
        return nums1[part1 - 1];
    }
    
    exports.findMedianSortedArrays = findMedianSortedArrays;

})(window.LeetCode = window.LeetCode || {});