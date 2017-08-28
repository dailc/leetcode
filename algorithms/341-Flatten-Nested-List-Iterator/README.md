## Flatten-Nested-List-Iterator

## 说明

给定一个嵌套的整数列表，实现一个迭代器来展开它

例如

```js
Given the list [[1,1],2,[1,1]],

反复调用`next`，直到`hasNext`返回`false`，返回的元素序列是`[1,1,2,1,1]`
```

```js
Given the list [1,[4,[6]]],

反复调用`next`，直到`hasNext`返回`false`，返回的元素序列是`[1,4,6]`
```

### 思路

- 构建迭代器时用`dfs`，构建成单链表形式