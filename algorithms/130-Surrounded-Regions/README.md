## Surrounded-Regions

## 说明
给出一个2D棋盘，里面的元素的值分别是`x`和`o`(字符o)

请将所有被`x`包围的`o`用`x`填充(这个`o`类似于围棋中一样，被围住了)，例如:

```
X X X X
X O O X
X X O X
X O X X
```
变为:

```
X X X X
X X X X
X X X X
X O X X
```

### 思路

* 1.BFS，广度优先算法
	* 关键为，从四周开始遍历，如果有`o`，则对这个进行dfs遍历，所有关联的`o`变为`y`
	* 然后将所有的`o`变为`x`，将所有的`y`变回`o`
	
	http://www.cnblogs.com/grandyang/p/4555831.html