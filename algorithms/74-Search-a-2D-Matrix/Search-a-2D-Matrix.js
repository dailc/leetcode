/**
 *
 * 作者: dailc
 * 时间: 2017-04-18
 * 描述: Search-a-2D-Matrix
 * 
 * 来自: https://leetcode.com/problems/search-a-2d-matrix
 */
(function(exports) {

	/**
	 * @description searchMatrix
	 * @param {number[][]} matrix
 	 * @param {number} target
 	 * @return {boolean}
	 */
	exports.searchMatrix = function(matrix, target) {
		if(!matrix||!matrix[0]) {
			return false;
		}
		//判断一个特殊情况1个元素的时候
		if(matrix[0][0]==target) {
			return true;
		}
		//每一行的长度，用来计算当前的行和列
		var perRowLen = matrix[0].length;
		var len = matrix.length;
		//计算一共有多少个元素
		var right = perRowLen*len-1;
		var left = 0;
		
		while(left <= right) {
			//需要+1，确保可以达到right
			var midIndex = Math.floor((right+left+1)/2);
			var mid = matrix[Math.floor(midIndex/perRowLen)][midIndex%perRowLen];
			if(mid == target) {
				return true;
			} else if(mid > target) {
				right = midIndex-1;
			} else {
				left = midIndex+1;
			}
		}
		
		
		return false;
		
	};
	
	
	
	
})(window.LeetCode = window.LeetCode || {});