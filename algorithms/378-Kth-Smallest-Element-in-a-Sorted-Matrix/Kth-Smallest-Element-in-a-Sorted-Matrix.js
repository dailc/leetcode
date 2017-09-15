/* 作者: dailc
 * 时间: 2017-09-15
 * 描述: Kth-Smallest-Element-in-a-Sorted-Matrix
 * 
 * 来自: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix
 */
(function(exports) {
    
    let searchLessEqual = function searchLessEqual(matrix, target) {
        const rows = matrix.length;
        let i = rows - 1;
        let j = 0;
        let res = 0;
        
        while (i >= 0 && j < rows) {
            if (matrix[i][j] <= target) {
                res += i + 1;
                j += 1;
            } else {
                i -= 1;
            }
        }
        
        return res;
    }
    
    let kthSmallest = function kthSmallest(matrix, k) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        let left = matrix[0][0];
        let right = matrix[rows - 1][cols - 1];
        
        while (left < right) {
            const mid = left + ~~((right - left) / 2);
            let count = searchLessEqual(matrix, mid);
          
            if (count < k) {
                left = mid + 1;
            } else {
                right = mid;    
            }
        }
        
        return left;
    };

    

    exports.kthSmallest = kthSmallest;

})(window.LeetCode = window.LeetCode || {});