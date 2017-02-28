/**
 * 作者: dailc
 * 时间: 2017-02-28
 * 描述: palindromer-number
 * 
 * 来自:https://leetcode.com/problems/palindrome-number
 */
(function(exports) {
	
	/**
	 * @description 
	 * 判断一个整数是否是回文数，不允许使用额外空间
	 * 
	 * 方法一: 数字反转  考虑溢出
	 * 目前以c语言中整形最大数数为溢出范围(纯JS可以用isNaN()判断是否无穷大)
	 * @param {String} number
	 * @return {Boolean} 
	 */
	exports.isPalindrome = function(number) {
		if(number<0) {
			return false;
		}
		var maxNumber = Math.pow(2, 31) - 1;
		var tmp = number,res=0;
		while(tmp) {
			res = res*10 + tmp%10;
			if(res>maxNumber||isNaN(res)) {
				return false;
			}
			tmp = parseInt(tmp/10);
		}
		return number==res;
	};
	
	//思路2，从两头依次取数值比较
	exports.isPalindrome2 = function(number) {
		if(number<0) {
			return false;
		}
		//取出位数
		var len = 1;
		while(number/len>=10) {
			len *=10;
		}
		while(number!=0) {
			var left = parseInt(number/len);
			var right = number%10;
			if(left!=right) {
				return false;
			}
			//移除头部和尾部数据  如 12321 变为  232
			number = parseInt((number%len)/10);
			len /= 100;
		}
		return true;
	};
	

})(window.LeetCode = window.LeetCode || {});