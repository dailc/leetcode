/* 作者: dailc
 * 时间: 2017-08-15
 * 描述: Wiggle-Sort-II
 * 
 * 来自: https://leetcode.com/problems/create-maximum-number
 */
(function(exports) {
    function findK(nums, k, i, j) {
        if (i >= j) {
            return nums[i];
        }

        var m = partition(nums, i, j);

        // 这里一直在基于m的值进行分区，有点类似于快排
        if (m == k) {
            return nums[m];
        } else if (m < k) {
            // m小值的前面肯定是排序过的
            return findK(nums, k, m + 1, j);
        } else {
            return findK(nums, k, i, m - 1);
        }
    }
    
    // 分区算法可以找一个第  i 小值  然后根据i与k的大小再决定是继续从左还是从右算，每次可以丢掉一部分
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

    var wiggleSort = function(nums) {
        var len = nums.length;

        var midIndex = ~~(len / 2);

        var mid = findK(nums, midIndex, 0, len - 1);
        

        // 3-way-partition-to-wiggly in O(n) time with O(1) space.
        var i = 0,
            low = 0,
            high = len - 1;

        // Index-rewiring.
        var indexMapping = function(i) {
            return (1 + 2*i) % (len | 1);
        };
        
        
        while (i <= high) {
            
            if (nums[indexMapping(i)] > mid) {
                swap(nums, indexMapping(i++), indexMapping(low++));
            } else if (nums[indexMapping(i)] < mid) {
                swap(nums, indexMapping(high--), indexMapping(i));
            } else {
                i++;
            }
        }
    };
    exports.wiggleSort = wiggleSort;

})(window.LeetCode = window.LeetCode || {});