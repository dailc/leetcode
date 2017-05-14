/* 作者: dailc
 * 时间: 2017-05-13
 * 描述: Word-Ladder
 * 
 * 来自: https://leetcode.com/problems/word-ladder
 */
(function(exports) {
	function Pair(str,path,hash) {
		this.str = str;
		this.path = path;
		this.hash = hash;
	}
	
	/**
	 * @description ladderLength
	 * @param {string} beginWord
	 * @param {string} endWord
	 * @param {string[]} wordList
	 * @return {number}
	 */
	exports.findLadders = function(start, end, dict) {
		var result = [];
		var path = [];
		var hash = [];
		if(!start||!end||start.length!=end.length) {
			return result;
		}
		var queue = [];
		path.push(start);
		hash.push(start);
		
		var node = new Pair(start,path,hash);
		var minLength = -1;
		queue.push(node);
		
		while(queue.length) {
			node = queue.shift();
			var str = node.str;
			
			for( var i = 0; i < str.length; i ++ ) {
				var strCharArr = str.split('');
				for(var c = 'a'; c <= 'z' && c >= 'a'; c = nextChar(c)) {
					if(c == strCharArr[i]) {
						continue;
					}
					strCharArr[i] = c;
					var newWord = strCharArr.join('');
					if(newWord == end && dict.indexOf(newWord)!=-1) {
						path = node.path;
						path.push(newWord);
						if(minLength==-1) {
							minLength = path.length;
						}
						if(path.length > minLength) {
							return result;
						} else {
							result.push(path);
							
							continue;
						}
					} else {
						
						if(dict.indexOf(newWord)!=-1&&node.hash.indexOf(newWord)==-1) {
							path = node.path.slice(0);
							hash = node.hash.slice(0);
							path.push(newWord);
							hash.push(newWord);  
							var newNode = new Pair(newWord,path,hash);
							queue.push(newNode);
						}
					}
				}
			}
		}
		
		return result;
	};

	function nextChar(ch) {
		var sequences = '#abcdefghijklmnopqrstuvwxyz#';
		var index = sequences.indexOf(ch);
		return sequences.charAt(index + 1);
	}


	
})(window.LeetCode = window.LeetCode || {});