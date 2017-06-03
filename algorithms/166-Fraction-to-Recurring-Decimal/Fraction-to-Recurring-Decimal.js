/* 作者: dailc
 * 时间: 2017-06-03
 * 描述: Fraction-to-Recurring-Decimal
 * 
 * 来自: https://leetcode.com/problems/fraction-to-recurring-decimal
 */
(function(exports) {

	/**
	 * @description fractionToDecimal
	 * @param {number} numerator
 	 * @param {number} denominator
 	 * @return {string}
	 */
	LeetCode.fractionToDecimal = function(numerator, denominator) {
		if (numerator == 0) {
			return "0";
		}
        if (denominator == 0) {
        	return "";
        }
        var ans = '';
        
        // 如果结果为负数
        if( (numerator < 0) ^ (denominator < 0) ) {
        	ans += "-";  
        }
        
        // 下面要把两个数都转为正数，JS中不会出现整形溢出问题
        var num = Math.abs(numerator);
        var den = Math.abs(denominator);
        
        // 结果的整数部分
        var res = Math.floor(num / den);
        ans += res;
        
        // 如果能够整除，返回结果  
        var rem = (num % den) * 10;
        if(rem == 0) {
        	return ans;
        }
        
        // 结果的小数部分  
        var map = {};
        ans += '.';
        
        while(rem != 0) {
        	// 如果前面已经出现过该余数，那么将会开始循环  
        	if(map[rem]) {
        		// 循环体开始的位置  
        		var beg = map[rem];
        		var part1 = ans.substring(0, beg);
        		var part2 = ans.substring(beg, ans.length);
        		ans = part1 + '(' + part2 + ')';
        		return ans;
        	} else {
        		// 继续往下除
        		map[rem] = ans.length;
        		res = Math.floor(rem / den);
        		ans += res;
        		rem = (rem  % den) * 10;
        	}
        }
        return ans;
	};
	
	
	
})(window.LeetCode = window.LeetCode || {});