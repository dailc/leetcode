/* 作者: dailc
 * 时间: 2017-04-25
 * 描述: Decode-Ways
 * 
 * 来自: https://leetcode.com/problems/decode-ways
 */
(function(exports) {

	/**
	 * @description numDecodings
	 * @param {string} s
 	 * @return {number}
	 */
	exports.numDecodings = function(s) {
		if(!s||s.charAt(0)=='0') {
			return 0;
		}
		var len = s.length;
		var number = [];
		number[0] = 1;
		number[1] = 1;
		
		for( var i = 2; i <= len; i ++ ) {
			//检查当前字符是不是'0'  
			var tmp = parseInt(s.substring(i-1,i));
			if(tmp!=0) {
				number[i] = number[i-1];  
			} else {
				number[i] = 0;
			}
			//检查当前字符和前一个字符组合在一起是否在1-26之间  
			if(s.charAt(i-2)!='0') {  
                tmp = parseInt(s.substring(i-2,i));  
                if(tmp>0&&tmp<=26) {  
                    number[i] += number[i-2];  
                }  
            }  
		}
		return number[len]
	};
	

	
	

	
})(window.LeetCode = window.LeetCode || {});