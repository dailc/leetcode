/**
 * 作者: dailc
 * 时间: 2017-04-15
 * 描述: Text-Justification
 * 
 * 来自: https://leetcode.com/problems/text-justification
 */
(function(exports) {

	/**
	 * @description fullJustify
	 * @param {string[]} words
 	 * @param {number} maxWidth
 	 * @return {string[]}
	 */
	exports.fullJustify = function(words, maxWidth) {
		if(!words) {
			return [];
		}
		var result = [];
		var count = 0,
			last = 0,
			len = words.length;
		
		for( var i = 0 ; i < len; i ++ ) {
			//count是上一次计算的单词的长度，words[i].length()是当前尝试放的一个单词的长度，
         	//假设当前放上了这个单词，那么这一行单词跟单词间的间隔数就是i-last
         	//判断这些总的长度加起来是不是大于L（超行数了）
         	if(count + words[i].length + (i-last) > maxWidth){
         		var spaceNum = 0;
         		var extraNum = 0;
         		//因为尝试的words[i]失败了，所以间隔数减1.此时判断剩余的间隔数是否大于0
         		if( i-last-1 >0){
         			 //是间隔的倍数（为啥要减1，因为尝试当前words[i]后发现比L长了，
         			 //所以当前这个单词不能算作这行，所以间隔就减少一个
         			spaceNum = Math.floor((maxWidth-count)/(i-last-1));
                 	extraNum = (maxWidth-count)%(i-last-1);//不是倍数的话还要计算
         		}
         		var str = '';
         		for( var j = last; j < i; j ++ ) {
         			str += words[j];
         			if( j < i-1) {
         				//words[i-1]的话后面就不用填空格了，所以这里j<i-1
         				for( var k = 0; k < spaceNum; k ++ ) {
         					str += ' ';
         				}
         				if(extraNum>0) {
         					str += ' ';
         				}
         				extraNum --;
         			}
         		}
         		
         		//下面这个for循环作用于一行只有一个单词还没填满一行的情况
         		for( var j = str.length; j < maxWidth; j ++ ) {
         			str += ' ';
         		}
         		result.push(str);
         		count = 0;
         		last = i;//下一个开始的单词
         	}
         	
         	 count += words[i].length;
		}
		
		//处理最后一行
		var str = '';
		for( var i = last; i < words.length; i ++ ) {
			str += words[i];
			if(str.length<maxWidth) {
				str += ' ';
			}
		}
		for( var i = str.length; i < maxWidth; i ++ ) {
			str += ' ';
		}
		result.push(str);
		
		return result;
		
	};
	
})(window.LeetCode = window.LeetCode || {});