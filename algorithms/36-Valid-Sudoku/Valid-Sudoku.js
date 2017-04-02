/**
 * 作者: dailc
 * 时间: 2017-04-02
 * 描述: Valid-Sudoku
 * 
 * 来自: https://leetcode.com/problems/valid-sudoku
 */
(function(exports) {

	/**
	 * @description isValidSudoku
	 * 假设只接收 1-9的字符
	 * @param {character[String]} board
 	 * @return {boolean}
	 */
	exports.isValidSudoku = function(board) {
		if(!board||!board[0]||!board[0].length) {
			return false;
		}
		var len = board.length;
		//判断行与列
		for( var i = 0; i < len; i ++ ) {
			var rows = [];
			var cols = [];
			for( var j = 0; j < len; j ++ ) {
				var row = board[i].charAt(j);
				var col = board[j].charAt(i);
				rows.push(row);
				cols.push(col);
			}
			if(!helper(rows)||!helper(cols)) {
				return false;
			}
		}
		
		//判断子九宫格,可以肯定len是3的倍数
		var subLen = len/3;
		for( var i = 0; i < subLen; i ++ ) {
			
			for( var j = 0; j < subLen; j ++ ) {
				//添加9个数
				//有一个奇数
				var baseI = i*3;
				var baseJ = j*3;
				var sub = [];
				sub.push(board[baseI].charAt(baseJ));
				sub.push(board[baseI].charAt(baseJ+1));
				sub.push(board[baseI].charAt(baseJ+2));
				sub.push(board[baseI+1].charAt(baseJ));
				sub.push(board[baseI+1].charAt(baseJ+1));
				sub.push(board[baseI+1].charAt(baseJ+2));
				sub.push(board[baseI+2].charAt(baseJ));
				sub.push(board[baseI+2].charAt(baseJ+1));
				sub.push(board[baseI+2].charAt(baseJ+2));
				if(!helper(sub)) {
					return false;
				}
			}
			
		}
		
		return true;
	};
	
	/**
	 * @description isValidSudoku
	 * 假设只接收 1-9的字符
	 * 针对数组形式
	 * @param {character[String]} board
 	 * @return {boolean}
	 */
	exports.isValidSudoku2 = function(board) {
		if(!board||!board[0]||!board[0].length) {
			return false;
		}
		var len = board.length;
		//判断行与列
		for( var i = 0; i < len; i ++ ) {
			var rows = [];
			var cols = [];
			for( var j = 0; j < len; j ++ ) {
				var row = board[i][j];
				var col = board[j][i];
				rows.push(row);
				cols.push(col);
			}
			if(!helper(rows)||!helper(cols)) {
				return false;
			}
		}
		
		//判断子九宫格,可以肯定len是3的倍数
		var subLen = len/3;
		for( var i = 0; i < subLen; i ++ ) {
			
			for( var j = 0; j < subLen; j ++ ) {
				//添加9个数
				//有一个奇数
				var baseI = i*3;
				var baseJ = j*3;
				var sub = [];
				sub.push(board[baseI][baseJ]);
				sub.push(board[baseI][baseJ+1]);
				sub.push(board[baseI][baseJ+2]);
				sub.push(board[baseI+1][baseJ]);
				sub.push(board[baseI+1][baseJ+1]);
				sub.push(board[baseI+1][baseJ+2]);
				sub.push(board[baseI+2][baseJ]);
				sub.push(board[baseI+2][baseJ+1]);
				sub.push(board[baseI+2][baseJ+2]);
				if(!helper(sub)) {
					return false;
				}
			}
			
		}
		
		return true;
	};
	//判断一个 九个元素的数组是否符合数独规则
	function helper(arr) {
		//字符串
		var check = '1#2#3#4#5#6#7#8#9#';
		var len = arr.length;
		var result = true;
		
		for( var i = 0; i < len; i ++ ) {
			var tmp = arr[i];
			if(tmp!='.'&&check.indexOf(tmp) ==-1) {
				//非法字符
				return false;
			} else if(tmp!='.'){
				//check中移除
				check = check.replace(tmp,'');
			}
		}
		
		return result;
	}
	
	/**
	 * @description isValidSudoku
	 * 进行优化,只针对9*9的
	 * @param {character[String]} board
 	 * @return {boolean}
	 */
	exports.isValidSudoku3 = function(board) {
		if(!board||!board[0]||!board[0].length) {
			return false;
		}
		var rowValid = [];
		var columnValid = [];
		var subBoardValid = [];
		for( var i = 0; i < 9; i ++ ) {
			rowValid[i] = [];
			columnValid[i] = [];
			subBoardValid[i] = [];
			for( var j = 0; j < 9; j ++ ) {
				rowValid[i][j] = 0;
				columnValid[i][j] = 0;
				subBoardValid[i][j] = 0;
			}
		}
		//判断行与列
		for( var i = 0; i < 9; i ++ ) {
			
			for( var j = 0; j < 9; j ++ ) {
				var tmp = board[i][j];
				if(tmp!='.') {
					if(!checkValid(rowValid[i],tmp-'0')
					||!checkValid(columnValid[j],tmp-'0')
					||!checkValid(subBoardValid[Math.floor(i/3)*3+Math.floor(j/3)],tmp-'0')) {
						return false;
					}
				}
			}
			
		}
		
		
		return true;
	};
	
	function checkValid(vec,val) {
		if(vec[val]==1) {
			return false;
		}
		vec[val] = 1;
		return true;
	}
	
})(window.LeetCode = window.LeetCode || {});