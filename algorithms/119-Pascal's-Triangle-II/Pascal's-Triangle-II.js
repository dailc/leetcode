/* 作者: dailc
 * 时间: 2017-05-10
 * 描述: Pascal's-Triangle-II
 * 
 * 来自: https://leetcode.com/problems/pascals-triangle-II
 */
(function(exports) {

	
	/**
	 * @description getRow
	 * @param {number} rowIndex
 	 * @return {number[]}
	 */
	exports.getRow = function(rowIndex) {
		if(rowIndex<0) {
			return [];
		}
		var pre = [];
		pre.push(1);
		
		var target = pre;
		for( var i = 1; i <= rowIndex; i ++ ) {
			var cur = [];
			cur.push(1);
			for( var j = 0, len = pre.length; j < len - 1; j ++ ) {
				cur.push(pre[j]+pre[j+1]);
			}
			cur.push(1);
			target = cur;
			pre = cur;
		}
		
		return target;
	};
	
})(window.LeetCode = window.LeetCode || {});