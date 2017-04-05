/**
 * 作者: dailc
 * 时间: 2017-04-05
 * 描述: Trapping-Rain-Water
 * 
 * 来自: https://leetcode.com/problems/trapping-rain-water
 */
(function(exports) {

	/**
	 * @description trap
	 * O(N) O(1)
	 * @param {number[]} height
 	 * @return {number}
	 */
	exports.trap = function(height) {
		if(!height) {
			return 0;
		}
		var max = height[0],
			maxIndex = 0,
			len = height.length;
		//找最高点
		for( var i = 1; i　<　len; i ++ ) {
			if(height[i]>max) {
				max = height[i];
				maxIndex = i;
			}
		}
		
		var area = 0,
			current = height[0];
			
		//从左到max 计算面积
		for( var i = 0; i < maxIndex; i ++ ) {
			if(current<=height[i]) {
				//当前位置往前
				current = height[i];
			} else {
				//小于current 代表当前与max之间有水,加上对应高度
				area += current - height[i];
			}
		}
		
		//从右到max 计算面积
		current = height[len -1];
		for( var i = len - 1; i > maxIndex; i -- ) {
			if(current<=height[i]) {
				//当前位置往前
				current = height[i];
			} else {
				//小于current 代表当前与max之间有水,加上对应高度
				area += current - height[i];
			}
		}
		return area;
	};
	
	
})(window.LeetCode = window.LeetCode || {});