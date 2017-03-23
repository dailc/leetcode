/**
 * 作者: dailc
 * 时间: 2017-03-23
 * 描述: threeSumClosest
 * 
 * 来自: https://leetcode.com/problems/3sum-closest
 */
(function(exports) {

	/**
	 * @description threeSumClosest
	 * @param {number[]} nums 
	 * @param {number} target 
	 * @return {number} 
	 */
	exports.threeSumClosest = function(nums,target) {
		if(!nums||nums.length<3) {
			return null;
		}
		//先排序-普通的sort负数排的不对
		nums.sort(function(a,b) {
			return a - b;
		});
		console.log(JSON.stringify(nums));
		var diff = [];
		var len = nums.length;
		for(var i = 0; i < len-2; i++) {
			if (i > 0 && nums[i] == nums[i-1]) {
				//防止重复数
				continue;
			}
			var twoSum = twoSum2Closest(nums,i+1,len-1,nums[i],target);
			if(twoSum!=null) {
				diff.push(twoSum);				
			}	
		}
		if(diff&&diff.length) {
			var min = 0;
			for(var i = 0; i < diff.length; i ++) {
				if(Math.abs(diff[i])<Math.abs(diff[min])) {
					min = i;
				}
			}
			return (diff[min]+target)
		}
		
		
		return null;	
	};
	
	function twoSum2Closest(nums,begin,end, target,closest ) {
		var len = nums.length,left = begin,right = end;
		var minSum = Math.pow(2,32)-1;
		while(left<right){
			var sum = nums[left]+nums[right]+target -closest;
			//console.log("sum:"+(sum+closest));
			if(Math.abs(sum)<=Math.abs(minSum)){
				//只可能有一个值，并且返回的是值
				minSum = sum;
				//console.log("minSum:"+(minSum+closest)+"sum:"+(sum+closest));				
			}
			
			if(sum>0){
				right--;
			}else {
				//小于
				left++;
			}
		}
		return minSum;
	};
	
	
	
	

})(window.LeetCode = window.LeetCode || {});