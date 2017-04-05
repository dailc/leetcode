/**
 * 作者: dailc
 * 时间: 2017-04-05
 * 描述: Multiply-Strings
 * 
 * 来自: https://leetcode.com/problems/multiply-strings
 */
(function(exports) {

	/**
	 * @description multiply
	 * @param {string} num1
	 * @param {string} num2
	 * @return {string}
	 */
	exports.multiply = function(num1, num2) {
		if(!num1 || !num2) {
			return '0';
		}
		//结果
		var pos = [],
			len1 = num1.length,
			len2 = num2.length;
		//初始化
		for(var i = 0; i < len1 + len2; i++) {
			pos[i] = 0;
		}
		//乘数和被乘数都是从右到左
		for(var i = len1 - 1; i >= 0; i--) {
			var n1 = num1.charAt(i) - '';
			for(var j = len2 - 1; j >= 0; j--) {
				var n2 = num2.charAt(j) - '';
				var mul = n1 * n2;
				//`num1[i] * num2[j]` 应该对应的位置  `[i + j`, `i + j + 1]` 
				var p1 = i + j,
					p2 = i + j + 1;
				//要加上进位本身的值
				var sum = mul + pos[p2];
				//下一位需要加上进位
				pos[p1] += Math.floor(sum / 10);
				//进位后剩下的
				pos[p2] = sum % 10;
			}
		}
		var result = pos.join('');
		var len = result.length;
		//如果只有一个0，不需要去除
		var index = 0;
		while(index < len - 1) {
			if(result.charAt(0) == '0') {
				result = result.substr(1);
			}
			index ++;
		}

		return result;
	};

})(window.LeetCode = window.LeetCode || {});