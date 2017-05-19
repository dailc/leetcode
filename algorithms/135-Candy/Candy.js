/* 作者: dailc
 * 时间: 2017-05-19
 * 描述: Candy
 * 
 * 来自: https://leetcode.com/problems/candy
 */
(function(exports) {

	/**
	 * @description candy
	 * @param {number[]} ratings
	 * @return {number}
	 */
	exports.candy = function(ratings) {
		if(!ratings) {
			return 0;
		}
		var base = getCommonDivisor(ratings);
		var len = ratings.length;
		var total = 0;
		// 累加
		for(var i = 0; i < len; i++) {
			total += ~~(ratings[i] / base);
		}

		return total > 0 ? total : 1;
	};

	function getCommonDivisor(rating) {
		// 默认不能出现0的情况
		var divisor = rating[0] || 1,
			len = rating.length;
		for(var i = 1; i < len; i++) {
			// 迭代求公约数
			divisor = commonDivisor(divisor, rating[i]);
		}

		return divisor;
	}
	
	// 使用欧几里德法求公约数
	function commonDivisor(num1, num2) {
		if( num1 < num2) {
			// 异或交换，确保num1大
			num1 ^= num2;
			num2 ^= num1;	
			num1 ^= num2; 
		}
		if( num2 == 0) {
			return num1;
		}
		// 迭代获取
		return commonDivisor(num2, num1%num2);
	}
	
	
	exports.candy2 = function(ratings) {
		if(!ratings) {
			return 0;
		}
		var candies = [],
			len =ratings.length;
		candies[0] = 1;
		// 先从左往右分糖，分数较高的多拿一颗糖，分数较少的只拿一颗糖
		for( var i = 1; i < len; i ++ ) {
			if(ratings[i] > ratings[i - 1]) {
				candies[i] = candies[i - 1] + 1;
			} else {
				candies[i] = 1;
			}
		}
		var sum = candies[len - 1];
		// 再从右往左继续分糖，分数较高的确保比右边多一颗就行了
		for( var i = len - 2; i >= 0; i -- ) {
			if(ratings[i] > ratings[i + 1]) {
				candies[i] = Math.max(candies[i + 1] + 1, candies[i]);
			}
			sum += candies[i];
		}
		return sum;
	};
})(window.LeetCode = window.LeetCode || {});