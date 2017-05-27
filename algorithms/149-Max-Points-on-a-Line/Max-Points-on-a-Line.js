/* 作者: dailc
 * 时间: 2017-05-27
 * 描述: Max-Points-on-a-Line
 * 
 * 来自: https://leetcode.com/problems/sort-list
 */
(function(exports) {
	function Point(x, y) {
		this.x = x;
		this.y = y;
	}
	LeetCode.Point = Point;
	/**
	 * @description maxPoints
	 * @param {Point[]} points
 	 * @return {number}
	 */
	LeetCode.maxPoints = function(points) {
		if(!points || !points[0]) {
			return 0;
		}
		if(points.length == 1) {
			return 1;
		}
		// 每一条直线上的最大点数，最少有2个
		var max = 2;
		// 以每一个点为出发，计算对应经过这个点的直线的点数-通过斜率
		var len = points.length;
		for( var i = 0; i < len; i ++ ) {
			var hash = {};
			// 重复的点数，根据要求看是否最终加上
			var same = 0;
			// 经过当前这个点的直线的点的最大个数
			var localMax = 1;
			for( var j = 0; j < len; j ++ ) {
				if( i == j) {
					// 跳过自身
					continue;
				}
				if( points[i].x == points[j].x && points[i].y == points[j].y ) {
					same ++;
					continue;
				}
				var a = points[i].x - points[j].x;
				var b = points[i].y - points[j].y;
				var gcd = GCD(a, b);
				a /= gcd;
				b /= gcd;
				var slop = a+'_'+b;
				// console.log('slop:'+slop);
				if(hash[slop]) {
					hash[slop] ++;
				} else {
					// 两个点
					hash[slop] = 2;
				}
			}
			// console.log(same+','+JSON.stringify(hash));
			// 找当前最大
			for( var item in hash) {
				localMax = Math.max(localMax, hash[item]);
			}
			localMax += same;
			max = Math.max(localMax, max);
		}
		
		return max;
	}	
	
	function GCD(a, b) {
		if(b == 0) {
			return a;
		} else {
			return GCD(b, a % b)
		}
	}
	
	
})(window.LeetCode = window.LeetCode || {});