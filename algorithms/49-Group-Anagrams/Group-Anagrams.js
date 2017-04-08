/**
 * 作者: dailc
 * 时间: 2017-04-08
 * 描述: Group-Anagrams
 * 
 * 来自: https://leetcode.com/problems/group-anagrams
 */
(function(exports) {

	/**
	 * @description groupAnagrams
	 * @param {string[]} strs
 	 * @return {string[][]}
	 */
	exports.groupAnagrams = function(strs) {
		if(!strs) {
			return [];
		}
		var len = strs.length;
		var hash = {};
		for( var i = 0; i < len; i ++ ) {
			var str = strs[i].split('');
			str.sort();
			str = str.join('');
			if(!hash[str]) {
				hash[str] = [];
			} 
			
			hash[str].push(strs[i]);
		}
		
		//读取hash
		var result = [];
		for( var item in hash) {
			result.push(hash[item]);
		}
		return result;
	};
	
	
	

})(window.LeetCode = window.LeetCode || {});