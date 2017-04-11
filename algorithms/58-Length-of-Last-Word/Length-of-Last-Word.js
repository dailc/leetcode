/**
 * 作者: dailc
 * 时间: 2017-04-11
 * 描述: Insert-Interval
 * 
 * 来自: https://leetcode.com/problems/length-of-last-word
 */
(function(exports) {
	
	
	/**
	 * @description lengthOfLastWord
	 * @param {string} s
 	 * @return {number}
	 */
	exports.lengthOfLastWord = function(str) {
		if(!str) {
			return 0;
		}
		var len = str.length;
		var count = 0,
			isStart = false;
		for( var i = len -1; i >=0; i--) {
			var tmp = str.charAt(i);
			if(!isStart&&tmp!= ' ') {
				isStart = true;
				count ++;
			} else if(isStart) {
				if(tmp!= ' ') {
					count ++;
				} else {
					return count;
				}
			}
		}
		
		return count;
	};
	
	

})(window.LeetCode = window.LeetCode || {});