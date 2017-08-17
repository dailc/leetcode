/* 作者: dailc
 * 时间: 2017-08-17
 * 描述: Count-of-Range-Sum
 * 
 * 来自: https://leetcode.com/problems/power-of-three
 */
(function(exports) {
    
    // 讲一个数组指定区间的元素排序
    var quickSort = function(arr, start, end) {
        if (!arr || !arr.length) {
            return [];
        }
        if (arr.length === 1) {
            return arr;
        }
        if (end <= start) {
            return arr;
        }
        var len = arr.length;
        
        start = start === undefined ? 0: start;
        end = end === undefined ? len - 1: end;
        // 找到一个基准比较点
        var priot = arr[start];
        var smallIndex = start;
        var bigIndex = start + 1;
        
        for (; bigIndex <= end; bigIndex++) {
            if (arr[bigIndex] < priot) {
                smallIndex++;
                swap(arr, smallIndex, bigIndex);
            }
        }
        swap(arr, smallIndex, start);
        quickSort(arr, start, smallIndex - 1);
        quickSort(arr, smallIndex + 1, end);
        
        return arr;
    };
    var swap = function(arr, start, end) {
        if (start === end) {
            return ;
        }
        
        var tmp = arr[start];
        
        arr[start] = arr[end];
        arr[end] = tmp;
    };
    // TODO: 未完待续
    var mergeSort = function(sums, lower, upper, start, end) {
        if (end - start <= 1) {
            return 0;
        }

        var mid = ~~((start + end) / 2),
            m = mid,
            n = mid,
            count = 0;
        
        // 分治
        count = mergeSort(sums, lower, upper, start, mid) + mergeSort(sums, lower, upper, mid, end);
        
        for (var i = start; i < mid; i++) {
            while (m < end && sums[m] - sums[i] < lower) {
                m++;
            }
            while (n < end && sums[n] - sums[i] <= upper) {
                n++;
            }
            count += n - m;
        }
        
        quickSort(sums, start, end);  
        
        return count;
    };

    var countRangeSum = function(nums, lower, upper) {
        var len = nums.length,
            sums = [];

        for (var i = 0; i < len; i++) {
            sums[i] = sums[i] || 0;
            sums[i + 1] = sums[i] + nums[i];
        }

        return mergeSort(sums, lower, upper, 0, len + 1);
    };

    exports.countRangeSum = countRangeSum;
    exports.quickSort = quickSort;
    exports.swap = swap;

})(window.LeetCode = window.LeetCode || {});