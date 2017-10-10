## Integer-Replacement

## 说明

给一个正数`n`，可以做如下操作

- 如果`n`是偶数，用`n / 2`替代

- 如果是基数，可以用`n + 1`或`n - 1`替代

将`n`变为`1`，至少需要几次替换？

例如

```js
Input:
8

Output:
3

Explanation:
8 -> 4 -> 2 -> 1
```

```js
Input:
7

Output:
4

Explanation:
7 -> 8 -> 4 -> 2 -> 1
or
7 -> 6 -> 3 -> 2 -> 1
```

### 思路

小技巧判断合适加一，何时减一

http://www.cnblogs.com/grandyang/p/5873525.html