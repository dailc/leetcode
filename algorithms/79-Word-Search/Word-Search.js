/**
 * 作者: dailc
 * 时间: 2017-04-20
 * 描述: Word-Search
 * 
 * 来自: https://leetcode.com/problems/subsets
 */
(function(exports) {

		/**
		 * @description exist
		 * @param {character[][]} board
		 * @param {string} word
		 * @return {boolean}
		 */
		exports.exist = function(board, word) {
			if(!board) {
				return false;
			}
			var rows = board.length;
			var cols = board[0].length;

			//这个数组表示是否访问过
			var exists = [];
			for(var i = 0; i < rows; i++) {
				exists[i] = [];
				for(var j = 0; j < cols; j++) {
					exists[i][j] = false;
				}
			}

			for(var i = 0; i < rows; i++) {
				for(var j = 0; j < cols; j++) {
					if(help(exists, board, word, rows, cols,0, i, j)){
						return true;
					}
				}
			}

			return false;
		};

		function help(exists, board, word,  rows, cols, index,i, j) {
			if(index == word.length) {
				return true;
			} 
			if(i<0||i>rows-1||j<0||j>cols-1||exists[i][j]||board[i][j]!=word.charAt(index)) {
				return false;
			}
			exists[i][j] = true;
			var res = help(exists, board, word, rows, cols, index+1, i-1, j)
					||help(exists, board, word, rows, cols, index+1, i+1, j)
					||help(exists, board, word, rows, cols, index+1, i, j-1)
					||help(exists, board, word, rows, cols, index+1, i, j+1);
			exists[i][j] = false;
			
			return res;
	}

})(window.LeetCode = window.LeetCode || {});