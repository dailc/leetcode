## Is-Subsequence

## 说明

判断`s`是否是`t`的子串

- 字符串中只有小写

- `t`是一个很长的字符串（`~= 500,000`），`s`是一个短字符串`<=100`

- `ace`是`abcde`的子串，但是`aec`不是（只允许消除字符，但不能打乱顺序）

例如

```js
s = "abc", t = "ahbgdc"

Return true.
```

```js
s = "axc", t = "ahbgdc"

Return false.
```

进一步

- 如果有`s1`, `s2`, `...`, `sk`(`k > 1B`)要判断，如何优化

### 思路

- 使用字符串的`indexOf`

http://www.cnblogs.com/angryorange/p/5899923.html
