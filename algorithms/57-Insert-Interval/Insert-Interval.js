/**
 * 作者: dailc
 * 时间: 2017-04-11
 * 描述: Insert-Interval
 * 
 * 来自: https://leetcode.com/problems/insert-interval
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
	exports.insert = function(intervals,newInterval) {
		if(!intervals) {
			return [];
		}
		if(len == 0) {
			intervals.push(newInterval);
			return intervals;
		} 
		intervals.push(newInterval);
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
	
	exports.insert2 = function(intervals,newInterval) {
		if(!intervals) {
			return [];
		}
		var len = intervals.length;
		if(len == 0) {
			intervals.push(newInterval);
			return intervals;
		} else {
			var l = 0;  
        	var r = len - 1;  
			while (l <= r) {  
				var mid = (l+r)>>1;
				if(intervals[mid].start>newInterval.start) {
					r = mid - 1;
				} else {
					l = mid + 1;
				}
			}
			intervals.splice(l,0,newInterval);
		}
		len ++;
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
	
	exports.insert3 = function(intervals,newInterval) {
		if(!intervals) {
			return [];
		}
		var len = intervals.length;
		if(len == 0) {
			intervals.push(newInterval);
			return intervals;
		} 
		for( var i = 0; i < len; i ++ ) {
			var inter = intervals[i];
			if(newInterval.end<inter.start) {
				//插入前一个
				intervals.splice(i,0,newInterval);
				return intervals;
			}
			if (inter.end<newInterval.start) {  
               continue;
            } else {  
                newInterval.start = Math.min(inter.start, newInterval.start);  
                newInterval.end   = Math.max(inter.end, newInterval.end);  
                intervals.splice(i,1);
                //需要改变索引
                i--;
                len--;
            }  
		}
		intervals.push(newInterval);  
		 
		return intervals;
	};

})(window.LeetCode = window.LeetCode || {});