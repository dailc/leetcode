/**
 * 作者: dailc
 * 时间: 2017-03-24
 * 描述: Letter-Combinations-of-a-Phone-Number
 * 
 * 来自: https://leetcode.com/problems/letter-combinations-of-a-phone-number
 */
(function(exports) {

	/**
	 * @description letterCombinations
	 * 时间 O(N) 空间 O(N) 递归栈空间
	 * @param {String} digits 
	 * @return {String[]} 
	 */
	exports.letterCombinations = function(digits) {
		if(!digits) {
			return [];
		}
		var result = [],
			len = digits.length;
		var tmp = [];
		//深度遍历
		dfs(result,0,digits,len,tmp);
		
		return result;
	};
	
	//递归
	function dfs(result,index,digits,len,tmp) {
		if(index == len) {
			
			//找到一种结果，加入列表中
			if(tmp.length!=0) {
				result.push(tmp.join(''));
			}
		} else {
			// 找出当前位数字对应可能的字母
			var candidates = map(digits.charAt(index));
			var len2 = candidates.length;
			//对每个可能字母进行搜索
			for(var i = 0; i < len2; i ++) {
				tmp.push(candidates.charAt(i));
				dfs(result,index+1,digits,len,tmp);
				tmp.pop();
			}
		}
	}
	
	//获取对应numStr对应的str的映射
	//不考虑0和1代表的那些特殊字符
	function map(numStr) {
		switch(numStr) {
			case '0': 
				return '';
			case '1': 
				return '';
			case '2': 
				return 'abc';
			case '3': 
				return 'def';
			case '4': 
				return 'ghi';
			case '5': 
				return 'jkl';
			case '6': 
				return 'mno';
			case '7': 
				return 'pqrs';
			case '8': 
				return 'tuv';
			case '9': 
				return 'wxyz';
		}
		return '';
	}
	
	
	

})(window.LeetCode = window.LeetCode || {});