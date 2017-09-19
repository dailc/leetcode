## Ransom-Note

## 说明

给定一个随机字符串以及一篇杂志，判断字符串是否能由杂志中的字符重构出来

- 杂志中每一个字符只能用一次

- 字符串与杂志中都只有小写字符

例如

```js
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

### 思路

- `O(N)`遍历

第一步记录magazine里的string，第二步做减法，最后判断是否还有剩余，有剩余则为`true`