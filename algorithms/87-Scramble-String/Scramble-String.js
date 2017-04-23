/* 作者: dailc
 * 时间: 2017-04-23
 * 描述: Scramble-String
 * 
 * 来自: https://leetcode.com/problems/scramble-string
 */
(function(exports) {

	/**
	 * @description isScramble
	 * @param {string} s1
 	 * @param {string} s2
 	 * @return {boolean}
	 */
	exports.isScramble = function(s1,s2) {
		return isScramble(s1,s2);
	};
	
	function isScramble(s1,s2) {
		if(!s1||!s2||s1.length!=s2.length) {
			return false;
		}
		if(s1==s2) {
			return true;
		}
		var charArray1 = s1.split('');
		var charArray2 = s2.split('');
		charArray1.sort();
		charArray2.sort();
		if(charArray1.join('')!=charArray2.join('')) {
			return false;
		}
		var len = s1.length;
		for( var i = 1; i < len; i ++ ) {
			if (isScramble(s1.substring(0, i), s2.substring(0, i)) && isScramble(s1.substring(i), s2.substring(i))) {
				return true;
			}
            if (isScramble(s1.substring(0, i), s2.substring(len - i)) && isScramble(s1.substring(i), s2.substring(0, len - i))) {
            	return true;
            }
		}
		return false;
	}
	
	exports.isScramble2 = function(s1,s2) {
		if(!s1||!s2||s1.length!=s2.length) {
			return false;
		}
		if(s1==s2) {
			return true;
		}
		var c1 = s1.split('');
		var c2 = s2.split('');
		var len = s1.length;
		var result = [];
		for( var i = 0; i < len; i ++ ) {
			result[i] = [];
			for( var j = 0; j < len; j ++ ) {
				result[i][j] = [];
				for( var k = 0; k < len; k ++ ) {
					//result[i][j][k] = false;
				}
			}
		}
		
		for( var i = 0; i < len; i ++ ) {
			for( var j = 0; j < len; j ++ ) {
				result[0][i][j] = (c1[i]==c2[j]);
			}
		}
		
		for( var k = 2; k <= len; k ++ ) {
			for( var i = len - k; i >= 0; i -- ) {
				for( var j = len - k; j >= 0; j -- ) {
					var r = false;
					for( var m = 1; m < k && !r; m++) {
						r = (result[m-1][i][j] && result[k-m-1][i+m][j+m]) 
						|| (result[m-1][i][j+k-m] && result[k-m-1][i+m][j]);
					}
					result[k-1][i][j] = r;
				}
			}
		}
		//console.log(result[len-1][0][0]+','+JSON.stringify(result));
		return result[len-1][0][0]
	};
	
	
	

	
})(window.LeetCode = window.LeetCode || {});