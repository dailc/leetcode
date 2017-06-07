/* 作者: dailc
 * 时间: 2017-06-07
 * 描述: Largest-Number
 * 
 * 来自: https://leetcode.com/problems/largest-number/
 */
(function(exports) {

	/**
	 * @description largestNumber
	 * @param {number[]} nums
	 * @return {String}
	 */
	LeetCode.largestNumber = function(nums) {
		if(!nums) {
			return '';
		}
		nums.sort(function(a, b) {
			// ab < ba  则a小于b，而增序排列里面需要返回大于0的数
			return(b + '' + a) - (a + '' + b);
		});

		var res = nums.join('');
		// 除去多余的0
		while(res.length > 1) {
			if(res.charAt(0) == '0') {
				res = res.substr(1);
			} else {
				break;
			}
		}

		return res;
	};

	var quick = function(arr) {
		var len = arr.length;
		if(len <= 1) {
			return arr;
		}
		var index = Math.floor(len / 2), //向下取整 根据中间的值作为比较对象  
			pindex = arr.splice(index, 1)[0], //需要删除中间值，以缩小排序的数组大小  
			left = [], //定义左右两个数组 左大右小  
			right = [];
		for(var i = 0; i < len - 1; i++) { //遍历整个数组 大放右 小放左  
			// (b + '' + a) - (a + '' + b);
			var diffA = arr[i] + '' + pindex;
			var diffB = pindex + '' + arr[i];
			if(diffA < diffB) {
				right.push(arr[i]);
			} else {
				left.push(arr[i]);
			}
		}
		return quick(left).concat([pindex], quick(right)); //继续递归并将数组合并  
	};
	
	LeetCode.largestNumber2 = function(nums) {
		if(!nums) {
			return '';
		}
		nums = quick(nums);

		var res = nums.join('');
		// 除去多余的0
		while(res.length > 1) {
			if(res.charAt(0) == '0') {
				res = res.substr(1);
			} else {
				break;
			}
		}

		return res;
	};

})(window.LeetCode = window.LeetCode || {});