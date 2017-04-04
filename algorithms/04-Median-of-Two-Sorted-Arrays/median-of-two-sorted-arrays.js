/**
 * 作者: dailc
 * 时间: 2016-12-12
 * 描述: Median-of-Two-Sorted-Arrays
 * 分别实现了几种方案:
 * 1.两个数组合并,然后再找中间值
 * 2.通过找K小值来找到中间值
 * 
 * 来自:https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
(function(exports) {

	/**
	 * @description 获取两个排序数组的中间值
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
	 * @description 获取两个排序数组的中间值
	 * 方案2,将问题变为寻找第k小数的问题
	 * 参考http://blog.csdn.net/zxzxy1988/article/details/8587244
	 * http://blog.csdn.net/yutianzuijin/article/details/11499917/
	 * 时间复杂度 O(nlog(M+N))
	 * @param {Number[]} nums1
	 * @param {Number[]} nums2
	 * @return {Number} 返回目标中间值
	 */
	exports.findMedianSortedArrays2 = function(nums1,nums2) {
		var m = nums1.length,n = nums2.length;
		var total = m+n;
		
		//找到两个排序数组中的第k个小数，内部假设m小于n
		var findKth = function(X,Y,m,n,k){
			if(m>n){
				//颠倒mn的顺序
				return findKth(Y,X,n,m,k);
			} else if(m===0){
				//如果X数组为空，那么K肯定就在Y数组中
				return Y[k-1];
			} else if(k===1){
				//只有一位，由于是升序，所以必然是X[0]或Y[0]
				return Math.min(X[0],Y[0]);
			}
			
			//divide k into two parts,最小为1
			//可以肯定得是partA和partB都<=K
			var partA = ~~Math.min(k/2,m),partB = k - partA;
			//console.log("partA:"+partA+',partB:'+partB+',k:'+k);
			//console.log("X:"+JSON.stringify(X)+',Y:'+JSON.stringify(Y));
			//第一位数其实是X[0]，因为程序从0开始
			//以下判断时关键，每一次都可以去掉不符合要求的一部分，进行精简
			if(X[partA-1] < Y[partB-1]){
				return findKth(X.slice(partA),Y,m-partA,n,k-partA);
			} else if(X[partA-1] > Y[partB-1]) {
				return findKth(X,Y.slice(partB),m,n-partB,k-partB);
			} else {
				//如果X数组中的第partA位和Y数组中的第partB为相等
				//由于X中有1,...,partA
				//Y中有1,...,partB
				//两者加起来刚好为k,而不管k在X中还是Y中，都必须满足X[k]>=X[partA]=X[partB]
				//所以k只可能是partA或partB(原因是X和Y中加起来已经有K个数小于等于X[k]了，所以K只能在这里面)
				return X[partA-1];
			}
		};
		
		if(total%2!==0){
			 return findKth(nums1, nums2, m,n, ~~(total / 2)+1);  
		} else {
			return (findKth(nums1, nums2, m,n, ~~(total / 2)+1 )+findKth(nums1, nums2, m,n, ~~(total / 2 )))/2;  
		}
	};
	
	
	/**
	 * @description 带回调的执行，每一个步骤都回调，方便显示
	 * @param {Number[]} nums1
	 * @param {Number[]} nums2
	 * @return {Number} 返回目标中间值
	 */
	exports.findMedianSortedArrays3 = function(nums1,nums2,callback) {
		var m = nums1.length,n = nums2.length;
		var total = m+n;
		//找到两个排序数组中的第k个小数，内部假设m小于n
		var findKth = function(X,Y,m,n,k){
			callback&&callback(X,Y,k);
			if(m>n){
				//颠倒mn的顺序
				return findKth(Y,X,n,m,k);
			} else if(m===0){
				//如果X数组为空，那么K肯定就在Y数组中
				return Y[k-1];
			} else if(k===1){
				//只有一位，由于是升序，所以必然是X[0]或Y[0]
				return Math.min(X[0],Y[0]);
			}
			//divide k into two parts,最小为1
			//可以肯定得是partA和partB都<=K
			var partA = ~~Math.min(k/2,m),partB = k - partA;
			//console.log("partA:"+partA+',partB:'+partB+',k:'+k);
			//console.log("X:"+JSON.stringify(X)+',Y:'+JSON.stringify(Y));
			
			//第一位数其实是X[0]，因为程序从0开始
			//以下判断时关键，每一次都可以去掉不符合要求的一部分，进行精简
			if(X[partA-1] < Y[partB-1]){
				
				return findKth(X.slice(partA),Y,m-partA,n,k-partA);
			} else if(X[partA-1] > Y[partB-1]) {
				return findKth(X,Y.slice(partB),m,n-partB,k-partB);
			} else {
				//如果X数组中的第partA位和Y数组中的第partB为相等
				//由于X中有1,...,partA
				//Y中有1,...,partB
				//两者加起来刚好为k,而不管k在X中还是Y中，都必须满足X[k]>=X[partA]=X[partB]
				//所以k只可能是partA或partB(原因是X和Y中加起来已经有K个数小于等于X[k]了，所以K只能在这里面)
				return X[partA-1];
			}
		};
		
		if(total%2!==0){
			 return findKth(nums1, nums2, m,n, ~~(total / 2)+1);  
		} else {
			return (findKth(nums1, nums2, m,n, ~~(total / 2)+1 )+findKth(nums1, nums2, m,n, ~~(total / 2 )))/2;  
		}
	};

})(window.LeetCode = window.LeetCode || {});