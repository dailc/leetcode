/**
 * 作者: dailc
 * 时间: 2017-01-23
 * 描述: Reverse-Integer
 * 
 * 整数反转，如 123->321 -123->-321
 * 数值溢出需要返回0，但js中数值溢出几乎不存在
 * 所以需要模拟(32位的整数)
 * 
 * 来自:https://leetcode.com/problems/reverse-integer/
 */
(function(exports) {
	
	/**
	 * @description 
	 * 最简单解法
	 * @param {Number} x 目标整数
	 * @return {Number} 
	 */
	exports.reverse = function(x) {
		var maxNumber = Math.pow(2, 31) - 1;
		//正数还是负数
		var s = x>0?x.toString():x.toString().substring(1);
		var arr = s.split('');
		arr.reverse();
		s = arr.join('');
		s = x<0?'-'+s:s;
		s = Number(s);
		return s>maxNumber||s<-maxNumber?0:s;
	};
	/**
	 * @description 
	 * 使用纯数字解
	 * @param {Number} x 目标整数
	 * @return {Number} 
	 */
	exports.reverse2 = function(x) {
		var maxNumber = Math.pow(2, 31) - 1;
		//正数还是负数
		var symbol = x<0?-1:1;
		var nTmp = [],tmp = Math.abs(x);
		while (tmp>=10) {
			nTmp.push(tmp%10);
			tmp = parseInt(tmp/10);
		}
		nTmp.push(tmp);
		var result = 0;
		for(var len = nTmp.length,i=len-1,carry = 1;i>=0;i--) {
			result += carry*nTmp[i];
			carry *= 10;
		}
		result = result*symbol;
		return result>maxNumber||result<-maxNumber?0:result;
	};
	
	/**
	 * @description 
	 * 简化过后的远算
	 * @param {Number} x 目标整数
	 * @return {Number} 
	 */
	exports.reverse3 = function(x) {
		var maxNumber = Math.pow(2, 31) - 1;
		var result = 0;
		while (x!==0) {
			var tail = x % 10;
			var newResult = result * 10 + tail;
//			if((newResult - tail) / 10 !== result) {
//				//一种判断溢出的方法
//				return 0;
//			}
			result = newResult;
			x = parseInt(x / 10);
		}
		return result>maxNumber||result<-maxNumber?0:result;
	};
	

})(window.LeetCode = window.LeetCode || {});