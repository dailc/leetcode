/* 作者: dailc
 * 时间: 2017-05-13
 * 描述: Word-Ladder
 * 
 * 来自: https://leetcode.com/problems/word-ladder
 */
(function(exports) {

	/**
	 * @description ladderLength
	 * @param {string} beginWord
	 * @param {string} endWord
	 * @param {string[]} wordList
	 * @return {number}
	 */
	exports.ladderLength = function(beginWord, endWord, wordList) {
		// BFS遍历找到的第一个匹配就是最短转换,空字符串是层与层之间的分隔标志
		var queue = [];
		queue.push(beginWord);
		queue.push("");
		var res = 1;
		//return ;
		while(queue.length) {
			var str = queue.shift();
			if(str != "") {
				var strLen = str.length;
				for(var i = 0; i < strLen; i++) {
					var tmp = str.charAt(i);
					for(var c = 'a'; c <= 'z' && c >= 'a'; c = nextChar(c)) {
						if(c == tmp) {
							continue;
						}
						str = str.substring(0, i) + c + str.substr(i + 1);

						if(str == endWord) {
							return res + 1;
						}
						var index = wordList.indexOf(str);
						if(index != -1 && wordList.indexOf(endWord) != -1) {
							queue.push(str);
							wordList.splice(index, 1);
						}
					}
					str = str.substring(0, i) + tmp + str.substr(i + 1);
				}
			} else if(queue.length) {
				//到达当前层的结尾，并且不是最后一层的结尾
				res++;
				queue.push("");
			}
		}

		return 0;
	};

	function nextChar(ch) {
		var sequences = '#abcdefghijklmnopqrstuvwxyz#';
		var index = sequences.indexOf(ch);
		return sequences.charAt(index + 1);
	}

	exports.ladderLength2 = function(beginWord, endWord, wordList) {
		// BFS遍历找到的第一个匹配就是最短转换,空字符串是层与层之间的分隔标志
		var queue = [];
		queue.push(beginWord);
		queue.push(null);

		var visited = [];
		visited.push(beginWord);
		var res = 1;
		//return ;
		while(queue.length) {
			var str = queue.shift();
			if(str != null) {
				var strLen = str.length;
				for(var i = 0; i < strLen; i++) {
					var chs = str.split('');
					for(var c = 'a'; c <= 'z' && c >= 'a'; c = nextChar(c)) {
						chs[i] = c;

						var target = chs.join('');

						if(target == endWord && wordList.indexOf(target) != -1) {
							return res + 1;
						}
						if(wordList.indexOf(target) != -1 && visited.indexOf(target) == -1) {
							queue.push(target);
							visited.push(target);
						}
					}

				}
			} else {
				res++;
				if(queue.length) {
					//到达当前层的结尾，并且不是最后一层的结尾
					queue.push(null);
				}
			}
		}

		return 0;
	};

	exports.ladderLength3 = function(start, end, dict) {
		
	};

})(window.LeetCode = window.LeetCode || {});