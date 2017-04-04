/**
 * 作者: dailc
 * 时间: 2017-03-15
 * 描述: Integer-To-Roman
 * 
 * 来自:https://leetcode.com/problems/integer-to-roman
 */
(function(exports) {

	/**
	 * @description 整形转为罗马数字
	 * @param {Number} number
	 * @return {string} 
	 */
	exports.intToRoman = function(num) {
		if(num<1||num>3999) {
			return '';
		}
		var str = '';
		//其中每两个阶段的之间有一个减法的表示，比如900=CM， C写在M前面表示M-C。
		var symbol = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];    
        var value = [1000,900,500,400, 100, 90,  50, 40,  10, 9,   5,  4,   1];   
         for(var i=0; num!=0;++i)  {  
            while(num >= value[i])  {  
                num -=value[i];  
                str+=symbol[i];  
            }  
        }  
        return str;  
	};
	
	

})(window.LeetCode = window.LeetCode || {});