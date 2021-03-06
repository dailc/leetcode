## Bitwise-AND-of-Numbers-Range

## 说明
给出一个范围`[m, n]`，`0 <= m <= n <= 2147483647`，
返回这个范围内的所有数的`逻辑&`后的值。例如:

```
[5, 7]
```
返回`4`(即`0100`)

### 思路
首先排除循环`&`的操作，太耗费时间了。

* 1.观察`[5, 7]`里面
    * `101`  `110` `111`
    * 结果为 `100`
    * 最后的数是该数字范围内所有的数的左边共同的部分
    * `[26, 30]`也同样
    * `11010`　`11011`　`11100`　`11101`　`11110`
    * 结果为`11000`
    * 所以方法为，一直右移，知道`m`和`n`相等，然后最后再乘以那个系数
