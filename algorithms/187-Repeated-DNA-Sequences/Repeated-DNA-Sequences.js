/* 作者: dailc
 * 时间: 2017-06-08
 * 描述: Repeated-DNA-Sequences
 * 
 * 来自: https://leetcode.com/problems/repeated-dna-sequences
 */
(function(exports) {

	/**
	 * @description findRepeatedDnaSequences
	 * @param {string} s
	 * @return {string[]}
	 */
	LeetCode.findRepeatedDnaSequences = function(s) {
		if(!s || s.length < 10) {
			return [];
		}
		var hash = {},
			rel = [],
			hashValue = 0,
			len = s.length;
		var map = {
			'A': 0,
			'C': 1,
			'G': 2,
			'T': 3
		};

		for(var pos = 0; pos < 10; pos++) {
			hashValue <<= 2;
			hashValue |= map[s.charAt(pos)];
		}
		hash[hashValue] = true;

		var repeatHash = {};

		for(var pos = 10; pos < len; pos++) {
			hashValue <<= 2;
			hashValue |= map[s.charAt(pos)];
			// 0x300000取反代表  1100000000000000000000
			// 意义是只取20位，溢出取0
			hashValue &= ~(0x300000);

			if(hash[hashValue]) {
				if(!repeatHash[hashValue]) {
					rel.push(s.substr(pos - 9, 10));
					repeatHash[hashValue] = true;
				}
			} else {
				hash[hashValue] = true;
			}
		}

		return rel;
	};

})(window.LeetCode = window.LeetCode || {});