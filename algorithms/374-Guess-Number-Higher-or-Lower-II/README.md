## Guess-Number-Higher-or-Lower

## 说明

一个猜谜游戏，如下规则

- A选一张`1 - n`的数字，B猜测选了哪一个数字

- 每次如果猜错了，会提示高了还是低了

- 但是，猜测一个数字`x`，如果错了，得支付`$x`，当猜中时才能赢得游戏

例如

```js
n = 10, I pick 8.

First round:  You guess 5, I tell you that it's higher. You pay $5.
Second round: You guess 7, I tell you that it's higher. You pay $7.
Third round:  You guess 9, I tell you that it's lower. You pay $9.

Game over. 8 is the number I picked.

You end up paying $5 + $7 + $9 = $21.
```

- `n >= 1`

- 算出需要支付多少钱才能保证赢？

### 思路

- 二分法只能算出最小步数，暂时放弃

- 要考虑可能选中的数字是`<= n`的任何数

- dp

http://www.cnblogs.com/grandyang/p/5677550.html