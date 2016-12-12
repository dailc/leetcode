/**
 * 作者: dailc
 * 时间: 2016-12-10
 * 描述:  two sum
 * 分别实现了几种方案:
 * 1.传统的map方法记录
 * 来自:https://leetcode.com/problems/two-sum/
 */
(function(exports) {
	
	/**
	 * @description 第一种求值方案，采用map记录，一层for循环循环找值
	 * 时间复杂度 0(N)
	 * @param {Number[]} nums
	 * @param {Number[]} target
	 * @param {Number[]}
	 */
	exports.twoSum1 = function(nums, target) {
		//事实上 _map {}也可用 [] 替代
		var _map = {};
		for(var i=0,len = nums.length;i<len;i++){
			var tmp = target - nums[i];
			if(_map[tmp]!==undefined){
				//如果已经找到
				return [_map[tmp],i];
			}
			
			//装入map
			if(nums[i]<=target){
				_map[nums[i]+''] = i;
			}
		}
		
	};
	
	/**
	 * @description 第二种求值方案，对半查找，使用left和right同时从左侧和右侧进行
	 * 注意： 这个方案不适用于题目，题目是找下标，这个方案是用来找值的，
	 * 只不过是做题时顺便弄下这种方案，仅供参考
	 * @param {number[]} nums
	 * @param {number[]} target
	 * @param {number[]}
	 */
	exports.twoSum2 = function(nums, target) {
		//这个确保已经正确排序
		nums.sort(function(a,b){
			return a-b;
		});
		var len = nums.length,left = 0,right = len-1;
		while(left<right){
			var sum = nums[left]+nums[right];
			if(sum===target){
				return [nums[left],nums[right]];
			}else if(sum>target){
				right--;
			}else {
				//小于
				left++;
			}
		}
	};

})(window.LeetCode = window.LeetCode||{});