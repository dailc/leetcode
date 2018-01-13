/**
 * 一刷时间: 2017-04-23
 * 二刷时间：2018-01-13
 * 来自: https://leetcode.com/problems/merge-sorted-array
 */
(function(exports) {

    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    function merge(nums1, m, nums2, n) {
        if (!nums1 || !nums2 || !n) {
            return;
        }
        let len = m + n - 1;
        let index1 = m - 1;
        let index2 = n - 1;

        while (index1 >= 0 && index2 >= 0) {
            if (nums1[index1] > nums2[index2]) {
                nums1[len--] = nums1[index1--];
            } else {
                nums1[len--] = nums2[index2--];
            }
        }

        while (index2 >= 0) {
            nums1[len--] = nums2[index2--];
        }
    }

    exports.merge = LeetCode.merge;

})(window.LeetCode = window.LeetCode || {});