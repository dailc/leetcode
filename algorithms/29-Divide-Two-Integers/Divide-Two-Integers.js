/**
 * 作者: dailc
 * 时间: 2017-03-29
 * 描述: Divide-Two-Integers
 * 
 * 来自: https://leetcode.com/problems/divide-two-integers
 */
(function(exports) {

	/**
	 * @description divide
	 * @param {number} dividend
 	 * @param {number} divisor
 	 * @return {number}
	 */
	exports.divide = function(dividend, divisor) {
		
		var MAX_INT = Math.pow(2,31) - 1;
		var MIN_INT = - Math.pow(2,31);
		
		if(divisor == 0) {
			return MAX_INT;
		}
		
		var result = 0;
		var symble = dividend*divisor > 0 ? 1: -1;
		divisor = Math.abs(divisor);
		dividend = Math.abs(dividend);
		if(divisor == 1) {
			result = dividend;
		}else {
			while(dividend >= divisor) {
				dividend -= divisor;
				result++; 
			}
		}
		result = symble*result;
		if(result > MAX_INT) {
			result = MAX_INT;
		} else if(result < MIN_INT) {
			result = MIN_INT;
		}
		
		return result;
		
	};
	
	/**
	 * @description divide
	 * @param {number} dividend
 	 * @param {number} divisor
 	 * @return {number}
	 */
	exports.divide2 = function(dividend, divisor) {
		
		var MAX_INT = Math.pow(2,31) - 1;
		var MIN_INT = - Math.pow(2,31);
		
		if(divisor == 0) {
			return MAX_INT;
		}

		var symble = dividend*divisor > 0 ? 1: -1;
		divisor = Math.abs(divisor);
		dividend = Math.abs(dividend);
		var result = 0;
		if(divisor == 1) {
			result = dividend;
		} else {
			//如果除数为非0的偶数
			while(dividend >= divisor) {
				var tmp = divisor,
					mutiple = 1;
				while(dividend >= (tmp << 1)&&(tmp << 1)>0) {
					
					tmp <<= 1;
					mutiple <<= 1;
				}
				//计算
				dividend -= tmp;
				result += mutiple;
			}
		}
		
		
		result = symble*result;
		if(result > MAX_INT) {
			result = MAX_INT;
		} else if(result < MIN_INT) {
			result = MIN_INT;
		}
		
		return result;
		
	};
	
	/**
	 * @description divide
	 * @param {number} dividend
 	 * @param {number} divisor
 	 * @return {number}
	 */
	exports.divide3 = function(dividend, divisor) {
		
		var MAX_INT = Math.pow(2,31) - 1;
		var MIN_INT = - Math.pow(2,31);
		
		if(divisor == 0) {
			return MAX_INT;
		}

		var symble = dividend*divisor > 0 ? 1: -1;
		divisor = Math.abs(divisor);
		dividend = Math.abs(dividend);
		var result = 0;
		if(divisor == 1) {
			result = dividend;
		} else {
			var tmp = divisor,
				mutiple = 1;
			//先得到最大偶数  ,要防止左移时溢出
			while(dividend >= tmp&&((tmp << 1)>0)) {
				tmp <<= 1;
				mutiple <<= 1;
			}
			//然后得到尽可能大的整除数
			while(dividend >= divisor) {
				while(dividend >= tmp) {
					dividend -= tmp;
					result += mutiple;
				}
				//计算 右移
				tmp >>= 1;
				mutiple >>= 1;
				if(!mutiple&1||!tmp&1) {
					break;
				}
			}
		}
		
		result = symble*result;
		if(result > MAX_INT) {
			result = MAX_INT;
		} else if(result < MIN_INT) {
			result = MIN_INT;
		}
		
		return result;
		
	};
	
	
	
	

})(window.LeetCode = window.LeetCode || {});