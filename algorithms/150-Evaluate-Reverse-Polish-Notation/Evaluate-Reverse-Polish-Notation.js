/* 作者: dailc
 * 时间: 2017-05-28
 * 描述: Evaluate-Reverse-Polish-Notation
 * 
 * 来自: https://leetcode.com/problems/evaluate-reverse-polish-notation
 */
(function(exports) {

	/**
	 * @description evalRPN
	 * @param {string[]} tokens
	 * @return {number}
	 */
	LeetCode.evalRPN = function(tokens) {
		return evalRPNRecurse(tokens);
	}

	function evalRPNRecurse(tokens) {
		if(!tokens || !tokens[0]) {
			return 0;
		}
		var chars = tokens[tokens.length - 1];
		if(!isOperator(chars)) {
			// 目前暂时认为不是操作符就是整数
			return parseInt(tokens.pop());
		}
		var operator = tokens.pop();
		var element2 = evalRPNRecurse(tokens);
		var element1 = evalRPNRecurse(tokens);

		return evalExpresstion(element1, operator, element2);
		
	}

	function isOperator(chars) {
		if(chars == '+' ||
			chars == '-' ||
			chars == '*' ||
			chars == '/') {
			return true;
		} else {
			return false;
		}
	}
	
	function evalExpresstion(element1, operator, element2) {
		//console.log(element1+operator+element2);
		// 目前不使用直接的eval, 注意传进来的要当字符串处理，操作符的优先级需要注意
		element1 = parseInt(element1);
		element2 = parseInt(element2);
		
		if(operator === '/') {
			// 最后别用Math.floor，因为对于-0.xx会有误差， 这个最后只用于正数
			return parseInt(element1 / element2);
		} else if(operator === '*') {
			return element1 * element2;
		}  else if(operator === '-') {
			return element1 - element2;
		} else {
			return element1 + element2;
		} 
	}

})(window.LeetCode = window.LeetCode || {});