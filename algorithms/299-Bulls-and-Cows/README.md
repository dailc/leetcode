## Bulls-and-Cows

## 说明

玩这样一个游戏:

- 你写下以数字。让你朋友猜

- 你朋友每次猜测的时候，你提供一个提示`bulls`和`cows`

- 其中，`bulls`是数字正确的个数，`cows`是数字错误的个数

例如

```js
Secret number:  "1807"
Friend's guess: "7810"
```

提示: `1` bull and `3` cows. (The bull is 8, the cows are 0, 1 and 7.)

写一个函数，根据传入的`secret`和`guess`返回提示，其中`A`代表`bulls`，`B`代表`cows`
例如上面的应该是返回`1A3B`

但是，注意，`secret`和`guess`可能有重复，例如

```js
Secret number:  "1123"
Friend's guess: "0111"
```

第一个`1`是`bulls`，第2和3个`1`是`cows`，但是你需要返回`1A1B`

、假设`secret`和`guess`只有数字，并且长度永远相等

### 思路

- https://my.oschina.net/Tsybius2014/blog/524452