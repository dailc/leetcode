/**
 * 作者: dailc
 * 时间: 2017-03-23
 * 描述: 3Sum
 * 
 * 来自: https://leetcode.com/problems/3sum
 */
(function(exports) {

	/**
	 * @description 暴力解法O(N3)
	 * 这种解法不能被AC的
	 * @param {number[]} nums
	 * @return {number[][]} 
	 */
	exports.threeSum = function(nums) {
		if(!nums||nums.length<3) {
			return [];
		}
		var result = [];
		var len = nums.length;
		for(var i = 0; i < len; i++) {
			for(var j = i + 1; j < len; j++) {
				for(var k = j + 1; k < len; k++) {
					//而且不能有重复的
					if(nums[i]+nums[j]+nums[k] === 0) {
						result.push([nums[i],nums[j],nums[k]]);
					}
				}
			}
		}
		len = result.length;
		//hash表方便去重
		var hash = {};
		//去重后的数组
		var finalResult = [];
		//重新排序并去重复
		for(var i = 0; i　<　len; i++) {
			result[i].sort();
			if(!hash[result[i].join()]) {
				hash[result[i].join()] = true
				finalResult.push(result[i]);
			} 
		}
		
		
		return finalResult;
	};
	
	/**
	 * @description O(N2)的解法
	 * @param {number[]} nums
	 * @return {number[][]} 
	 */
	exports.threeSum2 = function(nums) {
		if(!nums||nums.length<3) {
			return [];
		}
		//先排序-普通的sort负数排的不对
		nums.sort(function(a,b) {
			return a - b;
		});
		console.log(JSON.stringify(nums));
		var result = [];
		var len = nums.length;
		for(var i = 0; i < len-2; i++) {
			if (i > 0 && nums[i] == nums[i-1]) {
				//防止重复数
				continue;
			}
			var twoSums = twoSum2(nums,i+1,len-1,nums[i]);
			if(twoSums) {
				for(var j = 0; j < twoSums.length; j ++) {
					result.push(twoSums[j]);
				}	
				
			}
			
		}
		
		return result;	
	};
	
	function twoSum2(nums,begin,end, target) {
		var result = [];
		var len = nums.length,left = begin,right = end;
		while(left<right){
			var sum = nums[left]+nums[right]+target;
			if(sum===0){
				//可能有多个满足条件的值
				result.push([nums[left],nums[right],target]);
				
				//去除可能的重复数
				while (left<right && nums[left] == nums[left+1]) {
					left++;
				}
                while (left<right && nums[right] == nums[right-1]) {
					right--;
				}
                left++;
				right--;
				
			}else if(sum>0){
				right--;
			}else {
				//小于
				left++;
			}
		}
		return result;
	};
	
	

})(window.LeetCode = window.LeetCode || {});