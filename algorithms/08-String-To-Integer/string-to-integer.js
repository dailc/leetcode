/**
 * 作者: dailc
 * 时间: 2017-01-23
 * 描述: string-to-integer
 * 
 * 来自:https://leetcode.com/problems/string-to-integer-atoi/
 */
(function(exports) {
	
	/**
	 * @description 
	 * 字符串转为数字 考虑所有情况
	 * -22knjn  结果为-2
	 * -+22上述  为无效转换
	 * 只转为整数
	 * 
	 * 这个函数没有考虑任何性能与优化
	 * @param {String} str
	 * @return {Number} 
	 */
	exports.myAtoi = function(str) {
		if(typeof str !== 'string'||!str) {
			return 0;
		}
		str = str.trim();
		var MAX_VALUE = 2147483647;
		var MIN_VALUE = -2147483648;
		//存放数字的数组
		var numberArray = [];
		var symbol = 1;
		var isStart = false;
		for(var i=0,len = str.length;i<len;i++) {
			var tmp = str.charAt(i);
			var regNum = /[0-9]/g;
			//没有装入时才允许有符号
			if(!isStart) {
				if(tmp === '-'||tmp === '+') {
					isStart= true;
					symbol = tmp === '-'?-1:1;
				} else if(tmp.match(regNum)) {
					isStart= true;
					numberArray.push(tmp);
				} else {
					return 0;
				}
			} else{
				if(tmp.match(regNum)) {
					numberArray.push(tmp);
				} else {
					break;
				}
			}
		}
		var num = symbol * (parseInt(numberArray.join('')||0));
		if(num > MAX_VALUE) {
			num = MAX_VALUE;
		} else if(num < MIN_VALUE) {
			num = MIN_VALUE;
		} 
		return num;
	};
	
	/**
	 * @description 经过一次优化后的
	 * @param {String} str
	 */
	exports.myAtoi2 = function(str) {
		if(typeof str !== 'string'||!str) {
			return 0;
		}
		str = str.trim();
		var MAX_VALUE = 2147483647;
		var MIN_VALUE = -2147483648;
		//存放数字的数组
		var result = 0;
		var symbol = 1;
		var isStart = false;
		for(var i=0,len = str.length;i<len;i++) {
			var tmp = str.charAt(i);
			var regNum = /[0-9]/g;
			//没有装入时才允许有符号
			if(!isStart) {
				if(tmp === '-'||tmp === '+') {
					isStart= true;
					symbol = tmp === '-'?-1:1;
				} else if(tmp.match(regNum)) {
					isStart= true;
					result = result*10 + parseInt(tmp);
				} else {
					return 0;
				}
			} else{
				if(tmp.match(regNum)) {
					result = result*10 + parseInt(tmp);
				} else {
					break;
				}
			}
		}
		var num = symbol * result;
		if(num > MAX_VALUE) {
			num = MAX_VALUE;
		} else if(num < MIN_VALUE) {
			num = MIN_VALUE;
		} 
		return num;
	};
	
	/**
	 * @description 二次优化
	 * @param {String} str
	 */
	exports.myAtoi3 = function(str) {
		if(typeof str !== 'string'||!str) {
			return 0;
		}
		str = str.trim();
		var MAX_VALUE = 2147483647;
		var MIN_VALUE = -2147483648;
		
		var symbol = 1;
		var result = 0;
		for(var i=0,len = str.length;i<len;i++) {
			var tmp = str.charAt(i);
			if(i===0&&(tmp === '-'||tmp === '+')) {
				symbol = tmp === '-'?-1:1;
			} else if(tmp >= '0' && tmp <= '9') {
				result = result*10 + parseInt(tmp);
			} else {
				break;
			}
		}
		var num = symbol * result;
		if(num > MAX_VALUE) {
			num = MAX_VALUE;
		} else if(num < MIN_VALUE) {
			num = MIN_VALUE;
		} 
		return num;
		
	};
	

})(window.LeetCode = window.LeetCode || {});