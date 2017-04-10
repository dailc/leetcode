/**
 * 作者: dailc
 * 时间: 2017-04-10
 * 描述: Spiral-Matrix
 * 
 * 来自: https://leetcode.com/problems/n-queens-ii
 */
(function(exports) {

	/**
	 * @description spiralOrder
	 * @param {number[][]} matrix
	 * @return {number[]}
	 */
	exports.spiralOrder = function(matrix) {
		if(!matrix||!matrix[0]) {
			return [];
		}
		var rows = matrix.length;
		var cols = matrix[0].length;
		var start = 0;
		var result = [];
		while(cols > start * 2 && rows > start * 2) {
			matrixInCircle(result, matrix, cols, rows, start);
			start++;
		}
		return result;
	};

	function matrixInCircle(result, arr, colunms, rows, start) {
		var endX = colunms - 1 - start;
		var endY = rows - 1 - start;
		//第一步,横向打印
		for(var i = start; i <= endX; i++) {
			//console.log(arr[start][i]);
			result.push(arr[start][i]);
		}
		//第二步
		if(start < endY) {
			for(var i = start + 1; i <= endY; i++) {
				//console.log(arr[i][endX]);
				result.push(arr[i][endX]);
			}
		}
		//第三步,从右到左
		if(start < endX && start < endY) {
			for(var i = endX - 1; i >= start; i--) {
				//console.log(arr[endY][i]);
				result.push(arr[endY][i]);
			}
		}
		//第四步，从下到上,和第三步相比，Y要多一行
		if(start < endX && start < endY - 1) {
			for(var i = endY - 1; i >= start + 1; i--) {
				//console.log(arr[i][start]);
				result.push(arr[i][start]);
			}
		}
	}
})(window.LeetCode = window.LeetCode || {});