/**
 * 作者: dailc
 * 时间: 2017-04-12
 * 描述: Spiral-Matrix-II
 * 
 * 来自: https://leetcode.com/problems/spiral-matrix-ii
 */
(function(exports) {
	
	
	/**
	 * @description generateMatrix
	 * @param {number} n
 	 * @return {number[][]}
	 */
	exports.generateMatrix = function(n) {
		if(n<=0) {
			return [];
		}
		var result = [];
		for( var i = 0; i < n; i ++ ) {
			result[i] = [];
			for( var j = 0; j < n; j ++ ) {
				result[i][j] = 0;
			}
		}
		
		var rows = n,
			cols = n,
			start = 0,
			count = [1];
		while(cols > start * 2 && rows > start * 2) {
			matrixInCircle(result, cols, rows, start, count);
			start++;
		}
		return result;
	};
	
	function matrixInCircle(result,colunms, rows, start, count) {
		var endX = colunms - 1 - start;
		var endY = rows - 1 - start;
		//第一步,横向打印
		for(var i = start; i <= endX; i++) {
			//console.log(arr[start][i]);
			result[start][i] = count[0]++;
		}
		//第二步
		if(start < endY) {
			for(var i = start + 1; i <= endY; i++) {
				//console.log(arr[i][endX]);
				result[i][endX] = count[0]++;
			}
		}
		//第三步,从右到左
		if(start < endX && start < endY) {
			for(var i = endX - 1; i >= start; i--) {
				//console.log(arr[endY][i]);
				result[endY][i] = count[0]++;
			}
		}
		//第四步，从下到上,和第三步相比，Y要多一行
		if(start < endX && start < endY - 1) {
			for(var i = endY - 1; i >= start + 1; i--) {
				//console.log(arr[i][start]);
				result[i][start] = count[0]++;
			}
		}
	}
	

})(window.LeetCode = window.LeetCode || {});