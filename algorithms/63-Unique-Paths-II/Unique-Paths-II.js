/**
 * 作者: dailc
 * 时间: 2017-04-13
 * 描述: Unique-Paths-II
 * 
 * 来自: https://leetcode.com/problems/unique-paths-ii
 */
(function(exports) {

	exports.uniquePathsWithObstacles = function(obstacleGrid) {
		if(!obstacleGrid || obstacleGrid.length == 0) {
			return 0;
		}
		var m = obstacleGrid.length;
		var n = obstacleGrid[0].length;
		//特殊样例
		if(obstacleGrid[0][0] == 1 || obstacleGrid[m - 1][n - 1] == 1) {
			return 0;
		}
		var step = [];
		//初始化条件时的注意,不能全部是1
		for(var i = 0; i < m; i++) {
			step[i] = [];
		}

		for(var j = 0; j < n; j++) {
			if(obstacleGrid[0][j] == 1) {
				step[0][j] = 0;
			} else {
				if(j>0) {
					step[0][j] = step[0][j-1];
				} else {
					step[0][j] = 1;
				}	
			}
		}
		for(var i = 0; i < m; i++) {
			if(obstacleGrid[i][0] == 1) {
				step[i][0] = 0;
			} else {
				if(i>0) {
					step[i][0] = step[i-1][0];
				} else {
					step[i][0] = 1;
				}	
			}
		}

		for(var i = 1; i < m; i++) {
			if(obstacleGrid[i][0] == 1) {
				//障碍物
				step[i][0] = 0;
			}
			for(var j = 1; j < n; j++) {
				if(obstacleGrid[i][j] == 1) {
					//障碍物
					step[i][j] = 0;
				} else {
					step[i][j] = step[i - 1][j] + step[i][j - 1];
				}

			}
		}
		return step[m - 1][n - 1];
	};

	/**
	 * @description uniquePathsWithObstacles
	 * @param {number[][]} obstacleGrid
	 * @return {number}
	 */
	exports.uniquePathsWithObstacles2 = function(obstacleGrid) {
		if(!obstacleGrid || obstacleGrid.length == 0) {
			return 0;
		}
		var m = obstacleGrid.length;
		var n = obstacleGrid[0].length;
		//特殊样例
		if(obstacleGrid[0][0] == 1 || obstacleGrid[m - 1][n - 1] == 1) {
			return 0;
		}
		var step = [1];
		for(var j = 1; j < n; j++) {
			if(obstacleGrid[0][j] == 0) {
				step[j] = step[j - 1];
			} else {
				step[j] = 0;
			}

		}
		for(var i = 1; i < m; i++) {
			if(obstacleGrid[i][0] == 1) {
				//障碍物
				step[0] = 0;
			}
			for(var j = 1; j < n; j++) {
				if(obstacleGrid[i][j] == 1) {
					//障碍物
					step[j] = 0;
				} else {
					step[j] += step[j - 1];
				}

			}
		}
		return step[n - 1];
	};

})(window.LeetCode = window.LeetCode || {});