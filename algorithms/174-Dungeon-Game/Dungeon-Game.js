/* 作者: dailc
 * 时间: 2017-06-06
 * 描述: Dungeon-Game
 * 
 * 来自: https://leetcode.com/problems/dungeon-game
 */
(function(exports) {
	

	/**
	 * @description
	 * @param {number[][]} dungeon
 	 * @return {number}
	 */
	LeetCode.calculateMinimumHP = function(dungeon) {
		var m = dungeon.length,
			n = dungeon[0].length;
		var dp = [];
		for( var i = 0; i < m; i ++ ) {
			dp[i] = [];
		}
		
		dp[0][0] = {
			min: dungeon[0][0] < 0 ? dungeon[0][0] : 0,
			opt: dungeon[0][0] > 0 ? dungeon[0][0] : 0
		};
		// 初始化第一列
		for( var i = 1; i < m; i ++ ) {
			dp[i][0] = {};
			
			// 判断护罩
			var diff = dp[i - 1][0].opt + dungeon[i][0];
			
			if( diff < 0) {
				// 最小值需要再次变小
				dp[i][0].min = dp[i - 1][0].min + diff;
				// 护罩已经消耗光
				dp[i][0].opt = 0;
			} else {
				// 最小值不变
				dp[i][0].min = dp[i - 1][0].min;
				// 护罩累积
				dp[i][0].opt = dp[i - 1][0].opt + diff;
			}
			
		}
		
		// 初始化第一行
		for( var j = 1; j < n; j ++ ) {
			dp[0][j] = {};
			
			// 判断护罩
			var diff = dp[0][j-1].opt + dungeon[0][j];
			
			if( diff < 0) {
				// 最小值需要再次变小
				dp[0][j].min = dp[0][j-1].min + diff;
				// 护罩已经消耗光
				dp[0][j].opt = 0;
			} else {
				// 最小值不变
				dp[0][j].min = dp[0][j-1].min;
				// 护罩累积
				dp[0][j].opt = dp[0][j-1].opt + diff;
			}
		}
		
		// 初始化i，j
		for( var i = 1; i < m; i ++ ) {
			for( var j = 1; j < n; j ++ ) {
				// 依次判断i和j
				var leftDiff = dp[i - 1][j].opt + dungeon[i][j];
				var upDiff = dp[i][j - 1].opt + dungeon[i][j];
				
				
			}
		}
		
		console.log(dp);
	};
	
	LeetCode.calculateMinimumHP2 = function(dungeon) {
		var m = dungeon.length,
			n = dungeon[0].length;
		var dp = [];
		for( var i = 0; i < m; i ++ ) {
			dp[i] = [];
		}
		
		// 初始化最后一行和最后一列
		dp[m - 1][n - 1] = dungeon[m - 1][n - 1] > 0 ? 0 : - dungeon[m - 1][n - 1];
		
		for( var i = m - 2; i >= 0; i --) {
			dp[i][n - 1] = dungeon[i][n - 1] >= dp[i + 1][n - 1] ? 0 : (dp[i + 1][n - 1] - dungeon[i][n - 1]);
		}
		for( var j = n - 2; j >= 0; j --) {
			dp[m - 1][j] = dungeon[m - 1][j] >= dp[m - 1][j + 1] ? 0 : (dp[m - 1][j + 1] - dungeon[m - 1][j]);
		}
		
		// 从右下角往左上角遍历
		for( var i = m - 2; i >= 0; i -- ) {
			for( var j = n - 2; j >= 0; j -- ) {
				var down = dungeon[i][j] >= dp[i + 1][j] ? 0 : dp[i + 1][j] - dungeon[i][j];
				var right = dungeon[i][j] >= dp[i][j + 1] ? 0 : dp[i][j + 1] - dungeon[i][j];
				
				dp[i][j] = Math.min(down, right);
			}
		}
		
		// 要保证勇士活着，至少需要1魔力  
        return dp[0][0] + 1;  
	};
	
	
})(window.LeetCode = window.LeetCode || {});