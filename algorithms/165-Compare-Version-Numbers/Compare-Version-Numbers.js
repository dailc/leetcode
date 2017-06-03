/* 作者: dailc
 * 时间: 2017-06-03
 * 描述: Compare-Version-Numbers
 * 
 * 来自: https://leetcode.com/problems/compare-version-numbers
 */
(function(exports) {

	/**
	 * @description compareVersion
	 * @param {string} version1
 	 * @param {string} version2
 	 * @return {number}
	 */
	LeetCode.compareVersion = function(version1, version2) {
		if(!version1) {
			return -1;
		}
		if(!version2) {
			return 1;
		}
		var verArr1 = version1.split('.');
		var verArr2 = version2.split('.');
		
		var len = Math.max(verArr1.length, verArr2.length);
		for( var i = 0; i < len; i ++ ) {
			var ver1 = verArr1[i] || 0;
			var ver2 = verArr2[i] || 0;
			ver1 -= 0;
			ver2 -= 0;
			if(ver1 > ver2) {
				return 1;
			} else if(ver1 < ver2) {
				return -1;
			}
		}
		
		return 0;
	};
	
	LeetCode.compareVersion2 = function(version1, version2) {
		if(!version1) {
			return -1;
		}
		if(!version2) {
			return 1;
		}
		
		var len1 = version1.length;
		var len2 = version2.length;
		
		var i = 0,
			j = 0,
			num1 = 0,
			num2 = 0;
		while(i < len1 || j < len2) {
			while(i < len1 && version1.charAt(i) != '.') {
				num1 = num1*10 + (version1.charAt(i) - 0);
				i ++;
			}
			while(j < len2 && version2.charAt(j) != '.') {
				num2 = num2*10 + (version2.charAt(j) - 0);
				j ++;
			}
			
			if(num1 > num2) {
				return 1;
			} else if(num1 < num2) {
				return -1;
			} else {
				num1 = 0;
				num2 = 0;
				i ++;
				j ++;
			}
		}
		return 0;
	};

	
})(window.LeetCode = window.LeetCode || {});