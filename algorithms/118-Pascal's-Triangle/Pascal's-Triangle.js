/* 作者: dailc
 * 时间: 2017-05-10
 * 描述: Pascal's-Triangle
 * 
 * 来自: https://leetcode.com/problems/pascals-triangle
 */
(function(exports) {

	
	/**
	 * @description generate
	 * @param {number} numRows
 	 * @return {number[][]}
	 */
	exports.generate = function(numRows) {
		if(numRows<=0) {
			return [];
		}
		var res = [];
		var pre = [];
		pre.push(1);
		res.push(pre.slice(0));
		
		for( var i = 2; i <= numRows; i ++ ) {
			var cur = [];
			cur.push(1);
			for( var j = 0, len = pre.length; j < len - 1; j ++ ) {
				cur.push(pre[j]+pre[j+1]);
			}
			cur.push(1);
			res.push(cur);
			pre = cur;
		}
		
		return res;
	};
	
})(window.LeetCode = window.LeetCode || {});