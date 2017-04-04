/**
 * 作者: dailc
 * 时间: 2017-03-15
 * 描述: Container-With-Most-Water
 * 
 * 来自:https://leetcode.com/problems/container-with-most-water
 */
(function(exports) {

	/**
	 * @description 
	 * a1，...,an 找到  两条线，使的他们组成的梯形的面积最大
	 * 最简单的思路是遍历所有的可能面积，(注意不是求梯形的面积，而是那个最小的矩形)然后进行计算比较
	 * 但是得注意尽量避免重复计算
	 * 这个是最原始的算法,这个算法遇到大数时会超时
	 * @param {Number[]} arr
	 * @return {Number} 返回最大面积
	 */
	exports.maxArea2 = function(arr) {
		if(!arr||arr.length<2) {
			return -1;
		}
		var len = arr.length;
		var maxArea = 0;
		for(var i=0;i<len;i++) {
			for(var j=i+1;j<len;j++) {
				//先求出矩形，
				maxArea = Math.max(maxArea,(j-i)*Math.min(arr[j],arr[i]));
			}
		}
		
		return maxArea;
		
	};
	
	/**
	 * @description 0(N)的算法，从两侧向中间合并
	 * @param {Object} arr
	 */
	exports.maxArea = function(arr) {
		if(!arr||arr.length<2) {
			return -1;
		}
		var len = arr.length;
		var maxArea = 0,
			left = 0,
			right = len - 1;
		
		while(left<right) {
			maxArea = Math.max(maxArea,(right-left)*Math.min(arr[left],arr[right]));
			// 只会去掉一条比较小的边
			if(arr[right] > arr[left]) {
				left ++;
			} else {
				right --;
			}
		}
		
		return maxArea;
		
	};

})(window.LeetCode = window.LeetCode || {});