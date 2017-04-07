/**
 * 作者: dailc
 * 时间: 2017-04-07
 * 描述: Permutation
 * 
 * 来自: https://leetcode.com/problems/permutations
 */
(function(exports) {

	/**
	 * @description jump
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	exports.permute = function(nums) {
		if(!nums || nums.length == 0) {
			return [];
		}
		return permutate(nums);
	};

	function permutate(words) {
		var result = [];
		if(words.length == 1) {
			return [words];
		} else {
			var preResult = permutate(words.slice(1));
			for(var j = 0; j < preResult.length; j++) {
				var len = preResult[j].length;
				for(var k = 0; k < len + 1; k++) {
					var tmp = [];
					for(var p = 0; p < k; p++) {
						tmp.push(preResult[j][p]);
					}
					tmp.push(words[0]);
					for(var p = k; p < len; p++) {
						tmp.push(preResult[j][p]);
					}
					result.push(tmp);
				}
			}
			return result
		}
	}
	
	exports.permute2 = function(nums) {
		if(!nums) {
			return [];
		}
		var result = [];
		var i,j,len = nums.length;
		nums.sort(function(a,b){
			return a-b;
		});
		result.push(nums.slice(0));
		while(true) {
			for( i = len-2;i >=0;i--) {
				if(nums[i]<nums[i+1]) {
					break;
				}
			}
			if(i<=-1) {
				return result;
			}
			for( j = len-1;j>i;j--) {
				if(nums[j]>nums[i]) {
					break;
				}
			}
			swap(nums,i,j);
			for(var k = i+1; k < Math.floor((i+1+len)/2);k++) {
				swap(nums,k,len-(k-i));
			}
			result.push(nums.slice(0));
		}
		return result;
	};

	function swap(nums,i,j) {
		var tmp = nums[i];
		nums[i] = nums[j];
		nums[j] = tmp;
	}


})(window.LeetCode = window.LeetCode || {});