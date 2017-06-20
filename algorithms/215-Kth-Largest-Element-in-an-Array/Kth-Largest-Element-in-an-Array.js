/* 作者: dailc
 * 时间: 2017-06-20
 * 描述: Kth-Largest-Element-in-an-Array
 * 
 * 来自: https://leetcode.com/problems/word-search-ii
 */
(function(exports) {

    /**
     * @param {number[]} findKthLargest
     * @param {number} k
     * @return {number}
     */
    LeetCode.findKthLargest = function(nums, k) {
        return findK(nums, nums.length - k, 0, nums.length - 1);
    };

    function findK(nums, k, i, j) {
        if (i >= j) {
            return nums[i];
        }

        var m = partition(nums, i, j);
        
        // 这里一直在基于m的值进行分区，有点类似于快排
        if (m == k) {
            return nums[m];
        } else if (m < k) {
            return findK(nums, k, m + 1, j);
        } else {
            return findK(nums, k, i, m - 1);
        }
    }

    function partition(nums, i, j) {
        // 确保m是当前第m小值,所以m是从0开始
        var x = nums[i],
            m = i,
            n = i + 1;

        while (n <= j) {
            if (nums[n] < x) {
                swap(nums, ++m, n);
            }

            n++;
        }
        // 这次的交换让m变成了第m小值
        swap(nums, i, m);

        return m;
    }

    function swap(nums, i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

})(window.LeetCode = window.LeetCode || {});