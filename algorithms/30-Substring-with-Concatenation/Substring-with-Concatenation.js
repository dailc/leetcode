/**
 * 作者: dailc
 * 时间: 2017-03-30
 * 描述: Substring-with-Concatenation of All Words   
 * 
 * 来自: https://leetcode.com/problems/substring-with-concatenation-of-all-words
 */
(function(exports) {

	/**
	 * @description divide
	 * @param {string} str
	 * @param {string[]} words
	 * @return {number[]}
	 */
	exports.findSubstring = function(str, words) {
		if(!str || !words) {
			return [];
		}
		var subStrs = permutate(words);
		var indices = new Set();
		for(var i = 0, len = subStrs.length; i < len; i++) {
			var subStr = (subStrs[i]).join('');
			var indexs = findSubStrs(str, subStr);
			for(var j = 0, len2 = indexs.length; j < len2; j++) {
				indices.add(indexs[j]);
			}
		}
		return Array.from(indices);
	};

	//返回sub的所有序列下标集合
	function findSubStrs(str, sub) {
		var len = str.length,
			len2 = sub.length;
		var result = [];
		for(var i = 0; i < len; i++) {
			if(str.substring(i, i + len2) == sub) {
				result.push(i);
			}
		}
		return result;
	}
	
	//数组字符串的全排列
	function permutate(words) {
		var result = [];
		if(words.length == 1) {
			return [words];
		} else {
			var preResult = permutate(words.slice(1));
			for(var j = 0; j < preResult.length; j++) {
				var len = preResult[j].length;			
				for(var k = 0; k < len + 1; k++) {
					var tmp = [];
					for( var p = 0; p < k; p ++) {
						tmp.push(preResult[j][p]);
					}
					tmp.push(words[0]);
					for( var p = k; p < len; p ++) {
						tmp.push(preResult[j][p]);
					}				
					result.push(tmp);
				}
			}
			return result
		}
	}
	
	exports.findSubstring2 = function(str, words) {
		if(!str || !words) {
			return [];
		}
		var len = str.length,
			wLen = words[0].length,
			len2 = wLen*words.length,
			hash = {};
		//初始化map
		for( var i = 0; i < words.length; i ++ ) {
			if(!hash[words[i]]) {
				hash[words[i]] = 1;
			} else {
				hash[words[i]] ++;
			}
		}
		var indices = new Set();
		for( var i = 0; i < len; i ++ ) {
			var isFind = true,
				tmpMap = copy(hash);
			for( var j = i; isFind && j < (i+len2); j += wLen ) {
				var subStr = str.substr(j,wLen);
				if(tmpMap[subStr]) {
					tmpMap[subStr] --;
				} else {
					//没有找到
					isFind = false;
				}
			}
			isFind&&indices.add(i);
		}
		return Array.from(indices);
		
	};
	
	function copy(obj) {
		var result = {};
		for( var item in obj) {
			result[item] = obj[item];
		}
		return result;
	}
	
	exports.findSubstring3 = function(str, words) {
		if(!str || !words) {
			return [];
		}
		var len = str.length,
			wLen = words[0].length,
			len2 = words.length,
			hash = {};
		//初始化map
		for( var i = 0; i < len2; i ++ ) {
			if(!hash[words[i]]) {
				hash[words[i]] = 1;
			} else {
				hash[words[i]] ++;
			}
		}
		var indices = [];
		for( var i = 0; i < wLen; i ++ ) {
			var count = 0, //count是当前字符串找到的关键字个数
				index = i; //起始位置
			var tmpMap = {};
			//从第一个字符找到最后一个
			for( var j = i; j <= len - wLen; j += wLen ) {
				var substr = str.substr(j,wLen);
				//检查当前字符串是否在表中
				if(!hash[substr]) {
					//表中没有这个字符
					tmpMap = {};
					count = 0;
					index = j+ wLen;
				} else {
					if(!tmpMap[substr]) {
						tmpMap[substr] = 1;
					} else {
						tmpMap[substr] ++;
					}
					
					//如果当前这个关键字存在的次数满足要求
					if(tmpMap[substr] <= hash[substr]) {
						count ++;
					} else {
						//否则已经不满足要求了
						while(tmpMap[substr] > hash[substr]) {
							//准备移动到下一个，所以当前的次数得一次减一
							var tmp = str.substr(index,wLen);
							tmpMap[tmp] = tmpMap[tmp] -1;
							if(tmpMap[tmp] < hash[tmp]) {
								count --;
							}
							index += wLen;
						}
					}
					
					if(count == len2) {
						//如果刚好凑满了所有关键字
						indices.push(index);
						
						var tmp = str.substr(index,wLen);
						tmpMap[tmp] = tmpMap[tmp] -1;
						index += wLen;
						count --;
					} 
				}
			}
		}
		
		return indices;
		
	};

})(window.LeetCode = window.LeetCode || {});