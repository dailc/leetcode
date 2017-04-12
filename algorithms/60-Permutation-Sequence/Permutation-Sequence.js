/**
 * 作者: dailc
 * 时间: 2017-04-12
 * 描述: Permutation-Sequence
 * 
 * 来自: https://leetcode.com/problems/permutation-sequence
 */
(function(exports) {
	
	
	/**
	 * @description getPermutation
	 * @param {number} n
 	 * @param {number} k
 	 * @return {string}
	 */
	exports.getPermutation = function(n, k) {
		if(n<1||n>9) {
			return '';
		}
		var nums = [];
		for( var i = 0; i < n; i ++) {
			nums.push(i+1);
		}
		//默认就已经是一个排列了，所以计数+1
		var count = 1;
		var targetNums = nums.slice(0);
		var i,j,len = nums.length;
		while(true) {
			if(count == k) {
				return targetNums.join('');
			}
			for( i = len-2;i >=0;i--) {
				if(nums[i]<nums[i+1]) {
					break;
				}
			}
			if(i<=-1) {
				//如果找完了所有排列仍然没有找到
				return '';
			}
			for( j = len-1;j>i;j--) {
				if(nums[j]>nums[i]) {
					break;
				}
			}
			swap(nums,i,j);
			for(var kk = i+1; kk < Math.floor((i+1+len)/2);kk++) {
				swap(nums,kk,len-(kk-i));
			}
			count ++;
			targetNums = nums.slice(0);
			
		}
	};
	
	function swap(nums,i,j) {
		var tmp = nums[i];
		nums[i] = nums[j];
		nums[j] = tmp;
	}
	
	exports.getPermutation2 = function(n, k) {
		if(n<1||n>9||k<1) {
			return '';
		}
		k--;
		//计算n的阶乘
		var factorial  = 1;
		for( var i = 2; i < n; i ++) {
			factorial *= i;  
		}
		var nums = [];
		for( var i = 0; i < n; i ++) {
			nums.push(i+1);
		}
		var round = n -1;
		var result = '';
		while(round>=0) {
			//求出第一位的数字
			var index = Math.floor(k/factorial);
			//求出下一位的k
			k %= factorial;
			result += nums[index];
			//下一个阶乘中就不再包含这个高位数了
			nums.splice(index,1);
			if(round > 0) {
				//下一个阶乘
				factorial = Math.floor(factorial / round);
			}
			round --;
		}
		return result;
	};
	

})(window.LeetCode = window.LeetCode || {});