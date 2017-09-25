## Find-the-Difference

## 说明

给出两个字符串`s`和`t`，都只包含小写

其中`t`是由`s`随机洗牌后，再随机在某个位置上加上一个字符生成的

找到`t`中增加的字符

例如

```js
Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.
```

### 思路

- mp记录，然后消除，找到不符合的那一位即可