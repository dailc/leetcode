## Count-and-Say

## 说明
有一个序列`1, 11, 21, 1211, 111221, ...`
这个序列是这样的，以下规则：

```
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
```

即，
n=1时，输出字符串1，
n=2时，计算上次字符串中的数值个数，因为上次字符串中，有一个1，所以输出`11`
n=3时，上次的字符是11，有两个1，所以输出21
n=3时，上次字符串是21，有1个2和1个1，所以输出1211，以此类推，返回为n时应该输出的字符串。

### 思路

* 1.第一个想法就是这是典型的递归型问题
* 2.其实也可以用循环来做