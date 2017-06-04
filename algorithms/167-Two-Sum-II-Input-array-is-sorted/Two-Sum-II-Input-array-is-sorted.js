/* 作者: dailc
 * 时间: 2017-06-04
 * 描述: Two-Sum-II-Input-array-is-sorted
 * 
 * 来自: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 */
(function(exports) {

	/**
	 * @description twoSum
	 * @param {number[]} numbers
 	 * @param {number} target
 	 * @return {number[]}
	 */
	LeetCode.twoSum = function(numbers, target) {
		if(!numbers) {
			return [];
		}
		var len = numbers.length,
			left = 0,
			right = len-1;
		while(left < right){
       		if(numbers[left] + numbers[right] == target) {
       			return [left + 1, right + 1];
       		} else if(numbers[left] + numbers[right] > target) {
       			right --;
       		} else {
       			left ++;
       		}
      	}
		
		// 如果一直没有找到
		return [];
	};
	
	
	
})(window.LeetCode = window.LeetCode || {});