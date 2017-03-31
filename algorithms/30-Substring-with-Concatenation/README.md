## Substring-with-Concatenation

## 说明
示例: 给出`"barfoothefoobarman"`以及关键字数组`["foo", "bar"]`。返回`[0,9]`。

上面返回的两个分别代表`foobar`以及`barfoo`的序号，也就是说，要返回子字符串(关键字数组中的组合)的索引下标。

### 思路

* 1.将关键字数组进行排列组合，然后依次求出下标，返回下标数组(需要用到全排列算法)，这里需要注意下数组中原生的全排列算法。

```
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
```

	当然了，结果是`TLE`，没有被AC。因为用递归法找出全排列，当关键字过多后性能特别受影响。
	
* 2.思路2，先用map记录所有wordls出现的次数，其次遍历目标`str`，每一次遍历子串，寻找map中的key，如果找到则-1，如果为0或者不存在，则进入下一个循环。
	这样一来，计算次数要大大减少，而且在本地测试基本不会出现像递归一样的超时问题，但是提交仍然未被AC(没有达到要求规定的时间要求)

* 3.思路3，在思路2的基础上优化，减少重复字符串的扫描。(滑动窗口模式)

