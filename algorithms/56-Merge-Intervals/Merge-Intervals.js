/**
 * 作者: dailc
 * 时间: 2017-04-10
 * 描述: Jump-Game
 * 
 * 来自: https://leetcode.com/problems/merge-intervals
 */
(function(exports) {
	
	function Interval(start, end) {
		this.start = start;
		this.end = end;
	}
	/**
	 * @description merge
	 * @param {Interval[]} intervals
 	 * @return {Interval[]}
	 */
	exports.merge = function(intervals) {
		if(!intervals||intervals.length == 0) {
			return [];
		}
		intervals.sort(function(a,b) {
			if(a.start > b.start) {
				return 1;
			} else if(a.start < b.start) {
				return -1;
			} else {
				return a.end - b.end;
			}
		});
		
		var len = intervals.length;
		var result = [];
		var start = intervals[0].start,
			end = intervals[0].end;
		for( var i = 1; i < len; i ++ ) {
			var inter = intervals[i];
			if (inter.start > end) {  
                result.push(new Interval(start, end));  
                start = inter.start;  
                end = inter.end;  
            } else {  
                end = Math.max(end, inter.end);  
            }  
		}
		result.push(new Interval(start, end));  
		 
		return result;
	};

})(window.LeetCode = window.LeetCode || {});