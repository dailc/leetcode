/* 作者: dailc
 * 时间: 2017-05-11
 * 描述: Triangle
 * 
 * 来自: https://leetcode.com/problems/triangle
 */
(function(exports) {

	
	/**
	 * @description minimumTotal
	 * @param {number[][]} triangle
 	 * @return {number}
	 */
	exports.minimumTotal = function(triangle) {
		if(!triangle||!triangle[0]) {
			return 0;
		}
		//直接在当前数组上进行动态规划，当然如果不想污染也可以用新的数组
		var len = triangle.length;
		//当前行的最小列数
		var minCol = 0;
		for( var i = 1; i < len; i ++ ) {
			var row = triangle[i];
			var rowLen = triangle[i].length;
			minCol = 0;
			for( var j = 0; j < rowLen; j ++ ) {
				if(j == 0 ) {
					row[j] += triangle[i-1][j];
				} else if(j == rowLen - 1) {
					row[j] += triangle[i-1][j-1];
				} else {
					row[j] += Math.min(triangle[i-1][j-1],triangle[i-1][j]);
				}
				
				if(row[j] < row[minCol]) {
					minCol = j;
				}
					
			}
		}
		
		
		return triangle[len-1][minCol];
	};
	
})(window.LeetCode = window.LeetCode || {});