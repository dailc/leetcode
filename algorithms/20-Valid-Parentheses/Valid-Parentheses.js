/**
 * 作者: dailc
 * 时间: 2017-03-25
 * 描述: Valid-Parentheses
 * 
 * 来自: https://leetcode.com/problems/valid-parentheses
 */
(function(exports) {

	/**
	 * @param {string} str
 	 * @return {boolean}
	 */
	exports.isValid = function(str) {
		if(!str) {
			return true;
		}
		if(len&1) {
			//奇数
			return false;
		}
		var stack = [];
		
		var index = 0,
			len = str.length;
		while(index<len) {
			var tmp = str.charAt(index);
			var top = stack[0];
			var before = stack[stack.length-1];
			switch(tmp) {
				case '(':
					stack.push(tmp);
					break;
				case '[':
					stack.push(tmp);
					break;
				case '{':
					stack.push(tmp);
					break;
				case ')':
					if(top == '('||before== '(') {
						stack.pop();
					} else {
						return false;
					}
					break;
				case ']':
					if(top == '['||before== '[') {
						stack.pop();
					} else {
						return false;
					}
					break;
				case '}':
					if(top == '{'||before== '{') {
						stack.pop();
					} else {
						return false;
					}
					break;
				default:
					return false;
			}
			index ++;
		}
		if(stack.length) {
			return false;
		}
		return true;
		
	};
	
	/**
	 * @param {string} str
 	 * @return {boolean}
	 */
	exports.isValid2 = function(str) {
		if(!str) {
			return true;
		}
		var len = str.length;
		if(len&1) {
			//奇数
			return false;
		}
		for(var i = 1; i < len; i ++) {
			var before = str.charAt(i-1);
			var current = str.charAt(i);
			if((before == '{' && current == '}')
				||(before == '[' && current == ']')
				||(before == '(' && current == ')')
				) {
				var strNew = str.substr(0, i-1) + str.substr(i+1);  
				return exports.isValid2(strNew);  
			} 
		}
		return false;
	};
	
	

})(window.LeetCode = window.LeetCode || {});