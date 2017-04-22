/**
 * 作者: dailc
 * 时间: 2017-04-22
 * 描述: Maximal-Rectangle
 * 
 * 来自: https://leetcode.com/problems/maximal-rectangle
 */
(function(exports) {

	/**
	 * @description maximalRectangle
	 * @param {character[][]} matrix
 	 * @return {number}
	 */
	exports.maximalRectangle = function(matrix) {
		if(!matrix||!matrix[0]) {
			return 0;
		}
		//高度数组，二维数组，每行分别进行计算
		var height = [];
		var maxArea = 0,
			rows = matrix.length,
			cols = matrix[0].length;
		
		for( var i = 0; i < rows; i ++ ) {
			height[i] = [];
			for( var j = 0; j < cols; j ++ ) {
				if(matrix[i][j]=='0') {
					height[i][j] = 0;
				} else {
					height[i][j] = i==0?1:height[i-1][j]+1;
				}
			}
		}
		for( var i = 0; i < rows; i ++ ) {
			var area = largestRectangleArea(height[i]);
			maxArea = Math.max(maxArea,area);
		}
		
		return maxArea;
	};
	
	function largestRectangleArea(heights) {
		if(!heights) {
			return 0;
		}
		//push -1 用来自动合并
		heights.push(-1);
		var stack = [];
		var sum = 0;
		for( var i = 0, len = heights.length; i < len; i ++ ) {
			if(stack.length==0||heights[i]>=heights[stack[stack.length-1]]) {
				stack.push(i);
			} else {
				//譬如 先算  6 再算  5*2 再算  1*3
				var tmp = stack.pop();
				sum = Math.max(sum,heights[tmp]*(stack.length==0?i:i-stack[stack.length-1]-1));
				i --;
			}
			
		}
		return sum;
	};
	
})(window.LeetCode = window.LeetCode || {});