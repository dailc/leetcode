## Evaluate-Division

## 说明

给出一个方程`A / B = k`，`A`和`B`是以字符串形式表现的变量，`k`是一个真实的数字(浮点数)

给出一些查询条件，返回结果，如果不存在，返回`-1.0`

例如

```js
Given a / b = 2.0, b / c = 3.0. 
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? . 
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: 
vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries ,
where equations.size() == values.size(), and the values are positive. This represents the equations.
Return vector<double>.
```

根据上述的示例

```js
equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
```

假设输入永远合法，假设查询条件不会导致除`0`，不会有矛盾