/**
 * 作者: dailc
 * 时间: 2017-04-16
 * 描述: Simplify-Path
 * 
 * 来自: https://leetcode.com/problems/simplify-path/
 */
(function(exports) {

	/**
	 * @description simplifyPath
	 * @param {string} path
 	 * @return {string}
	 */
	exports.simplifyPath = function(path) {
		if(!path) {
			return path;
		}
		var stack = [];
		var pathArray = path.split('/');
		for( var i = 0, len = pathArray.length; i < len; i ++ ) {
			var tmp = pathArray[i];
			if(tmp == '.'|| tmp == '' ) {
				continue;
			} else if(tmp == '..') {
				stack.pop();
			} else {
				stack.push('/'+tmp);
			}
		}
		//判断stack为空的情况，此时为根节点
		if(stack.length == 0) {
			return '/';
		}
		return stack.join('');
		
	};
	
	
	
})(window.LeetCode = window.LeetCode || {});