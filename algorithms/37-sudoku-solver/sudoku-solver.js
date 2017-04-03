/**
 * 作者: dailc
 * 时间: 2017-04-03
 * 描述: sudoku-solver
 * 
 * 来自: https://leetcode.com/problems/sudoku-solver/
 */
(function(exports) {

	/**
	 * @description isValidSudoku
	 * 假设只接收 1-9的字符
	 * @param {character[String]} board
 	 * @return {void} Do not return anything, modify board in-place instead.
	 */
	exports.solveSudoku = function(board) {
		if(!board||!board[0]||!board[0].length) {
			return ;
		}
		helper(board,0,0);
		
	};
	
	function helper(board,i,j) {
		if(j>=9) {
			//换行
			return helper(board,i+1,0);
		}
		if(i==9) {
			return true;
		}
		if(board[i][j]=='.') {
			//进入dfs
			for( var k = 1; k <= 9; k ++ ) {
				board[i][j] = (k + '');
				if(isValid(board,i,j)) {
					if(helper(board,i,j+1)) {
						return true;
					}
				}		
			}
			//如果搜索不和要求，上面就不会return，这是需要重置状态
			board[i][j] = '.';
			
		} else {
			return helper(board,i,j+1);
		}
		
		return false;
	}
	//对应位置是否合法
	function isValid(board,i,j) {
		var baseRow = Math.floor(i/3)*3;
		var baseCol = Math.floor(j/3)*3;
		for( var k = 0; k < 9; k ++ ) {
			//如果一行内不合法
			if(k!=j&&board[i][k]==board[i][j]) {
				return false;
			}
			//如果一列内不合法
			if(k!=i&&board[k][j]==board[i][j]) {
				return false;
			}
			//如果同一个子九宫格内不合法,这里也合并到同一个循环内部了
			var row = baseRow + Math.floor(k/3);
			var col = baseCol + k%3;
			if((row!=i||col!=j)&& board[row][col]==board[i][j]) {
				return false;
			}
		}		
		return true;
	}
	
	
})(window.LeetCode = window.LeetCode || {});