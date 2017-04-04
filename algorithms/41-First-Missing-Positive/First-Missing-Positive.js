/**
 * 作者: dailc
 * 时间: 2017-04-04
 * 描述: First-Missing-Positive
 * 
 * 来自: https://leetcode.com/problems/first-missing-positive
 */
(function(exports) {

	/**
	 * @description firstMissingPositive
	 * @param {number[]} nums
 	 * @return {number}
	 */
	exports.firstMissingPositive = function(nums) {
		if(!nums) {
			return 1;
		}
		nums.sort(function(a,b){
			return a-b;
		});
		var target = 1,
			len = nums.length;
		for( var i = 0; i < len; i ++ ) {
			if(nums[i]<0) {
				continue;
			}
			if(nums[i]==target) {
				//重置
				target ++;
			} else if(nums[i]>target) {
				return target;
			}
			
		}
		
		return target;
		
	};
	
	//不能使用排序，因为排序复杂度大于O(N)
	exports.firstMissingPositive2 = function(nums) {
		if(!nums || nums.length < 1) {
			return 1;
		}
		var len = nums.length;
		//把正数nums[i]放到nums[i]-1个位置上
		for( var i = 0; i < len; i ++ ) {
			//这里需要多次交换
			while( nums[i] > 0 && nums[i] != i+1 && nums[i]-1 < len && nums[nums[i]-1]!=nums[i] )  {
				var tmp = nums[nums[i]-1];
				nums[nums[i]-1] = nums[i];
				nums[i] = tmp;
			}
		}
		for( var i = 0; i < len; i ++ ) {
			if(nums[i] != i + 1 ) {
				return i+1;
			}
		}
		
		return len+1;
	};
	
	
})(window.LeetCode = window.LeetCode || {});