/* 作者: dailc
 * 时间: 2017-04-23
 * 描述: Merge-Sorted-Array
 * 
 * 来自: https://leetcode.com/problems/merge-sorted-array
 */
(function(exports) {

	/**
	 * @description merge
	 * @param {number[]} nums1
 	 * @param {number} m
 	 * @param {number[]} nums2
 	 * @param {number} n
 	 * @return {void} Do not return anything, modify nums1 in-place instead.
	 */
	exports.merge = function(nums1, m, nums2, n) {
		if(!nums1||!nums2) {
			return nums1;
		}
		//nums1里的多余元素剔除
		nums1.splice(m,nums1.length);
		var p1 = 0;
		var p2 = 0;
		while(p1<m&&p2<n) {
			if(nums2[p2]>nums1[p1]) {
				//如果大于p1
				p1 ++;
			} else {
				//小于p1,插入
				nums1.splice(p1,0,nums2[p2]);
				p2++;
				//数量要变
				m++;
			}
		}
		while(p2<n) {
			//如果仍然有数据
			nums1.push(nums2[p2]);
			p2++;
		}
	
	};
	
	exports.merge2 = function(nums1, m, nums2, n) {
		if(!nums1||!nums2) {
			return nums1;
		}
		var index1 = m - 1;
		var index2 = n - 1;
		var len = m + n -1;
		while(index1>=0&&index2>=0) {
			if(nums1[index1]> nums2[index2]) {
				nums1[len--] = nums1[index1--];
			} else {
				nums1[len--] = nums2[index2--];
			}
		}
		while(index2>=0) {
			nums1[len--] = nums2[index2--];
		}
	};
	
	

	
})(window.LeetCode = window.LeetCode || {});