/**
 * 作者: dailc
 * 时间: 2017-04-14
 * 描述: Valid-Number
 * 
 * 来自: https://leetcode.com/problems/minimum-path-sum
 */
(function(exports) {

	/**
	 * @description isNumber
	 * @param {string} s
	 * @return {boolean}
	 */
	exports.isNumber = function(str) {
		if(!str) {
			return false;
		}
		//去除空格
		str= str.trim();
		var index = 0,
			len = str.length,
			isNum = false,
			isDecimal = false,
			isExponential = false,
			isExponentialSymbol = false;
		if(str.charAt(index) == '+' || str.charAt(index) == '-') {
			index++;
		}
		while(index < len) {
			var tmp = str.charAt(index);
			if(!isExponential && !isDecimal && tmp == '.') {
				//e后面不能跟小数
				isDecimal = true;
				index++;
			} else if(tmp >= '0' && tmp <= '9') {
				isNum = true;
				index++;
			} else if(!isExponential && (tmp == 'e' || tmp == 'E')) {
				//如果不是末尾，否则  如12e 不是正确的
				//而且也不能是开始 e9也是错误的
				if(index>0 &&index < len - 1) {
					if(index == 1 && (str.charAt(0)=='+'||str.charAt(0)=='-')) {
						return false;
					}
					//排除 .e1这种情况
					if(str.charAt(index-1)=='.'&&index-1==0) {
						return false;
					}
					//指数部分
					isExponential = true;
					index++;
				} else {
					return false;
				}

			} else if(isExponential && !isExponentialSymbol) {
				//如果已经是指数了，可以跟一个符号,前提是不能e+  而是的e+1
				if((tmp == '+' || tmp == '-') &&
					(index + 1 < len && (str.charAt(index + 1) >= '0' && str.charAt(index + 1) <= '9')) &&
					(str.charAt(index - 1) == 'e' || str.charAt(index - 1) == 'E')) {
					isExponentialSymbol = true;
					index++;
				} else {
					return false;
				}
			} else {
				//直接错误
				return false;
			}
		}

		return isNum;
	};
	
	/**
	 * @description 有限状态机,游戏AI算法常用到
	 * @param {String} str 
	 */
	exports.isNumber2 = function(str) {
		if(!str) {
			return false;
		}
		//定义状态，c++中的枚举
		var INVALID = 0;
		var SPACE = 1;
		var SIGN = 2;
		var DIGIT = 3;
		var DOT = 4;
		var EXPONENT = 5;
		var NUM_INPUTS = 6;
		//有8个state
		//转换表
		var transitionTable = [
			[-1,  0,  3,  1,  2, -1], //0 
			[ -1,  8, -1,  1,  4, 5], //1
			[-1, -1, -1,  4, -1, -1], //2
			[-1, -1, -1,  1,  2, -1], //3
			[-1,  8, -1,  4, -1,  5], //4
			[ -1, -1,  6, 7, -1, -1], //5
			[-1, -1, -1,  7, -1, -1], //6
			[-1,  8, -1,  7, -1, -1], //7
			[-1,  8, -1, -1, -1, -1]  //8
		];
		
		var state = 0;
		var index = 0,
			len = str.length;
		while(index < len) {
			var tmp = str.charAt(index);
			var inputType = INVALID;
			if(tmp == ' ') {
				inputType = SPACE;
			} else if(tmp == '+'|| tmp == '-') {
				inputType = SIGN;
			} else if(tmp >= '0'&& tmp <= '9') {
				inputType = DIGIT;
			} else if(tmp == '.') {
				inputType = DOT;
			} else if(tmp == 'e' || tmp == 'E') {
				inputType = EXPONENT;
			}
			state = transitionTable[state][inputType];
			if(state == -1) {
				return false;
			} else {
				index ++;
			}
		}
		
		return state == 1 || state == 4 || state == 7 || state == 8;
		
	};
})(window.LeetCode = window.LeetCode || {});