/**
 * 作者: dailc
 * 时间: 2017-03-31
 * 描述: Longest-Valid-Parentheses
 * 
 * 来自: https://leetcode.com/problems/longest-valid-parentheses
 */
(function(exports) {

	/**
	 * @description longestValidParentheses
	 * 辅助栈法
	 * @param {string} str
 	 * @return {number}
	 */
	exports.longestValidParentheses = function(str) {
		if(!str) {
			return 0;
		}
		var len = str.length,
			stack = [],
			maxLen = 0;
		
		for( var i = 0; i < len; i ++ ) {
			//遇到左括号，压栈
			if(str.charAt(i) == '(') {
				stack.push({
					index:i,
					symble:'('
				});
			} else {
				//遇到右括号
				//如果当前栈顶是左括号，则消去并计算长度
				if(stack.length && stack[stack.length-1].symble =='(') {
					var currLen = 0;
					stack.pop();
					//可以确保 减去一些无效的i(比如前面的')')
					if(!stack.length) {
						currLen = i + 1;
					} else {
						
						currLen = i - stack[stack.length-1].index;
					}
					maxLen = Math.max(maxLen,currLen);
				} else {
					//否则栈顶是右括号或者是空栈，则将右括号也push进栈，它的坐标将方便之后计算长度
					stack.push({
						index:i,
						symble:')'
					});
				}
			}
		}
		return maxLen;
	};
	
	/**
	 * @description longestValidParentheses
	 * #替换法
	 * @param {string} str
 	 * @return {number}
	 */
	exports.longestValidParentheses2 = function(str) {
		if(!str) {
			return 0;
		}
		var len = str.length,
			maxLen = 0;
		str = replaceWithSpecialC(str);
		var currLen = 0;
		for( var i = 0; i < len; i ++ ) {
			var tmp = str.charAt(i);
			if(tmp == '#') {
				currLen ++;
				maxLen = Math.max(maxLen,currLen);
			} else {
				
				currLen = 0;
			}
		}
		return maxLen;
	};
	function replaceWithSpecialC(str) {
		var len = str.length;
		var isChange = false;
		for( var i = 1; i < len; i ++ ) {
			var start = str.charAt(i-1);
			if(start != '(') {
				continue
			}
			for( var j = i; j < len; j ++ ) {
				var tmp = str.charAt(j);
				if(tmp == '#') {
					//特殊字符，不算
					continue;
				} else if(tmp == ')') {
					//替换(和)为#  i-1被替换了
					str = str.substring(0,i-1) + '#' + str.substring(i);
					//替换)  j
					str = str.substring(0,j) + '#' + str.substring(j+1);
					isChange = true;
					//需要主动跳出
					break;
				} else {
					//否则，非法字符，跳出循环
					break;
				}
			}
		}
		if(isChange) {
			return replaceWithSpecialC(str);
		} else {
			return str;
		}
	}
	
	/**
	 * @description longestValidParentheses
	 * 动态规划法
	 * @param {string} str
 	 * @return {number}
	 */
	exports.longestValidParentheses3 = function(str) {
		if(!str) {
			return 0;
		}
		var len = str.length,
			maxLen = 0,
			dp = [];
		for( var i = len -2 ; i >= 0; i -- ) {
			if(str.charAt(i)=='(') {
				var end = i + (dp[i+1]||0) +1;
				if(end < len && str.charAt(end)==')') {
					dp[i] = (dp[i+1]||0) +2;
					if(end + 1 < len) {
						dp[i] += (dp[end +1]||0);
					}
				}
			}
			maxLen = Math.max(maxLen,(dp[i]||0));
		}
		return maxLen;
	};
})(window.LeetCode = window.LeetCode || {});