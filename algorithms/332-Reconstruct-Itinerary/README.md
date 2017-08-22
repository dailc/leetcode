## Reconstruct-Itinerary

## 说明

给一个飞机票列表，每一个元素代表`[frome, to]`，根据这个列表，重构出行程

所有的票都属于一个人，并且他从`JFX`触发，也就是说，行程必须从`JFX`出发

注意

- 如果有多个行程，返回`字典排序`最小的行程，例如`["JFK", "LGA"]`的字典排序要比`["JFK", "LGB"]`小

- 所有的飞机都有三个大小字母组成

- 假设输入至少有一个合法的行程

例如

```js
tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
```

```js
tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
```

### 思路

- 有向图+dfs