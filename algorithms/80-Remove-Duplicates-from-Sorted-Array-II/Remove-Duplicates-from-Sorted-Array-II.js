/**
 * 作者: dailc
 * 时间: 2017-04-20
 * 描述: Remove-Duplicates-from-Sorted-Array-II
 * 
 * 来自: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
 */
(function(exports) {

		/**
		 * @description removeDuplicates
		 * @param {number[]} nums
 		 * @return {number}
		 */
		exports.removeDuplicates = function(nums) {
			if(!nums) {
				return 0;
			}
			var p1 = 0,
				p2=0,
				len = nums.length,
				count = 0,
				nowCount = 0;
			while(p2<len) {
				if(nums[p1]==nums[p2]) {
					if(nowCount<2) {
						count ++;
						nowCount ++;
						p2 ++;
					} else {
						//大于2的，跳过
						//splice
						nums.splice(p2,1);
						//p2 ++;
						//因为splice了，所以整体长度-1，p2不要加了
						len --;
					}
				} else {
					//p2和p1已经不同了

					count ++;
					//计数变为1
					nowCount = 1;
					//p1指向p2 p2执行下一个
					p1 = p2;
					p2 ++;
				}
				
			}
			
			return count;
		};
		
		
		exports.removeDuplicates2 = function(nums) {
			if(!nums) {
				return 0;
			}
			var index = 0,
				len = nums.length,
				count = 0;
			for( var i = 0; i < len; i ++ ) {
				
				if(i>0&&nums[i]==nums[i-1]) {
					count ++;
					if(count>2) {
						continue;
					}
				} else {
					count = 1;
				}
				nums[index++] = nums[i];
			}
			
			return index;
		};
		

})(window.LeetCode = window.LeetCode || {});