/**
 * 作者: dailc
 * 时间: 2017-04-09
 * 描述: N-Queens
 * 
 * 来自: https://leetcode.com/problems/n-queens
 */
(function(exports) {

	/**
	 * @description solveNQueens
	 * @param {number} n
	 * @return {string[][]}
	 */
	exports.solveNQueens = function(n) {
		if(n < 0) {
			return [];
		}
		var result = [];
		var curr = [];
		for(var i = 0; i < n; i++) {
			curr[i] = [];
			for(var j = 0; j < n; j++) {
				curr[i].push('.');
			}

		}
		//回溯法进行试探
		dfs(result, curr, curr.length, 0);
		return result;
	};

	function dfs(result, curr, len, row) {
		if(row == len) {
			//以及回溯完毕  每一次添加一个解
			var tmp = [];
			for(var i = 0; i < curr.length; i++) {
				tmp.push(curr[i].join(''));
			}
			result.push(tmp);
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

	/**
	 * @description solveNQueens
	 * @param {number} n
	 * @return {string[][]}
	 */
	exports.solveNQueens2 = function(n) {
		if(n < 0) {
			return [];
		}
		var result = [];
		var curr = [];
		for(var i = 0; i < n; i++) {
			curr.push(-1);
		}
		//回溯法进行试探
		dfs2(result, curr, curr.length, 0);
		return result;
	};

	function dfs2(result, curr, len, row) {
		if(row == len) {
			var tmp = [];
			for(var i = 0; i < len; i++) {
				tmp[i] = [];
				for(var j = 0; j < len; j++) {
					tmp[i].push('.');
				}

			}
			for(var i = 0; i < len; i++) {
				tmp[i][curr[i]] = 'Q';
			}
			for(var i = 0; i < len; i++) {
				tmp[i] = tmp[i].join('');
			}
			result.push(tmp);
			return ;
		}
		for( var col = 0; col < len; col++) {
			if(isValid2(curr, row, col)) {
				curr[row] = col;
				dfs2(result,curr,len,row+1);
				curr[row] = -1;
			}
		}
	}
	//判断在row行col列位置放一个皇后，是否是合法的状态
    //已经保证了每行一个皇后，只需要判断列是否合法以及对角线是否合法。
	function isValid2(curr, row, col) {
		//只需要判断row前面的行，因为后面的行还没有放置
		for(var i = 0; i < row; i++) {
			if(curr[i]==col||Math.abs(row-i)==Math.abs(col - curr[i])) {
				return false;
			}
		}
		return true;
	}
	
	exports.solveNQueens3 = function(n) {
		if(n < 0) {
			return [];
		}
		var result = [];
		var curr = [];
		for(var i = 0; i < n; i++) {
			curr[i] = [];
			for(var j = 0; j < n; j++) {
				curr[i].push('.');
			}

		}
		var upperlim  = (1 << n) - 1;//低n位全部置1
		//回溯法进行试探
		dfs3(result, curr,upperlim,0, 0,0,0);
		return result;
	};
	
	function dfs3(result, curr,upperlim, index, row,ld,rd) {
		var pos,p;
		if(row !=upperlim) {
			//pos中二进制为1的位，表示可以在当前行的对应列放皇后
			pos = upperlim & (~(row|ld|rd));
			//和upperlim与运算，主要是ld在上一层是通过左移位得到的，它的高位可能有无效的1存在，这样会清除ld高位无效的1
			 while ( pos ) {
			 	p = pos & (~pos + 1);//获取pos最右边的1,例如pos = 010110，则p = 000010
                pos = pos - p;//pos最右边的1清0
                //在当前行，p中1对应的列放置皇后
                setQueen(curr, index, p, 'Q');
                //设置下一行
                dfs3(result, curr,upperlim, index+1, row|p,(ld|p)<<1,(rd|p)>>1);
                setQueen(curr, index, p, '.');
			 }
			 
		} else {
			//找到一个解
			//以及回溯完毕  每一次添加一个解
			var tmp = [];
			for(var i = 0; i < curr.length; i++) {
				tmp.push(curr[i].join(''));
			}
			result.push(tmp);
			return;
		}
	}
	
	function setQueen(curr, row, p, val) {
		var col = 0;
		while(!(p&1)) {
			p = p >> 1;
			col++;
		}
		curr[row][col] = val;
	}

})(window.LeetCode = window.LeetCode || {});