/**
 * 作者: dailc
 * 时间: 2017-04-22
 * 描述: Largest-Rectangle-in-Histogram
 * 
 * 来自: https://leetcode.com/problems/largest-rectangle-in-histogram
 */
(function(exports) {

	/**
	 * @description largestRectangleArea
	 * @param {number[]} heights
 	 * @return {number}
	 */
	exports.largestRectangleArea = function(heights) {
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