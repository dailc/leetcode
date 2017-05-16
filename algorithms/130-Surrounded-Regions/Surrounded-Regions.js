/* 作者: dailc
 * 时间: 2017-05-16
 * 描述: Surrounded-Regions
 * 
 * 来自: https://leetcode.com/problems/surrounded-regions
 */
(function(exports) {

	/**
	 * @description solve
	 * @param {character[][]} board
 	 * @return {void} Do not return anything, modify board in-place instead.
	 */
	exports.solve = function(board) {
		if(!board||!board[0]) {
			return ;
		}
		var rows = board.length;
		var cols = board[0].length;
		
		for( var i = 0; i < rows; i ++ ) {
			for( var j = 0; j < cols; j ++ ) {
				if(i==0||i==rows-1||j==0||j==cols-1&&board[i][j]=='O') {
					dfs(board,i,j);
				}
			}
		}
		
		// 所有的o变为x，y变为o
		for( var i = 0; i < rows; i ++ ) {
			for( var j = 0; j < cols; j ++ ) {
				if(board[i][j] == 'O') {
					board[i][j] = 'X';
				}
				if(board[i][j] == 'Y') {
					board[i][j] = 'O';
				}
			}
		}
		
	};
	
	function dfs(board,i,j) {
		if(board[i][j] == 'O') {
			board[i][j] = 'Y';
			// 注意在leetcode上 j>0无法通过，需要改成j>1 
			// 大数集合，尽量去避免计算，所以变为>1 和<len-2
			if(i > 1 && board[i-1][j] == 'O') {
				dfs(board,i-1,j);
			}
			if(i < board.length - 2 && board[i+1][j] == 'O') {
				dfs(board,i+1,j);
			}
			
			if(j > 1 && board[i][j-1] == 'O') {
				dfs(board,i,j-1);
			}
			if(j < board[i].length - 2 && board[i][j+1] == 'O') {
				dfs(board,i,j+1);
			}
			
		}
	}


})(window.LeetCode = window.LeetCode || {});