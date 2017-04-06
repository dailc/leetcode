/**
 * 作者: dailc
 * 时间: 2017-04-06
 * 描述: Wildcard-Matching
 * 
 * 来自: https://leetcode.com/problems/wildcard-matching
 */
(function(exports) {
	exports.isMatch1 = function(s,p) {
		return helper(s,p,0,0);
		
	};
	
	function helper(s,p,sIndex,pIndex) {
		if(sIndex==s.length) {
			if(pIndex ==p.length) {
				return true;
			} else if(p.charAt(pIndex)!='*'){
				return false;
			}
		}
		if(p.charAt(pIndex)=='?') {
			return helper(s,p,++sIndex,++pIndex);
		} else if(p.charAt(pIndex)=='*') {
			while(p.charAt(pIndex)=='*') {
				pIndex ++;
			}
			for(;sIndex<s.length;sIndex++) {
				if(helper(s,p,sIndex,pIndex)) {
					return true;
				}
			}
			return helper(s,p,sIndex,pIndex);
		} else {
			if(p.charAt(pIndex)==s.charAt(sIndex)) {
				return helper(s,p,++sIndex,++pIndex);
			}
			return false;
		}
		return false;
	}
	/**
	 * @description isMatch
	 * @param {string} s
 	 * @param {string} p
 	 * @return {boolean}
	 */
	exports.isMatch = function(s,p) {
		var presp = 0,
			press= 0,
			sIndex = 0,
			pIndx = 0,
			len = s.length;
		var startFound = false;
		while(sIndex < s.length) {
			if(p.charAt(pIndx)=='?') {
				pIndx ++;
				sIndex ++;
			} else if(p.charAt(pIndx) == '*') {
				presp = ++pIndx;
				press = sIndex;
				startFound = true;
			} else {
				if(p.charAt(pIndx) == s.charAt(sIndex)) {
					sIndex ++;
					pIndx ++;
				} else if(startFound) {
					pIndx = presp;
					sIndex = ++press;
				} else {
					return false;
				}
			}
		}
		while(p.charAt(pIndx)=='*') {
			pIndx ++;
		}
		return pIndx==p.length;
	};
	
	
})(window.LeetCode = window.LeetCode || {});