/**
 * 作者: dailc
 * 时间: 2016-12-12
 * 描述: zigzag-conversion
 * 
 * 分别实现了几种方案:
 * 1.
 * 
 * 来自:https://leetcode.com/problems/zigzag-conversion/
 */
(function(exports) {

	/**
	 * @description 
	 * 先用最直观的方法解出来
	 * @param {String} str
	 * @param {Number} numRows
	 * @return {String} 
	 */
	exports.convert = function(str,numRows) {
		if(!numRows) {return str}
		//存放临时数组的array
		var tmpArray = [];
		for(var i=0;i<numRows;i++) {
			tmpArray[i] = [];
		}
		//为1代表row ++,否则row--
		var delta = 1,row = 0;
		for(var i=0,len = str.length;i<len;i++) {
			tmpArray[row].push(str.substr(i,1));
			row += delta;
			if(row>numRows-1) {
				row = numRows -2;
				delta = -1;
			} else if(row <0) {
				row = 1;
				delta = 1;
			}
			
			if(row<0){
				row = 0;
			}else if(row>numRows-1) {
				row = numRows -1;
			}
		}
		var result = '';
		for(var i=0;i<numRows;i++) {
			result += tmpArray[i].join('');
		}
		
		return result;
	};
	

})(window.LeetCode = window.LeetCode || {});