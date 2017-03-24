/**
 * 作者: dailc
 * 时间: 2017-03-24
 * 描述: 4Sum
 * 
 * 来自: https://leetcode.com/problems/4sum
 */
(function(exports) {

	/**
	 * @description fourSum
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[][]}
	 */
	exports.fourSum = function(nums, target) {
		if(!nums || nums.length < 4) {
			return [];
		}

		var result = [];
		//先排序-普通的sort负数排的不对
		nums.sort(function(a, b) {
			return a - b;
		});

		var len = nums.length;
		//由于是已经排序的，所以字符串肯定是顺序的
		var repeat = [];
		for(var i = 0; i < len - 3; i++) {
			for(var j = i + 1; j < len - 2; j++) {
				
				var left = j + 1;
				var right = len - 1;
				while(left < right) {
					var sum = nums[i] + nums[j] + nums[left] + nums[right];
					if(sum === target) {
						var tmp = [nums[i],nums[j],nums[left],nums[right]];
						var str = tmp.join('');
						if(repeat.indexOf(str) == -1) {
							
							result.push(tmp);
							repeat.push(str);
						}
						left++;
						right--;
					} else if(sum < target) {
						left++;
					} else {
						right--;
					}

				}
			}

		}

		return result;
	};

})(window.LeetCode = window.LeetCode || {});