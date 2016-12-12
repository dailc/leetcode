/**
 * 作者: dailc
 * 时间: 2016-12-12
 * 描述: longest-substring-without-repeating-characters
 * 分别实现了几种方案:
 * 1.两个数组合并,然后再找中间值
 * 2.
 * 
 * 来自:https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
(function(exports) {

	/**
	 * @description 获取字符串的最长 子substring的长度,不包含重复字符串
	 * 方案1,合并数组,重新排序,平均时间复杂度 O(nlog(M+N))
	 * 不太符合要求,要求是O(log(M+N)).
	 * @param {Number[]} nums1
	 * @param {Number[]} nums2
	 * @return {Number} 返回目标中间值
	 */
	exports.findMedianSortedArrays1 = function(nums1,nums2) {
		var concatArray = nums1.concat(nums2);
		concatArray.sort(function(a,b){
			return a-b;
		});
		var len = concatArray.length;
		var medium = 0;
		if(len%2===0){
			medium = (concatArray[~~(len/2)-1]+concatArray[~~(len/2)])/2;
		}else{
			medium = concatArray[~~(len/2)];
		}
		
		return medium;
	};
	
	/**
	 * @description 获取字符串的最长 子substring的长度,不包含重复字符串
	 * 方案2,将问题变为寻找第k小数的问题
	 * 参考http://blog.csdn.net/zxzxy1988/article/details/8587244
	 * 时间复杂度 O(nlog(M+N))
	 * @param {Number[]} nums1
	 * @param {Number[]} nums2
	 * @return {Number} 返回目标中间值
	 */
	exports.findMedianSortedArrays2 = function(nums1,nums2) {
		var m = nums1.length,n = nums2.length;
		var total = m+n;
		
		//找到第k个小数，内部假设m小于n
		var findKth = function(array1,array2,m,n,k){
			if(m>n){
				//颠倒mn的顺序
				return findKth(array2,array1,n,m,k);
			} else if(m===0){
				//假设k为目标中位数
				return array2[k-1];
			} else if(k===1){
				//只有一位
				return Math.min(array1[0],array2[0]);
			}
			
			//divide k into two parts  
			var partA = ~~Math.min(k/2,m),partB = k - partA;
			console.log("partA:"+partA+',partB:'+partB+',k:'+k);
			console.log("array1:"+JSON.stringify(array1)+',array2:'+JSON.stringify(array2));
			if(array1[partA -1] < array2[partB -1]){
				return findKth(array1.slice(partA),array2,m-partA,n,k-partA);
			} else if(array1[partA -1] > array2[partB -1]) {
				return findKth(array1,array2.slice(partB),m,n-partB,k-partB);
			} else {
				return array1[partA -1];
			}
		};
		
		if(total%2!==0){
			 return findKth(nums1, nums2, m,n, ~~(total / 2)+1);  
		} else {
			return (findKth(nums1, nums2, m,n, ~~(total / 2)+1 )+findKth(nums1, nums2, m,n, ~~(total / 2 )))/2;  
		}
	};

})(window.LeetCode = window.LeetCode || {});