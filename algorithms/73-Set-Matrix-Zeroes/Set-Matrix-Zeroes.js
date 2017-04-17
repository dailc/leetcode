/**
 *
 * 作者: dailc
 * 时间: 2017-04-17
 * 描述: Set-Matrix-Zeroes
 * 
 * 来自: https://leetcode.com/problems/set-matrix-zeroes
 */
(function(exports) {

	/**
	 * @description setZeroes
	 * @param {number[][]} matrix
 	 * @return {void} Do not return anything, modify matrix in-place instead.
	 */
	exports.setZeroes = function(matrix) {
		if(!matrix||!matrix[0]) {
			return ;
		}
		var len1 = matrix.length;
		var len2 = matrix[0].length;
		
		var rows = [],
			cols = [];
		
		for( var i = 0; i < len1; i ++ ) {
			for( var j = 0; j < len2; j ++ ) {
				if(matrix[i][j]==0) {
					if(rows.indexOf(i)==-1) {
						rows.push(i);
					}
					if(cols.indexOf(j)==-1) {
						cols.push(j);
					}
				}
			}
		}
		
		//设置行
		for( var i = 0; i < rows.length; i ++ ) {
			var row = rows[i];
			for( var j = 0; j < len2; j ++ ) {
				matrix[row][j] = 0;
			}
		}
		
		//设置列
		for( var j = 0; j < cols.length; j ++ ) {
			var col = cols[j];
			for( var i = 0; i < len1; i ++ ) {
				matrix[i][col] = 0;
			}
		}
	};
	
	exports.setZeroes2 = function(matrix) {
		if(!matrix||!matrix[0]) {
			return ;
		}
		var len1 = matrix.length;
		var len2 = matrix[0].length;
		
		//第一行和第一列是否有0
		var rowZero = false,
			colZero = false;
		
		//遍历，判断一行一列是否有0
		for( var i = 0; i < len1; i ++ ) {
			 if (matrix[i][0] == 0) {
			 	colZero = true;
			 }
		}
		for( var i = 0; i < len2; i ++ ) {
			 if (matrix[0][i] == 0) {
			 	rowZero = true;
			 }
		}
		
		//扫描除去一行一列后的整个数组
		for( var i = 1; i < len1; i ++ ) {
			for( var j = 1; j < len2; j ++ ) {
				if(matrix[i][j]==0) {
					matrix[i][0] = 0;
					matrix[0][j] = 0;
				}
			}
		}
		
		//再次遍历，根据一行一列来设值
		for( var i = 1; i < len1; i ++ ) {
			for( var j = 1; j < len2; j ++ ) {
				if(matrix[i][0]==0||matrix[0][j]==0) {
					matrix[i][j] = 0;
				}
			}
		}
		
		//根据flag设置一行一列
		if(rowZero) {
			for( var i = 0; i < len2; i ++ ) {
				matrix[0][i] = 0;
			}
		}
		
		if(colZero) {
			for( var i = 0; i < len1; i ++ ) {
				matrix[i][0] = 0;
			}
		}
	};
	
	
	
})(window.LeetCode = window.LeetCode || {});