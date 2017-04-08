/**
 * 作者: dailc
 * 时间: 2017-04-08
 * 描述: Rotate-Image
 * 
 * 来自: https://leetcode.com/problems/permutations-ii
 */
(function(exports) {

	/**
	 * @description rotate
	 * @param {number[][]} matrix
	 * @return {void} Do not return anything, modify matrix in-place instead.
	 */
	exports.rotate = function(matrix) {
		if(!matrix) {
			return ;
		}
		var helpMatrix = [];
		var len = matrix.length;
		
		for( var i = 0; i < len; i ++ ) {
			helpMatrix[i] = [];
			for( var j = 0; j < len; j ++ ) {
				helpMatrix[i][j] = matrix[len-1-j][i];
			}
		}
		//赋值
		for( var i = 0; i < len; i ++ ) {
			for( var j = 0; j < len; j ++ ) {
				matrix[i][j] = helpMatrix[i][j];
			}
		}
	};
	
	exports.rotate2 = function(matrix) {
		if(!matrix) {
			return ;
		}
		var len = matrix.length;
		
		for( var i = 0; i < len; i ++ ) {
			for( var j = i; j < len; j ++ ) {
				var tmp = matrix[i][j];
				matrix[i][j] = matrix[j][i];
				matrix[j][i] = tmp;
			}
		}
		//第二次循环只需要一般即可(因为只是反转)
		for( var i = 0; i < len; i ++ ) {
			for( var j = 0; j < Math.floor(len/2); j ++ ) {
				var tmp = matrix[i][j];
				matrix[i][j] = matrix[i][len-1-j];
				matrix[i][len-1-j] = tmp;
			}
		}
	};

	

})(window.LeetCode = window.LeetCode || {});