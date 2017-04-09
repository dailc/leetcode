/**
 * 作者: dailc
 * 时间: 2017-04-09
 * 描述: N-Queens-II
 * 
 * 来自: https://leetcode.com/problems/n-queens-ii
 */
(function(exports) {

	/**
	 * @description solveNQueens
	 * @param {number} n
	 * @return {string[][]}
	 */
	exports.totalNQueens = function(n) {
		if(n < 0) {
			return [];
		}
		var result = [0];
		var curr = [];
		for(var i = 0; i < n; i++) {
			curr[i] = [];
			for(var j = 0; j < n; j++) {
				curr[i].push('.');
			}

		}
		//回溯法进行试探
		dfs(result, curr, curr.length, 0);
		return result[0];
	};

	function dfs(result, curr, len, row) {
		if(row == len) {
			//以及回溯完毕  每一次添加一个解
			result[0]++;
			return;
		}
		for(var col = 0; col < len; col++) {
			if(isValid(curr, row, col)) {
				curr[row][col] = 'Q';
				dfs(result, curr, len, row + 1);
				curr[row][col] = '.';
			}
		}
	}
	//已经保证了每行一个皇后，只需要判断列是否合法以及对角线是否合法。
	function isValid(curr, row, col) {
		for(var i = 0; i < row; i++) {
			if(curr[i][col] == 'Q') {
				return false;
			}
		}
		//右对角线(只需要判断对角线上半部分，因为后面的行还没有开始放置)
		for(var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
			if(curr[i][j] == 'Q') {
				return false;
			}
		}
		//左对角线(只需要判断对角线上半部分，因为后面的行还没有开始放置)
		for(var i = row - 1, j = col + 1; i >= 0 && j < curr.length; i--, j++) {
			if(curr[i][j] == 'Q') {
				return false;
			}
		}
		return true;
	}

	
})(window.LeetCode = window.LeetCode || {});