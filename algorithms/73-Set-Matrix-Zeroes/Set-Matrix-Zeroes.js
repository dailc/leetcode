/**
 * 一刷时间: 2017-04-17
 * 二刷时间：2017-12-30
 * 来自: https://leetcode.com/problems/set-matrix-zeroes
 */
(function(exports) {

	/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    if (!matrix || !matrix[0]) {
        return;
    }
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // 第一行和第一列是否有0
    let isFirstRowHasZero = false;
    let isFirstColHasZero = false;
    
    // 遍历，判断一行一列是否有0
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            isFirstColHasZero = true;
        }
    }
    
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            isFirstRowHasZero = true;
        }
    }
    
    // 扫描除去一行一列后的整个数组
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    
    // 再次遍历，根据一行一列来设值
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // 根据flag设置一行一列
    if (isFirstColHasZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0
        }
    }
    
    if (isFirstRowHasZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0
        }
    }
    
    
}

exports.setZeroes = setZeroes;
	
	
})(window.LeetCode = window.LeetCode || {});