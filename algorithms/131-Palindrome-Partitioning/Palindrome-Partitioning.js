/* 作者: dailc
 * 时间: 2017-05-17
 * 描述: Palindrome-Partitioning
 * 
 * 来自: https://leetcode.com/problems/palindrome-partitioning
 */
(function(exports) {

	/**
	 * @description partition
	 * @param {string} s
 	 * @return {string[][]}
	 */
	exports.partition = function(s) {
		if(!s) {
			return [];
		}
		
		var result = [];
		dfs(result,s,[],0);
		
		return result;
	};
	
	function dfs(result,s,queue,index) {
		if(index == s.length) {
			result.push(queue.slice(0));
		} else {
			for( var i = index; i < s.length; i ++ ) {
				
				var tmp = s.substring(index,i+1);
				
				if(!isPalindrome(tmp)) {
					// 非回文数，跳过
					
					continue;
				} else {
					queue.push(tmp);
					dfs(result,s,queue,i+1);
					queue.pop();
				}
			}
		}
	}
	
	function isPalindrome(s) {
		if(!s) {
			return true;
		}
		var len = s.length;
		var left = 0,
			right = len - 1;
		while(left < right) {
			var leftC = s.charAt(left).toLowerCase();
			var rightC = s.charAt(right).toLowerCase();
			if(leftC != rightC) {
				return false;
			} else {
				left ++;
				right --;
			}			
		}
		
		return true;
	}

})(window.LeetCode = window.LeetCode || {});