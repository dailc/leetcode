/* 作者: dailc
 * 时间: 2017-05-18
 * 描述: Gas-Station
 * 
 * 来自: https://leetcode.com/problems/gas-station
 */
(function(exports) {
	
	/**
	 * @description canCompleteCircuit
	 * @param {number[]} gas
 	 * @param {number[]} cost
 	 * @return {number}
	 */
	exports.canCompleteCircuit = function(gas, cost) {
		if(!gas||!gas.length||!cost||!cost.length) {
			return -1;
		}
		var total = 0,
			sum = 0,
			start = 0,
			len = gas.length;
		
		for( var i = 0; i < len; i ++ ) {
			var diff = gas[i] - cost[i];
			total += diff;
			if(sum < 0) {
				sum = diff;
				start = i;
			} else {
				sum += diff;
			}
		}
		
		return total < 0 ? -1 : start;
	};


})(window.LeetCode = window.LeetCode || {});