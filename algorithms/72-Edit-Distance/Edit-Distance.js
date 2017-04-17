/**
 * 作者: dailc
 * 时间: 2017-04-17
 * 描述: Edit-Distance
 * 
 * 来自: https://leetcode.com/problems/edit-distance
 */
(function(exports) {

	/**
	 * @description minDistance
	 * @param {string} word1
 	 * @param {string} word2
 	 * @return {number}
	 */
	exports.minDistance = function(word1, word2) {
		if(!word1&&!word2) {
			return 0;
		} else if(!word1&&word2) {
			return word2.length;
		} else if(!word2&&word1) {
			return word1.length;
		}
		var len1 = word1.length;
		var len2 = word2.length;
		var distance = [];
		//初始化
		for( var i = 0; i <= len1; i ++ ) {
			distance[i] = [];
			distance[i][0] = i;
		}
		for( var i = 0; i <= len2; i ++ ) {
			distance[0][i] = i;
		}
		
		for( var i = 1; i <= len1; i ++ ) {
			for( var j = 1; j <= len2; j ++ ) {
				//注意distance的数组长度 要 多1
				if(word1.charAt(i-1)==word2.charAt(j-1)) {
					distance[i][j] = distance[i-1][j-1];  
				} else {
					distance[i][j] = Math.min(distance[i-1][j],distance[i][j-1],distance[i-1][j-1])+1;  
				}
			}
		}
		
		return distance[len1][len2];
		
	};
	
	
	
})(window.LeetCode = window.LeetCode || {});