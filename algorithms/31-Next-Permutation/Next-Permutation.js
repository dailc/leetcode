/**
 * 作者: dailc
 * 时间: 2017-03-31
 * 描述: Next-Permutation
 * 
 * 来自: https://leetcode.com/problems/next-permutation
 */
(function(exports) {

	/**
	 * @description Next-Permutation
	 * @param {number[]} nums
 	 * @return {void} Do not return anything, modify nums in-place instead.
	 */
	exports.nextPermutation = function(nums) {
		if(!nums) {
			return ;
		}
		var len = nums.length,
			index = 0; //需要反转的开始位置
		//从右到做找增序
		for( var i = len-1; i > 0; i -- ) {
			if(nums[i-1] < nums[i]) {
				//交换当前序列中刚好大于它的
				
				for( var j = len - 1; j >= i - 1; j -- ) {
					if(nums[j] > nums[i-1]) {
						//交换顺序
						var tmp = nums[j];
						nums[j] = nums[i-1];
						nums[i-1] = tmp;
						break;
					}
				}
				//记住需要开始反转的位置
				index = i;
				break;
			}
		}
		
		//反转数组,反转从index到len的所有元素，双指针
		var left = i,
			right = len -1;
		while(left < right) {
			var tmp = nums[left];
			nums[left] = nums[right];
			nums[right] = tmp;
			left ++;
			right --;
		}
		
	};


})(window.LeetCode = window.LeetCode || {});