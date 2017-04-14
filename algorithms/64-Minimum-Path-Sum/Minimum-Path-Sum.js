/**
 * 作者: dailc
 * 时间: 2017-04-14
 * 描述: Minimum-Path-Sum
 * 
 * 来自: https://leetcode.com/problems/minimum-path-sum
 */
(function(exports) {

	/**
	 * @description minPathSum
	 * @param {number[][]} grid
	 * @return {number}
	 */
	exports.minPathSum = function(grid) {
		if(!grid||grid.length==0) {
			return 0;
		}
		
		var m = grid.length;
		var n = grid[0].length;
		var step = [];
		//初始化条件时的注意,不能全部是1
		for(var i = 0; i < m; i++) {
			step[i] = [];
		}
		//第一个
		step[0][0] = grid[0][0];
		//第1行
		for(var j = 1; j < n; j++) {
			step[0][j] = step[0][j - 1] + grid[0][j];
		}

		//第1列
		for(var i = 1; i < m; i++) {
			step[i][0] = step[i - 1][0] + grid[i][0];
		}

		for(var i = 1; i < m; i++) {
			for(var j = 1; j < n; j++) {
				step[i][j] = grid[i][j] + Math.min(step[i - 1][j],step[i][j-1]);
			}
		}
		
		return step[m - 1][n - 1];
	};

})(window.LeetCode = window.LeetCode || {});