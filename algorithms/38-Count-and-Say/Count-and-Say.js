/**
 * 作者: dailc
 * 时间: 2017-04-03
 * 描述: Count-and-Say
 * 
 * 来自: https://leetcode.com/problems/count-and-say
 */
(function(exports) {

	/**
	 * @description countAndSay
	 * @param {number} n
 	 * @return {string}
	 */
	exports.countAndSay = function(n) {
		if(n<1) {
			return '';
		}
		if(n==1) {
			return '1';
		}
		var tmp = exports.countAndSay(n-1);
		//处理result
		var len = tmp.length;
		var last = tmp.charAt(0);
		var count = 1;
		var result = '';
		for( var k = 1; k < len; k ++ ) {
			if(tmp.charAt(k)==last) {
				count ++;
				continue;
			}
			result += count+''+last;
			last = tmp.charAt(k);
			count = 1;
		}
		result += count+''+last;
		
		return result;
	};
	
	
	exports.countAndSay2 = function(n) {
		var result = '1';
		var i = 1;
		while(i<n) {
			result = countAndSayForOneString(result);
			i++;
		}
		return result;
	};
	
	function countAndSayForOneString(tmp){
		//处理result
		var len = tmp.length;
		var last = tmp.charAt(0);
		var count = 1;
		var result = '';
		for( var k = 1; k < len; k ++ ) {
			if(tmp.charAt(k)==last) {
				count ++;
				continue;
			}
			result += count+''+last;
			last = tmp.charAt(k);
			count = 1;
		}
		result += count+''+last;
		
		return result;
	}

	
})(window.LeetCode = window.LeetCode || {});