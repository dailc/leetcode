/**
 * 作者: dailc
 * 时间: 2017-03-26
 * 描述: Generate-Parentheses
 * 
 * 来自: https://leetcode.com/problems/generate-parentheses
 */
(function(exports) {

	/**
	 * description
	 * 给定一个非负整数n，生成n对括号的所有合法排列。
	 * 解释:卡特兰数
	 * 同样的问题还有长度为n的数组，所有可能的出栈入栈顺序
	 * @param {number} n
 	 * @return {string[]}
	 */
	exports.generateParenthesis = function(n) {
		var result = [];
		generate(n,n,'',result);
		return result;
	};
	
	function generate(leftRetainNum,rightRetainNum,str,result) {
		if(leftRetainNum==0&&rightRetainNum==0) {
			result.push(str);
		}
		if(leftRetainNum > 0) {
			 generate(leftRetainNum-1,rightRetainNum,str+'(',result);  
		}
		if(rightRetainNum > 0 && leftRetainNum < rightRetainNum) {
			 generate(leftRetainNum,rightRetainNum-1,str+')',result);  
		}
	}
	
	
	

})(window.LeetCode = window.LeetCode || {});