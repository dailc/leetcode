/**
 * 作者: dailc
 * 时间: 2017-03-20
 * 描述: roman-to-integer
 * 
 * 来自:https://leetcode.com/problems/roman-to-integer
 */
(function(exports) {

	/**
	 * @description 整形转为罗马数字
	 * @param {String} str
	 * @return {Number} 
	 * 
	 * 规则从前向后遍历罗马数字，如果某个数比前一个数小，则加上该数。反之，减去前一个数的两倍然后加上该数
	 * 因为如果左边的大于右边的，代表一个新的数字开始了
	 */
	exports.romanToInt = function(str) {
		if(!str) {
			return -1;
		}
		var result = toNumber(str.charAt(0));
		for(var i=1,len=str.length;i<len;i++) {
			if(toNumber(str.charAt(i-1))<toNumber(str.charAt(i))) {
				result += toNumber(str.charAt(i)) - 2* toNumber(str.charAt(i-1));
			} else {
				result += toNumber(str.charAt(i));
			}
		}
		return result;
		
	};
	
	function toNumber(ch) {
		switch (ch) {
			case 'I': return 1;  
            case 'V': return 5;  
            case 'X': return 10;  
            case 'L': return 50;  
            case 'C': return 100;  
            case 'D': return 500;  
            case 'M': return 1000;  
		}
		return 0;
	}
	
	

})(window.LeetCode = window.LeetCode || {});