/* 作者: dailc
 * 时间: 2017-07-08
 * 描述: Search-a-2D-Matrix-II
 * 
 * 来自: https://leetcode.com/problems/search-a-2d-matrix-ii
 */
(function(exports) {

    /**
     * @param {numsber[]} numss
     * @param {numsber} k
     * @return {numsber[]}
     */
    var searchMatrix = function(matrix, target) {
        if (!matrix || !matrix[0]) {
            return false;
        }
        
        return searchMatrixM(matrix, 0, 0, matrix.length - 1, matrix[0].length - 1, target, matrix.length, matrix[0].length);
    };
    
    function searchMatrixM(matrix, startm, startn, endM, endN, target, m, n) {
        if (startm > endM || startn > endN || startm < 0 || endM >= m || startn < 0 || endN >= n) {
            return false;
        } else if (startm == endM && startn == endN) {
            return matrix[endM][endN] === target;
        }
        
        var midM = ~~((endM - startm) / 2) + startm,
            midN = ~~((endN - startn) / 2) + startn;
        var mid = matrix[midM][midN];
        if (mid == target) {
            return true;
        } else if (mid < target) {
            return searchMatrixM(matrix, startm, midN + 1, endM, endN, target)
                || searchMatrixM(matrix, midM + 1, startn, endM, endN, target);
        } else {
            return searchMatrixM(matrix, startm, startn, midM - 1, endN, target)
                || searchMatrixM(matrix, startm, startn, endM, midN - 1, target);
        }
    }
    
    var searchMatrix2 = function(matrix, target) {
        if (!matrix || !matrix[0]) {
            return false;
        }
        
        var i,
            j,
            rows = matrix.length,
            cols = matrix[0].length;
            
        i = 0;
        j = cols - 1;
        
        while (i < rows && j >= 0) {
            var tmp = matrix[i][j];
            
            if (tmp > target) {
                j --;
            } else if(tmp < target) {
                i ++;
            } else {
                return true;
            }
        }
        
        return false;
    };

    exports.searchMatrix = searchMatrix;
    exports.searchMatrix2 = searchMatrix2;

})(window.LeetCode = window.LeetCode || {});